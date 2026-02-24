"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: "#F5F5F5",
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
            color: "#1a1a1a",
            lineHeight: 1.3,
            textAlign: "center",
          }}
        >
          We build, buy, and invest in startups that would benefit from
          connections to Australia{"'"}s leading bank, and could improve the
          lives of its 15 million customers.
        </Typography>
      </Box>

      {/* Image grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            overflow: "hidden",
            height: { xs: 250, md: 380 },
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
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            overflow: "hidden",
            height: { xs: 250, md: 380 },
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
    </Box>
  );
}
