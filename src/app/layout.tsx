import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { PageTransition } from "@/components/motion/PageTransition";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dellcreek Developers Limited",
    template: "%s · Dellcreek Developers Limited",
  },
  description:
    "A premium real estate developer in Kenya — thoughtfully planned land and property projects, delivered with integrity.",
  metadataBase: new URL("https://dellcreek.co.ke"),
  applicationName: "Dellcreek Developers Limited",
  openGraph: {
    type: "website",
    title: "Dellcreek Developers Limited",
    description:
      "Premium real estate projects in Kenya — land for sale, development advisory, and end-to-end project delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} antialiased`}
      >
        <div className="min-h-dvh bg-bg text-fg">
          <SiteNavbar />
          <main className="pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
