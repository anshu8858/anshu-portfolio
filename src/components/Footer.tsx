import React from 'react';
import { PERSONAL } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-xs text-zinc-500 sm:pb-0">
      <p className="leading-relaxed">
        Loosely designed in Figma and coded with care. Built with{' '}
        <span className="text-zinc-400 font-medium">React 19</span>,{' '}
        <span className="text-zinc-400 font-medium">TypeScript</span>, and{' '}
        <span className="text-zinc-400 font-medium">Tailwind CSS</span>. Deployed
        with hardened Docker & Nginx on{' '}
        <span className="text-emerald-400/90 font-mono">anshu.kushawaha.com</span>.
      </p>
      <p className="mt-2 text-zinc-600">
        © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
      </p>
    </footer>
  );
};
