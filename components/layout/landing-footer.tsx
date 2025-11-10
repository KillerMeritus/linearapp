'use client';

import Link from 'next/link';

export function LandingFooter() {
  return (
    <footer className="py-12 px-6 sm:px-8" style={{ borderTop: '1px solid #23252a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {[
            {
              title: 'Features',
              links: [
                { label: 'Plan', href: '#' },
                { label: 'Build', href: '#' },
                { label: 'Insights', href: '#' },
              ],
            },
            {
              title: 'Product',
              links: [
                { label: 'Pricing', href: '#' },
                { label: 'Integrations', href: '#' },
                { label: 'Documentation', href: '#' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Blog', href: '#' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'Developers', href: '#' },
                { label: 'Status', href: '#' },
                { label: 'Community', href: '#' },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4
                className="mb-4"
                style={{
                  color: '#f7f8f8',
                  fontWeight: 590,
                  letterSpacing: '-0.012em',
                }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors"
                      style={{ color: '#8a8f98' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#5e6ad2';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#8a8f98';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="pt-8 text-center text-sm"
          style={{ borderTop: '1px solid #23252a', color: '#8a8f98' }}
        >
          © {new Date().getFullYear()} Linear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
