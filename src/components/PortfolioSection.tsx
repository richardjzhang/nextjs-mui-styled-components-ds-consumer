"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Badge, TabPanel, Divider } from "@richardjzhang/design-system";

interface Venture {
  name: string;
  year: string;
  category: string;
  description: string;
  type: "built" | "early" | "xccelerate";
}

const VENTURES: Venture[] = [
  {
    name: "Home-in",
    year: "2020",
    category: "Home",
    description:
      "Home-in simplifies the complex process of buying a home. It helps buyers navigate the home buying journey and reach settlement with certainty.",
    type: "built",
  },
  {
    name: "Credit Savvy",
    year: "2020",
    category: "Everyday",
    description:
      "Credit Savvy helps Australians to access, understand and protect their credit reputation.",
    type: "built",
  },
  {
    name: "Doshii",
    year: "2021",
    category: "Business",
    description:
      "Doshii gets hospitality apps talking to a venue's POS (point of sale platform), helping business owners spend less of their time on tech, and more on customers.",
    type: "built",
  },
  {
    name: "Unloan",
    year: "2022",
    category: "Home",
    description:
      "Unloan is a new kind of home loan with one great rate, 10-minute application time, and a discount that gets better and better.",
    type: "built",
  },
  {
    name: "Kit",
    year: "2022",
    category: "Everyday",
    description:
      "Kit is an earning-and-learning, mindfully-spending, money-mastering pocket money app and prepaid card for young Australians.",
    type: "built",
  },
  {
    name: "Waddle",
    year: "2023",
    category: "Business",
    description:
      "Waddle's invoice lending platform powers CommBank's Stream Working Capital product, enabling small business owners to unlock cash tied up in unpaid invoices.",
    type: "built",
  },
  {
    name: "Truyu",
    year: "2024",
    category: "Everyday",
    description:
      "Truyu is a digital identity protection tool that alerts consumers the moment their identity is being used or misused online. Currently in pilot.",
    type: "built",
  },
  {
    name: "Payble",
    year: "2021",
    category: "Everyday",
    description:
      "Payble is a citizen-centric revenue optimisation platform, helping governments improve both revenue outcomes and citizen payment experiences.",
    type: "early",
  },
  {
    name: "OwnHome",
    year: "2020",
    category: "Home",
    description:
      "Saving for a deposit is one of the main barriers for potential home buyers. OwnHome is a new pathway to homeownership, without the high upfront costs.",
    type: "xccelerate",
  },
  {
    name: "Splashup",
    year: "2021",
    category: "Business",
    description:
      "Splashup is an AI-driven partnerships platform, building a network of eCommerce merchants with post-transaction discovery experiences.",
    type: "xccelerate",
  },
  {
    name: "Paytron",
    year: "2022",
    category: "Business",
    description:
      "Paytron is a payment automation and spend management platform, simplifying the way finance teams manage transactions without a single line of code.",
    type: "xccelerate",
  },
];

function VentureCard({ venture }: { venture: Venture }) {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid #E5E5E5",
        borderRadius: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1.2rem" }}
        >
          {venture.name}
        </Typography>
        <Badge
          variant={
            venture.category === "Home"
              ? "info"
              : venture.category === "Business"
                ? "warning"
                : "success"
          }
        >
          {venture.category}
        </Badge>
      </Box>
      <Typography
        sx={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.5)", fontWeight: 500 }}
      >
        {venture.year}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.95rem",
          color: "rgba(0,0,0,0.65)",
          lineHeight: 1.6,
        }}
      >
        {venture.description}
      </Typography>
    </Box>
  );
}

function VentureGrid({ ventures }: { ventures: Venture[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 3,
      }}
    >
      {ventures.map((v) => (
        <VentureCard key={v.name} venture={v} />
      ))}
    </Box>
  );
}

export default function PortfolioSection() {
  const builtVentures = VENTURES.filter((v) => v.type === "built");
  const earlyVentures = VENTURES.filter((v) => v.type === "early");
  const xccelerateVentures = VENTURES.filter((v) => v.type === "xccelerate");

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{
        bgcolor: "#FAFAFA",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Portfolio types header */}
      <Box sx={{ maxWidth: 1200, mx: "auto", mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#1a1a1a",
            mb: 4,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: "0.85rem",
          }}
        >
          Our portfolio comprises
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mb: 8,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              {"Built & owned ventures"}
            </Typography>
            <Typography
              sx={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.55)", lineHeight: 1.6 }}
            >
              Wholly-owned startups we have either built and launched, or
              acquired.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              Early-stage investments
            </Typography>
            <Typography
              sx={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.55)", lineHeight: 1.6 }}
            >
              Pre-Series B startups with a clear benefit to CommBank, demonstrating
              readiness for strategic partnership commitments.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "#1a1a1a",
                mb: 1,
              }}
            >
              Xccelerate investments
            </Typography>
            <Typography
              sx={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.55)", lineHeight: 1.6 }}
            >
              Pre-Series A startups with an MVP and potential pathway to
              partnership with CommBank.
            </Typography>
          </Box>
        </Box>

        <Divider spacing="lg" />
      </Box>

      {/* Ventures section */}
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            fontWeight: 400,
            color: "#1a1a1a",
            mb: 2,
          }}
        >
          Our ventures
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "rgba(0,0,0,0.55)",
            mb: 6,
            maxWidth: 700,
            lineHeight: 1.6,
          }}
        >
          {"We're helping CommBank reimagine what it means to be a bank, with products and services that improve people's lives in the moments that matter."}
        </Typography>

        <TabPanel
          tabs={[
            {
              label: "Built & Owned",
              content: <VentureGrid ventures={builtVentures} />,
            },
            {
              label: "Early-Stage",
              content: <VentureGrid ventures={earlyVentures} />,
            },
            {
              label: "Xccelerate",
              content: <VentureGrid ventures={xccelerateVentures} />,
            },
          ]}
        />
      </Box>
    </Box>
  );
}
