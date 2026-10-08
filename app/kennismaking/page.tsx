import type { Metadata } from "next";
import { BookingPage } from "@/components/booking/booking-page";

const TITLE = "Plan een kennismaking | Webgrowth Company";
const DESCRIPTION =
  "Plan een vrijblijvende kennismaking van 45 minuten met Martijn. Kies een moment dat jou uitkomt; je krijgt een uitnodiging met Google Meet-link.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Deelbare link die we zelf doorsturen (bijv. als antwoord op een mail), geen pagina voor Google.
  robots: { index: false, follow: false },
};

export default function KennismakingPage() {
  return (
    <BookingPage
      type="kennismaking"
      eyebrow="Kennismaking"
      titleLead="Even"
      titleAccent="kennismaken."
      intro="Drie kwartier om te horen waar je nu staat, wat er beter kan aan je website en online omgeving, en of Forester OS daarbij past. Vrijblijvend, geen pitch."
      bullets={["45 minuten", "Via Google Meet", "Vrijblijvend"]}
    />
  );
}
