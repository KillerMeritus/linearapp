'use client';

import { useMemo, useEffect } from 'react';
import { useIssuesStore } from '@/store/issues-store';
import { useCreateIssueStore } from '@/store/create-issue-store';
import { useProjectsStore } from '@/store/projects-store';
import { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Plus, Filter, SlidersHorizontal, FileText } from 'lucide-react';
import { IssueLine } from '../issues/issue-line';
import { Issue } from '@/data/issues';
import { CreateNewIssueWithProject } from './create-issue-with-project';

interface ProjectIssuesProps {
   project: Project;
}

export function ProjectIssues({ project }: ProjectIssuesProps) {
   const filterByProject = useIssuesStore((s) => s.filterByProject);
   const getAllIssues = useIssuesStore((s) => s.getAllIssues);
   const { openModal } = useCreateIssueStore();
   const issues = useIssuesStore((s) => s.issues);

   // Get issues for this project
   const projectIssues = useMemo(() => {
      return filterByProject(project.id);
   }, [filterByProject, project.id, issues]);

   const handleCreateIssue = () => {
      // Open create issue modal with project pre-selected
      openModal();
   };

   return (
      <>
         <CreateNewIssueWithProject project={project} />
         <div className="max-w-4xl mx-auto">
            {/* Header Actions */}
            <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" style={{ borderColor: '#23252a', color: '#8a8f98' }}>
                     <Filter className="h-4 w-4 mr-2" />
                     Filter
                  </Button>
                  <Button variant="outline" size="sm" style={{ borderColor: '#23252a', color: '#8a8f98' }}>
                     <SlidersHorizontal className="h-4 w-4 mr-2" />
                     Display
                  </Button>
               </div>
            </div>

            {/* Issues List or Empty State */}
            {projectIssues.length === 0 ? (
               <div className="text-center py-16">
                  <div className="flex justify-center mb-6">
                     <div className="grid grid-cols-2 gap-4">
                        <div
                           className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                           style={{ borderColor: '#23252a' }}
                        />
                        <div
                           className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                           style={{ borderColor: '#23252a' }}
                        />
                        <div
                           className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                           style={{ borderColor: '#23252a' }}
                        />
                        <div
                           className="w-16 h-16 rounded-full flex items-center justify-center"
                           style={{ background: '#5e6ad2' }}
                        >
                           <FileText className="h-8 w-8" style={{ color: '#ffffff' }} />
                        </div>
                     </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#f7f8f8' }}>
                     Add issues to the project
                  </h3>
                  <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#8a8f98' }}>
                     Start building your project by creating an issue. You can also add teams, team members, and project dates in the project sidebar.
                  </p>
                  <Button
                     size="lg"
                     onClick={handleCreateIssue}
                     style={{ background: '#5e6ad2', color: '#ffffff' }}
                  >
                     <Plus className="h-4 w-4 mr-2" />
                     Create new issue
                     <span className="ml-2 text-xs opacity-75">C</span>
                  </Button>
               </div>
            ) : (
               <div className="space-y-2">
                  {projectIssues.map((issue: Issue) => (
                     <IssueLine key={issue.id} issue={issue} />
                  ))}
               </div>
            )}
         </div>
      </>
   );
}

