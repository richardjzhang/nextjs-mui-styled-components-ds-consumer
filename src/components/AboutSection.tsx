"use client";

import Box from "@mui/material/Box";
import {
  MissionSection,
  SectionHeader,
  StatCard,
  Divider,
  QuoteBlock,
} from "@richardjzhang/design-system";

export default function AboutSection() {
  return (
    <section id="about">
      <MissionSection />

      {/* Leadership quote */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
        <QuoteBlock
          quote="We exist in the space between corporate and startup. It's a place full of opportunity, tension, and potential."
          author="Toby Norton-Smith"
          role="CEO, x15ventures"
          variant="light"
        />
      </Box>

      {/* Key stats */}
      <Box sx={{ bgcolor: "#F0F2F5", px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1200, mx: "auto" }}>
          <SectionHeader
            eyebrow="x15 by the numbers"
            title="Impact at scale"
            subtitle="Driving outcomes for CommBank's 15 million customers and the Australian startup ecosystem."
            align="center"
          />
          <Divider spacing="lg" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
              mt: 4,
            }}
          >
            <StatCard
              label="Ventures Launched"
              value={7}
              change="2 in the last year"
              trend="up"
            />
            <StatCard
              label="Customers Reached"
              value="15M+"
              change="Through CommBank"
              trend="up"
            />
            <StatCard
              label="Active Investments"
              value={11}
              change="Across 3 categories"
              trend="neutral"
            />
            <StatCard
              label="Team Members"
              value="200+"
              change="And growing"
              trend="up"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
