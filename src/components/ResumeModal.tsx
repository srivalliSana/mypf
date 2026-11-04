import React, { useState } from 'react';
import { X, Download, ExternalLink, Mail, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#09090C] border border-white/[0.12] my-8 overflow-hidden text-[#EAEAE2] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0D0D11]">
          <div className="text-xs font-mono-data text-[#888880] uppercase tracking-widest font-semibold">
            CURRICULUM VITAE // SRIVALLI SANA
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeDownloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-data uppercase tracking-wider text-[#A0A096] hover:text-white bg-white/[0.04] border border-white/[0.08] transition-colors"
            >
              <span>Drive Link</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#888880] hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 bg-[#070709] space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6">
            <h1 className="text-3xl sm:text-4xl font-black uppercase text-[#F5F5EE] tracking-tight mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs font-mono-data uppercase tracking-wider text-[#A0A096] mb-3">
              {PERSONAL_INFO.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono-data text-[#888880]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#55554E]" />
                {PERSONAL_INFO.location}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-[#C4C4BC] hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#888880]" />
                <span>{PERSONAL_INFO.email}</span>
                {copied && <span className="text-[10px] text-white">Copied!</span>}
              </button>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-3">
              Executive Technical Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#C4C4BC] font-light leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Core Projects */}
          <div>
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-4">
              Featured Research & Engineering Works
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="border-b border-white/[0.06] pb-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-bold uppercase text-[#EAEAE2]">{proj.title}</span>
                    <span className="text-xs font-mono-data text-[#777770]">{proj.year}</span>
                  </div>
                  <div className="text-xs font-mono-data text-[#888880] mb-2">{proj.subtitle}</div>
                  <div className="text-xs text-[#9E9E96] font-light leading-relaxed mb-2">
                    {proj.description}
                  </div>
                  <div className="text-[11px] font-mono-data text-[#777770]">
                    Tech: {proj.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-4">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="border-b border-white/[0.06] pb-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-bold uppercase text-[#EAEAE2]">{exp.role}</span>
                    <span className="text-xs font-mono-data text-[#777770]">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono-data text-[#888880] mb-2">
                    {exp.company} · {exp.location}
                  </div>
                  <div className="space-y-1.5 text-xs text-[#9E9E96] font-light">
                    {exp.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <span className="font-mono-data text-[#55554E]">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-4">
              Academic Education
            </h3>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold uppercase text-[#EAEAE2]">{edu.degree} — {edu.field}</span>
                    <span className="text-xs font-mono-data text-[#777770]">{edu.period}</span>
                  </div>
                  <div className="text-xs font-mono-data text-[#888880]">
                    {edu.institution} · {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
