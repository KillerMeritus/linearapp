'use client';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useParams } from 'next/navigation';
import { useTeamsStore } from '@/store/teams-store';

export default function HeaderNav() {
   const params = useParams<{ orgId?: string }>();
   const orgId = params?.orgId ?? 'default';
   const getTeamsByWorkspace = useTeamsStore((s) => s.getTeamsByWorkspace);
   const createTeam = useTeamsStore((s) => s.createTeam);
   const count = getTeamsByWorkspace(orgId).length;

   const [open, setOpen] = useState(false);
   const [name, setName] = useState('');
   const [id, setId] = useState('');
   const canSubmit = name.trim().length > 0 && id.trim().length > 0;

   const handleCreate = () => {
      if (!canSubmit) return;
      createTeam({ id: id.trim(), name: name.trim(), workspaceId: orgId });
      setOpen(false);
      setName('');
      setId('');
   };
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Teams</span>
               <span className="text-xs bg-accent rounded-md px-1.5 py-1">{count}</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
               <DialogTrigger asChild>
            <Button className="relative" size="xs" variant="secondary">
               <Plus className="size-4" />
               Add team
            </Button>
               </DialogTrigger>
               <DialogContent className="sm:max-w-[420px]">
                  <DialogHeader>
                     <DialogTitle>Create team</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-2">
                     <div className="grid gap-2">
                        <label className="text-sm">Team name</label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Design" />
                     </div>
                     <div className="grid gap-2">
                        <label className="text-sm">Identifier</label>
                        <Input value={id} onChange={(e) => setId(e.target.value.toUpperCase())} placeholder="DESIGN" />
                     </div>
                  </div>
                  <DialogFooter>
                     <Button size="sm" disabled={!canSubmit} onClick={handleCreate}>
                        Create
                     </Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>
         </div>
      </div>
   );
}
