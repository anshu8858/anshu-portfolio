import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [activeSection, setActiveSection] = useState('about');

  // Mouse spotlight glow tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'stack', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -65% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-zinc-300 antialiased selection:bg-emerald-400/20 selection:text-emerald-300">
      {/* Interactive mouse spotlight glow on desktop */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.07), transparent 80%)`,
        }}
      />

      {/* Main 2-column balanced container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column: Sticky Header / Nav / Social (48% width) */}
          <Header activeSection={activeSection} />

          {/* Right Column: Scrollable Content Stream (52% width) */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24 space-y-24">
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
