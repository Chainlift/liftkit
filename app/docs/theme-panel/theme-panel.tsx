"use client";

import { useState, useMemo, useCallback } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { Hct, TonalPalette, argbFromHex, hexFromArgb } from "@material/material-color-utilities";
import { useTheme } from "./theme-context";
import { TOKEN_MAP } from "./token-map";
import { downloadThemeCSS, copyThemeCSS } from "./theme-export";
import type { ColorMode, SchemeVariant, ThemeSeedColors } from "./types";
import "./theme-panel.css";

// ─── Seed color picker ──────────────────────────────────

function SeedColorRow({
  role,
  hex,
  onChange,
}: {
  role: string;
  hex: string;
  onChange: (hex: string) => void;
}) {
  return (
    <div className="seed-color-row">
      <span className="seed-color-label">{role}</span>
      <input
        type="color"
        className="seed-color-picker"
        value={hex}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        className="seed-color-hex"
        value={hex}
        onChange={(e) => {
          const v = e.target.value;
          if (/^#[0-9a-fA-F]{6}$/.test(v)) onChange(v);
        }}
        onBlur={(e) => {
          let v = e.target.value.trim();
          if (!v.startsWith("#")) v = "#" + v;
          if (/^#[0-9a-fA-F]{6}$/.test(v)) onChange(v);
        }}
      />
    </div>
  );
}

// ─── Tone override row ──────────────────────────────────

function ToneRow({
  tokenName,
  cssVar,
  tone,
  isOverridden,
  hex,
  onToneChange,
  onReset,
}: {
  tokenName: string;
  cssVar: string;
  tone: number;
  isOverridden: boolean;
  hex: string;
  onToneChange: (tone: number) => void;
  onReset: () => void;
}) {
  return (
    <div className="tone-row">
      <div className="tone-swatch" style={{ background: hex }} />
      <span className="tone-name" title={cssVar}>
        {cssVar}
      </span>
      <div className="tone-slider-wrap">
        <input
          type="range"
          min={0}
          max={100}
          value={tone}
          onChange={(e) => onToneChange(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>
      <span className="tone-value">{tone}</span>
      {isOverridden && (
        <button className="tone-reset" onClick={onReset} title="Reset to default">
          x
        </button>
      )}
    </div>
  );
}

// ─── Token group (collapsible) ──────────────────────────

function TokenGroup({
  groupName,
  seedHex,
}: {
  groupName: string;
  seedHex: string;
}) {
  const { state, dispatch } = useTheme();
  const group = TOKEN_MAP[groupName];
  if (!group) return null;

  const palette = useMemo(() => {
    const hct = Hct.fromInt(argbFromHex(seedHex));
    return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
  }, [seedHex]);

  // Determine the display mode for tones (use light as default view)
  const viewMode = state.colorMode === "dark" ? "dark" : "light";

  return (
    <CollapsiblePrimitive.Root defaultOpen={false}>
      <CollapsiblePrimitive.Trigger className="token-group-trigger">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M4 2l5 4-5 4V2z" />
        </svg>
        {groupName}
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Panel>
        {Object.entries(group.tokens).map(([tokenName, def]) => {
          const isOverridden = tokenName in state.toneOverrides;
          const tone =
            state.toneOverrides[tokenName] ?? def.defaultTone[viewMode];
          const hex = hexFromArgb(palette.tone(tone));

          return (
            <ToneRow
              key={tokenName}
              tokenName={tokenName}
              cssVar={def.cssVar}
              tone={tone}
              isOverridden={isOverridden}
              hex={hex}
              onToneChange={(t) =>
                dispatch({ type: "SET_TONE_OVERRIDE", token: tokenName, tone: t })
              }
              onReset={() =>
                dispatch({ type: "CLEAR_TONE_OVERRIDE", token: tokenName })
              }
            />
          );
        })}
      </CollapsiblePrimitive.Panel>
    </CollapsiblePrimitive.Root>
  );
}

// ─── Color mode toggle ──────────────────────────────────

const COLOR_MODES: { value: ColorMode; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function ColorModeToggle() {
  const { state, dispatch } = useTheme();
  return (
    <div className="color-mode-group">
      {COLOR_MODES.map((m) => (
        <button
          key={m.value}
          className="color-mode-btn"
          data-active={state.colorMode === m.value}
          onClick={() => dispatch({ type: "SET_COLOR_MODE", mode: m.value })}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

// ─── Scheme variant select ──────────────────────────────

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
    <select
      className="scheme-select"
      value={state.schemeVariant}
      onChange={(e) =>
        dispatch({
          type: "SET_SCHEME_VARIANT",
          variant: e.target.value as SchemeVariant,
        })
      }
    >
      {SCHEME_VARIANTS.map((v) => (
        <option key={v.value} value={v.value}>
          {v.label}
        </option>
      ))}
    </select>
  );
}

// ─── Main panel ─────────────────────────────────────────

const SEED_ROLES: (keyof ThemeSeedColors)[] = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "neutral",
  "neutralVariant",
  "success",
  "warning",
  "info",
];

const SEED_LABELS: Record<keyof ThemeSeedColors, string> = {
  primary: "Primary",
  secondary: "Secondary",
  tertiary: "Tertiary",
  error: "Error",
  neutral: "Neutral",
  neutralVariant: "Neutral Variant",
  success: "Success",
  warning: "Warning",
  info: "Info",
};

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
      <div className="theme-panel-body">
        {/* Color Mode */}
        <div className="theme-panel-section">
          <div className="theme-panel-section-label">Color Mode</div>
          <ColorModeToggle />
        </div>

        {/* Scheme Variant */}
        <div className="theme-panel-section">
          <div className="theme-panel-section-label">Scheme Variant</div>
          <SchemeVariantSelect />
        </div>

        {/* Master Seed */}
        <div className="theme-panel-section">
          <div className="theme-panel-section-label">Master Seed</div>
          <SeedColorRow
            role="Source Color"
            hex={state.masterSeed}
            onChange={(hex) =>
              dispatch({ type: "SET_MASTER_SEED", hex })
            }
          />
          <p className="theme-panel-hint">
            Changing this derives all role colors via the selected scheme variant.
          </p>
        </div>

        {/* Seed Colors */}
        <div className="theme-panel-section">
          <div className="theme-panel-section-label">Seed Colors</div>
          {SEED_ROLES.map((role) => (
            <SeedColorRow
              key={role}
              role={SEED_LABELS[role]}
              hex={state.seedColors[role]}
              onChange={(hex) =>
                dispatch({ type: "SET_SEED", role, hex })
              }
            />
          ))}
        </div>

        {/* Tone Overrides */}
        <div className="theme-panel-section">
          <div className="theme-panel-section-label">Token Tones</div>
          {Object.keys(TOKEN_MAP).map((groupName) => (
            <TokenGroup
              key={groupName}
              groupName={groupName}
              seedHex={
                state.seedColors[
                  TOKEN_MAP[groupName].seedRole as keyof ThemeSeedColors
                ]
              }
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="theme-panel-actions">
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={handleCopy}>
          {copied ? "Copied!" : "Copy CSS"}
        </button>
        <button
          className="primary-action"
          onClick={() => downloadThemeCSS(state)}
        >
          Export
        </button>
      </div>
    </>
  );
}

export function ThemePanel({ mode = "drawer" }: { mode?: "drawer" | "sidebar" }) {
  const { state, dispatch } = useTheme();

  if (mode === "sidebar") {
    return (
      <aside className="theme-panel-sidebar">
        <div className="theme-panel-header">
          <span style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600 }}>
            Theme Builder
          </span>
        </div>
        <ThemePanelContent />
      </aside>
    );
  }

  return (
    <DialogPrimitive.Root
      open={state.isOpen}
      onOpenChange={(open) => dispatch({ type: "SET_OPEN", open })}
    >
      {/* Floating trigger */}
      <DialogPrimitive.Trigger className="theme-panel-trigger">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 0 20V2z" />
        </svg>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop data-slot="theme-panel-backdrop" />
        <DialogPrimitive.Popup data-slot="theme-panel-popup">
          {/* Header */}
          <div className="theme-panel-header">
            <DialogPrimitive.Title style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600 }}>
              Theme Builder
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className="theme-panel-close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </DialogPrimitive.Close>
          </div>

          <ThemePanelContent />
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
