"use client";

interface WhySTLCSectionProps {
  onRegisterClick: () => void;
}

export default function WhySTLCSection({ onRegisterClick }: WhySTLCSectionProps) {
  const reasons = [
    {
      title: "Learn from Experts",
      description:
        "Direct access to recognized industry veterans, IEEE ComSoc senior researchers, and distinguished keynote speakers.",
      icon: "🎯",
      color: "border-l-4 border-l-[#0247FE]",
    },
    {
      title: "Build Practical Skills",
      description:
        "Hands-on technical workshops that move beyond textbook theory to concrete, deployable skills in communications tech.",
      icon: "⚡",
      color: "border-l-4 border-l-[#CCFF00]",
    },
    {
      title: "Grow as a Leader",
      description:
        "Immersive leadership activities and team challenges that nurture executive decision-making and cross-disciplinary empathy.",
      icon: "👑",
      color: "border-l-4 border-l-black",
    },
    {
      title: "Discover Career Opportunities",
      description:
        "Gain authentic visibility into job market dynamics, industry expectations, and transition blueprints for young engineers.",
      icon: "🚀",
      color: "border-l-4 border-l-[#0247FE]",
    },
    {
      title: "Connect and Collaborate",
      description:
        "Forge enduring connections with IEEE members, ambitious student peers, and alumni networks across Kerala and beyond.",
      icon: "🤝",
      color: "border-l-4 border-l-[#CCFF00]",
    },
    {
      title: "Showcase Innovation",
      description:
        "A platform to spotlight your hardware and software prototypes in front of evaluators, mentors, and prospective partners.",
      icon: "💡",
      color: "border-l-4 border-l-black",
    },
  ];

  return (
    <section id="why-stlc" className="w-full bg-[#FAFAFC] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-[#0247FE]/10 text-[#0247FE] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <span>05 • YOUR NEXT STEP STARTS HERE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase leading-tight">
            Why STLC 2026?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            STLC 2026 brings together the essential elements of professional growth in one immersive, two-day residential experience.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-mono text-xs font-black text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-heading font-black text-xl text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0247FE] uppercase tracking-wider">
                  STLC Pillar
                </span>
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] border border-black/20" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 bg-white rounded-3xl p-8 border-2 border-black shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
              Ready to take the next step?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Seats are limited for the residential summit. Secure your spot now.
            </p>
          </div>
          <button
            onClick={onRegisterClick}
            className="bg-[#0247FE] hover:bg-blue-700 text-white font-heading font-black px-8 py-3.5 rounded-full text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all duration-200 shrink-0"
          >
            Claim Your Spot →
          </button>
        </div>

      </div>
    </section>
  );
}