import fs from "node:fs";
import path from "node:path";
import { componentDocs } from "@/content/components/registry";

const DOCS_DIR = path.join(process.cwd(), "app", "docs");

export type NavItem = { title: string; href: string };
export type NavSection = { title: string; items: NavItem[] };

/**
 * Sidebar sections, in display order. A section lists the pages found in `dir`
 * (relative to app/docs, so new pages appear automatically; "." means pages
 * directly under app/docs, like getting-started) plus any `extraItems`.
 */
const SECTIONS: { title: string; dir: string | null; extraItems?: () => NavItem[] }[] = [
  { title: "Overview", dir: "." },
  {
    title: "Components",
    // Every component page is rendered by the shared template at components/[slug]
    dir: null,
    extraItems: () =>
      Object.entries(componentDocs).map(([slug, { meta }]) => ({ title: meta.title, href: `/docs/components/${slug}` })),
  },
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
    .filter((e) => e.isDirectory() && !e.name.startsWith("[") && hasPage(path.join(dir, e.name)))
    .map((e) => ({ title: titleFromSegment(e.name), href: `${baseHref}/${e.name}` }));
}

export function getDocsNav(): NavSection[] {
  return SECTIONS.map(({ title, dir, extraItems }) => ({
    title,
    items: [...(dir ? pagesIn(dir) : []), ...(extraItems?.() ?? [])].sort((a, b) => a.title.localeCompare(b.title)),
  })).filter((s) => s.items.length);
}
