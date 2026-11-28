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
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "liftkit";
import { FONT_CATALOG } from "./font-catalog";
import { buildFontsHref, slotValue } from "./theme-css";
import type { FontSlot } from "./types";

const PREVIEW_LINK_ID = "lk-font-previews";

/** The Select's value for "no family chosen", since an empty string isn't a safe item value. */
const NONE = "__none__";

/**
 * Loads every family in the catalog, once, the first time a font list opens, so each name can be shown in its own
 * typeface. It asks for the same weights as the theme's own font link, so the two share the same font files, and
 * the browser still only downloads the ranges the page uses (latin, for these names).
 */
function loadFontPreviews() {
  if (document.getElementById(PREVIEW_LINK_ID)) return;
  const href = buildFontsHref(FONT_CATALOG.map((entry) => entry.family));
  if (!href) return;
  const link = document.createElement("link");
  link.id = PREVIEW_LINK_ID;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

/**
 * A Select over every Google Fonts family in the build-time catalog, each shown in its own typeface. Slots 2 and 3
 * can be left empty (the first option, worded by `placeholder`); the Default slot always has a family.
 */
export function FontSlotPicker({
  slot,
  placeholder = "Inherit from page",
  value,
  onChange,
}: {
  slot: FontSlot;
  /** What the empty option says, e.g. "Inherit from Default". Not offered for the Default slot. */
  placeholder?: string;
  value: string;
  onChange: (family: string) => void;
}) {
  const canBeEmpty = slot !== 1;
  const items = [
    ...(canBeEmpty ? [{ value: NONE, label: placeholder }] : []),
    ...FONT_CATALOG.map((entry) => ({
      value: entry.family,
      label: entry.family,
    })),
  ];
  // A family outside the catalog (an old save) still needs an item to show
  if (value && !FONT_CATALOG.some((entry) => entry.family === value))
    items.push({ value, label: value });

  return (
    <Select
      items={items}
      value={value || NONE}
      fontClass="subheading"
      onValueChange={(next) => onChange(next === NONE ? "" : (next as string))}
      onOpenChange={(open) => {
        if (open) loadFontPreviews();
      }}
    >
      <SelectTrigger
        className="w-full"
        aria-label={`Font family for the ${slot === 1 ? "Default" : slot === 2 ? "Large Text" : "Monospace"} slot`}
      >
        <SelectValue />
        <SelectIcon>
          <Icon name="chevron-up" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner sideOffset={8}>
          <SelectPopup>
            <SelectScrollUpArrow />
            <SelectList>
              {items.map((item) => {
                const category = FONT_CATALOG.find(
                  (entry) => entry.family === item.value,
                )?.category;
                return (
                  <SelectItem key={item.value} value={item.value}>
                    <SelectItemIndicator>
                      <Icon name="check" />
                    </SelectItemIndicator>
                    {/* Set in its own typeface, so the list previews what each font looks like */}
                    <SelectItemText
                      style={
                        item.value === NONE
                          ? undefined
                          : { fontFamily: slotValue(item.value) }
                      }
                    >
                      {item.label}
                    </SelectItemText>
                    {/* The item is a two-column grid (check, text); the category takes an implicit third column on the same row */}
                    {category && (
                      <span
                        className="caption color-onsurfacevariant"
                        style={{ gridColumn: 3, gridRow: 1 }}
                      >
                        {category}
                      </span>
                    )}
                  </SelectItem>
                );
              })}
            </SelectList>
            <SelectScrollDownArrow />
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </Select>
  );
}
