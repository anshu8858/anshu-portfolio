import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0c]/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          Projects
        </h2>
      </div>

      <div className="space-y-12">
        {/* Featured Projects List */}
        <ul className="group/list space-y-12">
          {featured.map((project) => (
            <li key={project.id}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Background Card Hover */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] lg:group-hover:border lg:group-hover:border-zinc-700/50" />

                {/* Year */}
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2">
                  {project.year}
                </header>

                {/* Project Details */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-semibold leading-snug text-zinc-100">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-zinc-100 hover:text-emerald-400 focus-visible:text-emerald-400 text-base transition-colors group/link"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                      </a>
                    ) : (
                      <span className="text-zinc-100 text-base">
                        {project.title}
                      </span>
                    )}
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-zinc-400">
                    {project.description}
                  </p>

                  {/* Impact Metrics Grid */}
                  {project.impact && project.impact.length > 0 && (
                    <div className="mt-3 grid grid-cols-3 gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/50 p-2.5">
                      {project.impact.map((metric) => (
                        <div key={metric.label} className="text-center sm:text-left">
                          <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                            {metric.label}
                          </span>
                          <span className="text-xs font-semibold text-emerald-400">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <ul
                    className="mt-3 flex flex-wrap gap-1.5"
                    aria-label="Technologies used"
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-flex items-center rounded-md bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-xs font-mono text-zinc-400">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Other Noteworthy Projects */}
        {other.length > 0 && (
          <div className="pt-4 border-t border-zinc-800/60">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Other Noteworthy Engineering Work
            </h3>
            <ul className="space-y-3">
              {other.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.liveUrl || '#'}
                    target={project.liveUrl ? '_blank' : undefined}
                    rel={project.liveUrl ? 'noreferrer' : undefined}
                    className="group block rounded-lg border border-zinc-850 bg-zinc-900/30 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-850/60"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                        <span>{project.title}</span>
                        {project.liveUrl && (
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        )}
                      </h4>
                      <span className="text-xs text-zinc-500 font-mono">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
