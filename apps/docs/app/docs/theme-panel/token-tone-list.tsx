"use client";

import { useMemo } from "react";
import {
  Hct,
  TonalPalette,
  argbFromHex,
  hexFromArgb,
} from "@material/material-color-utilities";
import {
  Card,
  Tabs,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "liftkit";
import { ColorListItem } from "@/components/color-list-item";
import { ToneInput } from "@/components/tone-input";
import { useTheme } from "./theme-context";
import { TOKEN_MAP } from "./token-map";
import type { Scheme, ThemeSeedColors } from "./types";
import { useScheme } from "./use-scheme";

const SCHEMES: { value: Scheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

/**
 * The tokens of a key color group: a tab list (Light / Dark), then a Card holding the active tab's tokens. The tabs
 * are the color mode itself, so picking one switches the whole UI to that mode, and the navbar's switch moves the tab.
 */
export function TokenToneList({
  groupKey,
}: {
  groupKey: keyof ThemeSeedColors;
}) {
  const { state, dispatch } = useTheme();
  // The tabs are the color mode: the same state the navbar switch edits, so the two always agree
  const activeScheme = useScheme();
  const group = TOKEN_MAP[groupKey];
  const seedHex = state.seedColors[groupKey];

  const palette = useMemo(() => {
    const hct = Hct.fromInt(argbFromHex(seedHex));
    return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
  }, [seedHex]);

  if (!group) return null;

  return (
    <Tabs
      variant="contained"
      tabListItemsShouldGrow
      value={activeScheme}
      onValueChange={(next) =>
        dispatch({ type: "SET_COLOR_MODE", mode: next as Scheme })
      }
    >
      <TabsList className="mb-md">
        {SCHEMES.map(({ value, label }) => (
          <TabsTab key={value} value={value}>
            {label}
          </TabsTab>
        ))}
        <TabsIndicator />
      </TabsList>
      <Card
        noPadding="all"
        scaleFactor="label"
        className="bg-surfacecontainerlow border border-color-outlinevariant"
      >
        {SCHEMES.map(({ value: scheme }) => (
          // A tab panel centers its content, so each one holds a single full-width column
          <TabsPanel key={scheme} value={scheme} className="w-full">
            <div className="flex-v w-full">
              {Object.entries(group.tokens).map(([tokenName, def]) => {
                const tone =
                  state.toneOverrides[scheme][tokenName] ??
                  def.defaultTone[scheme];
                const name = `lk-${scheme}-${def.cssVar}`;
                const setTone = (next: number) =>
                  dispatch({
                    type: "SET_TONE_OVERRIDE",
                    scheme,
                    token: tokenName,
                    tone: next,
                  });
                return (
                  <ColorListItem
                    key={name}
                    variant="tone"
                    sliderValue={tone}
                    onSliderChange={setTone}
                    goldenBoxProps={{
                      className: "border-b border-color-outlinevariant",
                    }}
                    title={def.displayName}
                    description={def.description}
                    trailingMeta={
                      <ToneInput
                        className="label"
                        value={tone}
                        color={hexFromArgb(palette.tone(tone))}
                        onValueChange={setTone}
                        aria-label={name}
                      />
                    }
                  />
                );
              })}
            </div>
          </TabsPanel>
        ))}
      </Card>
    </Tabs>
  );
}
