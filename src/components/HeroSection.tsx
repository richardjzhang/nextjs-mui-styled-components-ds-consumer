"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@richardjzhang/design-system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import X15Navbar from "./X15Navbar";

export default function HeroSection() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/images/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(45, 45, 50, 0.75)",
          zIndex: 0,
        }}
      />

      {/* Navbar sitting inside the hero so it blends with dark bg */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <X15Navbar />
      </Box>

      {/* Large watermark text */}
      <Typography
        sx={{
          position: "absolute",
          bottom: -20,
          left: 0,
          right: 0,
          fontSize: { xs: "15vw", md: "12vw" },
          fontWeight: 800,
          color: "rgba(255, 255, 255, 0.04)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
          zIndex: 0,
          userSelect: "none",
          overflow: "hidden",
        }}
      >
        x15ventures
      </Typography>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          px: { xs: 3, md: 8 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pb: 8,
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            display: "inline-block",
            px: { xs: 3, md: 5 },
            py: { xs: 2, md: 4 },
            mb: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "4.5rem",
              },
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {"We\u2019re a venture scaler"}
            <br />
            powered by CommBank
          </Typography>
        </Box>

        <Box>
          <Button
            variant="primary"
            onClick={handleScroll}
            style={{
              backgroundColor: "#E6007E",
              color: "#FFFFFF",
              border: "none",
              padding: "14px 32px",
              fontSize: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {"Who are we?"}
            <ArrowDownwardIcon sx={{ fontSize: 18 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
