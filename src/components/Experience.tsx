import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0c]/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          Experience
        </h2>
      </div>

      <ol className="group/list space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <li key={index}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/* Card Hover Background */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-850/50 lg:group-hover:bg-zinc-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] lg:group-hover:border lg:group-hover:border-zinc-700/50" />

              {/* Period Timeline */}
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                aria-label={exp.period}
              >
                {exp.period}
              </header>

              {/* Role & Achievements */}
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-zinc-100">
                  <div>
                    <span className="inline-flex items-baseline font-semibold leading-tight text-zinc-100 group-hover:text-emerald-400 focus-visible:text-emerald-400 text-base transition-colors">
                      <span>{exp.role}</span>
                      <span className="mx-2 text-zinc-600">·</span>
                      <span className="inline-flex items-center text-emerald-400">
                        {exp.company}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </span>
                  </div>
                </h3>

                <p className="mt-2 text-sm leading-normal text-zinc-400">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <ul
                  className="mt-4 flex flex-wrap gap-1.5"
                  aria-label="Technologies used"
                >
                  {exp.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
