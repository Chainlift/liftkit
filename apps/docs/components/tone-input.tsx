"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { Input } from "liftkit";
import "./tone-input.css";

const MIN_TONE = 0;
const MAX_TONE = 100;

/**
 * Docs-only: like the library's ColorInput, but it edits a tone (0-100) instead of a hex color. The swatch previews
 * the color at that tone, it isn't clickable.
 */
export function ToneInput({
  value,
  color,
  onValueChange,
  disabled = false,
  className,
  "aria-label": label = "Tone",
  ...props
}: Omit<ComponentProps<"div">, "onChange" | "defaultValue"> & {
  /** The current tone, 0-100. */
  value: number;
  /** The color at this tone, shown in the swatch. */
  color: string;
  /** Called with a valid whole-number tone whenever it changes. */
  onValueChange: (tone: number) => void;
  disabled?: boolean;
  /** Accessible name for the tone, e.g. "lk-light-primary". The field is named "<name> tone". */
  "aria-label"?: string;
}) {
  const [draft, setDraft] = useState(String(value));

  // Follow the tone when it changes from outside (a reset, a preset).
  useEffect(() => setDraft(String(value)), [value]);

  function parse(text: string): number | null {
    if (!/^\d{1,3}$/.test(text.trim())) return null;
    const tone = Number(text);
    return tone >= MIN_TONE && tone <= MAX_TONE ? tone : null;
  }

  return (
    <div
      className={className ? `tone-input ${className}` : "tone-input"}
      {...props}
    >
      <span
        className="tone-input-swatch"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <Input
        inputMode="numeric"
        value={draft}
        disabled={disabled}
        aria-label={`${label} tone`}
        spellCheck={false}
        style={{ width: "var(--lk-base-xl)" }}
        onChange={(event) => {
          setDraft(event.target.value);
          const tone = parse(event.target.value);
          if (tone !== null) onValueChange(tone);
        }}
        onBlur={() => setDraft(String(value))}
      />
    </div>
  );
}
