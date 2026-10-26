import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = path.join(process.cwd(), "app", "docs");

export type NavItem = { title: string; href: string };
export type NavSection = { title: string; items: NavItem[] };

/**
 * Sidebar sections, in display order. Each section lists the pages found in
 * `dir` (relative to app/docs), so new pages appear automatically. "." means
 * pages that sit directly under app/docs, like getting-started.
 */
const SECTIONS: { title: string; dir: string }[] = [
  { title: "Overview", dir: "." },
  { title: "Components", dir: "components" },
  { title: "Types & Tokens", dir: "types" },
];

function titleFromSegment(seg: string) {
  return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function hasPage(dir: string) {
  return fs.existsSync(path.join(dir, "page.mdx")) || fs.existsSync(path.join(dir, "page.tsx"));
}

function pagesIn(relDir: string): NavItem[] {
  const dir = path.join(DOCS_DIR, relDir);
  const baseHref = relDir === "." ? "/docs" : `/docs/${relDir}`;

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && hasPage(path.join(dir, e.name)))
    .map((e) => ({ title: titleFromSegment(e.name), href: `${baseHref}/${e.name}` }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getDocsNav(): NavSection[] {
  return SECTIONS.map(({ title, dir }) => ({ title, items: pagesIn(dir) })).filter((s) => s.items.length);
}
