import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-2">
              04 / Academic Credentials & Verified Certifications
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5F5EE] tracking-tight">
              Education & Accreditations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Ledger */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] pb-4">
              Academic Degrees
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="py-8 first:pt-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <span className="text-xs font-mono-data uppercase tracking-wider text-[#EAEAE2] font-semibold">
                    {edu.degree}
                  </span>
                  <span className="text-xs font-mono-data text-[#888880]">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-xl font-bold uppercase text-[#F2F2EC] tracking-tight mb-2">
                  {edu.field}
                </h4>

                <div className="text-xs font-mono-data text-[#888880] uppercase tracking-wider mb-4">
                  <span className="text-[#C8C8C0]">{edu.institution}</span>
                  <span className="mx-2 text-[#44443E]">/</span>
                  <span>{edu.location}</span>
                  <span className="mx-2 text-[#44443E]">/</span>
                  <span className="text-[#EAEAE2]">{edu.status}</span>
                </div>

                {edu.highlights.length > 0 && (
                  <div className="pt-3 border-t border-white/[0.05] space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#9E9E96] font-light">
                        <span className="font-mono-data text-[#55554E]">—</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications Ledger */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10 pt-10 lg:pt-0">
            <h3 className="text-xs font-mono-data uppercase tracking-widest text-[#888880] pb-4">
              Professional Credentials
            </h3>

            <div className="divide-y divide-white/[0.08]">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="py-6 first:pt-4">
                  <div className="flex items-center justify-between text-xs font-mono-data text-[#888880] mb-2">
                    <span className="text-[#EAEAE2] font-semibold uppercase">{cert.issuer}</span>
                    <span>{cert.period}</span>
                  </div>

                  <h4 className="text-base font-bold uppercase text-[#F2F2EC] tracking-tight mb-3">
                    {cert.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-data text-[#888880]">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="text-[#A0A096]">{skill}</span>
                        {sIdx < cert.skillsCovered.length - 1 && (
                          <span className="text-[#44443E]">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
