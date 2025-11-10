'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useProjectsStore } from '@/store/projects-store';
import { status } from '@/data/status';
import { priorities } from '@/data/priorities';
import { users } from '@/data/users';
import { labels as allLabels } from '@/data/labels';
import { PrioritySelector } from './priority-selector';
import { LeadSelector } from './lead-selector';
import { DatePicker } from './date-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import {
   ChevronDown,
   Star,
   MoreHorizontal,
   Plus,
   Pencil,
   Users,
   Tag,
   X,
   Link as LinkIcon,
   FileText,
   Trash2,
   CheckIcon,
   ChevronRight,
   Search,
   Edit,
   Bell,
} from 'lucide-react';
import { format } from 'date-fns';
import { ProjectUpdates } from './project-updates';
import { ProjectIssues } from './project-issues';

interface Resource {
   id: string;
   type: 'document' | 'link';
   title: string;
   url: string;
}

type TabType = 'overview' | 'updates' | 'issues';

export default function ProjectDetailPage() {
   const params = useParams<{ projectId: string; orgId: string }>();
   const router = useRouter();
   const getProjectById = useProjectsStore((s) => s.getProjectById);
   const updateProject = useProjectsStore((s) => s.updateProject);
   const createMilestone = useProjectsStore((s) => s.createMilestone);
   const updateMilestone = useProjectsStore((s) => s.updateMilestone);
   const deleteMilestone = useProjectsStore((s) => s.deleteMilestone);
   const addProjectLabel = useProjectsStore((s) => s.addProjectLabel);
   const removeProjectLabel = useProjectsStore((s) => s.removeProjectLabel);

   const project = params?.projectId ? getProjectById(params.projectId) : null;
   const projects = useProjectsStore((s) => s.projects);

   const [projectName, setProjectName] = useState(project?.name || '');
   const [projectSummary, setProjectSummary] = useState(project?.summary || '');
   const [description, setDescription] = useState(project?.description || '');
   const [resources, setResources] = useState<Resource[]>([]);
   const [newResourceTitle, setNewResourceTitle] = useState('');
   const [newResourceUrl, setNewResourceUrl] = useState('');
   const [showResourceInput, setShowResourceInput] = useState(false);
   const [editingMilestone, setEditingMilestone] = useState<string | null>(null);
   const [milestoneTitle, setMilestoneTitle] = useState('');
   const [milestoneDueDate, setMilestoneDueDate] = useState<string>('');
   const [activeTab, setActiveTab] = useState<TabType>('overview');

   // Refresh project data when it changes
   useEffect(() => {
      if (params?.projectId) {
         const updatedProject = getProjectById(params.projectId);
         if (updatedProject) {
            setProjectName(updatedProject.name);
            setProjectSummary(updatedProject.summary || '');
            setDescription(updatedProject.description || '');
         }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params?.projectId, projects]);

   // Redirect if project not found
   useEffect(() => {
      if (params?.projectId && !project) {
         router.push(`/${params.orgId}/projects`);
      }
   }, [params?.projectId, project, router, params?.orgId]);

   if (!project) {
      return (
         <div className="flex items-center justify-center h-full">
            <div style={{ color: '#8a8f98' }}>Loading...</div>
         </div>
      );
   }

   const handleNameChange = (value: string) => {
      setProjectName(value);
      updateProject(project.id, { name: value });
   };

   const handleSummaryChange = (value: string) => {
      setProjectSummary(value);
      updateProject(project.id, { summary: value });
   };

   const handleDescriptionChange = (value: string) => {
      setDescription(value);
      updateProject(project.id, { description: value });
   };

   const handleStatusChange = (statusId: string) => {
      const newStatus = status.find((s) => s.id === statusId);
      if (newStatus) {
         updateProject(project.id, { status: newStatus });
      }
   };

   const handlePriorityChange = (priorityId: string) => {
      const newPriority = priorities.find((p) => p.id === priorityId);
      if (newPriority) {
         updateProject(project.id, { priority: newPriority });
      }
   };

   const handleLeadChange = (userId: string) => {
      const newLead = users.find((u) => u.id === userId);
      if (newLead) {
         updateProject(project.id, { lead: newLead });
      }
   };

   const handleStartDateChange = (date: Date | undefined) => {
      if (date) {
         updateProject(project.id, { startDate: format(date, 'yyyy-MM-dd') });
      }
   };

   const handleTargetDateChange = (date: Date | undefined) => {
      if (date) {
         updateProject(project.id, { targetDate: format(date, 'yyyy-MM-dd') });
      } else {
         updateProject(project.id, { targetDate: undefined });
      }
   };

   const handleAddMember = (userId: string) => {
      const newMember = users.find((u) => u.id === userId);
      if (newMember && !project.members?.some((m) => m.id === userId)) {
         updateProject(project.id, {
            members: [...(project.members || []), newMember],
         });
      }
   };

   const handleRemoveMember = (userId: string) => {
      updateProject(project.id, {
         members: (project.members || []).filter((m) => m.id !== userId),
      });
   };

   const handleAddLabel = (labelId: string) => {
      const label = allLabels.find((l) => l.id === labelId);
      if (label && !project.labels?.some((l) => l.id === labelId)) {
         addProjectLabel(project.id, label);
      }
   };

   const handleRemoveLabel = (labelId: string) => {
      removeProjectLabel(project.id, labelId);
   };

   const handleAddResource = () => {
      if (newResourceTitle && newResourceUrl) {
         const newResource: Resource = {
            id: Date.now().toString(),
            type: newResourceUrl.startsWith('http') ? 'link' : 'document',
            title: newResourceTitle,
            url: newResourceUrl,
         };
         setResources([...resources, newResource]);
         setNewResourceTitle('');
         setNewResourceUrl('');
         setShowResourceInput(false);
      }
   };

   const handleRemoveResource = (resourceId: string) => {
      setResources(resources.filter((r) => r.id !== resourceId));
   };

   const handleCreateMilestone = () => {
      if (milestoneTitle.trim()) {
         createMilestone(project.id, milestoneTitle.trim(), milestoneDueDate || undefined);
         setMilestoneTitle('');
         setMilestoneDueDate('');
         setEditingMilestone(null);
      }
   };

   const handleUpdateMilestone = (milestoneId: string) => {
      if (milestoneTitle.trim()) {
         updateMilestone(project.id, milestoneId, {
            title: milestoneTitle.trim(),
            dueDate: milestoneDueDate || undefined,
         });
         setMilestoneTitle('');
         setMilestoneDueDate('');
         setEditingMilestone(null);
      }
   };

   const handleDeleteMilestone = (milestoneId: string) => {
      deleteMilestone(project.id, milestoneId);
   };

   const startEditingMilestone = (milestone: { id: string; title: string; dueDate?: string }) => {
      setEditingMilestone(milestone.id);
      setMilestoneTitle(milestone.title);
      setMilestoneDueDate(milestone.dueDate || '');
   };

   const cancelEditingMilestone = () => {
      setEditingMilestone(null);
      setMilestoneTitle('');
      setMilestoneDueDate('');
   };

   const availableMembers = users.filter((u) => !project.members?.some((m) => m.id === u.id));
   const availableLabels = allLabels.filter((l) => !project.labels?.some((pl) => pl.id === l.id));

   return (
      <div className="h-full flex flex-col" style={{ background: '#08090a' }}>
         {/* Top Header Bar */}
         <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: '#23252a' }}>
            <div className="flex items-center gap-4">
               {/* Breadcrumbs */}
               <div className="flex items-center gap-2 text-sm">
                  <button
                     onClick={() => router.push(`/${params.orgId}/projects`)}
                     className="hover:underline"
                     style={{ color: '#8a8f98' }}
                  >
                     Projects
                  </button>
                  <ChevronRight className="h-4 w-4" style={{ color: '#8a8f98' }} />
                  <span style={{ color: '#f7f8f8' }}>{project.name}</span>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Search className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bell className="h-4 w-4" style={{ color: '#8a8f98' }} />
               </Button>
            </div>
         </div>

         {/* Tabs */}
         <div className="flex items-center gap-6 px-6 border-b" style={{ borderColor: '#23252a' }}>
            <button
               onClick={() => setActiveTab('overview')}
               className="px-2 py-3 text-sm font-medium border-b-2 transition-colors"
               style={{
                  color: activeTab === 'overview' ? '#f7f8f8' : '#8a8f98',
                  borderColor: activeTab === 'overview' ? '#5e6ad2' : 'transparent',
               }}
            >
               Overview
            </button>
            <button
               onClick={() => setActiveTab('updates')}
               className="px-2 py-3 text-sm font-medium border-b-2 transition-colors"
               style={{
                  color: activeTab === 'updates' ? '#f7f8f8' : '#8a8f98',
                  borderColor: activeTab === 'updates' ? '#5e6ad2' : 'transparent',
               }}
            >
               Updates
            </button>
            <button
               onClick={() => setActiveTab('issues')}
               className="px-2 py-3 text-sm font-medium border-b-2 transition-colors"
               style={{
                  color: activeTab === 'issues' ? '#f7f8f8' : '#8a8f98',
                  borderColor: activeTab === 'issues' ? '#5e6ad2' : 'transparent',
               }}
            >
               Issues
            </button>
         </div>

         {/* Main Content Area */}
         <div className="flex-1 overflow-hidden flex">
            {/* Main Content */}
            <div className="flex-1 overflow-y-auto px-12 py-10" style={{ background: '#08090a' }}>
               <div className="max-w-4xl mx-auto space-y-8">
                  {/* Project Header */}
                  <div className="flex items-start gap-4">
                     <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: '#141516' }}
                     >
                        <project.icon className="h-6 w-6" style={{ color: '#8a8f98' }} />
                     </div>
                     <div className="flex-1">
                        <Input
                           value={projectName}
                           onChange={(e) => handleNameChange(e.target.value)}
                           className="text-3xl font-semibold border-0 p-0 h-auto focus-visible:ring-0 bg-transparent"
                           style={{ color: '#f7f8f8' }}
                        />
                        <Input
                           value={projectSummary}
                           onChange={(e) => handleSummaryChange(e.target.value)}
                           placeholder="Project identifier"
                           className="text-sm mt-1 border-0 p-0 h-auto focus-visible:ring-0 bg-transparent"
                           style={{ color: '#8a8f98' }}
                        />
                     </div>
                  </div>

                  {/* Inline Properties */}
                  <div>
                     <button className="flex items-center gap-2 mb-3 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                        Properties
                        <ChevronDown className="h-4 w-4" />
                     </button>
                     <div className="flex items-center gap-3 flex-wrap">
                        {/* Status */}
                        <Popover>
                           <PopoverTrigger asChild>
                              <Button
                                 variant="outline"
                                 size="sm"
                                 className="h-7 px-2 text-xs rounded-full"
                                 style={{
                                    background: project.status.color + '20',
                                    borderColor: project.status.color + '40',
                                    color: project.status.color,
                                 }}
                              >
                                 {project.status.name}
                              </Button>
                           </PopoverTrigger>
                           <PopoverContent className="w-48 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                              <Command>
                                 <CommandInput placeholder="Search status..." />
                                 <CommandList>
                                    <CommandEmpty>No status found.</CommandEmpty>
                                    <CommandGroup>
                                       {status.map((s) => (
                                          <CommandItem
                                             key={s.id}
                                             onSelect={() => handleStatusChange(s.id)}
                                             className="flex items-center justify-between"
                                          >
                                             <div className="flex items-center gap-2">
                                                <s.icon />
                                                <span>{s.name}</span>
                                             </div>
                                             {project.status.id === s.id && <CheckIcon className="h-4 w-4" />}
                                          </CommandItem>
                                       ))}
                                    </CommandGroup>
                                 </CommandList>
                              </Command>
                           </PopoverContent>
                        </Popover>

                        {/* Priority */}
                        <PrioritySelector
                           priority={project.priority}
                           onPriorityChange={handlePriorityChange}
                        />

                        {/* Lead */}
                        <LeadSelector lead={project.lead} onLeadChange={handleLeadChange} />

                        {/* Target Date */}
                        <DatePicker
                           date={project.targetDate ? new Date(project.targetDate) : undefined}
                           onDateChange={handleTargetDateChange}
                        />

                        {/* Assignee */}
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: '#141516' }}>
                           <Avatar className="h-5 w-5">
                              <AvatarImage src={project.lead.avatarUrl} alt={project.lead.name} />
                              <AvatarFallback>{project.lead.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <span className="text-xs" style={{ color: '#f7f8f8' }}>
                              {project.lead.name}
                           </span>
                        </div>

                        <Button variant="ghost" size="icon" className="h-7 w-7">
                           <MoreHorizontal className="h-4 w-4" style={{ color: '#8a8f98' }} />
                        </Button>
                     </div>
                  </div>

                  {/* Resources */}
                  <div>
                     <h3 className="text-sm font-medium mb-3" style={{ color: '#f7f8f8' }}>
                        Resources
                     </h3>
                     {!showResourceInput ? (
                        <button
                           onClick={() => setShowResourceInput(true)}
                           className="w-full px-3 py-2 text-left text-sm rounded-lg border border-dashed"
                           style={{
                              background: '#141516',
                              borderColor: '#23252a',
                              color: '#8a8f98',
                           }}
                        >
                           + Add document or link...
                        </button>
                     ) : (
                        <div className="space-y-2 p-3 rounded-lg border" style={{ background: '#141516', borderColor: '#23252a' }}>
                           <Input
                              placeholder="Title"
                              value={newResourceTitle}
                              onChange={(e) => setNewResourceTitle(e.target.value)}
                              className="mb-2"
                              style={{ background: '#0f1011', borderColor: '#23252a', color: '#f7f8f8' }}
                           />
                           <Input
                              placeholder="URL or document name"
                              value={newResourceUrl}
                              onChange={(e) => setNewResourceUrl(e.target.value)}
                              className="mb-2"
                              style={{ background: '#0f1011', borderColor: '#23252a', color: '#f7f8f8' }}
                           />
                           <div className="flex items-center gap-2">
                              <Button
                                 size="sm"
                                 onClick={handleAddResource}
                                 style={{ background: '#5e6ad2', color: '#ffffff' }}
                              >
                                 Add
                              </Button>
                              <Button
                                 size="sm"
                                 variant="ghost"
                                 onClick={() => {
                                    setShowResourceInput(false);
                                    setNewResourceTitle('');
                                    setNewResourceUrl('');
                                 }}
                              >
                                 Cancel
                              </Button>
                           </div>
                        </div>
                     )}
                     {resources.length > 0 && (
                        <div className="mt-3 space-y-2">
                           {resources.map((resource) => (
                              <div
                                 key={resource.id}
                                 className="flex items-center justify-between p-3 rounded-lg border"
                                 style={{ background: '#141516', borderColor: '#23252a' }}
                              >
                                 <div className="flex items-center gap-2">
                                    {resource.type === 'link' ? (
                                       <LinkIcon className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                    ) : (
                                       <FileText className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                    )}
                                    <span className="text-sm" style={{ color: '#f7f8f8' }}>
                                       {resource.title}
                                    </span>
                                 </div>
                                 <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => handleRemoveResource(resource.id)}
                                 >
                                    <X className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                 </Button>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Project Update */}
                  <div>
                     <Button
                        variant="outline"
                        className="w-full justify-start"
                        style={{ borderColor: '#23252a', color: '#8a8f98' }}
                     >
                        <Pencil className="h-4 w-4 mr-2" />
                        Write first project update
                     </Button>
                  </div>

                  {/* Description */}
                  <div>
                     <h3 className="text-sm font-medium mb-3" style={{ color: '#f7f8f8' }}>
                        Description
                     </h3>
                     <Textarea
                        value={description}
                        onChange={(e) => handleDescriptionChange(e.target.value)}
                        placeholder="Add description..."
                        className="min-h-[120px]"
                        style={{
                           background: '#141516',
                           borderColor: '#23252a',
                           color: '#f7f8f8',
                        }}
                     />
                  </div>

                  {/* Milestones */}
                  <div>
                     <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-medium" style={{ color: '#f7f8f8' }}>
                           Milestones
                        </h3>
                        {!editingMilestone && (
                           <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingMilestone('new')}
                              style={{ color: '#8a8f98' }}
                           >
                              <Plus className="h-4 w-4 mr-1" />
                              Milestone
                           </Button>
                        )}
                     </div>
                     {editingMilestone && (
                        <div className="p-3 rounded-lg border mb-3" style={{ background: '#141516', borderColor: '#23252a' }}>
                           <Input
                              placeholder="Milestone title"
                              value={milestoneTitle}
                              onChange={(e) => setMilestoneTitle(e.target.value)}
                              className="mb-2"
                              style={{ background: '#0f1011', borderColor: '#23252a', color: '#f7f8f8' }}
                           />
                           <Input
                              type="date"
                              placeholder="Due date"
                              value={milestoneDueDate}
                              onChange={(e) => setMilestoneDueDate(e.target.value)}
                              className="mb-2"
                              style={{ background: '#0f1011', borderColor: '#23252a', color: '#f7f8f8' }}
                           />
                           <div className="flex items-center gap-2">
                              <Button
                                 size="sm"
                                 onClick={() => {
                                    if (editingMilestone === 'new') {
                                       handleCreateMilestone();
                                    } else {
                                       handleUpdateMilestone(editingMilestone);
                                    }
                                 }}
                                 style={{ background: '#5e6ad2', color: '#ffffff' }}
                              >
                                 {editingMilestone === 'new' ? 'Create' : 'Update'}
                              </Button>
                              <Button size="sm" variant="ghost" onClick={cancelEditingMilestone}>
                                 Cancel
                              </Button>
                           </div>
                        </div>
                     )}
                     {project.milestones && project.milestones.length > 0 && (
                        <div className="space-y-2">
                           {project.milestones.map((milestone) => (
                              <div
                                 key={milestone.id}
                                 className="flex items-center justify-between p-3 rounded-lg border"
                                 style={{ background: '#141516', borderColor: '#23252a' }}
                              >
                                 <div className="flex-1">
                                    <div className="text-sm font-medium" style={{ color: '#f7f8f8' }}>
                                       {milestone.title}
                                    </div>
                                    {milestone.dueDate && (
                                       <div className="text-xs mt-1" style={{ color: '#8a8f98' }}>
                                          Due: {format(new Date(milestone.dueDate), 'MMM dd, yyyy')}
                                       </div>
                                    )}
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Button
                                       variant="ghost"
                                       size="icon"
                                       className="h-6 w-6"
                                       onClick={() => startEditingMilestone(milestone)}
                                    >
                                       <Pencil className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                    </Button>
                                    <Button
                                       variant="ghost"
                                       size="icon"
                                       className="h-6 w-6"
                                       onClick={() => handleDeleteMilestone(milestone.id)}
                                    >
                                       <Trash2 className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                    </Button>
                                 </div>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
               )}

               {activeTab === 'updates' && (
                  <ProjectUpdates project={project} />
               )}

               {activeTab === 'issues' && (
                  <ProjectIssues project={project} />
               )}
            </div>

            {/* Right Sidebar - Show for all tabs */}
            <div
               className="w-80 border-l overflow-y-auto px-6 py-6"
               style={{ background: '#0f1011', borderColor: '#23252a' }}
            >
               {activeTab === 'overview' && (
               <div className="space-y-6">
                  {/* Properties */}
                  <div>
                     <div className="flex items-center justify-between mb-4">
                        <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                           Properties
                           <ChevronDown className="h-4 w-4" />
                        </button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                           <Plus className="h-4 w-4" style={{ color: '#8a8f98' }} />
                        </Button>
                     </div>
                     <div className="space-y-3">
                        {/* Status */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Status
                           </div>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start h-8 px-2 text-xs rounded-full"
                                    style={{
                                       background: project.status.color + '20',
                                       borderColor: project.status.color + '40',
                                       color: project.status.color,
                                    }}
                                 >
                                    {project.status.name}
                                 </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-48 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                                 <Command>
                                    <CommandInput placeholder="Search status..." />
                                    <CommandList>
                                       <CommandEmpty>No status found.</CommandEmpty>
                                       <CommandGroup>
                                          {status.map((s) => (
                                             <CommandItem
                                                key={s.id}
                                                onSelect={() => handleStatusChange(s.id)}
                                                className="flex items-center justify-between"
                                             >
                                                <div className="flex items-center gap-2">
                                                   <s.icon />
                                                   <span>{s.name}</span>
                                                </div>
                                                {project.status.id === s.id && <CheckIcon className="h-4 w-4" />}
                                             </CommandItem>
                                          ))}
                                       </CommandGroup>
                                    </CommandList>
                                 </Command>
                              </PopoverContent>
                           </Popover>
                        </div>

                        {/* Priority */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Priority
                           </div>
                           <PrioritySelector
                              priority={project.priority}
                              onPriorityChange={handlePriorityChange}
                           />
                        </div>

                        {/* Lead */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Lead
                           </div>
                           <LeadSelector lead={project.lead} onLeadChange={handleLeadChange} />
                        </div>

                        {/* Members */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Members
                           </div>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start h-8 px-2 text-xs"
                                    style={{ borderColor: '#23252a', color: '#8a8f98' }}
                                 >
                                    <Users className="h-4 w-4 mr-2" />
                                    {project.members && project.members.length > 0
                                       ? `${project.members.length} member${project.members.length > 1 ? 's' : ''}`
                                       : 'Add members'}
                                 </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-64 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                                 <Command>
                                    <CommandInput placeholder="Search members..." />
                                    <CommandList>
                                       <CommandEmpty>No members found.</CommandEmpty>
                                       <CommandGroup>
                                          {availableMembers.map((user) => (
                                             <CommandItem
                                                key={user.id}
                                                onSelect={() => handleAddMember(user.id)}
                                                className="flex items-center gap-2"
                                             >
                                                <Avatar className="h-5 w-5">
                                                   <AvatarImage src={user.avatarUrl} alt={user.name} />
                                                   <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <span>{user.name}</span>
                                             </CommandItem>
                                          ))}
                                       </CommandGroup>
                                       {project.members && project.members.length > 0 && (
                                          <>
                                             <div className="border-t my-2" style={{ borderColor: '#23252a' }} />
                                             <CommandGroup>
                                                {project.members.map((member) => (
                                                   <CommandItem
                                                      key={member.id}
                                                      onSelect={() => handleRemoveMember(member.id)}
                                                      className="flex items-center justify-between"
                                                   >
                                                      <div className="flex items-center gap-2">
                                                         <Avatar className="h-5 w-5">
                                                            <AvatarImage src={member.avatarUrl} alt={member.name} />
                                                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                                         </Avatar>
                                                         <span>{member.name}</span>
                                                      </div>
                                                      <X className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                                   </CommandItem>
                                                ))}
                                             </CommandGroup>
                                          </>
                                       )}
                                    </CommandList>
                                 </Command>
                              </PopoverContent>
                           </Popover>
                           {project.members && project.members.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                 {project.members.map((member) => (
                                    <div
                                       key={member.id}
                                       className="flex items-center gap-1 px-2 py-1 rounded-full"
                                       style={{ background: '#141516' }}
                                    >
                                       <Avatar className="h-5 w-5">
                                          <AvatarImage src={member.avatarUrl} alt={member.name} />
                                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                       </Avatar>
                                       <span className="text-xs" style={{ color: '#f7f8f8' }}>
                                          {member.name}
                                       </span>
                                       <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-4 w-4 ml-1"
                                          onClick={() => handleRemoveMember(member.id)}
                                       >
                                          <X className="h-3 w-3" style={{ color: '#8a8f98' }} />
                                       </Button>
                                    </div>
                                 ))}
                              </div>
                           )}
                        </div>

                        {/* Start Date */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Start date
                           </div>
                           <DatePicker
                              date={project.startDate ? new Date(project.startDate) : undefined}
                              onDateChange={handleStartDateChange}
                           />
                        </div>

                        {/* Target Date */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Target date
                           </div>
                           <DatePicker
                              date={project.targetDate ? new Date(project.targetDate) : undefined}
                              onDateChange={handleTargetDateChange}
                           />
                        </div>

                        {/* Teams */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Teams
                           </div>
                           <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: '#141516' }}>
                              <Avatar className="h-5 w-5">
                                 <AvatarImage src={project.lead.avatarUrl} alt={project.lead.name} />
                                 <AvatarFallback>{project.lead.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-xs" style={{ color: '#f7f8f8' }}>
                                 {project.lead.name}
                              </span>
                           </div>
                        </div>

                        {/* Labels */}
                        <div>
                           <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                              Labels
                           </div>
                           <Popover>
                              <PopoverTrigger asChild>
                                 <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start h-8 px-2 text-xs"
                                    style={{ borderColor: '#23252a', color: '#8a8f98' }}
                                 >
                                    <Tag className="h-4 w-4 mr-2" />
                                    Add label
                                 </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-64 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                                 <Command>
                                    <CommandInput placeholder="Search labels..." />
                                    <CommandList>
                                       <CommandEmpty>No labels found.</CommandEmpty>
                                       <CommandGroup>
                                          {availableLabels.map((label) => (
                                             <CommandItem
                                                key={label.id}
                                                onSelect={() => handleAddLabel(label.id)}
                                                className="flex items-center gap-2"
                                             >
                                                <div
                                                   className="w-3 h-3 rounded-full"
                                                   style={{ background: label.color }}
                                                />
                                                <span>{label.name}</span>
                                             </CommandItem>
                                          ))}
                                       </CommandGroup>
                                       {project.labels && project.labels.length > 0 && (
                                          <>
                                             <div className="border-t my-2" style={{ borderColor: '#23252a' }} />
                                             <CommandGroup>
                                                {project.labels.map((label) => (
                                                   <CommandItem
                                                      key={label.id}
                                                      onSelect={() => handleRemoveLabel(label.id)}
                                                      className="flex items-center justify-between"
                                                   >
                                                      <div className="flex items-center gap-2">
                                                         <div
                                                            className="w-3 h-3 rounded-full"
                                                            style={{ background: label.color }}
                                                         />
                                                         <span>{label.name}</span>
                                                      </div>
                                                      <X className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                                   </CommandItem>
                                                ))}
                                             </CommandGroup>
                                          </>
                                       )}
                                    </CommandList>
                                 </Command>
                              </PopoverContent>
                           </Popover>
                           {project.labels && project.labels.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                 {project.labels.map((label) => (
                                    <div
                                       key={label.id}
                                       className="flex items-center gap-1 px-2 py-1 rounded-full"
                                       style={{ background: '#141516' }}
                                    >
                                       <div
                                          className="w-2 h-2 rounded-full"
                                          style={{ background: label.color }}
                                       />
                                       <span className="text-xs" style={{ color: '#f7f8f8' }}>
                                          {label.name}
                                       </span>
                                       <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-4 w-4 ml-1"
                                          onClick={() => handleRemoveLabel(label.id)}
                                       >
                                          <X className="h-3 w-3" style={{ color: '#8a8f98' }} />
                                       </Button>
                                    </div>
                                 ))}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>

                  {/* Milestones */}
                  <div>
                     <div className="flex items-center justify-between mb-4">
                        <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                           Milestones
                           <ChevronDown className="h-4 w-4" />
                        </button>
                        <Button
                           variant="ghost"
                           size="icon"
                           className="h-6 w-6"
                           onClick={() => setEditingMilestone('new')}
                        >
                           <Plus className="h-4 w-4" style={{ color: '#8a8f98' }} />
                        </Button>
                     </div>
                     <p className="text-xs mb-3" style={{ color: '#8a8f98' }}>
                        Add milestones to organize work within your project and break it into more granular stages.{' '}
                        <a href="#" className="underline">
                           Learn more
                        </a>
                        .
                     </p>
                     {project.milestones && project.milestones.length > 0 && (
                        <div className="space-y-2">
                           {project.milestones.map((milestone) => (
                              <div
                                 key={milestone.id}
                                 className="p-2 rounded border"
                                 style={{ background: '#141516', borderColor: '#23252a' }}
                              >
                                 <div className="text-sm font-medium" style={{ color: '#f7f8f8' }}>
                                    {milestone.title}
                                 </div>
                                 {milestone.dueDate && (
                                    <div className="text-xs mt-1" style={{ color: '#8a8f98' }}>
                                       Due: {format(new Date(milestone.dueDate), 'MMM dd, yyyy')}
                                    </div>
                                 )}
                              </div>
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Activity */}
                  <div>
                     <div className="flex items-center justify-between mb-4">
                        <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                           Activity
                           <ChevronDown className="h-4 w-4" />
                        </button>
                        <a href="#" className="text-xs underline" style={{ color: '#8a8f98' }}>
                           See all
                        </a>
                     </div>
                     <div className="space-y-3">
                        <div className="flex items-start gap-3">
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
                                 {format(new Date(project.startDate), 'MMM dd')}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               </>
               )}

               {/* Right Sidebar for Updates and Issues tabs - Show Properties */}
               {(activeTab === 'updates' || activeTab === 'issues') && (
                  <div className="space-y-6">
                     {/* Properties */}
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                              Properties
                              <ChevronDown className="h-4 w-4" />
                           </button>
                           <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Plus className="h-4 w-4" style={{ color: '#8a8f98' }} />
                           </Button>
                        </div>
                        <div className="space-y-3">
                           {/* Status */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Status
                              </div>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button
                                       variant="outline"
                                       size="sm"
                                       className="w-full justify-start h-8 px-2 text-xs rounded-full"
                                       style={{
                                          background: project.status.color + '20',
                                          borderColor: project.status.color + '40',
                                          color: project.status.color,
                                       }}
                                    >
                                       {project.status.name}
                                    </Button>
                                 </PopoverTrigger>
                                 <PopoverContent className="w-48 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                                    <Command>
                                       <CommandInput placeholder="Search status..." />
                                       <CommandList>
                                          <CommandEmpty>No status found.</CommandEmpty>
                                          <CommandGroup>
                                             {status.map((s) => (
                                                <CommandItem
                                                   key={s.id}
                                                   onSelect={() => handleStatusChange(s.id)}
                                                   className="flex items-center justify-between"
                                                >
                                                   <div className="flex items-center gap-2">
                                                      <s.icon />
                                                      <span>{s.name}</span>
                                                   </div>
                                                   {project.status.id === s.id && <CheckIcon className="h-4 w-4" />}
                                                </CommandItem>
                                             ))}
                                          </CommandGroup>
                                       </CommandList>
                                    </Command>
                                 </PopoverContent>
                              </Popover>
                           </div>

                           {/* Priority */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Priority
                              </div>
                              <PrioritySelector
                                 priority={project.priority}
                                 onPriorityChange={handlePriorityChange}
                              />
                           </div>

                           {/* Lead */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Lead
                              </div>
                              <LeadSelector lead={project.lead} onLeadChange={handleLeadChange} />
                           </div>

                           {/* Members */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Members
                              </div>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button
                                       variant="outline"
                                       size="sm"
                                       className="w-full justify-start h-8 px-2 text-xs"
                                       style={{ borderColor: '#23252a', color: '#8a8f98' }}
                                    >
                                       <Users className="h-4 w-4 mr-2" />
                                       {project.members && project.members.length > 0
                                          ? `${project.members.length} member${project.members.length > 1 ? 's' : ''}`
                                          : 'Add members'}
                                    </Button>
                                 </PopoverTrigger>
                                 <PopoverContent className="w-64 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                                    <Command>
                                       <CommandInput placeholder="Search members..." />
                                       <CommandList>
                                          <CommandEmpty>No members found.</CommandEmpty>
                                          <CommandGroup>
                                             {availableMembers.map((user) => (
                                                <CommandItem
                                                   key={user.id}
                                                   onSelect={() => handleAddMember(user.id)}
                                                   className="flex items-center gap-2"
                                                >
                                                   <Avatar className="h-5 w-5">
                                                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                                                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                   </Avatar>
                                                   <span>{user.name}</span>
                                                </CommandItem>
                                             ))}
                                          </CommandGroup>
                                          {project.members && project.members.length > 0 && (
                                             <>
                                                <div className="border-t my-2" style={{ borderColor: '#23252a' }} />
                                                <CommandGroup>
                                                   {project.members.map((member) => (
                                                      <CommandItem
                                                         key={member.id}
                                                         onSelect={() => handleRemoveMember(member.id)}
                                                         className="flex items-center justify-between"
                                                      >
                                                         <div className="flex items-center gap-2">
                                                            <Avatar className="h-5 w-5">
                                                               <AvatarImage src={member.avatarUrl} alt={member.name} />
                                                               <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                                            </Avatar>
                                                            <span>{member.name}</span>
                                                         </div>
                                                         <X className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                                      </CommandItem>
                                                   ))}
                                                </CommandGroup>
                                             </>
                                          )}
                                       </CommandList>
                                    </Command>
                                 </PopoverContent>
                              </Popover>
                              {project.members && project.members.length > 0 && (
                                 <div className="flex flex-wrap gap-2 mt-2">
                                    {project.members.map((member) => (
                                       <div
                                          key={member.id}
                                          className="flex items-center gap-1 px-2 py-1 rounded-full"
                                          style={{ background: '#141516' }}
                                       >
                                          <Avatar className="h-5 w-5">
                                             <AvatarImage src={member.avatarUrl} alt={member.name} />
                                             <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs" style={{ color: '#f7f8f8' }}>
                                             {member.name}
                                          </span>
                                          <Button
                                             variant="ghost"
                                             size="icon"
                                             className="h-4 w-4 ml-1"
                                             onClick={() => handleRemoveMember(member.id)}
                                          >
                                             <X className="h-3 w-3" style={{ color: '#8a8f98' }} />
                                          </Button>
                                       </div>
                                    ))}
                                 </div>
                              )}
                           </div>

                           {/* Start Date */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Start date
                              </div>
                              <DatePicker
                                 date={project.startDate ? new Date(project.startDate) : undefined}
                                 onDateChange={handleStartDateChange}
                              />
                           </div>

                           {/* Target Date */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Target date
                              </div>
                              <DatePicker
                                 date={project.targetDate ? new Date(project.targetDate) : undefined}
                                 onDateChange={handleTargetDateChange}
                              />
                           </div>

                           {/* Teams */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Teams
                              </div>
                              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: '#141516' }}>
                                 <Avatar className="h-5 w-5">
                                    <AvatarImage src={project.lead.avatarUrl} alt={project.lead.name} />
                                    <AvatarFallback>{project.lead.name.charAt(0)}</AvatarFallback>
                                 </Avatar>
                                 <span className="text-xs" style={{ color: '#f7f8f8' }}>
                                    {project.lead.name}
                                 </span>
                              </div>
                           </div>

                           {/* Labels */}
                           <div>
                              <div className="text-xs mb-1.5" style={{ color: '#8a8f98' }}>
                                 Labels
                              </div>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button
                                       variant="outline"
                                       size="sm"
                                       className="w-full justify-start h-8 px-2 text-xs"
                                       style={{ borderColor: '#23252a', color: '#8a8f98' }}
                                    >
                                       <Tag className="h-4 w-4 mr-2" />
                                       Add label
                                    </Button>
                                 </PopoverTrigger>
                                 <PopoverContent className="w-64 p-0" style={{ background: '#0f1011', borderColor: '#23252a' }}>
                                    <Command>
                                       <CommandInput placeholder="Search labels..." />
                                       <CommandList>
                                          <CommandEmpty>No labels found.</CommandEmpty>
                                          <CommandGroup>
                                             {availableLabels.map((label) => (
                                                <CommandItem
                                                   key={label.id}
                                                   onSelect={() => handleAddLabel(label.id)}
                                                   className="flex items-center gap-2"
                                                >
                                                   <div
                                                      className="w-3 h-3 rounded-full"
                                                      style={{ background: label.color }}
                                                   />
                                                   <span>{label.name}</span>
                                                </CommandItem>
                                             ))}
                                          </CommandGroup>
                                          {project.labels && project.labels.length > 0 && (
                                             <>
                                                <div className="border-t my-2" style={{ borderColor: '#23252a' }} />
                                                <CommandGroup>
                                                   {project.labels.map((label) => (
                                                      <CommandItem
                                                         key={label.id}
                                                         onSelect={() => handleRemoveLabel(label.id)}
                                                         className="flex items-center justify-between"
                                                      >
                                                         <div className="flex items-center gap-2">
                                                            <div
                                                               className="w-3 h-3 rounded-full"
                                                               style={{ background: label.color }}
                                                            />
                                                            <span>{label.name}</span>
                                                         </div>
                                                         <X className="h-4 w-4" style={{ color: '#8a8f98' }} />
                                                      </CommandItem>
                                                   ))}
                                                </CommandGroup>
                                             </>
                                          )}
                                       </CommandList>
                                    </Command>
                                 </PopoverContent>
                              </Popover>
                              {project.labels && project.labels.length > 0 && (
                                 <div className="flex flex-wrap gap-2 mt-2">
                                    {project.labels.map((label) => (
                                       <div
                                          key={label.id}
                                          className="flex items-center gap-1 px-2 py-1 rounded-full"
                                          style={{ background: '#141516' }}
                                       >
                                          <div
                                             className="w-2 h-2 rounded-full"
                                             style={{ background: label.color }}
                                          />
                                          <span className="text-xs" style={{ color: '#f7f8f8' }}>
                                             {label.name}
                                          </span>
                                          <Button
                                             variant="ghost"
                                             size="icon"
                                             className="h-4 w-4 ml-1"
                                             onClick={() => handleRemoveLabel(label.id)}
                                          >
                                             <X className="h-3 w-3" style={{ color: '#8a8f98' }} />
                                          </Button>
                                       </div>
                                    ))}
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>

                     {/* Milestones */}
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                              Milestones
                              <ChevronDown className="h-4 w-4" />
                           </button>
                           <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => setEditingMilestone('new')}
                           >
                              <Plus className="h-4 w-4" style={{ color: '#8a8f98' }} />
                           </Button>
                        </div>
                        <p className="text-xs mb-3" style={{ color: '#8a8f98' }}>
                           Add milestones to organize work within your project and break it into more granular stages.{' '}
                           <a href="#" className="underline">
                              Learn more
                           </a>
                           .
                        </p>
                        {project.milestones && project.milestones.length > 0 && (
                           <div className="space-y-2">
                              {project.milestones.map((milestone) => (
                                 <div
                                    key={milestone.id}
                                    className="p-2 rounded border"
                                    style={{ background: '#141516', borderColor: '#23252a' }}
                                 >
                                    <div className="text-sm font-medium" style={{ color: '#f7f8f8' }}>
                                       {milestone.title}
                                    </div>
                                    {milestone.dueDate && (
                                       <div className="text-xs mt-1" style={{ color: '#8a8f98' }}>
                                          Due: {format(new Date(milestone.dueDate), 'MMM dd, yyyy')}
                                       </div>
                                    )}
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>

                     {/* Activity */}
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <button className="flex items-center gap-2 text-sm font-medium" style={{ color: '#f7f8f8' }}>
                              Activity
                              <ChevronDown className="h-4 w-4" />
                           </button>
                           <a href="#" className="text-xs underline" style={{ color: '#8a8f98' }}>
                              See all
                           </a>
                        </div>
                        <div className="space-y-3">
                           <div className="flex items-start gap-3">
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
                                    {format(new Date(project.startDate), 'MMM dd')}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

