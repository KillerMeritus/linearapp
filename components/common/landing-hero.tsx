'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LandingHero() {
  return (
    <section className="pt-32 mt-16 pb-20" aria-label="Hero Section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="block">Build better products</span>
          <span className="block text-muted-foreground">with LinearApp</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          A modern project management platform designed for high-performing teams. Streamline your workflow,
          track progress, and ship faster with our intuitive interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup">
            <Button size="lg" className="text-base px-8">
              Get started free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="text-base px-8">
              Open app
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

