"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Hct, TonalPalette, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import {
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
import { TOKEN_MAP } from "./token-map";
import { downloadThemeCSS } from "./theme-export";
import type { ColorMode, SchemeVariant, ThemeSeedColors } from "./types";

// ─── Layout pieces ──────────────────────────────────────

// Structural widths are fixed (rem), not length tokens: length tokens grow with the Scale Factor's powers, so the
// panel would collapse or balloon while you drag the very sliders it contains. Fonts, spacing, and corners still
// follow the theme.
const PANEL_WIDTH = { width: "20rem" };
const LABEL_COLUMN = { width: "7rem" };

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
      <SliderWithNumber
        label={cssVar}
        value={tone}
        min={0}
        max={100}
        step={1}
        onChange={onToneChange}
        stacked
        labelPrefix={
          <div
            className="w-md h-md rounded-xs border border-color-outlinevariant flex-none"
            style={{ backgroundColor: hex }}
          />
        }
        labelSuffix={
          <IconButton
            iconName="x"
            variant="text"
            fontClass="caption"
            aria-label={`Reset ${cssVar}`}
            title="Reset to default"
            style={{ visibility: isOverridden ? "visible" : "hidden" }}
            onClick={onReset}
          />
        }
      />
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
        <GoldenBox scaleFactor="label" opticalCorrection="y">
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
  return (
    <>
      {/* Scrollable body */}
      <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
        <ScrollAreaViewport>
          <ScrollAreaContent className="p-0 relative" style={{ gap: 0 }}>
            <GoldenBox
              scaleFactor="heading"
              opticalCorrection="y"
              className="w-full sticky top-0 z-1 bg-surfacecontainerlowest border-b border-color-outlinevariant"
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
            <PanelSection label="Scale Factor">
              <SliderWithNumber
                label="Global"
                value={state.scaleFactor}
                min={1}
                max={2}
                step={0.001}
                onChange={(value) => dispatch({ type: "SET_SCALE_FACTOR", value })}
              />
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
    </>
  );
}

/** The Theme Generator's control panel, shown as a fixed sidebar on the /playground page. */
export function ThemePanel() {
  return (
    <aside
      data-theme-panel
      className="flex-v flex-none h-full overflow-hidden bg-surfacecontainerlowest border border-color-outlinevariant rounded-sm "
      style={PANEL_WIDTH}
    >
      <ThemePanelContent />
    </aside>
  );
}
