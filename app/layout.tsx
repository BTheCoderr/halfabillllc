import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NetlifyFormBootstrap } from "@/components/NetlifyFormBootstrap";
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
  title: "Half A Bil Agency | Websites, Apps, MVPs, and Business Automations",
  description:
    "Half A Bil Agency builds websites, apps, MVPs, landing pages, and business automations for companies that need practical digital systems fast.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Half A Bil Agency | Websites, Apps, MVPs, and Business Automations",
    description:
      "Half A Bil Agency builds websites, apps, MVPs, landing pages, and business automations for companies that need practical digital systems fast.",
    type: "website",
    images: ["/half-a-bil-mark.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Half A Bil Agency | Websites, Apps, MVPs, and Business Automations",
    description:
      "Half A Bil Agency builds websites, apps, MVPs, landing pages, and business automations for companies that need practical digital systems fast.",
    images: ["/half-a-bil-mark.svg"],
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
        <NetlifyFormBootstrap />
        {children}
      </body>
    </html>
  );
}
