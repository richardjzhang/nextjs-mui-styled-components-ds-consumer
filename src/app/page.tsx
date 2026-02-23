"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Button,
  Avatar,
  Badge,
  StatCard,
  Skeleton,
  Divider,
  Alert,
  Navbar,
  ConfirmDialog,
  TextInput,
  DataTable,
  TabPanel,
} from "@richardjzhang/design-system";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "#" },
];

const TABLE_DATA = [
  { id: 1, name: "Alice Chen", role: "Engineer", status: "Active" },
  { id: 2, name: "Bob Rivera", role: "Designer", status: "Away" },
  { id: 3, name: "Carol Patel", role: "PM", status: "Active" },
  { id: 4, name: "Dan Kim", role: "Engineer", status: "Offline" },
];

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Navbar title="Consumer App" items={NAV_ITEMS} />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
          Design System Consumer
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2, maxWidth: 600 }}
        >
          This app imports every component from{" "}
          <strong>@richardjzhang/design-system</strong> to verify the package
          works end-to-end in a separate Next.js project.
        </Typography>

        <Divider label="Styled Components" spacing="lg" />

        {/* Buttons */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Button
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </Box>

        {/* Avatar */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Avatar
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar name="Alice Chen" size="sm" />
          <Avatar name="Bob Rivera" size="md" />
          <Avatar name="Carol Patel" size="lg" />
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            alt="Demo user"
            name="Demo"
            size="lg"
          />
        </Box>

        {/* Badge */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Badge
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <Badge>Default</Badge>
          <Badge variant="success" dot>
            Active
          </Badge>
          <Badge variant="warning" dot>
            Pending
          </Badge>
          <Badge variant="error" dot>
            Failed
          </Badge>
          <Badge variant="info">New</Badge>
        </Box>

        {/* StatCard */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Stat Card
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          <StatCard
            label="Revenue"
            value="$48.2k"
            change="+12.5% from last month"
            trend="up"
          />
          <StatCard
            label="Users"
            value="2,847"
            change="+4.3% from last week"
            trend="up"
          />
          <StatCard
            label="Bounce Rate"
            value="34.1%"
            change="+2.1% from yesterday"
            trend="down"
          />
          <StatCard
            label="Avg. Session"
            value="4m 32s"
            change="No change"
            trend="neutral"
          />
        </Box>

        {/* Skeleton */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Skeleton
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="circular" width={48} height={48} />
            <Box sx={{ mt: 1.5 }}>
              <Skeleton lines={3} />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="rectangular" height={120} />
          </Box>
        </Box>

        {/* Divider */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Divider
        </Typography>
        <Divider />
        <Divider label="Or continue with" />
        <Divider label="Section" spacing="lg" />

        <Divider label="MUI Components" spacing="lg" />

        {/* Alert */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Alert
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Alert severity="success" title="Success">
            Operation completed successfully.
          </Alert>
          <Alert severity="info">This is an informational message.</Alert>
          <Alert severity="warning" variant="outlined" dismissible>
            This warning can be dismissed.
          </Alert>
          <Alert severity="error" variant="filled">
            Something went wrong. Please try again.
          </Alert>
        </Box>

        {/* ConfirmDialog */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Confirm Dialog
        </Typography>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          Open Confirm Dialog
        </Button>
        <ConfirmDialog
          open={dialogOpen}
          title="Delete item?"
          description="This action cannot be undone. The item and all associated data will be permanently removed."
          confirmLabel="Delete"
          confirmColor="error"
          onConfirm={() => setDialogOpen(false)}
          onCancel={() => setDialogOpen(false)}
        />

        {/* TextInput */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Text Input
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <TextInput label="Name" placeholder="Enter your name" />
          <TextInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            helperText="We'll never share your email."
          />
          <TextInput
            label="Password"
            type="password"
            error
            helperText="Password must be at least 8 characters."
          />
          <TextInput label="Disabled" disabled value="Cannot edit" />
        </Box>

        {/* DataTable */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Data Table
        </Typography>
        <DataTable
          columns={[
            { key: "id", label: "ID", align: "center" },
            { key: "name", label: "Name" },
            { key: "role", label: "Role" },
            {
              key: "status",
              label: "Status",
              render: (value) => (
                <Badge
                  variant={
                    value === "Active"
                      ? "success"
                      : value === "Away"
                        ? "warning"
                        : "default"
                  }
                  dot
                >
                  {String(value)}
                </Badge>
              ),
            },
          ]}
          rows={TABLE_DATA}
          rowKey="id"
        />

        {/* TabPanel */}
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Tab Panel
        </Typography>
        <TabPanel
          tabs={[
            {
              label: "Overview",
              content: (
                <Typography>
                  This is the overview tab. Tab panels handle keyboard
                  navigation, focus management, and ARIA attributes automatically
                  via MUI.
                </Typography>
              ),
            },
            {
              label: "Analytics",
              content: (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                    gap: 2,
                  }}
                >
                  <StatCard
                    label="Views"
                    value="12.4k"
                    change="+8%"
                    trend="up"
                  />
                  <StatCard
                    label="Clicks"
                    value="1,023"
                    change="-3%"
                    trend="down"
                  />
                  <StatCard
                    label="CTR"
                    value="8.2%"
                    change="Stable"
                    trend="neutral"
                  />
                </Box>
              ),
            },
            {
              label: "Settings",
              content: (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: 400,
                  }}
                >
                  <TextInput label="Display Name" defaultValue="John Doe" />
                  <TextInput
                    label="Bio"
                    multiline
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                  <Button variant="primary">Save Changes</Button>
                </Box>
              ),
            },
          ]}
        />

        <Box sx={{ py: 4 }} />
      </Container>
    </>
  );
}
