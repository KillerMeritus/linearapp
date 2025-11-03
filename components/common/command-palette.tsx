'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
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
} from 'lucide-react';
import { useCreateIssueStore } from '@/store/create-issue-store';

export function CommandPalette() {
   const [open, setOpen] = React.useState(false);
   const [search, setSearch] = React.useState('');
   const router = useRouter();
   const { openModal } = useCreateIssueStore();

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
      command();
   }, []);

   return (
      <Command.Dialog
         open={open}
         onOpenChange={setOpen}
         className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl rounded-lg border border-border bg-popover shadow-linear-lg z-50"
         label="Command Menu"
      >
         <div className="glass-effect rounded-lg overflow-hidden">
            <div className="flex items-center border-b border-border px-3">
               <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
               <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search for actions, issues, projects..."
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
               />
            </div>
            <Command.List className="max-h-[400px] overflow-y-auto p-2">
               <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
               </Command.Empty>

               {!search && (
                  <>
                     <Command.Group heading="Actions" className="text-xs font-semibold text-muted-foreground px-2 py-1.5">
                        <Command.Item
                           onSelect={() =>
                              runCommand(() => {
                                 openModal();
                              })
                           }
                           className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none"
                        >
                           <Plus className="h-4 w-4" />
                           <span>Create new issue</span>
                           <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              C
                           </kbd>
                        </Command.Item>
                     </Command.Group>

                     <Command.Separator className="h-px bg-border my-1" />

                     <Command.Group heading="Navigation" className="text-xs font-semibold text-muted-foreground px-2 py-1.5">
                        <Command.Item
                           onSelect={() => runCommand(() => router.push('/piedpiper/inbox'))}
                           className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none"
                        >
                           <Inbox className="h-4 w-4" />
                           <span>Inbox</span>
                           <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              G
                           </kbd>
                           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              I
                           </kbd>
                        </Command.Item>
                        <Command.Item
                           onSelect={() => runCommand(() => router.push('/piedpiper/teams'))}
                           className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none"
                        >
                           <Users className="h-4 w-4" />
                           <span>Teams</span>
                           <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              G
                           </kbd>
                           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              T
                           </kbd>
                        </Command.Item>
                        <Command.Item
                           onSelect={() => runCommand(() => router.push('/piedpiper/projects'))}
                           className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none"
                        >
                           <Folders className="h-4 w-4" />
                           <span>Projects</span>
                           <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              G
                           </kbd>
                           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              P
                           </kbd>
                        </Command.Item>
                        <Command.Item
                           onSelect={() => runCommand(() => router.push('/piedpiper/members'))}
                           className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none"
                        >
                           <Users className="h-4 w-4" />
                           <span>Members</span>
                           <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              G
                           </kbd>
                           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              M
                           </kbd>
                        </Command.Item>
                        <Command.Item
                           onSelect={() => runCommand(() => router.push('/piedpiper/settings'))}
                           className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none"
                        >
                           <Settings className="h-4 w-4" />
                           <span>Settings</span>
                           <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              G
                           </kbd>
                           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                              S
                           </kbd>
                        </Command.Item>
                     </Command.Group>

                     <Command.Separator className="h-px bg-border my-1" />

                     <Command.Group heading="Issue Status" className="text-xs font-semibold text-muted-foreground px-2 py-1.5">
                        <Command.Item className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none">
                           <Circle className="h-4 w-4 text-muted-foreground" />
                           <span>Set status: Backlog</span>
                        </Command.Item>
                        <Command.Item className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none">
                           <Circle className="h-4 w-4 text-blue-500" />
                           <span>Set status: Todo</span>
                        </Command.Item>
                        <Command.Item className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none">
                           <PlayCircle className="h-4 w-4 text-yellow-500" />
                           <span>Set status: In Progress</span>
                        </Command.Item>
                        <Command.Item className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none">
                           <Clock className="h-4 w-4 text-purple-500" />
                           <span>Set status: In Review</span>
                        </Command.Item>
                        <Command.Item className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none">
                           <CheckCircle2 className="h-4 w-4 text-green-500" />
                           <span>Set status: Done</span>
                        </Command.Item>
                        <Command.Item className="flex items-center gap-2 px-2 py-2 text-sm rounded cursor-pointer hover:bg-accent aria-selected:bg-accent outline-none">
                           <XCircle className="h-4 w-4 text-gray-500" />
                           <span>Set status: Canceled</span>
                        </Command.Item>
                     </Command.Group>
                  </>
               )}
            </Command.List>
         </div>
      </Command.Dialog>
   );
}
