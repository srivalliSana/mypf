import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  Layers,
  Database,
  Maximize2,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'overview' | 'repo'>('overview');
  const [copiedClone, setCopiedClone] = useState(false);

  useEffect(() => {
    if (project?.demoUrl) {
      setActiveTab('demo');
    } else {
      setActiveTab('overview');
    }
  }, [project]);

  if (!project) return null;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(`git clone ${project.githubUrl}.git`);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#09090C] border border-white/[0.12] my-6 overflow-hidden text-[#EAEAE2] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0D0D11]">
          <div className="flex items-center gap-3 text-xs font-mono-data text-[#888880] uppercase tracking-wider">
            <span className="text-white font-bold">{project.categoryLabel}</span>
            <span className="text-[#44443E]">/</span>
            <span>REPO: {project.repoName}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white font-bold transition-colors"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-[#888880] hover:text-white transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#888880] hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Header Banner */}
        <div className="px-6 md:px-8 pt-8 pb-5 border-b border-white/[0.08] bg-[#09090C]">
          <div className="text-xs font-mono-data uppercase tracking-widest text-[#777770] mb-2">
            RESEARCH SPECIFICATION · {project.year}
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-[#F5F5EE] tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono-data uppercase tracking-wider text-[#888880] max-w-4xl">
            {project.subtitle}
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {project.demoUrl && (
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono-data uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeTab === 'demo'
                    ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                    : 'text-[#888880] border-white/[0.08] hover:text-white'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Live Deployed Web Application</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono-data uppercase tracking-wider transition-colors cursor-pointer border ${
                activeTab === 'overview'
                  ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                  : 'text-[#888880] border-white/[0.08] hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Architecture & Methodology</span>
            </button>

            <button
              onClick={() => setActiveTab('repo')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono-data uppercase tracking-wider transition-colors cursor-pointer border ${
                activeTab === 'repo'
                  ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                  : 'text-[#888880] border-white/[0.08] hover:text-white'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </button>
          </div>
        </div>

        {/* Tab Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-[#070709]">
          {/* Tab 1: Real Live Deployed Application */}
          {activeTab === 'demo' && project.demoUrl && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 border border-white/[0.08] bg-[#0E0E12] text-xs font-mono-data">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAEAE2]" />
                  <span className="text-[#888880]">Live Endpoint:</span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#EAEAE2] hover:underline truncate max-w-xs sm:max-w-md"
                  >
                    {project.demoUrl}
                  </a>
                </div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 text-black bg-[#EAEAE2] hover:bg-white font-bold transition-colors flex items-center justify-center gap-1.5 shrink-0 uppercase tracking-wider"
                >
                  <span>Launch in New Tab</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Live Web Application Frame */}
              <div className="w-full h-[540px] border border-white/[0.1] bg-black relative">
                <iframe
                  src={project.demoUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          )}

          {/* Tab 2: Architecture, Dataset, & Engineering Methodology */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* High-level Overview */}
              <div>
                <h4 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-2">
                  Overview & Problem Formulation
                </h4>
                <p className="text-sm text-[#C8C8C0] font-light leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-white/[0.08] bg-[#0B0B0E]"
                  >
                    <div className="text-2xl font-bold font-mono-data text-[#F5F5EE] mb-0.5">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono-data uppercase text-[#A0A096] mb-1">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-[#66665E] font-light">{metric.detail}</div>
                  </div>
                ))}
              </div>

              {/* Dataset Information */}
              <div className="p-5 border border-white/[0.08] bg-[#0B0B0E]">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-[#EAEAE2]" />
                  <h4 className="text-xs font-mono-data uppercase tracking-wider text-white font-semibold">
                    Ground Truth Spectral Dataset
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#A0A096] font-light leading-relaxed">
                  {project.datasetInfo}
                </p>
              </div>

              {/* Phased Pipeline Workflow */}
              <div>
                <h4 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#EAEAE2]" />
                  <span>Analytical Pipeline Phases</span>
                </h4>

                <div className="space-y-2">
                  {project.methodologyPhases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 border border-white/[0.06] bg-[#0B0B0E] flex items-start gap-3"
                    >
                      <span className="font-mono-data text-xs text-[#66665E] mt-0.5">—</span>
                      <span className="text-xs sm:text-sm text-[#C4C4BC] font-light leading-relaxed">
                        {phase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h4 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-3">
                  Applied Software & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono-data text-[#D4D4CA] border border-white/[0.08] bg-[#0B0B0E]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: GitHub Codebase & Clone Instructions */}
          {activeTab === 'repo' && (
            <div className="space-y-6">
              <div className="p-6 border border-white/[0.08] bg-[#0B0B0E] flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold uppercase text-white mb-1 font-mono-data">
                      github.com/srivalliSana/{project.repoName}
                    </h4>
                    <p className="text-xs text-[#888880] font-mono-data">
                      Public repository maintained under user account @srivalliSana
                    </p>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white font-bold flex items-center gap-2 transition-colors shrink-0"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Git Clone Box */}
                <div className="mt-2">
                  <div className="text-[11px] font-mono-data uppercase tracking-wider text-[#777770] mb-1.5 flex items-center justify-between">
                    <span>Clone instruction:</span>
                    {copiedClone && (
                      <span className="text-white font-mono-data">Copied to clipboard!</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black border border-white/[0.1] font-mono-data text-xs text-[#D4D4CA] overflow-x-auto">
                    <code>git clone {project.githubUrl}.git</code>
                    <button
                      onClick={handleCopyClone}
                      className="ml-3 px-3 py-1 text-[11px] font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white cursor-pointer transition-colors shrink-0 font-bold"
                    >
                      {copiedClone ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Technologies List */}
              <div className="p-6 border border-white/[0.08] bg-[#0B0B0E]">
                <h4 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-3">
                  Repository Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-mono-data border border-white/[0.08] bg-black text-[#D4D4CA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
