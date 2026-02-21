"use client";

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/ui/scroll-area/scroll-area";
import { Icon } from "@/liftkit/ui";

export function RichCodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex"><Icon name="copy"/></div>
      <ScrollArea style={{ width: "100%", height: "500px" }}>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <div>{children}</div>
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
      ;
    </>
  );
}
