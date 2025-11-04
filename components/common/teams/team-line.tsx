import { Team } from '@/data/teams';
import { MembersTooltip } from './members-tooltip';
import { ProjectsTooltip } from './projects-tooltip';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useTeamsStore } from '@/store/teams-store';

interface TeamLineProps {
   team: Team;
}

export default function TeamLine({ team }: TeamLineProps) {
   const renameTeam = useTeamsStore((s) => s.renameTeam);
   const archiveTeam = useTeamsStore((s) => s.archiveTeam);
   const unarchiveTeam = useTeamsStore((s) => s.unarchiveTeam);
   const [editing, setEditing] = useState(false);
   const [name, setName] = useState(team.name);

   const onRename = () => {
      const next = name.trim();
      if (next.length > 0 && next !== team.name) {
         renameTeam(team.id, next);
      }
      setEditing(false);
   };
   return (
      <div className="w-full flex items-center py-3 px-6 border-b hover:bg-sidebar/50 border-muted-foreground/5 text-sm">
         <div className="w-[70%] sm:w-[50%] md:w-[45%] lg:w-[40%] flex items-center gap-2">
            <div className="relative">
               <div className="inline-flex size-6 bg-muted/50 items-center justify-center rounded shrink-0">
                  <div className="text-sm">{team.icon}</div>
               </div>
            </div>
            <div className="flex flex-col items-start overflow-hidden">
              {editing ? (
                 <div className="flex items-center gap-2">
                    <Input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') onRename(); if (e.key === 'Escape') setEditing(false); }} size={8 as any} className="h-7 py-0" />
                    <Button size="xxs" variant="secondary" onClick={onRename}>Save</Button>
                 </div>
              ) : (
               <span className="font-medium truncate w-full">{team.name}</span>
              )}
            </div>
         </div>
         <div className="hidden sm:block sm:w-[20%] md:w-[15%] text-xs text-muted-foreground">
            {team.joined && (
               <Button variant="secondary" size="xxs" className="text-xs">
                  <Check className="size-4" />
                  Joined
               </Button>
            )}
         </div>
         <div className="hidden sm:block sm:w-[20%] md:w-[15%] text-xs text-muted-foreground">
            {team.id}
         </div>
         <div className="w-[30%] sm:w-[20%] md:w-[15%] flex">
            {team.members.length > 0 && <MembersTooltip members={team.members} />}
         </div>
         <div className="hidden sm:flex sm:w-[20%] md:w-[15%] text-xs text-muted-foreground">
            {team.projects.length > 0 && <ProjectsTooltip projects={team.projects} />}
         </div>
         <div className="ml-auto pl-2">
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost" className="h-6 w-6">
                     <MoreHorizontal className="h-4 w-4" />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setEditing(true)}>Rename</DropdownMenuItem>
                  {team.archived ? (
                     <DropdownMenuItem onClick={() => unarchiveTeam(team.id)}>Unarchive</DropdownMenuItem>
                  ) : (
                     <DropdownMenuItem onClick={() => archiveTeam(team.id)}>Archive</DropdownMenuItem>
                  )}
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </div>
   );
}
