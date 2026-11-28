import type { CSSProperties, ElementType, ReactNode } from "react";
import "./wave-text.css";

/**
 * Docs-only: text with a wave rolling through it letter by letter. Pass any string; it is split into letters at
 * render time, and each letter's delay comes from its position. Screen readers get the plain text, and the wave
 * stops for people who prefer reduced motion. Tune it with the CSS variables in wave-text.css, or per instance
 * through `style` (e.g. style={{ "--wave-rise": "0.3em" }}).
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

  return (
    <Tag data-wave-text="" className={className} style={style}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={wordIndex}>
            <span data-wave-word="">
              {Array.from(word).map((letter) => (
                <span key={index} data-wave-letter="" style={{ "--wave-index": index++ } as CSSProperties}>
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
