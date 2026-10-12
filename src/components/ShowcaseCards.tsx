"use client";

interface ShowcaseCardsProps {
  onRegisterClick: () => void;
  onExploreExpoClick: () => void;
}

export default function ShowcaseCards({
  onRegisterClick,
  onExploreExpoClick,
}: ShowcaseCardsProps) {
  return (
    <div className="relative z-20 w-full bg-[#FAF6F0] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] pt-12 md:pt-16 pb-12 px-4 sm:px-6 md:px-12 shadow-2xl">
      <div className="max-w-7xl mx-auto">

        {/* 3 Interactive Cards with connecting doodles */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">

          {/* CARD 1 */}
          <div className="relative bg-[#F4ECE3] hover:bg-[#EDE3D8] border border-[#E2D4C5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug uppercase">
                LEARN FROM
                <br />
                TOP EXPERTS
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A453A] font-medium leading-relaxed">
                Move beyond theory with practical hands-on workshops and emerging tech talks.
              </p>
            </div>

            {/* Bottom Graphic element matching image */}
            <div className="mt-8 flex items-center gap-3">
              {/* Terracotta Speech-bubble avatar badge */}
              <div className="relative bg-[#B85D2A] text-white p-2.5 rounded-2xl flex items-center gap-2 shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#FAF6F0] overflow-hidden border border-white/60 flex items-center justify-center text-xs font-black text-[#B85D2A]">
                  IEEE
                </div>
                <div className="text-[10px] leading-tight">
                  <p className="font-extrabold text-white">sjcet.sb</p>
                  <p className="text-white/80 text-[9px]">ComSoc</p>
                </div>
                {/* Speech tail */}
                <div className="absolute -bottom-1 left-3 w-2 h-2 bg-[#B85D2A] rotate-45" />
              </div>

              {/* Desert Sand Pill Badge */}
              <div className="bg-[#E8C5A8] border border-[#2B1408]/20 text-[#2B1408] font-extrabold px-3 py-1.5 rounded-full text-xs tracking-tight shadow-sm flex items-center gap-1 group-hover:scale-105 transition-transform">
                <span>2-DAY RESIDENTIAL</span>
              </div>
            </div>
          </div>

          {/* DOODLE ARROW 1 -> 2 (Desktop only) */}
          <div className="hidden md:flex absolute left-[31.5%] top-[55%] -translate-y-1/2 z-10 pointer-events-none">
            <svg
              className="w-16 h-16 text-[#2B1408] drop-shadow-sm"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hand-drawn swooping arrow to card 2 */}
              <path
                d="M10 18 C 30 14, 45 28, 48 42"
                stroke="#2B1408"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M38 40 L 48 42 L 50 32"
                stroke="#2B1408"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-[#F4ECE3] hover:bg-[#EDE3D8] border border-[#E2D4C5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug uppercase">
                LEADERSHIP &
                <br />
                CAREER INSIGHTS
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A453A] font-medium leading-relaxed">
                Connect with young professionals and gain actionable pathways to bridge campus to career.
              </p>
            </div>

            {/* Bottom Graphic element matching image */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="w-full flex items-center justify-between bg-[#3E1C0D] text-[#FAF6F0] px-4 py-2 rounded-2xl shadow-md">
                <span className="font-mono font-bold text-xs sm:text-sm">
                  STLC 2026 TRACKS
                </span>
                <span className="bg-[#E8C5A8] text-[#2B1408] text-[10px] font-black px-2 py-0.5 rounded-full">
                  7+ SESSIONS
                </span>
              </div>

              {/* Desert Sand Button with Doodle Arrow */}
              <button
                onClick={onRegisterClick}
                className="w-10 h-10 rounded-full bg-[#E8C5A8] hover:bg-[#DDB896] border-2 border-[#2B1408] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md"
                aria-label="View Tracks"
              >
                <svg
                  className="w-5 h-5 text-[#2B1408]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 19 C 9 14, 14 10, 19 6"
                    stroke="#2B1408"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 6 H 19 V 13"
                    stroke="#2B1408"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* DOODLE ARROW 2 -> 3 (Desktop only) */}
          <div className="hidden md:flex absolute right-[31.5%] top-[55%] -translate-y-1/2 z-10 pointer-events-none">
            <svg
              className="w-16 h-16 text-[#2B1408] drop-shadow-sm"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hand-drawn swooping arrow to card 3 */}
              <path
                d="M10 20 C 25 15, 42 26, 46 44"
                stroke="#2B1408"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M36 42 L 46 44 L 49 34"
                stroke="#2B1408"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-[#F4ECE3] hover:bg-[#EDE3D8] border border-[#E2D4C5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug uppercase">
                SHOWCASE AT
                <br />
                PROJECT EXPO
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A453A] font-medium leading-relaxed">
                Bring your technical creativity into the spotlight and pitch to industry mentors.
              </p>
            </div>

            {/* Bottom Graphic element matching image */}
            <div className="mt-8">
              {/* Speech-bubble Desert Sand Banner */}
              <div
                onClick={onExploreExpoClick}
                className="relative bg-[#E8C5A8] border-2 border-[#2B1408] rounded-2xl p-3 cursor-pointer hover:scale-102 transition-transform shadow-md"
              >
                <div className="text-[10px] uppercase font-bold text-[#5A3525] tracking-wider">
                  EST. INNOVATORS
                </div>
                <div className="font-heading font-black text-xl sm:text-2xl text-[#2B1408] tracking-tight">
                  100+ PROJECTS
                </div>
                {/* Speech tail */}
                <div className="absolute -bottom-2 left-6 w-3 h-3 bg-[#E8C5A8] border-r-2 border-b-2 border-[#2B1408] rotate-45" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}