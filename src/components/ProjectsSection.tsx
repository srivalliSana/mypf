import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, FolderGit2, Cpu, Database } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'remote-sensing' | 'ml-forecasting' | 'analytics'>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header: Film Archive Catalog Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-2 flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5 text-[#EAEAE2]" />
              <span>Catalog / Public Repositories · github.com/srivalliSana</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5F5EE] tracking-tight">
              Project Archive
            </h2>
          </div>

          {/* Minimalist Filter Switches */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-data uppercase tracking-wider">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                  : 'text-[#888880] border-white/[0.08] hover:border-white/[0.2] hover:text-white'
              }`}
            >
              All [{PROJECTS.length}]
            </button>
            <button
              onClick={() => setActiveCategory('remote-sensing')}
              className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeCategory === 'remote-sensing'
                  ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                  : 'text-[#888880] border-white/[0.08] hover:border-white/[0.2] hover:text-white'
              }`}
            >
              Spectral & Earth Observation
            </button>
            <button
              onClick={() => setActiveCategory('ml-forecasting')}
              className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeCategory === 'ml-forecasting'
                  ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                  : 'text-[#888880] border-white/[0.08] hover:border-white/[0.2] hover:text-white'
              }`}
            >
              Machine Learning & Time-Series
            </button>
            <button
              onClick={() => setActiveCategory('analytics')}
              className={`px-3.5 py-1.5 border transition-all cursor-pointer ${
                activeCategory === 'analytics'
                  ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                  : 'text-[#888880] border-white/[0.08] hover:border-white/[0.2] hover:text-white'
              }`}
            >
              BI & Analytics
            </button>
          </div>
        </div>

        {/* Editorial Project Ledger List */}
        <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
          {filteredProjects.map((project, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                className="group py-10 transition-colors hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number + Category + Year */}
                  <div className="lg:col-span-3 flex flex-col justify-between text-xs font-mono-data text-[#777770]">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-[#EAEAE2]">{indexNumber}</span>
                      <span className="text-[#44443E]">/</span>
                      <span className="uppercase text-[#A0A098] tracking-wider">{project.categoryLabel}</span>
                    </div>
                    <div className="mt-2 text-[#55554E] flex items-center gap-2">
                      <span>{project.year}</span>
                      <span>·</span>
                      <span className="truncate">{project.repoName}</span>
                    </div>
                  </div>

                  {/* Center Column: Title, Subtitle, Overview & Metrics */}
                  <div className="lg:col-span-6">
                    <h3
                      onClick={() => onSelectProject(project.id)}
                      className="text-2xl sm:text-3xl font-extrabold uppercase text-[#F5F5EE] group-hover:text-white transition-colors cursor-pointer tracking-tight mb-2"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono-data uppercase text-[#888880] tracking-wider mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#9E9E96] font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Spec Metrics Row */}
                    <div className="grid grid-cols-3 gap-4 py-3 border-y border-white/[0.06] text-xs font-mono-data">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="block text-[#EAEAE2] font-semibold">{m.value}</span>
                          <span className="text-[10px] text-[#66665E] uppercase">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack List */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-data text-[#777770] mt-4">
                      {project.techStack.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-[#A0A096]">{tech}</span>
                          {tIdx < project.techStack.length - 1 && (
                            <span className="text-[#44443E]">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Actions (Inspect Specs & Live Code) */}
                  <div className="lg:col-span-3 flex lg:flex-col items-stretch justify-start gap-2.5 pt-2">
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="w-full py-3 px-4 text-xs font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white transition-colors flex items-center justify-between font-bold cursor-pointer"
                    >
                      <span>{project.demoUrl ? 'Launch Live App' : 'Inspect Specs'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 text-xs font-mono-data uppercase tracking-wider text-[#A0A096] hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-colors flex items-center justify-between"
                    >
                      <span>Source Code</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    {project.datasetInfo && (
                      <div className="hidden lg:block text-[11px] font-mono-data text-[#55554E] pt-2 border-t border-white/[0.04]">
                        <span className="block text-[#777770]">Ground Truth Dataset:</span>
                        <span className="line-clamp-2">{project.datasetInfo}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
