import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { KennismakingModalProvider } from "@/components/kennismaking-modal-provider";
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

const TITLE = "Webgrowth Company — AI-groeiplatform met website, CRM, marketing en AI in één abonnement";
const DESCRIPTION =
  "Eén Nederlands AI-groeiplatform voor je website, CRM, marketing en AI-content, in plaats van negen losse leveranciers. Vanaf €399 per maand, opzegbaar per maand.";

export const metadata: Metadata = {
  metadataBase: new URL("https://webgrowth.company"),
  title: {
    default: TITLE,
    template: "%s",
  },
  description: DESCRIPTION,
  keywords: [
    "AI-groeiplatform",
    "HubSpot alternatief Nederland",
    "website laten maken",
    "CRM voor MKB",
    "marketing automation",
    "AI content publisher",
    "Forester OS",
    "Webgrowth Company",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Webgrowth Company", url: "https://webgrowth.company" }],
  creator: "Webgrowth Company",
  publisher: "Webgrowth Company",
  category: "technology",
  applicationName: "Webgrowth Company",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://webgrowth.company",
    siteName: "Webgrowth Company",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6f0" },
    { media: "(prefers-color-scheme: dark)", color: "#231653" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable} ${gottak.variable}`}>
      <body className="min-h-screen flex flex-col">
        <KennismakingModalProvider>{children}</KennismakingModalProvider>
        {/* Fathom Analytics — privacy-vriendelijke website-analytics, geen cookie-banner
            nodig. lazyOnload zorgt dat 't script pas laadt nadat de pagina volledig
            geladen is, zodat LCP en TBT er niet door beïnvloed worden. */}
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site="XDEYWMOV"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
