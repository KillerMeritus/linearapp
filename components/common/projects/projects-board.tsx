'use client';

import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useProjectsStore } from '@/store/projects-store';
import { useProjectsFilterStore } from '@/store/projects-filter-store';
import { useProjectsDisplayStore } from '@/store/projects-display-store';
import { status as statusList } from '@/data/status';

export default function ProjectsBoard() {
   const { filters } = useProjectsFilterStore();
   const showClosed = useProjectsDisplayStore((s) => s.showClosed);
   const params = useParams<{ orgId?: string }>();
   const router = useRouter();
   const orgId = params?.orgId ?? 'default';
   const projects = useProjectsStore((s) => s.projects);

   const displayed = useMemo(() => {
      let list = projects.filter((p) => (p.workspaceId === undefined || p.workspaceId === orgId));
      if (showClosed === 'open-only') list = list.filter((p) => !p.archived);
      else if (showClosed === 'closed-only') list = list.filter((p) => p.archived);

      if (filters.health.length > 0) {
         const hs = new Set(filters.health);
         list = list.filter((p) => hs.has(p.health.id));
      }
      if (filters.priority.length > 0) {
         const ps = new Set(filters.priority);
         list = list.filter((p) => ps.has(p.priority.id));
      }
      return list;
   }, [projects, orgId, showClosed, filters]);

   const updateProject = useProjectsStore((s) => s.updateProject);

   // build columns in the order of statusList
   const columns = useMemo(() => {
      return statusList.map((st) => ({
         status: st,
         items: displayed.filter((p) => p.status.id === st.id),
      }));
   }, [displayed]);

   const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetStatusId: string) => {
      e.preventDefault();
      const projectId = e.dataTransfer.getData('text/project-id');
      if (!projectId) return;
      const statusObj = statusList.find((s) => s.id === targetStatusId);
      if (!statusObj) return;
      updateProject(projectId, { status: statusObj });
   };

   const handleProjectClick = (projectId: string) => {
      router.push(`/${orgId}/projects/${projectId}`);
   };

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 px-4 py-3">
         {columns.map((col) => (
            <div key={col.status.id} className="rounded-md border"
                 onDragOver={(e) => e.preventDefault()}
                 onDrop={(e) => handleDrop(e, col.status.id)}>
               <div className="px-3 py-2 border-b flex items-center gap-2 text-sm">
                  <span className="font-medium">{col.status.name}</span>
                  <span className="ml-auto text-muted-foreground text-xs">{col.items.length}</span>
               </div>
               <div className="p-2 space-y-2 min-h-24">
                  {col.items.map((p) => (
                     <div
                        key={p.id}
                        className="rounded-md border bg-card p-2 cursor-pointer hover:bg-muted/50 transition-colors"
                        draggable
                        onDragStart={(e) => {
                           e.dataTransfer.setData('text/project-id', p.id);
                           e.dataTransfer.effectAllowed = 'move';
                        }}
                        onClick={() => handleProjectClick(p.id)}
                     >
                        <div className="flex items-center gap-2">
                           <div className="inline-flex size-6 bg-muted/50 items-center justify-center rounded shrink-0">
                              <p.icon className="size-4" />
                           </div>
                           <div className="font-medium text-sm truncate">{p.name}</div>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                           <span className="inline-flex items-center gap-1">
                              <span className="size-2 rounded-full" style={{ backgroundColor: p.health.color }} />
                              {p.health.name}
                           </span>
                           <span>•</span>
                           <span>{p.priority.name}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
}


