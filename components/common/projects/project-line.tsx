import { Project } from '@/data/projects';
import { HealthPopover } from './health-popover';
import { PrioritySelector } from './priority-selector';
import { LeadSelector } from './lead-selector';
import { StatusWithPercent } from './status-with-percent';
import { DatePicker } from './date-picker';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useProjectsStore } from '@/store/projects-store';
import { useProjectsDisplayStore } from '@/store/projects-display-store';
import { useParams, useRouter } from 'next/navigation';

interface ProjectLineProps {
   project: Project;
}

export default function ProjectLine({ project }: ProjectLineProps) {
   const params = useParams<{ orgId?: string }>();
   const router = useRouter();
   const renameProject = useProjectsStore((s) => s.renameProject);
   const archiveProject = useProjectsStore((s) => s.archiveProject);
   const unarchiveProject = useProjectsStore((s) => s.unarchiveProject);
   const deleteProject = useProjectsStore((s) => s.deleteProject);
   const displayProps = useProjectsDisplayStore((s) => s.displayProperties);
   const [editing, setEditing] = useState(false);
   const [name, setName] = useState(project.name);

   const onRename = () => {
      const next = name.trim();
      if (next.length > 0 && next !== project.name) {
         renameProject(project.id, next);
      }
      setEditing(false);
   };

   const handleProjectClick = () => {
      if (!editing) {
         router.push(`/${params?.orgId || 'piedpiper'}/projects/${project.id}`);
      }
   };

   return (
      <div 
         className="w-full flex items-center py-3 px-6 border-b hover:bg-sidebar/50 border-muted-foreground/5 text-sm cursor-pointer"
         onClick={handleProjectClick}
      >
         <div className="w-[60%] sm:w-[70%] xl:w-[46%] flex items-center gap-2">
            <div className="relative">
               <div className="inline-flex size-6 bg-muted/50 items-center justify-center rounded shrink-0">
                  <project.icon className="size-4" />
               </div>
            </div>
            <div className="flex flex-col items-start overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {editing ? (
                 <div className="flex items-center gap-2">
                    <Input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onRename(); if (e.key === 'Escape') setEditing(false); }} size={8 as any} className="h-7 py-0" />
                    <Button size="xxs" variant="secondary" onClick={onRename}>Save</Button>
                 </div>
              ) : (
               <span className="font-medium truncate w-full">{project.name}</span>
              )}
            </div>
         </div>

        {displayProps.has('health') && (
          <div className="w-[20%] sm:w-[10%] xl:w-[13%]">
             <HealthPopover project={project} />
          </div>
        )}

        {displayProps.has('priority') && (
          <div className="hidden w-[10%] sm:block">
             <PrioritySelector priority={project.priority} />
          </div>
        )}
        {displayProps.has('lead') && (
          <div className="hidden xl:block xl:w-[13%]">
             <LeadSelector lead={project.lead} />
          </div>
        )}

        {displayProps.has('targetDate') && (
          <div className="hidden xl:block xl:w-[13%]">
             <DatePicker date={project.startDate ? new Date(project.startDate) : undefined} />
          </div>
        )}

        {displayProps.has('status') && (
          <div className="w-[20%] sm:w-[10%]">
             <StatusWithPercent status={project.status} percentComplete={project.percentComplete} />
          </div>
        )}
         <div className="ml-auto pl-2" onClick={(e) => e.stopPropagation()}>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost" className="h-6 w-6">
                     <MoreHorizontal className="h-4 w-4" />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setEditing(true)}>Rename</DropdownMenuItem>
                  {project.archived ? (
                     <DropdownMenuItem onClick={() => unarchiveProject(project.id)}>Unarchive</DropdownMenuItem>
                  ) : (
                     <DropdownMenuItem onClick={() => archiveProject(project.id)}>Archive</DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => deleteProject(project.id)}>Delete</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   );
}
