'use client';

import { ProfileSection } from './profile-section';

export function ProfileContent() {
   return (
      <div className="w-full max-w-5xl mx-auto px-8 py-8">
         <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-1">Profile</h1>
         </div>

         <ProfileSection />
      </div>
   );
}

