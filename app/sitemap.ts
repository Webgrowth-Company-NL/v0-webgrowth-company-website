import type { MetadataRoute } from "next";
import { ALL_PAGES } from "@/lib/pages";

const BASE = "https://webgrowth.company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", ...ALL_PAGES.filter((p) => !p.noindex).map((p) => p.path)];
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
