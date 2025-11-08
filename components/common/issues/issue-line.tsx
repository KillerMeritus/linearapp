'use client';

import * as React from 'react';
import { Issue } from '@/data/issues';
import { format } from 'date-fns';
import { AssigneeUser } from './assignee-user';
import { LabelBadge } from './label-badge';
import { PrioritySelector } from './priority-selector';
import { ProjectBadge } from './project-badge';
import { StatusSelector } from './status-selector';
import { IssueDetailModal } from './issue-detail-modal';
import { motion } from 'motion/react';

import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu';
import { IssueContextMenu } from './issue-context-menu';

export function IssueLine({ issue, layoutId = false }: { issue: Issue; layoutId?: boolean }) {
   const [detailOpen, setDetailOpen] = React.useState(false);

   return (
      <>
         <IssueDetailModal issue={issue} open={detailOpen} onOpenChange={setDetailOpen} />
         <ContextMenu>
            <ContextMenuTrigger asChild>
               <motion.div
                  {...(layoutId && { layoutId: `issue-line-${issue.identifier}` })}
                  onClick={() => setDetailOpen(true)}
                  className="w-full flex items-center justify-start min-h-[72px] px-10 py-4 hover:bg-sidebar/50 cursor-pointer gap-4"
               >
               <div className="flex items-center gap-1 shrink-0">
                  <PrioritySelector priority={issue.priority} issueId={issue.id} />
                  <span className="text-sm hidden sm:inline-block text-muted-foreground font-medium w-[72px] truncate shrink-0 mr-1">
                     {issue.identifier}
                  </span>
                  <StatusSelector status={issue.status} issueId={issue.id} />
               </div>
               <span className="flex-1 min-w-0 flex items-center justify-start mr-4 ml-2">
                  <span className="text-sm sm:text-base font-medium sm:font-semibold line-clamp-3 break-words">
                     {issue.title}
                  </span>
               </span>
               <div className="flex items-center justify-end gap-2 shrink-0 sm:w-fit">
                  <div className="w-3 shrink-0"></div>
                  <div className="-space-x-5 hover:space-x-1 lg:space-x-1 items-center justify-end hidden sm:flex duration-200 transition-all">
                     <LabelBadge label={issue.labels} />
                     {issue.project && <ProjectBadge project={issue.project} />}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline-block">
                     {format(new Date(issue.createdAt), 'MMM dd')}
                  </span>
                  <AssigneeUser user={issue.assignee} />
               </div>
            </motion.div>
         </ContextMenuTrigger>
         <IssueContextMenu issueId={issue.id} />
      </ContextMenu>
      </>
   );
}
