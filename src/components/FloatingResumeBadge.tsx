import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingResumeBadgeProps {
  onOpenResume: () => void;
}

export const FloatingResumeBadge: React.FC<FloatingResumeBadgeProps> = ({ onOpenResume }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <button
        onClick={onOpenResume}
        className="flex items-center gap-2 px-3.5 py-2 bg-[#0A0A0D] border border-white/20 text-[#EAEAE2] hover:text-white hover:border-white/40 shadow-2xl transition-all active:scale-95 cursor-pointer text-xs font-mono-data uppercase tracking-wider"
      >
        <FileText className="w-3.5 h-3.5 text-[#888880]" />
        <span>Curriculum Vitae</span>
        <ArrowUpRight className="w-3 h-3 text-[#66665E]" />
      </button>

      <a
        href={PERSONAL_INFO.resumeDownloadUrl}
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-[#0A0A0D] border border-white/20 text-[#888880] hover:text-white hover:border-white/40 shadow-2xl transition-all text-xs font-mono-data uppercase"
        title="Direct PDF Download"
      >
        PDF
      </a>
    </div>
  );
};
