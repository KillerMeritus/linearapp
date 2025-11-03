'use client';

import { User, Settings as SettingsIcon, Bell, Keyboard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileSection } from './profile-section';
import { PreferencesSection } from './preferences-section';
import { NotificationsSection } from './notifications-section';
import { KeyboardShortcutsSection } from './keyboard-shortcuts-section';

export function UserPreferences() {
   return (
      <div className="w-full max-w-7xl mx-auto px-8 py-8">
         <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-1">Preferences</h1>
            <p className="text-muted-foreground">
               Manage your personal profile, workspace settings, and preferences.
            </p>
         </div>

         <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
               <TabsTrigger value="profile" className="gap-2">
                  <User className="h-4 w-4" />
                  Profile
               </TabsTrigger>
               <TabsTrigger value="preferences" className="gap-2">
                  <SettingsIcon className="h-4 w-4" />
                  Preferences
               </TabsTrigger>
               <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
               </TabsTrigger>
               <TabsTrigger value="keyboard" className="gap-2">
                  <Keyboard className="h-4 w-4" />
                  Keyboard Shortcuts
               </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
               <ProfileSection />
            </TabsContent>

            <TabsContent value="preferences">
               <PreferencesSection />
            </TabsContent>

            <TabsContent value="notifications">
               <NotificationsSection />
            </TabsContent>

            <TabsContent value="keyboard">
               <KeyboardShortcutsSection />
            </TabsContent>
         </Tabs>
      </div>
   );
}

