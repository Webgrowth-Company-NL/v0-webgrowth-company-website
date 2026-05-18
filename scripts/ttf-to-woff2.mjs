// Converteert de Gottak TTF-fonts naar WOFF2.
// Run met: node scripts/ttf-to-woff2.mjs
// Een eenmalige actie; daarna komen de .woff2-bestanden in git en hoeven we dit
// niet meer te draaien.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { compress } from "wawoff2";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONT_DIR = path.resolve(__dirname, "..", "public", "fonts");

const FONTS = [
  "Gottak-Regular.ttf",
  "Gottak-SemiBoldItalic.ttf",
  "Gottak-Bold.ttf",
];

for (const file of FONTS) {
  const src = path.join(FONT_DIR, file);
  const dst = path.join(FONT_DIR, file.replace(/\.ttf$/, ".woff2"));
  const ttf = await readFile(src);
  const woff2 = await compress(ttf);
  await writeFile(dst, woff2);
  const ratio = ((1 - woff2.length / ttf.length) * 100).toFixed(1);
  console.log(`${file}: ${ttf.length} → ${woff2.length} bytes (-${ratio}%)`);
}
