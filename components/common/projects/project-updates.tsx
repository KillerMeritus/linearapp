'use client';

import { useState, useEffect } from 'react';
import { useProjectsStore } from '@/store/projects-store';
import { Project } from '@/data/projects';
import { health } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Paperclip, X, CheckIcon, CircleCheck, CircleX, AlertCircle, HelpCircle, Pencil } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth } from '@/lib/auth-context';

interface ProjectUpdate {
   id: string;
   content: string;
   health: typeof health[number];
   authorId: string;
   authorName: string;
   authorAvatar: string;
   createdAt: string;
   attachments?: string[];
}

interface ProjectUpdatesProps {
   project: Project;
}

// Store updates in localStorage for now (frontend only)
const getProjectUpdates = (projectId: string): ProjectUpdate[] => {
   if (typeof window === 'undefined') return [];
   const key = `project_updates_${projectId}`;
   const stored = localStorage.getItem(key);
   return stored ? JSON.parse(stored) : [];
};

const saveProjectUpdates = (projectId: string, updates: ProjectUpdate[]) => {
   if (typeof window === 'undefined') return;
   const key = `project_updates_${projectId}`;
   localStorage.setItem(key, JSON.stringify(updates));
};

export function ProjectUpdates({ project }: ProjectUpdatesProps) {
   const { user } = useAuth();
   const updateProject = useProjectsStore((s) => s.updateProject);
   const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
   const [updateContent, setUpdateContent] = useState('');
   const [selectedHealth, setSelectedHealth] = useState(project.health);
   const [isPosting, setIsPosting] = useState(false);
   const [showUpdateForm, setShowUpdateForm] = useState(false);

   useEffect(() => {
      const loadedUpdates = getProjectUpdates(project.id);
      setUpdates(loadedUpdates);
      setSelectedHealth(project.health);
   }, [project.id, project.health]);

   const handlePostUpdate = () => {
      if (!updateContent.trim() || !user) return;

      setIsPosting(true);
      const newUpdate: ProjectUpdate = {
         id: Date.now().toString(),
         content: updateContent.trim(),
         health: selectedHealth,
         authorId: user.id,
         authorName: user.name,
         authorAvatar: user.avatarUrl,
         createdAt: new Date().toISOString(),
      };

      const updatedUpdates = [newUpdate, ...updates];
      setUpdates(updatedUpdates);
      saveProjectUpdates(project.id, updatedUpdates);

      // Update project health
      updateProject(project.id, { health: selectedHealth });

      setUpdateContent('');
      setShowUpdateForm(false);
      setIsPosting(false);
   };

   const handleCancel = () => {
      setUpdateContent('');
      setShowUpdateForm(false);
      setSelectedHealth(project.health);
   };

   const getHealthIcon = (healthId: string) => {
      switch (healthId) {
         case 'on-track':
            return <CircleCheck className="h-4 w-4 text-green-500" />;
         case 'off-track':
            return <CircleX className="h-4 w-4 text-red-500" />;
         case 'at-risk':
            return <AlertCircle className="h-4 w-4 text-amber-500" />;
         case 'no-update':
         default:
            return <HelpCircle className="h-4 w-4 text-gray-500" />;
      }
   };

   return (
      <div className="max-w-4xl mx-auto space-y-6">
         {/* Update Form */}
         {showUpdateForm ? (
            <div className="p-4 rounded-lg border" style={{ background: '#141516', borderColor: '#23252a' }}>
               {/* Health Status Selector */}
               <div className="mb-3">
                  <Popover>
                     <PopoverTrigger asChild>
                        <Button
                           variant="outline"
                           size="sm"
                           className="h-7 px-2 text-xs rounded-full"
                           style={{
                              background: selectedHealth.color + '20',
                              borderColor: selectedHealth.color + '40',
                              color: selectedHealth.color,
                           }}
                        >
                           {getHealthIcon(selectedHealth.id)}
                           <span className="ml-1">{selectedHealth.name}</span>
                        </Button>
                     </PopoverTrigger>
                     <PopoverContent className="w-48 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                        <Command>
                           <CommandInput placeholder="Search health status..." />
                           <CommandList>
                              <CommandEmpty>No status found.</CommandEmpty>
                              <CommandGroup>
                                 {health.map((h) => (
                                    <CommandItem
                                       key={h.id}
                                       onSelect={() => setSelectedHealth(h)}
                                       className="flex items-center justify-between"
                                    >
                                       <div className="flex items-center gap-2">
                                          {getHealthIcon(h.id)}
                                          <span>{h.name}</span>
                                       </div>
                                       {selectedHealth.id === h.id && <CheckIcon className="h-4 w-4" />}
                                    </CommandItem>
                                 ))}
                              </CommandGroup>
                           </CommandList>
                        </Command>
                     </PopoverContent>
                  </Popover>
               </div>

               {/* Update Textarea */}
               <Textarea
                  value={updateContent}
                  onChange={(e) => setUpdateContent(e.target.value)}
                  placeholder="Write a project update..."
                  className="min-h-[120px] mb-3"
                  style={{
                     background: '#0f1011',
                     borderColor: '#23252a',
                     color: '#f7f8f8',
                  }}
               />

               {/* Attachment Icon */}
               <div className="mb-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                     <Paperclip className="h-4 w-4" style={{ color: '#8a8f98' }} />
                  </Button>
               </div>

               {/* Action Buttons */}
               <div className="flex items-center justify-end gap-2">
                  <Button
                     variant="ghost"
                     size="sm"
                     onClick={handleCancel}
                     style={{ color: '#8a8f98' }}
                  >
                     Cancel
                  </Button>
                  <Button
                     size="sm"
                     onClick={handlePostUpdate}
                     disabled={!updateContent.trim() || isPosting}
                     style={{ background: '#5e6ad2', color: '#ffffff' }}
                  >
                     {isPosting ? 'Posting...' : 'Post update'}
                  </Button>
               </div>
            </div>
         ) : (
            <Button
               variant="outline"
               className="w-full justify-start"
               onClick={() => setShowUpdateForm(true)}
               style={{ borderColor: '#23252a', color: '#8a8f98' }}
            >
               <Pencil className="h-4 w-4 mr-2" />
               Write a project update...
            </Button>
         )}

         {/* Activity Feed */}
         <div className="space-y-4">
            {updates.length === 0 ? (
               <div className="text-center py-12">
                  <p className="text-sm" style={{ color: '#8a8f98' }}>
                     No updates yet. Write the first project update above.
                  </p>
               </div>
            ) : (
               updates.map((update) => (
                  <div
                     key={update.id}
                     className="p-4 rounded-lg border"
                     style={{ background: '#141516', borderColor: '#23252a' }}
                  >
                     <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                           <AvatarImage src={update.authorAvatar} alt={update.authorName} />
                           <AvatarFallback>{update.authorName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                           <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium" style={{ color: '#f7f8f8' }}>
                                 {update.authorName}
                              </span>
                              <span className="text-xs" style={{ color: '#8a8f98' }}>
                                 {format(new Date(update.createdAt), 'MMM dd, yyyy')}
                              </span>
                              <div className="flex items-center gap-1 ml-2">
                                 {getHealthIcon(update.health.id)}
                                 <span className="text-xs" style={{ color: update.health.color }}>
                                    {update.health.name}
                                 </span>
                              </div>
                           </div>
                           <div className="text-sm whitespace-pre-wrap" style={{ color: '#f7f8f8' }}>
                              {update.content}
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            )}

            {/* Project Creation Activity */}
            <div className="flex items-start gap-3 pt-4">
               <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#141516' }}
               >
                  <project.icon className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </div>
               <div className="flex-1">
                  <div className="text-sm" style={{ color: '#f7f8f8' }}>
                     <span className="font-medium">{project.lead.name}</span> created the project
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#8a8f98' }}>
                     {format(new Date(project.startDate), 'MMM dd, yyyy')}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

