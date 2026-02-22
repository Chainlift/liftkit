"use client";

import { useRef, useState } from "react";
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
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const text = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  return (
    <div className="w-full relative">
      <div className="absolute top-md right-md z-1">
        <IconButton
          iconName={copied ? "check" : "copy"}
          variant="fill"
          color="background"
          className="shadow-sm"
          onClick={handleCopy}
        />
      </div>
      <ScrollArea style={{ width: "100%", height: "500px" }} className="px-md">
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <pre ref={preRef}>{children}</pre>
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
  );
}


