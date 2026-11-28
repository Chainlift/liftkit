"use client";

import { Icon, Switch, SwitchThumb } from "liftkit";
import { useTheme } from "@/app/docs/theme-panel/theme-context";
import { useScheme } from "@/app/docs/theme-panel/use-scheme";

/**
 * Docs-only: a light/dark switch. Off is light (sun on the thumb), on is dark (moon). While the color mode is still
 * System it shows the resolved scheme; flipping it forces light or dark.
 */
export function ColorModeSwitch() {
  const { dispatch } = useTheme();
  const scheme = useScheme();
  return (
    <Switch
      // No font class set it before, which sizes it like body text; heading is one step up
      className="heading"
      aria-label="Dark mode"
      checked={scheme === "dark"}
      onCheckedChange={(dark) =>
        dispatch({ type: "SET_COLOR_MODE", mode: dark ? "dark" : "light" })
      }
    >
      <SwitchThumb className="flex items-center justify-center">
        <Icon name={scheme === "dark" ? "moon" : "sun"} fontClass="caption" />
      </SwitchThumb>
    </Switch>
  );
}
