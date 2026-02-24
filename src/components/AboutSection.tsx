"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, StatCard } from "@richardjzhang/design-system";

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: "#FFFFFF",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Mission statement */}
      <Box sx={{ maxWidth: 960, mx: "auto", mb: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.75rem" },
            fontWeight: 400,
            color: "#2D2D2D",
            lineHeight: 1.3,
            textAlign: "center",
          }}
        >
          We build, buy, and invest in startups that would benefit from
          connections to Australia{"'"}s leading bank, and could improve the
          lives of its 15 million customers.
        </Typography>
      </Box>

      {/* Asymmetric image layout */}
      <Box
        sx={{
          position: "relative",
          maxWidth: 1200,
          mx: "auto",
          height: { xs: "auto", md: 480 },
          display: { xs: "flex", md: "block" },
          flexDirection: { xs: "column" },
          gap: { xs: 2, md: 0 },
          mb: { xs: 6, md: 10 },
        }}
      >
        {/* Small image - bottom left */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            left: 0,
            bottom: 0,
            width: { xs: "100%", md: "22%" },
            height: { xs: 200, md: 200 },
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src="/images/team-office.jpg"
            alt="x15ventures team collaborating in office"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Large image - right side */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: 0,
            top: 0,
            width: { xs: "100%", md: "55%" },
            height: { xs: 300, md: "100%" },
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src="/images/team-walking.jpg"
            alt="x15ventures team walking through office"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Key stats using StatCard */}
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Divider label="x15 by the numbers" spacing="lg" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
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
  );
}
