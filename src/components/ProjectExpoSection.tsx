"use client";

interface ProjectExpoSectionProps {
  onExploreExpoClick: () => void;
}

export default function ProjectExpoSection({
  onExploreExpoClick,
}: ProjectExpoSectionProps) {
  return (
    <section id="expo" className="w-full bg-[#1F0C04] text-[#FAF6F0] py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Warm Ambient Glows */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#B85D2A]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-[#E8C5A8]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 2-Column Bento Grid matching the mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* ══════════════════════════════════════════════════
              LEFT COLUMN: Title, About, 3 Pills & Host Location
          ══════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-between space-y-6">

            {/* Top Text Block */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F6E3D4] text-[#2B1408] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-5 shadow-sm">
                <span>02 • IDEAS INTO ACTION</span>
              </div>

              {/* Giant Typography */}
              <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#FAF6F0] tracking-tight uppercase leading-[1.05] mb-6">
                PROJECT
                <br />
                EXPO 2026:
                <br />
                SHOWCASE
                <br />
                WHAT YOU
                <br />
                CREATE.
              </h2>

              {/* About Subheading & Paragraph */}
              <h3 className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-[#E8C5A8] mb-2.5">
                ABOUT PROJECT EXPO
              </h3>
              <p className="text-[#FAF6F0]/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                SYNORA 2026 Project Expo aims to encourage innovation, creativity, and practical engineering by providing a platform for students to showcase hardware-based projects that address real-world challenges. Participants are invited to present innovative, technically feasible, and practically relevant solutions that demonstrate effective problem-solving and engineering excellence.
              </p>

              {/* 3 Mini Feature Pills: Innovate, Build, Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1. Innovate */}
                <div className="bg-[#2E1508]/85 border border-[#FAF3E8]/10 rounded-2xl p-3 flex items-center gap-3 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[#B85D2A]/25 border border-[#B85D2A]/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#FFA366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-black text-xs text-[#FAF6F0] uppercase tracking-wide">
                      Innovate
                    </div>
                    <div className="text-[10px] text-[#E8C5A8]/70 leading-tight">
                      Real-world solutions
                    </div>
                  </div>
                </div>

                {/* 2. Build */}
                <div className="bg-[#2E1508]/85 border border-[#FAF3E8]/10 rounded-2xl p-3 flex items-center gap-3 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[#B85D2A]/25 border border-[#B85D2A]/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#FFA366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-black text-xs text-[#FAF6F0] uppercase tracking-wide">
                      Build
                    </div>
                    <div className="text-[10px] text-[#E8C5A8]/70 leading-tight">
                      Practical engineering
                    </div>
                  </div>
                </div>

                {/* 3. Showcase */}
                <div className="bg-[#2E1508]/85 border border-[#FAF3E8]/10 rounded-2xl p-3 flex items-center gap-3 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-[#B85D2A]/25 border border-[#B85D2A]/40 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#FFA366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-black text-xs text-[#FAF6F0] uppercase tracking-wide">
                      Showcase
                    </div>
                    <div className="text-[10px] text-[#E8C5A8]/70 leading-tight">
                      Ideas that create impact
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HOST LOCATION CARD */}
            <div className="bg-[#FAF6F0] text-slate-900 rounded-3xl p-6 sm:p-7 shadow-xl border border-[#E2D4C5]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#B85D2A]/15 flex items-center justify-center text-[#B85D2A]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
                  HOST LOCATION
                </h4>
              </div>

              {/* 3 Columns Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {/* 1. Date */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6E3D4] flex items-center justify-center text-[#B85D2A] shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      DATE
                    </span>
                    <span className="font-heading font-black text-sm text-slate-900 leading-tight block mt-0.5">
                      31 October 2026
                    </span>
                  </div>
                </div>

                {/* 2. Venue */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6E3D4] flex items-center justify-center text-[#B85D2A] shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      VENUE
                    </span>
                    <span className="font-heading font-black text-sm text-slate-900 leading-tight block mt-0.5">
                      SJCET, Palai
                    </span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                      St. Joseph&apos;s College of Engineering and Technology, Palai
                    </span>
                  </div>
                </div>

                {/* 3. Registration Fee */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F6E3D4] flex items-center justify-center text-[#B85D2A] shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      REGISTRATION FEE
                    </span>
                    <span className="font-heading font-black text-sm text-slate-900 leading-tight block mt-0.5">
                      ₹50 per team
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT COLUMN: Guidelines Card & Cash Prize Card
          ══════════════════════════════════════════════════ */}
          <div className="flex flex-col space-y-6">

            {/* 1. GUIDELINES CARD */}
            <div className="bg-[#FAF6F0] text-slate-900 rounded-3xl p-6 sm:p-7 shadow-xl border border-[#E2D4C5]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#B85D2A]/15 flex items-center justify-center text-[#B85D2A]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-sm uppercase tracking-wider text-slate-900">
                  GUIDELINES
                </h4>
              </div>

              {/* Guidelines Points List */}
              <ul className="space-y-2.5 text-xs text-slate-800 leading-relaxed font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#E56A26] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>Open to SYNORA participants and non-participants.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#E56A26] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>Maximum 4 members per team.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#E56A26] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>Hardware-based projects only; software may support hardware functionality.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#E56A26] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>Projects addressing real-world problems are encouraged.</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#E56A26] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <div className="w-full">
                    <span><span className="font-semibold">Two-Stage Selection:</span> Abstract Screening → Project Exhibition &amp; Final Evaluation.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. CASH PRIZE & RECOGNITION CARD */}
            <div className="bg-[#FAF6F0] text-slate-900 rounded-3xl p-6 sm:p-7 shadow-xl border border-[#E2D4C5]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#B85D2A]/15 flex items-center justify-center text-[#B85D2A]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.055a6.002 6.002 0 014.9 5.344l.805.268a2 2 0 011.295 1.884V13a2 2 0 01-2 2h-.101a6.002 6.002 0 01-4.899 2.6V19h2a1 1 0 110 2H7a1 1 0 110-2h2v-1.4A6.002 6.002 0 014.101 15H4a2 2 0 01-2-2v-1.449a2 2 0 011.295-1.884l.805-.268A6.002 6.002 0 019 4.055V3a1 1 0 011-1z" />
                  </svg>
                </div>
                <h4 className="font-heading font-black text-sm uppercase tracking-tight text-slate-900">
                  CASH PRIZE &amp; RECOGNITION
                </h4>
              </div>

              {/* Prize Table */}
              <div className="w-full text-xs rounded-xl overflow-hidden border border-[#E8DACB]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#E8DACB] bg-[#F7EFE6]/70">
                      <th className="py-2.5 px-4 font-bold text-slate-700">Position</th>
                      <th className="py-2.5 px-4 font-bold text-slate-700">Cash Prize</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DACB]">
                    <tr>
                      <td className="py-2 px-4 text-slate-800 font-medium">First Prize</td>
                      <td className="py-2 px-4 text-slate-800 font-bold font-mono">₹7,000/-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-slate-800 font-medium">Second Prize</td>
                      <td className="py-2 px-4 text-slate-800 font-bold font-mono">₹5,000/-</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-slate-800 font-medium">Third Prize</td>
                      <td className="py-2 px-4 text-slate-800 font-bold font-mono">₹3,000/-</td>
                    </tr>
                    <tr className="bg-[#F8DEC7] font-black text-slate-900">
                      <td className="py-2.5 px-4 font-bold">Total Prize Pool</td>
                      <td className="py-2.5 px-4 font-black font-mono">₹15,000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════
            BOTTOM CENTER CTA: Wire + Submit Now Button
        ══════════════════════════════════════════════════ */}
        <div className="mt-10 sm:mt-12 relative flex flex-col items-center justify-center">
          {/* Horizontal dividing line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#FAF3E8]/15 pointer-events-none" />

          {/* Centered Buttons */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://forms.gle/kx9bipS1SoQkzRtq8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F8CEB0] hover:bg-[#F5C09B] text-[#2B1408] font-heading font-black px-9 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#2B1408] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Now</span>
              <span className="text-base leading-none">→</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1Pmi-0aWhIuHKWVCuNJTgqDF1K2hzPl82/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A0A04]/90 hover:bg-[#34180A] text-[#FAF6F0] font-heading font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase shadow-md border border-[#B85D2A]/60 hover:border-[#E8C5A8] hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-[#E8C5A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Expo Guidance</span>
              <span className="text-sm leading-none">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}