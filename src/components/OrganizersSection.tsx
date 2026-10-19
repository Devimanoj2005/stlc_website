"use client";

export default function OrganizersSection() {
  return (
    <section id="organizers" className="w-full bg-[#FAF6F0] py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-[#E8DACB]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-[#E8C5A8] text-[#2B1408] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-[#2B1408]/20 shadow-sm">
            <span>05 • POWERED BY IEEE COMSOC</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase leading-tight">
            The Organizers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A453A] font-medium leading-relaxed">
            Bringing together the student community and the professional network of IEEE Communications Society to encourage technical excellence, professional development, and meaningful collaboration.
          </p>
        </div>

        {/* Three Main Organizer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

          {/* IEEE SB SJCET Card */}
          <div className="bg-[#F4ECE3] border-2 border-[#E2D4C5] hover:border-[#2B1408] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider bg-[#B85D2A] text-white px-3 py-1 rounded-full">
                  ORGANIZED BY
                </span>
                <span className="font-mono text-xs font-bold text-[#7A6152]">
                  Student Branch
                </span>
              </div>

              <div className="h-16 w-fit bg-[#2B1408] border border-[#FAF3E8]/10 rounded-2xl px-4 py-2 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/ieeesb logo white.png"
                  alt="IEEE SB SJCET"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <h3 className="font-heading font-black text-2xl text-slate-900 tracking-tight uppercase">
                IEEE SB SJCET
              </h3>
              <p className="text-xs font-bold text-[#B85D2A] uppercase tracking-wider mt-1">
                St. Joseph&apos;s College of Engineering & Technology, Palai
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2D4C5] flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-700">
                SB Palai, Kerala
              </span>
              <span className="text-xs font-bold text-[#B85D2A] group-hover:underline">
                Student Branch
              </span>
            </div>
          </div>

          {/* SJCET Chapter Card */}
          <div className="bg-[#F4ECE3] border-2 border-[#E2D4C5] hover:border-[#2B1408] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider bg-[#B85D2A] text-white px-3 py-1 rounded-full">
                  ORGANIZED BY
                </span>
                <span className="font-mono text-xs font-bold text-[#7A6152]">
                  Host Chapter
                </span>
              </div>

              <div className="h-16 w-fit bg-[#2B1408] border border-[#FAF3E8]/10 rounded-2xl px-4 py-2 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/ieeecomSocSJCET.png"
                  alt="IEEE ComSoc SBC SJCET"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <h3 className="font-heading font-black text-2xl text-slate-900 tracking-tight uppercase">
                IEEE ComSoc SBC SJCET
              </h3>
              <p className="text-xs font-bold text-[#B85D2A] uppercase tracking-wider mt-1">
                St. Joseph&apos;s College of Engineering & Technology, Palai
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2D4C5] flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-700">
                SBC Palai, Kerala
              </span>
              <span className="text-xs font-bold text-[#B85D2A] group-hover:underline">
                Student Branch Chapter
              </span>
            </div>
          </div>

          {/* Kerala Chapter Card */}
          <div className="bg-[#F4ECE3] border-2 border-[#E2D4C5] hover:border-[#2B1408] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider bg-[#E8C5A8] text-[#2B1408] px-3 py-1 rounded-full border border-[#2B1408]/20">
                  IN ASSOCIATION WITH
                </span>
                <span className="font-mono text-xs font-bold text-[#7A6152]">
                  Sectional Chapter
                </span>
              </div>

              <div className="h-16 w-fit bg-[#2B1408] border border-[#FAF3E8]/10 rounded-2xl px-4 py-2 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <img
                  src="/comsoc-logo.png.png"
                  alt="IEEE ComSoc Kerala Chapter"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith(".png.png")) {
                      target.src = "/comsoc-logo.png";
                    }
                  }}
                />
              </div>

              <h3 className="font-heading font-black text-2xl text-slate-900 tracking-tight uppercase">
                IEEE ComSoc Kerala Chapter
              </h3>
              <p className="text-xs font-bold text-[#5A453A] uppercase tracking-wider mt-1">
                IEEE Communications Society, Kerala Section
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2D4C5] flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-700">
                Kerala Section
              </span>
              <span className="text-xs font-bold text-[#B85D2A] group-hover:underline">
                Professional Network
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}