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
import "./syntax-highlight.css";
import { IconButton } from "@/liftkit/ui/icon-button/icon-button";

export function RichCodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative">
      <div className="absolute top-md right-md z-1">
        <IconButton iconName="copy" variant="fill" color="background" className="shadow-sm"/>
      </div>
      <ScrollArea style={{ width: "100%", height: "500px" }}>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <pre>{children}</pre>
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
    </div>
  );
}

