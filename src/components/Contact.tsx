import React from 'react';
import { PERSONAL } from '../data/portfolioData';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-16 lg:scroll-mt-24 pb-8"
      aria-label="Contact information"
    >
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0c]/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
          Contact
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 sm:p-10">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-3">
          Let's build something resilient.
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg mb-8">
          Whether you're architecting a high-throughput platform, optimizing
          Kubernetes infrastructure, or looking to add experienced senior
          engineering leadership to your team — I'd love to connect.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 group cursor-pointer shadow-lg shadow-emerald-950/40"
          >
            <Mail className="h-4 w-4" />
            <span>Say Hello</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-2 text-xs text-zinc-400 sm:ml-2">
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span>{PERSONAL.location} (IST / UTC+5:30)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
