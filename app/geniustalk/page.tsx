import type { Metadata } from "next";

import { GeniusTalkPage } from "@/components/geniustalk-page";

const TITLE = "GeniusTalk 26 op 5 november in Rotterdam: A Year with AI | Webgrowth Company";
const DESCRIPTION =
  "Een middag over wat AI het afgelopen jaar echt heeft opgeleverd, van een doos in de schuur tot het systeem waar een heel bedrijf op draait. Donderdag 5 november 2026, 15:00 tot 17:00, bij Restaurant Chung in Rotterdam. Meld je aan.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/geniustalk" },
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

/**
 * Event-markup, zodat de middag in Google als evenement met datum en plek kan
 * verschijnen. Tijden staan in wintertijd (+01:00), net als de .ics in het
 * platform.
 */
const EVENT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "GeniusTalk 26: A Year with AI",
  description: DESCRIPTION,
  startDate: "2026-11-05T15:00:00+01:00",
  endDate: "2026-11-05T17:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: ["https://webgrowth.company/images/geniustalk-2017.jpg"],
  url: "https://webgrowth.company/geniustalk",
  inLanguage: "nl-NL",
  location: {
    "@type": "Place",
    name: "Restaurant Chung",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noordmolenwerf 171",
      addressLocality: "Rotterdam",
      addressCountry: "NL",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Webgrowth Company",
    url: "https://webgrowth.company",
  },
  performer: {
    "@type": "Person",
    name: "Martijn Duin",
  },
} as const;

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSONLD) }}
      />
      <GeniusTalkPage />
    </>
  );
}
