'use client';

import { usePreferencesStore } from '@/store/preferences-store';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

export function BehaviorSection() {
   const { preferences, updateBehavior } = usePreferencesStore();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   // Wait for hydration
   if (!mounted || !preferences?.behavior) {
      return null;
   }

   const behavior = preferences.behavior;

   const handleBehaviorChange = <K extends keyof typeof behavior>(
      key: K,
      value: typeof behavior[K]
   ) => {
      updateBehavior({ [key]: value });
      toast.success('Behavior preference updated');
   };

   return (
      <div className="space-y-6">
         <div>
            <h3 className="text-base font-semibold mb-1">Behavior</h3>
         </div>
         <div className="space-y-2">
            <Label htmlFor="default-home-view">Default home view</Label>
            <p className="text-sm text-muted-foreground">
               Which view is opened when you open up Linear.
            </p>
            <Select
               value={behavior.defaultHomeView}
               onValueChange={(value) =>
                  handleBehaviorChange(
                     'defaultHomeView',
                     value as 'active-issues' | 'my-issues' | 'all-issues' | 'backlog'
                  )
               }
            >
               <SelectTrigger id="default-home-view" className="w-full">
                  <SelectValue />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="active-issues">Active issues</SelectItem>
                  <SelectItem value="my-issues">My issues</SelectItem>
                  <SelectItem value="all-issues">All issues</SelectItem>
                  <SelectItem value="backlog">Backlog</SelectItem>
               </SelectContent>
            </Select>
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="developer-preview" className="cursor-pointer">
                  Developer preview
               </Label>
               <p className="text-sm text-muted-foreground">Enable experimental features.</p>
            </div>
            <Switch
               id="developer-preview"
               checked={behavior.developerPreview}
               onCheckedChange={(checked) => handleBehaviorChange('developerPreview', checked)}
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="open-in-desktop-app" className="cursor-pointer">
                  Open in desktop app
               </Label>
               <p className="text-sm text-muted-foreground">
                  Automatically open links in desktop app when possible.
               </p>
            </div>
            <Switch
               id="open-in-desktop-app"
               checked={behavior.openInDesktopApp}
               onCheckedChange={(checked) => handleBehaviorChange('openInDesktopApp', checked)}
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="auto-assign-to-self" className="cursor-pointer">
                  Auto-assign to self
               </Label>
               <p className="text-sm text-muted-foreground">
                  When creating new issues, always assign them to yourself by default.
               </p>
            </div>
            <Switch
               id="auto-assign-to-self"
               checked={behavior.autoAssignToSelf}
               onCheckedChange={(checked) => handleBehaviorChange('autoAssignToSelf', checked)}
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="on-git-branch-copy-move-to-in-progress" className="cursor-pointer">
                  On git branch copy, move issue to in progress
               </Label>
               <p className="text-sm text-muted-foreground">
                  After copying suggested git branch name, issue status is moved to started state.
               </p>
            </div>
            <Switch
               id="on-git-branch-copy-move-to-in-progress"
               checked={behavior.onGitBranchCopyMoveToInProgress}
               onCheckedChange={(checked) =>
                  handleBehaviorChange('onGitBranchCopyMoveToInProgress', checked)
               }
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="on-git-branch-copy-assign-to-self" className="cursor-pointer">
                  On git branch copy, assign to yourself
               </Label>
               <p className="text-sm text-muted-foreground">
                  After copying suggested git branch name, issue is assigned to yourself.
               </p>
            </div>
            <Switch
               id="on-git-branch-copy-assign-to-self"
               checked={behavior.onGitBranchCopyAssignToSelf}
               onCheckedChange={(checked) =>
                  handleBehaviorChange('onGitBranchCopyAssignToSelf', checked)
               }
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="open-links-in-new-window" className="cursor-pointer">
                  Open links in a new window
               </Label>
               <p className="text-sm text-muted-foreground">
                  Always open external links in a new window or tab.
               </p>
            </div>
            <Switch
               id="open-links-in-new-window"
               checked={behavior.openLinksInNewWindow}
               onCheckedChange={(checked) =>
                  handleBehaviorChange('openLinksInNewWindow', checked)
               }
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="double-click-to-edit" className="cursor-pointer">
                  Double click to edit
               </Label>
               <p className="text-sm text-muted-foreground">
                  Use double click instead of single click to edit documents and issue
                  descriptions.
               </p>
            </div>
            <Switch
               id="double-click-to-edit"
               checked={behavior.doubleClickToEdit}
               onCheckedChange={(checked) => handleBehaviorChange('doubleClickToEdit', checked)}
            />
         </div>
      </div>
   );
}

