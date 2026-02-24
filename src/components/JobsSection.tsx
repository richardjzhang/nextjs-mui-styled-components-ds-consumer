"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import {
  SectionHeader,
  DataTable,
  Badge,
  Button,
  Divider,
  TextInput,
  ConfirmDialog,
  Avatar,
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

const TEAM_MEMBERS = [
  { name: "Toby Norton-Smith", role: "CEO" },
  { name: "Georgia Harper", role: "COO" },
  { name: "James Chen", role: "CTO" },
  { name: "Sarah Mitchell", role: "Head of Ventures" },
  { name: "David Park", role: "Head of Investments" },
  { name: "Priya Sharma", role: "Head of Product" },
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
        bgcolor: "#1A1D23",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        color: "#FFFFFF",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          eyebrow="careers"
          title="Join our team"
          subtitle="We're always looking for talented people to help us build the future of banking."
          variant="dark"
        />

        {/* Leadership team preview with Avatars */}
        <Box sx={{ mt: 5, mb: 6 }}>
          <Divider label="Leadership" spacing="md" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: 2,
              mt: 3,
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <Box
                key={member.name}
                sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1 }}
              >
                <Avatar name={member.name} size="sm" />
                <Box>
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#7B8FA1",
                    }}
                  >
                    {member.role}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider label="Open Roles" spacing="lg" />

        {/* Roles DataTable */}
        <Box
          sx={{
            mt: 4,
            mb: 5,
            "& .MuiPaper-root": {
              bgcolor: "#2B3039",
              borderColor: "#3E444E",
            },
            "& .MuiTableCell-root": {
              color: "rgba(255,255,255,0.8)",
              borderBottomColor: "#3E444E",
            },
            "& .MuiTableCell-head": {
              bgcolor: "#343A44",
              color: "#7B8FA1",
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
              {
                key: "team",
                label: "Team",
                render: (val) => (
                  <Badge variant={val === "Ventures" ? "info" : "default"}>
                    {String(val)}
                  </Badge>
                ),
              },
              { key: "location", label: "Location" },
              {
                key: "type",
                label: "Type",
                render: (val) => (
                  <Badge variant={val === "Full-time" ? "success" : "warning"}>
                    {String(val)}
                  </Badge>
                ),
              },
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
                    style={{ color: "#FF0080" }}
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

        {/* Newsletter signup with TextInput */}
        <Box sx={{ mt: 5 }}>
          <SectionHeader
            eyebrow="stay connected"
            title="Don't see the right role?"
            subtitle="Join our talent community and be the first to know about new openings."
            variant="dark"
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              maxWidth: 500,
              flexDirection: { xs: "column", sm: "row" },
              mt: 3,
              "& .MuiOutlinedInput-root": {
                color: "#FFFFFF",
                "& fieldset": { borderColor: "#3E444E" },
                "&:hover fieldset": { borderColor: "#7B8FA1" },
                "&.Mui-focused fieldset": { borderColor: "#FF0080" },
              },
              "& .MuiInputLabel-root": { color: "#7B8FA1" },
            }}
          >
            <TextInput label="Email address" type="email" size="small" />
            <Button
              variant="primary"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Notify me
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ConfirmDialog for job application */}
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
