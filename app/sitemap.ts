import type { MetadataRoute } from "next";
import { ALL_PAGES } from "@/lib/pages";
import { FIELD_LOGS } from "@/lib/field-logs";
import { CASE_STUDIES } from "@/lib/cases";
import { FORESTER_MODULES } from "@/lib/forester-os";

const BASE = "https://webgrowth.company";

/**
 * Sitemap met per-URL `lastModified` waar we 'm hebben (field logs uit hun
 * eigen date/dateModified-veld). Google gebruikt accurate lastmod om te
 * beslissen of een URL het hercrawlen waard is — als ALLES op "vandaag" staat,
 * negeert Google het signaal volledig.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  // Map met expliciete lastModified per pad
  const lastmod = new Map<string, Date>();

  // Field logs: per-post datum, dateModified gaat boven date
  for (const log of FIELD_LOGS) {
    const iso = log.dateModified ?? log.date;
    lastmod.set(`/field-logs/${log.slug}`, new Date(iso));
  }
  // Field-logs index: meest recente log-datum (anders meeste freshness verloren)
  const newestLog = [...FIELD_LOGS]
    .sort((a, b) => (a.dateModified ?? a.date) > (b.dateModified ?? b.date) ? -1 : 1)[0];
  if (newestLog) {
    lastmod.set("/field-logs", new Date(newestLog.dateModified ?? newestLog.date));
  }

  // Dedup via Set: ALL_PAGES heeft 8 forester-os modules, FORESTER_MODULES heeft
  // de hele lijst inclusief Growth/Scale-features (advertenties, integraties,
  // automations, priority-support, custom-platform). Set zorgt dat we elke
  // module-URL maar één keer in de sitemap krijgen.
  const paths = new Set<string>([
    "/",
    ...ALL_PAGES.filter((p) => !p.noindex).map((p) => p.path),
    "/field-logs",
    ...FIELD_LOGS.map((l) => `/field-logs/${l.slug}`),
    ...CASE_STUDIES.map((c) => `/cases/${c.slug}`),
    ...FORESTER_MODULES.map((m) => `/forester-os/${m.slug}`),
  ]);

  return Array.from(paths).map((path) => {
    const isHome = path === "/";
    const isFieldLogPost = path.startsWith("/field-logs/") && path !== "/field-logs";
    return {
      url: `${BASE}${path}`,
      lastModified: lastmod.get(path) ?? buildDate,
      // Field logs zijn statisch na publicatie, modules/pages updaten we
      // regelmatig, homepage staat te springen.
      changeFrequency: isFieldLogPost ? "monthly" : isHome ? "weekly" : "monthly",
      priority: isHome ? 1.0 : isFieldLogPost ? 0.8 : 0.7,
    };
  });
}
