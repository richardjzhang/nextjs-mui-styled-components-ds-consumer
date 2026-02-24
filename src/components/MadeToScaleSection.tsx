"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@richardjzhang/design-system";

export default function MadeToScaleSection() {
  return (
    <Box
      component="section"
      id="people"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: { xs: "auto", md: "80vh" },
      }}
    >
      {/* Left - Image */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          minHeight: { xs: 300, md: "auto" },
        }}
      >
        <Box
          component="img"
          src="/images/rocket.jpg"
          alt="Stylised photo of an X-15 rocket"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: { md: "absolute" },
            inset: 0,
          }}
        />
      </Box>

      {/* Right - Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "#1a1a1a",
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 8 },
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 400,
            lineHeight: 1.2,
            mb: 3,
            color: "#FFFFFF",
          }}
        >
          {"We're made to scale."}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.125rem", md: "1.25rem" },
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            mb: 1,
          }}
        >
          To move and grow, learn and thrive.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            mb: 4,
            maxWidth: 480,
          }}
        >
          {"We're human. Real people, getting stuck in and doing the work. We come together as a team to drive and deliver new ideas, capability, and innovations that'll help shape the bank of the future."}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.5)",
            mb: 3,
          }}
        >
          Discover how you can scale your impact as a part of our venture or
          core teams.
        </Typography>

        <Box>
          <Button
            variant="outline"
            style={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
              padding: "12px 28px",
            }}
          >
            Working at x15
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
