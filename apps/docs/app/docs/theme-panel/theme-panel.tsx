"use client";

import { useState, useMemo, useCallback, type ReactNode } from "react";
import { Hct, TonalPalette, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import {
  Button,
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
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
  SliderThumb,
  SliderTrack,
  Toggle,
  ToggleGroup,
} from "@chainlift/liftkit";
import { useTheme } from "./theme-context";
import { TOKEN_MAP } from "./token-map";
import { downloadThemeCSS, copyThemeCSS } from "./theme-export";
import type { ColorMode, SchemeVariant, ThemeAction, ThemeSeedColors, ThemeState } from "./types";

// ─── Layout pieces ──────────────────────────────────────

// Structural widths are fixed (rem), not length tokens: length tokens grow with the Scale Factor's powers, so the
// panel would collapse or balloon while you drag the very sliders it contains. Fonts, spacing, and corners still
// follow the theme.
const PANEL_WIDTH = { width: "20rem" };
const LABEL_COLUMN = { width: "7rem" };
const NUMBER_COLUMN = { width: "5rem" };

/** A labeled block of controls. */
function PanelSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <GoldenBox scaleFactor="capline" opticalCorrection="y" className="w-full">
      <h3 className="capline color-onsurfacevariant mb-xs">{label}</h3>
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
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex-h items-center gap-sm w-full">
      <Slider
        className="fill-container"
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={(next) => onChange(Array.isArray(next) ? next[0] : next)}
      >
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb aria-label={label} />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <div className="flex-none" style={NUMBER_COLUMN}>
        <Input
          inputMode="decimal"
          aria-label={`${label} value`}
          value={value}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (event.target.value.trim() !== "" && next >= min && next <= max) onChange(next);
          }}
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
  { label: "Scale Factor", stateKey: "scaleFactor", action: (value) => ({ type: "SET_SCALE_FACTOR", value }) },
  {
    label: "Scale Factor Corner",
    stateKey: "scaleFactorCorner",
    action: (value) => ({ type: "SET_SCALE_FACTOR_CORNER", value }),
  },
  {
    label: "Scale Factor Typography",
    stateKey: "scaleFactorTypography",
    action: (value) => ({ type: "SET_SCALE_FACTOR_TYPOGRAPHY", value }),
  },
  {
    label: "Scale Factor Length",
    stateKey: "scaleFactorLength",
    action: (value) => ({ type: "SET_SCALE_FACTOR_LENGTH", value }),
  },
  {
    label: "Scale Factor Spacing",
    stateKey: "scaleFactorSpacing",
    action: (value) => ({ type: "SET_SCALE_FACTOR_SPACING", value }),
  },
];

// ─── Seed colors ────────────────────────────────────────

function SeedColorRow({ role, hex, onChange }: { role: string; hex: string; onChange: (hex: string) => void }) {
  return (
    <div className="flex-h items-center gap-sm w-full mb-xs">
      <div className="flex-none" style={LABEL_COLUMN}>
        <span className="label">{role}</span>
      </div>
      <ColorInput className="fill-container" value={hex} onValueChange={onChange} aria-label={role} />
    </div>
  );
}

// ─── Tone overrides ─────────────────────────────────────

function ToneRow({
  cssVar,
  tone,
  isOverridden,
  hex,
  onToneChange,
  onReset,
}: {
  cssVar: string;
  tone: number;
  isOverridden: boolean;
  hex: string;
  onToneChange: (tone: number) => void;
  onReset: () => void;
}) {
  return (
    <div className="flex-v w-full mb-sm">
      <div className="flex-h items-center gap-sm w-full">
        <div className="w-md h-md rounded-xs border border-color-outlinevariant flex-none" style={{ backgroundColor: hex }} />
        <span className="caption fill-container" title={cssVar}>
          {cssVar}
        </span>
        <IconButton
          iconName="x"
          variant="text"
          fontClass="caption"
          aria-label={`Reset ${cssVar}`}
          title="Reset to default"
          style={{ visibility: isOverridden ? "visible" : "hidden" }}
          onClick={onReset}
        />
      </div>
      <SliderWithNumber label={cssVar} value={tone} min={0} max={100} step={1} onChange={onToneChange} />
    </div>
  );
}

function TokenGroup({ groupName, seedHex }: { groupName: string; seedHex: string }) {
  const { state, dispatch } = useTheme();
  const group = TOKEN_MAP[groupName];

  const palette = useMemo(() => {
    const hct = Hct.fromInt(argbFromHex(seedHex));
    return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
  }, [seedHex]);

  if (!group) return null;

  // Show the tones for the mode being edited (light unless dark is forced)
  const viewMode = state.colorMode === "dark" ? "dark" : "light";

  return (
    // Collapsible ships with a fixed 14rem x 9rem size, so size it to the panel instead
    <Collapsible className="w-full" style={{ minHeight: 0 }}>
      <CollapsibleTrigger nativeButton={false} render={<GoldenBox scaleFactor="body" opticalCorrection="all" />}>
        <Icon name="chevron-right" data-slot="collapsible-trigger-icon" />
        <span className="callout font-500">{groupName}</span>
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <GoldenBox scaleFactor="capline" opticalCorrection="y">
          {Object.entries(group.tokens).map(([tokenName, def]) => {
            const isOverridden = tokenName in state.toneOverrides;
            const tone = state.toneOverrides[tokenName] ?? def.defaultTone[viewMode];
            return (
              <ToneRow
                key={tokenName}
                cssVar={def.cssVar}
                tone={tone}
                isOverridden={isOverridden}
                hex={hexFromArgb(palette.tone(tone))}
                onToneChange={(next) => dispatch({ type: "SET_TONE_OVERRIDE", token: tokenName, tone: next })}
                onReset={() => dispatch({ type: "CLEAR_TONE_OVERRIDE", token: tokenName })}
              />
            );
          })}
        </GoldenBox>
      </CollapsiblePanel>
    </Collapsible>
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
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await copyThemeCSS(state);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [state]);

  return (
    <>
      {/* Scrollable body */}
      <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
        <ScrollAreaViewport>
          <ScrollAreaContent className="p-0" style={{ gap: 0 }}>
            <PanelSection label="Color Mode">
              <ColorModeToggle />
            </PanelSection>

            <PanelSection label="Scheme Variant">
              <SchemeVariantSelect />
            </PanelSection>

            {SCALE_FACTORS.map(({ label, stateKey, action }) => (
              <PanelSection key={stateKey} label={label}>
                <SliderWithNumber
                  label={label}
                  value={state[stateKey]}
                  min={1}
                  max={2}
                  step={0.001}
                  onChange={(value) => dispatch(action(value))}
                />
              </PanelSection>
            ))}

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

            <PanelSection label="Token Tones">
              {Object.keys(TOKEN_MAP).map((groupName) => (
                <TokenGroup
                  key={groupName}
                  groupName={groupName}
                  seedHex={state.seedColors[TOKEN_MAP[groupName].seedRole as keyof ThemeSeedColors]}
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

      {/* Actions */}
      <div className="border-t border-color-outlinevariant flex-none">
        <GoldenBox scaleFactor="body" opticalCorrection="y">
          <div className="flex-h gap-sm">
            <Button className="fill-container" variant="outline" onClick={() => dispatch({ type: "RESET" })}>
              Reset
            </Button>
            <Button className="fill-container" variant="outline" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy CSS"}
            </Button>
            <Button className="fill-container" onClick={() => downloadThemeCSS(state)}>
              Export
            </Button>
          </div>
        </GoldenBox>
      </div>
    </>
  );
}

/** The Theme Generator's control panel, shown as a fixed sidebar on the /playground page. */
export function ThemePanel() {
  return (
    <aside
      className="flex-v flex-none h-full overflow-hidden bg-surfacecontainerlow border-r border-color-outlinevariant"
      style={PANEL_WIDTH}
    >
      <div className="border-b border-color-outlinevariant flex-none">
        <GoldenBox scaleFactor="body" opticalCorrection="y">
          <span className="heading-bold">Theme Builder</span>
        </GoldenBox>
      </div>
      <ThemePanelContent />
    </aside>
  );
}
