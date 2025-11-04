'use client';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useProjectsStore } from '@/store/projects-store';
import { users } from '@/data/users';
import { priorities } from '@/data/priorities';
import { labels as globalLabels } from '@/data/labels';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button as UIButton } from '@/components/ui/button';
import { Calendar as CalendarIcon, Flag, Link2, Tags, User as UserIcon, Users as UsersIcon, Plus as PlusIcon } from 'lucide-react';
import { PrioritySelector } from '@/components/common/projects/priority-selector';
import { LeadSelector } from '@/components/common/projects/lead-selector';
import { v4 as uuidv4 } from 'uuid';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

type Props = {
   orgId: string;
   open: boolean;
   onOpenChange: (open: boolean) => void;
};

export default function CreateProjectDialog({ orgId, open, onOpenChange }: Props) {
   const createProject = useProjectsStore((s) => s.createProject);

   const [name, setName] = useState('');
   const [summary, setSummary] = useState('');
   const [description, setDescription] = useState('');
   const [priorityId, setPriorityId] = useState(priorities[1].id);
   const [leadId, setLeadId] = useState(users[0].id);
   const [startDate, setStartDate] = useState<string>('');
   const [targetDate, setTargetDate] = useState<string>('');
   const [memberIds, setMemberIds] = useState<string[]>([]);
   const [labelIds, setLabelIds] = useState<string[]>([]);
   const [milestones, setMilestones] = useState<{ id: string; title: string; dueDate?: string }[]>([]);

   const canSubmit = name.trim().length > 0;

   const handleCreate = () => {
      if (!canSubmit) return;
      createProject({
         name: name.trim(),
         workspaceId: orgId,
         description: description.trim() || undefined,
         priorityId,
         leadId,
         startDate: startDate || undefined,
         targetDate: targetDate || undefined,
         memberIds: memberIds.length ? memberIds : undefined,
         labelIds: labelIds.length ? labelIds : undefined,
         milestones: milestones.length ? milestones : undefined,
      });
      onOpenChange(false);
      setName('');
      setSummary('');
      setDescription('');
      setStartDate('');
      setTargetDate('');
      setMemberIds([]);
      setLabelIds([]);
      setMilestones([]);
   };

   return (
      <Dialog open={open} onOpenChange={onOpenChange}>
         <DialogContent className="sm:max-w-[760px]">
            <DialogHeader>
               <DialogTitle className="text-sm font-medium text-muted-foreground">New project</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-2">
               <div className="border rounded-md bg-muted/10 p-3 space-y-2">
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project name" className="h-12 text-[20px] border-none shadow-none focus-visible:ring-0 bg-transparent" />
                  <Input value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Add a short summary..." className="text-[12px] text-muted-foreground border-none shadow-none focus-visible:ring-0 bg-transparent" />
               </div>

               <div className="flex flex-wrap gap-2">
                  <UIButton size="xs" variant="secondary" className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20">
                     <Flag className="size-4" /> Backlog
                  </UIButton>
                  <PrioritySelector
                     buttonText={`Priority: ${(priorities.find((p) => p.id === priorityId) ?? priorities[1]).name}`}
                     priority={priorities.find((p) => p.id === priorityId) ?? priorities[1]}
                     onPriorityChange={setPriorityId}
                  />
                  <div className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20 rounded-md inline-flex items-center">
                     <UserIcon className="size-4" />
                     <LeadSelector lead={users.find((u) => u.id === leadId) ?? users[0]} onLeadChange={setLeadId} />
                  </div>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <UIButton size="xs" variant="secondary" className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20">
                           <UsersIcon className="size-4" /> Members
                        </UIButton>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-56">
                        {users.map((u) => (
                           <DropdownMenuCheckboxItem key={u.id} checked={memberIds.includes(u.id)} onCheckedChange={(checked) => {
                              setMemberIds((prev) => (checked ? [...prev, u.id] : prev.filter((id) => id !== u.id)));
                           }}>
                              {u.name}
                           </DropdownMenuCheckboxItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <Popover>
                     <PopoverTrigger asChild>
                        <UIButton size="xs" variant="secondary" className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20">
                           <CalendarIcon className="size-4" />
                           <span className="text-muted-foreground">
                              {startDate ? format(new Date(startDate), 'MMM dd, yyyy') : 'Start'}
                           </span>
                        </UIButton>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                           mode="single"
                           selected={startDate ? new Date(startDate) : undefined}
                           onSelect={(d) => {
                              if (d) setStartDate(d.toISOString().slice(0, 10));
                           }}
                           initialFocus
                        />
                     </PopoverContent>
                  </Popover>
                  <Popover>
                     <PopoverTrigger asChild>
                        <UIButton size="xs" variant="secondary" className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20">
                           <CalendarIcon className="size-4" />
                           <span className="text-muted-foreground">
                              {targetDate ? format(new Date(targetDate), 'MMM dd, yyyy') : 'Target'}
                           </span>
                        </UIButton>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                           mode="single"
                           selected={targetDate ? new Date(targetDate) : undefined}
                           onSelect={(d) => {
                              if (d) setTargetDate(d.toISOString().slice(0, 10));
                           }}
                           initialFocus
                        />
                     </PopoverContent>
                  </Popover>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <UIButton size="xs" variant="secondary" className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20">
                           <Tags className="size-4" /> Labels
                        </UIButton>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className="w-56">
                        {globalLabels.map((l) => (
                           <DropdownMenuCheckboxItem key={l.id} checked={labelIds.includes(l.id)} onCheckedChange={(checked) => {
                              setLabelIds((prev) => (checked ? [...prev, l.id] : prev.filter((id) => id !== l.id)));
                           }}>
                              {l.name}
                           </DropdownMenuCheckboxItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <UIButton size="xs" variant="secondary" className="gap-1 h-7 px-2 text-xs border border-border bg-muted/20">
                     <Link2 className="size-4" /> Dependencies
                  </UIButton>
               </div>

               <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write a description, a project brief, or collect ideas..." className="min-h-[120px] text-[13px]" />

               <div className="border rounded-md bg-muted/10">
                  <div className="flex items-center justify-between px-3 py-2 text-sm">
                     <span className="text-[13px]">Milestones</span>
                     <UIButton
                        size="icon"
                        variant="ghost"
                        onClick={() => setMilestones((prev) => [...prev, { id: uuidv4(), title: '', dueDate: undefined }])}
                     >
                        <PlusIcon className="size-4" />
                     </UIButton>
                  </div>
                  {milestones.length > 0 && (
                     <div className="px-3 pb-3 space-y-2">
                        {milestones.map((m, idx) => (
                           <div key={m.id} className="flex items-center gap-2">
                              <Input
                                 value={m.title}
                                 onChange={(e) => {
                                    const val = e.target.value;
                                    setMilestones((prev) => prev.map((x, i) => (i === idx ? { ...x, title: val } : x)));
                                 }}
                                 placeholder={`Milestone ${idx + 1} title`}
                                 className="h-8 text-sm"
                              />
                              <Input
                                 type="date"
                                 value={m.dueDate ?? ''}
                                 onChange={(e) => {
                                    const val = e.target.value;
                                    setMilestones((prev) => prev.map((x, i) => (i === idx ? { ...x, dueDate: val } : x)));
                                 }}
                                 className="h-8 text-sm w-40"
                              />
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
            <DialogFooter className="gap-2">
               <Button size="sm" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
               <Button size="sm" disabled={!canSubmit} onClick={handleCreate}>Create project</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}


