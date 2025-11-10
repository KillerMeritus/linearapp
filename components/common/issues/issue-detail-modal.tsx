'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import {
   X,
   MoreHorizontal,
   Link as LinkIcon,
   MessageSquare,
   Clock,
   User,
   Calendar,
   Tag,
   Folder,
   AlertCircle,
} from 'lucide-react';
import { Issue } from '@/data/issues';
import { users } from '@/data/users';
import { projects } from '@/data/projects';
import { labels } from '@/data/labels';
import { status as statuses, Status } from '@/data/status';
import { priorities, Priority } from '@/data/priorities';
import { formatDistanceToNow } from 'date-fns';

interface IssueDetailModalProps {
   issue: Issue | null;
   open: boolean;
   onOpenChange: (open: boolean) => void;
}

interface Comment {
   id: string;
   author: {
      name: string;
      avatar: string;
   };
   content: string;
   createdAt: string;
}

export function IssueDetailModal({ issue, open, onOpenChange }: IssueDetailModalProps) {
   const [comment, setComment] = React.useState('');
   const [comments, setComments] = React.useState<Comment[]>([
      {
         id: '1',
         author: {
            name: 'Richard Hendricks',
            avatar: 'https://i.pravatar.cc/150?img=1',
         },
         content: 'This needs to be prioritized for the next sprint.',
         createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
         id: '2',
         author: {
            name: 'Dinesh Chugtai',
            avatar: 'https://i.pravatar.cc/150?img=2',
         },
         content: 'I can start working on this tomorrow.',
         createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      },
   ]);

   const [activities] = React.useState([
      {
         id: '1',
         type: 'status_change',
         from: 'Todo',
         to: 'In Progress',
         user: 'Richard Hendricks',
         timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      },
      {
         id: '2',
         type: 'assignment',
         user: 'Richard Hendricks',
         assignee: 'Dinesh Chugtai',
         timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      },
      {
         id: '3',
         type: 'created',
         user: 'Richard Hendricks',
         timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
   ]);

   if (!issue) return null;

   const handleAddComment = () => {
      if (!comment.trim()) return;

      const newComment: Comment = {
         id: Date.now().toString(),
         author: {
            name: 'Richard Hendricks',
            avatar: 'https://i.pravatar.cc/150?img=1',
         },
         content: comment,
         createdAt: new Date().toISOString(),
      };

      setComments([...comments, newComment]);
      setComment('');
   };

   const StatusIcon = issue.status.icon;
   const PriorityIcon = issue.priority.icon;

   return (
      <Dialog open={open} onOpenChange={onOpenChange}>
         <DialogContent className="!w-[98vw] !max-w-[98vw] sm:!max-w-[98vw] !h-[98vh] !max-h-[98vh] p-0 gap-0 glass-effect [&>button]:hidden !translate-x-[-50%] !translate-y-[-50%] !rounded-lg">
            {/* Header */}
            <DialogHeader className="px-12 py-6 border-b border-border flex flex-row items-center justify-between">
               <DialogTitle className="sr-only">{issue.title}</DialogTitle>
               <div className="flex items-center gap-4">
                  <span className="text-base font-mono text-muted-foreground">{issue.identifier}</span>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                     <LinkIcon className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                     <MoreHorizontal className="h-5 w-5" />
                  </Button>
               </div>
               <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => onOpenChange(false)}
               >
                  <X className="h-5 w-5" />
               </Button>
            </DialogHeader>

            <div className="flex flex-1 overflow-hidden">
               {/* Main Content - Scrollable */}
               <div 
                  className="flex-1 overflow-y-auto"
                  data-restore-scroll-view="issue-view"
                  data-view-id="issue-view"
                  tabIndex={0}
                  style={{ scrollbarGutter: 'stable' }}
               >
                  {/* Centered Content Container */}
                  <div className="max-w-4xl mx-auto px-12 py-10">
                     {/* Title - Editable */}
                     <div className="mb-8">
                        <div
                           contentEditable={true}
                           spellCheck={true}
                           role="textbox"
                           aria-readonly="false"
                           aria-multiline="false"
                           aria-label="Issue title"
                           translate="no"
                           className="text-4xl font-semibold text-center outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1 -mx-2 -my-1 min-h-[60px]"
                           suppressContentEditableWarning={true}
                           onBlur={(e) => {
                              // Handle title update here if needed
                           }}
                        >
                           {issue.title}
                        </div>
                     </div>

                     {/* Description */}
                     <div className="mb-12">
                        <div
                           contentEditable={true}
                           spellCheck={true}
                           role="textbox"
                           aria-readonly="false"
                           aria-multiline="true"
                           aria-label="Issue description"
                           className="text-lg leading-relaxed text-foreground/90 text-center whitespace-pre-wrap break-words outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1 -mx-2 -my-1 min-h-[100px]"
                           suppressContentEditableWarning={true}
                           onBlur={(e) => {
                              // Handle description update here if needed
                           }}
                        >
                           {issue.description || 'Add a description...'}
                        </div>
                     </div>

                     <Separator className="my-10" />

                     {/* Comments Section */}
                     <div className="mb-10">
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                           <MessageSquare className="h-6 w-6" />
                           Comments ({comments.length})
                        </h3>

                        <div className="space-y-6 mb-8">
                           {comments.map((c) => (
                              <div key={c.id} className="flex gap-5">
                                 <Avatar className="h-12 w-12">
                                    <AvatarImage src={c.author.avatar} />
                                    <AvatarFallback>{c.author.name.charAt(0)}</AvatarFallback>
                                 </Avatar>
                                 <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                       <span className="text-lg font-medium">{c.author.name}</span>
                                       <span className="text-base text-muted-foreground">
                                          {formatDistanceToNow(new Date(c.createdAt), { addSuffix: true })}
                                       </span>
                                    </div>
                                    <p className="text-lg text-foreground/90 leading-relaxed">{c.content}</p>
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Add Comment */}
                        <div className="flex gap-5">
                           <Avatar className="h-12 w-12">
                              <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                              <AvatarFallback>RH</AvatarFallback>
                           </Avatar>
                           <div className="flex-1">
                              <Textarea
                                 placeholder="Add a comment..."
                                 value={comment}
                                 onChange={(e) => setComment(e.target.value)}
                                 className="min-h-[120px] mb-4 text-lg"
                                 onKeyDown={(e) => {
                                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                                       handleAddComment();
                                    }
                                 }}
                              />
                              <Button onClick={handleAddComment} size="lg">
                                 Comment
                              </Button>
                           </div>
                        </div>
                     </div>

                     <Separator className="my-10" />

                     {/* Activity Feed */}
                     <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-3">
                           <Clock className="h-6 w-6" />
                           Activity
                        </h3>

                        <div className="space-y-5">
                           {activities.map((activity) => (
                              <div key={activity.id} className="flex gap-5 text-lg">
                                 <div className="flex-shrink-0 w-1 bg-border rounded-full" />
                                 <div className="flex-1 pb-5">
                                    {activity.type === 'status_change' && (
                                       <p className="text-muted-foreground">
                                          <span className="font-medium text-foreground">{activity.user}</span> changed
                                          status from <Badge variant="outline">{activity.from}</Badge> to{' '}
                                          <Badge variant="outline">{activity.to}</Badge>
                                       </p>
                                    )}
                                    {activity.type === 'assignment' && (
                                       <p className="text-muted-foreground">
                                          <span className="font-medium text-foreground">{activity.user}</span> assigned
                                          to <span className="font-medium text-foreground">{activity.assignee}</span>
                                       </p>
                                    )}
                                    {activity.type === 'created' && (
                                       <p className="text-muted-foreground">
                                          <span className="font-medium text-foreground">{activity.user}</span> created
                                          this issue
                                       </p>
                                    )}
                                    <span className="text-xs text-muted-foreground">
                                       {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                                    </span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Sidebar - Properties */}
               <div className="w-[450px] border-l border-border overflow-y-auto px-10 py-10 bg-muted/20">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-8 tracking-wider">
                     Properties
                  </h3>

                  <div className="space-y-8">
                     {/* Status */}
                     <div>
                        <label className="text-base text-muted-foreground mb-4 block flex items-center gap-2">
                           <AlertCircle className="h-5 w-5" />
                           Status
                        </label>
                        <Select defaultValue={issue.status.name}>
                           <SelectTrigger className="w-full">
                              <SelectValue>
                                 <div className="flex items-center gap-2">
                                    {StatusIcon && <span className="w-4 h-4"><StatusIcon /></span>}
                                    {issue.status.name}
                                 </div>
                              </SelectValue>
                           </SelectTrigger>
                           <SelectContent>
                              {statuses.map((status) => {
                                 const Icon = status.icon;
                                 return (
                                    <SelectItem key={status.name} value={status.name}>
                                       <div className="flex items-center gap-2">
                                          <span className="w-4 h-4"><Icon /></span>
                                          {status.name}
                                       </div>
                                    </SelectItem>
                                 );
                              })}
                           </SelectContent>
                        </Select>
                     </div>

                     {/* Priority */}
                     <div>
                        <label className="text-base text-muted-foreground mb-4 block flex items-center gap-2">
                           <AlertCircle className="h-5 w-5" />
                           Priority
                        </label>
                        <Select defaultValue={issue.priority.name}>
                           <SelectTrigger className="w-full">
                              <SelectValue>
                                 <div className="flex items-center gap-2">
                                    {PriorityIcon && <span className="w-4 h-4"><PriorityIcon /></span>}
                                    {issue.priority.name}
                                 </div>
                              </SelectValue>
                           </SelectTrigger>
                           <SelectContent>
                              {priorities.map((priority) => {
                                 const Icon = priority.icon;
                                 return (
                                    <SelectItem key={priority.name} value={priority.name}>
                                       <div className="flex items-center gap-2">
                                          <span className="w-4 h-4"><Icon /></span>
                                          {priority.name}
                                       </div>
                                    </SelectItem>
                                 );
                              })}
                           </SelectContent>
                        </Select>
                     </div>

                     {/* Assignee */}
                     <div>
                        <label className="text-base text-muted-foreground mb-4 block flex items-center gap-2">
                           <User className="h-5 w-5" />
                           Assignee
                        </label>
                        {issue.assignee ? (
                           <div className="flex items-center gap-4 p-4 rounded-md border border-border">
                              <Avatar className="h-10 w-10">
                                 <AvatarImage src={issue.assignee.avatarUrl} />
                                 <AvatarFallback>{issue.assignee.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-lg">{issue.assignee.name}</span>
                           </div>
                        ) : (
                           <Button variant="outline" className="w-full justify-start text-muted-foreground h-12 text-base">
                              No assignee
                           </Button>
                        )}
                     </div>

                     {/* Labels */}
                     <div>
                        <label className="text-base text-muted-foreground mb-4 block flex items-center gap-2">
                           <Tag className="h-5 w-5" />
                           Labels
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                           {issue.labels && issue.labels.length > 0 ? (
                              issue.labels.map((label) => (
                                 <Badge
                                    key={label.name}
                                    variant="secondary"
                                    className="text-xs"
                                    style={{
                                       backgroundColor: label.color + '20',
                                       color: label.color,
                                       borderColor: label.color + '40',
                                    }}
                                 >
                                    {label.name}
                                 </Badge>
                              ))
                           ) : (
                              <span className="text-sm text-muted-foreground">No labels</span>
                           )}
                        </div>
                     </div>

                     {/* Project */}
                     {issue.project && (
                        <div>
                           <label className="text-base text-muted-foreground mb-4 block flex items-center gap-2">
                              <Folder className="h-5 w-5" />
                              Project
                           </label>
                           <div className="p-4 rounded-md border border-border">
                              <span className="text-lg">{issue.project.name}</span>
                           </div>
                        </div>
                     )}

                     {/* Due Date */}
                     {issue.dueDate && (
                        <div>
                           <label className="text-base text-muted-foreground mb-4 block flex items-center gap-2">
                              <Calendar className="h-5 w-5" />
                              Due Date
                           </label>
                           <div className="p-4 rounded-md border border-border">
                              <span className="text-lg">
                                 {new Date(issue.dueDate).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                 })}
                              </span>
                           </div>
                        </div>
                     )}

                     <Separator className="my-8" />

                     {/* Metadata */}
                     <div className="space-y-4 text-base text-muted-foreground">
                        <div>
                           Created {formatDistanceToNow(new Date(issue.createdAt), { addSuffix: true })}
                        </div>
                        <div>Updated 2 hours ago</div>
                     </div>
                  </div>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
}
