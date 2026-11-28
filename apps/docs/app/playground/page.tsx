import {
  GoldenBox,
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  Section,
  Tabs,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "liftkit";
import { SiteHeader } from "@/components/site-header";
import { SiteSearch } from "@/components/site-search";
import { ComponentMosaicV2 } from "@/app/docs/lib/component-mosaic-v2";
import { ThemePanel } from "@/app/docs/theme-panel/theme-panel";
import { AllComponents } from "@/app/docs/lib/all-components";
import { SystemSheet } from "@/app/docs/lib/system-sheet/system-sheet";
import { ColorTones } from "./color-tones";

const FONT_CLASSES = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "heading",
  "body",
  "callout",
  "subheading",
  "label",
  "caption",
  "capline",
] as const;

/** The font class list, with every preview in the class's utility class plus `suffix` ("", "-bold" or "-mono"). */
function FontClassList({ suffix }: { suffix: "" | "-bold" | "-mono" }) {
  return (
    <div className="flex-v w-full">
      {FONT_CLASSES.map((fontClass, index) => (
        // The box scales with the class, so bigger text gets taller rows. noPadding="x" because side
        // padding that scales per row would push each row's name to a different left edge.
        <GoldenBox
          key={fontClass}
          scaleFactor={fontClass}
          noPadding="x"
          className={
            index < FONT_CLASSES.length - 1
              ? "border-b border-color-outlinevariant"
              : undefined
          }
        >
          {/* A grid, so every row's name cell is the same width. The fixed rem track keeps the
                previews lined up whatever the font class; minmax(0, 1fr) lets .nowrap cut long text
                with an ellipsis instead of widening the column. */}
          <div
            className="display-grid items-center gap-xl"
            style={{
              gridTemplateColumns: "9rem minmax(0, 1fr)",
            }}
          >
            <span className="label">{fontClassName(fontClass)}</span>
            <p className={`${fontClass}${suffix} nowrap`}>
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </GoldenBox>
      ))}
    </div>
  );
}

/** "display1" -> "Display 1" */
function fontClassName(fontClass: string): string {
  const spaced = fontClass.replace(/(\D)(\d)/, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export default function PlayGround() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex-v overflow-hidden bg-surfacecontainerlowest">
      <SiteHeader>
        <SiteSearch />
      </SiteHeader>
      <div className="flex flex-row items-start flex-grow  px-md pb-md gap-md ">
        <div className="flex flex-column h-full">
          <ThemePanel />
        </div>
        <div className="overflow-hidden h-full flex flex-col flex-grow ">
          <Tabs
            defaultValue="components"
            className="flex-v w-full h-full bg-surface rounded-sm border border-color-outlinevariant"
          >
            <TabsList className="border-b border-color-outlinevariant ">
              <TabsTab value="components">Sample layout</TabsTab>
              <TabsTab value="all-components">List view</TabsTab>
              <TabsTab value="font-classes">Font Classes</TabsTab>
              <TabsTab value="colors">Colors</TabsTab>
              <TabsTab value="system">System</TabsTab>
              <TabsIndicator />
            </TabsList>
            <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
              <ScrollAreaViewport>
                <ScrollAreaContent
                  className="p-0"
                  style={{ minHeight: "100%" }}
                >
                  <TabsPanel value="components" className="flex-grow">
                    <Section padding="xl" className="w-full self-stretch ">
                      <ComponentMosaicV2 />
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="all-components" className="flex-grow">
                    <Section padding="xl" className="w-full self-stretch ">
                      <AllComponents />
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="font-classes" className="flex-grow">
                    <Section padding="xl" className="w-full self-stretch ">
                      <Tabs
                        variant="contained"
                        tabListItemsShouldGrow
                        defaultValue="normal"
                      >
                        <TabsList className="mb-md">
                          <TabsTab value="normal">Normal</TabsTab>
                          <TabsTab value="bold">Bold</TabsTab>
                          <TabsTab value="mono">Mono</TabsTab>
                          <TabsIndicator />
                        </TabsList>
                        {/* A tab panel centers its content, so each one holds a single full-width column */}
                        <TabsPanel value="normal" className="w-full">
                          <FontClassList suffix="" />
                        </TabsPanel>
                        <TabsPanel value="bold" className="w-full">
                          <FontClassList suffix="-bold" />
                        </TabsPanel>
                        <TabsPanel value="mono" className="w-full">
                          <FontClassList suffix="-mono" />
                        </TabsPanel>
                      </Tabs>
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="colors" className="flex-grow">
                    <Section padding="xl" className="w-full self-stretch ">
                      <ColorTones />
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="system" className="flex-grow">
                    <Section padding="xl" className="w-full self-stretch ">
                      <SystemSheet />
                    </Section>
                  </TabsPanel>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
}
