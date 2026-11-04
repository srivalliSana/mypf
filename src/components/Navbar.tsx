import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070709]/95 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent border-b border-white/[0.04] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
          {/* Brand Wordmark with Film Editorial Monogram */}
          <a
            href="#home"
            className="group flex items-baseline gap-3 text-white tracking-tight shrink-0"
          >
            <span className="font-extrabold text-base md:text-lg tracking-wider uppercase font-display">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-[11px] font-mono-data text-[#888880] uppercase tracking-widest">
              / Earth Observation & ML
            </span>
          </a>

          {/* Editorial Index Links with subtle numbering */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono-data tracking-wider uppercase text-[#A0A098]">
            <a
              href="#projects"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#555550]">01</span>
              <span>Archives & Repos</span>
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#555550]">02</span>
              <span>Dossier</span>
            </a>
            <a
              href="#stack"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#555550]">03</span>
              <span>Spectral Stack</span>
            </a>
            <a
              href="#education"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#555550]">04</span>
              <span>Credentials</span>
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#555550]">05</span>
              <span>Contact</span>
            </a>
          </nav>

          {/* Right Action: Understated Architectural Resume CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono-data uppercase tracking-wider text-[#EAEAE2] hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/[0.25] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#A0A098]" />
              <span>Curriculum Vitae</span>
              <ArrowUpRight className="w-3 h-3 text-[#777770]" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#A0A098] hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-[#070709]/98 backdrop-blur-xl pt-24 px-8 flex flex-col justify-between pb-12 border-b border-white/[0.08]">
          <nav className="flex flex-col gap-6 text-sm font-mono-data uppercase tracking-widest text-[#C8C8C0]">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] hover:text-white"
            >
              <span>01 / Archives & Repos</span>
              <ArrowUpRight className="w-4 h-4 text-[#666660]" />
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] hover:text-white"
            >
              <span>02 / Work Dossier</span>
              <ArrowUpRight className="w-4 h-4 text-[#666660]" />
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] hover:text-white"
            >
              <span>03 / Spectral Stack</span>
              <ArrowUpRight className="w-4 h-4 text-[#666660]" />
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] hover:text-white"
            >
              <span>04 / Credentials</span>
              <ArrowUpRight className="w-4 h-4 text-[#666660]" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-white/[0.06] hover:text-white"
            >
              <span>05 / Contact</span>
              <ArrowUpRight className="w-4 h-4 text-[#666660]" />
            </a>
          </nav>

          <div className="pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 text-xs font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white font-bold transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Curriculum Vitae</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
