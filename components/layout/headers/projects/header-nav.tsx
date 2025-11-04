'use client';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Plus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useProjectsStore } from '@/store/projects-store';
import { useState } from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import CreateProjectDialog from '@/components/common/projects/create-project-dialog';

export default function HeaderNav() {
   const params = useParams<{ orgId?: string }>();
   const orgId = params?.orgId ?? 'default';
   const projects = useProjectsStore((s) => s.projects);
   const count = projects.filter((p) => (p.workspaceId === undefined || p.workspaceId === orgId) && !p.archived).length;

   const [open, setOpen] = useState(false);
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Projects</span>
               <span className="text-xs bg-accent rounded-md px-1.5 py-1">{count}</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
               <DialogTrigger asChild>
            <Button className="relative" size="xs" variant="secondary">
               <Plus className="size-4" />
               <span className="hidden sm:inline ml-1">Create project</span>
            </Button>
               </DialogTrigger>
               <CreateProjectDialog orgId={orgId} open={open} onOpenChange={setOpen} />
            </Dialog>
         </div>
      </div>
   );
}
