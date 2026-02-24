"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import JobsSection from "@/components/JobsSection";
import ValuesSection from "@/components/ValuesSection";

import {
  CorporateSection,
  SpaceBetween,
  WorkAtX15,
  StyledFooter,
  CTABanner,
} from "@richardjzhang/design-system";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <CorporateSection />
        <ValuesSection />
        <PortfolioSection />
        <SpaceBetween />
        <WorkAtX15 />
        <JobsSection />
        <CTABanner
          title="Ready to build the future of banking?"
          subtitle="Whether you're a founder, investor, or looking for your next role — we'd love to hear from you."
          buttonLabel="Get in touch"
          buttonHref="#jobs"
          variant="primary"
        />
      </main>
      <StyledFooter />
    </>
  );
}
