"use client";

interface AboutSectionProps {
  onRegisterClick: () => void;
}

export default function AboutSection({ onRegisterClick }: AboutSectionProps) {
  return (
    <section id="about" className="w-full bg-[#FAF6F0] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#B85D2A]/10 text-[#B85D2A] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
              <span>01 • ABOUT SYNORA 2026</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              SYNORA 2026
            </h2>
          </div>
          <div className="bg-[#E8C5A8] border border-[#2B1408]/20 text-[#2B1408] px-4 py-2 rounded-2xl font-bold text-xs md:text-sm inline-flex items-center gap-2 self-start md:self-auto shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2B1408] animate-ping" />
            SYNORA 2026 • Two-Day Residential
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#5A453A] text-base md:text-lg leading-relaxed">
            <p className="font-medium text-slate-900 text-lg md:text-xl leading-snug">
              The <strong className="text-[#B85D2A]">SYNORA 2026</strong> (IEEE ComSoc Student Tech Leadership Conference — STLC) is a premier two-day residential conference bringing together students and young professionals passionate about technology, innovation, and leadership.
            </p>
            <p>
              Organized by the <strong className="text-slate-900">IEEE ComSoc Student Branch Chapter, SJCET</strong>, in association with the <strong className="text-slate-900">IEEE ComSoc Kerala Chapter</strong>, SYNORA 2026 offers a platform to explore emerging technologies, develop essential professional skills, and gain valuable industry insights.
            </p>
            <p>
              Through expert-led technical sessions, hands-on workshops, career guidance, leadership activities, and networking opportunities, the conference aims to empower participants to transform ideas into action and prepare for the challenges of an evolving technological landscape.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="bg-[#F0E4D7] text-[#4A3020] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E0D0C0]">
                #SYNORA2026
              </span>
              <span className="bg-[#F0E4D7] text-[#4A3020] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E0D0C0]">
                #EmergingTech
              </span>
              <span className="bg-[#F0E4D7] text-[#4A3020] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E0D0C0]">
                #LeadershipSkills
              </span>
              <span className="bg-[#F0E4D7] text-[#4A3020] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E0D0C0]">
                #IndustryInsights
              </span>
              <span className="bg-[#F0E4D7] text-[#4A3020] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E0D0C0]">
                #IEEEComSoc
              </span>
            </div>
          </div>

          {/* Registration Fee Card */}
          <div className="lg:col-span-5 bg-[#3E1C0D] text-[#FAF6F0] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl border border-[#B85D2A]/30">
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div>
                <span className="text-[#E8C5A8] font-mono text-xs uppercase tracking-widest font-black">
                  Registration Fee
                </span>
                <h3 className="font-heading font-black text-2xl md:text-3xl mt-1 tracking-tight text-[#FAF6F0]">
                  Secure Your Spot at SYNORA 2026
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#FAF6F0]/70 font-semibold uppercase tracking-wide">Non IEEE Member</div>
                  </div>
                  <div className="text-2xl font-heading font-black text-[#E8C5A8]">₹499</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#FAF6F0]/70 font-semibold uppercase tracking-wide">IEEE Member</div>
                  </div>
                  <div className="text-2xl font-heading font-black text-[#E8C5A8]">₹399</div>
                </div>

                <div className="bg-[#E8C5A8]/20 backdrop-blur-md rounded-2xl p-4 border border-[#E8C5A8]/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#E8C5A8] font-bold uppercase tracking-wide">IEEE ComSoc Member</div>
                    <div className="text-[10px] text-[#E8C5A8]/70 font-medium mt-0.5">Best Value</div>
                  </div>
                  <div className="text-2xl font-heading font-black text-[#E8C5A8]">₹299</div>
                </div>
              </div>

              <button
                onClick={onRegisterClick}
                className="w-full bg-[#E8C5A8] text-[#2B1408] font-black text-sm md:text-base py-4 rounded-2xl border border-[#2B1408]/20 shadow-lg hover:bg-[#FAF6F0] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-widest"
              >
                Register Now →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}