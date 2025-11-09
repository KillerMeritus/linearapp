'use client';

import { Check, Zap, Layout, Sparkles, GitBranch, Smartphone, Link as LinkIcon } from 'lucide-react';

const coreFeatures = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Purpose-built for product teams',
    description: 'Designed specifically for software development teams, not adapted from generic project management tools.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Built for speed',
    description: 'Optimized for performance and efficiency, so you can work without friction and move fast.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Crafted with care',
    description: 'Every detail is thoughtfully designed to create an exceptional user experience that your team will love.',
  },
];

const integrationFeatures = [
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: 'Git workflows',
    description: 'Automate pull requests and commits with seamless GitHub, GitLab, and Bitbucket integration.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Mobile app',
    description: 'Stay productive on the go with native iOS and Android apps for LinearApp.',
  },
  {
    icon: <LinkIcon className="h-5 w-5" />,
    title: '100+ integrations',
    description: 'Connect with Slack, Figma, and many more tools your team already uses daily.',
  },
];

export function LandingFeatures() {
  return (
    <>
      {/* Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-label="Core Features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Made for modern product teams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              LinearApp is shaped by practices that distinguish world-class product teams: relentless focus,
              fast execution, and commitment to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Planning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Project Planning">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Project and long-term planning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Set the product direction. Align your team around a unified product timeline and roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Manage projects end-to-end</h3>
              <p className="text-muted-foreground">
                Consolidate specs, milestones, tasks, and documentation in one centralized location for
                better visibility and collaboration.
              </p>
              <ul className="space-y-3">
                {[
                  'Track milestones and progress',
                  'Collaborative project documents',
                  'Visual roadmaps and timelines',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Project Overview</span>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                    In Progress
                  </span>
                </div>
                <h4 className="text-lg font-semibold">Mobile App Refactor</h4>
                <div className="space-y-3 pt-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Internal Alpha</span>
                      <span>100% of 10</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>GA</span>
                      <span>25% of 53</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issue Tracking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-label="Issue Tracking">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Issue tracking you'll enjoy using
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Optimized for speed and efficiency. Create tasks in seconds, discuss issues in context, and
              breeze through your work with views tailored to you and your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-xl p-8 border border-border space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Build momentum with Cycles</h3>
                <p className="text-muted-foreground text-sm">
                  Create healthy routines and focus your team on what work should happen next.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Cycle 55</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Scope</span>
                    <span>Started</span>
                    <span>Completed</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Manage incoming work with Triage</h3>
                <p className="text-muted-foreground mb-6">
                  Review and assign incoming bug reports, feature requests, and other unplanned work
                  efficiently.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Users report unexpected rate limiting',
                  'RangeError: Index 0 out of range',
                ].map((title, idx) => (
                  <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{title}</div>
                        <div className="text-xs text-muted-foreground mt-1">Unassigned</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Integrations">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Workflows and integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborate across tools and teams. Expand LinearApp's capabilities with a wide variety of
              integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Foundations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-label="Technical Foundations">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Built on strong foundations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              LinearApp is simple to use, but built on robust technologies that keep it fast, safe, and
              reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'High-performance architecture',
                description: 'Built with an obsessive focus on speed and efficiency for the best user experience.',
              },
              {
                title: 'Enterprise-ready security',
                description: 'Best-in-class security practices keep your work safe and secure at every layer.',
              },
              {
                title: 'Engineered for scale',
                description: 'Built for teams of all sizes, from early-stage startups to global enterprises.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 mt-12">
            {['SOC 2', 'GDPR', 'HIPAA'].map((cert, idx) => (
              <span key={idx} className="text-sm text-muted-foreground">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

