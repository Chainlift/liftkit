"use client";

import { useEffect, useState, type ComponentProps } from "react";
import "../../css/components/lk-color-input.css";
import { Input } from "../input/input";

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

export type LkColorInputProps = Omit<ComponentProps<"div">, "onChange" | "defaultValue"> & {
  /** The current color as a 6-digit hex code, e.g. "#0051e0". */
  value: string;
  /** Called with a valid hex code whenever the color changes, from the picker or the hex field. */
  onValueChange: (hex: string) => void;
  /** Disables the picker and the hex field. */
  disabled?: boolean;
  /** Accessible name for the color, e.g. "Primary". The hex field is named "<name> hex". @default "Color" */
  "aria-label"?: string;
};

/**
 * A color swatch that opens the browser's color picker, next to a hex field. The swatch is as tall as the
 * field. The picker popup itself is the browser's native one and can't be themed.
 *
 * @param value - The current color as a 6-digit hex code
 * @param onValueChange - Called with a valid hex code whenever the color changes
 * @param disabled - Disables the picker and the hex field
 * @param props - Additional props passed through to the root div element
 */
export function ColorInput({
  value,
  onValueChange,
  disabled = false,
  "aria-label": label = "Color",
  ...props
}: LkColorInputProps) {
  const [draft, setDraft] = useState(value);

  // Follow the color when it changes from outside (the picker, a reset, a derived theme).
  useEffect(() => setDraft(value), [value]);

  function commitDraft() {
    const hex = draft.trim().startsWith("#") ? draft.trim() : `#${draft.trim()}`;
    if (HEX_COLOR.test(hex)) onValueChange(hex.toLowerCase());
    else setDraft(value);
  }

  return (
    <div data-lk-component="color-input" {...props}>
      {/* A span, not a label: lk-input.css styles any label that directly precedes an Input */}
      <span data-lk-color-input-swatch="" data-disabled={disabled || undefined} style={{ backgroundColor: value }}>
        <input
          type="color"
          value={value}
          disabled={disabled}
          aria-label={label}
          onChange={(event) => onValueChange(event.target.value)}
        />
      </span>
      <Input
        value={draft}
        disabled={disabled}
        aria-label={`${label} hex`}
        spellCheck={false}
        onChange={(event) => {
          setDraft(event.target.value);
          if (HEX_COLOR.test(event.target.value)) onValueChange(event.target.value.toLowerCase());
        }}
        onBlur={commitDraft}
      />
    </div>
  );
}
