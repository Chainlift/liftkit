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
import { useTheme } from "./theme-context";
import type { SchemeVariant } from "./types";

const SCHEME_VARIANTS: { value: SchemeVariant; label: string }[] = [
  { value: "tonalSpot", label: "Tonal Spot" },
  { value: "vibrant", label: "Vibrant" },
  { value: "expressive", label: "Expressive" },
  { value: "neutral", label: "Neutral" },
  { value: "fidelity", label: "Fidelity" },
  { value: "rainbow", label: "Rainbow" },
  { value: "fruitSalad", label: "Fruit Salad" },
  { value: "monochrome", label: "Monochrome" },
];

export function SchemeVariantSelect() {
  const { state, dispatch } = useTheme();
  return (
    <>
      <Select
        items={SCHEME_VARIANTS}
        value={state.schemeVariant}
        fontClass="subheading"
        onValueChange={(variant) =>
          dispatch({
            type: "SET_SCHEME_VARIANT",
            variant: variant as SchemeVariant,
          })
        }
      >
        <SelectTrigger className="w-full" aria-label="Scheme variant">
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
                {SCHEME_VARIANTS.map((variant) => (
                  <SelectItem key={variant.value} value={variant.value}>
                    <SelectItemIndicator>
                      <Icon name="check" />
                    </SelectItemIndicator>
                    <SelectItemText>{variant.label}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select>
    </>
  );
}
