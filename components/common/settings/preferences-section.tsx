'use client';

import { DisplaySection } from './display-section';
import { ThemeSection } from './theme-section';
import { BehaviorSection } from './behavior-section';
import { EducationalSection } from './educational-section';

export function PreferencesSection() {
   return (
      <div className="space-y-6">
         <DisplaySection />
         <ThemeSection />
         <BehaviorSection />
         <EducationalSection />
      </div>
   );
}

