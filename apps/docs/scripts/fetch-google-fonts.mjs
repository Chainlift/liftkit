#!/usr/bin/env node
/**
 * Fetches the Google Fonts catalog (keyless public metadata endpoint) and
 * writes a slim JSON of `{ family, category }` entries into `content/`.
 * Run with `pnpm -F @liftkit/docs fonts:fetch` (or directly with node).
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../content/google-fonts.json");
const SOURCE = "https://fonts.google.com/metadata/fonts";

/**
 * Only these families are kept: the picker used to list all ~1,960, which made the combobox slow to open and type
 * in. Add names here to grow the list, or set this to null to keep every family.
 */
const ALLOWED = [
  // Sans serif
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins", "Work Sans", "DM Sans", "Manrope", "Nunito",
  // Serif
  "Playfair Display", "Merriweather", "Lora", "Source Serif 4",
  // Display / slab
  "Roboto Slab", "Space Grotesk",
  // Monospace
  "JetBrains Mono", "IBM Plex Mono", "Fira Code", "Space Mono",
];

const res = await fetch(SOURCE);
if (!res.ok) {
  console.error(`Fetch failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const data = await res.json();
const all = data.familyMetadataList.map((f) => ({ family: f.family, category: f.category }));
if (ALLOWED) {
  const missing = ALLOWED.filter((name) => !all.some((f) => f.family === name));
  if (missing.length) {
    console.error(`Not in the Google Fonts catalog: ${missing.join(", ")}`);
    process.exit(1);
  }
}
const families = all
  .filter((f) => !ALLOWED || ALLOWED.includes(f.family))
  .sort((a, b) => a.family.localeCompare(b.family));

await writeFile(
  OUT,
  JSON.stringify({ fetchedAt: new Date().toISOString(), families }, null, 0) + "\n"
);
console.log(`Wrote ${families.length} families to ${OUT}`);
