import type { CSSProperties, ElementType, ReactNode } from "react";
import "./wave-text.css";

/**
 * Docs-only: text that ripples like a flag in the wind, pinned at its left edge. Pass any string; it is split into
 * letters at render time, and each letter's motion and delay come from its place along the width, so any length of
 * text sweeps in the same time. Screen readers get the plain text, and the motion stops for people who prefer
 * reduced motion. Tune it with the CSS variables in wave-text.css, or per instance through `style`
 * (e.g. style={{ "--wave-rise": "0.3em" }}).
 */
export function WaveText({
  children,
  as: Tag = "span",
  className,
  style,
}: {
  children: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}): ReactNode {
  let index = 0;
  const words = children.split(/\s+/).filter(Boolean);
  // Each letter's place along the width (0 at the left "pole", 1 at the free end) sets its motion and its delay
  const last = Math.max(1, words.reduce((sum, word) => sum + Array.from(word).length, 0) - 1);

  return (
    <Tag data-wave-text="" className={className} style={style}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={wordIndex}>
            <span data-wave-word="">
              {Array.from(word).map((letter) => (
                <span key={index} data-wave-letter="" style={{ "--wave-x": index++ / last } as CSSProperties}>
                  {letter}
                </span>
              ))}
            </span>
            {wordIndex < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </Tag>
  );
}
