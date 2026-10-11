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
  const [registered, setRegistered] = useState(false);
  const [ticketType, setTicketType] = useState("ieee-student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    ieeeId: "",
  });

  const [expoSubmitted, setExpoSubmitted] = useState(false);
  const [expoForm, setExpoForm] = useState({
    teamLead: "",
    email: "",
    projectTitle: "",
    category: "Hardware & IoT",
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  const handleExpoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExpoSubmitted(true);
  };

  return (
    <>
      {/* REGISTRATION MODAL */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-black max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setRegistered(false);
                onCloseRegister();
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-black flex items-center justify-center font-bold text-sm"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {registered ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#CCFF00] border-2 border-black flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase">
                  Spot Reserved!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name || "Innovator"}</strong>! We&apos;ve logged your pre-registration for STLC 2026. Details and confirmation have been queued for <strong>{formData.email}</strong>.
                </p>
                <div className="p-4 bg-[#0247FE] text-white rounded-2xl text-xs font-semibold">
                  Two-Day Residential Conference • SJCET Palai
                </div>
                <button
                  onClick={() => {
                    setRegistered(false);
                    onCloseRegister();
                  }}
                  className="bg-black text-[#CCFF00] font-black px-6 py-2.5 rounded-full text-xs uppercase"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#0247FE]/10 text-[#0247FE] px-3 py-1 rounded-full text-xs font-black uppercase mb-3">
                  STLC 2026 • Registration
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                  Reserve Your Pass
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                  Join the 2-day residential conference organized by IEEE ComSoc SBC SJCET & Kerala Chapter.
                </p>

                {/* Ticket Options */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button
                    type="button"
                    onClick={() => setTicketType("ieee-student")}
                    className={`p-3 rounded-2xl border text-left transition-all ${ticketType === "ieee-student"
                      ? "border-[#0247FE] bg-[#0247FE]/5 text-[#0247FE] font-bold"
                      : "border-slate-200 text-slate-700"
                      }`}
                  >
                    <div className="text-xs font-extrabold uppercase">IEEE Member</div>
                    <div className="text-[11px] text-slate-500">Subsidized Pass</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTicketType("non-ieee")}
                    className={`p-3 rounded-2xl border text-left transition-all ${ticketType === "non-ieee"
                      ? "border-[#0247FE] bg-[#0247FE]/5 text-[#0247FE] font-bold"
                      : "border-slate-200 text-slate-700"
                      }`}
                  >
                    <div className="text-xs font-extrabold uppercase">Non-IEEE Student</div>
                    <div className="text-[11px] text-slate-500">Standard Pass</div>
                  </button>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Mathew"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      College / Institution
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. SJCET Palai"
                      value={formData.college}
                      onChange={(e) =>
                        setFormData({ ...formData, college: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
                    />
                  </div>

                  {ticketType === "ieee-student" && (
                    <div>
                      <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                        IEEE Membership Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 98451234"
                        value={formData.ieeeId}
                        onChange={(e) =>
                          setFormData({ ...formData, ieeeId: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#CCFF00] hover:bg-[#bde800] text-black font-heading font-black py-3 rounded-full text-sm uppercase tracking-wider border-2 border-black shadow-md active:scale-95 transition-all"
                  >
                    Confirm Registration →
                  </button>
                </form>
              </div>
            )}
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
                <div className="w-16 h-16 rounded-full bg-[#0247FE] text-white flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="font-heading font-black text-2xl text-slate-900 uppercase">
                  Project Abstract Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you! Your submission for <strong>{expoForm.projectTitle}</strong> under <strong>{expoForm.category}</strong> has been received by the STLC 2026 Technical Evaluation Committee.
                </p>
                <div className="p-4 bg-[#CCFF00] text-black rounded-2xl text-xs font-bold border border-black/10">
                  Notification with presentation slot instructions will follow.
                </div>
                <button
                  onClick={() => {
                    setExpoSubmitted(false);
                    onCloseExpo();
                  }}
                  className="bg-black text-white font-black px-6 py-2.5 rounded-full text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-black uppercase mb-3 border border-black/10">
                  PROJECT EXPO • STLC 2026
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0247FE] focus:ring-1 focus:ring-[#0247FE]"
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
                    className="w-full mt-2 bg-[#0247FE] hover:bg-blue-700 text-white font-heading font-black py-3 rounded-full text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all"
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