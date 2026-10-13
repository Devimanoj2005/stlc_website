"use client";

import { useState } from "react";

interface WhySTLCSectionProps {
  onRegisterClick: () => void;
}

export default function WhySTLCSection({ onRegisterClick }: WhySTLCSectionProps) {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const reasons = [
    {
      title: "Learn from Experts",
      description:
        "Direct access to recognized industry veterans, IEEE ComSoc senior researchers, and distinguished keynote speakers.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth={2} />
          <circle cx="12" cy="12" r="5" strokeWidth={2} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 12v3M3 12h3m12 0h3" />
        </svg>
      ),
      color: "border-l-4 border-l-[#B85D2A]",
      bg: "bg-[#B85D2A]/10 text-[#B85D2A]",
    },
    {
      title: "Build Practical Skills",
      description:
        "Hands-on technical workshops that move beyond textbook theory to concrete, deployable skills in communications tech.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "border-l-4 border-l-[#E8C5A8]",
      bg: "bg-[#E8C5A8]/30 text-[#8C4A20]",
    },
    {
      title: "Grow as a Leader",
      description:
        "Immersive leadership activities and team challenges that nurture executive decision-making and cross-disciplinary empathy.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14" />
        </svg>
      ),
      color: "border-l-4 border-l-[#2B1408]",
      bg: "bg-[#2B1408]/10 text-[#2B1408]",
    },
    {
      title: "Discover Career Opportunities",
      description:
        "Gain authentic visibility into job market dynamics, industry expectations, and transition blueprints for young engineers.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-3-3m0 0l4.5-4.5M9 12l-4.5 4.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5c-3.5-1-8 1.5-10.5 4l6.5 6.5c2.5-2.5 5-7 4-10.5z" />
        </svg>
      ),
      color: "border-l-4 border-l-[#B85D2A]",
      bg: "bg-[#B85D2A]/10 text-[#B85D2A]",
    },
    {
      title: "Connect and Collaborate",
      description:
        "Forge enduring connections with IEEE members, ambitious student peers, and alumni networks across Kerala and beyond.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l2 2a1 1 0 001.4 0l4.6-4.6a1 1 0 000-1.4l-2-2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 11l3.5 3.5a1 1 0 010 1.4l-2.1 2.1a1 1 0 01-1.4 0L15 15" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9.5L14.5 7a1 1 0 00-1.4 0l-7.6 7.6a1 1 0 000 1.4l2.1 2.1a1 1 0 001.4 0L12 15" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18l-3-3a1 1 0 010-1.4l2.5-2.5" />
        </svg>
      ),
      color: "border-l-4 border-l-[#E8C5A8]",
      bg: "bg-[#E8C5A8]/30 text-[#8C4A20]",
    },
    {
      title: "Showcase Innovation",
      description:
        "A platform to spotlight your hardware and software prototypes in front of evaluators, mentors, and prospective partners.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "border-l-4 border-l-[#2B1408]",
      bg: "bg-[#2B1408]/10 text-[#2B1408]",
    },
  ];

  return (
    <section id="why-stlc" className="w-full bg-[#F5ECE1] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-[#E2D4C5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-[#B85D2A]/10 text-[#B85D2A] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <span>05 • YOUR NEXT STEP STARTS HERE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase leading-tight">
            Why SYNORA 2026?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A453A] font-medium leading-relaxed">
            SYNORA 2026 brings together the essential elements of professional growth in one immersive, two-day residential experience.
          </p>
        </div>

        {/* Grid Cards (4 on mobile by default, 6 on md/lg, expandable on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white rounded-3xl p-5 sm:p-6 md:p-7 border border-[#E2D4C5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.color} flex-col justify-between ${index >= 4 && !showAllMobile ? "hidden md:flex" : "flex"
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-black text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5A453A] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#B85D2A] uppercase tracking-wider">
                  STLC Pillar
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E8C5A8] border border-[#2B1408]/20" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF6F0] text-[#2B1408] border border-[#2B1408]/20 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm active:scale-95 transition-all"
          >
            <span>{showAllMobile ? "Show Less" : "View All 6 Reasons (+2)"}</span>
            <svg
              className={`w-3.5 h-3.5 text-[#B85D2A] transition-transform duration-200 ${showAllMobile ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 bg-[#FAF6F0] rounded-3xl p-8 border-2 border-[#2B1408] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
              Ready to take the next step?
            </h3>
            <p className="text-sm text-[#5A453A] mt-1">
              Seats are limited for the residential summit. Secure your spot now.
            </p>
          </div>
          <button
            onClick={onRegisterClick}
            className="bg-[#B85D2A] hover:bg-[#96471B] text-white font-heading font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all duration-200 shrink-0"
          >
            Claim Your Spot →
          </button>
        </div>

      </div>
    </section>
  );
}