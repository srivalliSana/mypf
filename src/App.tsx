import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { NeuralCanvas } from './components/NeuralCanvas';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { FloatingResumeBadge } from './components/FloatingResumeBadge';
import { Footer } from './components/Footer';
import { PROJECTS, Project } from './data/portfolioData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProjectId(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectedProject: Project | null = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#F4F4F0] relative selection:bg-white/20 selection:text-white">
      {/* Subtle Atmospheric Film Canvas */}
      <NeuralCanvas />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        <main className="flex-1">
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={(id) => setSelectedProjectId(id)}
          />

          <ProjectsSection
            onSelectProject={(id) => setSelectedProjectId(id)}
          />

          <ExperienceSection />

          <SkillsMatrix />

          <EducationCertifications />

          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Architectural CV Quick Trigger */}
      <FloatingResumeBadge
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Project Case Study & Live Deployed App Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Curriculum Vitae Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
