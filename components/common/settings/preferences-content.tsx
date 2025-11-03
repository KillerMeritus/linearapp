'use client';

import { DisplaySection } from './display-section';
import { ThemeSection } from './theme-section';
import { BehaviorSection } from './behavior-section';
import { EducationalSection } from './educational-section';

export function PreferencesContent() {
   return (
      <div className="w-full max-w-5xl mx-auto px-8 py-8">
         <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-1">Preferences</h1>
            <p className="text-muted-foreground">Manage your preferences.</p>
         </div>

         <div className="space-y-8">
            <DisplaySection />
            <div>
               <h3 className="text-base font-semibold mb-6">Theme</h3>
               <ThemeSection />
            </div>
            <BehaviorSection />
            <EducationalSection />
         </div>
      </div>
   );
}

