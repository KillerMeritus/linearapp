'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
   const router = useRouter();
   const { user, loading } = useAuth();

   useEffect(() => {
      if (!loading && user) {
         // User is already logged in, redirect to dashboard
         router.push('/piedpiper/team/CORE/all');
      }
   }, [user, loading, router]);

   const handleGoogleLogin = async () => {
      // TODO: Implement Google OAuth
      console.log('Google login clicked');
   };

   const handleEmailLogin = async () => {
      // TODO: Navigate to email login flow
      router.push('/login/email');
   };

   const handleSSOLogin = async () => {
      // TODO: Implement SAML SSO
      console.log('SAML SSO login clicked');
   };

   const handlePasskeyLogin = async () => {
      // TODO: Implement passkey authentication
      console.log('Passkey login clicked');
   };

   // Show loading state while checking authentication
   if (loading) {
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

            {/* Login Buttons */}
            <div className="w-full flex flex-col items-center space-y-3 mt-6">
               {/* Google Button - Purple/Blue */}
               <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-[288px] h-12 bg-[#6366F1] hover:bg-[#6366F1]/90 active:bg-[#6366F1]/95 text-white font-medium rounded-md transition-colors"
               >
                  Continue with Google
               </button>

               {/* Email Button - Dark Gray */}
               <button
                  type="button"
                  onClick={handleEmailLogin}
                  className="w-[288px] h-12 bg-secondary hover:bg-secondary/80 active:bg-secondary/70 text-foreground border border-border font-medium rounded-md transition-colors"
               >
                  Continue with email
               </button>

               {/* SAML SSO Button - Dark Gray */}
               <button
                  type="button"
                  onClick={handleSSOLogin}
                  className="w-[288px] h-12 bg-secondary hover:bg-secondary/80 active:bg-secondary/70 text-foreground border border-border font-medium rounded-md transition-colors"
               >
                  Continue with SAML SSO
               </button>

               {/* Passkey Button - Dark Gray */}
               <button
                  type="button"
                  onClick={handlePasskeyLogin}
                  className="w-[288px] h-12 bg-secondary hover:bg-secondary/80 active:bg-secondary/70 text-foreground border border-border font-medium rounded-md transition-colors"
               >
                  Log in with passkey
               </button>
            </div>

            {/* Sign up link */}
            <div className="mt-8 text-center">
               <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <br className="sm:hidden" />
                  <Link href="/signup" className="text-foreground hover:underline font-medium">
                     Sign up
                  </Link>
                  {' '}or{' '}
                  <Link href="/" className="text-foreground hover:underline font-medium">
                     learn more
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}

