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
  title: "Design System Consumer",
  description: "A Next.js app using the @richardjzhang/design-system",
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
