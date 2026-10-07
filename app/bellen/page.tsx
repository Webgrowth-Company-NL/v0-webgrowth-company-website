import type { Metadata } from "next";
import { BookingPage } from "@/components/booking/booking-page";

const TITLE = "Plan een belafspraak | Webgrowth Company";
const DESCRIPTION =
  "Plan een kort telefonisch gesprek van een kwartier. Kies een moment dat jou uitkomt, dan bellen we je.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Deelbare link die we zelf doorsturen, geen pagina die in Google hoort.
  robots: { index: false, follow: false },
};

export default function BellenPage() {
  return (
    <BookingPage
      type="bellen"
      eyebrow="Belafspraak"
      titleLead="Even"
      titleAccent="bellen."
      intro="Een kwartier aan de telefoon, voor als dat sneller is dan heen en weer mailen. Kies een moment dat jou uitkomt, dan bellen wij je."
      bullets={["15 minuten", "Telefonisch", "Geen voorbereiding nodig"]}
    />
  );
}
