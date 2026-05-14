// Recolor the hair fill (currently fill="black") to the blonde #EAC26A used on
// digital-writing.svg. Picks the longest fill="black" path with Y<600 (head area).
// Usage: node scripts/recolor-hair.mjs <svg-file> [...more files]
import { readFileSync, writeFileSync } from "node:fs";

const HAIR_COLOR = "#EAC26A";
const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/recolor-hair.mjs <svg-file> [...]");
  process.exit(1);
}

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const pathRe = /<path\b[^>]*?>/g;
  let bestStart = -1;
  let bestEnd = -1;
  let bestLen = -1;
  let bestY = 0;
  let m;
  while ((m = pathRe.exec(src)) !== null) {
    const tag = m[0];
    if (!/fill="black"/.test(tag)) continue;
    const dMatch = tag.match(/d="([^"]+)"/);
    if (!dMatch) continue;
    const d = dMatch[1];
    const first = d.match(/M\s*(-?\d+(?:\.\d+)?)[ ,]+(-?\d+(?:\.\d+)?)/);
    const y = first ? Number(first[2]) : 0;
    if (y > 600) continue; // hair only — skip body/limbs lower down
    if (d.length > bestLen) {
      bestLen = d.length;
      bestStart = m.index;
      bestEnd = m.index + tag.length;
      bestY = y;
    }
  }
  if (bestStart < 0) {
    console.log(`  SKIP ${file} — no fill="black" path with Y<600 found`);
    continue;
  }
  const original = src.slice(bestStart, bestEnd);
  const recolored = original.replace(/fill="black"/, `fill="${HAIR_COLOR}"`);
  if (recolored === original) {
    console.log(`  SKIP ${file} — replacement didn't change the tag`);
    continue;
  }
  const out = src.slice(0, bestStart) + recolored + src.slice(bestEnd);
  writeFileSync(file, out);
  console.log(`  OK   ${file} — hair path Y=${bestY} len=${bestLen} recolored to ${HAIR_COLOR}`);
}
