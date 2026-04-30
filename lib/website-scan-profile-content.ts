/**
 * Profiel specifieke content (samenvattingen, aanbevelingen)
 */

export type ProfileType = "overwoekerd" | "reactief" | "geen-groei" | "beheerst" | null;

export function getProfileSummary(profile: ProfileType): string {
  switch (profile) {
    case "overwoekerd":
      return "Je website staat er, maar voelt als iets waar je liever niet aankomt. Aanpassingen kosten energie, campagnes vertragen op techniek en niemand heeft echt het overzicht. Dit is geen onwil of onkunde, maar wat er gebeurt als een website gebouwd is zonder systeem om hem bij te houden.";
    case "reactief":
      return "Alles werkt, totdat het ineens niet meer werkt. Onderhoud gebeurt wanneer het nodig is, verantwoordelijkheid is verdeeld en kosten komen vaak pas achteraf in beeld. Je website houdt stand, maar vooral omdat je hoopt dat het goed blijft gaan.";
    case "geen-groei":
      return "De basis van je website klopt, maar hij is niet gemaakt om mee te bewegen met je plannen. Techniek houdt je niet tegen, maar helpt ook niet echt mee. Campagnes vragen net iets te veel afstemming, waardoor groei zwaarder voelt dan nodig is.";
    case "beheerst":
      return "Je website werkt mee. Aanpassingen kunnen door, onderhoud is geregeld en eigenaarschap is duidelijk. Marketingtempo en techniek lopen in hetzelfde ritme. Dit profiel ontstaat zelden vanzelf en is vrijwel altijd het resultaat van actief beheer.";
    default:
      return "Je website heeft een unieke situatie. We helpen je graag om de beste aanpak te vinden.";
  }
}

export function getProfileConsequences(profile: ProfileType): {
  title: string;
  content: string;
} {
  switch (profile) {
    case "overwoekerd":
      return {
        title: "Wat dit je uiteindelijk kost",
        content: "❌ Marketinginitiatieven blijven structureel liggen, waardoor kansen verdwijnen voordat ze ooit getest zijn en je concurrenten langzaam terrein winnen.\n\n❌ De website wordt een risicofactor waar niemand verantwoordelijkheid voor neemt, met als gevolg dat beslissingen worden uitgesteld of helemaal niet meer genomen.\n\n❌ Op termijn wordt aanpassen zo spannend dat de site feitelijk stilvalt, terwijl hij ondertussen wél geld en aandacht blijft kosten."
      };
    case "reactief":
      return {
        title: "Waar dit altijd op uitloopt",
        content: "❌ Kleine technische problemen groeien uit tot verstoringen die campagnes raken, precies op het moment dat timing cruciaal is.\n\n❌ Kosten blijven onvoorspelbaar, waardoor elke aanpassing zwaarder voelt dan nodig en je steeds vaker besluit om het maar te laten.\n\n❌ Het vertrouwen in de website brokkelt langzaam af, waardoor marketing zich steeds minder op het platform durft te leunen."
      };
    case "geen-groei":
      return {
        title: "De prijs van net-niet-meewerken",
        content: "❌ Campagnes verliezen snelheid omdat techniek telkens om afstemming vraagt, waardoor momentum verloren gaat voordat het rendement oplevert.\n\n❌ Groei vraagt steeds meer coördinatie, terwijl de website niet is ingericht om die druk op te vangen.\n\n❌ Marketing verplaatst zich langzaam weg van de website, simpelweg omdat het te veel moeite kost om daar snel te schakelen."
      };
    case "beheerst":
      return {
        title: "Wat er gebeurt als je dit niet bewaakt",
        content: "❌ Zonder actief beheer glijdt ook een goed ingerichte website langzaam terug richting reactief werken.\n\n❌ Nieuwe ambities vragen meer samenhang, en zonder systeem ontstaan er alsnog losse keuzes en versnippering.\n\n❌ Het voordeel dat je nu hebt, verdwijnt ongemerkt als niemand het bewaakt."
      };
    default:
      return {
        title: "Wat dit je uiteindelijk kost",
        content: "Zonder een duidelijk profiel en structuur voor je website, loop je het risico dat technische problemen onopgemerkt blijven, kosten onvoorspelbaar worden en marketinginitiatieven vertraging oplopen. Het is belangrijk om inzicht te krijgen in je huidige situatie om de juiste stappen te kunnen zetten."
      };
  }
}

export function getForesterOSRecommendation(
  profile: ProfileType,
  tone: "stability" | "growth" | "unknown" | null,
  isOnePager: boolean = false
): {
  plan: string;
  explanation: string;
} {
  switch (profile) {
    case "overwoekerd":
      // Basecamp (intern) alleen als het een one-pager is; anders Core
      if (isOnePager) {
        return {
          plan: "Basecamp",
          explanation: "Dit abonnement van Webgrowth Company geeft je een solide fundament. We nemen de technische rompslomp uit handen, zodat jij je kunt focussen op wat je bedrijf doet. Onderhoud, updates en beveiliging lopen automatisch, en aanpassingen worden voorspelbaar en betaalbaar. Geen verrassingen meer, alleen rust."
        };
      } else {
        return {
          plan: "Core",
          explanation: "Dit abonnement van Webgrowth Company geeft je website de structuur die hij nodig heeft. We zorgen voor proactief onderhoud, duidelijke verantwoordelijkheid en transparante kosten. Je website wordt weer iets waar je op kunt bouwen, in plaats van iets waar je voor hoopt."
        };
      }
    case "reactief":
      return {
        plan: "Core",
        explanation: "Dit abonnement van Webgrowth Company geeft je website de structuur die hij nodig heeft. We zorgen voor proactief onderhoud, duidelijke verantwoordelijkheid en transparante kosten. Je website wordt weer iets waar je op kunt bouwen, in plaats van iets waar je voor hoopt."
      };
    case "geen-groei":
      return {
        plan: "Core",
        explanation: "Dit abonnement van Webgrowth Company maakt je website klaar voor de plannen die je hebt. Techniek en marketing lopen in hetzelfde ritme, campagnes kunnen door zonder gedoe en groei voelt weer als groei, niet als worstelen. Je website wordt een partner in plaats van een hindernis."
      };
    case "beheerst":
      return {
        plan: "Growth",
        explanation: "Dit abonnement van Webgrowth Company versterkt wat werkt en voegt toe wat je nog mist. Je hebt al een goede basis, en we zorgen dat je website meebeweegt met je ambities, zonder dat je zelf in de techniek hoeft te duiken. Beheer blijft beheer, maar dan met meer ruimte voor groei."
      };
    default:
      return {
        plan: "Core",
        explanation: "Dit abonnement van Webgrowth Company helpt je om de juiste aanpak te vinden voor jouw situatie. Neem contact met ons op voor een persoonlijk advies."
      };
  }
}

