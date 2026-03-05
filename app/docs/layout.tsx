import { getDocsNav } from "@/lib/docs-nav";
import Link from "next/link";
import { TableOfContents } from "@/components/mdx/table-of-contents";
import { Table } from "lucide-react";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import { ExampleNavigationMenu } from "@/liftkit/examples";
import "./docsPage.css";
import { StateLayer } from "@/liftkit/component-definitions/state-layer/state-layer";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/component-definitions/scroll-area/scroll-area";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocsNav();

  return (
    <div>
      <ExampleNavigationMenu />
      <div className="docs-page-layout">
        <ScrollArea>
          <ScrollAreaViewport>
            <ScrollAreaContent>
              <aside>
                <GoldenBox>
                  <nav className="sidebar pb-2xl">
                    {nav.map((item) => (
                      <div key={item.href}>
                        <Link href={item.href}>
                          <div className="px-sm py-2xs relative overflow-hidden rounded-xs">
                            <h2 className="heading my-xs">{item.title}</h2>
                            <StateLayer />
                          </div>
                        </Link>
                        {item.children?.map((c) => (
                          <Link key={c.href} href={c.href}>
                            <div className="px-sm py-2xs relative overflow-hidden rounded-2xs">
                              <span className="callout ">{c.title}</span>

                              <StateLayer />
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </nav>
                </GoldenBox>
              </aside>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaCorner />
        </ScrollArea>
        <ScrollArea>
          <ScrollAreaViewport>
            <ScrollAreaContent style={{ minWidth: "0px" }}>
              <main style={{ width: "100%" }}>
                <GoldenBox scaleFactor="title1" opticalCorrection="top" className="w-full">
                  {children}
                </GoldenBox>
              </main>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>

          <ScrollAreaCorner />
        </ScrollArea>
        <ScrollArea>
          <ScrollAreaViewport>
            <ScrollAreaContent>
              <aside data-slot="right-sidebar" className="border-l">
                <GoldenBox scaleFactor="body">
                  <TableOfContents />
                </GoldenBox>
              </aside>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaCorner />
        </ScrollArea>
      </div>
    </div>
  );
}
