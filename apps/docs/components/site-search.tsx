import { getDocsNav } from "@/lib/docs-nav";
import { SiteSearchBox, type SearchPage } from "./site-search-box";

/** Every page the header search can open: the docs pages, grouped by their sidebar section, plus the Theme Generator. */
export function SiteSearch() {
  const pages: SearchPage[] = [
    ...getDocsNav().flatMap((section) =>
      section.items.map((item) => ({ title: item.title, href: item.href, section: section.title })),
    ),
    { title: "Theme Generator", href: "/playground", section: "Site" },
  ];
  return <SiteSearchBox pages={pages} />;
}
