'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';

export default function EmailLoginPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const { signIn, user, loading: authLoading } = useAuth();
   const router = useRouter();

   useEffect(() => {
      if (!authLoading && user) {
         // User is already logged in, redirect to dashboard
         router.push('/piedpiper/team/CORE/all');
      }
   }, [user, authLoading, router]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
         // Trim inputs before submitting
         await signIn(email.trim(), password.trim());
         
         // Redirect to dashboard after successful login
         router.push('/piedpiper/team/CORE/all');
      } catch (err: any) {
         setError(err.message || 'Login failed');
      } finally {
         setLoading(false);
      }
   };

   // Show loading state while checking authentication
   if (authLoading) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <div className="text-muted-foreground">Loading...</div>
         </div>
      );
   }

   // If already logged in, don't show login page (redirect is in progress)
   if (user) {
      return null;
   }

   return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
         <div className="w-full max-w-[440px] flex flex-col items-center">
            {/* Linear Logo */}
            <div className="mb-12">
               <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" className="text-foreground">
                  <path d="M37.3833 39.6083C37.5686 39.7936 37.866 39.8049 38.0605 39.6291C38.3259 39.3892 38.5867 39.1414 38.8425 38.8856C47.0518 30.6763 47.0518 17.3663 38.8425 9.15699C30.6332 0.947669 17.3232 0.947669 9.11388 9.15699C8.85807 9.4128 8.61024 9.67357 8.37037 9.93897C8.19462 10.1334 8.20585 10.4309 8.39119 10.6162L37.3833 39.6083Z"></path>
                  <path d="M34.6753 42.1232C34.951 41.9601 34.9928 41.5817 34.7663 41.3552L6.64432 13.2332C6.41779 13.0066 6.03942 13.0485 5.87624 13.3242C5.4889 13.9786 5.14011 14.6495 4.82985 15.3336C4.74507 15.5206 4.78727 15.74 4.93243 15.8851L32.1144 43.067C32.2595 43.2122 32.4789 43.2544 32.6659 43.1696C33.35 42.8594 34.0209 42.5106 34.6753 42.1232Z"></path>
                  <path d="M28.2357 44.6093C28.6164 44.531 28.7471 44.0636 28.4722 43.7887L4.21072 19.5272C3.93591 19.2524 3.4685 19.3831 3.39015 19.7638C3.2071 20.6531 3.08205 21.552 3.01501 22.4544C3.00437 22.5976 3.05768 22.738 3.15924 22.8396L25.1599 44.8402C25.2615 44.9418 25.4018 44.9951 25.5451 44.9845C26.4475 44.9174 27.3464 44.7924 28.2357 44.6093Z"></path>
                  <path d="M19.2493 44.5067C19.7204 44.6149 20.0112 44.0554 19.6694 43.7136L4.28592 28.3301C3.9441 27.9883 3.38454 28.2791 3.49282 28.7502C4.34654 32.4646 6.22023 35.9919 9.11388 38.8856C12.0075 41.7792 15.5349 43.6529 19.2493 44.5067Z"></path>
               </svg>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-semibold text-foreground mb-6">Log in to Linear</h1>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-[288px] flex flex-col items-center space-y-3">
               <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 px-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoFocus
               />

               <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-12 px-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
               />

               {error && (
                  <p className="text-sm text-destructive w-full">{error}</p>
               )}

               <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#6366F1] hover:bg-[#6366F1]/90 active:bg-[#6366F1]/95 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {loading ? 'Signing in...' : 'Log in'}
               </button>
            </form>

            {/* Back Link */}
            <div className="mt-8 text-center">
               <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Back to login options
               </Link>
            </div>
         </div>
      </div>
   );
}

