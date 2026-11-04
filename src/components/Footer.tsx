import React from 'react';
import { ArrowUp, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#070709] text-[#777770] text-xs font-mono-data">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-[#EAEAE2] uppercase tracking-wider">{PERSONAL_INFO.name}</span>
          <span aria-hidden="true" className="hidden sm:inline text-[#333330]">/</span>
          <span>Earth Observation & Machine Learning</span>
          <span aria-hidden="true" className="hidden sm:inline text-[#333330]">/</span>
          <span>© {currentYear}</span>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-wider">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#55554E]" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-[#55554E]" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 border border-white/[0.08] text-[#888880] hover:text-white hover:border-white/[0.2] transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
