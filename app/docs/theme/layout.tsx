import { getDocsNav } from "@/lib/docs-nav";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import { ExampleNavigationMenu } from "@/liftkit/examples";
import "../docsPage.css";
import { NavSidebar } from "@/app/docs/lib/nav-sidebar";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/component-definitions/scroll-area/scroll-area";
import { ThemePanel } from "@/app/docs/theme-panel/theme-panel";

export default function ThemeLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocsNav();

  return (
    <div>
      <ExampleNavigationMenu />
      <ThemePanel />
      <div className="flex">
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

        <main style={{ width: "100%", gridColumn: "1/3" }}>
          <GoldenBox scaleFactor="title1" opticalCorrection="top" className="w-full">
            {children}
          </GoldenBox>
        </main>
       
      </div>
    </div>
  );
}
