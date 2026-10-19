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

        {/* Main 4-Column Grid: Brand | Navigation | Location with Map | Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-[#3E1C0D]">

          {/* Col 1: Logo & Organizers */}
          <div className="flex flex-col items-start gap-3">
            <Image
              src="/synoralogo.png"
              alt="SYNORA"
              width={1125}
              height={268}
              className="h-8 w-auto object-contain object-left"
            />
            <div className="text-xs text-[#E8C5A8] font-bold space-y-1.5 tracking-wider uppercase pt-1">
              <p>IEEE SB SJCET</p>
              <p>IEEE COMSOC SBC SJCET</p>
              <p>IEEE COMSOC KERALA CHAPTER</p>
            </div>
            <div className="w-full h-px bg-[#3E1C0D] my-1" />
            <p className="text-[11px] text-[#A88C78] font-mono">
              Where Technology Meets Leadership
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#E8C5A8] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About SYNORA</a></li>
              <li><a href="#expo" className="hover:text-white transition-colors">Project Expo</a></li>
              <li><a href="#why-stlc" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">Event Schedule</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Committee</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Organizers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div id="contact">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#E8C5A8] mb-3">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E56A26]/15 text-[#FFA366] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[#FAF6F0]/80 font-semibold">Tims:</span>{" "}
                  <a href="tel:+919946116910" className="hover:text-white transition-colors">+91 99461 16910</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E56A26]/15 text-[#FFA366] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[#FAF6F0]/80 font-semibold">Arjun:</span>{" "}
                  <a href="tel:+919400279959" className="hover:text-white transition-colors">+91 94002 79959</a>
                </div>
              </li>
              <li className="pt-1 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E56A26]/15 text-[#FFA366] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:ieee@sjcetpalai.ac.in" className="text-[#E8C5A8] hover:text-white transition-colors underline-offset-2 hover:underline font-mono text-xs">
                    ieee@sjcetpalai.ac.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Location with Live Google Map Embed */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#E8C5A8] mb-2">
              Location
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              St. Joseph&apos;s College of Engineering and Technology (SJCET)
              <br />
              Palai, Kottayam, Kerala, India
            </p>

            {/* Embedded Live Google Map */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#E56A26]/50 bg-[#140602] shadow-[0_4px_20px_rgba(0,0,0,0.6)] group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339742505!2d76.7260948!3d9.7268467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph's%20College%20of%20Engineering%20and%20Technology%2C%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1792408250446!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="St. Joseph's College of Engineering and Technology, Palai Location Map"
                className="w-full h-full"
              />
              {/* Quick direct link pill */}
              <a
                href="https://maps.google.com/?q=St.+Joseph's+College+of+Engineering+and+Technology,+Palai"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2.5 py-1 bg-[#1F0C04]/90 backdrop-blur-md border border-[#FFA366]/40 rounded-lg text-[10px] font-mono font-bold text-[#FFA366] hover:bg-[#E56A26] hover:text-white transition-all shadow-md inline-flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <span>© 2026 SYNORA - IEEE SB SJCET · IEEE COMSOC SBC SJCET · IEEE COMSOC KERALA CHAPTER.</span>
            <br className="hidden sm:inline" />
            <span className="text-slate-500"> All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Bottom Location Indicator */}
            <div className="hidden sm:flex items-center gap-2 border-l border-[#3E1C0D] pl-4">
              <div className="w-6 h-6 rounded-full bg-[#E56A26]/20 text-[#FFA366] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-[10px] text-left leading-tight">
                <span className="font-mono font-bold text-[#FFA366] block uppercase tracking-wider">LOCATION</span>
                <span className="text-slate-400">St. Joseph&apos;s College of Engineering and Technology (SJCET)</span>
                <span className="text-slate-500 block">Palai, Kottayam, Kerala, India</span>
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-[#200B03] border border-[#FFA366]/40 text-[#FFA366] hover:bg-[#E56A26] hover:text-white transition-all shadow-md shrink-0 cursor-pointer"
              title="Back to Top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-[7.5px] font-mono font-bold uppercase tracking-wider mt-0.5">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
