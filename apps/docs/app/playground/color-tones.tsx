"use client";

import { useMemo } from "react";
import {
  Hct,
  TonalPalette,
  argbFromHex,
  hexFromArgb,
} from "@material/material-color-utilities";
import { useTheme } from "@/app/docs/theme-panel/theme-context";
import type { ThemeSeedColors } from "@/app/docs/theme-panel/types";

const TONES = [
  5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 92, 94, 95, 98, 99, 100,
];

const GROUPS: { key: keyof ThemeSeedColors; label: string }[] = [
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

/** One row per color group: its tonal palette, light to dark, from the theme's current seed colors. */
export function ColorTones() {
  const { state } = useTheme();

  const rows = useMemo(
    () =>
      GROUPS.map(({ key, label }) => {
        const hct = Hct.fromInt(argbFromHex(state.seedColors[key]));
        const palette = TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
        return {
          key,
          label,
          swatches: TONES.map((tone) => ({
            tone,
            hex: hexFromArgb(palette.tone(tone)),
          })),
        };
      }),
    [state.seedColors],
  );

  return (
    <div className="flex-v gap-lg w-full">
      {rows.map(({ key, label, swatches }) => (
        <div key={key} className="flex-h gap-md w-full">
          <div className="w-3xl h-xl flex items-center">
            <p className="label color-onsurfacevariant">{label}</p>
          </div>
          <div className="flex-h gap-xs fill-container">
            {swatches.map(({ tone, hex }) => (
              <div
                key={tone}
                className="flex-v fill-container items-center gap-2xs"
              >
                <div
                  className="w-full h-xl rounded-xs border border-color-outlinevariant"
                  style={{ backgroundColor: hex }}
                />
                <span className="caption">{tone}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
