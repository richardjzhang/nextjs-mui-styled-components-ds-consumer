import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  StyledComponentsRegistry,
  MuiRegistry,
} from "@richardjzhang/design-system/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "x15ventures | Venture Scaler Powered by CommBank",
  description:
    "We build, buy, and invest in startups that would benefit from connections to Australia's leading bank, and could improve the lives of its 15 million customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <StyledComponentsRegistry>
          <MuiRegistry>{children}</MuiRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
