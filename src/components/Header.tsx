import React from 'react';
import { PERSONAL, NAV_LINKS } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Identity */}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
          <a href="#" className="hover:text-emerald-400 transition-colors">
            {PERSONAL.name}
          </a>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight text-emerald-400 sm:text-xl">
          {PERSONAL.role}
        </h2>

        <p className="mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-zinc-400">
          9+ years architecting high-throughput distributed systems, vector
          rendering engines, and GPU-accelerated Kubernetes infrastructure at{' '}
          <a
            href={PERSONAL.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-zinc-200 hover:text-emerald-400 transition-colors inline-flex items-center gap-0.5"
          >
            Quancore Softech
            <ArrowUpRight className="w-3.5 h-3.5 inline-block opacity-70" />
          </a>
          .
        </p>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max space-y-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center py-3 cursor-pointer"
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-zinc-100'
                          : 'w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-300'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? 'text-zinc-100'
                          : 'text-zinc-500 group-hover:text-zinc-200'
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer Area with Availability & Social Links */}
      <div className="mt-8 lg:mt-0">
        {/* Availability Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-950/40 px-3.5 py-1.5 text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Available for architecture consulting</span>
        </div>

        {/* Social Icons */}
        <ul className="flex items-center gap-5" aria-label="Social media">
          <li>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="block text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="block text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${PERSONAL.email}`}
              aria-label="Send email"
              className="block text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
