'use client';

import { Bell, Mail, Smartphone, Hash, Calendar, Users, FolderOpen } from 'lucide-react';
import { usePreferencesStore } from '@/store/preferences-store';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export function NotificationsSection() {
   const { preferences, updateNotifications } = usePreferencesStore();
   const { notifications } = preferences;

   const handleToggle = (key: keyof typeof notifications, value: boolean) => {
      updateNotifications({ [key]: value });
      toast.success('Notification preferences updated');
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
               Manage how and when you receive notifications.
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
            {/* Notification Channels */}
            <div className="space-y-4">
               <div>
                  <Label className="text-base font-semibold">Notification Channels</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                     Choose how you want to receive notifications.
                  </p>
               </div>

               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Mail className="h-5 w-5 text-muted-foreground" />
                     <div>
                        <Label htmlFor="email-notifications" className="cursor-pointer">
                           Email Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">
                           Receive notifications via email
                        </p>
                     </div>
                  </div>
                  <Switch
                     id="email-notifications"
                     checked={notifications.emailNotifications}
                     onCheckedChange={(checked) =>
                        handleToggle('emailNotifications', checked)
                     }
                  />
               </div>

               <Separator />

               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Smartphone className="h-5 w-5 text-muted-foreground" />
                     <div>
                        <Label htmlFor="push-notifications" className="cursor-pointer">
                           Push Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">
                           Receive browser push notifications
                        </p>
                     </div>
                  </div>
                  <Switch
                     id="push-notifications"
                     checked={notifications.pushNotifications}
                     onCheckedChange={(checked) =>
                        handleToggle('pushNotifications', checked)
                     }
                  />
               </div>
            </div>

            <Separator />

            {/* Notification Types */}
            <div className="space-y-4">
               <div>
                  <Label className="text-base font-semibold">Notification Types</Label>
                  <p className="text-sm text-muted-foreground mb-4">
                     Select which events you want to be notified about.
                  </p>
               </div>

               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <div>
                           <Label htmlFor="issue-assigned" className="cursor-pointer">
                              Issue Assigned
                           </Label>
                           <p className="text-sm text-muted-foreground">
                              When an issue is assigned to you
                           </p>
                        </div>
                     </div>
                     <Switch
                        id="issue-assigned"
                        checked={notifications.issueAssigned}
                        onCheckedChange={(checked) => handleToggle('issueAssigned', checked)}
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Hash className="h-5 w-5 text-muted-foreground" />
                        <div>
                           <Label htmlFor="issue-mentioned" className="cursor-pointer">
                              Issue Mentioned
                           </Label>
                           <p className="text-sm text-muted-foreground">
                              When you're mentioned in an issue
                           </p>
                        </div>
                     </div>
                     <Switch
                        id="issue-mentioned"
                        checked={notifications.issueMentioned}
                        onCheckedChange={(checked) =>
                           handleToggle('issueMentioned', checked)
                        }
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-muted-foreground" />
                        <div>
                           <Label htmlFor="status-changed" className="cursor-pointer">
                              Status Changed
                           </Label>
                           <p className="text-sm text-muted-foreground">
                              When issue status changes
                           </p>
                        </div>
                     </div>
                     <Switch
                        id="status-changed"
                        checked={notifications.issueStatusChanged}
                        onCheckedChange={(checked) =>
                           handleToggle('issueStatusChanged', checked)
                        }
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                           <Label htmlFor="due-date-reminder" className="cursor-pointer">
                              Due Date Reminder
                           </Label>
                           <p className="text-sm text-muted-foreground">
                              Reminders for upcoming due dates
                           </p>
                        </div>
                     </div>
                     <Switch
                        id="due-date-reminder"
                        checked={notifications.issueDueDateReminder}
                        onCheckedChange={(checked) =>
                           handleToggle('issueDueDateReminder', checked)
                        }
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <FolderOpen className="h-5 w-5 text-muted-foreground" />
                        <div>
                           <Label htmlFor="project-updates" className="cursor-pointer">
                              Project Updates
                           </Label>
                           <p className="text-sm text-muted-foreground">
                              Updates about projects you're part of
                           </p>
                        </div>
                     </div>
                     <Switch
                        id="project-updates"
                        checked={notifications.projectUpdates}
                        onCheckedChange={(checked) =>
                           handleToggle('projectUpdates', checked)
                        }
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <div>
                           <Label htmlFor="team-updates" className="cursor-pointer">
                              Team Updates
                           </Label>
                           <p className="text-sm text-muted-foreground">
                              Updates about your teams
                           </p>
                        </div>
                     </div>
                     <Switch
                        id="team-updates"
                        checked={notifications.teamUpdates}
                        onCheckedChange={(checked) => handleToggle('teamUpdates', checked)}
                     />
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
}

