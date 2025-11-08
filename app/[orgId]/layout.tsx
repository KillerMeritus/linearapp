'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function OrgLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const { user, loading } = useAuth();
   const router = useRouter();

   useEffect(() => {
      if (!loading && !user) {
         // User is not logged in, redirect to login
         router.push('/login');
      }
   }, [user, loading, router]);

   // Show loading state while checking authentication
   if (loading) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <div className="text-muted-foreground">Loading...</div>
         </div>
      );
   }

   // If not authenticated, don't render children (redirect is in progress)
   if (!user) {
      return null;
   }

   // User is authenticated, render the dashboard
   return <>{children}</>;
}

