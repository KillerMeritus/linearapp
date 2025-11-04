'use client';

import { useViewsStore } from '@/store/views-store';
import { status } from '@/data/status';
import { users } from '@/data/users';
import { priorities } from '@/data/priorities';
import { labels } from '@/data/labels';
import { projects } from '@/data/projects';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Filter, Calendar as CalendarIcon, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

export function FiltersBar() {
   const config = useViewsStore((s) => s.currentConfig);
   const applyConfig = useViewsStore((s) => s.applyConfig);

   const toggleMulti = (key: keyof typeof config.filters, id: string) => {
      const set = new Set(config.filters[key] ?? []);
      set.has(id) ? set.delete(id) : set.add(id);
      applyConfig({ filters: { [key]: Array.from(set) } as any });
   };

   return (
      <div className="w-full flex items-center gap-2 px-6 py-2 border-b bg-container/60">
         <div className="flex-1 max-w-sm">
            <Input
               placeholder="Search title or ID..."
               value={config.filters.search ?? ''}
               onChange={(e) => applyConfig({ filters: { search: e.target.value } })}
               className="h-8"
            />
         </div>

         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button size="xs" variant="secondary" className="gap-1"><Filter className="size-4" /> Filters</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
               <DropdownMenuLabel>Status</DropdownMenuLabel>
               {status.map((s) => (
                  <DropdownMenuCheckboxItem key={s.id} checked={config.filters.status?.includes(s.id) ?? false} onCheckedChange={() => toggleMulti('status', s.id)}>
                     {s.name}
                  </DropdownMenuCheckboxItem>
               ))}
               <DropdownMenuSeparator />
               <DropdownMenuLabel>Assignee</DropdownMenuLabel>
               <DropdownMenuCheckboxItem checked={config.filters.assignee?.includes('unassigned') ?? false} onCheckedChange={() => toggleMulti('assignee', 'unassigned')}>
                  Unassigned
               </DropdownMenuCheckboxItem>
               {users.map((u) => (
                  <DropdownMenuCheckboxItem key={u.id} checked={config.filters.assignee?.includes(u.id) ?? false} onCheckedChange={() => toggleMulti('assignee', u.id)}>
                     {u.name}
                  </DropdownMenuCheckboxItem>
               ))}
               <DropdownMenuSeparator />
               <DropdownMenuLabel>Priority</DropdownMenuLabel>
               {priorities.map((p) => (
                  <DropdownMenuCheckboxItem key={p.id} checked={config.filters.priority?.includes(p.id) ?? false} onCheckedChange={() => toggleMulti('priority', p.id)}>
                     {p.name}
                  </DropdownMenuCheckboxItem>
               ))}
               <DropdownMenuSeparator />
               <DropdownMenuLabel>Labels</DropdownMenuLabel>
               {labels.map((l) => (
                  <DropdownMenuCheckboxItem key={l.id} checked={config.filters.labels?.includes(l.id) ?? false} onCheckedChange={() => toggleMulti('labels', l.id)}>
                     {l.name}
                  </DropdownMenuCheckboxItem>
               ))}
               <DropdownMenuSeparator />
               <DropdownMenuLabel>Project</DropdownMenuLabel>
               {projects.map((p) => (
                  <DropdownMenuCheckboxItem key={p.id} checked={config.filters.project?.includes(p.id) ?? false} onCheckedChange={() => toggleMulti('project', p.id)}>
                     {p.name}
                  </DropdownMenuCheckboxItem>
               ))}
            </DropdownMenuContent>
         </DropdownMenu>

         <Popover>
            <PopoverTrigger asChild>
               <Button size="xs" variant="secondary" className="gap-1">
                  <CalendarIcon className="size-4" />
                  <span>
                     {config.filters.date?.from || config.filters.date?.to
                        ? `${config.filters.date?.from ?? '—'} → ${config.filters.date?.to ?? '—'}`
                        : 'Date range'}
                  </span>
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3" align="start">
               <div className="flex items-center gap-3">
                  <div className="space-y-2">
                     <div className="text-xs text-muted-foreground">From</div>
                     <Calendar
                        mode="single"
                        selected={config.filters.date?.from ? new Date(config.filters.date.from) : undefined}
                        onSelect={(d) => applyConfig({ filters: { date: { ...config.filters.date, from: d ? d.toISOString().slice(0, 10) : undefined } } })}
                     />
                  </div>
                  <div className="space-y-2">
                     <div className="text-xs text-muted-foreground">To</div>
                     <Calendar
                        mode="single"
                        selected={config.filters.date?.to ? new Date(config.filters.date.to) : undefined}
                        onSelect={(d) => applyConfig({ filters: { date: { ...config.filters.date, to: d ? d.toISOString().slice(0, 10) : undefined } } })}
                     />
                  </div>
               </div>
               <div className="pt-2">
                  <Button size="xs" variant="ghost" className="gap-1" onClick={() => applyConfig({ filters: { date: {} } })}>
                     <X className="size-4" /> Clear
                  </Button>
               </div>
            </PopoverContent>
         </Popover>
      </div>
   );
}


