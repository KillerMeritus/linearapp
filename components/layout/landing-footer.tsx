'use client';

import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
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
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LinearApp by Team Pied Piper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

