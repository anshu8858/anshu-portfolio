import React, { useState } from 'react';
import { CaseStudy, ProfileMode } from '../types';
import { CASE_STUDIES, ANSHU_CASE_STUDIES } from '../data/portfolioData';
import { TopologyDiagram } from './TopologyDiagram';
import { InteractiveTerminal } from './InteractiveTerminal';
import {
  Code2,
  ExternalLink,
  Copy,
  Check,
  FileCode,
  Layers,
  Activity,
  ArrowUpRight,
  Filter,
  CheckCircle,
} from 'lucide-react';

interface ProjectsViewProps {
  profileMode: ProfileMode;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenContact: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  profileMode,
  onSelectCaseStudy,
  onOpenContact,
}) => {
  const isAnshu = profileMode === 'anshu';
  const allCases = isAnshu ? ANSHU_CASE_STUDIES : CASE_STUDIES;

  // Filter Categories
  const sysarchFilters = ['All Projects', 'Platform / Kubernetes', 'CI/CD & GitOps', 'Full-Stack & Cloud Architecture'];
  const anshuFilters = ['All Platforms (6)', 'Kubernetes & Cloud Platform', 'Full-Stack SaaS & ERP', 'API Gateways & Bots'];
  const filterList = isAnshu ? anshuFilters : sysarchFilters;

  const [activeFilter, setActiveFilter] = useState<string>(filterList[0]);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Filter logic
  const filteredCases = allCases.filter((item) => {
    if (activeFilter.includes('All')) return true;
    if (activeFilter.includes('Kubernetes') || activeFilter.includes('Platform')) {
      return item.tags.some((t) => t.includes('Kubernetes') || t.includes('EKS') || t.includes('Mesh'));
    }
    if (activeFilter.includes('CI/CD') || activeFilter.includes('GitOps')) {
      return item.tags.some((t) => t.includes('Argo') || t.includes('Terraform') || t.includes('GitOps'));
    }
    if (activeFilter.includes('SaaS') || activeFilter.includes('ERP')) {
      return item.tags.some((t) => t.includes('FastAPI') || t.includes('Vue') || t.includes('Laravel') || t.includes('PostgreSQL'));
    }
    if (activeFilter.includes('Bots') || activeFilter.includes('Gateways') || activeFilter.includes('Full-Stack')) {
      return item.tags.some((t) => t.includes('Telegram') || t.includes('REST') || t.includes('Kafka') || t.includes('Go'));
    }
    return true;
  });

  const handleCopyCode = (id: string, codeStr: string) => {
    navigator.clipboard.writeText(codeStr);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Top Header & Metrics Strip */}
      <section className="pt-6 sm:pt-8 space-y-6 border-b border-[#1F293D] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#06B6D4]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>
              {isAnshu
                ? 'TELEMETRY_VIEW // QUANCORE_CLIENT_CATALOG // TENURE: SEP 2015 - PRESENT (9+ YRS)'
                : 'TELEMETRY_VIEW // ARCH_CATALOG_V4 // ENV: MULTI-REGION_PROD'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F9]">
            {isAnshu
              ? 'Production Architectures & Enterprise Platforms'
              : 'Production Architectures & Systems'}
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
            {isAnshu
              ? 'Engineered and shipped by Anshu Kushwaha at Quancore Softech. Production client platforms spanning Kubernetes cluster engineering, Python/Go high-performance rendering engines, multi-tenant virtual expos, and secure API gateways.'
              : 'Production-hardened distributed systems bridging cloud infrastructure orchestration, automated GitOps control planes, and high-concurrency full-stack services.'}
          </p>
        </div>

        {/* Top 3 KPI Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
          <div className="bg-[#0E1420] border border-[#1F293D] p-3 rounded font-mono">
            <span className="text-[10px] text-[#64748B] block">
              {isAnshu ? 'EXPERIENCE' : 'UPTIME_TARGET'}
            </span>
            <span className="text-lg font-bold text-[#10B981]">
              {isAnshu ? '9+ Years' : '99.995%'}
            </span>
          </div>

          <div className="bg-[#0E1420] border border-[#1F293D] p-3 rounded font-mono">
            <span className="text-[10px] text-[#64748B] block">
              {isAnshu ? 'PROD_PLATFORMS' : 'PEAK_RPS'}
            </span>
            <span className="text-lg font-bold text-[#06B6D4]">
              {isAnshu ? '6+ Major' : '40,000'}
            </span>
          </div>

          <div className="bg-[#0E1420] border border-[#1F293D] p-3 rounded font-mono">
            <span className="text-[10px] text-[#64748B] block">
              {isAnshu ? 'ROLE' : 'PROV_CYCLE'}
            </span>
            <span className="text-lg font-bold text-[#F1F5F9]">
              {isAnshu ? 'Architect / Lead' : '4m'}
            </span>
          </div>
        </div>

        {/* Filter Bar with Synchronized Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
            {filterList.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === f
                    ? 'bg-[#10B981] text-[#090D16] font-bold'
                    : 'bg-[#0E1420] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D]'
                }`}
              >
                {activeFilter === f ? `[ ${f} ]` : f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#64748B]">
            <span>STATUS:</span>
            <span className="text-[#10B981] flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              {isAnshu ? 'QUANCORE PIPELINE: LIVE PRODUCTION' : 'SYNCHRONIZED'}
            </span>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive List */}
      <section className="space-y-12">
        {filteredCases.map((cs) => (
          <article
            key={cs.id}
            className="bg-[#0E1420] border border-[#1F293D] rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative"
          >
            
            {/* Top Bar: SYS_ID, Status Badge, Region/URL, Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#1F293D]">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#151E2E] text-[#10B981] border border-[#10B981]/40 font-semibold">
                  {cs.badge}
                </span>

                <span className="font-mono text-xs text-[#94A3B8]">
                  SYS_ID: <span className="text-[#F1F5F9]">{cs.sysId}</span>
                </span>

                <span className="text-[#1F293D] hidden sm:inline">|</span>

                <span className="font-mono text-[11px] text-[#06B6D4]">
                  {cs.regionOrScale}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded bg-[#070A11] hover:bg-[#151E2E] text-[#94A3B8] hover:text-[#06B6D4] border border-[#1F293D] transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>{cs.liveUrl.replace('https://', '')}</span>
                  </a>
                )}

                <button
                  onClick={() => onSelectCaseStudy(cs)}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded bg-[#070A11] hover:bg-[#151E2E] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D] transition-colors cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>[ view_manifests ]</span>
                </button>

                <button
                  onClick={() => onSelectCaseStudy(cs)}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-semibold transition-colors cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isAnshu ? 'Engine Blueprint' : 'Arch Spec'}</span>
                </button>
              </div>

            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
                {cs.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-4xl">
                {cs.subtitle}
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#070A11] text-[#94A3B8] border border-[#1F293D]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 3-Column Problem / Solution / Impact Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              
              {/* Col 1: Challenge */}
              <div className="bg-[#070A11] border border-[#1F293D] p-4 rounded space-y-2">
                <span className="font-mono text-[10px] text-[#EF4444] font-bold block uppercase tracking-wider">
                  ⚠ {cs.challenge.title}
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {cs.challenge.description}
                </p>
              </div>

              {/* Col 2: Solution */}
              <div className="bg-[#070A11] border border-[#1F293D] p-4 rounded space-y-2">
                <span className="font-mono text-[10px] text-[#06B6D4] font-bold block uppercase tracking-wider">
                  ⚙ {cs.solution.title}
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {cs.solution.description}
                </p>
              </div>

              {/* Col 3: Impact / Quantified Metrics */}
              <div className="bg-[#070A11] border border-[#1F293D] p-4 rounded space-y-2.5">
                <span className="font-mono text-[10px] text-[#10B981] font-bold block uppercase tracking-wider">
                  ✔ {cs.impact.title}
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  {cs.impact.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px]">
                      <span className="text-[#64748B]">{m.label}</span>
                      <span className="text-[#10B981] font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Split Visual Container: Topology Map (Left) & Code Editor (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
              
              {/* Left Side: Topology Diagram (7 cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <TopologyDiagram caseStudy={cs} />
              </div>

              {/* Right Side: Code Viewer with Copy (5 cols) */}
              <div className="lg:col-span-5 flex flex-col bg-[#070A11] border border-[#1F293D] rounded overflow-hidden font-mono text-xs">
                
                {/* Editor Header */}
                <div className="px-3.5 py-2 bg-[#0E1420] border-b border-[#1F293D] flex items-center justify-between text-[11px]">
                  <span className="text-[#06B6D4] font-bold truncate">
                    {cs.code.filename}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#64748B] text-[10px]">{cs.manifestType}</span>
                    <button
                      onClick={() => handleCopyCode(cs.id, cs.code.content)}
                      className="p-1 text-[#94A3B8] hover:text-[#F1F5F9] rounded hover:bg-[#151E2E] transition-colors cursor-pointer"
                      title="Copy code"
                    >
                      {copiedCodeId === cs.id ? (
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Editor Code Body */}
                <div className="p-3 overflow-y-auto max-h-[220px] text-[#E2E8F0] text-[11px] leading-relaxed bg-[#070A11] select-text">
                  <pre className="overflow-x-auto">
                    {cs.code.content}
                  </pre>
                </div>

                {/* Editor Footer Status */}
                <div className="px-3.5 py-1.5 bg-[#0E1420] border-t border-[#1F293D] flex items-center justify-between text-[10px] text-[#64748B]">
                  <span>{cs.code.metaSource}</span>
                  <span className="text-[#10B981]">{cs.code.stateText}</span>
                </div>

              </div>

            </div>

          </article>
        ))}
      </section>

      {/* Bottom Interactive Bastion Terminal Session */}
      <section className="space-y-3 pt-6">
        <div className="flex items-center justify-between font-mono text-xs text-[#94A3B8]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>LIVE BASTION MANAGEMENT CONSOLE</span>
          </span>
          <span className="text-[#64748B]">Interactive CLI • Type commands directly</span>
        </div>
        <InteractiveTerminal
          profileMode={profileMode}
          onOpenContact={onOpenContact}
          onOpenManifest={(name) => {
            const match = allCases.find((c) => c.manifestFile === name || c.code.filename === name);
            if (match) onSelectCaseStudy(match);
          }}
        />
      </section>

    </div>
  );
};
