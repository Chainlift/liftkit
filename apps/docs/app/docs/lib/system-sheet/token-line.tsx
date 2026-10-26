"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Docs-only (not LiftKit): draws a token as a line of exactly its computed width, plus the width as text.
 * The end caps sit outside the line, so only the segment itself is the measurement. A ResizeObserver
 * re-reads the width whenever the theme panel changes anything the token depends on.
 */
export function TokenLine({ cssVar }: { cssVar: string }) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const read = () => setWidth(line.getBoundingClientRect().width);
    read();
    const observer = new ResizeObserver(read);
    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="system-token-line">
      <span className="system-token-cap" />
      <span ref={lineRef} className="system-token-segment" style={{ width: `var(${cssVar})` }} />
      <span className="system-token-cap" />
      <span className="system-token-value subheading mono color-primary">
        {width === null ? "" : `${Number(width.toFixed(2))}px`}
      </span>
    </div>
  );
}
