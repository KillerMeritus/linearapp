import { create } from 'zustand';

export type ProjectsViewMode = 'list' | 'board' | 'timeline';
export type ProjectsColumns = 'status';
export type ProjectsRows = 'none';
export type ProjectsOrdering = 'manual' | 'name' | 'priority' | 'health';
export type ClosedProjects = 'all' | 'open-only' | 'closed-only';

export interface ProjectsDisplayState {
   mode: ProjectsViewMode;
   columns: ProjectsColumns;
   rows: ProjectsRows;
   ordering: ProjectsOrdering;
   showClosed: ClosedProjects;
   showEmptyColumns: boolean;
   displayProperties: Set<
      | 'milestones'
      | 'description'
      | 'priority'
      | 'status'
      | 'health'
      | 'teams'
      | 'lead'
      | 'members'
      | 'dependencies'
      | 'startDate'
      | 'targetDate'
      | 'created'
      | 'updated'
      | 'completed'
      | 'labels'
   >;

   setMode: (mode: ProjectsViewMode) => void;
   setColumns: (columns: ProjectsColumns) => void;
   setRows: (rows: ProjectsRows) => void;
   setOrdering: (ordering: ProjectsOrdering) => void;
   setShowClosed: (v: ClosedProjects) => void;
   toggleShowEmptyColumns: () => void;
   toggleProperty: (prop: ProjectsDisplayState['displayProperties'] extends Set<infer T> ? T : never) => void;
}

export const useProjectsDisplayStore = create<ProjectsDisplayState>((set, get) => ({
   mode: 'board',
   columns: 'status',
   rows: 'none',
   ordering: 'manual',
   showClosed: 'all',
   showEmptyColumns: true,
   displayProperties: new Set([
      'milestones',
      'description',
      'priority',
      'status',
      'health',
      'lead',
      'targetDate',
   ]),

   setMode: (mode) => set({ mode }),
   setColumns: (columns) => set({ columns }),
   setRows: (rows) => set({ rows }),
   setOrdering: (ordering) => set({ ordering }),
   setShowClosed: (showClosed) => set({ showClosed }),
   toggleShowEmptyColumns: () => set((s) => ({ showEmptyColumns: !s.showEmptyColumns })),
   toggleProperty: (prop) =>
      set((state) => {
         const next = new Set(state.displayProperties);
         if (next.has(prop as any)) {
            next.delete(prop as any);
         } else {
            next.add(prop as any);
         }
         return { displayProperties: next };
      }),
}));


