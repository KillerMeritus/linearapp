'use client';

import { usePreferencesStore } from '@/store/preferences-store';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

export function EducationalSection() {
   const { preferences, updateEducational } = usePreferencesStore();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   // Wait for hydration
   if (!mounted || !preferences?.educational) {
      return null;
   }

   const educational = preferences.educational;

   return (
      <div className="space-y-6">
         <div>
            <h3 className="text-base font-semibold mb-1">Educational</h3>
         </div>
         <div className="flex items-center justify-between">
            <div className="flex-1">
               <Label htmlFor="disable-keyboard-shortcut-hints" className="cursor-pointer">
                  Disable keyboard shortcut hints
               </Label>
               <p className="text-sm text-muted-foreground">
                  Do not show any keyboard shortcut hints.
               </p>
            </div>
            <Switch
               id="disable-keyboard-shortcut-hints"
               checked={educational.disableKeyboardShortcutHints}
               onCheckedChange={(checked) => {
                  updateEducational({ disableKeyboardShortcutHints: checked });
                  toast.success('Educational preference updated');
               }}
            />
         </div>
      </div>
   );
}

