'use client';

import { Check, Zap, Layout, Sparkles, GitBranch, Smartphone, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function LandingFeatures() {
  return (
    <>
      {/* UI Screenshot Section */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative" style={{ perspective: '1000px' }}>
            <div
              className="shadow-2xl rounded-lg overflow-hidden"
              style={{
                transform: 'rotateX(2deg) rotateY(2deg)',
                boxShadow: '0 7px 32px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div className="relative w-full" style={{ background: '#08090a' }}>
                <img
                  src="/images/linear-ui-screenshot.jpg"
                  alt="Linear interface screenshot showing inbox, navigation, and issue details"
                  className="w-full h-auto"
                  style={{
                    display: 'block',
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made for Modern Product Teams */}
      <section className="py-20 px-6 sm:px-8" style={{ background: 'rgba(20, 21, 22, 0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.022em',
              }}
            >
              Made for modern product teams
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: '#8a8f98',
                lineHeight: 1.6,
                letterSpacing: '-0.011em',
              }}
            >
              Linear is shaped by the practices and principles that distinguish world-class product teams from the
              rest: relentless focus, fast execution, and a commitment to the quality of craft.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Layout className="h-6 w-6" />,
                title: 'Purpose-built for product development',
                description:
                  'Designed specifically for software teams, not adapted from generic project management tools.',
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Designed to move fast',
                description: 'Built with performance and speed in mind, so you can work without friction.',
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: 'Crafted to perfection',
                description: 'Every detail is carefully considered to create an exceptional user experience.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(94, 106, 210, 0.1)', color: '#5e6ad2' }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: '#f7f8f8', fontWeight: 590, letterSpacing: '-0.012em' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: '#8a8f98', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Assisted Product Development */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.022em',
              }}
            >
              AI-assisted product development
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: '#8a8f98',
                lineHeight: 1.6,
                letterSpacing: '-0.011em',
              }}
            >
              Streamline your product development workflows with AI assistance for routine, manual tasks.
            </p>
          </div>

          <div
            className="rounded-xl p-8 border"
            style={{
              background: 'rgba(20, 21, 22, 0.3)',
              borderColor: '#23252a',
            }}
          >
            <h3
              className="mb-4"
              style={{
                fontSize: '1.5rem',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.012em',
              }}
            >
              Triage Intelligence
            </h3>
            <p style={{ color: '#8a8f98', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Automatically suggest assignees, projects, and labels based on issue context and team history.
            </p>
            <div className="space-y-4">
              <div
                className="rounded-lg p-4 border"
                style={{
                  background: '#0f1011',
                  borderColor: '#23252a',
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{ background: 'rgba(94, 106, 210, 0.2)', color: '#5e6ad2' }}
                  >
                    N
                  </div>
                  <div className="flex-1">
                    <div style={{ color: '#f7f8f8', fontWeight: 510 }}>Mobile App Refactor</div>
                    <div
                      className="text-sm mt-1"
                      style={{ color: '#8a8f98', lineHeight: 1.6 }}
                    >
                      Why this assignee was suggested: This person was the assignee on previous issues related to
                      performance problems in the mobile app launch flow
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project and Long-term Planning */}
      <section className="py-20 px-6 sm:px-8" style={{ background: 'rgba(20, 21, 22, 0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.022em',
              }}
            >
              Project and long-term planning
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: '#8a8f98',
                lineHeight: 1.6,
                letterSpacing: '-0.011em',
              }}
            >
              Set the product direction. Align your team around a unified product timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3
                className="text-2xl font-semibold"
                style={{ color: '#f7f8f8', fontWeight: 590, letterSpacing: '-0.012em' }}
              >
                Manage projects end-to-end
              </h3>
              <p style={{ color: '#8a8f98', lineHeight: 1.6 }}>
                Consolidate specs, milestones, tasks, and other documentation in one centralized location.
              </p>
              <ul className="space-y-3">
                {[
                  'Track milestones and progress',
                  'Collaborative project documents',
                  'Visual roadmaps and timelines',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: '#5e6ad2' }}
                    />
                    <span style={{ color: '#8a8f98', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl p-8 border"
              style={{
                background: '#0f1011',
                borderColor: '#23252a',
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: '#f7f8f8', fontWeight: 510 }}>
                    Project Overview
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: 'rgba(94, 106, 210, 0.1)',
                      color: '#5e6ad2',
                    }}
                  >
                    In Progress
                  </span>
                </div>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: '#f7f8f8', fontWeight: 590, letterSpacing: '-0.012em' }}
                >
                  Mobile App Refactor
                </h4>
                <div className="space-y-3 pt-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1" style={{ color: '#8a8f98' }}>
                      <span>Internal Alpha</span>
                      <span>100% of 10</span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden" style={{ background: '#141516' }}
                    >
                      <div
                        className="h-full"
                        style={{ background: '#5e6ad2', width: '100%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1" style={{ color: '#8a8f98' }}>
                      <span>GA</span>
                      <span>25% of 53</span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden" style={{ background: '#141516' }}
                    >
                      <div
                        className="h-full"
                        style={{ background: '#5e6ad2', width: '25%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Tracking */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.022em',
              }}
            >
              Issue tracking you'll enjoy using
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: '#8a8f98',
                lineHeight: 1.6,
                letterSpacing: '-0.011em',
              }}
            >
              Optimized for speed and efficiency. Create tasks in seconds, discuss issues in context, and breeze
              through your work in views tailored to you and your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-xl p-8 border space-y-6"
              style={{
                background: '#0f1011',
                borderColor: '#23252a',
              }}
            >
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 590,
                    color: '#f7f8f8',
                    letterSpacing: '-0.012em',
                  }}
                >
                  Build momentum with Cycles
                </h3>
                <p className="text-sm" style={{ color: '#8a8f98', lineHeight: 1.6 }}>
                  Create healthy routines and focus your team on what work should happen next.
                </p>
              </div>
              <div className="pt-4" style={{ borderTop: '1px solid #23252a' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium" style={{ color: '#f7f8f8', fontWeight: 510 }}>
                    Cycle 55
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs" style={{ color: '#8a8f98' }}>
                    <span>Scope</span>
                    <span>Started</span>
                    <span>Completed</span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden" style={{ background: '#141516' }}
                  >
                    <div
                      className="h-full"
                      style={{ background: '#5e6ad2', width: '75%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 590,
                    color: '#f7f8f8',
                    letterSpacing: '-0.012em',
                  }}
                >
                  Manage incoming work with Triage
                </h3>
                <p style={{ color: '#8a8f98', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Review and assign incoming bug reports, feature requests, and other unplanned work.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Users report unexpected rate limiting',
                  'RangeError: Index 0 out of range',
                ].map((title, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg p-4 border"
                    style={{
                      background: '#0f1011',
                      borderColor: '#23252a',
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm" style={{ color: '#f7f8f8', fontWeight: 510 }}>
                          {title}
                        </div>
                        <div className="text-xs mt-1" style={{ color: '#8a8f98' }}>
                          Unassigned
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflows and Integrations */}
      <section className="py-20 px-6 sm:px-8" style={{ background: 'rgba(20, 21, 22, 0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.022em',
              }}
            >
              Workflows and integrations
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: '#8a8f98',
                lineHeight: 1.6,
                letterSpacing: '-0.011em',
              }}
            >
              Collaborate across tools and teams. Expand the capabilities of the Linear system with a wide variety of
              integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GitBranch className="h-5 w-5" />,
                title: 'Powerful git workflows',
                description:
                  'Automate pull requests and commit workflows with seamless GitHub, GitLab, and Bitbucket integration.',
              },
              {
                icon: <Smartphone className="h-5 w-5" />,
                title: 'Linear Mobile',
                description: 'Move product work forward from anywhere with native iOS and Android apps.',
              },
              {
                icon: <LinkIcon className="h-5 w-5" />,
                title: '100+ integrations',
                description: 'Connect with Slack, Figma, Linear API, and many more tools your team already uses.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 border"
                style={{
                  background: '#0f1011',
                  borderColor: '#23252a',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(94, 106, 210, 0.1)', color: '#5e6ad2' }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#f7f8f8', fontWeight: 590, letterSpacing: '-0.012em' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: '#8a8f98', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on Strong Foundations */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                fontWeight: 590,
                color: '#f7f8f8',
                letterSpacing: '-0.022em',
              }}
            >
              Built on strong foundations
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: '1.25rem',
                color: '#8a8f98',
                lineHeight: 1.6,
                letterSpacing: '-0.011em',
              }}
            >
              Linear is so simple to use, it's easy to overlook the wealth of complex technologies packed under the
              hood that keep Linear robust, safe, and blazing fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Linear Sync Engine',
                description:
                  'Built with a high-performance architecture and an obsessive focus on speed.',
              },
              {
                title: 'Enterprise-ready security',
                description: 'Best-in-class security practices keep your work safe and secure at every layer.',
              },
              {
                title: 'Engineered for scale',
                description: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: '#f7f8f8', fontWeight: 590, letterSpacing: '-0.012em' }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#8a8f98', lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 mt-12">
            {['SOC 2', 'GDPR', 'HIPAA'].map((cert, idx) => (
              <span key={idx} className="text-sm" style={{ color: '#8a8f98' }}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 sm:px-8" style={{ background: 'rgba(20, 21, 22, 0.3)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              fontWeight: 590,
              color: '#f7f8f8',
              letterSpacing: '-0.022em',
            }}
          >
            Plan the present. Build the future.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-base px-8"
                style={{
                  background: '#5e6ad2',
                  color: '#ffffff',
                  fontWeight: 510,
                }}
              >
                Get started
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                style={{
                  borderColor: '#23252a',
                  color: '#f7f8f8',
                  fontWeight: 510,
                }}
              >
                Open app
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
