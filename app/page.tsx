'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { LandingNav } from '@/components/layout/landing-nav';
import { LandingHero } from '@/components/common/landing-hero';
import { LandingFeatures } from '@/components/common/landing-features';
import { LandingFooter } from '@/components/layout/landing-footer';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/piedpiper/team/CORE/all');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ background: '#08090a' }}>
        <div style={{ color: '#8a8f98' }}>Loading...</div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen" style={{ background: '#08090a' }}>
        <div style={{ color: '#8a8f98' }}>Redirecting...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#08090a', color: '#f7f8f8' }}>
      <LandingNav />
      <main>
        <LandingHero />
        <LandingFeatures />
      </main>
      <LandingFooter />
    </div>
  );
}
