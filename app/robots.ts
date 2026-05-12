import type { MetadataRoute } from "next";

const BASE = "https://webgrowth.company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/inloggen"] },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
