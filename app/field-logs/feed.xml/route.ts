import { FIELD_LOGS } from "@/lib/field-logs";

/**
 * RSS 2.0 feed voor de field logs.
 *
 * Extra ontdekkingskanaal voor Google, Feedly, sommige AI-crawlers en
 * RSS-lezers die jullie content opvolgen. Linkt vanuit de <head> van
 * /field-logs zodat browsers/aggregators 'm vinden.
 */

const BASE = "https://webgrowth.company";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(dateIso: string): string {
  // RSS 2.0 vereist RFC-822-datums (bv. "Tue, 26 May 2026 00:00:00 GMT")
  return new Date(dateIso).toUTCString();
}

export async function GET() {
  const sorted = [...FIELD_LOGS].sort((a, b) => (a.date > b.date ? -1 : 1));

  const items = sorted
    .map((l) => {
      const url = `${BASE}/field-logs/${l.slug}`;
      const title = escapeXml(l.metaTitle ?? l.title);
      const description = escapeXml(l.metaDescription ?? l.excerpt);
      const pubDate = rfc822(l.date);
      const updated = rfc822(l.dateModified ?? l.date);
      const category = escapeXml(l.tag);
      return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <atom:updated>${updated}</atom:updated>
      <category>${category}</category>
      <dc:creator>Martijn Duin</dc:creator>
      <description>${description}</description>
    </item>`;
    })
    .join("\n");

  const latest = sorted[0];
  const lastBuildDate = latest ? rfc822(latest.dateModified ?? latest.date) : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Webgrowth Field Logs</title>
    <link>${BASE}/field-logs</link>
    <atom:link href="${BASE}/field-logs/feed.xml" rel="self" type="application/rss+xml" />
    <description>Bevindingen uit de praktijk: Forester OS, Sales Engines, Lead Engines, AI in het MKB.</description>
    <language>nl-NL</language>
    <copyright>© ${new Date().getFullYear()} Webgrowth Company</copyright>
    <managingEditor>martijn@webgrowth.company (Martijn Duin)</managingEditor>
    <webMaster>martijn@webgrowth.company (Martijn Duin)</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js 16 (Webgrowth Company)</generator>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      // CDN-cache 1 uur, browsers 5 min — feed is statisch tot we publiceren.
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  });
}
