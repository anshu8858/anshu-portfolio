import React from 'react';
import { NavTab, ProfileMode } from '../types';
import { Terminal, Shield, FileText, Github, Linkedin, RefreshCw, Cpu, Server } from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  profileMode: ProfileMode;
  onProfileModeToggle: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  profileMode,
  onProfileModeToggle,
  onOpenResume,
}) => {
  const isAnshu = profileMode === 'anshu';

  return (
    <header className="sticky top-0 z-50 bg-[#090D16]/95 backdrop-blur border-b border-[#1F293D] px-4 lg:px-8 py-3 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Brand / Identity & Role Marker */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#0E1420] border border-[#1F293D] flex items-center justify-center text-[#10B981] shadow-sm">
              {isAnshu ? <Cpu className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm md:text-base tracking-tight text-[#F1F5F9] whitespace-nowrap">
                  {isAnshu ? 'ANSHU KUSHWAHA' : 'SYS_ARCH'}
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#151E2E] border border-[#1F293D] text-[#94A3B8]">
                  {isAnshu ? 'v9.4.0-lead' : 'v8.4.0-prod'}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#64748B] font-mono">
                {isAnshu ? (
                  <span>Quancore Softech // Sep 2015 – Present [9+ Yrs]</span>
                ) : (
                  <span className="flex items-center gap-1 text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    OPEN TO STAFF DEVOPS / PLATFORM ROLES
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Profile Mode Switcher */}
          <button
            onClick={onProfileModeToggle}
            title="Toggle between SYS_ARCH Staff Dossier and Anshu Kushwaha Quancore Lead profile"
            className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono px-2 py-1 rounded bg-[#0E1420] hover:bg-[#151E2E] text-[#06B6D4] border border-[#1F293D] hover:border-[#06B6D4]/50 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Switch: {isAnshu ? 'Staff SRE Dossier' : 'Anshu Kushwaha'}</span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (single-line, clean hover states) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-wide">
          <button
            onClick={() => onTabChange('overview')}
            className={`whitespace-nowrap pb-0.5 transition-colors cursor-pointer ${
              currentTab === 'overview'
                ? 'text-[#10B981] border-b-2 border-[#10B981] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => onTabChange('projects')}
            className={`whitespace-nowrap pb-0.5 transition-colors cursor-pointer ${
              currentTab === 'projects'
                ? 'text-[#10B981] border-b-2 border-[#10B981] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            {isAnshu ? 'Platforms & Systems' : 'Architecture & Projects'}
          </button>

          <button
            onClick={() => onTabChange('stack')}
            className={`whitespace-nowrap pb-0.5 transition-colors cursor-pointer ${
              currentTab === 'stack'
                ? 'text-[#10B981] border-b-2 border-[#10B981] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            {isAnshu ? 'Tech Spectrum' : 'Infrastructure Stack'}
          </button>

          <button
            onClick={() => onTabChange('experience')}
            className={`whitespace-nowrap pb-0.5 transition-colors cursor-pointer ${
              currentTab === 'experience'
                ? 'text-[#10B981] border-b-2 border-[#10B981] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            {isAnshu ? 'Quancore Tenure' : 'Experience'}
          </button>

          <button
            onClick={() => onTabChange('terminal')}
            className={`whitespace-nowrap pb-0.5 transition-colors cursor-pointer ${
              currentTab === 'terminal'
                ? 'text-[#10B981] border-b-2 border-[#10B981] font-semibold'
                : 'text-[#94A3B8] hover:text-[#F1F5F9]'
            }`}
          >
            Terminal / Contact
          </button>
        </nav>

        {/* Zone 3: Actions & External Affordances */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8] hover:text-[#06B6D4] px-2 py-1 rounded bg-[#0E1420] border border-[#1F293D] transition-colors"
          >
            <Github className="w-3 h-3 text-[#06B6D4]" />
            <span className="hidden sm:inline">git:</span>
            <span>GH</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8] hover:text-[#06B6D4] px-2 py-1 rounded bg-[#0E1420] border border-[#1F293D] transition-colors"
          >
            <Linkedin className="w-3 h-3 text-[#06B6D4]" />
            <span className="hidden sm:inline">net:</span>
            <span>LI</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 font-mono text-[11px] font-medium text-[#090D16] bg-[#10B981] hover:bg-[#059669] px-2.5 py-1 rounded transition-colors shadow-sm cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            <span>RESUME.pdf</span>
          </button>

          {/* User Avatar with status */}
          <div className="relative w-8 h-8 rounded-full border border-[#1F293D] overflow-hidden bg-[#151E2E] flex items-center justify-center">
            {isAnshu ? (
              <div className="w-full h-full bg-gradient-to-tr from-[#10B981]/40 to-[#06B6D4]/40 flex items-center justify-center font-bold text-xs text-[#F1F5F9]">
                AK
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-[#06B6D4]/40 to-[#10B981]/40 flex items-center justify-center font-bold text-xs text-[#F1F5F9]">
                SA
              </div>
            )}
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10B981] ring-2 ring-[#090D16]"></span>
          </div>

          {/* Mobile Profile Switcher button */}
          <button
            onClick={onProfileModeToggle}
            className="xl:hidden p-1.5 rounded bg-[#0E1420] border border-[#1F293D] text-[#06B6D4] hover:bg-[#151E2E]"
            title="Switch profile view"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Nav sub-row */}
      <div className="lg:hidden flex items-center justify-between gap-1 mt-2.5 pt-2 border-t border-[#1F293D]/60 overflow-x-auto text-[11px] font-mono">
        <button
          onClick={() => onTabChange('overview')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'overview' ? 'text-[#10B981] bg-[#0E1420]' : 'text-[#94A3B8]'}`}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange('projects')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'projects' ? 'text-[#10B981] bg-[#0E1420]' : 'text-[#94A3B8]'}`}
        >
          {isAnshu ? 'Platforms' : 'Projects'}
        </button>
        <button
          onClick={() => onTabChange('stack')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'stack' ? 'text-[#10B981] bg-[#0E1420]' : 'text-[#94A3B8]'}`}
        >
          Stack
        </button>
        <button
          onClick={() => onTabChange('experience')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'experience' ? 'text-[#10B981] bg-[#0E1420]' : 'text-[#94A3B8]'}`}
        >
          Tenure
        </button>
        <button
          onClick={() => onTabChange('terminal')}
          className={`px-2 py-1 rounded whitespace-nowrap ${currentTab === 'terminal' ? 'text-[#10B981] bg-[#0E1420]' : 'text-[#94A3B8]'}`}
        >
          Terminal
        </button>
      </div>
    </header>
  );
};
