import type { Metadata } from "next";
import { BookingPage } from "@/components/booking/booking-page";

const TITLE = "Plan een moment om bij te praten | Webgrowth Company";
const DESCRIPTION =
  "Plan een half uur om bij te praten via Google Meet. Kies een moment dat jou uitkomt.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Deelbare link voor klanten, geen pagina die in Google hoort te staan.
  robots: { index: false, follow: false },
};

export default function BijpratenPage() {
  return (
    <BookingPage
      type="bijpraten"
      eyebrow="Bijpraten"
      titleLead="Even"
      titleAccent="bijpraten."
      intro="Een half uur om bij te praten over wat er loopt en wat er aankomt. Kies een moment dat jou uitkomt."
      bullets={["30 minuten", "Via Google Meet", "Geen voorbereiding nodig"]}
    />
  );
}
