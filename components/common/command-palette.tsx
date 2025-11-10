'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
   Command,
   CommandDialog,
   CommandInput,
   CommandList,
   CommandEmpty,
   CommandGroup,
   CommandItem,
   CommandSeparator,
} from '@/components/ui/command';
import {
   Search,
   Inbox,
   Users,
   Folders,
   Settings,
   Plus,
   CheckCircle2,
   Circle,
   Clock,
   Pause,
   PlayCircle,
   XCircle,
   FileText,
   Hash,
} from 'lucide-react';
import { useCreateIssueStore } from '@/store/create-issue-store';
import { useIssuesStore } from '@/store/issues-store';
import { useProjectsStore } from '@/store/projects-store';
import type { Issue } from '@/data/issues';
import type { Project } from '@/data/projects';

function DynamicSearchResults({
   searchIssues,
   allProjects,
   router,
   runCommand,
   searchValue,
}: {
   searchIssues: (query: string) => Issue[];
   allProjects: Project[];
   router: ReturnType<typeof useRouter>;
   runCommand: (command: () => void) => void;
   searchValue: string;
}) {

   if (!searchValue || searchValue.trim() === '') {
      return null;
   }

   const filteredIssues = searchIssues(searchValue);
   const filteredProjects = allProjects.filter(
      (project) =>
         project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
         project.description?.toLowerCase().includes(searchValue.toLowerCase())
   );

   if (filteredIssues.length === 0 && filteredProjects.length === 0) {
      return null;
   }

   return (
      <>
         {filteredIssues.length > 0 && (
            <>
               <CommandSeparator />
               <CommandGroup heading="Issues">
                  {filteredIssues.slice(0, 10).map((issue) => (
                     <CommandItem
                        key={issue.id}
                        value={`${issue.identifier} ${issue.title}`}
                        keywords={[issue.title, issue.identifier, issue.description]}
                        onSelect={() =>
                           runCommand(() => {
                              router.push(`/piedpiper/team/CORE/all?issue=${issue.id}`);
                           })
                        }
                     >
                        <Hash className="h-4 w-4" style={{ color: '#8a8f98' }} />
                        <span className="flex-1">
                           <span className="font-medium" style={{ color: '#f7f8f8' }}>
                              {issue.identifier}
                           </span>
                           <span className="ml-2" style={{ color: '#8a8f98' }}>
                              {issue.title}
                           </span>
                        </span>
                     </CommandItem>
                  ))}
               </CommandGroup>
            </>
         )}

         {filteredProjects.length > 0 && (
            <>
               <CommandSeparator />
               <CommandGroup heading="Projects">
                  {filteredProjects.slice(0, 10).map((project) => (
                     <CommandItem
                        key={project.id}
                        value={project.name}
                        keywords={[project.name, project.description || '']}
                        onSelect={() =>
                           runCommand(() => {
                              router.push(`/piedpiper/projects/${project.id}`);
                           })
                        }
                     >
                        <Folders className="h-4 w-4" style={{ color: '#8a8f98' }} />
                        <span className="font-medium" style={{ color: '#f7f8f8' }}>
                           {project.name}
                        </span>
                     </CommandItem>
                  ))}
               </CommandGroup>
            </>
         )}
      </>
   );
}

export function CommandPalette() {
   const [open, setOpen] = React.useState(false);
   const [search, setSearch] = React.useState('');
   const router = useRouter();
   const { openModal } = useCreateIssueStore();
   const { searchIssues } = useIssuesStore();
   const { getAllProjects } = useProjectsStore();

   // Keyboard shortcut handler
   React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
         // Cmd/Ctrl + K
         if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setOpen((open) => !open);
         }

         // G + I (Inbox)
         if (!open && e.key === 'g') {
            const nextKey = (ke: KeyboardEvent) => {
               if (ke.key === 'i') {
                  router.push('/piedpiper/inbox');
               } else if (ke.key === 't') {
                  router.push('/piedpiper/teams');
               } else if (ke.key === 'p') {
                  router.push('/piedpiper/projects');
               } else if (ke.key === 'm') {
                  router.push('/piedpiper/members');
               } else if (ke.key === 's') {
                  router.push('/piedpiper/settings');
               }
               window.removeEventListener('keydown', nextKey);
            };
            window.addEventListener('keydown', nextKey);
            setTimeout(() => window.removeEventListener('keydown', nextKey), 1000);
         }
      };

      document.addEventListener('keydown', down);
      return () => document.removeEventListener('keydown', down);
   }, [open, router]);

   const runCommand = React.useCallback((command: () => void) => {
      setOpen(false);
      setSearch('');
      command();
   }, []);

   // Get all projects for search
   const allProjects = React.useMemo(() => getAllProjects(), [getAllProjects]);

   return (
      <CommandDialog
         open={open}
         onOpenChange={(isOpen) => {
            setOpen(isOpen);
            if (!isOpen) {
               setSearch('');
            }
         }}
         title="Command Menu"
      >
         <Command shouldFilter={true} filter={(value, searchTerm) => {
            if (!searchTerm) return 1;
            const searchLower = searchTerm.toLowerCase();
            const valueLower = value.toLowerCase();
            if (valueLower.includes(searchLower)) return 1;
            return 0;
         }}>
            <CommandInput 
               value={search}
               onValueChange={setSearch}
               placeholder="Search for actions, issues, projects..." 
            />
            <CommandList>
               <CommandEmpty>No results found.</CommandEmpty>

               <CommandGroup heading="Actions">
                  <CommandItem
                     value="create new issue"
                     keywords={['create', 'new', 'issue', 'add']}
                     onSelect={() =>
                        runCommand(() => {
                           openModal();
                        })
                     }
                  >
                     <Plus className="h-4 w-4" />
                     <span>Create new issue</span>
                     <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        C
                     </kbd>
                  </CommandItem>
               </CommandGroup>

               <CommandSeparator />

               <CommandGroup heading="Navigation">
                  <CommandItem
                     value="inbox"
                     keywords={['inbox', 'notifications']}
                     onSelect={() => runCommand(() => router.push('/piedpiper/inbox'))}
                  >
                     <Inbox className="h-4 w-4" />
                     <span>Inbox</span>
                     <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        G
                     </kbd>
                     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        I
                     </kbd>
                  </CommandItem>
                  <CommandItem
                     value="teams"
                     keywords={['teams', 'team']}
                     onSelect={() => runCommand(() => router.push('/piedpiper/teams'))}
                  >
                     <Users className="h-4 w-4" />
                     <span>Teams</span>
                     <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        G
                     </kbd>
                     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        T
                     </kbd>
                  </CommandItem>
                  <CommandItem
                     value="projects"
                     keywords={['projects', 'project']}
                     onSelect={() => runCommand(() => router.push('/piedpiper/projects'))}
                  >
                     <Folders className="h-4 w-4" />
                     <span>Projects</span>
                     <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        G
                     </kbd>
                     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        P
                     </kbd>
                  </CommandItem>
                  <CommandItem
                     value="members"
                     keywords={['members', 'member', 'users', 'user']}
                     onSelect={() => runCommand(() => router.push('/piedpiper/members'))}
                  >
                     <Users className="h-4 w-4" />
                     <span>Members</span>
                     <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        G
                     </kbd>
                     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        M
                     </kbd>
                  </CommandItem>
                  <CommandItem
                     value="settings"
                     keywords={['settings', 'setting', 'preferences']}
                     onSelect={() => runCommand(() => router.push('/piedpiper/settings'))}
                  >
                     <Settings className="h-4 w-4" />
                     <span>Settings</span>
                     <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        G
                     </kbd>
                     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        S
                     </kbd>
                  </CommandItem>
               </CommandGroup>

               <CommandSeparator />

               <CommandGroup heading="Issue Status">
                  <CommandItem value="set status backlog" keywords={['backlog', 'status']}>
                     <Circle className="h-4 w-4 text-muted-foreground" />
                     <span>Set status: Backlog</span>
                  </CommandItem>
                  <CommandItem value="set status todo" keywords={['todo', 'status']}>
                     <Circle className="h-4 w-4 text-blue-500" />
                     <span>Set status: Todo</span>
                  </CommandItem>
                  <CommandItem value="set status in progress" keywords={['in progress', 'progress', 'status']}>
                     <PlayCircle className="h-4 w-4 text-yellow-500" />
                     <span>Set status: In Progress</span>
                  </CommandItem>
                  <CommandItem value="set status in review" keywords={['review', 'in review', 'status']}>
                     <Clock className="h-4 w-4 text-purple-500" />
                     <span>Set status: In Review</span>
                  </CommandItem>
                  <CommandItem value="set status done" keywords={['done', 'completed', 'status']}>
                     <CheckCircle2 className="h-4 w-4 text-green-500" />
                     <span>Set status: Done</span>
                  </CommandItem>
                  <CommandItem value="set status canceled" keywords={['canceled', 'cancelled', 'status']}>
                     <XCircle className="h-4 w-4 text-gray-500" />
                     <span>Set status: Canceled</span>
                  </CommandItem>
               </CommandGroup>

               <DynamicSearchResults searchIssues={searchIssues} allProjects={allProjects} router={router} runCommand={runCommand} searchValue={search} />
            </CommandList>
         </Command>
      </CommandDialog>
   );
}
