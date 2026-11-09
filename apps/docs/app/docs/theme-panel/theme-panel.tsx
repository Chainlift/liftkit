"use client";

import { useState, type ReactNode } from "react";
import {
  ColorInput,
  GoldenBox,
  Icon,
  IconButton,
  Input,
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
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
  Slider,
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ToggleGroup,
} from "liftkit";
import { useTheme } from "./theme-context";
import { downloadThemeCSS } from "./theme-export";
import type { ColorMode, SchemeVariant, ThemeAction, ThemeSeedColors, ThemeState } from "./types";

// ─── Layout pieces ──────────────────────────────────────

// Structural widths are fixed (rem), not length tokens: length tokens grow with the Scale Factor's powers, so the
// panel would collapse or balloon while you drag the very sliders it contains. Fonts, spacing, and corners still
// follow the theme.
const PANEL_WIDTH = { width: "var(--lk-length-5xl" };
const LABEL_COLUMN = { width: "var(--lk-base-3xl" };

/** A labeled block of controls. */
function PanelSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <GoldenBox scaleFactor="heading" opticalCorrection="y" className="w-full">
      <h3 className="subheading-bold color-onsurface mb-sm">{label}</h3>
      {children}
    </GoldenBox>
  );
}

/** A slider and a number field editing the same value. */
function SliderWithNumber({
  label,
  value,
  min,
  max,
  step,
  onChange,
  stacked = false,
  labelPrefix,
  labelSuffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  /** Puts the label on its own line above the slider instead of beside it. */
  stacked?: boolean;
  /** Rendered before the label text, e.g. a color swatch. */
  labelPrefix?: ReactNode;
  /** Rendered after the label text, e.g. a reset button. */
  labelSuffix?: ReactNode;
}) {
  // Keep what's being typed as text, so partial entries like "1." survive until they parse to a valid number.
  const [draft, setDraft] = useState<string | null>(null);
  return (
    <div className="flex-h items-center gap-sm w-full">
      <Slider
        className={stacked ? "fill-container flex-v" : "fill-container display-grid"}
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={(next) => onChange(Array.isArray(next) ? next[0] : next)}
      >
        <SliderLabel className="label flex-h items-center gap-xs">
          {labelPrefix}
          <span className="fill-container">{label}</span>
          {labelSuffix}
        </SliderLabel>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb aria-label={label} />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <div className="flex-none w-2xl">
        <Input
          inputMode="decimal"
          aria-label={`${label} value`}
          value={draft ?? value}
          fontClass="label"
          onChange={(event) => {
            const text = event.target.value;
            setDraft(text);
            const next = Number(text);
            if (text.trim() !== "" && next >= min && next <= max) onChange(next);
          }}
          onBlur={() => setDraft(null)}
        />
      </div>
    </div>
  );
}

// ─── Scale factors ──────────────────────────────────────

const SCALE_FACTORS: {
  label: string;
  stateKey: keyof ThemeState & `scaleFactor${string}`;
  action: (value: number) => ThemeAction;
}[] = [
  { label: "Global", stateKey: "scaleFactor", action: (value) => ({ type: "SET_SCALE_FACTOR", value }) },
  {
    label: "Corner radii",
    stateKey: "scaleFactorCorner",
    action: (value) => ({ type: "SET_SCALE_FACTOR_CORNER", value }),
  },
  {
    label: "Type scale",
    stateKey: "scaleFactorTypography",
    action: (value) => ({ type: "SET_SCALE_FACTOR_TYPOGRAPHY", value }),
  },
  {
    label: "Spacing",
    stateKey: "scaleFactorSpacing",
    action: (value) => ({ type: "SET_SCALE_FACTOR_SPACING", value }),
  },
];

// ─── Seed colors ────────────────────────────────────────

function SeedColorRow({ role, hex, onChange }: { role: string; hex: string; onChange: (hex: string) => void }) {
  return (
    <div className="display-grid items-center gap-sm w-full mb-xs">
      <div className="flex-none" style={LABEL_COLUMN}>
        <span className="label">{role}</span>
      </div>
      <ColorInput className="fill-container label" value={hex} onValueChange={onChange} aria-label={role} />
    </div>
  );
}

// ─── Color mode and scheme variant ──────────────────────

const COLOR_MODES: { value: ColorMode; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function ColorModeToggle() {
  const { state, dispatch } = useTheme();
  return (
    <ToggleGroup
      className="w-full"
      aria-label="Color mode"
      value={[state.colorMode]}
      onValueChange={(next) => {
        // Pressing the selected mode again would deselect it; one mode must always be selected.
        if (next[0]) dispatch({ type: "SET_COLOR_MODE", mode: next[0] as ColorMode });
      }}
    >
      {COLOR_MODES.map((mode) => (
        <Toggle key={mode.value} value={mode.value} className="fill-container">
          {mode.label}
        </Toggle>
      ))}
    </ToggleGroup>
  );
}

const SCHEME_VARIANTS: { value: SchemeVariant; label: string }[] = [
  { value: "tonalSpot", label: "Tonal Spot" },
  { value: "vibrant", label: "Vibrant" },
  { value: "expressive", label: "Expressive" },
  { value: "neutral", label: "Neutral" },
  { value: "fidelity", label: "Fidelity" },
];

function SchemeVariantSelect() {
  const { state, dispatch } = useTheme();
  return (
    <Select
      items={SCHEME_VARIANTS}
      value={state.schemeVariant}
      onValueChange={(variant) => dispatch({ type: "SET_SCHEME_VARIANT", variant: variant as SchemeVariant })}
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
  );
}

// ─── Main panel ─────────────────────────────────────────

const SEED_ROLES: { key: keyof ThemeSeedColors; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "tertiary", label: "Tertiary" },
  { key: "error", label: "Error" },
  { key: "neutral", label: "Neutral" },
  { key: "neutralVariant", label: "Neutral Variant" },
  { key: "success", label: "Success" },
  { key: "warning", label: "Warning" },
  { key: "info", label: "Info" },
];

function ThemePanelContent() {
  const { state, dispatch } = useTheme();
  return (
    <>
      {/* Scrollable body */}
      <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
        <ScrollAreaViewport>
          <ScrollAreaContent className="p-0 relative" style={{ gap: 0 }}>
            <GoldenBox
              scaleFactor="heading"
              opticalCorrection="y"
              className="w-full sticky top-0 z-1 bg-surface border-b border-color-outlinevariant"
            >
              <div className="flex items-center justify-between gap-md">
                <div className="flex items-center gap-xs">
                  <h2 className="heading">Theme</h2>
                  <TooltipProvider>
                    <Tooltip>
                      {/* A plain span trigger, so the tooltip doesn't replace a LiftKit component's data-slot */}
                      <TooltipTrigger
                        render={<span className="flex color-onsurfacelow subheading" tabIndex={0} aria-label="About exporting" />}
                      >
                        <Icon name="info" aria-hidden="true" />
                      </TooltipTrigger>
                      <TooltipContent>Export and replace your liftkit-core.css to use in your project.</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center gap-xs">
                  <IconButton
                    iconName="rotate-ccw"
                    variant="outline"
                    fontClass="heading"
                    aria-label="Reset theme"
                    title="Reset"
                    onClick={() => dispatch({ type: "RESET" })}
                  />
                  <IconButton
                    iconName="download"
                    fontClass="heading"
                    aria-label="Export theme CSS"
                    title="Export"
                    onClick={() => downloadThemeCSS(state)}
                  />
                </div>
              </div>
            </GoldenBox>
            <PanelSection label="Scale Factors">
              <div className="flex flex-col gap-2xs">
                {SCALE_FACTORS.map(({ label, stateKey, action }) => (
                  <SliderWithNumber
                    key={stateKey}
                    label={label}
                    value={state[stateKey]}
                    min={1}
                    max={2}
                    step={0.001}
                    onChange={(value) => dispatch(action(value))}
                  />
                ))}
              </div>
            </PanelSection>

            <PanelSection label="Color Mode">
              <ColorModeToggle />
            </PanelSection>

            <PanelSection label="Scheme Variant">
              <SchemeVariantSelect />
            </PanelSection>

            <PanelSection label="Master Seed">
              <SeedColorRow
                role="Source Color"
                hex={state.masterSeed}
                onChange={(hex) => dispatch({ type: "SET_MASTER_SEED", hex })}
              />
              <p className="caption color-onsurfacevariant">
                Changing this derives all role colors via the selected scheme variant.
              </p>
            </PanelSection>

            <PanelSection label="Seed Colors">
              {SEED_ROLES.map(({ key, label }) => (
                <SeedColorRow
                  key={key}
                  role={label}
                  hex={state.seedColors[key]}
                  onChange={(hex) => dispatch({ type: "SET_SEED", role: key, hex })}
                />
              ))}
            </PanelSection>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    </>
  );
}

/** The Theme Generator's control panel, shown as a fixed sidebar on the /playground page. */
export function ThemePanel() {
  return (
    <aside
      className="flex-v flex-none h-full overflow-hidden bg-surfacecontainerlowest shadow-lg rounded-sm "
      style={PANEL_WIDTH}
    >
      <ThemePanelContent />
    </aside>
  );
}
