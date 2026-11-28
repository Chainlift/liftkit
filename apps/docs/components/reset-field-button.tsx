"use client";

import { Icon } from "liftkit";
import "./reset-field-button.css";

/**
 * Docs-only: a reset control for a ControlListItem's titleMeta slot. It looks like a plain icon, not a button, but it
 * is a real <button> underneath so it can be focused and used from the keyboard. It resets only that item's field,
 * and sits above the item's stretched button, so clicking it doesn't open the item.
 */
export function ResetFieldButton({
  label,
  onReset,
  disabled,
}: {
  /** What it resets, for the accessible name and tooltip, e.g. "Primary color". */
  label: string;
  onReset: () => void;
  /** True while the field already has its default value: there's nothing to reset, so nothing is shown. */
  disabled?: boolean;
}) {
  if (disabled) return null;
  return (
    <button
      type="button"
      className="reset-field-button"
      aria-label={`Reset ${label}`}
      title={`Reset ${label}`}
      onClick={onReset}
      style={{
        display: "inline-flex",
        position: "relative",
        zIndex: 2,
        padding: 0,
        border: 0,
        background: "none",
        color: "var(--lk-primary)",
        font: "inherit",
        cursor: "pointer",
      }}
    >
      <Icon
        name="rotate-ccw"
        fontClass="body"
        strokeWidth={2}
        color="error"
        aria-hidden="true"
      />
    </button>
  );
}
