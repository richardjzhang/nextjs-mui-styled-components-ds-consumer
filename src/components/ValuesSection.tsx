"use client";

import Box from "@mui/material/Box";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  SectionHeader,
  IconCard,
  ValueCard,
  Divider,
} from "@richardjzhang/design-system";

export default function ValuesSection() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#2B3039", px: { xs: 3, md: 6 }, py: { xs: 8, md: 10 } }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          eyebrow="our approach"
          title="How we build"
          subtitle="We combine startup speed with corporate scale to create ventures that matter."
          variant="dark"
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mt: 6,
          }}
        >
          <IconCard
            icon={<RocketLaunchIcon sx={{ fontSize: 40 }} />}
            title="Build & Launch"
            description="We ideate, validate, and build new digital ventures from scratch, leveraging CommBank's customer base and data insights."
            variant="dark"
          />
          <IconCard
            icon={<GroupsIcon sx={{ fontSize: 40 }} />}
            title="Invest & Partner"
            description="We invest in early-stage startups that align with CommBank's strategic priorities and can benefit from our distribution capabilities."
            variant="dark"
          />
          <IconCard
            icon={<TrendingUpIcon sx={{ fontSize: 40 }} />}
            title="Scale & Grow"
            description="We help ventures scale by connecting them with CommBank's 15 million customers, brand trust, and regulatory expertise."
            variant="dark"
          />
        </Box>

        <Divider spacing="lg" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
            mt: 4,
          }}
        >
          <ValueCard
            title="Customer Obsession"
            description="Everything starts with the customer. We build products that solve real problems and improve financial wellbeing."
            variant="dark"
          />
          <ValueCard
            title="Velocity with Purpose"
            description="We move fast, but not recklessly. Every sprint is backed by data, user research, and strategic alignment."
            variant="dark"
          />
          <ValueCard
            title="Founder Mentality"
            description="We think and act like founders. Ownership, accountability, and a bias for action define how we work."
            variant="dark"
          />
          <ValueCard
            title="Open Collaboration"
            description="We break silos between corporate and startup. Our best ideas emerge from diverse perspectives working together."
            variant="dark"
          />
        </Box>
      </Box>
    </Box>
  );
}
