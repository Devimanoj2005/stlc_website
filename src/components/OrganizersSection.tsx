"use client";

export default function OrganizersSection() {
  return (
    <section id="organizers" className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00] text-black px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-black/10 shadow-sm">
            <span>06 • POWERED BY IEEE COMSOC</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight uppercase leading-tight">
            The Organizers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Bringing together the student community and the professional network of IEEE Communications Society to encourage technical excellence, professional development, and meaningful collaboration.
          </p>
        </div>

        {/* Two Main Organizer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* SJCET Chapter Card */}
          <div className="bg-[#F8FAFC] border-2 border-slate-200 hover:border-black rounded-3xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider bg-[#0247FE] text-white px-3 py-1 rounded-full">
                  ORGANIZED BY
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Host Chapter
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <div className="font-heading font-black text-xl text-[#0247FE]">
                  SJCET
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl text-slate-900 tracking-tight uppercase">
                IEEE ComSoc SBC SJCET
              </h3>
              <p className="text-xs font-bold text-[#0247FE] uppercase tracking-wider mt-1">
                St. Joseph&apos;s College of Engineering & Technology, Palai
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                A vibrant student branch chapter dedicated to nurturing student leadership, technical exploration, and community-driven engineering initiatives in Kerala.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-700">
                SBC Palai, Kerala
              </span>
              <span className="text-xs font-bold text-[#0247FE] group-hover:underline">
                Student Branch Chapter
              </span>
            </div>
          </div>

          {/* Kerala Chapter Card */}
          <div className="bg-[#F8FAFC] border-2 border-slate-200 hover:border-black rounded-3xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider bg-[#CCFF00] text-black px-3 py-1 rounded-full border border-black/10">
                  IN ASSOCIATION WITH
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Sectional Chapter
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-black text-[#CCFF00] p-2 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <div className="font-heading font-black text-xl">
                  IEEE
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl text-slate-900 tracking-tight uppercase">
                IEEE ComSoc Kerala Chapter
              </h3>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">
                IEEE Communications Society, Kerala Section
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                The apex regional professional body for telecommunications, wireless, and computing engineers, empowering researchers and youth across Kerala.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-700">
                Kerala Section
              </span>
              <span className="text-xs font-bold text-[#0247FE] group-hover:underline">
                Professional Network
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}