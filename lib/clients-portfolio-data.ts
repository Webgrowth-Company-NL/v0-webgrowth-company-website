/**
 * Klantportfolio — alle live klanten op Forester OS.
 * Data komt uit de Forester OS websites-collectie via scripts/dump-websites.mjs.
 * Logos worden waar beschikbaar in /public/images/clients/ gezet.
 */

export type PortfolioClient = {
  name: string
  url: string
  industry: string
  shortDesc: string
  /** essential | pro | premium | scale | hosting */
  plan: string
  /** Jaartal subscription-start, of null als onbekend */
  since: string | null
  /** Logo-pad in /public, optioneel */
  logo?: string
  /** Slug voor uitgebreide case-pagina als die er is */
  caseSlug?: string
}

export const portfolioClients: PortfolioClient[] = [
  // 2026
  {
    name: "Mind Movement",
    url: "https://mindmovementapp.nl/",
    industry: "Gezondheid & welzijn",
    shortDesc:
      "Mind Movement biedt een methode voor stressregulatie en gedragsverandering, met eigen consumenten-app en CMS op Forester OS.",
    plan: "scale",
    since: "2026",
    logo: "/images/clients/mind-movement.png",
  },
  {
    name: "Bosscher International",
    url: "https://bosscher-international.com/",
    industry: "Custom textiel & merchandising",
    shortDesc:
      "Internationaal handelsbedrijf in branded merchandising. Geïntegreerd platform vervangt Pipedrive, Excel-prijslijsten en losse webshops.",
    plan: "premium",
    since: "2026",
  },
  {
    name: "Adalace",
    url: "https://adalace.webgrowth.company/",
    industry: "Vastgoedsoftware",
    shortDesc:
      "Cloudsoftware voor vastgoedbeheerders om gebouwdossiers te digitaliseren en wettelijke compliance te borgen. Met Quickscan-leadtool op Forester OS.",
    plan: "pro",
    since: "2026",
    logo: "/images/clients/adalace/logo.png",
    caseSlug: "adalace",
  },
  {
    name: "Pink Elephant",
    url: "https://pink.webgrowth.company/",
    industry: "IT-dienstverlening en consultancy",
    shortDesc:
      "One-stop-shop voor alles wat met IT Service Management (ITSM) te maken heeft.",
    plan: "pro",
    since: "2026",
  },
  {
    name: "Merketingvisie",
    url: "https://merketingvisie.nl/",
    industry: "Marketing & strategie",
    shortDesc:
      "Strategisch adviesbureau dat MKB-bedrijven helpt bij het bouwen van sterke merken via de Merketing-methode.",
    plan: "hosting",
    since: "2026",
  },
  // 2025
  {
    name: "Tornado Rent",
    url: "https://tornado.rent",
    industry: "Verhuur bouwmachines",
    shortDesc:
      "VAC-EX vacuümgraafmachines verhuren in Nederland en België voor schadevrij graven rondom kabels en leidingen. Met live reserveringssysteem op Forester OS.",
    plan: "pro",
    since: "2025",
    logo: "/images/clients/tornado-rent/logo.png",
    caseSlug: "tornado-rent",
  },
  {
    name: "Restaurant Chung",
    url: "https://restaurantchung.nl/",
    industry: "Horeca",
    shortDesc:
      "Culinaire hotspot in Rotterdam waar moderne Aziatische keuken wordt gecombineerd met Europese invloeden.",
    plan: "pro",
    since: "2025",
  },
  {
    name: "Kiiro",
    url: "https://kiiro.nl/",
    industry: "Horeca",
    shortDesc: "Japans Curry House in Nederland.",
    plan: "pro",
    since: "2025",
  },
  {
    name: "AKB Logistics",
    url: "https://akb-logisticssoftware.nl/",
    industry: "Logistieksoftware",
    shortDesc:
      "Software-systeem voor het plannen van ritten voor grote vervoersbedrijven.",
    plan: "pro",
    since: "2025",
  },
  {
    name: "The CDO",
    url: "https://thecdo.nl/",
    industry: "IT & Business Intelligence",
    shortDesc:
      "Dataspecialist die bedrijven helpt om datagedreven te werken via maatwerkoplossingen en slimme dashboards.",
    plan: "pro",
    since: "2025",
  },
  // 2023
  {
    name: "The Africa Experience",
    url: "https://the-africa-experience.com/",
    industry: "Toerisme",
    shortDesc:
      "Duurzame reisorganisatie gespecialiseerd in authentieke en luxueuze safari-ervaringen in Botswana en Mozambique.",
    plan: "pro",
    since: "2023",
    logo: "/images/clients/the-africa-experience.png",
  },
  // 2022
  {
    name: "VQ Advocaten",
    url: "https://vq-advocaten.nl/",
    industry: "Advocatuur",
    shortDesc:
      "Laagdrempelig advocatenkantoor uit Oud-Beijerland dat zowel particulieren als ondernemers landelijk bijstaat.",
    plan: "pro",
    since: "2022",
    logo: "/images/clients/vq-advocaten.webp",
  },
  {
    name: "Browema",
    url: "https://browema.nl/",
    industry: "Maritieme dienstverlening",
    shortDesc:
      "Maritiem familiebedrijf uit Moerdijk dat gespecialiseerd is in projectondersteuning op en rond het water.",
    plan: "pro",
    since: "2022",
  },
  // 2018
  {
    name: "MOL Logistics",
    url: "https://mol-logistics.eu/",
    industry: "Logistiek",
    shortDesc:
      "Wereldwijde logistieke dienstverlener die integrale oplossingen biedt voor lucht-, zee- en wegtransport.",
    plan: "premium",
    since: "2018",
    logo: "/images/clients/mol-logistics.png",
  },
  // 2017
  {
    name: "Termaathuis",
    url: "https://termaathuis.nl",
    industry: "Vastgoed / seniorenwoningen",
    shortDesc:
      "Stijlvol wooncomplex in Rotterdamse wijk Kralingen met 68 huurappartementen voor zelfstandig wonende 70-plussers.",
    plan: "pro",
    since: "2017",
  },
  // 2016
  {
    name: "Evie Hair",
    url: "https://eviehair.nl/",
    industry: "Beauty",
    shortDesc: "Beauty-totaalconcept in Rotterdam-Schiebroek.",
    plan: "pro",
    since: "2016",
  },
  // Geen subscriptionStartDate (al langer klant of via andere route)
  {
    name: "Roll Group",
    url: "https://www.roll-group.com/",
    industry: "Maritieme logistiek & zwaar transport",
    shortDesc:
      "Wereldwijde specialist in transport en installatie van zware ladingen, te land en ter zee.",
    plan: "premium",
    since: null,
    logo: "/images/clients/roll-group-real.webp",
  },
  {
    name: "Mind Your Step",
    url: "https://mindyoursteprecruitment.nl/",
    industry: "Recruitment & detachering",
    shortDesc:
      "Werving- en selectiebureau gespecialiseerd in offshore-, energie- en technieksectoren.",
    plan: "pro",
    since: null,
  },
  {
    name: "Mind Your Head",
    url: "https://mindyourheadrecruitment.nl/",
    industry: "Recruitment & detachering",
    shortDesc:
      "Werving- en selectiebureau voor IT, techniek en (project)management.",
    plan: "pro",
    since: null,
  },
  {
    name: "Tuboson",
    url: "https://www.tobuscon.nl/",
    industry: "ICT-dienstverlening",
    shortDesc:
      "Partner in automatisering die bedrijven helpt hun administratieve en financiële processen efficiënter in te richten.",
    plan: "pro",
    since: null,
  },
  {
    name: "Bookkpr",
    url: "https://bookkpr.nl/",
    industry: "Accountancy",
    shortDesc:
      "Modern administratiekantoor dat ondernemers volledig ontzorgt via online boekhouding.",
    plan: "essential",
    since: null,
  },
  {
    name: "De Samenleesclub",
    url: "https://deleesclub.webgrowth.company",
    industry: "Sociaal-culturele onderneming",
    shortDesc:
      "Initiatief dat literatuur inzet als middel voor welzijn en verbinding (voorheen De Culturele Apotheek).",
    plan: "pro",
    since: null,
  },
  {
    name: "HIFC",
    url: "https://hifc.nl/",
    industry: "Financieel & consultancy",
    shortDesc:
      "Haans Interim Finance & Consultancy biedt hoogwaardige financiële ondersteuning aan ondernemingen.",
    plan: "essential",
    since: null,
  },
  {
    name: "Fijnance",
    url: "https://fijnance.nl/",
    industry: "Financieel advies",
    shortDesc: "Financieel adviesbureau uit Breda voor ondernemers.",
    plan: "pro",
    since: null,
  },
  {
    name: "Marketing met Pit",
    url: "https://marketingmetpit.nl/",
    industry: "Marketing",
    shortDesc: "Strategisch marketingbureau uit Gouda voor het MKB.",
    plan: "pro",
    since: null,
  },
  {
    name: "PractiPlan",
    url: "https://practiplan.com/",
    industry: "Software (SaaS)",
    shortDesc:
      "Online planningsplatform speciaal ontwikkeld voor praktijken, klinieken en arbodiensten.",
    plan: "pro",
    since: null,
  },
  {
    name: "InterDam",
    url: "https://interdam.nl/",
    industry: "Industrie",
    shortDesc:
      "Industriële specialist in metaalbewerking en maatwerkproductie.",
    plan: "pro",
    since: null,
    logo: "/images/clients/interdam.png",
  },
]
