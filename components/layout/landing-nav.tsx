'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
  description?: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

const productSections: NavSection[] = [
  {
    title: 'Core Features',
    links: [
      { label: 'Plan', href: '#', description: 'Set product direction with projects and initiatives' },
      { label: 'Build', href: '#', description: 'Track progress with issue management and cycles' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Customer Requests', href: '#', description: 'Manage user feedback' },
      { label: 'Insights', href: '#', description: 'Real-time analytics' },
      { label: 'Integrations', href: '#', description: 'Connect with your tools' },
      { label: 'Mobile App', href: '#', description: 'LinearApp on the go' },
    ],
  },
];

const resourceSections: NavSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#', description: 'Meet Team Pied Piper' },
      { label: 'Careers', href: '#', description: 'Join our team' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Developers', href: '#', description: 'Build on LinearApp API' },
      { label: 'Security', href: '#', description: 'Safe and secure' },
      { label: 'Documentation', href: '#', description: 'How to use LinearApp' },
      { label: 'Download', href: '#', description: 'Get the app' },
    ],
  },
];

interface DropdownMenuProps {
  sections: NavSection[];
  isOpen: boolean;
  onClose: () => void;
}

function DropdownMenu({ sections, isOpen, onClose }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 mt-2 w-[32rem] bg-background border border-border rounded-xl shadow-lg z-50 p-6"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className={idx > 0 ? 'border-l border-border pl-6' : ''}>
            <h3 className="text-xs font-medium text-muted-foreground mb-3 px-2">{section.title}</h3>
            <div className="space-y-1">
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.href}
                  className="block px-2 py-2 rounded-md hover:bg-accent transition-colors group"
                  onClick={onClose}
                >
                  <div className="text-sm font-medium group-hover:text-foreground">{link.label}</div>
                  {link.description && (
                    <div className="text-xs text-muted-foreground mt-0.5">{link.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface NavItemProps {
  label: string;
  sections: NavSection[];
  href?: string;
}

function NavItem({ label, sections, href }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (href) {
    return (
      <Link
        href={href}
        className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
      </button>
      <DropdownMenu sections={sections} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export function LandingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground">
              <span className="text-sm font-bold">LP</span>
            </div>
            <span className="text-lg font-semibold">LinearApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavItem label="Product" sections={productSections} />
            <NavItem label="Resources" sections={resourceSections} />
            <NavItem label="Pricing" href="#" />
            <NavItem label="Customers" href="#" />
            <NavItem label="Contact" href="#" />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Product</h3>
                    <div className="space-y-2">
                      {productSections.flatMap((section) =>
                        section.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-3">Resources</h3>
                    <div className="space-y-2">
                      {resourceSections.flatMap((section) =>
                        section.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Link
                      href="/login"
                      className="block mb-4"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full">Sign up</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

