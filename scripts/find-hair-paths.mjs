// Lists every fill="black" path in an SVG with its starting coordinate and length.
// The hair is typically near the top of the head and one of the longest black paths.
// Usage: node scripts/find-hair-paths.mjs <svg-path>
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/find-hair-paths.mjs <svg-path>");
  process.exit(1);
}
const src = readFileSync(file, "utf8");

// Match each path with fill="black" — capture the d="..." attribute and full tag for index
const re = /<path[^>]*?d="([^"]+)"[^>]*?fill="black"/g;
const re2 = /<path[^>]*?fill="black"[^>]*?d="([^"]+)"/g;
const matches = [];
let m;
while ((m = re.exec(src)) !== null) matches.push({ d: m[1], start: m.index });
while ((m = re2.exec(src)) !== null) matches.push({ d: m[1], start: m.index });

// Deduplicate by start index
const uniq = Array.from(new Map(matches.map((x) => [x.start, x])).values());

// For each path, parse the first M coordinate and compute approximate length
const rows = uniq.map(({ d, start }) => {
  const firstM = d.match(/M\s*(-?\d+(?:\.\d+)?)[ ,]+(-?\d+(?:\.\d+)?)/);
  const x = firstM ? Number(firstM[1]) : 0;
  const y = firstM ? Number(firstM[2]) : 0;
  return { x, y, len: d.length, start, preview: d.slice(0, 60) };
});

// Sort by Y (lowest = top of canvas = most likely head area)
rows.sort((a, b) => a.y - b.y);

console.log(`# Black-filled paths in ${file}`);
console.log("(top 12 sorted by Y, the hair is usually one of these — long path near top)");
console.log("");
console.log("Y\tX\tlen\tstart\tpreview");
rows.slice(0, 12).forEach((r) => {
  console.log(`${r.y}\t${r.x}\t${r.len}\t${r.start}\t${r.preview}…`);
});
