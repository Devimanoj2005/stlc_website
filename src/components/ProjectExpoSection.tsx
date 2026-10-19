"use client";

interface ProjectExpoSectionProps {
  onExploreExpoClick: () => void;
}

export default function ProjectExpoSection({
  onExploreExpoClick,
}: ProjectExpoSectionProps) {
  return (
    <section id="expo" className="w-full bg-[#2B1408] text-[#FAF6F0] py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Warm Ambient Glows */}
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#B85D2A]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-[#E8C5A8]/15 blur-3xl pointer-events-none" />

      {/* Tech corner accent borders */}
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#B85D2A]/30 rounded-tr-3xl pointer-events-none hidden lg:block" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#B85D2A]/30 rounded-bl-3xl pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#E8C5A8] text-[#2B1408] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <span>02 • IDEAS INTO ACTION</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.08]">
              PROJECT
              <br />
              EXPO 2026:
              <br />
              <span className="text-[#FAF6F0]">SHOWCASE</span>
              <br />
              <span className="text-[#FAF6F0]">WHAT YOU</span>
              <br />
              <span className="text-[#FAF6F0]">CREATE.</span>
            </h2>

            <p className="text-[#FAF6F0]/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
              Have a project you&apos;re passionate about? SYNORA 2026 provides a premier platform for students to showcase their innovative projects, share their ideas, and connect with a community that values creativity and technical excellence.
            </p>

            <p className="text-[#FAF6F0]/75 text-xs sm:text-sm leading-relaxed">
              Bring your ideas to the forefront, exchange perspectives, and let your work inspire new possibilities. Gain feedback from expert judges and take your hardware  to the next level.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreExpoClick}
                className="bg-[#E8C5A8] text-[#2B1408] hover:bg-[#DDB896] font-heading font-black px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#2B1408] inline-flex items-center gap-2.5"
              >
                <span>[ EXPLORE PROJECT EXPO ]</span>
                <span className="text-base leading-none">→</span>
              </button>

              <a
                href="https://drive.google.com/drive/home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A0A04] hover:bg-[#34180A] text-[#FAF6F0] font-heading font-black px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-lg border border-[#B85D2A] hover:border-[#E8C5A8] hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 text-[#E8C5A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>EXPO GUIDANCE</span>
                <span className="text-base leading-none">→</span>
              </a>
            </div>

            <p className="text-xs text-[#FAF6F0]/70 font-medium">
              Open to all Engineering &amp; Tech Students
            </p>
          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF6F0] text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl relative border-2 border-[#FAF6F0]/20">

              {/* Top Banner Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DACB]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#B85D2A]" />
                  <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-slate-900">
                    EXPO HIGHLIGHTS
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#4A2411] border border-[#B85D2A] text-[#FAF6F0] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                  <svg className="w-3.5 h-3.5 text-[#E8C5A8]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.055a6.002 6.002 0 014.9 5.344l.805.268a2 2 0 011.295 1.884V13a2 2 0 01-2 2h-.101a6.002 6.002 0 01-4.899 2.6V19h2a1 1 0 110 2H7a1 1 0 110-2h2v-1.4A6.002 6.002 0 014.101 15H4a2 2 0 01-2-2v-1.449a2 2 0 011.295-1.884l.805-.268A6.002 6.002 0 019 4.055V3a1 1 0 011-1z" />
                  </svg>
                  <span>AWARDS &amp; RECOGNITION</span>
                </div>
              </div>

              {/* Expo Feature Points with Colored Circular Icons */}
              <div className="py-4 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F6E3D4] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#B85D2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                      Live Project Demonstrations
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5A453A] mt-0.5 leading-relaxed">
                      Dedicated display booths for hardware, IoT, AI/ML, and software innovations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F6E3D4] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#B85D2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                      Mentorship &amp; Review
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5A453A] mt-0.5 leading-relaxed">
                      Direct evaluation and actionable critiques from IEEE ComSoc professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F6E3D4] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#B85D2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                      Collaborative Spotlight
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5A453A] mt-0.5 leading-relaxed">
                      Connect with investors, research mentors, and future co-founders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cash Prize & Recognition Section */}
              <div className="pt-3 border-t border-[#E8DACB]">
                <div className="flex items-center gap-2 mb-2.5">
                  <svg className="w-4 h-4 text-[#B85D2A]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.055a6.002 6.002 0 014.9 5.344l.805.268a2 2 0 011.295 1.884V13a2 2 0 01-2 2h-.101a6.002 6.002 0 01-4.899 2.6V19h2a1 1 0 110 2H7a1 1 0 110-2h2v-1.4A6.002 6.002 0 014.101 15H4a2 2 0 01-2-2v-1.449a2 2 0 011.295-1.884l.805-.268A6.002 6.002 0 019 4.055V3a1 1 0 011-1z" />
                  </svg>
                  <h4 className="font-heading font-black text-xs sm:text-sm uppercase tracking-tight text-slate-900">
                    CASH PRIZE &amp; RECOGNITION
                  </h4>
                </div>

                <div className="w-full text-xs rounded-xl overflow-hidden border border-[#E8DACB]">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-[#E8DACB] bg-[#F7EFE6]/60">
                        <th className="py-2 px-3 font-bold text-slate-700">Position</th>
                        <th className="py-2 px-3 font-bold text-slate-700">Cash Prize</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8DACB]">
                      <tr>
                        <td className="py-1.5 px-3 text-slate-800 font-medium">First Prize</td>
                        <td className="py-1.5 px-3 text-slate-800 font-bold font-mono">₹7,000/-</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3 text-slate-800 font-medium">Second Prize</td>
                        <td className="py-1.5 px-3 text-slate-800 font-bold font-mono">₹5,000/-</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-3 text-slate-800 font-medium">Third Prize</td>
                        <td className="py-1.5 px-3 text-slate-800 font-bold font-mono">₹3,000/-</td>
                      </tr>
                      <tr className="bg-[#F8DEC7] font-black text-slate-900">
                        <td className="py-2 px-3 font-bold">Total Prize Pool</td>
                        <td className="py-2 px-3 font-black font-mono">₹15,000/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Host Location + Submit Now Button */}
              <div className="mt-4 bg-[#F4ECE3] rounded-2xl p-3 sm:p-3.5 flex items-center justify-between border border-[#E2D4C5]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#B85D2A]/15 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#B85D2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold text-[#7A6152] leading-none">
                      Host Location
                    </div>
                    <div className="text-xs font-black text-slate-900 mt-0.5">
                      SJCET Palai, Kerala
                    </div>
                  </div>
                </div>
                <button
                  onClick={onExploreExpoClick}
                  className="bg-[#B85D2A] hover:bg-[#A04F20] active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-all"
                >
                  Submit Now
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}