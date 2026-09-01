import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

const TITLE = "Gebruiksvoorwaarden | Webgrowth Company";
const DESCRIPTION =
  "De regels voor het gebruik van webgrowth.company, het Forester OS-portaal en de Forester OS-app: je account, wat je ermee mag, beschikbaarheid en aansprakelijkheid.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/voorwaarden" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/voorwaarden",
    type: "website",
  },
};

export default function VoorwaardenPage() {
  return (
    <LegalPage
      eyebrow="Voorwaarden"
      title="De afspraken over het gebruik."
      intro="Deze pagina gaat over het gebruik van onze website, het Forester OS-portaal en de app. Wat we voor je bouwen en wat dat kost staat in je offerte en je overeenkomst, niet hier."
      updated="1 september 2026"
    >
      <h2>Voor wie dit geldt</h2>
      <p>
        Voor iedereen die webgrowth.company bezoekt, en voor iedereen met een account in Forester OS
        op <a href="https://app.webgrowth.company">app.webgrowth.company</a> of in de Forester OS-app.
        Webgrowth Company, Ceresstraat 13 in Breda, KvK 64809536, levert die diensten.
      </p>

      <h2>Je account</h2>
      <ul>
        <li>Een account is persoonlijk. Deel je inloggegevens niet en werk niet onder de naam van een ander.</li>
        <li>Heeft een collega ook toegang nodig, dan vraag je er een account voor aan. Dat kost niets extra.</li>
        <li>Vermoed je dat iemand anders bij je account kan, meld het dan meteen, dan sluiten we het af.</li>
        <li>Gaat iemand uit dienst, laat het weten, dan halen we de toegang eraf.</li>
      </ul>

      <h2>Wat je met het platform mag</h2>
      <p>
        Je gebruikt Forester OS voor je eigen organisatie: je website beheren, je aanvragen opvolgen,
        je cijfers bekijken, je taken afvinken. Wat niet mag:
      </p>
      <ul>
        <li>Het platform of onderdelen ervan namaken, doorverkopen of aan derden ter beschikking stellen</li>
        <li>Geautomatiseerd gegevens uit het platform trekken buiten de koppelingen die we ervoor bieden</li>
        <li>Beveiliging omzeilen of proberen bij gegevens van een andere organisatie te komen</li>
        <li>Het platform gebruiken voor iets dat in strijd is met de wet</li>
      </ul>
      <p>
        Gebeurt dat toch, dan mogen we de toegang opschorten. We melden het je en leggen uit waarom.
      </p>

      <h2>Van wie de gegevens en het werk zijn</h2>
      <p>
        Wat jij in het platform zet blijft van jou: je teksten, je beelden, je klantgegevens, je
        aanvragen. Vraag je erom, dan krijg je die eruit in een leesbaar bestand. Het platform zelf,
        de code en het ontwerp, blijven van ons.
      </p>
      <p>
        Wat we voor je maken, zoals een website of een campagne, is bij oplevering van jou volgens de
        afspraken in je offerte.
      </p>

      <h2>Beschikbaarheid</h2>
      <p>
        We doen ons best om het platform te laten draaien, maar we beloven geen honderd procent.
        Onderhoud plannen we zoveel mogelijk buiten kantooruren en kondigen we aan als je er iets van
        merkt. Storingen bij partijen waar we op draaien, zoals hosting of Google, kunnen we niet
        voorkomen; wel lossen we ze zo snel mogelijk op.
      </p>

      <h2>Prijzen, facturen en opzeggen</h2>
      <p>
        Wat je afneemt en wat het kost staat in je offerte of abonnement. Daar staat ook de looptijd
        en de opzegtermijn in. Zeg je op, dan houd je toegang tot het einde van de periode die je
        hebt betaald, en krijg je je gegevens mee als je daarom vraagt.
      </p>

      <h2>De app</h2>
      <p>
        De Forester OS-app is een gratis onderdeel van je account. Er wordt niets in de app verkocht.
        Zonder account van ons kun je er niet mee werken. Hoe we met je gegevens omgaan staat in de{" "}
        <Link href="/privacy">privacyverklaring</Link>.
      </p>

      <h2>Aansprakelijkheid</h2>
      <p>
        Gaat er iets mis door onze schuld, dan lossen we het op. Voor schade die daaruit volgt zijn we
        aansprakelijk tot maximaal het bedrag dat je in de drie maanden ervoor aan ons hebt betaald
        voor de dienst waar het misging. Voor opzet of bewuste roekeloosheid van onze kant geldt die
        grens niet.
      </p>
      <p>
        We zijn niet aansprakelijk voor gevolgschade, zoals gemiste omzet, en niet voor gevolgen van
        gegevens die je zelf verkeerd hebt ingevoerd of van keuzes die je tegen ons advies in maakt.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Verandert er iets aan deze voorwaarden, dan zetten we de nieuwe versie hier met een nieuwe
        datum erboven. Gaat het om een wijziging die er voor jou toe doet, dan laten we het je weten
        voordat die ingaat.
      </p>

      <h2>Recht en rechter</h2>
      <p>
        Op deze voorwaarden is Nederlands recht van toepassing. Komen we er samen niet uit, dan gaan
        we naar de rechtbank Zeeland-West-Brabant in Breda. Bellen werkt meestal sneller.
      </p>
    </LegalPage>
  );
}
