"use client";

import {
  Icon,
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "liftkit";
import type { FontClassGroup, FontSlot } from "./types";

/**
 * The twelve font-class groups in display order. Must stay in sync with the
 * FontClassGroup type — the type annotation catches typos at compile time.
 */
export const FONT_GROUPS: { key: FontClassGroup; label: string }[] = [
  { key: "display1", label: "display1" },
  { key: "display2", label: "display2" },
  { key: "title1", label: "title1" },
  { key: "title2", label: "title2" },
  { key: "title3", label: "title3" },
  { key: "heading", label: "heading" },
  { key: "body", label: "body" },
  { key: "callout", label: "callout" },
  { key: "subheading", label: "subheading" },
  { key: "label", label: "label" },
  { key: "caption", label: "caption" },
  { key: "capline", label: "capline" },
];

/** The three font-family slots, by the name shown for each. */
export const FONT_SLOTS: { value: FontSlot; label: string }[] = [
  { value: 1, label: "Default" },
  { value: 2, label: "Large Text" },
  { value: 3, label: "Monospace" },
];

/** A Select that picks which of the three typefaces a font class uses. */
export function FontAssignmentSelect({
  label,
  slot,
  onChange,
}: {
  /** The font class it belongs to, for the accessible name. */
  label: string;
  slot: FontSlot;
  onChange: (slot: FontSlot) => void;
}) {
  return (
    <Select
      items={FONT_SLOTS}
      value={slot}
      fontClass="subheading"
      onValueChange={(next) => onChange(Number(next) as FontSlot)}
    >
      <SelectTrigger className="w-full" aria-label={`Typeface for ${label}`}>
        <SelectValue />
        <SelectIcon>
          <Icon name="chevron-up" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={8}>
          <SelectPopup>
            <SelectList>
              {FONT_SLOTS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <SelectItemIndicator>
                    <Icon name="check" />
                  </SelectItemIndicator>
                  <SelectItemText>{option.label}</SelectItemText>
                </SelectItem>
              ))}
            </SelectList>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </Select>
  );
}
