import React from 'react';
import { ArrowUpRight, FileText, Github, Linkedin, Database, Layers, Radio, Globe } from 'lucide-react';
import { PERSONAL_INFO, PROOF_METRICS, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onSelectProject }) => {
  const multispectralProj = PROJECTS.find((p) => p.id === 'multispectral-crop-analysis') || PROJECTS[0];
  const hyperspectralProj = PROJECTS.find((p) => p.id === 'hyperspectral-image-analysis') || PROJECTS[1];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Film Credits Masthead Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3 border-y border-white/[0.08] text-[11px] font-mono-data uppercase tracking-widest text-[#8E8E86] mb-12">
          <div>
            <span className="text-[#55554E] block mb-0.5">01 / Title</span>
            <span className="text-[#EAEAE2] font-medium">Data Science & ML Engineer</span>
          </div>
          <div>
            <span className="text-[#55554E] block mb-0.5">02 / Specialization</span>
            <span className="text-[#EAEAE2] font-medium">Earth Observation & Spectral AI</span>
          </div>
          <div>
            <span className="text-[#55554E] block mb-0.5">03 / Institution</span>
            <span className="text-[#EAEAE2] font-medium">Centurion University · CSE</span>
          </div>
          <div>
            <span className="text-[#55554E] block mb-0.5">04 / Status</span>
            <span className="text-[#EAEAE2] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAEAE2]" />
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Monumental A24 Editorial Headline */}
        <div className="mb-14">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#F5F5EE] leading-[0.88] mb-8">
            SRIVALLI<br />
            SANA<span className="text-[#686860]">.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#D4D4CA] leading-snug tracking-tight">
                Engineering spectral machine learning pipelines, hyperspectral endmember classifiers, and on-device Earth observation systems.
              </p>
              <p className="text-sm sm:text-base text-[#8C8C84] mt-5 leading-relaxed max-w-2xl font-light">
                Bridging high-dimensional satellite imagery (ENVI, NDVI, SAVI, MNF, PPI, SAM) with production machine learning models and spatial GIS workflows. Author of public research repositories focused on agricultural stress detection and atmospheric monitoring.
              </p>
            </div>

            {/* Architectural Actions & Links */}
            <div className="lg:col-span-4 flex flex-col gap-3 pt-2">
              <a
                href="#projects"
                className="w-full py-3.5 px-5 text-xs font-mono-data uppercase tracking-wider text-black bg-[#F5F5EE] hover:bg-white transition-colors flex items-center justify-between font-bold"
              >
                <span>Examine Repositories ({PROJECTS.length})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onOpenResume}
                  className="py-3 px-3 text-xs font-mono-data uppercase tracking-wider text-[#DCDCD4] bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#888880]" />
                  <span>Resume PDF</span>
                </button>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 text-xs font-mono-data uppercase tracking-wider text-[#DCDCD4] bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-[#888880]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Research Dual-Dossier (Directly featuring the two requested GitHub repositories) */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="flex items-baseline justify-between mb-6">
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#888880] flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#EAEAE2]" />
              Primary Research Repositories · github.com/srivalliSana
            </span>
            <span className="text-[11px] font-mono-data text-[#55554E] uppercase hidden sm:inline">
              [ SPECTRAL-BANDWIDTH: 400nm - 1000nm ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Multispectral-Crop-Analysis */}
            <div
              onClick={() => onSelectProject(multispectralProj.id)}
              className="group border border-white/[0.1] hover:border-white/[0.3] bg-[#0E0E12] p-7 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data text-[#777770] mb-4">
                  <span className="text-[#C8C8C0] uppercase tracking-wider">
                    01 / {multispectralProj.repoName}
                  </span>
                  <span>{multispectralProj.year}</span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-[#F2F2EC] tracking-tight group-hover:text-white mb-2">
                  {multispectralProj.title}
                </h3>

                <p className="text-xs font-mono-data text-[#888880] uppercase mb-4">
                  {multispectralProj.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#A0A098] leading-relaxed mb-6 font-light">
                  {multispectralProj.description}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06] text-xs font-mono-data text-[#888880] mb-4">
                  <div>
                    <span className="block text-[#EAEAE2] font-bold">4 Bands</span>
                    <span className="text-[10px] text-[#666660]">RGB + NIR</span>
                  </div>
                  <div>
                    <span className="block text-[#EAEAE2] font-bold">NDVI & SAVI</span>
                    <span className="text-[10px] text-[#666660]">Indices</span>
                  </div>
                  <div>
                    <span className="block text-[#EAEAE2] font-bold">Paddy LK</span>
                    <span className="text-[10px] text-[#666660]">Dataset</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono-data uppercase tracking-wider text-[#A0A098] group-hover:text-white pt-1">
                  <span>Inspect Methodology & Data</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            {/* Project 2: Hyperspectral-Image-Analysis */}
            <div
              onClick={() => onSelectProject(hyperspectralProj.id)}
              className="group border border-white/[0.1] hover:border-white/[0.3] bg-[#0E0E12] p-7 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-data text-[#777770] mb-4">
                  <span className="text-[#C8C8C0] uppercase tracking-wider">
                    02 / {hyperspectralProj.repoName}
                  </span>
                  <span>{hyperspectralProj.year}</span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-[#F2F2EC] tracking-tight group-hover:text-white mb-2">
                  {hyperspectralProj.title}
                </h3>

                <p className="text-xs font-mono-data text-[#888880] uppercase mb-4">
                  {hyperspectralProj.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#A0A098] leading-relaxed mb-6 font-light">
                  {hyperspectralProj.description}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.06] text-xs font-mono-data text-[#888880] mb-4">
                  <div>
                    <span className="block text-[#EAEAE2] font-bold">MNF + PPI</span>
                    <span className="text-[10px] text-[#666660]">Purity Index</span>
                  </div>
                  <div>
                    <span className="block text-[#EAEAE2] font-bold">SAM Angle</span>
                    <span className="text-[10px] text-[#666660]">Supervised</span>
                  </div>
                  <div>
                    <span className="block text-[#EAEAE2] font-bold">Uni Tübingen</span>
                    <span className="text-[10px] text-[#666660]">HSF Fooding</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono-data uppercase tracking-wider text-[#A0A098] group-hover:text-white pt-1">
                  <span>Inspect Spectral Pipeline</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Proof Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROOF_METRICS.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono-data text-[#F5F5EE] tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs font-mono-data uppercase tracking-wider text-[#A0A096] mt-1">
                {metric.label}
              </span>
              <span className="text-[11px] text-[#66665E] font-light mt-0.5">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
