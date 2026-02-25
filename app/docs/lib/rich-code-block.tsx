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

export function RichCodeBlock({
  children,
  html,
  knobValues,
}: {
  children?: React.ReactNode;
  html?: string;
  knobValues?: Record<string, any>;
}) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const text = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }
  
  console.log(knobValues);

  return (
    <div className="w-full relative h-full">
      <div className="absolute top-sm right-sm z-1">
        <IconButton iconName={copied ? "check" : "copy"} variant="text" onClick={handleCopy} />
      </div>
      <ScrollArea style={{ width: "100%", height: "100%" }}>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            <pre ref={preRef}>{html ? <code dangerouslySetInnerHTML={{ __html: html }} /> : children}</pre>
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
