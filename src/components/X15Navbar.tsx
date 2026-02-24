"use client";

import { Navbar } from "@richardjzhang/design-system";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "People", href: "#people" },
  { label: "Jobs", href: "#jobs" },
];

export default function X15Navbar() {
  return <Navbar title="x15ventures" items={NAV_ITEMS} elevation={0} />;
}
