// Recolor each character's HAIR to #EAC26A.
// Strategy: per X-cluster (~one character), only recolor the TOP-most dark path
// (lowest Y) within size range. That avoids recoloring noses/eyes/mouths which
// sit lower in each character's bounding box.
// Usage: node scripts/recolor-hair.mjs <svg-file> [...more files]
import { readFileSync, writeFileSync } from "node:fs";

const HAIR_COLOR = "#EAC26A";
const LEN_MIN = 3000;
const LEN_MAX = 8000;
const Y_MAX = 900;
const X_CLUSTER_GAP = 250; // paths within this X-distance treated as same character

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/recolor-hair.mjs <svg-file> [...]");
  process.exit(1);
}

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const pathRe = /<path\b[^>]*?>/g;
  const candidates = [];
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
    candidates.push({
      start: m.index,
      end: m.index + tag.length,
      x: Number(first[1]),
      y,
      len: d.length,
      tag,
    });
  }
  if (!candidates.length) {
    console.log(`  SKIP ${file} — no candidates`);
    continue;
  }
  // Cluster by X; sort by X first
  const byX = [...candidates].sort((a, b) => a.x - b.x);
  const clusters = [];
  for (const c of byX) {
    const last = clusters[clusters.length - 1];
    if (last && c.x - last[last.length - 1].x <= X_CLUSTER_GAP) {
      last.push(c);
    } else {
      clusters.push([c]);
    }
  }
  // Per cluster pick the topmost (lowest Y) — that's the hair
  const hairs = clusters.map((cl) => cl.sort((a, b) => a.y - b.y)[0]);
  // Replace in reverse index order
  hairs.sort((a, b) => b.start - a.start);
  let out = src;
  hairs.forEach((t) => {
    const recolored = t.tag.replace(/fill="(?:black|#000)"/, `fill="${HAIR_COLOR}"`);
    out = out.slice(0, t.start) + recolored + out.slice(t.end);
  });
  writeFileSync(file, out);
  console.log(`  OK   ${file} — ${hairs.length} characters, recolored hair:`);
  hairs.forEach((t) => console.log(`         Y=${t.y.toFixed(0)} X=${t.x.toFixed(0)} len=${t.len}`));
}
