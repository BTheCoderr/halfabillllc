import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Half A Bil Agency | Websites, CRM, Automation, and AI";
const siteDescription =
  "Half A Bil Agency builds websites, CRM systems, and automations that help local service businesses generate more leads and save time.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://halfabilagency.com"
  ),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "website design",
    "MVP development",
    "business automation",
    "AI workflows",
    "landing pages",
    siteConfig.name,
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
