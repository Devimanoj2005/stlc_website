"use client";

interface WhySTLCSectionProps {
  onRegisterClick: () => void;
}

const events = [
  {
    id: "talk",
    name: "Talk Session",
    description: "Hear from IEEE experts and industry leaders on the latest in tech and communications engineering.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    dark: true,
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Move beyond theory with hands-on technical sessions building real, deployable skills.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    dark: false,
  },
  {
    id: "games",
    name: "Games",
    description: "Energetic team challenges and fun competitive events to spark camaraderie.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    dark: false,
  },
  {
    id: "expo",
    name: "Project Expo",
    description: "Showcase your innovations to evaluators, mentors, and prospective collaborators.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: true,
  },
  {
    id: "cultural",
    name: "Cultural Night",
    description: "An evening of performances, celebration, and shared experience with fellow attendees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    dark: false,
  },
  {
    id: "yp",
    name: "YP Session",
    description: "Young professionals share real-world journeys bridging campus to career.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    dark: false,
  },
  {
    id: "ice",
    name: "Ice Breaking Session",
    description: "Kick things off with interactive activities designed to connect participants from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
      </svg>
    ),
    dark: false,
    wide: true,
  },
];

export default function WhySTLCSection({ onRegisterClick }: WhySTLCSectionProps) {
  return (
    <section id="why-stlc" className="w-full bg-[#F5ECE1] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-[#E2D4C5] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#B85D2A] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
              <span>03 • EVENTS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase leading-tight">
              What&apos;s On
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5A453A] max-w-2xl">
              Seven curated events packed into two immersive days of learning, connecting, and growing.
            </p>
          </div>
          <div className="font-mono text-xs font-bold text-[#8C6854]">
            [ 7 EVENTS ]
          </div>
        </div>

        {/* Events Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`rounded-3xl p-5 sm:p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group
                ${event.wide ? "sm:col-span-2" : "col-span-1"}
                ${event.dark
                  ? "bg-[#3E1C0D] text-[#FAF6F0] border-[#B85D2A]/30 shadow-xl"
                  : event.accent
                  ? "bg-[#E8C5A8] text-[#2B1408] border-[#2B1408]/20 shadow-md"
                  : "bg-[#F4ECE3] text-slate-900 border-[#E2D4C5] hover:border-[#D4C0AD]"
                }`}
            >
              <div>
                {/* Icon + Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center
                    ${event.dark
                      ? "bg-white/10 text-[#E8C5A8]"
                      : event.accent
                      ? "bg-[#2B1408] text-[#E8C5A8]"
                      : "bg-[#B85D2A]/10 text-[#B85D2A]"
                    }`}
                  >
                    {event.icon}
                  </div>
                  <span className={`font-mono text-xs font-black ${event.dark ? "text-[#E8C5A8]/50" : "text-slate-400"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-heading font-black text-lg sm:text-xl tracking-tight uppercase leading-snug
                  ${event.dark ? "text-[#FAF6F0]" : "text-slate-900"}`}
                >
                  {event.name}
                </h3>

                {/* Description */}
                <p className={`mt-2 text-xs sm:text-sm leading-relaxed
                  ${event.dark
                    ? "text-[#FAF6F0]/70"
                    : event.accent
                    ? "text-[#4A2818] font-medium"
                    : "text-[#5A453A]"
                  }`}
                >
                  {event.description}
                </p>
              </div>

              {/* Bottom rule */}
              <div className={`mt-5 pt-4 border-t flex items-center justify-between text-[11px] font-bold uppercase tracking-wider
                ${event.dark
                  ? "border-white/10 text-[#E8C5A8]/50"
                  : event.accent
                  ? "border-[#2B1408]/15 text-[#2B1408]/50"
                  : "border-[#E2D4C5] text-[#8C6854]"
                }`}
              >
                <span>SYNORA &apos;26</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#FAF6F0] rounded-3xl p-8 border-2 border-[#2B1408] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
              Ready to experience it all?
            </h3>
            <p className="text-sm text-[#5A453A] mt-1">
              Seats are limited for the residential summit. Secure your spot now.
            </p>
          </div>
          <button
            onClick={onRegisterClick}
            className="bg-[#B85D2A] hover:bg-[#96471B] text-white font-heading font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all duration-200 shrink-0"
          >
            Claim Your Spot →
          </button>
        </div>

      </div>
    </section>
  );
}
