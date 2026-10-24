import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = path.join(process.cwd(), "app", "docs");

type NavItem = { title: string; href: string; children?: NavItem[] };

function titleFromSegment(seg: string) {
  return seg
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getDocsNav(): NavItem[] {
  function walk(dir: string, baseHref: string): NavItem[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const items: NavItem[] = [];

    for (const e of entries) {
      if (!e.isDirectory()) continue;

      const seg = e.name;
      const childDir = path.join(dir, seg);

      // If it has page.mdx, treat it as a nav node
      const hasPage =
        fs.existsSync(path.join(childDir, "page.mdx")) ||
        fs.existsSync(path.join(childDir, "page.tsx"));

      const href = `${baseHref}/${seg}`;
      const children = walk(childDir, href);

      if (hasPage || children.length) {
        items.push({
          title: titleFromSegment(seg),
          href,
          ...(children.length ? { children } : {}),
        });
      }
    }

    // stable ordering: folders first by name
    items.sort((a, b) => a.title.localeCompare(b.title));
    return items;
  }

  return [
    { title: "Docs", href: "/docs" },
    ...walk(DOCS_DIR, "/docs"),
  ];
}
