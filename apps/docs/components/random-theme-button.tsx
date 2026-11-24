"use client";

import { Button } from "liftkit";
import { PRESETS } from "@/app/docs/theme-panel/presets";
import { useTheme } from "@/app/docs/theme-panel/theme-context";

/**
 * Docs-only: applies a random preset, never the one already active. Clicking is an edit like any other, so the result
 * is saved and survives a reload.
 */
export function RandomThemeButton() {
  const { state, dispatch } = useTheme();
  return (
    <Button
      variant="outline"
      startIcon="dices"
      label="Random theme"
      onClick={() => {
        const others = PRESETS.filter((preset) => preset.id !== state.activePresetId);
        const pool = others.length > 0 ? others : PRESETS;
        dispatch({ type: "APPLY_PRESET", presetId: pool[Math.floor(Math.random() * pool.length)].id });
      }}
    />
  );
}
