"use client";

import { Switch, SwitchThumb } from "liftkit";
import { useTheme } from "@/app/docs/theme-panel/theme-context";

/**
 * Docs-only: lets a visitor turn off the random theme that new visitors get on every page load. Turning it off
 * shows the default theme. Hidden until the saved preference has been read, so it never flashes the wrong state.
 */
export function RandomThemeSwitch() {
  const { randomTheme, setRandomTheme, loaded } = useTheme();
  return (
    <label
      className="label flex-h items-center gap-sm nowrap"
      style={{ visibility: loaded ? "visible" : "hidden" }}
      title="Show a random theme each time the site loads, until you change something in the Theme Generator"
    >
      Random theme
      <Switch checked={randomTheme} onCheckedChange={setRandomTheme}>
        <SwitchThumb />
      </Switch>
    </label>
  );
}
