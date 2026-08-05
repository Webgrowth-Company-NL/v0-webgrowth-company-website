import type { Metadata } from "next";
import { Suspense } from "react";

import { GeniusTalkRsvp } from "@/components/geniustalk-rsvp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const TITLE = "GeniusTalk 26 — donderdag 24 september | Webgrowth Company";
const DESCRIPTION =
  "GeniusTalk 26: A Year with AI. Donderdag 24 september 2026, 15:00 tot 17:00, omgeving Rotterdam. Laat weten of je erbij bent.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/geniustalk" },
  // Uitnodiging op persoonlijke link; hoort niet in de zoekresultaten.
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/geniustalk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* useSearchParams voor de persoonlijke ?t=-link vereist een Suspense-grens. */}
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <GeniusTalkRsvp />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
