import React from 'react';
import { ProfileMode } from '../types';
import { TIMELINE_MILESTONES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, FileText, ArrowRight, Award } from 'lucide-react';

interface ExperienceViewProps {
  profileMode: ProfileMode;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  profileMode,
  onOpenResume,
  onOpenContact,
}) => {
  const isAnshu = profileMode === 'anshu';

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="pt-6 sm:pt-8 space-y-4 border-b border-[#1F293D] pb-8">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#10B981]">
          <Award className="w-3.5 h-3.5" />
          <span>DEDICATED PROFESSIONAL TENURE // QUANCORE SOFTECH (SEP 2015 – PRESENT)</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F9]">
          {isAnshu
            ? 'Quancore Softech Experience (Sep 2015 – Present)'
            : 'Engineering Leadership & Career Progression'}
        </h1>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          Over 9 consecutive years driving software engineering, technical team mentorship, and platform architecture at Quancore Softech. From writing initial core application logic to architecting distributed cloud ecosystems across AWS, GCP, and Hostinger.
        </p>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded bg-[#10B981] hover:bg-[#059669] text-[#090D16] font-semibold text-xs font-mono transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Open Verified Technical Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3 py-2 rounded bg-[#0E1420] hover:bg-[#151E2E] text-[#F1F5F9] border border-[#1F293D] text-xs font-mono transition-colors cursor-pointer"
          >
            <span>Inquire for Engagement</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#06B6D4]" />
          </button>
        </div>
      </section>

      {/* 3 Career Milestone Eras */}
      <section className="space-y-8">
        {TIMELINE_MILESTONES.map((milestone, idx) => (
          <div
            key={milestone.period}
            className="bg-[#0E1420] border border-[#1F293D] rounded-lg p-6 sm:p-8 space-y-5 shadow-xl relative overflow-hidden"
          >
            
            {/* Top Period Badge Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1F293D]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#151E2E] text-[#10B981] border border-[#10B981]/30">
                  {milestone.period}
                </span>
                <span className="font-mono text-xs text-[#06B6D4] font-semibold">
                  {milestone.badge}
                </span>
              </div>

              <div className="font-mono text-xs text-[#64748B]">
                {milestone.company} // {milestone.role}
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F1F5F9]">
                {milestone.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {milestone.description}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5 pt-2">
              <span className="font-mono text-[11px] text-[#06B6D4] font-bold block uppercase tracking-wider">
                Key Platform Achievements:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {milestone.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 bg-[#070A11] p-3 rounded border border-[#1F293D] text-xs text-[#94A3B8] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-3 border-t border-[#1F293D] flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[11px] text-[#64748B] mr-2">Stack:</span>
              {milestone.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#151E2E] text-[#94A3B8] border border-[#1F293D]"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};
