"use client";

import { useState } from "react";
import {
  Card,
  Icon,
  GoldenBox,
  IconButton,
  Input,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "liftkit";
import { ControlListItem } from "@/components/control-list-item";
import { ResetFieldButton } from "@/components/reset-field-button";
import { RangeField } from "@/components/range-field";
import {
  FONT_CLASS_TOKENS,
  defaultFontClassToken,
  scaleSteps,
} from "./font-class-tokens";
import { useTheme } from "./theme-context";
import type { FontClassGroup, FontClassTokenKey } from "./types";

/** A number field for one font class token. Edits apply live; the token shows its default until it's changed. */
function TokenInput({
  group,
  token,
  label,
}: {
  group: FontClassGroup;
  token: FontClassTokenKey;
  label: string;
}) {
  const { state, dispatch } = useTheme();
  const def = FONT_CLASS_TOKENS.find((t) => t.key === token)!;
  const overrides = state.fontClassOverrides[group];
  // The mono weight follows the default weight (as --lk-<class>-mono-font-weight does) until it's set itself
  const fallback =
    token === "monoFontWeight" && overrides?.fontWeight !== undefined
      ? overrides.fontWeight
      : defaultFontClassToken(group, token, state.scaleFactor);
  const value = overrides?.[token] ?? fallback;
  // What's being typed, so partial entries like "-0." survive until they parse
  const [draft, setDraft] = useState<string | null>(null);

  return (
    <Input
      fontClass="label"
      inputMode="decimal"
      aria-label={`${group} ${label}`}
      // A fixed rem width, like the panel itself
      style={{ width: "var(--lk-base-2xl)" }}
      value={draft ?? value}
      onChange={(event) => {
        const text = event.target.value;
        setDraft(text);
        const next = Number(text);
        if (
          text.trim() === "" ||
          Number.isNaN(next) ||
          next < def.min ||
          next > def.max
        )
          return;
        if (def.integer && !Number.isInteger(next)) return;
        dispatch({ type: "SET_FONT_CLASS_TOKEN", group, token, value: next });
      }}
      onBlur={() => setDraft(null)}
    />
  );
}

/** The scale steps the font size popover will adjust. */
const STEPS = [
  { key: "whole", label: "Whole" },
  { key: "half", label: "Half" },
  { key: "quarter", label: "Quarter" },
  { key: "eighth", label: "Eighth" },
] as const;

/**
 * The font size stepper: a divide and a multiply button per scale step, shown inside the Font Size item. Each click
 * wraps the class's font size formula (see buildFontSizeFormula).
 */
function FontSizeStepper({ group }: { group: FontClassGroup }) {
  const { state, dispatch } = useTheme();
  const steps = scaleSteps(state.scaleFactor);
  return (
    <div className="flex-v">
      <GoldenBox
        scaleFactor="label"
        opticalCorrection="y"
        className=" border-b border-color-outlinevariant"
        noPadding="x"
      >
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <h3 className="label mr-xl">Scale by step</h3>
          </div>

          <TooltipProvider>
            <Tooltip>
              {/* A plain span trigger, so the tooltip doesn't replace a LiftKit component's data-slot */}
              <TooltipTrigger
                render={
                  <span
                    className="flex items-center gap-2xs color-onsurfacelowest"
                    tabIndex={0}
                  />
                }
              >
                <p className="caption color-primary">What the hell?</p>
                <Icon
                  name="circle-help"
                  color="primary"
                  fontClass="caption"
                  aria-hidden="true"
                />
              </TooltipTrigger>
              <TooltipContent className="max-w-5xl">
                Doing it this way guarantees font sizes stay proportional to the
                global scale factor.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </GoldenBox>
      <GoldenBox scaleFactor="label" opticalCorrection="y" noPadding="x">
        {STEPS.map(({ key, label: step }) => (
          <div key={step} className="flex-h items-center gap-md">
            <h4 className="body mr-lg flex-grow">{step}</h4>
            <span className="caption mono color-onsurfacelowest">
              {steps[key]}
            </span>
            <div className="flex-h items-center">
              <IconButton
                variant="text"
                color="inversesurface"
                iconName="divide"
                aria-label={`Divide ${group} font size by the ${step} step`}
                onClick={() =>
                  dispatch({
                    type: "ADD_FONT_SIZE_STEP",
                    group,
                    stepOp: { op: "divide", step: key },
                  })
                }
              />
              <IconButton
                variant="text"
                color="inversesurface"
                iconName="x"
                aria-label={`Multiply ${group} font size by the ${step} step`}
                onClick={() =>
                  dispatch({
                    type: "ADD_FONT_SIZE_STEP",
                    group,
                    stepOp: { op: "multiply", step: key },
                  })
                }
              />
            </div>
          </div>
        ))}
      </GoldenBox>
    </div>
  );
}

/** One item per editable token of a font class, in a Card. Letter spacing is a RangeField (number and slider). */
export function FontClassTokenList({ group }: { group: FontClassGroup }) {
  const { state, dispatch } = useTheme();
  return (
    <Card
      noPadding="all"
      scaleFactor="label"
      className="bg-surfacecontainerlow border border-color-outlinevariant"
    >
      {FONT_CLASS_TOKENS.map((def, index) => {
        const goldenBoxProps = {
          className:
            index < FONT_CLASS_TOKENS.length - 1
              ? "border-b border-color-outlinevariant"
              : undefined,
        };
        if (def.key === "letterSpacing") {
          return (
            <RangeField
              key={def.key}
              goldenBoxProps={goldenBoxProps}
              title={def.label}
              description={def.description}
              value={
                state.fontClassOverrides[group]?.[def.key] ??
                defaultFontClassToken(group, def.key, state.scaleFactor)
              }
              min={def.min}
              max={def.max}
              step={def.step}
              onValueChange={(value) =>
                dispatch({
                  type: "SET_FONT_CLASS_TOKEN",
                  group,
                  token: def.key,
                  value,
                })
              }
              resetDisabled={
                state.fontClassOverrides[group]?.[def.key] === undefined
              }
              onReset={() =>
                dispatch({
                  type: "CLEAR_FONT_CLASS_TOKEN",
                  group,
                  token: def.key,
                })
              }
            />
          );
        }
        if (def.key === "fontSize") {
          return (
            <ControlListItem
              key={def.key}
              goldenBoxProps={goldenBoxProps}
              title={def.label}
              description={def.description}
              titleMeta={
                <ResetFieldButton
                  label={`${group} ${def.label}`}
                  disabled={(state.fontSizeSteps[group] ?? []).length === 0}
                  onReset={() =>
                    dispatch({
                      type: "RESET_SECTION",
                      section: { scope: "fontSize", group },
                    })
                  }
                />
              }
            >
              <FontSizeStepper group={group} />
            </ControlListItem>
          );
        }
        return (
          <ControlListItem
            key={def.key}
            goldenBoxProps={goldenBoxProps}
            title={def.label}
            description={def.description}
            titleMeta={
              <ResetFieldButton
                label={`${group} ${def.label}`}
                disabled={
                  state.fontClassOverrides[group]?.[def.key] === undefined
                }
                onReset={() =>
                  dispatch({
                    type: "CLEAR_FONT_CLASS_TOKEN",
                    group,
                    token: def.key,
                  })
                }
              />
            }
            trailingMeta={
              <div className="flex-h flex-row items-center gap-sm">
                <TokenInput group={group} token={def.key} label={def.label} />
              </div>
            }
          />
        );
      })}
    </Card>
  );
}
