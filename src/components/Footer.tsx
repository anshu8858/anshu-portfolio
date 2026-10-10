import React from 'react';
import { ProfileMode } from '../types';
import { Radio } from 'lucide-react';

interface FooterProps {
  profileMode: ProfileMode;
}

export const Footer: React.FC<FooterProps> = ({ profileMode }) => {
  const isAnshu = profileMode === 'anshu';

  return (
    <footer className="w-full bg-[#070A11] border-t border-[#1F293D] px-4 lg:px-8 py-6 font-mono text-[11px] text-[#64748B] space-y-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left: Operational Uptime & Clusters */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#10B981] font-semibold">
            <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
            <span>
              {isAnshu
                ? 'ANSHU KUSHWAHA • QUANCORE SOFTECH'
                : 'UPTIME: 99.998% [NOMINAL]'}
            </span>
          </div>
          <div className="text-[10px] text-[#94A3B8]">
            {isAnshu
              ? 'Full-Stack Architect & DevOps / Platform Lead • Serving Since Sept 2015 [9+ Years]'
              : 'REGION: us-east-1 // CLUSTER: k8s-prod-primary-edge'}
          </div>
        </div>

        {/* Center: Tech Breadcrumb Tagline */}
        <div className="hidden lg:flex items-center gap-2 text-[#94A3B8] text-[10px]">
          <span className="text-[#06B6D4]">&gt;_</span>
          {isAnshu ? (
            <span>PYTHON | KUBERNETES | NODE.JS | LARAVEL | AWS &amp; GCP</span>
          ) : (
            <span>TERRAFORM | KUBERNETES | ARGOCD | GOLANG | RUST</span>
          )}
        </div>

        {/* Right: Copyright & Distribution */}
        <div className="text-right text-[10px] space-y-0.5">
          <div className="text-[#94A3B8]">
            {isAnshu
              ? '© 2015–2026 ANSHU KUSHWAHA. ALL PRODUCTION WORKLOADS ACTIVE.'
              : '© 2026 DEV_OPS PLATFORM ARCHITECT. ALL SYSTEMS OPERATIONAL.'}
          </div>
          <div className="text-[#64748B]">
            {isAnshu
              ? 'ENGINEERED AT QUANCORE SOFTECH • OBSIDIAN TELEMETRY ARCHITECTURE'
              : 'DISTRIBUTION: MIT LICENSE / TELEMETRY EMITTING'}
          </div>
        </div>

      </div>
    </footer>
  );
};
