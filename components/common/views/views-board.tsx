'use client';

import { useIssuesStore } from '@/store/issues-store';
import { useMemo } from 'react';
import { useViewsStore } from '@/store/views-store';

export default function ViewsBoard() {
   const issues = useIssuesStore((s) => s.getAllIssues());
   const filterIssues = useViewsStore((s) => s.filterIssues);
   const { grouping } = useViewsStore((s) => s.currentConfig);

   const displayed = useMemo(() => filterIssues(issues), [issues, filterIssues]);

   if (grouping === 'assignee') {
      const groups = new Map<string, typeof displayed>();
      displayed.forEach((i) => {
         const key = i.assignee?.name ?? 'Unassigned';
         if (!groups.has(key)) groups.set(key, []);
         groups.get(key)!.push(i);
      });
      return (
         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 px-4 py-3">
            {[...groups.entries()].map(([name, items]) => (
               <div key={name} className="rounded-md border">
                  <div className="px-3 py-2 border-b flex items-center gap-2 text-sm">
                     <span className="font-medium">{name}</span>
                     <span className="ml-auto text-muted-foreground text-xs">{items.length}</span>
                  </div>
                  <div className="p-2 space-y-2 min-h-24">
                     {items.map((i) => (
                        <div key={i.id} className="rounded-md border bg-card p-2">
                           <div className="font-medium text-sm truncate">{i.title}</div>
                           <div className="text-xs text-muted-foreground">{i.identifier}</div>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      );
   }

   // default group by status
   const groups = new Map<string, typeof displayed>();
   displayed.forEach((i) => {
      const key = i.status.name;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(i);
   });

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 px-4 py-3">
         {[...groups.entries()].map(([name, items]) => (
            <div key={name} className="rounded-md border">
               <div className="px-3 py-2 border-b flex items-center gap-2 text-sm">
                  <span className="font-medium">{name}</span>
                  <span className="ml-auto text-muted-foreground text-xs">{items.length}</span>
               </div>
               <div className="p-2 space-y-2 min-h-24">
                  {items.map((i) => (
                     <div key={i.id} className="rounded-md border bg-card p-2">
                        <div className="font-medium text-sm truncate">{i.title}</div>
                        <div className="text-xs text-muted-foreground">{i.identifier}</div>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
}


