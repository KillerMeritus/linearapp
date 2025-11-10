import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Issue } from '@/data/issues';

export type ViewsLayout = 'list' | 'board';
export type ViewsGrouping = 'none' | 'status' | 'assignee';
export type ViewsOrdering = 'manual' | 'name' | 'owner' | 'priority' | 'dueDate' | 'created' | 'updated';
export type ViewScope = 'personal' | 'shared' | 'team';

export interface ViewsFilters {
   status?: string[];
   assignee?: string[]; // user ids or 'unassigned'
   priority?: string[]; // priority ids
   labels?: string[]; // label ids
   project?: string[]; // project ids
   date?: { from?: string; to?: string }; // ISO yyyy-mm-dd
   search?: string;
}

export interface ViewsConfig {
   layout: ViewsLayout;
   grouping: ViewsGrouping;
   ordering: ViewsOrdering;
   sortDirection?: 'asc' | 'desc';
   props: Array<
      | 'milestones'
      | 'description'
      | 'priority'
      | 'status'
      | 'health'
      | 'teams'
      | 'lead'
      | 'members'
      | 'owner'
      | 'dependencies'
      | 'startDate'
      | 'targetDate'
      | 'created'
      | 'updated'
      | 'completed'
      | 'labels'
   >;
   filters: ViewsFilters;
}

export interface SavedView {
   id: string;
   name: string;
   scope: ViewScope;
   teamId?: string;
   kind?: 'issues' | 'projects';
   config: ViewsConfig;
   createdAt: string;
   updatedAt: string;
}

interface ViewsState {
   currentConfig: ViewsConfig;
   views: SavedView[];
   favouriteIds: string[];
   recentIds: string[];
   defaultViewByTeamId: Record<string, string>;

   applyConfig: (config: Partial<ViewsConfig>) => void;
   saveView: (view: Omit<SavedView, 'id' | 'updatedAt' | 'createdAt'>) => string;
   updateView: (id: string, patch: Partial<Omit<SavedView, 'id'>>) => void;
   deleteView: (id: string) => void;
   selectView: (id: string) => void;
   toggleFavourite: (id: string) => void;
   setDefaultForTeam: (teamId: string, viewId: string) => void;

   // Helpers
   filterIssues: (issues: Issue[]) => Issue[];
   orderIssues: (issues: Issue[]) => Issue[];
}

const defaultConfig: ViewsConfig = {
   layout: 'list',
   grouping: 'none',
   ordering: 'name',
   sortDirection: 'asc',
   props: ['priority', 'status', 'targetDate', 'created'],
   filters: {},
};

export const useViewsStore = create<ViewsState>()(
   persist(
      (set, get) => ({
         currentConfig: defaultConfig,
         views: [
            {
               id: 'view-pp-active',
               name: 'Pied Piper – Active Issues',
               scope: 'team',
               teamId: 'PIEDPIPER',
               kind: 'issues',
               config: {
                  layout: 'board',
                  grouping: 'status',
                  ordering: 'priority',
                  sortDirection: 'asc',
                  props: ['priority','status','targetDate','created'],
                  filters: { search: 'linear.app' },
               },
               createdAt: '2025-02-10T00:00:00.000Z',
               updatedAt: '2025-02-10T00:00:00.000Z',
            },
            {
               id: 'view-pp-vivek',
               name: 'Pied Piper – Vivek focus',
               scope: 'team',
               teamId: 'PIEDPIPER',
               kind: 'issues',
               config: {
                  layout: 'list',
                  grouping: 'none',
                  ordering: 'dueDate',
                  sortDirection: 'asc',
                  props: ['priority','status','targetDate','created'],
                  filters: { assignee: ['vivek'] },
               },
               createdAt: '2025-02-10T00:00:00.000Z',
               updatedAt: '2025-02-10T00:00:00.000Z',
            },
            {
               id: 'view-pp-team',
               name: 'Pied Piper – All team',
               scope: 'team',
               teamId: 'PIEDPIPER',
               kind: 'issues',
               config: {
                  layout: 'list',
                  grouping: 'assignee',
                  ordering: 'owner',
                  sortDirection: 'asc',
                  props: ['priority','status','targetDate','created'],
                  filters: { assignee: ['vivek','atharva','aman','ashdeep'] },
               },
               createdAt: '2025-02-10T00:00:00.000Z',
               updatedAt: '2025-02-10T00:00:00.000Z',
            },
         ],
         favouriteIds: [],
         recentIds: [],
         defaultViewByTeamId: {},

         applyConfig: (config) =>
            set((s) => ({ currentConfig: { ...s.currentConfig, ...config, filters: { ...s.currentConfig.filters, ...(config.filters ?? {}) } } })),

         saveView: (view) => {
            const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
            const now = new Date().toISOString();
            const record: SavedView = { id, kind: 'issues', ...view, createdAt: now, updatedAt: now };
            set((s) => ({ views: [record, ...s.views] }));
            return id;
         },

         updateView: (id, patch) =>
            set((s) => ({
               views: s.views.map((v) => (v.id === id ? { ...v, ...patch, updatedAt: new Date().toISOString() } : v)),
            })),

         deleteView: (id) => set((s) => ({ views: s.views.filter((v) => v.id !== id), favouriteIds: s.favouriteIds.filter((x) => x !== id) })),

         selectView: (id) => {
            const v = get().views.find((x) => x.id === id);
            if (v) {
               set((s) => ({ currentConfig: v.config, recentIds: [id, ...s.recentIds.filter((x) => x !== id)].slice(0, 10) }));
            }
         },

         toggleFavourite: (id) =>
            set((s) => ({ favouriteIds: s.favouriteIds.includes(id) ? s.favouriteIds.filter((x) => x !== id) : [id, ...s.favouriteIds] })),

         setDefaultForTeam: (teamId, viewId) => set((s) => ({ defaultViewByTeamId: { ...s.defaultViewByTeamId, [teamId]: viewId } })),

         filterIssues: (issues) => {
            const { filters } = get().currentConfig;
            let list = issues.slice();
            if (filters.status?.length) {
               const setS = new Set(filters.status);
               list = list.filter((i) => setS.has(i.status.id));
            }
            if (filters.assignee?.length) {
               const setA = new Set(filters.assignee);
               list = list.filter((i) => (i.assignee ? setA.has(i.assignee.id) : setA.has('unassigned')));
            }
            if (filters.priority?.length) {
               const setP = new Set(filters.priority);
               list = list.filter((i) => setP.has(i.priority.id));
            }
            if (filters.labels?.length) {
               const setL = new Set(filters.labels);
               list = list.filter((i) => i.labels.some((l) => setL.has(l.id)));
            }
            if (filters.project?.length) {
               const setPr = new Set(filters.project);
               list = list.filter((i) => (i.project ? setPr.has(i.project.id) : false));
            }
            if (filters.date?.from || filters.date?.to) {
               const from = filters.date?.from ? new Date(filters.date.from) : undefined;
               const to = filters.date?.to ? new Date(filters.date.to) : undefined;
               list = list.filter((i) => {
                  const d = i.dueDate ? new Date(i.dueDate) : undefined;
                  if (!d) return false;
                  if (from && d < from) return false;
                  if (to && d > to) return false;
                  return true;
               });
            }
            if (filters.search && filters.search.trim()) {
               const q = filters.search.toLowerCase();
               list = list.filter((i) => i.title.toLowerCase().includes(q) || i.identifier.toLowerCase().includes(q));
            }
            return list;
         },

         orderIssues: (issues) => {
            const { ordering, sortDirection = 'asc' } = get().currentConfig;
            const arr = issues.slice();
            const dir = sortDirection === 'desc' ? -1 : 1;
            const cmp = (x: number) => x * dir;
            const by = (fn: (a: typeof arr[number], b: typeof arr[number]) => number) => arr.sort((a,b)=>cmp(fn(a,b)));
            switch (ordering) {
               case 'name':
                  return by((a,b)=>a.title.localeCompare(b.title));
               case 'owner':
                  return by((a,b)=> (a.assignee?.name ?? 'ZZZ').localeCompare(b.assignee?.name ?? 'ZZZ'));
               case 'priority':
                  return by((a,b)=> a.priority.id.localeCompare(b.priority.id));
               case 'dueDate':
                  return by((a,b)=> (a.dueDate ?? '').localeCompare(b.dueDate ?? ''));
               case 'created':
                  return by((a,b)=> a.createdAt.localeCompare(b.createdAt));
               case 'updated':
                  return arr; // mock doesn't track updated; leave as-is
               default:
                  return arr;
            }
         },
      }),
      {
         name: 'views-store',
         partialize: (s) => ({
            views: s.views,
            favouriteIds: s.favouriteIds,
            defaultViewByTeamId: s.defaultViewByTeamId,
            recentIds: s.recentIds,
            currentConfig: s.currentConfig,
         }),
      }
   )
);


