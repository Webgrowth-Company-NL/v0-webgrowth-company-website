/**
 * IndexNow submission script.
 *
 * Stuurt na elke productie-build alle canonical URL's van de marketingsite
 * naar de IndexNow API. Bing, Yandex en Naver delen die index en updaten
 * binnen minuten. ChatGPT-search, Perplexity en Claude.ai gebruiken Bing
 * onder de motorkap, dus dit is de snelste route naar AI-search-zichtbaarheid.
 *
 * Google doet niet mee aan IndexNow, dus voor Google blijft het sitemap.xml
 * + handmatige URL Inspection in GSC.
 *
 * Draait als `postbuild` hook in package.json. Werkt ook lokaal:
 *   node scripts/indexnow-submit.mjs
 *
 * Skipt zichzelf wanneer:
 *   - we niet op Vercel production zijn (preview/dev builds pingen we niet)
 *   - SKIP_INDEXNOW=1 in de env staat
 */

const KEY = "7c5b7f53675323dc85693527b7f19b84";
const HOST = "webgrowth.company";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const isVercelProd =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "production";
const skipReason =
  process.env.SKIP_INDEXNOW === "1"
    ? "SKIP_INDEXNOW=1"
    : process.env.VERCEL === "1" && !isVercelProd
      ? `Vercel ${process.env.VERCEL_ENV} build (alleen production submit)`
      : null;

if (skipReason) {
  console.log(`[indexnow] skipping: ${skipReason}`);
  process.exit(0);
}

// We laden de URL-lijsten dynamisch uit de TypeScript-bronbestanden. Omdat
// dit een .mjs-script is dat na `next build` draait, hebben we geen TS-loader.
// Daarom parsen we de slugs uit de bronbestanden met een eenvoudige regex.
// Dit is robuust genoeg voor onze huidige data-bestanden, en voorkomt een
// build-stap voor het script zelf.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function extractSlugs(filePath) {
  try {
    const src = readFileSync(resolve(root, filePath), "utf8");
    const slugs = [];
    const re = /slug:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(src)) !== null) {
      slugs.push(m[1]);
    }
    return slugs;
  } catch (err) {
    console.warn(`[indexnow] failed to read ${filePath}: ${err.message}`);
    return [];
  }
}

const fieldLogSlugs = extractSlugs("lib/field-logs.ts");
const caseSlugs = extractSlugs("lib/cases.ts");
const moduleSlugs = extractSlugs("lib/forester-os.ts");

const staticPaths = [
  "/",
  "/prijzen",
  "/forester-os",
  "/website-apk",
  "/contact",
  "/over",
  "/cases",
  "/field-logs",
];

const urlList = [
  ...staticPaths,
  ...fieldLogSlugs.map((s) => `/field-logs/${s}`),
  ...caseSlugs.map((s) => `/cases/${s}`),
  ...moduleSlugs.map((s) => `/forester-os/${s}`),
].map((p) => `https://${HOST}${p}`);

// Dedup
const uniqueUrls = Array.from(new Set(urlList));

console.log(
  `[indexnow] submitting ${uniqueUrls.length} URLs to IndexNow (Bing/Yandex/Naver)`,
);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: uniqueUrls,
};

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "Webgrowth-IndexNow/1.0",
    },
    body: JSON.stringify(payload),
  });

  // IndexNow stuurt 200 of 202 bij succes. 422 = invalid URLs (dan loggen we).
  // 400/403 = key fout (dan harde fail want config zit niet goed).
  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] ok (${res.status}): ${uniqueUrls.length} URLs accepted`);
  } else if (res.status === 422) {
    const text = await res.text().catch(() => "");
    console.warn(`[indexnow] partial (422): some URLs invalid. ${text}`);
  } else {
    const text = await res.text().catch(() => "");
    console.error(`[indexnow] FAIL (${res.status}): ${text}`);
    // Niet de hele build laten falen. SEO-tooling moet hands-off zijn.
    process.exit(0);
  }
} catch (err) {
  console.error(`[indexnow] network error: ${err.message}`);
  process.exit(0);
}
