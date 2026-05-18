import type { NextConfig } from "next";

/**
 * Redirects van de oude WordPress-site (webgrowth.company op dezelfde domain)
 * naar de nieuwe Next.js-structuur. Bronlijst gehaald uit de oude sitemap-index
 * (sitemap.xml + sub-sitemaps) op 2026-05-18.
 *
 * Volgorde matters: specifieke matches staan boven catch-all wildcards,
 * anders pakt een wildcard al de URL voordat de specifieke regel matcht.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      /* ── App login ─────────────────────────── */
      {
        source: "/inloggen",
        destination: "https://app.webgrowth.company/",
        permanent: true,
      },

      /* ── Placeholder-oplossingen die nog geen volle detail-content hebben,
            doorverwijzen naar de meest relevante echte pagina. ────────── */
      { source: "/oplossingen/vindbaarheid", destination: "/forester-os/seo", permanent: true },
      { source: "/oplossingen/opvolging", destination: "/forester-os/crm", permanent: true },
      { source: "/oplossingen/transport", destination: "/cases/mol-logistics", permanent: true },
      { source: "/oplossingen/mkb", destination: "/oplossingen", permanent: true },

      /* ── Succesverhaal-specifieke matches ──── */
      {
        source: "/succesverhalen/mol-logistics-eu",
        destination: "/cases/mol-logistics",
        permanent: true,
      },

      /* ── Taxonomy-onderwerp specifieke matches ── */
      { source: "/onderwerp/automation", destination: "/forester-os/automations", permanent: true },
      { source: "/onderwerp/crm", destination: "/forester-os/crm", permanent: true },
      { source: "/onderwerp/sales", destination: "/forester-os/crm", permanent: true },
      { source: "/onderwerp/bolt", destination: "/forester-os", permanent: true },
      { source: "/onderwerp/online-marketing", destination: "/forester-os", permanent: true },

      /* ── Specifieke pagina's ───────────────── */
      { source: "/over-marketing-genius", destination: "/over", permanent: true },
      { source: "/mkb-website-abonnement", destination: "/prijzen", permanent: true },
      { source: "/geniustalks", destination: "/field-logs", permanent: true },

      /* ── Wildcards per oude content-groep (zero of meer segmenten) ── */
      { source: "/mkb-website-pakket/:slug*", destination: "/prijzen", permanent: true },
      { source: "/succesverhalen/:slug*", destination: "/cases", permanent: true },
      { source: "/technisch-dagboek-van-martijn-duin/:slug*", destination: "/field-logs", permanent: true },
      { source: "/geniustalk/:slug*", destination: "/field-logs", permanent: true },
      { source: "/onderwerp/:slug*", destination: "/field-logs", permanent: true },
    ];
  },
};

export default nextConfig;
