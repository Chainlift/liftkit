"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Hct, TonalPalette, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
  ColorInput,
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxTrigger,
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
  Tabs,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ToggleGroup,
} from "liftkit";
import { useTheme } from "./theme-context";
import { TOKEN_MAP } from "./token-map";
import { downloadThemeFiles } from "./theme-export";
import { PRESETS, findPreset, isPresetModified } from "./presets";
import { FONT_CATALOG, type FontCatalogEntry } from "./font-catalog";
import type { ColorMode, FontClassGroup, FontSlot, Scheme, SchemeVariant, ThemeSeedColors } from "./types";

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
          {/* contain: inline-size lets a long token name truncate instead of widening the whole scroll area */}
          <span className="fill-container nowrap" style={{ contain: "inline-size" }} title={label}>
            {label}
          </span>
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

/** The scheme the tone sliders edit: the forced color mode, or the system's preference while on System. */
function useEditedScheme(): Scheme {
  const { state } = useTheme();
  const [systemDark, setSystemDark] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemDark(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  if (state.colorMode !== "system") return state.colorMode;
  return systemDark ? "dark" : "light";
}

function TokenGroup({ groupName, seedHex }: { groupName: string; seedHex: string }) {
  const { state, dispatch } = useTheme();
  const group = TOKEN_MAP[groupName];

  const palette = useMemo(() => {
    const hct = Hct.fromInt(argbFromHex(seedHex));
    return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
  }, [seedHex]);

  if (!group) return null;

  // Show and edit the tones of the selected color mode
  const viewMode = useEditedScheme();

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
            const isOverridden = tokenName in state.toneOverrides[viewMode];
            const tone = state.toneOverrides[viewMode][tokenName] ?? def.defaultTone[viewMode];
            return (
              <ToneRow
                key={tokenName}
                cssVar={def.cssVar}
                tone={tone}
                isOverridden={isOverridden}
                hex={hexFromArgb(palette.tone(tone))}
                onToneChange={(next) =>
                  dispatch({ type: "SET_TONE_OVERRIDE", scheme: viewMode, token: tokenName, tone: next })
                }
                onReset={() => dispatch({ type: "CLEAR_TONE_OVERRIDE", scheme: viewMode, token: tokenName })}
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
  { value: "rainbow", label: "Rainbow" },
  { value: "fruitSalad", label: "Fruit Salad" },
  { value: "monochrome", label: "Monochrome" },
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

// ─── Presets ────────────────────────────────────────────

const CUSTOM_PRESET_VALUE = "__custom__";

function PresetSelect() {
  const { state, dispatch } = useTheme();
  const activePreset = findPreset(state.activePresetId);
  const modified = activePreset ? isPresetModified(activePreset, state) : false;

  const items = [
    { value: CUSTOM_PRESET_VALUE, label: activePreset ? "Custom (clear preset)" : "Custom" },
    ...PRESETS.map((preset) => ({
      value: preset.id,
      label: preset.id === state.activePresetId && modified ? `${preset.name} (modified)` : preset.name,
    })),
  ];
  const value = activePreset ? activePreset.id : CUSTOM_PRESET_VALUE;

  return (
    <Select
      items={items}
      value={value}
      onValueChange={(next) => {
        if (next === CUSTOM_PRESET_VALUE) {
          // Selecting Custom just clears the preset binding — leaves current state alone.
          if (state.activePresetId !== null) {
            // No dedicated action; LOAD lets us set a single field without reshaping state.
            dispatch({ type: "LOAD", state: { ...state, activePresetId: null } });
          }
          return;
        }
        dispatch({ type: "APPLY_PRESET", presetId: next as string });
      }}
    >
      <SelectTrigger className="w-full" aria-label="Preset">
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
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <SelectItemIndicator>
                    <Icon name="check" />
                  </SelectItemIndicator>
                  <SelectItemText>{item.label}</SelectItemText>
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

// ─── Fonts ──────────────────────────────────────────────

/**
 * The twelve font-class groups in display order. Must stay in sync with the
 * FontClassGroup type — the Record assignment type catches typos at compile time.
 */
const FONT_GROUPS: { key: FontClassGroup; label: string }[] = [
  { key: "display1", label: "display1" },
  { key: "display2", label: "display2" },
  { key: "title1", label: "title1" },
  { key: "title2", label: "title2" },
  { key: "title3", label: "title3" },
  { key: "heading", label: "heading" },
  { key: "subheading", label: "subheading" },
  { key: "body", label: "body" },
  { key: "callout", label: "callout" },
  { key: "label", label: "label" },
  { key: "caption", label: "caption" },
  { key: "capline", label: "capline" },
];

const FONT_SLOTS: { value: FontSlot; label: string }[] = [
  { value: 1, label: "Default" },
  { value: 2, label: "Large Text" },
  { value: 3, label: "Monospace" },
];

/** A searchable Combobox over every Google Fonts family in the build-time catalog. */
function FontSlotPicker({
  slot,
  value,
  onChange,
}: {
  slot: FontSlot;
  value: string;
  onChange: (family: string) => void;
}) {
  // Base UI's Combobox filters on the item's label by default; store the full entry so category stays available.
  // Always pass a non-undefined value so the component stays controlled across its lifetime.
  const selected = useMemo<FontCatalogEntry | null>(
    () =>
      value
        ? (FONT_CATALOG.find((entry) => entry.family === value) ?? { family: value, category: "Sans Serif" })
        : null,
    [value],
  );

  return (
    <Combobox<FontCatalogEntry>
      items={FONT_CATALOG}
      value={selected}
      onValueChange={(next) => onChange(next ? next.family : "")}
      itemToStringLabel={(item) => item.family}
    >
      <div className="flex-v gap-xs w-full">
        <span className="label color-onsurfacevariant">Family {slot}</span>
        <ComboboxInputGroup placeholder="Inherit from page" aria-label={`Font family slot ${slot}`} />
        <div data-slot="action-buttons">
          <ComboboxClear aria-label="Clear">
            <Icon name="x" />
          </ComboboxClear>
          <ComboboxTrigger aria-label="Open">
            <Icon name="chevron-down" />
          </ComboboxTrigger>
        </div>
      </div>
      <ComboboxPortal>
        <ComboboxPositioner sideOffset={4}>
          <ComboboxPopup>
            <ComboboxEmpty>No matching families.</ComboboxEmpty>
            <ComboboxList>
              {(item: FontCatalogEntry) => (
                <ComboboxItem key={item.family} value={item}>
                  <ComboboxItemIndicator>
                    <Icon name="check" />
                  </ComboboxItemIndicator>
                  <div className="flex-h items-center justify-between gap-md fill-container">
                    <span>{item.family}</span>
                    <span className="caption color-onsurfacevariant">{item.category}</span>
                  </div>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  );
}

function FontAssignmentRow({
  group,
  label,
  slot,
  onChange,
}: {
  group: FontClassGroup;
  label: string;
  slot: FontSlot;
  onChange: (slot: FontSlot) => void;
}) {
  return (
    <div className="display-grid items-center gap-sm w-full mb-xs" style={{ gridTemplateColumns: "7rem 1fr" }}>
      <span className="label" title={group}>
        {label}
      </span>
      <Select items={FONT_SLOTS} value={slot} onValueChange={(next) => onChange(Number(next) as FontSlot)}>
        <SelectTrigger className="w-full" aria-label={`Assign ${label}`}>
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
    </div>
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
    // The tabs group the controls; the Preset sits above them because it sets colors, scale and fonts together, so
    // it belongs to no one tab (and leaves Preferences blank).
    <Tabs defaultValue="color" className="flex-v fill-container w-full overflow-hidden">
      <PanelSection label="Preset">
        <PresetSelect />
      </PanelSection>

      {/* Four labels don't fit in the panel's fixed width at the default tab size, so the tabs use the label font and
          tighter padding. Their text still follows the Scale Factor, so at a low one the row scrolls rather than clips. */}
      <TabsList className="border-b border-color-outlinevariant gap-2xs overflow-auto">
        <TabsTab value="color" className="label flex-grow px-sm">
          Color
        </TabsTab>
        <TabsTab value="typography" className="label flex-grow px-sm">
          Typography
        </TabsTab>
        <TabsTab value="scale" className="label flex-grow px-sm">
          Scale
        </TabsTab>
        <TabsTab value="preferences" className="label flex-grow px-sm">
          Preferences
        </TabsTab>
        <TabsIndicator />
      </TabsList>

      {/* Scrollable body */}
      <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
        <ScrollAreaViewport>
          <ScrollAreaContent className="p-0 relative" style={{ gap: 0 }}>
            {/* A tab panel centers its content, so each one holds a single full-width column */}
            <TabsPanel value="color" className="w-full">
              <div className="flex-v w-full">
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
                  <p className="caption color-onsurfacevariant mb-sm">
                    Apply overrides to currently-selected color mode.
                  </p>
                  {Object.keys(TOKEN_MAP).map((groupName) => (
                    <TokenGroup
                      key={groupName}
                      groupName={groupName}
                      seedHex={state.seedColors[TOKEN_MAP[groupName].seedRole as keyof ThemeSeedColors]}
                    />
                  ))}
                </PanelSection>
              </div>
            </TabsPanel>

            <TabsPanel value="typography" className="w-full">
              <div className="flex-v w-full">
                <PanelSection label="Font Families">
                  <div className="flex-v gap-md w-full">
                    {([1, 2, 3] as const).map((slot) => (
                      <FontSlotPicker
                        key={slot}
                        slot={slot}
                        value={state.fontFamilies[slot - 1]}
                        onChange={(family) => dispatch({ type: "SET_FONT_FAMILY_SLOT", slot, family })}
                      />
                    ))}
                  </div>
                </PanelSection>

                <PanelSection label="Font Assignments">
                  <Collapsible className="w-full" style={{ minHeight: 0 }}>
                    <CollapsibleTrigger
                      nativeButton={false}
                      render={<GoldenBox scaleFactor="body" opticalCorrection="all" />}
                    >
                      <Icon name="chevron-right" data-slot="collapsible-trigger-icon" />
                      <span className="callout font-500">Assign classes to families</span>
                    </CollapsibleTrigger>
                    <CollapsiblePanel>
                      <GoldenBox scaleFactor="label" opticalCorrection="y">
                        {FONT_GROUPS.map(({ key, label }) => (
                          <FontAssignmentRow
                            key={key}
                            group={key}
                            label={label}
                            slot={state.fontAssignments[key]}
                            onChange={(slot) => dispatch({ type: "SET_FONT_ASSIGNMENT", group: key, slot })}
                          />
                        ))}
                      </GoldenBox>
                    </CollapsiblePanel>
                  </Collapsible>
                </PanelSection>
              </div>
            </TabsPanel>

            <TabsPanel value="scale" className="w-full">
              <div className="flex-v w-full">
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
              </div>
            </TabsPanel>

            {/* Blank for now */}
            <TabsPanel value="preferences" className="w-full" />
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    </Tabs>
  );
}

/** The Theme Generator's control panel, shown as a fixed sidebar on the /playground page. */
export function ThemePanel() {
  const { state, dispatch } = useTheme();

  return (
    <aside
      className="flex-v flex-none h-full overflow-hidden bg-surfacecontainerlowest border rounded-sm "
      style={PANEL_WIDTH}
    >
      <GoldenBox
        scaleFactor="heading"
        opticalCorrection="y"
        className="w-full sticky top-0 z-1  border-b border-color-outlinevariant"
      >
        <div className="flex items-center justify-between gap-md">
          <div className="flex items-center gap-xs">
            <h2 className="heading">Theme</h2>
            <TooltipProvider>
              <Tooltip>
                {/* A plain span trigger, so the tooltip doesn't replace a LiftKit component's data-slot */}
                <TooltipTrigger
                  render={
                    <span className="flex color-onsurfacelow subheading" tabIndex={0} aria-label="About exporting" />
                  }
                >
                  <Icon name="info" aria-hidden="true" />
                </TooltipTrigger>
                <TooltipContent>Downloads liftkit-theme.css, to replace your liftkit-core.css, and liftkit-theme.json, with every input in this panel.</TooltipContent>
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
              aria-label="Export theme as CSS and JSON"
              title="Export CSS and JSON"
              onClick={() => downloadThemeFiles(state)}
            />
          </div>
        </div>
      </GoldenBox>
      <ThemePanelContent />
    </aside>
  );
}
