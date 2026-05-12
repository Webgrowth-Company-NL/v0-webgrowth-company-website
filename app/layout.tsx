import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const gottak = localFont({
  src: [
    { path: "../public/fonts/Gottak-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Gottak-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../public/fonts/Gottak-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Gottak-Thin.ttf", weight: "200", style: "normal" },
  ],
  variable: "--font-gottak",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webgrowth.company"),
  title: {
    default: "Webgrowth Company: Eén abonnement, negen tools minder. Meer groei.",
    template: "%s",
  },
  description:
    "Webgrowth Company is een AI-groeiplatform: website, CRM, marketing en AI in één abonnement, in plaats van negen losse leveranciers.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Webgrowth Company",
    title: "Webgrowth Company: Eén abonnement, negen tools minder. Meer groei.",
    description:
      "Een AI-groeiplatform: website, CRM, marketing en AI in één abonnement, in plaats van negen losse leveranciers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable} ${gottak.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
