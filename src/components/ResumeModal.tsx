import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { ProfileMode } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileMode: ProfileMode;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profileMode }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const text = `
ANSHU KUSHWAHA
Lead Platform Architect & Senior Full-Stack / DevOps Engineer
Email: kushawahaanshu8858@gmail.com | Quancore Softech (Sep 2015 - Present, 9+ Years)
Location: Vapi / Remote

SUMMARY:
Over 9+ consecutive years driving product architectures, cloud platforms, and DevOps at Quancore Softech.
Architected 10+ live platforms spanning high-throughput Python/FastAPI engines, GPU-aware Kubernetes clusters,
multi-tenant ERP suites, and multi-cloud orchestrations across AWS, GCP, and Hostinger.

CORE COMPETENCIES:
• Cloud & Orchestration: Kubernetes (EKS, GKE), Docker, Helm, ArgoCD GitOps, Terraform, Envoy, Karpenter
• Languages & Frameworks: Python (FastAPI, Flask, Celery), Node.js/TypeScript, Go (Golang), PHP/Laravel, Bagisto, React, Vue
• Databases & Streaming: PostgreSQL (RLS, GiST), MySQL, Redis Cluster, Apache Kafka, Amazon Aurora, S3 CDN
• Observability & Security: Prometheus, Grafana, OpenTelemetry, DMZ Isolation, HashiCorp Vault, mTLS, zero-trust IAM
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#090D16]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#0E1420] border border-[#1F293D] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Top Control Bar */}
        <div className="px-6 py-3 bg-[#151E2E] border-b border-[#1F293D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#10B981] font-semibold">
              DOCUMENT: ANSHU_KUSHWAHA_PLATFORM_ARCH_RESUME.pdf
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#0E1420] text-[#94A3B8] border border-[#1F293D]">
              VERIFIED
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#0E1420] hover:bg-[#1c2638] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#1F293D] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#0E1420] rounded transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090D16] text-[#E2E8F0] font-sans">
          
          {/* Header */}
          <div className="border-b border-[#1F293D] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F1F5F9]">
                ANSHU KUSHWAHA
              </h1>
              <p className="text-sm font-medium text-[#10B981] mt-1">
                Senior Full-Stack & DevOps Engineer // Lead Cloud Architect
              </p>
              <p className="text-xs text-[#94A3B8] mt-1 max-w-xl">
                9+ Consecutive Years of Software Engineering & Infrastructure Stewardship at Quancore Softech.
                Specialized in Kubernetes, High-Concurrency Python/Node Engines & Multi-Cloud Resiliency.
              </p>
            </div>

            <div className="font-mono text-xs text-[#94A3B8] space-y-1.5 bg-[#0E1420] p-3 rounded border border-[#1F293D]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span className="text-[#F1F5F9]">kushawahaanshu8858@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Quancore Softech (Vapi / Hybrid)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                <span>Sep 2015 – Present (9+ Years)</span>
              </div>
            </div>
          </div>

          {/* Technical Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#06B6D4] uppercase border-b border-[#1F293D] pb-1.5 mb-3">
              Architectural Profile & Leadership
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Platform architect and systems engineer with 9+ consecutive years leading product development, server infrastructure, and DevOps pipelines at Quancore Softech. Designed and shipped 10+ major live commercial and enterprise platforms, including Dzicard (automated digital poster & card generation), Expoburg (virtual B2B trade exhibition platform with live WebRTC), NuHire (Kubernetes GPU proctoring platform), Infizero (multi-tenant ERP), MyVapi (hyperlocal directory portal), and automated Telegram commerce bot engines.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#06B6D4] uppercase border-b border-[#1F293D] pb-1.5 mb-3">
              Core Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#0E1420] p-3 rounded border border-[#1F293D]">
                <span className="font-mono text-[#10B981] font-semibold block mb-1">
                  Cloud & Kubernetes:
                </span>
                <span className="text-[#94A3B8]">
                  Kubernetes (EKS, GKE), Docker multi-stage builds, Helm, Envoy, Karpenter autoscaling, GPU device routing, DMZ traffic isolation.
                </span>
              </div>

              <div className="bg-[#0E1420] p-3 rounded border border-[#1F293D]">
                <span className="font-mono text-[#10B981] font-semibold block mb-1">
                  GitOps & Delivery:
                </span>
                <span className="text-[#94A3B8]">
                  ArgoCD, Argo Rollouts, Terraform / OpenTofu IaC, GitHub Actions, Flagger canary verification, Aqua Trivy security scanning.
                </span>
              </div>

              <div className="bg-[#0E1420] p-3 rounded border border-[#1F293D]">
                <span className="font-mono text-[#10B981] font-semibold block mb-1">
                  Backend & Microservices:
                </span>
                <span className="text-[#94A3B8]">
                  Python (FastAPI, Flask, Celery), Node.js / TypeScript, Go (Golang), PHP 8.x / Laravel, Bagisto E-Commerce, REST & gRPC APIs.
                </span>
              </div>

              <div className="bg-[#0E1420] p-3 rounded border border-[#1F293D]">
                <span className="font-mono text-[#10B981] font-semibold block mb-1">
                  Data, Caching & Streaming:
                </span>
                <span className="text-[#94A3B8]">
                  PostgreSQL (RLS, GiST exclusion), MySQL Multi-AZ, Redis Pub/Sub presence mesh, Apache Kafka, Elasticsearch, AWS S3 CDN.
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#06B6D4] uppercase border-b border-[#1F293D] pb-1.5 mb-4">
              Professional Tenure — Quancore Softech (Sep 2015 – Present)
            </h2>

            <div className="space-y-6">
              
              {/* Stage 3 */}
              <div className="border-l-2 border-[#10B981] pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <span className="font-semibold text-sm text-[#F1F5F9]">
                    Platform & DevOps Lead // Core Cloud Architect
                  </span>
                  <span className="font-mono text-[#10B981]">2021 — PRESENT</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  Directing multi-cloud footprint (AWS, GCP, Hostinger), Kubernetes container orchestration, and automated CI/CD for enterprise SaaS applications.
                </p>
                <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-1">
                  <li>Orchestrated GPU-aware Kubernetes scheduling with DMZ traffic boundaries for the NuHire intelligence platform, cutting container startup time by 74%.</li>
                  <li>Architected automated GitOps deployment workflows slashing release cycle times from 4 days to 4 minutes with zero manual intervention.</li>
                  <li>Implemented Prometheus SLI/SLO monitoring, Grafana observability dashboards, and alert pipelines maintaining 99.99% target uptime across multi-region services.</li>
                </ul>
              </div>

              {/* Stage 2 */}
              <div className="border-l-2 border-[#06B6D4] pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <span className="font-semibold text-sm text-[#F1F5F9]">
                    Senior Full-Stack & Distributed Systems Architect
                  </span>
                  <span className="font-mono text-[#06B6D4]">2018 — 2021</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  Spearheaded core backend engines, asynchronous worker pools, and dynamic media generation pipelines for flagship products.
                </p>
                <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-1">
                  <li>Engineered Dzicard vector rasterizer and Celery pipeline processing 500,000+ digital invitation cards and posters at sub-850ms latency.</li>
                  <li>Constructed Expoburg virtual trade exhibition architecture handling 12,000+ simultaneous attendees with WebRTC video calling and Elasticsearch catalog indexing.</li>
                  <li>Designed multi-tenant Infizero ERP with atomic reservation locking using PostgreSQL GiST exclusions, eliminating all double-booking concurrency bugs.</li>
                </ul>
              </div>

              {/* Stage 1 */}
              <div className="border-l-2 border-[#1F293D] pl-4 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <span className="font-semibold text-sm text-[#F1F5F9]">
                    Full-Stack Developer & Backend Engineer
                  </span>
                  <span className="font-mono text-[#94A3B8]">2015 — 2018</span>
                </div>
                <p className="text-xs text-[#94A3B8]">
                  Architected high-volume web portals, MySQL schema optimizations, and custom e-commerce engines.
                </p>
                <ul className="list-disc list-inside text-xs text-[#94A3B8] space-y-1">
                  <li>Built MyVapi hyperlocal city portal serving 100+ municipal and B2B categories with aggressive Apache/PHP caching layers.</li>
                  <li>Authored custom Bagisto and Magento integrations, automated Telegram insurance query bot engines, and payment gateway webhooks.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Credentials */}
          <div className="border-t border-[#1F293D] pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#94A3B8] font-mono">
            <div>
              <span>Bachelor of Computer Applications / Information Technology</span>
            </div>
            <div>
              <span className="text-[#10B981]">Continuous Technical Excellence // 9+ Years Tenure</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
