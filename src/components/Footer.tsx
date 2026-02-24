"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111111",
        py: { xs: 5, md: 6 },
        px: { xs: 3, md: 8 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 3,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "#FFFFFF",
              mb: 1,
            }}
          >
            x15ventures
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            A venture scaler powered by CommBank
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {["Home", "About", "Portfolio", "People", "Jobs"].map((item) => (
            <Typography
              key={item}
              component="a"
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              sx={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
                "&:hover": { color: "#FFFFFF" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          mt: 4,
          pt: 3,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          {"x15ventures acknowledges the traditional custodians of the lands upon which we live, work and learn."}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.25)",
            mt: 1,
          }}
        >
          {"© 2026 x15ventures. All rights reserved."}
        </Typography>
      </Box>
    </Box>
  );
}
