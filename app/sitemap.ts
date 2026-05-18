import type { MetadataRoute } from "next";
import { ALL_PAGES } from "@/lib/pages";
import { FIELD_LOGS } from "@/lib/field-logs";
import { CASE_STUDIES } from "@/lib/cases";
import { FORESTER_MODULES } from "@/lib/forester-os";

const BASE = "https://webgrowth.company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
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
  return Array.from(paths).map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
