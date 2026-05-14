// Recolor hair to #EAC26A based on Storyset Digital Workforce path-size pattern.
// Reference: digital-writing.svg's hair is a fill="black" path of ~5928 chars, near top of canvas.
// We recolor every fill="black"/fill="#000" path with length in range [4000, 8000] AND Y<300.
// That matches the consistent Storyset hair-fill size while skipping outlines (12k+), eyes (<1k), big art (>20k).
// Usage: node scripts/recolor-hair.mjs <svg-file> [...more files]
import { readFileSync, writeFileSync } from "node:fs";

const HAIR_COLOR = "#EAC26A";
const LEN_MIN = 4000;
const LEN_MAX = 8000;
const Y_MAX = 300;

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/recolor-hair.mjs <svg-file> [...]");
  process.exit(1);
}

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const pathRe = /<path\b[^>]*?>/g;
  const targets = [];
  let m;
  while ((m = pathRe.exec(src)) !== null) {
    const tag = m[0];
    if (!/fill="(?:black|#000)"/.test(tag)) continue;
    const dMatch = tag.match(/d="([^"]+)"/);
    if (!dMatch) continue;
    const d = dMatch[1];
    if (d.length < LEN_MIN || d.length > LEN_MAX) continue;
    const first = d.match(/M\s*(-?\d+(?:\.\d+)?)[ ,]+(-?\d+(?:\.\d+)?)/);
    if (!first) continue;
    const y = Number(first[2]);
    if (y > Y_MAX) continue;
    const x = Number(first[1]);
    targets.push({ start: m.index, end: m.index + tag.length, x, y, len: d.length, tag });
  }
  if (!targets.length) {
    console.log(`  SKIP ${file} — no candidate hair-fill path found`);
    continue;
  }
  // Apply replacements in reverse order to keep indices valid
  targets.sort((a, b) => b.start - a.start);
  let out = src;
  targets.forEach((t) => {
    const recolored = t.tag.replace(/fill="(?:black|#000)"/, `fill="${HAIR_COLOR}"`);
    out = out.slice(0, t.start) + recolored + out.slice(t.end);
  });
  writeFileSync(file, out);
  console.log(`  OK   ${file} — recolored ${targets.length} hair path(s):`);
  targets.forEach((t) => console.log(`         Y=${t.y.toFixed(0)} X=${t.x.toFixed(0)} len=${t.len}`));
}
