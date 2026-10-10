import React, { useState } from 'react';
import { CaseStudy, NavTab, PipelineStage, ProfileMode } from '../types';
import {
  ANSHU_CASE_STUDIES,
  ANSHU_COMPETENCIES,
  ANSHU_METRICS,
  CASE_STUDIES,
  COMPETENCY_PILLARS,
  PIPELINE_STAGES,
  SYSARCH_METRICS,
} from '../data/portfolioData';
import { TopologyView } from './TopologyView';
import {
  ArrowRight,
  Terminal,
  Layers,
  FileText,
  Activity,
  Shield,
  Boxes,
  Cpu,
  Server,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
} from 'lucide-react';

interface OverviewViewProps {
  profileMode: ProfileMode;
  onNavigateTab: (tab: NavTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectPipelineStage: (stage: PipelineStage) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  profileMode,
  onNavigateTab,
  onOpenResume,
  onOpenContact,
  onSelectPipelineStage,
  onSelectCaseStudy,
}) => {
  const isAnshu = profileMode === 'anshu';
  const metrics = isAnshu ? ANSHU_METRICS : SYSARCH_METRICS;
  const competencies = isAnshu ? ANSHU_COMPETENCIES : COMPETENCY_PILLARS;
  const featuredCases = isAnshu ? ANSHU_CASE_STUDIES.slice(0, 2) : CASE_STUDIES.slice(0, 2);

  const [copiedCli, setCopiedCli] = useState(false);
  const cliCommand = isAnshu
    ? 'curl -s https://sysarch.engineer/contact.sh | sh'
    : 'curl -s https://sysarch.engineer/contact.sh | sh';

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pedigree Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0E1420] border border-[#1F293D] text-[11px] font-mono text-[#06B6D4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span>
                {isAnshu
                  ? 'ENGINEERING PROVENANCE // Senior Full-Stack & DevOps Specialist'
                  : 'DUAL ENGINEERING PEDIGREE // 8+ Yrs Full-Stack -> Platform Arch'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F9] leading-[1.15]">
              {isAnshu ? (
                <>
                  9+ Years of Full-Stack Craftsmanship meets{' '}
                  <span className="text-[#10B981]">Cloud-Native Infrastructure & DevOps</span>
                </>
              ) : (
                <>
                  Bridging 8 Years of Full-Stack Craft with{' '}
                  <span className="text-[#10B981]">Cloud-Native Infrastructure & SRE</span>
                </>
              )}
            </h1>

            {/* Lead Copy */}
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
              {isAnshu
                ? 'At Quancore Softech since September 2015, steering complete product life cycles from high-throughput Python and Node.js engines to GPU-aware Kubernetes clusters and multi-cloud orchestrations. Architecting 10+ live platforms with rock-solid security, automated delivery, and resilient uptime.'
                : 'Architecting resilient Kubernetes platforms, GitOps delivery pipelines, and zero-downtime distributed systems informed by nearly a decade of writing production application code. Eliminating developer friction by understanding what runs inside the container as deeply as what orchestrates it.'}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateTab('projects')}
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-semibold text-xs transition-colors shadow-sm cursor-pointer"
              >
                <Boxes className="w-4 h-4" />
                <span>{isAnshu ? 'Explore Live Platforms' : 'Explore Architecture Case Studies'}</span>
              </button>

              <button
                onClick={() => onNavigateTab('stack')}
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#0E1420] hover:bg-[#151E2E] text-[#F1F5F9] border border-[#1F293D] hover:border-[#06B6D4]/50 font-medium text-xs transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#06B6D4]" />
                <span>{isAnshu ? 'View Core Tech Spectrum' : 'View Infrastructure Stack'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-2 rounded text-xs font-mono text-[#94A3B8] hover:text-[#10B981] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isAnshu ? '[ Quancore Journey ]' : '[ resume.pdf ]'}</span>
              </button>
            </div>

            {/* Pedigree Roots Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1F293D]">
              <div className="bg-[#0E1420] border border-[#1F293D] p-3 rounded space-y-1">
                <span className="font-mono text-[10px] text-[#06B6D4] font-bold block">
                  {isAnshu ? 'FULL-STACK ENGINES' : 'FULL-STACK ROOTS'}
                </span>
                <p className="text-xs text-[#94A3B8]">
                  {isAnshu
                    ? 'Python REST/FastAPI microservices, Node.js, PHP / Laravel (Bagisto), React, Vue.js, MySQL & Redis architectures.'
                    : 'Distributed Node.js, Go microservices, React internals, DB indexing, gRPC protocols.'}
                </p>
              </div>

              <div className="bg-[#0E1420] border border-[#1F293D] p-3 rounded space-y-1">
                <span className="font-mono text-[10px] text-[#10B981] font-bold block">
                  {isAnshu ? 'DEVOPS & CLOUD PLATFORM' : 'PLATFORM & SRE MASTERY'}
                </span>
                <p className="text-xs text-[#94A3B8]">
                  {isAnshu
                    ? 'Kubernetes cluster tuning, K8s GPU-aware workload routing, CI/CD pipeline automation, AWS, GCP & Hostinger topologies.'
                    : 'Multi-cluster Kubernetes, ArgoCD GitOps, Terraform IaC, eBPF telemetry, Zero-Trust mesh.'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Telemetry Terminal Widget (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#070A11] border border-[#1F293D] rounded-lg overflow-hidden shadow-2xl font-mono text-xs">
              
              {/* Window Header */}
              <div className="px-3.5 py-2.5 bg-[#0E1420] border-b border-[#1F293D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]/80"></span>
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80"></span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981]/80"></span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] ml-1">
                    {isAnshu ? 'anshu@quancore-cloud-ops // prod-gateway' : 'k8s-mesh-gateway // prod-telemetry'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#10B981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
                  <span>{isAnshu ? 'CLUSTER HEALTHY' : '24ms LATENCY'}</span>
                </div>
              </div>

              {/* Terminal Commands & Table Output */}
              <div className="p-3.5 space-y-3 bg-[#070A11] text-[#E2E8F0] text-[11px] leading-relaxed">
                
                {/* Command 1 */}
                <div>
                  <div className="text-[#10B981] flex items-center gap-1.5">
                    <span className="text-[#06B6D4]">$</span>
                    <span>{isAnshu ? 'kubectl get deployments -n prod-workloads' : 'kubectl get nodes -o wide --selector=env=production'}</span>
                  </div>
                  <div className="mt-1.5 text-[10px] text-[#94A3B8] overflow-x-auto whitespace-pre font-mono bg-[#090D16] p-2 rounded border border-[#1F293D]/60">
                    {isAnshu ? (
`NAME               READY   UP-TO-DATE   AVAILABLE   WORKLOAD-TYPE
dzicard-render-core 12/12   12           12          Python / Pillow
expoburg-streaming  8/8     8            8           WebRTC / Node
nuhire-ai-pipeline  6/6     6            6           GPU / TorchServe
myvapi-model-gw     10/10   10           10          FastAPI Envoy`
                    ) : (
`NAME             STATUS   ROLES    AGE    VERSION        INTERNAL-IP
ip-10-0-42-18    Ready    control  182d   v1.30.2-eks    10.0.42.18
ip-10-0-88-204   Ready    worker   94d    v1.30.2-eks    10.0.88.204
ip-10-0-120-77   Ready    worker   94d    v1.30.2-eks    10.0.120.77`
                    )}
                  </div>
                </div>

                {/* Command 2 */}
                <div>
                  <div className="text-[#10B981] flex items-center gap-1.5">
                    <span className="text-[#06B6D4]">$</span>
                    <span>{isAnshu ? 'cicd-pipeline status --project=expoburg-v4' : 'argocd app get checkout-svc-prod --refresh'}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-[#94A3B8] px-1">
                    <span>{isAnshu ? 'Target: AWS EKS + GCP Multi-Region CDN' : 'Commit: 3f8b0e4 [fix: zero-copy stream deserializer]'}</span>
                    <span className="text-[#10B981] font-semibold">{isAnshu ? '[ PASS • 0 ERRORS ]' : '[ Synced / Healthy ]'}</span>
                  </div>
                  <div className="text-[10px] text-[#64748B] px-1">
                    {isAnshu ? 'Rollout: Canary 100%' : '100% Canary (90 pods)'}
                  </div>
                </div>

                {/* Command 3: Live SVG Waveform */}
                <div>
                  <div className="text-[#10B981] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#06B6D4]">$</span>
                      <span>{isAnshu ? 'telemetry query gpu_utilization --slo' : 'otel-collector p99 --slo'}</span>
                    </div>
                    <span className="text-[10px] text-[#06B6D4]">{isAnshu ? 'LATENCY: 14ms' : 'BURD_RATE: 0.00%'}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#64748B] px-1 mt-0.5">
                    <span>{isAnshu ? 'GPU Workload Efficiency: 94.2%' : 'SLO Target: 99.95% • Actual: 99.998%'}</span>
                  </div>

                  {/* SVG Wave */}
                  <div className="h-10 w-full bg-[#090D16] rounded border border-[#1F293D] mt-1.5 p-1 flex items-center">
                    <svg className="w-full h-full" viewBox="0 0 300 40" preserveAspectRatio="none">
                      <path
                        d="M0,32 Q35,28 70,30 T140,12 T210,25 T280,18 L300,22"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,35 Q40,32 80,34 T160,20 T240,28 L300,25"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="1.5"
                        strokeDasharray="3 2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Validation Card */}
                <div className="bg-[#0E1420] border border-[#1F293D] p-2.5 rounded flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#10B981]" />
                    <div>
                      <span className="text-[10px] text-[#F1F5F9] font-bold block">
                        {isAnshu ? 'QUANCORE CORE ARCHITECT' : 'SYSTEM TELEMETRY STATUS'}
                      </span>
                      <span className="text-[9px] text-[#64748B]">
                        {isAnshu
                          ? 'Continuous production innovation since 2015'
                          : 'Zero security advisories • mTLS enforced'}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] bg-[#151E2E] px-2 py-0.5 rounded border border-[#10B981]/30">
                    {isAnshu ? 'ACTIVE LEADERSHIP' : 'PASSED 48/48 CHECKS'}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4 Metric KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div
            key={m.id}
            className="bg-[#0E1420] border border-[#1F293D] hover:border-[#2D3B55] p-5 rounded-lg space-y-2 transition-colors relative overflow-hidden group"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#64748B] tracking-wider uppercase">
                {m.label}
              </span>
              <Activity className="w-3.5 h-3.5 text-[#06B6D4] opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9] font-mono">
              {m.value}
            </div>

            <div className="text-xs font-semibold text-[#10B981]">
              {m.sublabel}
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
              {m.detail}
            </p>
          </div>
        ))}
      </section>

      {/* CI/CD Pipeline Tracker */}
      <section className="bg-[#0E1420] border border-[#1F293D] rounded-lg p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#1F293D] gap-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#10B981]" />
            <h2 className="font-mono text-xs sm:text-sm font-bold text-[#F1F5F9] uppercase tracking-wider">
              {isAnshu
                ? 'AUTOMATED CONTINUOUS INTEGRATION & PRODUCTION DELIVERY'
                : 'ZERO-DOWNTIME CONTINUOUS DELIVERY CHAIN'}
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[#64748B]">
            {isAnshu ? 'STAGE: Lint > Containerize > CVE Audit > Multi-Cloud Dispatch' : 'TRIGGER: git tag -a v8.4.0 (Main Branch) • DURATION: 11m 42s'}
          </span>
        </div>

        {/* Pipeline Chain Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {PIPELINE_STAGES.map((stage) => (
            <button
              key={stage.id}
              onClick={() => onSelectPipelineStage(stage)}
              className="bg-[#070A11] border border-[#10B981]/40 hover:border-[#10B981] p-3 rounded text-left transition-all hover:bg-[#151E2E] group cursor-pointer"
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className="text-[#10B981] font-bold">{stage.name}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
              <div className="text-xs font-semibold text-[#F1F5F9] font-mono">
                {stage.duration}
              </div>
              <div className="text-[10px] text-[#64748B] truncate mt-1">
                {stage.tool}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Live Kubernetes Cluster Architecture & Multi-Platform Topology View */}
      <section>
        <TopologyView profileMode={profileMode} />
      </section>

      {/* Core Architectural Competencies (4 Pillars) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#06B6D4]">
            <Boxes className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL COMPETENCIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
            {isAnshu
              ? 'Harmonizing App Logic with Cloud Infrastructure'
              : 'How 8 Years in the Codebase Reshapes Platform Engineering'}
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-3xl leading-relaxed">
            {isAnshu
              ? 'Building resilient platforms requires mastering both internal container logic and the orchestrator managing it. 9+ years at Quancore Softech have proven that eliminating friction between development code and production infrastructure produces the most durable applications.'
              : 'Infrastructure built in isolation breeds friction. I approach SRE and platform design with deep empathy for developers—building frictionless abstractions, self-service portals, and automated guardrails that empower teams rather than blocking them.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competencies.map((comp) => (
            <div
              key={comp.id}
              className="bg-[#0E1420] border border-[#1F293D] hover:border-[#2D3B55] p-6 rounded-lg space-y-4 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded bg-[#151E2E] border border-[#1F293D] flex items-center justify-center text-[#10B981]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#151E2E] text-[#06B6D4] border border-[#1F293D]">
                    {comp.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] leading-snug">
                  {comp.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {comp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1F293D]">
                {comp.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#070A11] text-[#94A3B8] border border-[#1F293D]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proven Architectural Impact / Featured Systems */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#10B981] block">
              {isAnshu ? '• SHIPPED AT QUANCORE SOFTECH' : '• PROVEN ARCHITECTURAL IMPACT'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
              {isAnshu
                ? 'Featured Live Platforms & Systems Architecture'
                : 'Featured Systems & Infrastructure Milestones'}
            </h2>
          </div>

          <button
            onClick={() => onNavigateTab('projects')}
            className="flex items-center gap-1.5 font-mono text-xs text-[#06B6D4] hover:text-[#F1F5F9] hover:underline cursor-pointer"
          >
            <span>{isAnshu ? 'Explore All 6 Platforms' : 'Explore All Case Studies'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCases.map((cs) => (
            <div
              key={cs.id}
              onClick={() => onSelectCaseStudy(cs)}
              className="bg-[#0E1420] border border-[#1F293D] hover:border-[#10B981]/50 rounded-lg p-6 space-y-4 cursor-pointer transition-all hover:bg-[#121927] group"
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-[#151E2E] text-[#10B981] border border-[#1F293D]">
                  {cs.badge}
                </span>
                <span className="text-[#64748B]">{cs.regionOrScale}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#F1F5F9] group-hover:text-[#10B981] transition-colors leading-snug">
                  {cs.title}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-2 line-clamp-3 leading-relaxed">
                  {cs.subtitle}
                </p>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 bg-[#070A11] p-3 rounded border border-[#1F293D]">
                {cs.impact.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <span className="block text-[9px] font-mono text-[#64748B] truncate">
                      {m.label.replace(':', '')}
                    </span>
                    <span className="block font-mono text-xs font-bold text-[#10B981]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#1F293D] text-[11px] font-mono text-[#06B6D4]">
                <span>[ Click to inspect topology & code ]</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLI Quick Connect Section */}
      <section className="bg-[#0E1420] border border-[#1F293D] rounded-lg p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#10B981]">
              <Terminal className="w-3.5 h-3.5" />
              <span>INTERACTIVE CLI QUICK CONNECT</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F1F5F9]">
              {isAnshu ? 'Connect with Anshu Kushwaha' : 'Ready to Elevate Your Platform & SRE Capability?'}
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {isAnshu
                ? 'Open for technical discussions, platform engineering collaborations, and enterprise software consultations. Let\'s engineer scalable, resilient, and developer-friendly systems together.'
                : 'Available for Staff/Lead DevOps, Platform Architecture, and Systems Engineering engagements. Let\'s build resilient, cost-efficient, developer-adored infrastructure together.'}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <div className="bg-[#070A11] border border-[#1F293D] p-3 rounded font-mono text-xs flex items-center justify-between gap-2">
              <span className="text-[#06B6D4] truncate">{cliCommand}</span>
              <button
                onClick={handleCopyCli}
                className="p-1.5 text-[#94A3B8] hover:text-[#F1F5F9] rounded hover:bg-[#151E2E] transition-colors cursor-pointer shrink-0"
                title="Copy command"
              >
                {copiedCli ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-bold text-xs font-mono transition-colors cursor-pointer"
            >
              {isAnshu ? 'Send Direct Email Inquiry' : 'Initiate Contact Handshake'}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
