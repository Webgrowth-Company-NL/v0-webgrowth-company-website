import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

const TITLE = "Privacyverklaring | Webgrowth Company";
const DESCRIPTION =
  "Welke gegevens we verwerken van websitebezoekers, klanten in Forester OS en gebruikers van de app, waarom we dat doen en wat je rechten zijn.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://webgrowth.company/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Wat we van je weten, en waarom."
      intro="We verzamelen zo min mogelijk, we verkopen niets door en we gebruiken je gegevens niet om je over het internet te volgen. Hieronder staat per situatie wat we wel doen."
      updated="1 september 2026"
    >
      <h2>Wie dit is</h2>
      <p>
        Webgrowth Company, Ceresstraat 13 in Breda, KvK 64809536, btw NL001363277B13. Wij zijn
        verwerkingsverantwoordelijke voor de gegevens die hieronder staan. Vragen gaan naar{" "}
        <a href="mailto:martijn@webgrowth.company">martijn@webgrowth.company</a>.
      </p>

      <h2>Als je onze website bezoekt</h2>
      <p>
        We meten bezoek met Fathom Analytics. Dat is een Europese, privacyvriendelijke teller: geen
        cookies, geen profielen, en je IP-adres wordt niet opgeslagen. We zien dus dat een pagina is
        bezocht, niet door wie.
      </p>
      <p>
        Daarnaast staat er een conversiemeting van Google Ads op de site. Die kijkt of iemand die via
        een advertentie binnenkwam later een kennismaking plant of de Website APK invult. Daar horen
        wel cookies bij. Wat er precies staat en hoe je dat weigert lees je op de{" "}
        <Link href="/cookies">cookiepagina</Link>.
      </p>
      <p>
        Onze hosting (Vercel en Cloudflare) houdt technische logboeken bij met IP-adres, browser en
        opgevraagde pagina. Die zijn nodig om de site te laten werken en misbruik tegen te gaan, en
        worden kort bewaard.
      </p>

      <h2>Als je contact opneemt</h2>
      <p>
        Vul je een formulier in, plan je een kennismaking of stuur je een e-mail, dan bewaren we wat
        je zelf invult: je naam, e-mailadres, telefoonnummer, bedrijf en je vraag. We gebruiken dat
        om te antwoorden en om een voorstel te kunnen maken. E-mail versturen we via Postmark.
      </p>
      <p>
        Wordt het geen samenwerking, dan verwijderen we die gegevens binnen twee jaar. Wordt het wel
        een samenwerking, dan gaan ze mee naar je klantdossier.
      </p>

      <h2>Als je klant bent en in Forester OS werkt</h2>
      <p>
        Forester OS is ons platform op <a href="https://app.webgrowth.company">app.webgrowth.company</a>.
        Je krijgt daar een account van ons. We slaan op:
      </p>
      <ul>
        <li>Je naam, e-mailadres, telefoonnummer en rol, zodat je kunt inloggen en wij weten wie wat mag zien</li>
        <li>Wat er over jouw website en campagnes bekend is: bezoekcijfers, vindbaarheid, advertenties, taken en facturen</li>
        <li>De aanvragen die via jouw website binnenkomen, inclusief de gegevens die die aanvragers zelf invullen</li>
      </ul>
      <p>
        Voor de aanvragen uit je eigen formulieren ben jij de verantwoordelijke en zijn wij de
        verwerker. Wij gebruiken die gegevens alleen om ze bij jou af te leveren en te bewaren, nooit
        voor onszelf.
      </p>
      <p>
        Koppel je zelf een dienst aan je account, bijvoorbeeld Google Search Console, Google Ads,
        Moneybird, je agenda of je mailbox, dan halen we alleen op wat voor die koppeling nodig is en
        alleen zolang de koppeling aanstaat. Je kunt hem in je profiel weer losmaken.
      </p>

      <h2>De Forester OS-app op je telefoon</h2>
      <p>
        De app is hetzelfde portaal, met een paar dingen die een browser niet kan. Wat dat voor je
        gegevens betekent:
      </p>
      <ul>
        <li>
          <strong>Meldingen.</strong> Zet je die aan, dan maakt je telefoon een pushtoken aan. Dat
          token hangen we aan jouw account, zodat een melding bij de juiste persoon aankomt. Zet je
          meldingen uit, dan vervalt het.
        </li>
        <li>
          <strong>Camera en bestanden.</strong> De app vraagt daar pas toegang voor op het moment dat
          je zelf een foto of bestand wilt meesturen. Wat je meestuurt komt in het portaal terecht,
          verder niets.
        </li>
        <li>
          <strong>Face ID en Touch ID.</strong> Zet je het slot aan, dan controleert je telefoon zelf
          of jij het bent. Wij krijgen geen vingerafdruk of gezichtsscan te zien, alleen ja of nee.
        </li>
        <li>
          <strong>Geen tracking.</strong> Er zit geen advertentie-SDK in de app, we gebruiken geen
          advertentie-identifier, en we delen niets met andere partijen om je te volgen.
        </li>
      </ul>
      <p>
        Verwijder je de app, dan stopt de melding. Wil je je account helemaal weg, dan kan dat via je
        profiel in het portaal of met een mail aan ons. Zie{" "}
        <a href="https://app.webgrowth.company/account/verwijderen">account verwijderen</a>.
      </p>

      <h2>Met wie we gegevens delen</h2>
      <p>
        Alleen met partijen die nodig zijn om het platform te laten draaien, en alleen wat zij nodig
        hebben. Met elk van hen ligt een verwerkersovereenkomst:
      </p>
      <ul>
        <li>Google Cloud en Firebase, voor de database en het inloggen</li>
        <li>Vercel en Cloudflare, voor hosting en beveiliging</li>
        <li>Postmark, voor e-mail vanuit het platform</li>
        <li>Fathom Analytics, voor bezoekcijfers</li>
        <li>Google, voor Search Console, Ads en de AI-functies in het platform</li>
        <li>Moneybird, voor facturatie</li>
      </ul>
      <p>
        Verder delen we niets, tenzij de wet ons daartoe verplicht. We verkopen geen gegevens.
      </p>

      <h2>Hoe lang we het bewaren</h2>
      <ul>
        <li>Contactaanvragen die niets werden: maximaal twee jaar</li>
        <li>Klantgegevens en dossiers: zolang de samenwerking loopt, daarna nog twee jaar</li>
        <li>Facturen en administratie: zeven jaar, want dat moet van de Belastingdienst</li>
        <li>Technische logboeken: enkele weken</li>
      </ul>

      <h2>Je rechten</h2>
      <p>
        Je mag opvragen welke gegevens we van je hebben, ze laten corrigeren, ze laten verwijderen,
        bezwaar maken tegen het gebruik ervan en ze in een leesbaar bestand meekrijgen. Stuur een
        mail en je hoort binnen een maand van ons, meestal veel eerder.
      </p>
      <p>
        Vind je dat we het niet goed doen, dan mag je klagen bij de Autoriteit Persoonsgegevens via{" "}
        <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">
          autoriteitpersoonsgegevens.nl
        </a>
        . We horen het liever eerst zelf, dan kunnen we het oplossen.
      </p>

      <h2>Beveiliging</h2>
      <p>
        Alles gaat over https. Toegang tot het platform loopt via een persoonlijk account met
        wachtwoord, en wie wat mag zien staat vast in de rechten van je account. Wij komen alleen bij
        jouw omgeving als dat nodig is voor het werk dat we voor je doen.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Verandert er iets wezenlijks, dan passen we deze pagina aan en zetten we er een nieuwe datum
        boven. Bij grote wijzigingen laten we het je weten.
      </p>
    </LegalPage>
  );
}
