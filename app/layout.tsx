import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://halfabilagency.com"
  ),
  title: "Half a bil agency | Websites, Apps, and Business Automations",
  description:
    "Half a bil agency builds websites, apps, landing pages, and automations for small businesses, creators, startups, and service providers that need practical digital systems fast.",
  openGraph: {
    title: "Half a bil agency | Websites, Apps, and Business Automations",
    description:
      "Half a bil agency builds websites, apps, landing pages, and automations for small businesses, creators, startups, and service providers that need practical digital systems fast.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Half a bil agency | Websites, Apps, and Business Automations",
    description:
      "Half a bil agency builds websites, apps, landing pages, and automations for small businesses, creators, startups, and service providers that need practical digital systems fast.",
    images: ["/logo.png"],
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
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
