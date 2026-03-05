"use client";

import { useRef, useState, useEffect } from "react";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/component-definitions/scroll-area/scroll-area";
import { Icon } from "@/liftkit/component-definitions";
import "./syntax-highlight.css";
import { IconButton } from "@/liftkit/component-definitions/icon-button/icon-button";
import { useHighlightedCode } from "@/app/docs/lib/highlighted-code-client";

export function RichCodeBlock({
  children,
  preHighlightedCode,
  codeForClientHighlighting,
  lang,
  vertCenterButton = false,
}: {
  children?: React.ReactNode;
  preHighlightedCode?: string;
  codeForClientHighlighting?: string;
  lang?: string;
  vertCenterButton?: boolean;
}) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const [counter, setCounter] = useState(0);

  // Only run client-side highlighting when codeForClientHighlighting is provided
  const clientHtml = useHighlightedCode(codeForClientHighlighting ?? null, lang);

  function handleCopy() {
    const text = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  function buttonPlacementClassString() {
    if (vertCenterButton) {
      return "absolute top-50 right-sm ";
    } else {
      return "absolute top-sm right-sm z-1"
    }
  
  }

  return (
    <div className="w-full relative h-full">
      <div data-instance="code-block-copy-button" data-vert-center-button={vertCenterButton} >
        <IconButton iconName={copied ? "check" : "copy"} variant="fill" onClick={handleCopy} color="inversesurface" />
      </div>
      <ScrollArea style={{ width: "100%", height: "100%" }}>
        <ScrollAreaViewport>
          <ScrollAreaContent>
            {clientHtml ? (
              <div ref={preRef as any} dangerouslySetInnerHTML={{ __html: clientHtml }} />

            ) : (
              <pre ref={preRef}>
                <code dangerouslySetInnerHTML={{ __html: preHighlightedCode ?? "" }}></code>
              </pre>
            )}
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
