"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseCards from "@/components/ShowcaseCards";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WhatAwaitsSection from "@/components/WhatAwaitsSection";
import ProjectExpoSection from "@/components/ProjectExpoSection";
import WhySTLCSection from "@/components/WhySTLCSection";
import OrganizersSection from "@/components/OrganizersSection";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isExpoOpen, setIsExpoOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0247FE] selection:bg-[#CCFF00] selection:text-black">
      {/* Top Navbar */}
      <Navbar onRegisterClick={() => setIsRegisterOpen(true)} />

      {/* Hero Section with blueprint grid and giant neo-brutalist graphic typography */}
      <div className="relative w-full bg-grid-pattern">
        <Hero
          onRegisterClick={() => setIsRegisterOpen(true)}
          onExploreExpoClick={() => setIsExpoOpen(true)}
        />
      </div>

      {/* Showcase Cards - White curved top section directly under the hero */}
      <main className="flex-1 flex flex-col w-full">
        <ShowcaseCards
          onRegisterClick={() => setIsRegisterOpen(true)}
          onExploreExpoClick={() => setIsExpoOpen(true)}
        />

        {/* 01. ABOUT STLC 2026 */}
        <AboutSection />

        {/* 02. THE STLC EXPERIENCE */}
        <ExperienceSection />

        {/* 03. WHAT AWAITS YOU */}
        <WhatAwaitsSection onExploreExpoClick={() => setIsExpoOpen(true)} />

        {/* 04. PROJECT EXPO */}
        <ProjectExpoSection onExploreExpoClick={() => setIsExpoOpen(true)} />

        {/* 05. WHY STLC 2026? */}
        <WhySTLCSection onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* 06. ORGANIZERS */}
        <OrganizersSection />
      </main>

      {/* Footer */}
      <Footer onRegisterClick={() => setIsRegisterOpen(true)} />

      {/* Interactive Registration and Expo Modals */}
      <Modals
        isRegisterOpen={isRegisterOpen}
        isExpoOpen={isExpoOpen}
        onCloseRegister={() => setIsRegisterOpen(false)}
        onCloseExpo={() => setIsExpoOpen(false)}
      />
    </div>
  );
}