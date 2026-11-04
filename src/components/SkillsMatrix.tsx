import React, { useState } from 'react';
import { Cpu, Globe, Database, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="stack" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-2">
              03 / Technical Specifications
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5F5EE] tracking-tight">
              Spectral Stack & Tooling
            </h2>
          </div>
          <span className="text-xs font-mono-data text-[#66665E] uppercase tracking-wider hidden md:inline">
            [ SENSOR LAB & PRODUCTION ML SUITE ]
          </span>
        </div>

        {/* Category Selector Tabs: Understated Monochromatic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === idx;
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`p-5 text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#EAEAE2] text-black'
                    : 'bg-[#0A0A0D] text-[#A0A096] hover:bg-[#121216] hover:text-white'
                }`}
              >
                <div className="text-[11px] font-mono-data uppercase tracking-widest mb-1 opacity-70">
                  {indexStr} / SPECS
                </div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-tight">
                  {cat.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Spec Sheet */}
        <div className="border border-white/[0.08] bg-[#0A0A0D] p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono-data text-[#888880] uppercase tracking-wider block mb-1">
                Category Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#F2F2EC] tracking-tight">
                {SKILL_CATEGORIES[activeCategory].category}
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9E96] font-light mt-2 max-w-2xl">
                {SKILL_CATEGORIES[activeCategory].description}
              </p>
            </div>
            <span className="text-xs font-mono-data text-[#EAEAE2] uppercase tracking-widest border border-white/[0.1] px-3 py-1 self-start sm:self-auto">
              {SKILL_CATEGORIES[activeCategory].skills.length} Certified Frameworks
            </span>
          </div>

          {/* Grid of Tools as Editorial Spec Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
              <div key={sIdx} className="border-b border-white/[0.05] pb-4">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="text-base font-bold uppercase text-[#EAEAE2] tracking-tight">
                    {skill.name}
                  </span>
                  <span className="font-mono-data text-xs text-[#888880] uppercase tracking-wider">
                    {skill.level}% Benchmarked
                  </span>
                </div>
                {/* Clean, austere hairline meter */}
                <div className="w-full bg-white/[0.06] h-[2px]">
                  <div
                    className="bg-[#EAEAE2] h-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
