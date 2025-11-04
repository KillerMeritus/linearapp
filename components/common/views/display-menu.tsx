'use client';

import { useViewsStore } from '@/store/views-store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowDownAZ, ArrowUpZA } from 'lucide-react';

export function ViewsDisplayMenu() {
   const { ordering, sortDirection, props } = useViewsStore((s) => s.currentConfig);
   const apply = useViewsStore((s) => s.applyConfig);

   const toggleProp = (p: any) => {
      const set = new Set(props);
      set.has(p) ? set.delete(p) : set.add(p);
      apply({ props: Array.from(set) as any });
   };

   const pill = (key: any, label: string) => (
      <button
         key={key}
         onClick={() => toggleProp(key)}
         className={`px-3 h-8 rounded-md text-sm border ${props.includes(key) ? 'bg-muted/30 border-border' : 'bg-transparent border-transparent text-muted-foreground'} hover:bg-muted/40`}
      >
         {label}
      </button>
   );

   return (
      <div className="w-[340px] p-3 space-y-3">
         <div className="grid grid-cols-[120px_1fr_auto] items-center gap-3">
            <div className="text-sm text-muted-foreground">Ordering</div>
            <Select value={ordering} onValueChange={(v) => apply({ ordering: v as any })}>
               <SelectTrigger className="h-8">
                  <SelectValue />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="priority">Priority</SelectItem>
                  <SelectItem value="dueDate">Due date</SelectItem>
                  <SelectItem value="created">Created</SelectItem>
                  <SelectItem value="updated">Updated</SelectItem>
               </SelectContent>
            </Select>
            <Button size="icon" variant="ghost" onClick={() => apply({ sortDirection: sortDirection === 'asc' ? 'desc' : 'asc' })}>
               {sortDirection === 'desc' ? <ArrowUpZA className="size-4" /> : <ArrowDownAZ className="size-4" />}
            </Button>
         </div>

         <div>
            <div className="text-sm font-medium mb-2">Display properties</div>
            <div className="flex flex-wrap gap-2">
               {[
                  ['created', 'Created'],
                  ['updated', 'Updated'],
                  ['owner', 'Owner'],
               ].map(([k, label]) => pill(k, label))}
            </div>
         </div>
      </div>
   );
}


