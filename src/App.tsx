/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, ProfileMode, CaseStudy, PipelineStage } from './types';
import { Header } from './components/Header';
import { TelemetryBar } from './components/TelemetryBar';
import { OverviewView } from './components/OverviewView';
import { ProjectsView } from './components/ProjectsView';
import { StackView } from './components/StackView';
import { ExperienceView } from './components/ExperienceView';
import { TerminalContactView } from './components/TerminalContactView';
import { ManifestModal } from './components/ManifestModal';
import { PipelineLogModal } from './components/PipelineLogModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('overview');
  // Default to 'anshu' which matches the user's name & email, with 1-click toggle to 'sysarch'
  const [profileMode, setProfileMode] = useState<ProfileMode>('anshu');

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedPipelineStage, setSelectedPipelineStage] = useState<PipelineStage | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleProfileModeToggle = () => {
    setProfileMode((prev) => (prev === 'anshu' ? 'sysarch' : 'anshu'));
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#10B981]/20 selection:text-[#10B981] bg-blueprint-subtle">
      
      {/* Top 3-Zone Header */}
      <Header
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        profileMode={profileMode}
        onProfileModeToggle={handleProfileModeToggle}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Live Operational Telemetry Bar */}
      <TelemetryBar profileMode={profileMode} />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {currentTab === 'overview' && (
          <OverviewView
            profileMode={profileMode}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectPipelineStage={(stage) => setSelectedPipelineStage(stage)}
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsView
            profileMode={profileMode}
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentTab === 'stack' && (
          <StackView
            profileMode={profileMode}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentTab === 'experience' && (
          <ExperienceView
            profileMode={profileMode}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentTab === 'terminal' && (
          <TerminalContactView
            profileMode={profileMode}
            onOpenContactModal={() => setIsContactOpen(true)}
          />
        )}
      </main>

      {/* Persistent System Footer */}
      <Footer profileMode={profileMode} />

      {/* Modals & Slide-overs */}
      <ManifestModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <PipelineLogModal
        stage={selectedPipelineStage}
        onClose={() => setSelectedPipelineStage(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profileMode={profileMode}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        profileMode={profileMode}
      />

    </div>
  );
}
