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

export function DisplaySection() {
   const { preferences, updateDisplay } = usePreferencesStore();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   // Wait for hydration
   if (!mounted || !preferences?.display) {
      return null;
   }

   const display = preferences.display;

   const handleDisplayChange = <K extends keyof typeof display>(
      key: K,
      value: typeof display[K]
   ) => {
      updateDisplay({ [key]: value });
      toast.success('Display preference updated');
   };

   return (
      <div className="space-y-6">
         <div>
            <h3 className="text-base font-semibold mb-1">Display</h3>
         </div>
         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="display-full-names" className="cursor-pointer">
                  Display full names
               </Label>
               <p className="text-sm text-muted-foreground">
                  Show full names of users instead of shorter display names.
               </p>
            </div>
            <Switch
               id="display-full-names"
               checked={display.displayFullNames}
               onCheckedChange={(checked) => handleDisplayChange('displayFullNames', checked)}
            />
         </div>

         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="use-pointer-cursors" className="cursor-pointer">
                  Use pointer cursors
               </Label>
               <p className="text-sm text-muted-foreground">
                  Change the cursor to a pointer when hovering over any interactive element.
               </p>
            </div>
            <Switch
               id="use-pointer-cursors"
               checked={display.usePointerCursors}
               onCheckedChange={(checked) => handleDisplayChange('usePointerCursors', checked)}
            />
         </div>

         <div className="space-y-2">
            <Label htmlFor="font-size">Font size</Label>
            <p className="text-sm text-muted-foreground">Adjust your font size.</p>
            <Select
               value={display.fontSize}
               onValueChange={(value) =>
                  handleDisplayChange('fontSize', value as 'small' | 'default' | 'large')
               }
            >
               <SelectTrigger id="font-size" className="w-full">
                  <SelectValue />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
               </SelectContent>
            </Select>
         </div>

         <div className="space-y-2">
            <Label htmlFor="first-day-of-week">First day of the week</Label>
            <p className="text-sm text-muted-foreground">
               Set the first day of the week for the date picker.
            </p>
            <Select
               value={display.firstDayOfWeek}
               onValueChange={(value) =>
                  handleDisplayChange('firstDayOfWeek', value as 'sunday' | 'monday')
               }
            >
               <SelectTrigger id="first-day-of-week" className="w-full">
                  <SelectValue />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value="sunday">Sunday</SelectItem>
                  <SelectItem value="monday">Monday</SelectItem>
               </SelectContent>
            </Select>
         </div>
      </div>
   );
}

