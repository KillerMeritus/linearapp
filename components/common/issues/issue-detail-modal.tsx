'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
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
         <DialogContent className="max-w-5xl h-[90vh] p-0 gap-0 glass-effect">
            {/* Header */}
            <DialogHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between">
               <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-muted-foreground">{issue.identifier}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                     <LinkIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                     <MoreHorizontal className="h-4 w-4" />
                  </Button>
               </div>
               <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onOpenChange(false)}>
                  <X className="h-4 w-4" />
               </Button>
            </DialogHeader>

            <div className="flex flex-1 overflow-hidden">
               {/* Main Content */}
               <div className="flex-1 overflow-y-auto px-6 py-6">
                  {/* Title */}
                  <h1 className="text-2xl font-semibold mb-6">{issue.title}</h1>

                  {/* Description */}
                  <div className="mb-8">
                     <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Description</h3>
                     <p className="text-sm leading-relaxed">{issue.description}</p>
                  </div>

                  <Separator className="my-6" />

                  {/* Comments Section */}
                  <div className="mb-6">
                     <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Comments ({comments.length})
                     </h3>

                     <div className="space-y-4 mb-4">
                        {comments.map((c) => (
                           <div key={c.id} className="flex gap-3">
                              <Avatar className="h-8 w-8">
                                 <AvatarImage src={c.author.avatar} />
                                 <AvatarFallback>{c.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium">{c.author.name}</span>
                                    <span className="text-xs text-muted-foreground">
                                       {formatDistanceToNow(new Date(c.createdAt), { addSuffix: true })}
                                    </span>
                                 </div>
                                 <p className="text-sm text-foreground/90">{c.content}</p>
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Add Comment */}
                     <div className="flex gap-3">
                        <Avatar className="h-8 w-8">
                           <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                           <AvatarFallback>RH</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                           <Textarea
                              placeholder="Add a comment..."
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="min-h-[80px] mb-2"
                              onKeyDown={(e) => {
                                 if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                                    handleAddComment();
                                 }
                              }}
                           />
                           <Button onClick={handleAddComment} size="sm">
                              Comment
                           </Button>
                        </div>
                     </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Activity Feed */}
                  <div>
                     <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Activity
                     </h3>

                     <div className="space-y-3">
                        {activities.map((activity) => (
                           <div key={activity.id} className="flex gap-3 text-sm">
                              <div className="flex-shrink-0 w-1 bg-border rounded-full" />
                              <div className="flex-1 pb-3">
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

               {/* Right Sidebar - Properties */}
               <div className="w-80 border-l border-border overflow-y-auto px-6 py-6 bg-muted/20">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-4 tracking-wider">
                     Properties
                  </h3>

                  <div className="space-y-5">
                     {/* Status */}
                     <div>
                        <label className="text-xs text-muted-foreground mb-2 block flex items-center gap-1.5">
                           <AlertCircle className="h-3 w-3" />
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
                        <label className="text-xs text-muted-foreground mb-2 block flex items-center gap-1.5">
                           <AlertCircle className="h-3 w-3" />
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
                        <label className="text-xs text-muted-foreground mb-2 block flex items-center gap-1.5">
                           <User className="h-3 w-3" />
                           Assignee
                        </label>
                        {issue.assignee ? (
                           <div className="flex items-center gap-2 p-2 rounded-md border border-border">
                              <Avatar className="h-6 w-6">
                                 <AvatarImage src={issue.assignee.avatarUrl} />
                                 <AvatarFallback>{issue.assignee.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{issue.assignee.name}</span>
                           </div>
                        ) : (
                           <Button variant="outline" className="w-full justify-start text-muted-foreground">
                              No assignee
                           </Button>
                        )}
                     </div>

                     {/* Labels */}
                     <div>
                        <label className="text-xs text-muted-foreground mb-2 block flex items-center gap-1.5">
                           <Tag className="h-3 w-3" />
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
                           <label className="text-xs text-muted-foreground mb-2 block flex items-center gap-1.5">
                              <Folder className="h-3 w-3" />
                              Project
                           </label>
                           <div className="p-2 rounded-md border border-border">
                              <span className="text-sm">{issue.project.name}</span>
                           </div>
                        </div>
                     )}

                     {/* Due Date */}
                     {issue.dueDate && (
                        <div>
                           <label className="text-xs text-muted-foreground mb-2 block flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              Due Date
                           </label>
                           <div className="p-2 rounded-md border border-border">
                              <span className="text-sm">
                                 {new Date(issue.dueDate).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                 })}
                              </span>
                           </div>
                        </div>
                     )}

                     <Separator />

                     {/* Metadata */}
                     <div className="space-y-2 text-xs text-muted-foreground">
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
