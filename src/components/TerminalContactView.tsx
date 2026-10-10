import React from 'react';
import { ProfileMode } from '../types';
import { InteractiveTerminal } from './InteractiveTerminal';
import { Terminal, Mail, Shield, CheckCircle2, Copy, Send, Sparkles } from 'lucide-react';

interface TerminalContactViewProps {
  profileMode: ProfileMode;
  onOpenContactModal: () => void;
}

export const TerminalContactView: React.FC<TerminalContactViewProps> = ({
  profileMode,
  onOpenContactModal,
}) => {
  const isAnshu = profileMode === 'anshu';
  const emailTarget = 'kushawahaanshu8858@gmail.com';

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <section className="pt-6 sm:pt-8 space-y-3 border-b border-[#1F293D] pb-6">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#06B6D4]">
          <Terminal className="w-3.5 h-3.5" />
          <span>BASTION CLI & DIRECT COMMUNICATION GATEWAY</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F5F9]">
          {isAnshu
            ? 'Interactive Bastion Terminal & Contact'
            : 'Interactive SRE Terminal & Platform Gateway'}
        </h1>

        <p className="text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
          Execute live diagnostic commands directly within the Bastion console to inspect clusters, pods, and platforms. Or trigger the contact handshake to initiate direct communication.
        </p>
      </section>

      {/* Main Terminal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Terminal Window (8 cols) */}
        <div className="lg:col-span-8">
          <InteractiveTerminal
            profileMode={profileMode}
            onOpenContact={onOpenContactModal}
          />
        </div>

        {/* Contact & Status Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-4 font-mono text-xs">
          
          {/* Quick Connect Card */}
          <div className="bg-[#0E1420] border border-[#1F293D] p-5 rounded-lg space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-[#10B981] font-bold">
              <Mail className="w-4 h-4 text-[#10B981]" />
              <span>DIRECT CONTACT</span>
            </div>

            <div className="space-y-2 text-[#94A3B8]">
              <div>
                <span className="text-[10px] text-[#64748B] block">PRIMARY INBOX:</span>
                <a
                  href={`mailto:${emailTarget}`}
                  className="text-[#F1F5F9] font-bold hover:text-[#10B981] transition-colors"
                >
                  {emailTarget}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-[#64748B] block">LOCATION / BASE:</span>
                <span className="text-[#F1F5F9]">Vapi, Gujarat, India // Global Remote</span>
              </div>

              <div>
                <span className="text-[10px] text-[#64748B] block">ORGANIZATION:</span>
                <span className="text-[#F1F5F9]">Quancore Softech (Lead Architect)</span>
              </div>

              <div>
                <span className="text-[10px] text-[#64748B] block">ENGAGEMENT TYPES:</span>
                <span className="text-[#06B6D4]">Staff DevOps • Cloud Architecture • Consulting</span>
              </div>
            </div>

            <button
              onClick={onOpenContactModal}
              className="w-full py-2 rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Contact Handshake</span>
            </button>
          </div>

          {/* System Security Diagnostics */}
          <div className="bg-[#0E1420] border border-[#1F293D] p-5 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-[#06B6D4] font-bold">
              <Shield className="w-4 h-4 text-[#06B6D4]" />
              <span>SECURITY POSTURE</span>
            </div>

            <div className="space-y-1.5 text-[11px] text-[#94A3B8]">
              <div className="flex items-center justify-between">
                <span>mTLS Istio Mesh:</span>
                <span className="text-[#10B981]">ENFORCED (1.3)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Cosign Container Sign:</span>
                <span className="text-[#10B981]">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Trivy CVE Severity:</span>
                <span className="text-[#10B981]">0 CRITICAL</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Vault Dynamic Lease:</span>
                <span className="text-[#10B981]">ROTATING</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
