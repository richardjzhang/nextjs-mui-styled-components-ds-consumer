"use client";

import {
  StyledHero,
  Navbar,
  Alert,
} from "@richardjzhang/design-system";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "People", href: "#people" },
  { label: "Jobs", href: "#jobs" },
];

export default function HeroSection() {
  return (
    <section style={{ position: "relative" }}>
      <Navbar
        title="x15ventures"
        items={NAV_ITEMS}
        elevation={0}
        variant="dark"
      />
      <StyledHero />
      <Alert
        severity="info"
        dismissible
        variant="filled"
      >
        {"Now accepting applications for the 2026 Xccelerate cohort. Apply before March 31."}
      </Alert>
    </section>
  );
}
