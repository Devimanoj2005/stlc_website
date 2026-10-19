"use client";

import { useState } from "react";

interface ModalsProps {
  isRegisterOpen: boolean;
  isExpoOpen: boolean;
  onCloseRegister: () => void;
  onCloseExpo: () => void;
}

export default function Modals({
  isRegisterOpen,
  isExpoOpen,
  onCloseRegister,
  onCloseExpo,
}: ModalsProps) {
  const [expoSubmitted, setExpoSubmitted] = useState(false);
  const [expoForm, setExpoForm] = useState({
    teamLead: "",
    email: "",
    projectTitle: "",
    category: "Hardware & IoT",
  });

  const handleExpoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExpoSubmitted(true);
  };

  return (
    <>
      {/* REGISTRATION MODAL */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm sm:max-w-md bg-[#1F0E05] rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#B85D2A]/30 text-center">
            {/* Close Button */}
            <button
              onClick={onCloseRegister}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center text-sm transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#B85D2A]/20 border border-[#B85D2A]/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#E8C5A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#B85D2A]/20 text-[#E8C5A8] border border-[#B85D2A]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              SYNORA 2026 · Registration
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#FAF6F0] uppercase tracking-tight leading-tight mb-3">
              Registrations<br />Opening Soon
            </h3>

            <p className="text-sm text-[#A88C78] leading-relaxed mb-8">
              We&apos;re getting everything ready. Registration for SYNORA 2026 will open shortly — stay tuned for the announcement.
            </p>

            <div className="bg-[#3E1C0D] rounded-2xl px-5 py-4 border border-[#B85D2A]/20 mb-6 text-left space-y-1">
              <p className="text-[10px] text-[#E8C5A8]/50 font-mono uppercase tracking-widest">Event Details</p>
              <p className="text-xs text-[#FAF6F0] font-semibold">SYNORA 2026 · 2-Day Residential Conference</p>
              <p className="text-xs text-[#A88C78]">SJCET Palai, Kottayam, Kerala</p>
            </div>

            <button
              onClick={onCloseRegister}
              className="w-full bg-[#E8C5A8] hover:bg-[#DDB896] text-[#2B1408] font-heading font-black py-3 rounded-full text-sm uppercase tracking-wider border-2 border-[#2B1408] active:scale-95 transition-all"
            >
              Got It
            </button>
          </div>
        </div>
      )}

      {/* PROJECT EXPO MODAL */}
      {isExpoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm sm:max-w-md bg-[#1F0E05] rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#B85D2A]/30 text-center">
            {/* Close Button */}
            <button
              onClick={onCloseExpo}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF6F0] flex items-center justify-center text-sm transition-colors cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#B85D2A]/20 border border-[#B85D2A]/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#E8C5A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#B85D2A]/20 text-[#E8C5A8] border border-[#B85D2A]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              SYNORA 2026 · Project Expo
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#FAF6F0] uppercase tracking-tight leading-tight mb-3">
              Registrations<br />Opening Soon
            </h3>

            <p className="text-sm text-[#A88C78] leading-relaxed mb-6">
              Project Expo registration for SYNORA 2026 will open shortly. Review the guidelines and stay tuned for the submission portal announcement.
            </p>

            <div className="bg-[#3E1C0D] rounded-2xl px-5 py-4 border border-[#B85D2A]/20 mb-6 text-left space-y-1">
              <p className="text-[10px] text-[#E8C5A8]/50 font-mono uppercase tracking-widest">Competition Details</p>
              <p className="text-xs text-[#FAF6F0] font-semibold">SYNORA 2026 · Hardware Project Expo</p>
              <p className="text-xs text-[#A88C78]">Total Prize Pool: ₹15,000/- · SJCET Palai</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/1tEGeEfOEEJVMwRdlByApqYHThNH9IbQh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-transparent hover:bg-white/5 text-[#E8C5A8] border border-[#B85D2A]/40 font-heading font-bold py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors"
              >
                View Expo Guidance ↗
              </a>
              <button
                onClick={onCloseExpo}
                className="w-full bg-[#E8C5A8] hover:bg-[#DDB896] text-[#2B1408] font-heading font-black py-3 rounded-full text-sm uppercase tracking-wider border-2 border-[#2B1408] active:scale-95 transition-all cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}