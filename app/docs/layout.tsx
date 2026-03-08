import { getDocsNav } from "@/lib/docs-nav";
import { TableOfContents } from "@/components/mdx/table-of-contents";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import { ExampleNavigationMenu } from "@/liftkit/examples";
import "./docsPage.css";
import { NavSidebar } from "@/app/docs/lib/nav-sidebar";
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
        <div className="left-sidebar">
          <ScrollArea>
            <ScrollAreaViewport>
              <ScrollAreaContent>
                <aside>
                  <NavSidebar nav={nav} />
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

        <main style={{ width: "100%" }}>
          <GoldenBox scaleFactor="title1" opticalCorrection="top" className="w-full">
            {children}
          </GoldenBox>
        </main>
        <div className="right-sidebar">
          <ScrollArea>
            <ScrollAreaViewport>
              <ScrollAreaContent className="pl-0">
                <aside>
                  <GoldenBox scaleFactor="body">
                    <TableOfContents />
                  </GoldenBox>
                </aside>
              </ScrollAreaContent>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar>
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
            <ScrollAreaCorner />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
