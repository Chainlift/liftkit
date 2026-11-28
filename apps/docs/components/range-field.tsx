"use client";

import { useState } from "react";
import { Input, type LkGoldenBoxProps } from "liftkit";
import { ControlListItem } from "./control-list-item";
import { ResetFieldButton } from "./reset-field-button";

/** How many decimal places a step has, e.g. 0.001 -> 3. */
function decimalsOf(step: number): number {
  return step.toString().split(".")[1]?.length ?? 0;
}

/**
 * Docs-only: a title and description with a number field beside them and a slider underneath, both editing the same
 * value. Works for any numeric token; ToneInput + ControlListItem's slider variant is the color-specific version of it.
 */
export function RangeField({
  title,
  description,
  value,
  min,
  max,
  step = 1,
  onValueChange,
  onReset,
  resetDisabled,
  goldenBoxProps,
}: {
  title: string;
  description?: string;
  value: number;
  min: number;
  max: number;
  /** The slider's step. The number field's entries are rounded to it too. */
  step?: number;
  onValueChange: (value: number) => void;
  /** Adds a reset button beside the number field that restores just this field. */
  onReset?: () => void;
  /** True while the field already has its default value. */
  resetDisabled?: boolean;
  goldenBoxProps?: Omit<LkGoldenBoxProps, "children">;
}) {
  // What's being typed in the number field, so partial entries like "-0." survive until they parse
  const [draft, setDraft] = useState<string | null>(null);
  const decimals = decimalsOf(step);

  return (
    <ControlListItem
      variant="slider"
      title={title}
      description={description}
      goldenBoxProps={goldenBoxProps}
      sliderValue={value}
      sliderMin={min}
      sliderMax={max}
      sliderStep={step}
      onSliderChange={onValueChange}
      titleMeta={
        onReset && (
          <ResetFieldButton
            label={title}
            onReset={onReset}
            disabled={resetDisabled}
          />
        )
      }
      trailingMeta={
        <div className="flex-h flex-row items-center gap-sm">
          <Input
            fontClass="label"
            inputMode="decimal"
            aria-label={`${title} value`}
            // A fixed rem width, like the panel itself
            style={{ width: "var(--lk-base-2xl" }}
            value={draft ?? value}
            onChange={(event) => {
              const text = event.target.value;
              setDraft(text);
              const next = Number(text);
              if (
                text.trim() === "" ||
                Number.isNaN(next) ||
                next < min ||
                next > max
              )
                return;
              onValueChange(Number(next.toFixed(decimals)));
            }}
            onBlur={() => setDraft(null)}
          />
        </div>
      }
    />
  );
}
