"use client";

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/ui/scroll-area/scroll-area";

export function RichCodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <>
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
