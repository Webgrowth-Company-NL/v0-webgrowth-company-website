import type { MetadataRoute } from "next";
import { ALL_PAGES } from "@/lib/pages";
import { FIELD_LOGS } from "@/lib/field-logs";
import { CASE_STUDIES } from "@/lib/cases";

const BASE = "https://webgrowth.company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    ...ALL_PAGES.filter((p) => !p.noindex).map((p) => p.path),
    "/field-logs",
    ...FIELD_LOGS.map((l) => `/field-logs/${l.slug}`),
    ...CASE_STUDIES.map((c) => `/cases/${c.slug}`),
  ];
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
