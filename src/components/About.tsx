import React from 'react';
import { PERSONAL } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0c]/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          About
        </h2>
      </div>

      <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
        <p>
          Back in 2015, I began writing web software at{' '}
          <a
            href={PERSONAL.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-200 hover:text-emerald-400 focus-visible:text-emerald-400 transition-colors"
          >
            Quancore Softech
          </a>
          . Over the last nine years, that foundation grew into architecting
          large-scale platforms that handle hundreds of thousands of users and
          mission-critical data pipelines.
        </p>

        <p>
          Today, my primary focus is bridging application engineering with
          modern cloud infrastructure. I believe the best infrastructure is
          invisible: when microservices, message queues, and Kubernetes
          workloads are seamlessly orchestrated, application developers move
          faster, release cycles drop from days to minutes, and systems remain
          resilient under heavy production traffic.
        </p>

        <p>
          I have led multi-cloud migrations across{' '}
          <span className="text-zinc-200 font-medium">AWS</span> and{' '}
          <span className="text-zinc-200 font-medium">Google Cloud</span>,
          engineered sub-second vector graphics rendering engines in{' '}
          <span className="text-zinc-200 font-medium">Python & Cairo</span>, built
          real-time <span className="text-zinc-200 font-medium">WebRTC</span> video
          exhibition platforms, and tuned GPU container scheduling for ML
          workloads.
        </p>

        <p>
          When I'm not in a terminal or designing cloud architectures, I'm
          evaluating emerging open-source tooling, experimenting with local AI
          agent workflows, and mentoring engineers across the Quancore team.
        </p>
      </div>

      {/* Core Technical Highlights */}
      <div className="mt-8 pt-6 border-t border-zinc-800/60">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
          Core Technologies I Work With Regularly
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-zinc-300">
          {PERSONAL.techHighlights.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-2 rounded-md bg-zinc-900/80 border border-zinc-800/80 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
