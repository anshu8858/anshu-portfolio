import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { Code2, Server, Database, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  // Domain groupings
  const domains = [
    {
      title: 'Languages & Core Runtimes',
      icon: Code2,
      category: 'Languages',
      description: 'Asynchronous workers, high-concurrency APIs, and microservice architectures.',
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Server,
      category: 'Infrastructure',
      description: 'Container orchestration, multi-cloud topologies, and declarative GitOps.',
    },
    {
      title: 'Data & Event Streaming',
      icon: Database,
      category: 'Data',
      description: 'Relational schemas, in-memory caching, message brokers, and search pipelines.',
    },
    {
      title: 'Frontend & Real-time Protocols',
      icon: Layers,
      category: 'Frontend',
      description: 'Component-driven client applications, WebRTC streaming, and design systems.',
    },
  ];

  // Group skills by category
  const skillsByCategory = SKILLS.reduce<Record<string, typeof SKILLS>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  return (
    <section
      id="stack"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="Technical skills and architecture"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0c]/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          Skills & Architecture
        </h2>
      </div>

      <div className="space-y-8">
        <p className="text-sm text-zinc-400 leading-relaxed">
          Over 9 years of production engineering across backend runtimes, distributed
          clusters, and modern frontends. Core technical proficiencies categorized by domain:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const categorySkills = skillsByCategory[domain.category] || [];

            return (
              <div
                key={domain.title}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  {domain.description}
                </p>

                <div className="space-y-2.5">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-zinc-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-zinc-400 text-[11px] bg-zinc-800/60 px-2 py-0.5 rounded">
                        {skill.years} yrs
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-cloud & DevOps special highlight */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Cloud Topologies & Production Reliability
          </h4>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Hands-on production operational ownership of multi-cluster Kubernetes on AWS (EKS) and GCP (GKE),
            zero-downtime rolling upgrades, Prometheus/Grafana alerting, and automated ArgoCD GitOps pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};
