"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@richardjzhang/design-system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SAMPLE_ROLES = [
  { title: "Software Engineer", team: "Ventures", location: "Sydney" },
  { title: "Product Manager", team: "Core", location: "Sydney" },
  { title: "Data Analyst", team: "Ventures", location: "Melbourne" },
  { title: "UX Designer", team: "Core", location: "Sydney" },
];

export default function JobsSection() {
  return (
    <Box
      component="section"
      id="jobs"
      sx={{
        bgcolor: "#1a1a1a",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        color: "#FFFFFF",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            fontWeight: 400,
            mb: 2,
            color: "#FFFFFF",
          }}
        >
          Join our team
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.55)",
            mb: 6,
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          {"We're always looking for talented people to help us build the future of banking. Explore open roles across our venture and core teams."}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {SAMPLE_ROLES.map((role, i) => (
            <Box key={role.title}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 3,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 0.7 },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#FFFFFF",
                      mb: 0.5,
                    }}
                  >
                    {role.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {role.team} &middot; {role.location}
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  sx={{ color: "rgba(255,255,255,0.4)", fontSize: 20 }}
                />
              </Box>
              {i < SAMPLE_ROLES.length - 1 && (
                <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }} />
              )}
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 5 }}>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#E6007E",
              color: "#FFFFFF",
              border: "none",
              padding: "14px 32px",
              fontSize: "1rem",
            }}
          >
            View all open roles
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
