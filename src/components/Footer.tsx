"use client";

import Image from "next/image";

interface FooterProps {
  onRegisterClick: () => void;
}

export default function Footer({ onRegisterClick }: FooterProps) {
  return (
    <footer className="w-full bg-[#1F0E05] text-[#FAF6F0] pt-12 pb-8 px-4 sm:px-6 md:px-12 border-t border-[#3E1C0D]">
      <div className="max-w-7xl mx-auto">

        {/* CTA Banner */}
        <div className="bg-[#3E1C0D] rounded-3xl p-8 sm:p-10 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-[#B85D2A]/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-[#E8C5A8] font-mono text-xs font-black uppercase tracking-widest">
              Limited Residential Passes
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#FAF6F0] tracking-tight uppercase mt-2">
              Join SYNORA 2026 Today
            </h3>
            <p className="text-[#FAF6F0]/80 text-sm mt-2">
              Transform ideas into action with two days of intensive learning, leadership development, and networking.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={onRegisterClick}
              className="bg-[#E8C5A8] hover:bg-[#DDB896] text-[#2B1408] font-heading font-black px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all duration-200 border-2 border-[#2B1408]"
            >
              Register Now
            </button>
            <a
              href="#about"
              className="border border-[#FAF6F0]/40 hover:bg-white/10 text-[#FAF6F0] font-heading font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider text-center transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Main Grid: Logo | Links | Location + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-[#3E1C0D]">

          {/* Logo & Organizers */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/synoralogo.png"
              alt="SYNORA"
              width={1125}
              height={268}
              className="h-8 w-auto object-contain object-left"
            />
            <div className="text-xs text-[#E8C5A8] font-bold space-y-2 tracking-wider uppercase">
              <p>IEEE SB SJCET</p>
              <p>IEEE COMSOC SBC SJCET</p>
              <p>IEEE COMSOC KERALA CHAPTER</p>
            </div>
            <p className="text-[11px] text-[#A88C78] font-mono pt-1">
              Where Technology Meets Leadership
            </p>
          </div>

          {/* Page Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About SYNORA</a></li>
              <li><a href="#expo" className="hover:text-white transition-colors">Project Expo</a></li>
              <li><a href="#why-stlc" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Event Schedule</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Organizers</a></li>
            </ul>
          </div>

          {/* Location + Contact */}
          <div className="space-y-5">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Location
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                St. Joseph&apos;s College of Engineering and Technology (SJCET)
                <br />
                Palai, Kottayam, Kerala, India
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Contact
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <span className="text-[#FAF6F0]/80 font-semibold">Tims:</span>{" "}
                  <a href="tel:+919946116910" className="hover:text-white transition-colors">+91 99461 16910</a>
                </li>
                <li>
                  <span className="text-[#FAF6F0]/80 font-semibold">Arjun:</span>{" "}
                  <a href="tel:+919400279959" className="hover:text-white transition-colors">+91 9400279959</a>
                </li>
                <li className="pt-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Mail</span>
                  <a href="mailto:ieee@sjcetpalai.ac.in" className="text-[#E8C5A8] hover:text-white transition-colors underline-offset-2 hover:underline">
                    ieee@sjcetpalai.ac.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <span>© 2026 SYNORA · IEEE SB SJCET · IEEE COMSOC SBC SJCET · IEEE COMSOC KERALA CHAPTER. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#A88C78] hover:text-[#E8C5A8] transition-colors flex items-center gap-1"
          >
            Back to Top
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
