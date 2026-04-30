import type { MetadataRoute } from "next"
import { fieldLogs } from "@/lib/field-logs-data"
import { cases } from "@/lib/cases-data"

const BASE = "https://webgrowth.company"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/hoe-het-werkt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/prijzen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/succesverhalen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/field-logs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/website-apk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/momentum-scan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/hubspot-alternatief`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacyverklaring`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/algemene-voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${BASE}/succesverhalen/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const fieldLogRoutes: MetadataRoute.Sitemap = fieldLogs.map((log) => ({
    url: `${BASE}/field-logs/${log.slug}`,
    lastModified: new Date(log.dateTime),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...caseRoutes, ...fieldLogRoutes]
}
