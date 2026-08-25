import type { Metadata } from "next";
import { BookingPage } from "@/components/booking/booking-page";

const TITLE = "Plan de kick-off | Webgrowth Company";
const DESCRIPTION =
  "Plan de kick-off van jullie project in. Een uur waarin we doelen, planning en toegang doornemen zodat de eerste sprint meteen kan beginnen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Deelbare link voor klanten, geen pagina die in Google hoort te staan.
  robots: { index: false, follow: false },
};

export default function KickOffPage() {
  return (
    <BookingPage
      type="kick-off"
      eyebrow="Kick-off"
      titleLead="Plan de"
      titleAccent="kick-off."
      intro="Het startsein van het project. In een uur leggen we vast waar jullie naartoe willen, wat er in de eerste sprints gebeurt en wat we van elkaar nodig hebben."
      bullets={["60 minuten", "Via Google Meet", "Doelen, planning en toegang"]}
    />
  );
}
