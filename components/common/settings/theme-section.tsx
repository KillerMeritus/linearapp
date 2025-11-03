'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
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
import React from 'react';

export function ThemeSection() {
   const { theme, setTheme } = useTheme();
   const { preferences, updateThemePreferences, updateTheme } = usePreferencesStore();
   const themePreferences = preferences?.themePreferences;
   const [mounted, setMounted] = React.useState(false);

   // Return early if themePreferences is not initialized
   if (!themePreferences) {
      return null;
   }

   // Ensure component is mounted to avoid hydration mismatch
   React.useEffect(() => {
      setMounted(true);
   }, []);

   // Sync theme on mount
   React.useEffect(() => {
      if (mounted && themePreferences.interfaceTheme && themePreferences.interfaceTheme !== theme) {
         setTheme(themePreferences.interfaceTheme);
      }
   }, [mounted, themePreferences.interfaceTheme, theme, setTheme]);

   const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
      updateTheme(newTheme);
      updateThemePreferences({ interfaceTheme: newTheme });
      setTheme(newTheme);
      toast.success('Theme updated');
   };

   // Get current theme value - use preferences store as source of truth
   const currentTheme = mounted ? (theme || themePreferences.interfaceTheme || 'system') : themePreferences.interfaceTheme || 'system';

   return (
      <div className="space-y-6">
         <div className="space-y-2">
            <Label htmlFor="interface-theme">Interface theme</Label>
            <p className="text-sm text-muted-foreground">
               Select or customize your interface color scheme.
            </p>
            <Select
               value={currentTheme}
               onValueChange={handleThemeChange}
               disabled={!mounted}
            >
               <SelectTrigger id="interface-theme" className="w-full">
                  <SelectValue placeholder="Select theme" />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="light">
                     <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        <span>Aa Light</span>
                     </div>
                  </SelectItem>
                  <SelectItem value="dark">
                     <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        <span>Aa Dark</span>
                     </div>
                  </SelectItem>
                  <SelectItem value="system">
                     <div className="flex items-center gap-2">
                        <Laptop className="h-4 w-4" />
                        <span>System</span>
                     </div>
                  </SelectItem>
               </SelectContent>
            </Select>
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="translucent-ui" className="cursor-pointer">
                  Translucent UI
               </Label>
               <p className="text-sm text-muted-foreground">
                  Use transparency in UI elements like the sidebar and modal windows.
               </p>
            </div>
            <Switch
               id="translucent-ui"
               checked={themePreferences.translucentUI}
               onCheckedChange={(checked) => {
                  updateThemePreferences({ translucentUI: checked });
                  toast.success('Translucent UI preference updated');
               }}
            />
         </div>
      </div>
   );
}

