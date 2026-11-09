"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Docs-only (not LiftKit): draws a token as a line of exactly its computed width, plus the width as text.
 * The end caps sit outside the line, so only the segment itself is the measurement. A ResizeObserver
 * re-reads the width whenever the theme panel changes anything the token depends on. Unitless tokens
 * (the scale factors) are drawn as that many em at 1em = 16px and read out as a plain number.
 */
export function TokenLine({ width: cssWidth, unitlessVar }: { width: string; unitlessVar?: string }) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    // Layout snaps to 1/64px, which would blur a short line's value (1.618 reads as 1.617), so a unitless
    // value is read from a hidden probe that is 1000px per unit instead of 16px.
    const probe = probeRef.current;
    const read = () => setWidth(probe ? probe.getBoundingClientRect().width / 1000 : line.getBoundingClientRect().width);
    read();
    const observer = new ResizeObserver(read);
    observer.observe(probe ?? line);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="system-token-line">
      <span className="system-token-cap" />
      <span ref={lineRef} className="system-token-segment" style={{ width: cssWidth }} />
      <span className="system-token-cap" />
      {unitlessVar && (
        <span ref={probeRef} className="system-token-probe" style={{ width: `calc(var(${unitlessVar}) * 1000px)` }} />
      )}
      <span className="system-token-value subheading mono color-primary">
        {width === null ? "" : unitlessVar ? Number(width.toFixed(3)) : `${Number(width.toFixed(2))}px`}
      </span>
    </div>
  );
}
