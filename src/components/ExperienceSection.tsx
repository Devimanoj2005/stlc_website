"use client";

export default function ExperienceSection() {
  const pillars = [
    {
      title: "LEARN",
      tagline: "Move Beyond Theory",
      description:
        "Engage directly with industry leaders and researchers uncovering emerging paradigms in communications and computing.",
      number: "01",
      accent: "bg-[#B85D2A] text-white",
      badge: "#DeepTech",
    },
    {
      title: "COLLABORATE",
      tagline: "Build Lifelong Alliances",
      description:
        "Exchange bold ideas with peers, IEEE members, and multidisciplinary teams across universities in Kerala and beyond.",
      number: "02",
      accent: "bg-[#2B1408] text-[#FAF6F0]",
      badge: "#CoCreation",
    },
    {
      title: "INNOVATE",
      tagline: "Ideas Into Action",
      description:
        "Put concepts to the test through hands-on technical workshops, live prototyping, and creative problem solving.",
      number: "03",
      accent: "bg-[#E8C5A8] text-[#2B1408]",
      badge: "#NextGen",
    },
    {
      title: "LEAD",
      tagline: "Drive Real-World Impact",
      description:
        "Cultivate critical decision-making, executive communication, and team mentorship skills essential for the global tech landscape.",
      number: "04",
      accent: "bg-[#F4F6F9] text-slate-900 border border-slate-300",
      badge: "#TechLeadership",
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#F5ECE1] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-[#E2D4C5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#E8C5A8] text-[#2B1408] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-[#2B1408]/20 shadow-sm">
            <span>02 • MORE THAN A CONFERENCE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight leading-tight uppercase">
            The SYNORA Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#5A453A] font-medium leading-relaxed">
            Step beyond the classroom and experience two days of learning, collaboration, and discovery. Engage with experts, exchange ideas with fellow innovators, develop your leadership potential, and explore opportunities that connect technology with real-world impact.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#7A6152] font-normal">
            From practical learning experiences to insightful discussions with industry professionals, SYNORA 2026 brings together the people, ideas, and opportunities that can shape your future.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-6 sm:p-6 lg:p-5 xl:p-6 border border-[#E2D4C5] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-slate-400 shrink-0">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#F3E9DD] text-[#5A3525] shrink-0">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl sm:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 tracking-tight uppercase break-words">
                  {item.title}
                </h3>
                <h4 className="text-xs font-bold text-[#B85D2A] uppercase tracking-wider mt-1">
                  {item.tagline}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-[#5A453A] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-900 group-hover:text-[#B85D2A] transition-colors">
                  Explore Pillar
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#E8C5A8] flex items-center justify-center transition-colors">
                  <svg
                    className="w-3.5 h-3.5 text-[#2B1408]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Motto Strip */}
        <div className="mt-12 bg-[#2B1408] text-[#FAF6F0] rounded-2xl p-4 sm:p-6 flex flex-wrap items-center justify-around gap-4 text-center font-heading font-black text-sm sm:text-base md:text-xl tracking-wider uppercase border border-[#FAF6F0]/10">
          <span className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-[#E8C5A8]" />
            Learn
          </span>
          <span className="text-[#8C6854]">•</span>
          <span className="flex items-center gap-2 text-[#E8C5A8]">
            <span className="w-2 h-2 rounded-full bg-white" />
            Collaborate
          </span>
          <span className="text-[#8C6854]">•</span>
          <span className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-[#E8C5A8]" />
            Innovate
          </span>
          <span className="text-[#8C6854]">•</span>
          <span className="flex items-center gap-2 text-[#E8C5A8]">
            <span className="w-2 h-2 rounded-full bg-white" />
            Lead
          </span>
        </div>

      </div>
    </section>
  );
}