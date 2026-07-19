"use client";

import dynamic from "next/dynamic";
import ContactSection from "./components/landing/ContactSection";
import HowWeWorkSection from "./components/landing/HowWeWorkSection";
import PartnersSection from "./components/landing/PartnersSection";
import ProjectsSection from "./components/landing/ProjectsSection";
import ScrollHero from "./components/landing/ScrollHero";
import ServicesSection from "./components/landing/ServicesSection";
import SiteFooter from "./components/landing/SiteFooter";
import SiteNav from "./components/landing/SiteNav";
import { LanguageProvider } from "./i18n/LanguageProvider";

const AboutSection = dynamic(
  () => import("./components/landing/AboutSection"),
  {
    loading: () => (
      <section
        id="about"
        className="relative min-h-screen w-full bg-[#1f3d34]"
        aria-hidden
      />
    ),
  },
);

export default function ScrollLanding() {
  return (
    <LanguageProvider>
      <SiteNav />
      <main>
        <ScrollHero />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        {/* <ProjectsSection /> */}
        {/* <PartnersSection /> */}
        {/* <HowWeWorkSection /> */}
        <ContactSection />
        <SiteFooter />
      </main>
    </LanguageProvider>
  );
}
