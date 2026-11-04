import React from 'react';
import { Linkedin, ArrowUpRight, Award } from 'lucide-react';
import { EXPERIENCES, ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-2">
              02 / Work History & Field Dossier
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5F5EE] tracking-tight">
              Work Experience
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-data uppercase tracking-wider text-[#D4D4CA] hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] transition-colors self-start md:self-auto"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#888880]" />
            <span>Verify on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Dossier */}
          <div className="lg:col-span-8 divide-y divide-white/[0.08]">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="py-10 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#F2F2EC] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-mono-data text-[#888880] uppercase tracking-wider mt-1">
                      <span className="text-[#D4D4CA]">{exp.company}</span>
                      <span className="mx-2 text-[#44443E]">/</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono-data text-[#888880] uppercase tracking-widest shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#9E9E96] font-light leading-relaxed mb-6">
                  {exp.summary}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.05]">
                  {exp.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#C4C4BC] font-light">
                      <span className="font-mono-data text-[#66665E] text-xs mt-0.5">—</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-data text-[#777770] mt-6">
                  <span className="text-[#55554E]">Technologies:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span className="text-[#A0A096]">{tech}</span>
                      {tIdx < exp.technologies.length - 1 && (
                        <span className="text-[#44443E]">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Honors & Accreditations Column */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10 pt-10 lg:pt-0">
            <div className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-6 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#EAEAE2]" />
              <span>Honors & Accolades</span>
            </div>

            <div className="space-y-6">
              {ACHIEVEMENTS.map((item, aIdx) => (
                <div key={aIdx} className="p-5 border border-white/[0.08] bg-[#0E0E12]">
                  <div className="flex items-center justify-between text-[11px] font-mono-data text-[#777770] mb-2">
                    <span className="text-[#EAEAE2] font-semibold">{item.year}</span>
                    <span>{item.organization}</span>
                  </div>
                  <h4 className="text-sm font-bold uppercase text-[#F2F2EC] mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#999990] font-light leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-block text-[10px] font-mono-data uppercase tracking-wider text-[#888880] border border-white/[0.08] px-2 py-0.5">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
