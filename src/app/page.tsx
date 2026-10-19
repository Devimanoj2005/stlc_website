"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectExpoSection from "@/components/ProjectExpoSection";
import WhySTLCSection from "@/components/WhySTLCSection";
import EventTimelineSection from "@/components/EventTimelineSection";
import OrganizersSection from "@/components/OrganizersSection";
import Footer from "@/components/Footer";
import Modals from "@/components/Modals";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isExpoOpen, setIsExpoOpen] = useState(false);

  return (
    <div className="selection:bg-[#E8C5A8] selection:text-[#2B1408]">
      {/* Navbar + Hero fills exactly one full viewport */}
      <div className="min-h-screen flex flex-col bg-[#3E1C0D]">
        <Navbar onRegisterClick={() => setIsRegisterOpen(true)} />
        <div className="relative flex-1 flex flex-col bg-grid-pattern overflow-hidden">
          {/* Warm Ambient Glow matching synora lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(184,93,42,0.25),transparent_70%)] pointer-events-none" />
          <Hero
            onRegisterClick={() => setIsRegisterOpen(true)}
            onExploreExpoClick={() => setIsExpoOpen(true)}
          />
        </div>
      </div>

      <main className="flex flex-col w-full">
        {/* 01. ABOUT STLC 2026 */}
        <AboutSection onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* 02. PROJECT EXPO */}
        <ProjectExpoSection onExploreExpoClick={() => setIsExpoOpen(true)} />

        {/* 03. EVENTS */}
        <WhySTLCSection onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* 04. EVENT TIMELINE */}
        <EventTimelineSection />

        {/* 05. ORGANIZERS */}
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