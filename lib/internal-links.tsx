import Link from "next/link";

/**
 * Specifieke termen die op de site een eigen pagina hebben en die we
 * automatisch willen omzetten naar interne links voor SEO + UX.
 *
 * Volgorde maakt uit: langste/specifiekste varianten staan boven hun
 * kortere varianten. linkifyText() matcht op longest-first zodat
 * "AI-assistent Q" niet alleen "Q" linkt, en "Lead Engine-module" niet
 * alleen "Lead Engine".
 */
const MODULE_TERMS: Array<{ term: string; href: string }> = [
  // Lead engine variants
  { term: "Lead Engine-module", href: "/forester-os/lead-engine" },
  { term: "Lead Engines", href: "/forester-os/lead-engine" },
  { term: "Lead Engine", href: "/forester-os/lead-engine" },

  // Q (AI) variants
  { term: "AI-assistent Q", href: "/forester-os/ai" },
  { term: "Q-assistent", href: "/forester-os/ai" },
  { term: "Q-module", href: "/forester-os/ai" },

  // Forester OS hub
  { term: "Forester OS-pakket", href: "/forester-os" },
  { term: "Forester OS", href: "/forester-os" },

  // Modules
  { term: "Website-module", href: "/forester-os/website" },
  { term: "CRM-module", href: "/forester-os/crm" },
  { term: "SEO-module", href: "/forester-os/seo" },
  { term: "Content publisher", href: "/forester-os/content-publisher" },
  { term: "content publisher", href: "/forester-os/content-publisher" },
  { term: "Nieuwsbrieven-module", href: "/forester-os/nieuwsbrieven" },
  { term: "Sales Engine", href: "/forester-os/sales-engine" },
  { term: "Advertenties-module", href: "/forester-os/advertenties" },

  // Premium features
  { term: "integraties met externe tools", href: "/forester-os/integraties" },
  { term: "marketing automations", href: "/forester-os/automations" },
  { term: "priority support", href: "/forester-os/priority-support" },
  { term: "custom platform", href: "/forester-os/custom-platform" },
];

const LINK_CLASS =
  "text-[color:var(--color-purple)] hover:text-[color:var(--color-purple-hover)] underline decoration-[color:var(--color-purple)]/35 decoration-1 underline-offset-[3px] hover:decoration-[color:var(--color-purple)] transition-colors";

/**
 * Vervang in een tekst de eerste keer dat een bekende module-term voorkomt
 * door een Link naar de bijbehorende pagina. Elke pagina krijgt per tekstblok
 * maximaal één link, om over-linking te voorkomen.
 */
export function linkifyText(text: string): React.ReactNode {
  // Sort by term length descending zodat de langste/specifiekste varianten eerst matchen.
  const sortedTerms = [...MODULE_TERMS].sort((a, b) => b.term.length - a.term.length);

  const usedHrefs = new Set<string>();
  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let keyCounter = 0;

  while (remaining.length > 0) {
    let earliest: { index: number; term: string; href: string } | null = null;
    for (const t of sortedTerms) {
      if (usedHrefs.has(t.href)) continue;
      const idx = remaining.indexOf(t.term);
      if (idx === -1) continue;
      if (!earliest || idx < earliest.index) {
        earliest = { index: idx, term: t.term, href: t.href };
      }
    }
    if (!earliest) {
      nodes.push(remaining);
      break;
    }
    if (earliest.index > 0) {
      nodes.push(remaining.slice(0, earliest.index));
    }
    nodes.push(
      <Link key={`il-${keyCounter++}`} href={earliest.href} className={LINK_CLASS}>
        {earliest.term}
      </Link>,
    );
    remaining = remaining.slice(earliest.index + earliest.term.length);
    usedHrefs.add(earliest.href);
  }

  return nodes;
}
