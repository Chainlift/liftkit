import { getDocsNav } from "@/lib/docs-nav";
import Link from "next/link";
import { TableOfContents } from "@/components/mdx/table-of-contents";
import { Table } from "lucide-react";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import NavigationMenuDemo from "@/liftkit/component-definitions/navigation-menu/lk-navigation-menu-example";
import "./docsPage.css";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocsNav();

  return (
    <div>
      <NavigationMenuDemo />
      <div className="flex justify-center bg-background">
        <aside className="border-r" style={{ width: "240px" }}>
          <GoldenBox>
            <nav>
              {nav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                  {item.children?.map((c) => (
                    <div key={c.href} style={{ paddingLeft: 12 }}>
                      <Link href={c.href}>{c.title}</Link>
                    </div>
                  ))}
                </div>
              ))}
            </nav>
          </GoldenBox>
        </aside>
        <main style={{ minWidth: "0px", maxWidth: "80ch", flex: "1" }}>
          <GoldenBox scaleFactor="title1" opticalCorrection="top">
            {children}
          </GoldenBox>
        </main>
        <aside data-slot="right-sidebar" className="border-l" style={{ width: "240px" }}>
          <GoldenBox scaleFactor="body">
            <TableOfContents />
          </GoldenBox>
        </aside>
      </div>
    </div>
  );
}
