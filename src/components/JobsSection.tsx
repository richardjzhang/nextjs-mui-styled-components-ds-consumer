"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  DataTable,
  Badge,
  Divider,
  TextInput,
  ConfirmDialog,
} from "@richardjzhang/design-system";

interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
}

const SAMPLE_ROLES: Role[] = [
  { title: "Software Engineer", team: "Ventures", location: "Sydney", type: "Full-time" },
  { title: "Product Manager", team: "Core", location: "Sydney", type: "Full-time" },
  { title: "Data Analyst", team: "Ventures", location: "Melbourne", type: "Full-time" },
  { title: "UX Designer", team: "Core", location: "Sydney", type: "Contract" },
  { title: "DevOps Engineer", team: "Ventures", location: "Remote", type: "Full-time" },
  { title: "Growth Marketer", team: "Core", location: "Sydney", type: "Full-time" },
];

export default function JobsSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const handleApply = () => {
    setDialogOpen(false);
    setEmail("");
    setSelectedRole(null);
  };

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

        {/* Roles DataTable */}
        <Box
          sx={{
            mb: 5,
            "& .MuiPaper-root": {
              bgcolor: "#222",
              borderColor: "rgba(255,255,255,0.1)",
            },
            "& .MuiTableCell-root": {
              color: "rgba(255,255,255,0.8)",
              borderBottomColor: "rgba(255,255,255,0.08)",
            },
            "& .MuiTableCell-head": {
              bgcolor: "#2a2a2a",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 700,
            },
            "& .MuiTableRow-root:hover": {
              bgcolor: "rgba(255,255,255,0.03) !important",
            },
          }}
        >
          <DataTable<Record<string, unknown>>
            columns={[
              { key: "title", label: "Role" },
              { key: "team", label: "Team", render: (val) => (
                <Badge variant={val === "Ventures" ? "info" : "default"}>
                  {String(val)}
                </Badge>
              )},
              { key: "location", label: "Location" },
              { key: "type", label: "Type", render: (val) => (
                <Badge variant={val === "Full-time" ? "success" : "warning"}>
                  {String(val)}
                </Badge>
              )},
              {
                key: "title",
                label: "",
                align: "right" as const,
                render: (val) => (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedRole(String(val));
                      setDialogOpen(true);
                    }}
                    style={{ color: "#E6007E" }}
                  >
                    Apply
                  </Button>
                ),
              },
            ]}
            rows={SAMPLE_ROLES.map((r) => ({ ...r } as Record<string, unknown>))}
            rowKey="title"
          />
        </Box>

        <Divider spacing="lg" />

        {/* Newsletter signup using TextInput */}
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#FFFFFF",
              mb: 1,
            }}
          >
            {"Don't see the right role?"}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.5)",
              mb: 3,
              maxWidth: 500,
            }}
          >
            Join our talent community and be the first to know about new openings.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              maxWidth: 500,
              flexDirection: { xs: "column", sm: "row" },
              "& .MuiOutlinedInput-root": {
                color: "#FFFFFF",
                "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                "&:hover fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                "&.Mui-focused fieldset": { borderColor: "#E6007E" },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255,255,255,0.4)",
              },
            }}
          >
            <TextInput
              label="Email address"
              type="email"
              size="small"
            />
            <Button
              variant="primary"
              style={{
                backgroundColor: "#E6007E",
                color: "#FFFFFF",
                border: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Notify me
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Application ConfirmDialog */}
      <ConfirmDialog
        open={dialogOpen}
        title={`Apply for ${selectedRole}`}
        description="Enter your email and we'll send you the full application form."
        confirmLabel="Submit Application"
        cancelLabel="Cancel"
        confirmColor="primary"
        onConfirm={handleApply}
        onCancel={() => setDialogOpen(false)}
      >
        <Box sx={{ mt: 2 }}>
          <TextInput
            label="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
          />
        </Box>
      </ConfirmDialog>
    </Box>
  );
}
