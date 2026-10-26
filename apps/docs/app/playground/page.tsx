import {
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
} from "@chainlift/liftkit";
import { SiteHeader } from "@/components/site-header";
import { ComponentMosaic } from "@/app/docs/lib/component-mosaic";
import { ComponentMosaicV2 } from "@/app/docs/lib/component-mosaic-v2";
import { ThemePanel } from "@/app/docs/theme-panel/theme-panel";
import { ColorTones } from "./color-tones";

const FONT_CLASSES = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "heading",
  "subheading",
  "body",
  "callout",
  "label",
  "caption",
  "capline",
];

export default function PlayGround() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex-v overflow-hidden bg-surfacecontainerhighest">
      <SiteHeader />
      <div className="flex flex-row items-start flex-grow overflow-hidden px-md pb-md gap-md">
        <ThemePanel />
        <div className="overflow-hidden h-full flex flex-col flex-grow rounded-sm bg-surface">
          <Tabs defaultValue="components" className="flex-v w-full h-full">
            <TabsList>
              <TabsTab value="components">Components</TabsTab>
              <TabsTab value="all-components">All Components</TabsTab>
              <TabsTab value="font-classes">Font Classes</TabsTab>
              <TabsTab value="colors">Colors</TabsTab>
              <TabsIndicator />
            </TabsList>
            <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
              <ScrollAreaViewport>
                <ScrollAreaContent
                  className="p-0"
                  style={{ minHeight: "100%" }}
                >
                  <TabsPanel value="components" className="flex-grow">
                    <Section
                      padding="xl"
                      className="w-full self-stretch bg-surfacecontainerlow"
                    >
                      <ComponentMosaicV2 />
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="all-components" className="flex-grow">
                    <Section
                      padding="xl"
                      className="w-full self-stretch bg-surfacecontainerlow"
                    >
                      <ComponentMosaic />
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="font-classes" className="flex-grow">
                    <Section
                      padding="xl"
                      className="w-full self-stretch bg-surfacecontainerlow"
                    >
                      <div className="flex-h gap-xl w-full">
                        <div className="flex-v fill-container">
                          {FONT_CLASSES.map((fontClass) => (
                            <p key={fontClass} className={`${fontClass} mb-sm`}>
                              {fontClass}
                            </p>
                          ))}
                        </div>
                        <div className="flex-v fill-container">
                          {FONT_CLASSES.map((fontClass) => (
                            <p
                              key={fontClass}
                              className={`${fontClass}-bold mb-sm`}
                            >
                              {fontClass}-bold
                            </p>
                          ))}
                        </div>
                      </div>
                    </Section>
                  </TabsPanel>
                  <TabsPanel value="colors" className="flex-grow">
                    <Section
                      padding="xl"
                      className="w-full self-stretch bg-surfacecontainerlow"
                    >
                      <ColorTones />
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
