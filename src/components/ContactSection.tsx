import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Data Science / ML Engineering');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentToast, setSentToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topics = [
    'Data Science / ML Engineering',
    'Earth Observation / Remote Sensing',
    'Computer Vision Pipeline',
    'Technical Collaboration',
  ];

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry] ${selectedTopic} - ${senderName || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Srivalli,\n\n${message || 'I reviewed your spectral AI & ML portfolio and would like to connect.'}\n\nRegards,\n${senderName}\n${senderEmail}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentToast(true);
    setTimeout(() => setSentToast(false), 4000);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="text-xs font-mono-data uppercase tracking-widest text-[#888880] mb-2">
              05 / Communication Channel
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#F5F5EE] tracking-tight mb-4 [text-wrap:balance]">
              Direct Inquiries & Collaboration.
            </h2>
            <p className="text-sm text-[#9E9E96] font-light leading-relaxed mb-8">
              Open to machine learning engineering, Earth observation research, and data science positions. Whether considering full-time technical roles or research collaborations, my correspondence channel is open.
            </p>

            {/* Direct Email Address Block */}
            <div className="w-full p-6 border border-white/[0.08] bg-[#0A0A0D] mb-6">
              <span className="text-[11px] font-mono-data uppercase tracking-wider text-[#777770] block mb-2">
                Electronic Mail
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-bold font-mono-data text-[#F5F5EE] hover:underline truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-mono-data uppercase tracking-wider bg-white/[0.05] hover:bg-white/[0.1] text-[#EAEAE2] border border-white/[0.1] transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Meta details */}
            <div className="space-y-2 text-xs font-mono-data text-[#888880] mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#55554E]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAEAE2]" />
                <span>Active Status: Available for Immediate Interview</span>
              </div>
            </div>

            {/* Social Anchors */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/[0.1] bg-[#0A0A0D] hover:bg-white/[0.06] text-xs font-mono-data uppercase tracking-wider text-[#D4D4CA] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#888880]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#66665E]" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/[0.1] bg-[#0A0A0D] hover:bg-white/[0.06] text-xs font-mono-data uppercase tracking-wider text-[#D4D4CA] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#888880]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#66665E]" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Composer */}
          <div className="lg:col-span-7 w-full">
            <form
              onSubmit={handleSendDraft}
              className="p-8 border border-white/[0.08] bg-[#0A0A0D] flex flex-col gap-6"
            >
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#F2F2EC]">
                Dispatch Inquiry
              </h3>

              {/* Inquiry Topic Buttons */}
              <div>
                <label className="text-[11px] font-mono-data uppercase tracking-wider text-[#777770] mb-2 block">
                  Select Classification
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      className={`px-3 py-2 text-xs font-mono-data text-left transition-colors cursor-pointer border ${
                        selectedTopic === t
                          ? 'bg-[#EAEAE2] text-black border-[#EAEAE2] font-bold'
                          : 'bg-black/30 text-[#888880] border-white/[0.08] hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono-data uppercase tracking-wider text-[#777770] mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Lead Engineer"
                    className="w-full px-3.5 py-2.5 bg-black border border-white/[0.1] text-white text-xs placeholder:text-[#55554E] focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono-data uppercase tracking-wider text-[#777770] mb-1.5 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. lead@lab.com"
                    className="w-full px-3.5 py-2.5 bg-black border border-white/[0.1] text-white text-xs placeholder:text-[#55554E] focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] font-mono-data uppercase tracking-wider text-[#777770] mb-1.5 block">
                  Message Synopsis
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline requirements, dataset parameters, or role details..."
                  className="w-full px-3.5 py-2.5 bg-black border border-white/[0.1] text-white text-xs placeholder:text-[#55554E] focus:outline-none focus:border-white/40 resize-none font-mono-data"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 font-bold text-xs font-mono-data uppercase tracking-wider text-black bg-[#EAEAE2] hover:bg-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Compose Mail Client Transmission</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {sentToast && (
                <div className="p-3 border border-white/[0.15] bg-white/[0.04] text-xs font-mono-data text-[#EAEAE2] text-center">
                  Triggering client draft for transmission.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
