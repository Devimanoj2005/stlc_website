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
              <p className="text-xs text-[#FAF6F0] font-semibold">SYNORA 2026 · 2-Day Residential</p>
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
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-black max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setExpoSubmitted(false);
                onCloseExpo();
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-black flex items-center justify-center font-bold text-sm"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {expoSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#B85D2A] text-white border-2 border-[#2B1408] flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase">
                  Project Abstract Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you! Your submission for <strong>{expoForm.projectTitle}</strong> under <strong>{expoForm.category}</strong> has been received by the SYNORA 2026 Technical Evaluation Committee.
                </p>
                <div className="p-4 bg-[#E8C5A8] text-[#2B1408] rounded-2xl text-xs font-bold border border-[#2B1408]/20">
                  Notification with presentation slot instructions will follow.
                </div>
                <button
                  onClick={() => {
                    setExpoSubmitted(false);
                    onCloseExpo();
                  }}
                  className="bg-[#2B1408] text-white font-black px-6 py-2.5 rounded-full text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#E8C5A8] text-[#2B1408] px-3 py-1 rounded-full text-xs font-black uppercase mb-3 border border-[#2B1408]/20">
                  PROJECT EXPO • SYNORA 2026
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                  Submit Your Project
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                  Exhibit your innovation in front of IEEE ComSoc Kerala mentors, fellow creators, and industry pioneers.
                </p>

                <form onSubmit={handleExpoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      Team Lead / Creator Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Diya Nair"
                      value={expoForm.teamLead}
                      onChange={(e) =>
                        setExpoForm({ ...expoForm, teamLead: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#B85D2A] focus:ring-1 focus:ring-[#B85D2A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      Contact Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="diya@example.com"
                      value={expoForm.email}
                      onChange={(e) =>
                        setExpoForm({ ...expoForm, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#B85D2A] focus:ring-1 focus:ring-[#B85D2A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      Project Title
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Smart IoT Wireless Telemetry"
                      value={expoForm.projectTitle}
                      onChange={(e) =>
                        setExpoForm({ ...expoForm, projectTitle: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#B85D2A] focus:ring-1 focus:ring-[#B85D2A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      Domain Category
                    </label>
                    <select
                      value={expoForm.category}
                      onChange={(e) =>
                        setExpoForm({ ...expoForm, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#B85D2A] focus:ring-1 focus:ring-[#B85D2A]"
                    >
                      <option value="Hardware & IoT">Hardware & IoT</option>
                      <option value="Communications & Signal Processing">
                        Communications & Signal Processing
                      </option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Robotics & Embedded Systems">
                        Robotics & Embedded Systems
                      </option>
                      <option value="Software & Open Innovation">
                        Software & Open Innovation
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#B85D2A] hover:bg-[#96471B] text-white font-heading font-black py-3 rounded-full text-sm uppercase tracking-wider border-2 border-[#2B1408] shadow-md active:scale-95 transition-all"
                  >
                    Submit Project for Review →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}