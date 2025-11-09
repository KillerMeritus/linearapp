'use client';

import Link from 'next/link';

export function LandingHero() {
  return (
    <section className="pt-32 mt-16" aria-label="Hero_Section">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="block w-full">
          <span
            className="inline-block max-w-[800px] leading-tight font-medium"
            style={{
              fontSize: '3.5rem',
              color: '#f7f8f8',
              fontWeight: 510,
              letterSpacing: '-0.022em',
            }}
          >
            Linear is a purpose-built tool for planning and building products
          </span>
        </h1>
        <h2
          className="mt-5 font-medium text-xl"
          style={{
            color: 'rgba(247, 248, 248, 0.7)',
            fontWeight: 400,
            letterSpacing: '-0.011em',
          }}
        >
          Meet the system for modern software development.<br />
          Streamline issues, projects, and product roadmaps
        </h2>
        <div className="flex flex-row mt-10 gap-4">
          <Link href="/signup">
            <button
              className="px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors"
              style={{
                background: 'rgba(247, 248, 248, 0.7)',
                color: '#08090a',
                fontWeight: 510,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f7f8f8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(247, 248, 248, 0.7)';
              }}
              aria-label="Start building with Linear"
            >
              Start building
            </button>
          </Link>
          <button
            className="group flex items-center gap-2 px-4 py-2 font-medium rounded-lg cursor-pointer transition-colors"
            style={{
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
            aria-label="Learn about Linear for Agents"
          >
            <span
              className="text-transparent bg-gradient-to-r bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #d0d6e0, #8a8f98)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
            >
              Introducing Linear for Agents
            </span>
            <svg
              className="w-4 h-4 fill-current"
              style={{ color: '#8a8f98' }}
              viewBox="0 0 16 16"
              role="img"
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
