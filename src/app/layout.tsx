import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { RESUME_DATA } from "@/data/resume-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Add a cache-busting parameter with the current timestamp
const timestamp = Date.now();
const siteUrl = `https://bonythomas-resume.vercel.app?t=${timestamp}`;
const siteTitle = `${RESUME_DATA.name} - ${RESUME_DATA.about}`;
const siteDescription = `Professional resume of ${RESUME_DATA.name}, ${RESUME_DATA.about}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: siteDescription,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    RESUME_DATA.name,
    "data engineer",
    "big data",
    "databricks",
    "apache spark",
    "python",
    "azure",
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: false,
    url: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl, // This sets og:url
    siteName: `${RESUME_DATA.name}'s Resume`,
    title: siteTitle,
    description: siteDescription,
    // No image specified to prevent any image from showing in social media previews
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary", // Using 'summary' instead of 'summary_large_image' to prevent image display
    site: "@bonythomas",
    creator: "@bonythomas",
    title: siteTitle,
    description: siteDescription,
    // No image specified to prevent any image from showing in social media previews
  },
  alternates: {
    canonical: siteUrl,
  },
  // Additional metadata for LinkedIn and Facebook
  applicationName: `${RESUME_DATA.name}'s Resume`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteTitle,
  },
  // Facebook App ID - you'll need to replace 'YOUR_FACEBOOK_APP_ID' with your actual Facebook App ID
  // If you don't have one, you can remove this line or get one from: https://developers.facebook.com/
  other: {
    'fb:app_id': 'YOUR_FACEBOOK_APP_ID', // Replace with your Facebook App ID or remove if not needed
    'og:type': 'website',
    'og:site_name': `${RESUME_DATA.name}'s Resume`,
    'og:title': siteTitle,
    'og:description': siteDescription,
    'og:url': siteUrl,
    'og:updated_time': new Date().toISOString(),
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
