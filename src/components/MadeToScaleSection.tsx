"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Avatar, Divider } from "@richardjzhang/design-system";

const TEAM_MEMBERS = [
  { name: "Toby Norton-Smith", role: "CEO" },
  { name: "Georgia Harper", role: "COO" },
  { name: "James Chen", role: "CTO" },
  { name: "Sarah Mitchell", role: "Head of Ventures" },
  { name: "David Park", role: "Head of Investments" },
  { name: "Priya Sharma", role: "Head of Product" },
];

export default function MadeToScaleSection() {
  return (
    <Box
      component="section"
      id="people"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: { xs: "auto", md: "auto" },
      }}
    >
      {/* Left - Image */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          minHeight: { xs: 300, md: 600 },
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
            position: "absolute",
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

        {/* Leadership Team with Avatar */}
        <Box sx={{ mb: 4 }}>
          <Divider label="Leadership" spacing="md" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
              mt: 3,
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <Box
                key={member.name}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <Avatar name={member.name} size="sm" />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Button
            variant="outline"
            size="lg"
            style={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
            }}
          >
            Working at x15
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
