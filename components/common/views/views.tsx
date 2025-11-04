'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { ViewsDisplayMenu } from './display-menu';
import { useViewsStore } from '@/store/views-store';
import { FiltersBar } from './filters-bar';
import { SavedViewsMenu } from './saved-views-menu';
import ViewsList from './views-list';
import ViewsBoard from './views-board';

export default function Views() {
   const { layout, grouping, ordering } = useViewsStore((s) => s.currentConfig);
   const applyConfig = useViewsStore((s) => s.applyConfig);

   return (
      <div className="w-full">
         <div className="w-full flex items-center justify-between px-6 py-2 gap-4">
            <SavedViewsMenu />
            <Tabs value={layout} onValueChange={(v) => applyConfig({ layout: v as any })}>
               <TabsList>
                  <TabsTrigger value="list">List</TabsTrigger>
                  <TabsTrigger value="board">Board</TabsTrigger>
               </TabsList>
            </Tabs>
            <div className="ml-auto flex items-center gap-2">
               <Popover>
                  <PopoverTrigger asChild>
                     <Button size="xs" variant="secondary" className="gap-1">
                        <SlidersHorizontal className="size-4" /> Display
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" align="end" sideOffset={8} className="p-0 w-[360px] z-[100]">
                     <ViewsDisplayMenu />
                  </PopoverContent>
               </Popover>
               <Select value={grouping} onValueChange={(v) => applyConfig({ grouping: v as any })}>
                  <SelectTrigger className="h-8 w-[140px]"><SelectValue placeholder="Grouping" /></SelectTrigger>
                  <SelectContent>
                     <SelectItem value="none">No grouping</SelectItem>
                     <SelectItem value="status">Status</SelectItem>
                     <SelectItem value="assignee">Assignee</SelectItem>
                  </SelectContent>
               </Select>
               <Select value={ordering} onValueChange={(v) => applyConfig({ ordering: v as any })}>
                  <SelectTrigger className="h-8 w-[140px]"><SelectValue placeholder="Ordering" /></SelectTrigger>
                  <SelectContent>
                     <SelectItem value="manual">Manual</SelectItem>
                     <SelectItem value="priority">Priority</SelectItem>
                     <SelectItem value="dueDate">Due date</SelectItem>
                     <SelectItem value="created">Created</SelectItem>
                     <SelectItem value="updated">Updated</SelectItem>
                  </SelectContent>
               </Select>
            </div>
         </div>
         <FiltersBar />
         {layout === 'board' ? <ViewsBoard /> : <ViewsList />}
      </div>
   );
}


