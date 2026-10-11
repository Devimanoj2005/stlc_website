"use client";

interface FooterProps {
  onRegisterClick: () => void;
}

export default function Footer({ onRegisterClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0F172A] text-white pt-16 pb-12 px-4 sm:px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Top Footer Banner */}
        <div className="bg-[#0247FE] rounded-3xl p-8 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-[#CCFF00] font-mono text-xs font-black uppercase tracking-widest">
              Limited Residential Passes
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mt-2">
              Join STLC 2026 Today
            </h3>
            <p className="text-white/80 text-sm mt-2">
              Transform ideas into action with two days of intensive learning, leadership development, and networking.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={onRegisterClick}
              className="bg-[#CCFF00] hover:bg-[#e5ff66] text-black font-heading font-black px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all duration-200 border-2 border-black"
            >
              Register Now
            </button>
            <a
              href="#about"
              className="border border-white/60 hover:bg-white/10 text-white font-heading font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider text-center transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-1">
              <div className="bg-white text-black font-extrabold px-3 py-1 rounded-full text-xs tracking-tight">
                IEEE
              </div>
              <div className="bg-[#CCFF00] text-black font-black px-2.5 py-1 rounded-full text-xs tracking-wider uppercase border border-black">
                STLC 2026
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              IEEE ComSoc Student Tech Leadership Conference 2026. Organized by IEEE ComSoc SBC SJCET in association with IEEE ComSoc Kerala Chapter.
            </p>
            <p className="text-[11px] text-[#CCFF00] font-mono">
              Where Technology Meets Leadership
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About The Conference
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  The STLC Experience
                </a>
              </li>
              <li>
                <a href="#awaits" className="hover:text-white transition-colors">
                  What Awaits You
                </a>
              </li>
              <li>
                <a href="#expo" className="hover:text-white transition-colors">
                  Project Expo
                </a>
              </li>
              <li>
                <a href="#why-stlc" className="hover:text-white transition-colors">
                  Why STLC 2026?
                </a>
              </li>
              <li>
                <a href="#organizers" className="hover:text-white transition-colors">
                  Organizing Body
                </a>
              </li>
            </ul>
          </div>

          {/* Core Pillars */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
              Focus Tracks
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Technical Sessions</li>
              <li>Hands-on Workshops</li>
              <li>Career Guidance</li>
              <li>Leadership Activities</li>
              <li>Young Professionals Panel</li>
              <li>Hardware & Software Expo</li>
            </ul>
          </div>

          {/* Venue & Chapter */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
              Venue & Host
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              St. Joseph&apos;s College of Engineering and Technology (SJCET)
              <br />
              Palai, Kottayam, Kerala, India
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">
                Association
              </span>
              <span className="text-xs text-white font-bold">
                IEEE ComSoc Kerala Chapter
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 STLC. IEEE ComSoc Student Branch Chapter SJCET. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#CCFF00] transition-colors"
            >
              <span>Back to Top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}