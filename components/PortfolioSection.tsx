"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  MuiCardSection,
  VentureCard,
  VenturesList,
  Chip,
  SectionHeader,
  TabPanel,
  Skeleton,
  Divider,
} from "@richardjzhang/design-system";

const VENTURES = {
  built: [
    {
      name: "Home-in",
      year: "2020",
      category: "Home",
      description:
        "Home-in simplifies the complex process of buying a home. It helps buyers navigate the home buying journey and reach settlement with certainty.",
      brandColor: "#1B4D7A",
    },
    {
      name: "Credit Savvy",
      year: "2020",
      category: "Everyday",
      description:
        "Credit Savvy helps Australians to access, understand and protect their credit reputation.",
      brandColor: "#2E7D4F",
    },
    {
      name: "Doshii",
      year: "2021",
      category: "Business",
      description:
        "Doshii gets hospitality apps talking to a venue's POS, helping business owners spend less time on tech.",
      brandColor: "#6B3FA0",
    },
    {
      name: "Unloan",
      year: "2022",
      category: "Home",
      description:
        "Unloan is a new kind of home loan with one great rate, 10-minute application time, and a discount that gets better and better.",
      brandColor: "#D4006C",
    },
    {
      name: "Kit",
      year: "2022",
      category: "Everyday",
      description:
        "Kit is an earning-and-learning, mindfully-spending, money-mastering pocket money app and prepaid card for young Australians.",
      brandColor: "#FF6B35",
    },
    {
      name: "Waddle",
      year: "2023",
      category: "Business",
      description:
        "Waddle's invoice lending platform powers CBA's Stream Working Capital product for small business owners.",
      brandColor: "#2B3039",
    },
    {
      name: "Truyu",
      year: "2024",
      category: "Everyday",
      description:
        "Truyu is a digital identity protection tool that alerts consumers the moment their identity is being used or misused online.",
      brandColor: "#1A3D5C",
    },
  ],
  early: [
    {
      name: "Payble",
      year: "2021",
      category: "Everyday",
      description:
        "Payble is a citizen-centric revenue optimisation platform, helping governments improve revenue outcomes and citizen payment experiences.",
      brandColor: "#3A7D9F",
    },
  ],
  xccelerate: [
    {
      name: "OwnHome",
      year: "2020",
      category: "Home",
      description:
        "A new pathway to homeownership, without the high upfront costs of saving for a deposit.",
      brandColor: "#4A8B5C",
    },
    {
      name: "Splashup",
      year: "2021",
      category: "Business",
      description:
        "An AI-driven partnerships platform, building a network of eCommerce merchants with post-transaction discovery.",
      brandColor: "#8B4A6B",
    },
    {
      name: "Paytron",
      year: "2022",
      category: "Business",
      description:
        "A payment automation and spend management platform, simplifying the way finance teams manage transactions.",
      brandColor: "#2B4A8B",
    },
  ],
};

function VentureCardGrid({
  ventures,
  loading,
}: {
  ventures: typeof VENTURES.built;
  loading: boolean;
}) {
  if (loading) {
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
        {Array.from({ length: 3 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              bgcolor: "#FFFFFF",
              border: "1px solid #E5E5E5",
              borderRadius: "12px",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="text" lines={3} />
          </Box>
        ))}
      </Box>
    );
  }

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
        <VentureCard
          key={v.name}
          name={v.name}
          year={v.year}
          category={v.category}
          description={v.description}
          brandColor={v.brandColor}
        />
      ))}
    </Box>
  );
}

export default function PortfolioSection() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", "Home", "Everyday", "Business"];

  return (
    <section id="portfolio">
      {/* Portfolio types overview using MuiCardSection */}
      <MuiCardSection />

      {/* Venture cards section with Chip filters */}
      <Box sx={{ bgcolor: "#FFFFFF", px: { xs: 3, md: 6 }, py: { xs: 8, md: 10 } }}>
        <Box sx={{ maxWidth: 1200, mx: "auto" }}>
          <SectionHeader
            eyebrow="our ventures"
            title="Built to improve lives"
            subtitle="We're helping CBA reimagine what it means to be a bank, with products and services that improve people's lives."
          />

          {/* Chip category filters */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 4, mb: 4 }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                variant="outlined"
                size="md"
                active={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Chip>
            ))}
          </Box>

          <Divider spacing="md" />

          {/* Venture cards in tabs */}
          <Box sx={{ mt: 4 }}>
            <TabPanel
              tabs={[
                {
                  label: "Built & Owned",
                  content: (
                    <VentureCardGrid
                      ventures={
                        filter === "All"
                          ? VENTURES.built
                          : VENTURES.built.filter((v) => v.category === filter)
                      }
                      loading={loading}
                    />
                  ),
                },
                {
                  label: "Early-Stage",
                  content: (
                    <VentureCardGrid
                      ventures={
                        filter === "All"
                          ? VENTURES.early
                          : VENTURES.early.filter((v) => v.category === filter)
                      }
                      loading={loading}
                    />
                  ),
                },
                {
                  label: "Xccelerate",
                  content: (
                    <VentureCardGrid
                      ventures={
                        filter === "All"
                          ? VENTURES.xccelerate
                          : VENTURES.xccelerate.filter(
                              (v) => v.category === filter
                            )
                      }
                      loading={loading}
                    />
                  ),
                },
              ]}
            />
          </Box>
        </Box>
      </Box>

      {/* VenturesList - large type venture listing */}
      <VenturesList
        title="Built & owned"
        ventures={[
          { name: "Home-in", year: "2020" },
          { name: "Credit Savvy", year: "2020" },
          { name: "Doshii", year: "2021" },
          { name: "Unloan", year: "2022" },
          { name: "Kit", year: "2022" },
          { name: "Waddle", year: "2023" },
          { name: "Truyu", year: "2024" },
        ]}
      />
    </section>
  );
}
