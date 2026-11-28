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
  Switch,
  SwitchThumb,
  Tabs,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
} from "liftkit";
import { ControlListItem } from "@/components/control-list-item";
import { ToneInput } from "@/components/tone-input";
import { ResetFieldButton } from "@/components/reset-field-button";
import { useTheme } from "./theme-context";
import { TOKEN_MAP } from "./token-map";
import type { Scheme, ThemeSeedColors } from "./types";
import { useScheme } from "./use-scheme";

const SCHEMES: { value: Scheme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const CARD_CLASS = "bg-surfacecontainerlow border border-color-outlinevariant";

/**
 * The tokens of a key color group. A switch at the top picks between two layouts: a tab list (Light / Dark) with a
 * Card of tokens per tab, or, with "same tones" on, one Card whose tones apply to both modes. The tabs are the color
 * mode itself, so picking one switches the whole UI to that mode, and the navbar's switch moves the tab.
 */
export function TokenToneList({
  groupKey,
}: {
  groupKey: keyof ThemeSeedColors;
}) {
  const { state, dispatch } = useTheme();
  const activeScheme = useScheme();
  const group = TOKEN_MAP[groupKey];
  const seedHex = state.seedColors[groupKey];
  const same = state.sameTones;

  const palette = useMemo(() => {
    const hct = Hct.fromInt(argbFromHex(seedHex));
    return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
  }, [seedHex]);

  if (!group) return null;

  /** The group's tokens as items, reading and editing one mode's tones (in same-tones mode, light's, for both). */
  const tokenList = (scheme: Scheme) => (
    <div className="flex-v w-full">
      {Object.entries(group.tokens).map(([tokenName, def], index, tokens) => {
        const tone =
          state.toneOverrides[scheme][tokenName] ?? def.defaultTone[scheme];
        const name = `lk-${scheme}-${def.cssVar}`;
        const setTone = (next: number) =>
          dispatch({
            type: "SET_TONE_OVERRIDE",
            scheme,
            token: tokenName,
            tone: next,
          });
        return (
          <ControlListItem
            key={name}
            variant="slider"
            sliderValue={tone}
            onSliderChange={setTone}
            goldenBoxProps={{
              className:
                index < tokens.length - 1
                  ? "border-b border-color-outlinevariant"
                  : undefined,
            }}
            title={def.displayName}
            description={def.description}
            titleMeta={
              <ResetFieldButton
                label={
                  same ? def.displayName : `${def.displayName} (${scheme})`
                }
                disabled={!(tokenName in state.toneOverrides[scheme])}
                onReset={() =>
                  dispatch({
                    type: "CLEAR_TONE_OVERRIDE",
                    scheme,
                    token: tokenName,
                  })
                }
              />
            }
            trailingMeta={
              <div className="flex-h items-center gap-sm">
                <ToneInput
                  className="label"
                  value={tone}
                  color={hexFromArgb(palette.tone(tone))}
                  onValueChange={setTone}
                  aria-label={name}
                />
              </div>
            }
          />
        );
      })}
    </div>
  );

  return (
    <>
      <Card noPadding="all" scaleFactor="label" className={CARD_CLASS}>
        <ControlListItem
          title="Use same tones for light and dark modes."
          trailingMeta={
            <Switch
              aria-label="Use same tones for light and dark modes"
              checked={same}
              onCheckedChange={(value) =>
                dispatch({ type: "SET_SAME_TONES", value })
              }
            >
              <SwitchThumb />
            </Switch>
          }
        />
      </Card>
      {same ? (
        <Card noPadding="all" scaleFactor="label" className={CARD_CLASS}>
          {tokenList("light")}
        </Card>
      ) : (
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
          <Card noPadding="all" scaleFactor="label" className={CARD_CLASS}>
            {SCHEMES.map(({ value: scheme }) => (
              // A tab panel centers its content, so each one holds a single full-width column
              <TabsPanel key={scheme} value={scheme} className="w-full">
                {tokenList(scheme)}
              </TabsPanel>
            ))}
          </Card>
        </Tabs>
      )}
    </>
  );
}
