import type { Metadata } from "next";
import { BookingPage } from "@/components/booking/booking-page";

const TITLE = "Plan een sprint meeting | Webgrowth Company";
const DESCRIPTION =
  "Plan je sprint meeting in. Drie kwartier waarin we de sprint doorlopen, kijken naar wat af is en de volgende stap uitzetten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Deelbare link voor klanten, geen pagina die in Google hoort te staan.
  robots: { index: false, follow: false },
};

export default function SprintMeetingPage() {
  return (
    <BookingPage
      type="sprint-meeting"
      eyebrow="Sprint meeting"
      titleLead="Plan je"
      titleAccent="sprint meeting."
      intro="Drie kwartier om de sprint door te lopen: wat er af is, wat er nog loopt en waar we de komende twee weken op inzetten."
      bullets={["45 minuten", "Via Google Meet", "Voortgang en volgende sprint"]}
    />
  );
}
