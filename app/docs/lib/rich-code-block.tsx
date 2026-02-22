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
import styles from "./syntax-highlight.module.css";

export function RichCodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="flex">
        <Icon name="copy" />
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

