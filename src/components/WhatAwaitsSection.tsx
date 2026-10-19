"use client";

interface WhatAwaitsSectionProps {
  onExploreExpoClick: () => void;
}

export default function WhatAwaitsSection({
  onExploreExpoClick,
}: WhatAwaitsSectionProps) {
  const experiences = [
    {
      id: "sessions",
      title: "TECHNICAL SESSIONS",
      tag: "EMERGING TECH",
      description:
        "Discover emerging technologies and gain insights into the latest developments shaping the future of communication and engineering.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      highlight: false,
    },
    {
      id: "workshops",
      title: "HANDS-ON WORKSHOPS",
      tag: "PRACTICAL SKILLS",
      description:
        "Move beyond theory through practical learning experiences designed to strengthen your technical knowledge and problem-solving skills.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      highlight: true,
    },
    {
      id: "career",
      title: "CAREER GUIDANCE",
      tag: "INDUSTRY PATHWAYS",
      description:
        "Explore career pathways, understand industry expectations, and gain valuable perspectives to help shape your professional journey.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      highlight: false,
    },
    {
      id: "leadership",
      title: "LEADERSHIP ACTIVITIES",
      tag: "DECISION MAKING",
      description:
        "Develop teamwork, communication, decision-making, and leadership skills through engaging collaborative experiences.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      highlight: false,
    },
    {
      id: "yp-panel",
      title: "YOUNG PROFESSIONALS PANEL",
      tag: "REAL EXPERIENCE",
      description:
        "Hear perspectives from young professionals as they share experiences, discuss industry trends, and offer insights into navigating the transition from campus to career.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      highlight: true,
    },
    {
      id: "project-expo",
      title: "PROJECT EXPO",
      tag: "FLAGSHIP SHOWCASE",
      description:
        "Showcase your innovative projects, exchange ideas with fellow creators, and bring your technical creativity into the spotlight.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      highlight: false,
      isExpo: true,
    },
    {
      id: "networking",
      title: "NETWORKING OPPORTUNITIES",
      tag: "EXPAND CONNECTIONS",
      description:
        "Connect with students, professionals, and IEEE members to build meaningful relationships and discover opportunities for collaboration.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      highlight: false,
    },
  ];

  return (
    <section id="awaits" className="w-full bg-[#FAF6F0] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#B85D2A] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
              <span>02 • EXPLORE THE EXPERIENCE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase leading-tight">
              What Awaits You
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5A453A] max-w-2xl">
              Seven immersive tracks curated to build your engineering depth, leadership fortitude, and professional community.
            </p>
          </div>
          <div className="font-mono text-xs font-bold text-[#8C6854]">
            [ 7 CORE MODULES ]
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-xl flex flex-col justify-between group ${exp.highlight
                ? "bg-[#3E1C0D] text-[#FAF6F0] border-[#B85D2A]/30 shadow-xl"
                : exp.isExpo
                  ? "bg-[#E8C5A8] text-[#2B1408] border-[#2B1408]/20 shadow-md"
                  : "bg-[#F4ECE3] text-slate-900 border-[#E2D4C5] hover:border-[#D4C0AD]"
                } ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${exp.highlight
                      ? "bg-white/10 text-[#E8C5A8]"
                      : exp.isExpo
                        ? "bg-[#2B1408] text-[#E8C5A8]"
                        : "bg-[#B85D2A]/10 text-[#B85D2A]"
                      }`}
                  >
                    {exp.icon}
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${exp.highlight
                      ? "bg-[#E8C5A8] text-[#2B1408]"
                      : exp.isExpo
                        ? "bg-[#2B1408] text-white"
                        : "bg-[#EADDCF] text-[#4A3020]"
                      }`}
                  >
                    {exp.tag}
                  </span>
                </div>

                <h3
                  className={`font-heading font-black text-xl sm:text-2xl tracking-tight uppercase leading-snug ${exp.highlight ? "text-[#FAF6F0]" : "text-slate-900"
                    }`}
                >
                  {exp.title}
                </h3>

                <p
                  className={`mt-3 text-xs sm:text-sm leading-relaxed ${exp.highlight
                    ? "text-[#FAF6F0]/80"
                    : exp.isExpo
                      ? "text-[#4A2818] font-medium"
                      : "text-[#5A453A]"
                    }`}
                >
                  {exp.description}
                </p>
              </div>

              {exp.isExpo ? (
                <div className="mt-6 pt-4 border-t border-[#2B1408]/15 flex items-center justify-between">
                  <button
                    onClick={onExploreExpoClick}
                    className="bg-[#2B1408] text-[#FAF6F0] px-4 py-2 rounded-full text-xs font-black tracking-wide uppercase hover:bg-[#3E1C0D] transition-colors shadow-sm"
                  >
                    Explore Project Expo →
                  </button>
                  <span className="text-xs font-mono font-bold text-[#2B1408]/60">
                    SJCET 2026
                  </span>
                </div>
              ) : (
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold ${exp.highlight
                    ? "border-white/15 text-[#E8C5A8]"
                    : "border-[#E2D4C5] text-[#7A6152]"
                    }`}
                >
                  <span>Track {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}