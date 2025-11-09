'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function SignupPage() {
   const router = useRouter();
   const { user, loading } = useAuth();

   useEffect(() => {
      if (!loading && user) {
         // User is already logged in, redirect to dashboard
         router.push('/piedpiper/team/CORE/all');
      }
   }, [user, loading, router]);

   const handleGoogleSignup = async () => {
      // TODO: Implement Google OAuth
      console.log('Google signup clicked');
      alert('Google signup will be implemented with backend integration');
   };

   const handleEmailSignup = async () => {
      router.push('/signup/email');
   };

   const handleSSOSignup = async () => {
      // TODO: Implement SAML SSO
      console.log('SAML SSO signup clicked');
      alert('SAML SSO signup will be implemented with backend integration');
   };

   // Show loading state while checking authentication
   if (loading) {
      return (
         <div className="flex items-center justify-center min-h-screen" style={{ background: '#08090a' }}>
            <div style={{ color: '#8a8f98' }}>Loading...</div>
         </div>
      );
   }

   // If already logged in, don't show signup page (redirect is in progress)
   if (user) {
      return null;
   }

   return (
      <div 
         className="flex min-h-screen items-center justify-center p-4"
         style={{ background: '#08090a' }}
      >
         <div className="w-full max-w-[440px] flex flex-col items-center">
            {/* Linear Logo */}
            <div className="mb-12">
               <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: '#ffffff' }}
               >
                  <svg 
                     width="24" 
                     height="24" 
                     viewBox="0 0 24 24" 
                     fill="none" 
                     xmlns="http://www.w3.org/2000/svg"
                     style={{ color: '#000000' }}
                  >
                     <path 
                        d="M18.6917 19.8042C18.7843 19.8968 18.933 19.9025 19.0303 19.8146C19.163 19.6946 19.2934 19.5707 19.4213 19.4428C23.5259 15.3382 23.5259 8.68315 19.4213 4.57855C15.3166 0.47395 8.66158 0.47395 4.55694 4.57855C4.42907 4.70642 4.30512 4.83678 4.18518 4.96947C4.09731 5.06675 4.10298 5.21545 4.19558 5.30805L18.6917 19.8042Z" 
                        fill="currentColor"
                     />
                     <path 
                        d="M17.3377 21.0616C17.4755 20.9801 17.4964 20.7909 17.3832 20.6777L3.32216 6.61662C3.20895 6.50341 3.01975 6.52432 2.93812 6.66212C2.74445 6.9893 2.57006 7.32475 2.41493 7.6668C2.37254 7.7603 2.39364 7.87 2.46622 7.94258L16.0572 21.5335C16.1298 21.6061 16.2395 21.6272 16.333 21.5848C16.675 21.4297 17.0105 21.2553 17.3377 21.0616Z" 
                        fill="currentColor"
                     />
                     <path 
                        d="M14.1179 22.3047C14.3082 22.2655 14.3736 22.0318 14.2361 21.8943L2.10536 9.76358C1.96796 9.62618 1.73424 9.69158 1.69505 9.88192C1.60355 10.3266 1.54103 10.776 1.50751 11.2272C1.50219 11.2988 1.52884 11.369 1.57962 11.4198L12.58 22.4202C12.6308 22.471 12.701 22.4976 12.7726 22.4923C13.2238 22.4588 13.6732 22.3963 14.1179 22.3047Z" 
                        fill="currentColor"
                     />
                     <path 
                        d="M9.62466 22.2534C9.86022 22.3075 10.0056 22.0277 9.83472 21.8568L2.14296 14.1651C1.9721 13.9942 1.69227 14.1396 1.74641 14.3751C2.17327 16.2323 3.11012 17.9959 4.55694 19.4428C5.00377 20.8896 6.76737 21.8265 8.62466 22.2534Z" 
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </div>

            {/* Heading */}
            <h1 
               className="mb-6 text-center"
               style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#f7f8f8',
                  letterSpacing: '-0.011em',
                  lineHeight: 1.4,
               }}
            >
               Create your workspace
            </h1>

            {/* Signup Buttons */}
            <div className="w-full flex flex-col items-center space-y-3">
               {/* Google Button - Purple/Blue */}
               <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="w-full h-12 rounded-lg font-medium transition-colors"
                  style={{
                     background: '#5e6ad2',
                     color: '#ffffff',
                     fontWeight: 510,
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.background = '#525cc0';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.background = '#5e6ad2';
                  }}
               >
                  Continue with Google
               </button>

               {/* Email Button - Dark Gray */}
               <button
                  type="button"
                  onClick={handleEmailSignup}
                  className="w-full h-12 rounded-lg font-medium transition-colors"
                  style={{
                     background: '#141516',
                     color: '#f7f8f8',
                     border: '1px solid #23252a',
                     fontWeight: 510,
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.background = '#1a1b1c';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.background = '#141516';
                  }}
               >
                  Continue with email
               </button>

               {/* SAML SSO Button - Dark Gray */}
               <button
                  type="button"
                  onClick={handleSSOSignup}
                  className="w-full h-12 rounded-lg font-medium transition-colors"
                  style={{
                     background: '#141516',
                     color: '#f7f8f8',
                     border: '1px solid #23252a',
                     fontWeight: 510,
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.background = '#1a1b1c';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.background = '#141516';
                  }}
               >
                  Continue with SAML SSO
               </button>
            </div>

            {/* Legal Text */}
            <p 
               className="mt-8 text-center max-w-[288px]"
               style={{
                  fontSize: '0.875rem',
                  color: '#8a8f98',
                  lineHeight: 1.6,
                  letterSpacing: '-0.011em',
               }}
            >
               By signing up, you agree to our{' '}
               <Link 
                  href="/terms" 
                  className="underline hover:no-underline"
                  style={{ color: '#8a8f98' }}
               >
                  Terms of Service
               </Link>
               {' '}and{' '}
               <Link 
                  href="/privacy" 
                  className="underline hover:no-underline"
                  style={{ color: '#8a8f98' }}
               >
                  Data Processing Agreement
               </Link>
               .
            </p>

            {/* Login Link */}
            <p 
               className="mt-6 text-center"
               style={{
                  fontSize: '0.875rem',
                  color: '#8a8f98',
                  lineHeight: 1.6,
                  letterSpacing: '-0.011em',
               }}
            >
               Already have an account?{' '}
               <Link 
                  href="/login" 
                  className="underline hover:no-underline font-medium"
                  style={{ color: '#f7f8f8' }}
               >
                  Log in
               </Link>
            </p>
         </div>
      </div>
   );
}

