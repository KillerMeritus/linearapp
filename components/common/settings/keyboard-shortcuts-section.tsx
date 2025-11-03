'use client';

import { Keyboard, RotateCcw } from 'lucide-react';
import { usePreferencesStore, KeyboardShortcuts } from '@/store/preferences-store';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import { useState } from 'react';

type ShortcutKey = keyof KeyboardShortcuts;

const shortcutLabels: Record<ShortcutKey, string> = {
   commandPalette: 'Command Palette',
   createIssue: 'Create Issue',
   search: 'Search',
   goToInbox: 'Go to Inbox',
   goToIssues: 'Go to Issues',
   goToTeams: 'Go to Teams',
   goToProjects: 'Go to Projects',
   goToMembers: 'Go to Members',
   goToSettings: 'Go to Settings',
};

const shortcutDescriptions: Record<ShortcutKey, string> = {
   commandPalette: 'Open command palette',
   createIssue: 'Create a new issue',
   search: 'Focus search input',
   goToInbox: 'Navigate to inbox',
   goToIssues: 'Navigate to issues',
   goToTeams: 'Navigate to teams',
   goToProjects: 'Navigate to projects',
   goToMembers: 'Navigate to members',
   goToSettings: 'Navigate to settings',
};

// Helper to get default shortcuts
const getDefaultShortcuts = () => {
   if (typeof window === 'undefined') {
      return {
         commandPalette: 'cmd+k',
         createIssue: 'c',
         search: '/',
         goToInbox: 'g+i',
         goToIssues: 'g+i',
         goToTeams: 'g+t',
         goToProjects: 'g+p',
         goToMembers: 'g+m',
         goToSettings: 'g+s',
      };
   }
   const store = usePreferencesStore.getState();
   return store.preferences.keyboardShortcuts;
};

export function KeyboardShortcutsSection() {
   const { preferences, updateKeyboardShortcuts, resetPreferences } =
      usePreferencesStore();
   const [shortcuts, setShortcuts] = useState(preferences.keyboardShortcuts);

   const handleShortcutChange = (
      key: ShortcutKey,
      value: string
   ) => {
      setShortcuts({
         ...shortcuts,
         [key]: value,
      });
   };

   const handleSave = () => {
      updateKeyboardShortcuts(shortcuts);
      toast.success('Keyboard shortcuts updated', {
         description: 'Your keyboard shortcuts have been saved.',
      });
   };

   const handleReset = () => {
      const defaults = getDefaultShortcuts();
      setShortcuts(defaults);
      updateKeyboardShortcuts(defaults);
      toast.success('Keyboard shortcuts reset', {
         description: 'All shortcuts have been reset to defaults.',
      });
   };

   const formatShortcut = (shortcut: string) => {
      return shortcut
         .replace('cmd', '⌘')
         .replace('ctrl', 'Ctrl')
         .replace('shift', '⇧')
         .replace('alt', '⌥')
         .replace('+', ' + ');
   };

   return (
      <Card>
         <CardHeader>
            <div className="flex items-center justify-between">
               <div>
                  <CardTitle>Keyboard Shortcuts</CardTitle>
                  <CardDescription>
                     Customize keyboard shortcuts to match your workflow.
                  </CardDescription>
               </div>
               <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Defaults
               </Button>
            </div>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="space-y-4">
               {(Object.keys(shortcuts) as Array<ShortcutKey>).map((key) => (
                  <div key={key} className="flex items-center justify-between gap-4">
                     <div className="flex-1">
                        <Label htmlFor={key} className="font-medium">
                           {shortcutLabels[key]}
                        </Label>
                        <p className="text-sm text-muted-foreground">
                           {shortcutDescriptions[key]}
                        </p>
                     </div>
                     <div className="flex items-center gap-2">
                        <Input
                           id={key}
                           value={shortcuts[key]}
                           onChange={(e) => handleShortcutChange(key, e.target.value)}
                           className="w-32 text-right font-mono text-sm"
                           placeholder="e.g., cmd+k"
                        />
                        <span className="text-xs text-muted-foreground min-w-[80px]">
                           {formatShortcut(shortcuts[key])}
                        </span>
                     </div>
                  </div>
               ))}
            </div>

            <div className="pt-4 border-t">
               <Button onClick={handleSave}>Save Changes</Button>
            </div>

            <div className="rounded-lg bg-muted p-4 space-y-2">
               <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4 text-muted-foreground" />
                  <Label className="text-sm font-medium">Shortcut Format</Label>
               </div>
               <p className="text-xs text-muted-foreground">
                  Use modifiers like <code className="px-1 py-0.5 bg-background rounded">cmd</code> or{' '}
                  <code className="px-1 py-0.5 bg-background rounded">ctrl</code>, followed by a{' '}
                  <code className="px-1 py-0.5 bg-background rounded">+</code> and the key.
                  Example: <code className="px-1 py-0.5 bg-background rounded">cmd+k</code> or{' '}
                  <code className="px-1 py-0.5 bg-background rounded">g+i</code>
               </p>
            </div>
         </CardContent>
      </Card>
   );
}

