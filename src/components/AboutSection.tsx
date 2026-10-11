"use client";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#0247FE]/10 text-[#0247FE] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
              <span>01 • ABOUT THE CONFERENCE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Where Technology Meets Leadership
            </h2>
          </div>
          <div className="bg-[#CCFF00] border border-black/15 text-black px-4 py-2 rounded-2xl font-bold text-xs md:text-sm inline-flex items-center gap-2 self-start md:self-auto shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
            STLC 2026 • Two-Day Residential
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base md:text-lg leading-relaxed">
            <p className="font-medium text-slate-900 text-lg md:text-xl leading-snug">
              The <strong className="text-[#0247FE]">IEEE ComSoc Student Tech Leadership Conference (STLC) 2026</strong> is a two-day residential conference bringing together students and young professionals passionate about technology, innovation, and leadership.
            </p>
            <p>
              Organized by the <strong className="text-slate-900">IEEE ComSoc Student Branch Chapter, SJCET</strong>, in association with the <strong className="text-slate-900">IEEE ComSoc Kerala Chapter</strong>, STLC 2026 offers a platform to explore emerging technologies, develop essential professional skills, and gain valuable industry insights.
            </p>
            <p>
              Through expert-led technical sessions, hands-on workshops, career guidance, leadership activities, and networking opportunities, the conference aims to empower participants to transform ideas into action and prepare for the challenges of an evolving technological landscape.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                #EmergingTech
              </span>
              <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                #LeadershipSkills
              </span>
              <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                #IndustryInsights
              </span>
              <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200">
                #IEEEComSoc
              </span>
            </div>
          </div>

          {/* Quick Metrics / Neo-Brutalist Visual Card */}
          <div className="lg:col-span-5 bg-[#0247FE] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
              <div>
                <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest font-black">
                  Conference Summary
                </span>
                <h3 className="font-heading font-black text-2xl md:text-3xl mt-1 tracking-tight">
                  Two Days That Redefine Your Growth
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-heading font-black text-[#CCFF00]">
                    2
                  </div>
                  <div className="text-xs text-white/80 font-semibold mt-1">
                    Days Residential
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-heading font-black text-[#CCFF00]">
                    7+
                  </div>
                  <div className="text-xs text-white/80 font-semibold mt-1">
                    Core Learning Tracks
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-heading font-black text-[#CCFF00]">
                    100+
                  </div>
                  <div className="text-xs text-white/80 font-semibold mt-1">
                    Projects In Spotlight
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-heading font-black text-[#CCFF00]">
                    250+
                  </div>
                  <div className="text-xs text-white/80 font-semibold mt-1">
                    Student & YP Leaders
                  </div>
                </div>
              </div>

              <div className="bg-white text-black p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">
                    Joint Initiative
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    SJCET SBC & Kerala Chapter
                  </div>
                </div>
                <div className="bg-[#CCFF00] text-black font-black text-xs px-2.5 py-1 rounded-md border border-black/10">
                  ComSoc
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}