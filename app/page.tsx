'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function Home() {
   const { user, loading } = useAuth();
   const router = useRouter();

   useEffect(() => {
      if (!loading) {
         if (user) {
            // User is logged in, redirect to dashboard
            router.push('/piedpiper/team/CORE/all');
         } else {
            // User is not logged in, redirect to login
            router.push('/login');
         }
      }
   }, [user, loading, router]);

   // Show loading state while checking authentication
   return (
      <div className="flex items-center justify-center min-h-screen">
         <div className="text-muted-foreground">Loading...</div>
      </div>
   );
}
