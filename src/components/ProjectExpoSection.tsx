"use client";

interface ProjectExpoSectionProps {
  onExploreExpoClick: () => void;
}

export default function ProjectExpoSection({
  onExploreExpoClick,
}: ProjectExpoSectionProps) {
  return (
    <section id="expo" className="w-full bg-[#3E1C0D] text-[#FAF6F0] py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Floating accent doodle circles */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#B85D2A]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[#E8C5A8]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#E8C5A8] text-[#2B1408] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <span>04 • IDEAS INTO ACTION</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight">
              Project Expo 2026:
              <br />
              <span className="text-[#E8C5A8]">Showcase What You Create.</span>
            </h2>

            <p className="text-[#FAF6F0]/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              Have a project you&apos;re passionate about? SYNORA 2026 provides a premier platform for students to showcase their innovative projects, share their ideas, and connect with a community that values creativity and technical excellence.
            </p>

            <p className="text-[#FAF6F0]/75 text-sm sm:text-base leading-relaxed">
              Bring your ideas to the forefront, exchange perspectives, and let your work inspire new possibilities. Gain feedback from expert judges and take your hardware or software solutions to the next level.
            </p>

            {/* Main Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreExpoClick}
                className="bg-[#E8C5A8] text-[#2B1408] hover:bg-[#DDB896] font-heading font-black px-8 py-4 rounded-full text-sm sm:text-base tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#2B1408] inline-flex items-center gap-3"
              >
                <span>[ EXPLORE PROJECT EXPO ]</span>
                <svg className="w-5 h-5 text-[#2B1408]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <span className="text-xs text-[#FAF6F0]/70 font-semibold">
                Open to all Engineering & Tech Students
              </span>
            </div>
          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF6F0] text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative border-4 border-[#2B1408] transform rotate-1 hover:rotate-0 transition-transform duration-300">

              {/* Top Banner Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DACB]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#B85D2A]" />
                  <span className="font-heading font-extrabold text-sm uppercase tracking-tight text-slate-900">
                    Expo Highlights
                  </span>
                </div>
                <span className="bg-[#E8C5A8] text-[#2B1408] text-[10px] font-black px-2.5 py-0.5 rounded-full border border-[#2B1408]/20">
                  AWARDS & RECOGNITION
                </span>
              </div>

              {/* Expo Feature Points */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#B85D2A]/15 text-[#B85D2A] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      Live Project Demonstrations
                    </h4>
                    <p className="text-xs text-[#5A453A] mt-0.5">
                      Dedicated display booths for hardware, IoT, AI/ML, and software innovations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#B85D2A]/15 text-[#B85D2A] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      Mentorship & Review
                    </h4>
                    <p className="text-xs text-[#5A453A] mt-0.5">
                      Direct evaluation and actionable critiques from IEEE ComSoc professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#B85D2A]/15 text-[#B85D2A] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      Collaborative Spotlight
                    </h4>
                    <p className="text-xs text-[#5A453A] mt-0.5">
                      Connect with investors, research mentors, and future co-founders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Speech Badge */}
              <div className="bg-[#F4ECE3] rounded-2xl p-4 flex items-center justify-between border border-[#E2D4C5]">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#7A6152]">
                    Host Location
                  </div>
                  <div className="text-xs font-black text-slate-900">
                    SJCET Palai, Kerala
                  </div>
                </div>
                <div className="bg-[#B85D2A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Submit Now
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}