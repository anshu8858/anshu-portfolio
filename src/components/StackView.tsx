import React, { useState } from 'react';
import { ProfileMode, TechItem } from '../types';
import { TECH_SPECTRUM } from '../data/portfolioData';
import {
  Layers,
  Cpu,
  Server,
  Cloud,
  Terminal,
  Database,
  Radio,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface StackViewProps {
  profileMode: ProfileMode;
  onOpenContact: () => void;
}

export const StackView: React.FC<StackViewProps> = ({ profileMode, onOpenContact }) => {
  const isAnshu = profileMode === 'anshu';
  const categories = [
    'All Technologies',
    'Orchestration & Compute',
    'CI/CD & Delivery',
    'Infrastructure as Code',
    'Networking & Security',
    'Languages & Microservices',
    'Data & Storage',
    'Observability & SRE',
    'Cloud Providers',
  ];

  const [activeCategory, setActiveCategory] = useState('All Technologies');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const filteredItems = TECH_SPECTRUM.filter((item) => {
    if (activeCategory === 'All Technologies') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Top Header */}
      <section className="pt-6 sm:pt-8 space-y-4 border-b border-[#1F293D] pb-8">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#06B6D4]">
          <Layers className="w-3.5 h-3.5" />
          <span>
            {isAnshu
              ? 'ENGINEERING_SPECTRUM // PRODUCTION TOOLCHAIN // 9+ YEARS TENURE'
              : 'INFRASTRUCTURE_SPECTRUM // CLOUD-NATIVE MATRIX // DEPLOYED FLEET'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F9]">
          {isAnshu ? 'Core Tech Spectrum & Production Toolchain' : 'Infrastructure Stack & Systems Matrix'}
        </h1>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          {isAnshu
            ? 'Production-tested technologies deployed across Quancore Softech client infrastructures. Bridging full-stack application development (Python, Node, PHP) with modern cloud orchestrators (Kubernetes, Docker, AWS/GCP).'
            : 'Deep-stack cloud-native tooling spanning multi-cluster Kubernetes, GitOps delivery pipelines, eBPF telemetry, and zero-trust service mesh networking.'}
        </p>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-3 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#10B981] text-[#090D16] font-bold'
                  : 'bg-[#0E1420] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D]'
              }`}
            >
              {activeCategory === cat ? `[ ${cat} ]` : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Tech Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((tech) => (
          <div
            key={tech.name}
            onClick={() => setSelectedTech(tech)}
            className="bg-[#0E1420] border border-[#1F293D] hover:border-[#10B981]/50 p-5 rounded-lg space-y-3 cursor-pointer transition-all hover:bg-[#121927] group"
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#06B6D4] font-medium">{tech.category}</span>
              <span className="px-2 py-0.5 rounded bg-[#151E2E] text-[#10B981] border border-[#1F293D]">
                {tech.years}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#F1F5F9] group-hover:text-[#10B981] transition-colors">
                {tech.name}
              </h3>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="text-[#64748B]">Proficiency:</span>
                <span className="text-[#F1F5F9] font-semibold">{tech.level}</span>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
              {tech.description}
            </p>

            <div className="pt-2 border-t border-[#1F293D] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
              <span className="text-[#10B981]">✔ Production Hardened</span>
              <span>[ inspect ]</span>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Detail Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 bg-[#090D16]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#0E1420] border border-[#1F293D] rounded-lg shadow-2xl p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#1F293D]">
              <div>
                <h3 className="text-base font-bold text-[#F1F5F9]">{selectedTech.name}</h3>
                <span className="text-[#06B6D4] text-[11px]">{selectedTech.category}</span>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="px-2 py-1 rounded bg-[#151E2E] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D] cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-2 text-[#94A3B8]">
              <div className="flex items-center justify-between">
                <span>Production Tenure:</span>
                <span className="text-[#10B981] font-bold">{selectedTech.years}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Assessment Level:</span>
                <span className="text-[#F1F5F9] font-bold">{selectedTech.level}</span>
              </div>
            </div>

            <p className="text-xs text-[#E2E8F0] leading-relaxed bg-[#070A11] p-3 rounded border border-[#1F293D]">
              {selectedTech.description}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedTech(null);
                  onOpenContact();
                }}
                className="px-3 py-1.5 rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-bold cursor-pointer"
              >
                Inquire on Implementation
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
