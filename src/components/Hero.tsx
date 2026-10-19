"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroProps {
  onRegisterClick: () => void;
  onExploreExpoClick: () => void;
}

// Countdown target: October 31, 2026 at 00:00:00 IST (Asia/Kolkata = UTC+5:30)
const TARGET_DATE = new Date("2026-10-31T00:00:00+05:30").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full flex-1 flex flex-col justify-center items-center pt-6 sm:pt-10 md:pt-12 pb-14 sm:pb-20 md:pb-24 overflow-hidden select-none">
      {/* Subtle tech grid overlay matching Image 1 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(229,106,38,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,106,38,0.1)_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

      {/* Radial warm lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] sm:h-[550px] bg-[radial-gradient(ellipse,rgba(229,106,38,0.18),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 md:px-8 flex flex-col items-center justify-center w-full z-10">

        {/* ── TOP PRE-BADGE ── */}
        <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 bg-[#230D04]/90 backdrop-blur-md border border-[#E56A26]/40 rounded-full px-3.5 sm:px-5 py-1.5 text-[10.5px] sm:text-xs text-white tracking-wide shadow-[0_2px_12px_rgba(0,0,0,0.5)] max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#E56A26] animate-pulse shrink-0 shadow-[0_0_8px_#E56A26]" />
          <span className="font-extrabold text-[#FFA366] whitespace-nowrap">SYNORA 2026</span>
          <span className="text-[#FAF3E8]/35">•</span>
          <span className="font-medium text-[#FAF3E8]/90 truncate">
            IEEE ComSoc SBC SJCET &amp; IEEE ComSoc Kerala Chapter
          </span>
          <span className="text-[#FAF3E8]/35 hidden sm:inline">•</span>
          <span className="text-[#FFA366] font-semibold hidden sm:inline whitespace-nowrap">2-Day Residential</span>
        </div>

        {/* ── SYNORA EVENT LOGO DISPLAY ── */}
        <div className="my-1.5 flex flex-col items-center justify-center text-center">
          <div className="relative group">
            <Image
              src="/synoralogo.png"
              alt="SYNORA"
              width={1125}
              height={268}
              className="h-9 sm:h-12 md:h-16 lg:h-18 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="mt-1 inline-flex items-center gap-1.5 text-[9px] sm:text-[10.5px] font-mono font-bold tracking-[0.25em] text-[#E8C5A8] uppercase">
            <span>Student Tech Leadership Conference 2026</span>
          </div>
        </div>

        {/* ── CENTRAL GIANT GRAPHIC TYPOGRAPHY BLOCK WITH TECH CIRCUIT ── */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center py-4 sm:py-6 md:py-8 my-1 sm:my-2">

          {/* SVG Tech Circuit Outline with Chamfered Corners & Glowing Amber Crosshairs */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Desktop / Tablet Chamfered Tech Circuit Frame */}
            <svg
              className="w-full h-full absolute inset-0 hidden md:block overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1000 360"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Outer tech circuit wire connecting down towards the HUD boxes */}
              <path
                d="M 120 350 L 50 350 L 50 80 L 100 30 L 900 30 L 950 80 L 950 350 L 880 350"
                fill="none"
                stroke="#E56A26"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
              <path
                d="M 100 30 L 900 30"
                fill="none"
                stroke="#FFA366"
                strokeWidth="2"
                strokeOpacity="0.6"
                filter="url(#glow)"
              />
            </svg>

            {/* Glowing Corner & Side Crosshairs (+) */}
            <span className="absolute top-2 left-6 text-[#E56A26] font-light text-2xl select-none hidden sm:block drop-shadow-[0_0_6px_#E56A26]">+</span>
            <span className="absolute top-2 right-6 text-[#E56A26] font-light text-2xl select-none hidden sm:block drop-shadow-[0_0_6px_#E56A26]">+</span>
            <span className="absolute top-1/2 -left-2 text-[#E56A26] font-light text-2xl select-none hidden lg:block drop-shadow-[0_0_6px_#E56A26]">+</span>
            <span className="absolute top-1/2 -right-2 text-[#E56A26] font-light text-2xl select-none hidden lg:block drop-shadow-[0_0_6px_#E56A26]">+</span>
            <span className="absolute bottom-2 left-8 text-[#E56A26] font-light text-2xl select-none hidden sm:block drop-shadow-[0_0_6px_#E56A26]">+</span>
            <span className="absolute bottom-2 right-8 text-[#E56A26] font-light text-2xl select-none hidden sm:block drop-shadow-[0_0_6px_#E56A26]">+</span>
          </div>


          {/* ── LINE 1: #STLC ── */}
          <div className="flex items-center justify-center gap-1 md:gap-2 leading-none relative z-10">
            <span
              className="text-[#FAF6F0] font-heading font-black text-5xl sm:text-7xl md:text-9xl lg:text-[9.5rem] tracking-tighter uppercase select-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)]"
            >
              #STLC
            </span>
          </div>

          {/* ── LINE 2: TECH ── */}
          <div className="leading-none mt-[-8px] sm:mt-[-16px] md:mt-[-26px] relative z-10">
            <span
              className="text-[#FAF6F0] font-heading font-black text-5xl sm:text-7xl md:text-9xl lg:text-[9.5rem] tracking-tight uppercase select-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)]"
            >
              TECH
            </span>
          </div>

          {/* ── LINE 3: LEADERSHIP ── */}
          <div className="leading-none mt-[-8px] sm:mt-[-16px] md:mt-[-26px] relative z-10">
            <span
              className="text-[#FAF6F0] font-heading font-black text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] tracking-tight uppercase select-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)]"
            >
              LEADERSHIP
            </span>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FUTURISTIC HUD DATES (OCT 30 & 31) + LIVE COUNTDOWN
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-8 md:mt-10 px-2 sm:px-4">

          {/* Main Layout: Left Bracket (OCT 30) | Center (Event Pill + 4 Countdown Boxes + CTA) | Right Bracket (OCT 31) */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 sm:gap-6 lg:gap-8 relative">

            {/* ── LEFT HUD BRACKET: OCTOBER 30 (Desktop/Tablet) ── */}
            <div className="relative group shrink-0 hidden sm:block">
              <div className="relative bg-[#1A0A03]/95 border-2 border-[#E56A26] rounded-2xl p-3 sm:p-4 shadow-[0_0_30px_rgba(229,106,38,0.4)] flex flex-col items-center min-w-[150px] sm:min-w-[185px] md:min-w-[210px]">
                {/* Tech Chamfer Accent Marks */}
                <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FFA366]" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FFA366]" />
                <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FFA366]" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FFA366]" />

                <span className="text-[#FFA366] text-[11px] sm:text-xs font-mono font-black tracking-[0.25em] uppercase mb-1.5 sm:mb-2">
                  OCTOBER
                </span>

                {/* Big Digital Number 30 */}
                <div className="w-full bg-[#0E0401] border border-[#E56A26]/50 rounded-xl py-2.5 sm:py-3.5 flex items-center justify-center shadow-inner">
                  <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-[#FAF6F0] tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    30
                  </span>
                </div>
              </div>
            </div>

            {/* ── CENTER CONSOLE: Event Pill + Countdown Digits + Register Button ── */}
            <div className="flex-1 flex flex-col items-center text-center w-full max-w-xl">

              {/* Event on Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-[#1A0A03] border border-[#E56A26]/70 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs text-[#E8C5A8] shadow-[0_0_15px_rgba(229,106,38,0.25)] mb-3 sm:mb-4">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E56A26] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <div className="flex flex-col sm:flex-row items-center sm:gap-2 leading-none">
                  <span className="text-[9px] text-[#FFA366] font-mono font-bold uppercase tracking-widest sm:border-r sm:border-[#E56A26]/40 sm:pr-2">EVENT ON</span>
                  <span className="font-heading font-black tracking-wider text-[#FAF6F0] text-xs sm:text-sm mt-0.5 sm:mt-0">OCTOBER 30 – 31, 2026</span>
                </div>
              </div>

              {/* Mobile View Only: Date cards in a compact responsive row */}
              <div className="flex sm:hidden items-center justify-center gap-3 w-full mb-3 px-2">
                {/* 30 */}
                <div className="flex-1 bg-[#1A0A03] border-2 border-[#E56A26] rounded-xl p-2 flex flex-col items-center shadow-[0_0_15px_rgba(229,106,38,0.3)]">
                  <span className="text-[#FFA366] text-[10px] font-mono font-bold tracking-wider uppercase mb-1">
                    OCTOBER
                  </span>
                  <div className="w-full bg-[#0E0401] rounded-lg py-1.5 flex items-center justify-center">
                    <span className="font-heading font-black text-3xl text-[#FAF6F0] leading-none">30</span>
                  </div>
                </div>

                {/* 31 */}
                <div className="flex-1 bg-[#1A0A03] border-2 border-[#E56A26] rounded-xl p-2 flex flex-col items-center shadow-[0_0_15px_rgba(229,106,38,0.3)]">
                  <span className="text-[#FFA366] text-[10px] font-mono font-bold tracking-wider uppercase mb-1">
                    OCTOBER
                  </span>
                  <div className="w-full bg-[#0E0401] rounded-lg py-1.5 flex items-center justify-center">
                    <span className="font-heading font-black text-3xl text-[#FAF6F0] leading-none">31</span>
                  </div>
                </div>
              </div>

              {/* 4 Digital Countdown Boxes */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3.5 w-full max-w-md mx-auto">
                {[
                  { value: pad(timeLeft.days), label: "DAYS" },
                  { value: pad(timeLeft.hours), label: "HOURS" },
                  { value: pad(timeLeft.mins), label: "MINS" },
                  { value: pad(timeLeft.secs), label: "SECS" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#140601] border border-[#E56A26]/70 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-3 sm:py-3 flex flex-col items-center shadow-[0_0_16px_rgba(229,106,38,0.25)] min-w-[55px] sm:min-w-[72px] md:min-w-[82px]"
                  >
                    <span className="font-mono font-black text-2xl sm:text-3xl md:text-4xl text-[#FFA366] tracking-tight leading-none drop-shadow-[0_0_8px_rgba(255,163,102,0.4)]">
                      {item.value}
                    </span>
                    <span className="text-[8px] sm:text-[9.5px] font-mono font-bold tracking-widest text-[#E8C5A8]/70 mt-1 uppercase">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Glowing Horizontal Circuit Wire + Register Now Button */}
              <div className="relative mt-5 sm:mt-6 flex items-center justify-center w-full">
                {/* Horizontal glowing wire connecting left & right */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#E56A26] to-transparent pointer-events-none hidden sm:block" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFA366] shadow-[0_0_8px_#FFA366] hidden lg:block" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFA366] shadow-[0_0_8px_#FFA366] hidden lg:block" />

                <button
                  onClick={onRegisterClick}
                  className="relative z-10 bg-gradient-to-r from-[#D9531E] via-[#E56A26] to-[#C94A14] hover:brightness-110 active:scale-95 text-white font-heading font-black px-7 sm:px-9 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(229,106,38,0.7)] border border-[#FFA366]/50 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Register Now</span>
                  <span className="text-base leading-none">→</span>
                </button>
              </div>

            </div>

            {/* ── RIGHT HUD BRACKET: OCTOBER 31 (Desktop/Tablet) ── */}
            <div className="relative group shrink-0 hidden sm:block">
              <div className="relative bg-[#1A0A03]/95 border-2 border-[#E56A26] rounded-2xl p-3 sm:p-4 shadow-[0_0_30px_rgba(229,106,38,0.4)] flex flex-col items-center min-w-[150px] sm:min-w-[185px] md:min-w-[210px]">
                {/* Tech Chamfer Accent Marks */}
                <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FFA366]" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FFA366]" />
                <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FFA366]" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FFA366]" />

                <span className="text-[#FFA366] text-[11px] sm:text-xs font-mono font-black tracking-[0.25em] uppercase mb-1.5 sm:mb-2">
                  OCTOBER
                </span>

                {/* Big Digital Number 31 */}
                <div className="w-full bg-[#0E0401] border border-[#E56A26]/50 rounded-xl py-2.5 sm:py-3.5 flex items-center justify-center shadow-inner">
                  <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-[#FAF6F0] tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    31
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}