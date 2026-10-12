"use client";

interface HeroProps {
  onRegisterClick: () => void;
  onExploreExpoClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section className="relative w-full pt-12 md:pt-16 pb-20 md:pb-28 overflow-hidden select-none">
      {/* Container for Giant Typography and Floating Elements */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">

        {/* Conference Pre-badge */}
        <div className="mb-4 inline-flex items-center gap-2 bg-[#2B1408]/60 backdrop-blur-md border border-[#FAF3E8]/20 rounded-full px-4 py-1.5 text-xs text-white tracking-wide shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#E8C5A8] animate-pulse" />
          <span className="font-semibold text-[#FAF3E8]/90">
            IEEE ComSoc Kerala Chapter & SBC SJCET
          </span>
          <span className="text-[#FAF3E8]/40">•</span>
          <span className="text-[#E8C5A8] font-bold">2-Day Residential</span>
        </div>

        {/* Central Giant Graphic Typography Block */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center py-2 md:py-6">

          {/* Top-Right Sand Dune Doodle Arrow */}
          <div className="absolute top-2 right-4 md:right-16 lg:right-28 z-20 pointer-events-none hidden sm:block">
            <svg
              className="w-24 h-24 md:w-32 md:h-32 text-[#E8C5A8] drop-shadow-md"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved swooping arrow */}
              <path
                d="M15 95 C 40 20, 100 10, 115 50 C 122 75, 110 95, 98 102"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Arrowhead */}
              <path
                d="M85 86 L 98 102 L 116 90"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom-Left Sand Dune Doodle Arrow */}
          <div className="absolute bottom-2 left-2 md:left-12 lg:left-24 z-20 pointer-events-none hidden sm:block">
            <svg
              className="w-24 h-24 md:w-32 md:h-32 text-[#E8C5A8] drop-shadow-md"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved swooping arrow pointing upward */}
              <path
                d="M120 115 C 80 130, 35 110, 30 70 C 26 42, 45 28, 65 22"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Arrowhead pointing up */}
              <path
                d="M50 36 L 65 22 L 72 40"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* FLOATING GLASS CARD 1 (Top-Right) */}
          <div className="absolute top-0 right-1 sm:right-6 md:right-20 lg:right-32 z-30 transform rotate-6 hover:rotate-2 hover:scale-105 transition-all duration-300">
            <div className="glass-card rounded-2xl md:rounded-3xl p-3 md:p-4 w-36 sm:w-44 md:w-52 shadow-2xl flex flex-col items-center text-center">
              {/* Pixel Tech Avatar */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900 border-2 border-white/80 p-1 flex items-center justify-center overflow-hidden shadow-inner mb-2">
                <svg
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="8" fill="#0F172A" />
                  {/* Cyber 3D glasses pixel avatar */}
                  <rect x="12" y="10" width="24" height="20" rx="4" fill="#F8FAFC" />
                  <rect x="16" y="16" width="7" height="6" fill="#EF4444" />
                  <rect x="25" y="16" width="7" height="6" fill="#06B6D4" />
                  <rect x="23" y="18" width="2" height="2" fill="#0F172A" />
                  <rect x="18" y="24" width="12" height="2" fill="#0F172A" />
                  <rect x="10" y="30" width="28" height="14" rx="4" fill="#B85D2A" />
                </svg>
              </div>
              <span className="text-[#FAF3E8] font-extrabold text-xs md:text-sm tracking-tight drop-shadow-sm">
                sjcet.comsoc
              </span>
              <span className="text-[#FAF3E8]/80 text-[10px] md:text-xs font-medium">
                Host Chapter • 2026
              </span>
            </div>
          </div>

          {/* FLOATING GLASS CARD 2 (Center-Left) */}
          <div className="absolute bottom-4 left-0 sm:left-4 md:left-14 lg:left-24 z-30 transform -rotate-8 hover:-rotate-3 hover:scale-105 transition-all duration-300">
            <div className="glass-card rounded-2xl md:rounded-3xl p-3 md:p-4 w-36 sm:w-44 md:w-52 shadow-2xl flex flex-col items-center text-center">
              {/* Tech Ape / ComSoc Leader Avatar */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-amber-950 border-2 border-white/80 p-1 flex items-center justify-center overflow-hidden shadow-inner mb-2">
                <svg
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="8" fill="#78350F" />
                  <circle cx="24" cy="22" r="12" fill="#D97706" />
                  <circle cx="19" cy="20" r="3.5" fill="#FEF3C7" />
                  <circle cx="29" cy="20" r="3.5" fill="#FEF3C7" />
                  <circle cx="20" cy="20" r="1.5" fill="#000" />
                  <circle cx="30" cy="20" r="1.5" fill="#000" />
                  <path
                    d="M20 27 C22 29, 26 29, 28 27"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect x="14" y="32" width="20" height="12" rx="4" fill="#E8C5A8" />
                  <circle cx="24" cy="38" r="2.5" fill="#000" />
                </svg>
              </div>
              <span className="text-[#FAF3E8] font-extrabold text-xs md:text-sm tracking-tight drop-shadow-sm">
                stlc2026.ieee
              </span>
              <span className="text-[#FAF3E8]/80 text-[10px] md:text-xs font-medium">
                2-Day Residential
              </span>
            </div>
          </div>

          {/* LINE 1: #STLC */}
          <div className="flex items-center justify-center gap-1 md:gap-2 leading-none">
            <span
              className="text-[#E8C5A8] font-heading font-black text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tighter drop-shadow-lg inline-block transform -rotate-3"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              #
            </span>
            <span
              className="text-[#FAF3E8] font-heading font-black text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tighter drop-shadow-xl uppercase"
              style={{ textShadow: "0 8px 30px rgba(0,0,0,0.5)" }}
            >
              STLC
            </span>
          </div>

          {/* LINE 2: TECH */}
          <div className="leading-none mt-[-8px] sm:mt-[-18px] md:mt-[-28px]">
            <span
              className="text-[#FAF3E8] font-heading font-black text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight drop-shadow-xl uppercase"
              style={{ textShadow: "0 8px 30px rgba(0,0,0,0.5)" }}
            >
              TECH
            </span>
          </div>

          {/* LINE 3: LEADERSHIP */}
          <div className="leading-none mt-[-8px] sm:mt-[-18px] md:mt-[-28px]">
            <span
              className="text-[#FAF3E8] font-heading font-black text-4xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tight drop-shadow-xl uppercase"
              style={{ textShadow: "0 8px 30px rgba(0,0,0,0.5)" }}
            >
              LEADERSHIP
            </span>
          </div>
        </div>

        {/* ROTATING CIRCULAR DESERT SAND BADGE (Right Side Overlay) */}
        <div
          onClick={onRegisterClick}
          className="absolute -bottom-8 right-2 sm:right-8 md:right-16 lg:right-28 z-40 cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label="Register Now for STLC 2026"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#E8C5A8] border-2 border-[#2B1408] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
            {/* Rotating circular SVG text */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
              viewBox="0 0 100 100"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text
                className="text-[8.5px] font-black uppercase tracking-widest fill-[#2B1408]"
                style={{ letterSpacing: "2.4px" }}
              >
                <textPath href="#circlePath" startOffset="0%">
                  • STLC 2026 • REGISTER NOW • STLC 2026 •
                </textPath>
              </text>
            </svg>

            {/* Center Curved Doodle Arrows */}
            <div className="flex flex-col items-center justify-center text-[#2B1408] pointer-events-none">
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hand-drawn double arrows pointing up-right */}
                <path
                  d="M14 34 C 18 24, 26 18, 34 14"
                  stroke="#2B1408"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M24 14 L 34 14 L 34 24"
                  stroke="#2B1408"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 26 C 14 20, 20 16, 26 12"
                  stroke="#2B1408"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}