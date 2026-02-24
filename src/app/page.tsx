"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MadeToScaleSection from "@/components/MadeToScaleSection";
import PortfolioSection from "@/components/PortfolioSection";
import JobsSection from "@/components/JobsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <MadeToScaleSection />
        <PortfolioSection />
        <JobsSection />
      </main>
      <Footer />
    </>
  );
}
