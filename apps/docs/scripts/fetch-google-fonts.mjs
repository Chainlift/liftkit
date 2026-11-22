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

const res = await fetch(SOURCE);
if (!res.ok) {
  console.error(`Fetch failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const data = await res.json();
const families = data.familyMetadataList
  .map((f) => ({ family: f.family, category: f.category }))
  .sort((a, b) => a.family.localeCompare(b.family));

await writeFile(
  OUT,
  JSON.stringify({ fetchedAt: new Date().toISOString(), families }, null, 0) + "\n"
);
console.log(`Wrote ${families.length} families to ${OUT}`);
