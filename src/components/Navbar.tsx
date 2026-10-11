"use client";

import { useState } from "react";

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full pt-4 md:pt-6 px-4 md:px-8 max-w-7xl mx-auto">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-between gap-4"
      >
        {/* Brand Logo in Neo-Brutalist Speech Bubble */}
        <a
          href="#"
          className="flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-white rounded-2xl"
          aria-label="STLC 2026 Home"
        >
          {/* White Speech Bubble "IEEE" */}
          <div className="relative bg-white text-black font-extrabold px-3.5 py-1.5 rounded-full text-xs md:text-sm tracking-tight shadow-md flex items-center justify-center">
            <span className="font-heading">IEEE</span>
            {/* Speech bubble small triangle tail */}
            <div className="absolute -bottom-1 left-2 w-2 h-2 bg-white rotate-45" />
          </div>

          {/* Neon Lime Bubble "COMSOC / STLC" */}
          <div className="relative bg-[#CCFF00] border-2 border-black text-black font-extrabold px-3 py-1 rounded-full text-xs md:text-sm tracking-wider uppercase shadow-md flex items-center gap-1 group-hover:scale-105 transition-transform">
            <span className="font-heading font-black">STLC</span>
            <span className="text-[10px] md:text-xs bg-black text-[#CCFF00] px-1.5 py-0.2 rounded-md font-bold">
              2026
            </span>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-1 right-2.5 w-1.5 h-1.5 bg-[#CCFF00] border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </a>

        {/* Center Pill Menu - Desktop */}
        <div className="hidden lg:flex items-center bg-black/35 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/15 shadow-lg shadow-black/10">
          <a
            href="#about"
            className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            About STLC
          </a>
          <a
            href="#experience"
            className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            The Experience
          </a>
          <a
            href="#awaits"
            className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            What Awaits
          </a>
          <a
            href="#expo"
            className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Project Expo
          </a>
          <a
            href="#why-stlc"
            className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Why STLC
          </a>
          <a
            href="#organizers"
            className="text-white/80 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Organizers
          </a>
        </div>

        {/* Right Action: Pill Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onRegisterClick}
            type="button"
            className="hidden sm:inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#0247FE] px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-tight transition-all duration-200 shadow-sm active:scale-95"
          >
            Register Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-full bg-white/15 text-white hover:bg-white/25 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#CCFF00] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            About STLC
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#CCFF00] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            The Experience
          </a>
          <a
            href="#awaits"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#CCFF00] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            What Awaits
          </a>
          <a
            href="#expo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#CCFF00] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Project Expo
          </a>
          <a
            href="#why-stlc"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#CCFF00] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Why STLC
          </a>
          <a
            href="#organizers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#CCFF00] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Organizers
          </a>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full bg-[#CCFF00] text-black font-extrabold py-2.5 rounded-full text-sm text-center shadow-md active:scale-95 transition-transform"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}