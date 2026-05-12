import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import type { SeoPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Webgrowth Company",
  robots: { index: false, follow: true },
};

const page: SeoPage = {
  path: "/404",
  h1: "Deze pagina bestaat niet (meer)",
  metaTitle: "Pagina niet gevonden | Webgrowth Company",
  metaDescription: "",
  intro:
    "De link is verlopen of de pagina is verplaatst. Ga terug naar de homepage of doe meteen de gratis website APK.",
  illustration: "not-found",
};

export default function NotFound() {
  return <PlaceholderPage page={page} badgeText="404 — pagina niet gevonden" />;
}
