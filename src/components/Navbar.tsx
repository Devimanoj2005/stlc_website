"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-[#2B1408]/90 backdrop-blur-xl border-b border-[#FAF3E8]/15 shadow-xl shadow-black/30 py-3 md:py-3.5 px-4 md:px-8"
        : "bg-transparent pt-4 md:pt-6 pb-2 px-4 md:px-8"
        }`}
    >
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-7xl lg:max-w-none mx-auto flex items-center justify-between gap-4"
      >
        {/* Brand Logo with SYNORA Event Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded-2xl"
          aria-label="SYNORA 2026 Home"
        >
          {/* Synora Event Logo */}
          <div className="relative flex items-center">
            <Image
              src="/synoralogo.png"
              alt="SYNORA"
              width={1125}
              height={268}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>

          {/* IEEE ComSoc Kerala Chapter Logo Image */}
          <div className="hidden sm:flex items-center">
            <img
              src="/comsoc-logo.png.png"
              alt="IEEE ComSoc Kerala Chapter"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith(".png.png")) {
                  target.src = "/comsoc-logo.png";
                }
              }}
            />
          </div>

        </a>

        {/* Center Pill Menu - Desktop */}
        <div className="hidden lg:flex items-center bg-[#2B1408]/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-[#FAF3E8]/15 shadow-lg shadow-black/20">
          <a
            href="#about"
            className="text-[#FAF3E8]/80 hover:text-[#FAF3E8] hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            About
          </a>
          <a
            href="#expo"
            className="text-[#FAF3E8]/80 hover:text-[#FAF3E8] hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Project Expo
          </a>
          <a
            href="#why-stlc"
            className="text-[#FAF3E8]/80 hover:text-[#FAF3E8] hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Events
          </a>
          <a
            href="#timeline"
            className="text-[#FAF3E8]/80 hover:text-[#FAF3E8] hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Schedule
          </a>
          <a
            href="#organizers"
            className="text-[#FAF3E8]/80 hover:text-[#FAF3E8] hover:bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
          >
            Committee
          </a>
        </div>

        {/* Right Action: Pill Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onRegisterClick}
            type="button"
            className="hidden sm:inline-flex items-center justify-center border border-white text-white hover:bg-[#E8C5A8] hover:text-[#2B1408] hover:border-[#E8C5A8] px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-tight transition-all duration-200 shadow-sm active:scale-95"
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
        <div className="lg:hidden mt-3 max-w-7xl mx-auto p-4 bg-[#2B1408]/95 backdrop-blur-xl border border-[#FAF3E8]/20 rounded-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF3E8]/90 hover:text-[#E8C5A8] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#expo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF3E8]/90 hover:text-[#E8C5A8] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Project Expo
          </a>
          <a
            href="#why-stlc"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF3E8]/90 hover:text-[#E8C5A8] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Events
          </a>
          <a
            href="#timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF3E8]/90 hover:text-[#E8C5A8] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Schedule
          </a>
          <a
            href="#organizers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF3E8]/90 hover:text-[#E8C5A8] px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Committee
          </a>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full bg-[#E8C5A8] hover:bg-[#DDB896] text-[#2B1408] font-extrabold py-2.5 rounded-full text-sm text-center shadow-md active:scale-95 transition-transform"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}