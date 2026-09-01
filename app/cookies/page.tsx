import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

const TITLE = "Cookies | Webgrowth Company";
const DESCRIPTION =
  "Welke cookies en opslag we gebruiken op webgrowth.company en in Forester OS, waar ze voor dienen en hoe je ze weigert.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cookies" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/cookies",
    type: "website",
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Wat er in je browser wordt gezet."
      intro="Kort: onze bezoekcijfers werken zonder cookies, en de enige cookies die er wel zijn komen van de conversiemeting van Google Ads."
      updated="1 september 2026"
    >
      <h2>Bezoekcijfers: geen cookies</h2>
      <p>
        We meten met Fathom Analytics. Die telt paginabezoeken zonder cookies, zonder je IP-adres op
        te slaan en zonder een profiel van je te maken. Daarom zie je hier geen cookiebanner die je
        eerst moet wegklikken.
      </p>

      <h2>Advertenties: wel cookies</h2>
      <p>
        We adverteren op Google. Om te kunnen zien of een advertentie iets oplevert staat er een
        meetscript van Google Ads op de site. Dat zet cookies zoals <strong>_gcl_au</strong>, die
        onthouden via welke advertentie iemand binnenkwam. Ze staan er maximaal negentig dagen.
      </p>
      <p>
        Wil je dat niet, dan kun je het blokkeren in je browser of via de advertentie-instellingen
        van Google op{" "}
        <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer">
          myadcenter.google.com
        </a>
        . De site werkt daar verder gewoon door.
      </p>

      <h2>Het portaal: alleen wat nodig is</h2>
      <p>
        Log je in op <a href="https://app.webgrowth.company">app.webgrowth.company</a>, dan bewaart je
        browser je sessie, zodat je niet bij elke pagina opnieuw hoeft in te loggen. Ook onthouden we
        kleine voorkeuren, zoals of je het menu ingeklapt hebt en of je licht of donker werkt. Dat is
        functionele opslag: zonder werkt het portaal niet.
      </p>

      <h2>De app</h2>
      <p>
        In de Forester OS-app zit geen advertentie- of trackingcode. Wat de app op je toestel bewaart
        is je sessie en je voorkeur voor het slot met Face ID of Touch ID. Meer daarover staat in de{" "}
        <Link href="/privacy">privacyverklaring</Link>.
      </p>
    </LegalPage>
  );
}
