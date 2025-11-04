'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProjectsDisplayStore } from '@/store/projects-display-store';
import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsDisplay() {
   const mode = useProjectsDisplayStore((s) => s.mode);
   const setMode = useProjectsDisplayStore((s) => s.setMode);
   const ordering = useProjectsDisplayStore((s) => s.ordering);
   const setOrdering = useProjectsDisplayStore((s) => s.setOrdering);
   const showClosed = useProjectsDisplayStore((s) => s.showClosed);
   const setShowClosed = useProjectsDisplayStore((s) => s.setShowClosed);
   const displayProperties = useProjectsDisplayStore((s) => s.displayProperties);
   const toggleProperty = useProjectsDisplayStore((s) => s.toggleProperty);
   const [open, setOpen] = useState(false);

   const items: Array<{ key: any; label: string; disabled?: boolean }> = [
      { key: 'milestones', label: 'Milestones', disabled: true },
      { key: 'priority', label: 'Priority' },
      { key: 'status', label: 'Status' },
      { key: 'health', label: 'Health' },
      { key: 'teams', label: 'Teams', disabled: true },
      { key: 'lead', label: 'Lead' },
      { key: 'members', label: 'Members', disabled: true },
      { key: 'dependencies', label: 'Dependencies', disabled: true },
      { key: 'startDate', label: 'Start date', disabled: true },
      { key: 'targetDate', label: 'Target date' },
      { key: 'created', label: 'Created', disabled: true },
      { key: 'updated', label: 'Updated', disabled: true },
      { key: 'completed', label: 'Completed', disabled: true },
      { key: 'labels', label: 'Labels', disabled: true },
   ];

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button className="relative" size="xs" variant="secondary">
               <SlidersHorizontal className="size-4" />
               <span className="hidden sm:inline ml-1">Display</span>
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[340px] p-3" align="end">
            <Tabs value={mode} onValueChange={(v) => setMode(v as any)}>
               <TabsList>
                  <TabsTrigger value="list">List</TabsTrigger>
                  <TabsTrigger value="board">Board</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
               </TabsList>
               <TabsContent value={mode} className="space-y-3 mt-2">
                  <div className="grid grid-cols-[140px_1fr] items-center gap-2 text-sm">
                     <div className="text-muted-foreground">Grouping</div>
                     <Select value={'none'} onValueChange={() => {}}>
                        <SelectTrigger className="h-8"><SelectValue placeholder="No grouping" /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="none">No grouping</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] items-center gap-2 text-sm">
                     <div className="text-muted-foreground">Ordering</div>
                     <Select value={ordering} onValueChange={(v) => setOrdering(v as any)}>
                        <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="manual">Manual</SelectItem>
                           <SelectItem value="name">Name</SelectItem>
                           <SelectItem value="priority">Priority</SelectItem>
                           <SelectItem value="health">Health</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] items-center gap-2 text-sm">
                     <div className="text-muted-foreground">Show closed projects</div>
                     <Select value={showClosed} onValueChange={(v) => setShowClosed(v as any)}>
                        <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="all">All</SelectItem>
                           <SelectItem value="open-only">Open only</SelectItem>
                           <SelectItem value="closed-only">Closed only</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="pt-2">
                     <div className="text-sm font-medium mb-2">List options</div>
                     <div className="text-sm text-muted-foreground mb-2">Display properties</div>
                     <div className="flex flex-wrap gap-2">
                        {items.map((it) => (
                           <button
                              key={it.key}
                              onClick={() => !it.disabled && toggleProperty(it.key)}
                              disabled={!!it.disabled}
                              className={`px-3 h-8 rounded-md text-sm border ${
                                 displayProperties.has(it.key)
                                    ? 'bg-muted/30 border-border'
                                    : 'bg-transparent border-transparent text-muted-foreground'
                              } ${it.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-muted/40'}`}
                           >
                              {it.label}
                           </button>
                        ))}
                     </div>
                  </div>
               </TabsContent>
            </Tabs>
         </PopoverContent>
      </Popover>
   );
}


