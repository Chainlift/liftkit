"use client";

import { useState } from "react";
import "./theme-panel.css";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Card,
  ColorInput,
  GoldenBox,
  Icon,
  IconButton,
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "liftkit";
import { ControlListItem } from "@/components/control-list-item";
import { ResetFieldButton } from "@/components/reset-field-button";
import {
  DEFAULT_FONT_ASSIGNMENTS,
  DEFAULT_FONT_FAMILIES,
  DEFAULT_THEME_STATE,
} from "./defaults";
import { PanelHeader } from "./panel-header";
import { TokenToneList } from "./token-tone-list";
import {
  FONT_GROUPS,
  FONT_SLOTS,
  FontAssignmentSelect,
} from "./font-assignment-select";
import { FontClassTokenList } from "./font-class-token-list";
import { FontSlotPicker } from "./font-slot-picker";
import { PresetSelect } from "./preset-select";
import { SchemeVariantSelect } from "./scheme-variant-select";
import { useTheme } from "./theme-context";
import type { ResetSection, ThemeSeedColors } from "./types";
import { downloadThemeFiles } from "./theme-export";

// Structural widths are fixed (rem), not length tokens: length tokens grow with the Scale Factor's powers, so the
// panel would collapse or balloon while you drag the very sliders it contains. Fonts, spacing, and corners still
// follow the theme.
const PANEL_WIDTH = { width: "clamp(320px, 27.2vw, 400px)" };

/** The subscreens reachable from the panel's main screen. */
const SCREENS = [
  {
    id: "color",
    title: "Color",
    description: "Create a color system, or choose from a preset",
  },
  {
    id: "typography",
    title: "Typography",
    description: "Choose typefaces and map to utility classes",
  },
  {
    id: "scaling",
    title: "Scaling",
    description: "Set the global scale factor for spacing and sizing.",
  },
] as const;

type Screen = (typeof SCREENS)[number];

/** The key color groups, in display order. */
const SEED_ROLES: {
  key: keyof ThemeSeedColors;
  label: string;
  description: string;
}[] = [
  {
    key: "primary",
    label: "Primary",
    description: "Main brand color. Used the most.",
  },
  {
    key: "secondary",
    label: "Secondary",
    description: "Used when primary is too much, but you still need color",
  },
  {
    key: "tertiary",
    label: "Tertiary",
    description: "Accents, decorative, complements primary",
  },
  { key: "neutral", label: "Neutral", description: "Backgrounds and text" },
  {
    key: "neutralVariant",
    label: "Neutral Variant",
    description: "Outlines and alt surfaces",
  },
  {
    key: "error",
    label: "Error",
    description: "Destructive, stop, bad, blocking issue",
  },
  { key: "success", label: "Success", description: "Confirm, active, good" },
  {
    key: "warning",
    label: "Warning",
    description: "Pending, caution, non-blocking issue",
  },
  { key: "info", label: "Info", description: "Tips, callouts, announcements" },
];

type SeedRole = (typeof SEED_ROLES)[number];
type FontGroup = (typeof FONT_GROUPS)[number];

/** What each typeface slot is for. */
const FONT_SLOT_DESCRIPTIONS: Record<number, string> = {
  1: "Used by most font classes.",
  2: "For large text. Falls back to Default.",
  3: "For code and the -mono classes.",
};

/** The Theme Generator's control panel, shown as a fixed sidebar on the /playground page. */
export function ThemePanel() {
  const { state, dispatch } = useTheme();
  // The open subscreen, or null for the main screen
  const [screen, setScreen] = useState<Screen | null>(null);
  // The key color group open inside the Color subscreen, or null for the Color subscreen itself
  const [seedRole, setSeedRole] = useState<SeedRole | null>(null);
  // The font class open inside the Typography subscreen, or null for the Typography subscreen itself
  const [fontClass, setFontClass] = useState<FontGroup | null>(null);
  const [confirmingReset, setConfirmingReset] = useState(false);
  // What the Reset button at the bottom of a subscreen resets: the innermost screen that's open
  const resetTarget: { label: string; section: ResetSection } | null = fontClass
    ? {
        label: fontClass.label,
        section: { scope: "fontClass", group: fontClass.key },
      }
    : seedRole
      ? {
          label: seedRole.label,
          section: { scope: "keyColor", role: seedRole.key },
        }
      : screen?.id === "color"
        ? { label: screen.title, section: { scope: "color" } }
        : screen?.id === "typography"
          ? { label: screen.title, section: { scope: "typography" } }
          : screen?.id === "scaling"
            ? { label: screen.title, section: { scope: "scaling" } }
            : null;

  return (
    <aside
      className="flex-v flex-none h-full overflow-hidden bg-surface shadow-2xs rounded-sm "
      style={PANEL_WIDTH}
    >
      <PanelHeader
        title={
          fontClass
            ? fontClass.label
            : seedRole
              ? seedRole.label
              : screen
                ? screen.title
                : "Theme builder"
        }
        leading={
          screen && (
            <IconButton
              iconName="arrow-left"
              variant="text"
              fontClass="heading"
              aria-label="Back"
              title="Back"
              onClick={() => {
                if (fontClass) setFontClass(null);
                else if (seedRole) setSeedRole(null);
                else setScreen(null);
              }}
            />
          )
        }
      >
        {!screen && (
          <IconButton
            iconName="rotate-ccw"
            variant="outline"
            fontClass="heading"
            aria-label="Reset theme"
            title="Reset"
            onClick={() => setConfirmingReset(true)}
          />
        )}
        <IconButton
          iconName="download"
          fontClass="heading"
          aria-label="Export theme as CSS and JSON"
          title="Export CSS and JSON"
          onClick={() => downloadThemeFiles(state)}
        />
      </PanelHeader>

      <ScrollArea className="w-full max-w-full fill-container overflow-hidden">
        <ScrollAreaViewport>
          <ScrollAreaContent className="p-0" style={{ gap: 0 }}>
            {/* The main screen's rows run edge to edge; the subscreens keep the padding */}
            <GoldenBox
              scaleFactor="heading"
              opticalCorrection="y"
              noPadding={screen ? "none" : "all"}
            >
              {!screen &&
                SCREENS.map((item, index) => (
                  <ControlListItem
                    key={item.id}
                    isLink
                    onSelect={() => setScreen(item)}
                    goldenBoxProps={{
                      className:
                        index < SCREENS.length - 1
                          ? "border-b border-color-outlinevariant"
                          : undefined,
                    }}
                    title={item.title}
                    description={item.description}
                    trailingMeta={<Icon name="chevron-right" />}
                  />
                ))}
              {screen?.id === "color" && !seedRole && (
                <div className="flex-v gap-lg">
                  <div>
                    <div>
                      <h3 className="body-bold mb-xs">Generate a palette</h3>
                      <p className="subheading color-onsurfacelowest mb-md">
                        Pick a source color and a scheme variant. LiftKit
                        derives your key colors from them.
                      </p>
                    </div>
                    <Card
                      noPadding="all"
                      scaleFactor="label"
                      className="bg-surfacecontainerlow border border-color-outlinevariant"
                    >
                      <ControlListItem
                        goldenBoxProps={{
                          className: "border-b border-color-outlinevariant",
                        }}
                        title="Preset"
                        description="Start from a ready-made theme."
                        titleMeta={
                          <ResetFieldButton
                            label="preset"
                            disabled={state.activePresetId === null}
                            // Clears the preset binding and leaves everything else as it is, like choosing Custom
                            onReset={() =>
                              dispatch({
                                type: "LOAD",
                                state: { ...state, activePresetId: null },
                              })
                            }
                          />
                        }
                      >
                        <PresetSelect />
                      </ControlListItem>
                      <ControlListItem
                        goldenBoxProps={{
                          className: "border-b border-color-outlinevariant",
                        }}
                        title="Master color"
                        description="Used to generate key colors"
                        titleMeta={
                          <ResetFieldButton
                            label="master color"
                            disabled={
                              state.masterSeed.toLowerCase() ===
                              DEFAULT_THEME_STATE.masterSeed.toLowerCase()
                            }
                            onReset={() =>
                              dispatch({
                                type: "SET_MASTER_SEED",
                                hex: DEFAULT_THEME_STATE.masterSeed,
                              })
                            }
                          />
                        }
                        trailingMeta={
                          <div className="flex-h items-center gap-sm">
                            <ColorInput
                              className="theme-panel-color-input label"
                              value={state.masterSeed}
                              onValueChange={(hex) =>
                                dispatch({ type: "SET_MASTER_SEED", hex })
                              }
                              aria-label="Master color"
                            />
                          </div>
                        }
                      />
                      <ControlListItem
                        title="Scheme variant"
                        description="How the key colors are derived from the master color."
                        titleMeta={
                          <ResetFieldButton
                            label="scheme variant"
                            disabled={
                              state.schemeVariant ===
                              DEFAULT_THEME_STATE.schemeVariant
                            }
                            onReset={() =>
                              dispatch({
                                type: "SET_SCHEME_VARIANT",
                                variant: DEFAULT_THEME_STATE.schemeVariant,
                              })
                            }
                          />
                        }
                      >
                        <SchemeVariantSelect />
                      </ControlListItem>
                    </Card>
                  </div>
                  <div>
                    <div>
                      <h3 className="body-bold mb-xs">Tweak key colors</h3>
                      <p className="subheading color-onsurfacelowest mb-md">
                        Select to map tones per token.
                      </p>
                    </div>
                    <Card
                      noPadding="all"
                      scaleFactor="label"
                      className="bg-surfacecontainerlow border border-color-outlinevariant"
                    >
                      {SEED_ROLES.map((role, index) => (
                        <ControlListItem
                          key={role.key}
                          isLink
                          onSelect={() => setSeedRole(role)}
                          goldenBoxProps={{
                            className:
                              index < SEED_ROLES.length - 1
                                ? "border-b border-color-outlinevariant"
                                : undefined,
                          }}
                          title={role.label}
                          description={role.description}
                          titleMeta={
                            <ResetFieldButton
                              label={`${role.label} color`}
                              disabled={
                                state.seedColors[role.key].toLowerCase() ===
                                DEFAULT_THEME_STATE.seedColors[
                                  role.key
                                ].toLowerCase()
                              }
                              onReset={() =>
                                dispatch({
                                  type: "SET_SEED",
                                  role: role.key,
                                  hex: DEFAULT_THEME_STATE.seedColors[role.key],
                                })
                              }
                            />
                          }
                          trailingMeta={
                            <div className="flex-h items-center gap-sm">
                              <ColorInput
                                className="theme-panel-color-input label"
                                // Above the item's stretched button and state layer, so it stays clickable
                                style={{ position: "relative", zIndex: 2 }}
                                value={state.seedColors[role.key]}
                                onValueChange={(hex) =>
                                  dispatch({
                                    type: "SET_SEED",
                                    role: role.key,
                                    hex,
                                  })
                                }
                                aria-label={role.label}
                              />
                              <Icon name="chevron-right" />
                            </div>
                          }
                        />
                      ))}
                    </Card>
                  </div>
                </div>
              )}
              {screen?.id === "typography" && !fontClass && (
                <div className="flex-v gap-lg">
                  <div>
                    <div>
                      <h3 className="body-bold mb-xs">Typefaces</h3>
                      <p className="subheading color-onsurfacelowest mb-md">
                        Try out different Google fonts.
                      </p>
                    </div>
                    <Card
                      noPadding="all"
                      scaleFactor="label"
                      className="bg-surfacecontainerlow border border-color-outlinevariant"
                    >
                      {FONT_SLOTS.map(({ value: slot, label }) => (
                        <ControlListItem
                          key={slot}
                          goldenBoxProps={{
                            className:
                              slot < FONT_SLOTS.length
                                ? "border-b border-color-outlinevariant"
                                : undefined,
                          }}
                          title={label}
                          description={FONT_SLOT_DESCRIPTIONS[slot]}
                          titleMeta={
                            <ResetFieldButton
                              label={`${label} typeface`}
                              disabled={
                                state.fontFamilies[slot - 1] ===
                                DEFAULT_FONT_FAMILIES[slot - 1]
                              }
                              onReset={() =>
                                dispatch({
                                  type: "SET_FONT_FAMILY_SLOT",
                                  slot,
                                  family: DEFAULT_FONT_FAMILIES[slot - 1],
                                })
                              }
                            />
                          }
                        >
                          <FontSlotPicker
                            slot={slot}
                            placeholder={
                              slot === 1
                                ? "Inherit from page"
                                : slot === 2
                                  ? "Inherit from Default"
                                  : "Falls back to monospace"
                            }
                            value={state.fontFamilies[slot - 1]}
                            onChange={(family) =>
                              dispatch({
                                type: "SET_FONT_FAMILY_SLOT",
                                slot,
                                family,
                              })
                            }
                          />
                        </ControlListItem>
                      ))}
                    </Card>
                  </div>
                  <div>
                    <div>
                      <h3 className="body-bold mb-xs">Map to font classes</h3>
                      <p className="subheading color-onsurfacelowest mb-md">
                        Choose which typeface each font class uses.
                      </p>
                    </div>
                    <Card
                      noPadding="all"
                      scaleFactor="label"
                      className="bg-surfacecontainerlow border border-color-outlinevariant"
                    >
                      {FONT_GROUPS.map((group, index) => (
                        <ControlListItem
                          key={group.key}
                          isLink
                          onSelect={() => setFontClass(group)}
                          goldenBoxProps={{
                            className:
                              index < FONT_GROUPS.length - 1
                                ? "border-b border-color-outlinevariant"
                                : undefined,
                          }}
                          title={group.label}
                          titleMeta={
                            <ResetFieldButton
                              label={`${group.label} typeface`}
                              disabled={
                                state.fontAssignments[group.key] ===
                                DEFAULT_FONT_ASSIGNMENTS[group.key]
                              }
                              onReset={() =>
                                dispatch({
                                  type: "SET_FONT_ASSIGNMENT",
                                  group: group.key,
                                  slot: DEFAULT_FONT_ASSIGNMENTS[group.key],
                                })
                              }
                            />
                          }
                          trailingMeta={
                            <div className="flex-h items-center gap-sm">
                              {/* Above the item's stretched button and state layer, so it stays usable. A fixed rem
                                  width, like the panel itself. */}
                              <div
                                style={{
                                  position: "relative",
                                  zIndex: 2,
                                  width: "9rem",
                                }}
                              >
                                <FontAssignmentSelect
                                  label={group.label}
                                  slot={state.fontAssignments[group.key]}
                                  onChange={(slot) =>
                                    dispatch({
                                      type: "SET_FONT_ASSIGNMENT",
                                      group: group.key,
                                      slot,
                                    })
                                  }
                                />
                              </div>
                              <Icon name="chevron-right" />
                            </div>
                          }
                        />
                      ))}
                    </Card>
                  </div>
                </div>
              )}
              {fontClass && (
                <div className="flex-v gap-lg">
                  <div>
                    <h3 className="body-bold mb-xs">Adjust font properties</h3>
                    <p className="subheading color-onsurfacelowest">
                      Each font class has a line height, weight and letter
                      spacing. Override any of them for this class.
                    </p>
                  </div>
                  <FontClassTokenList group={fontClass.key} />
                </div>
              )}
              {seedRole && (
                <div className="flex-v gap-lg">
                  <div>
                    <h3 className="body-bold mb-xs">Map tones per token</h3>
                    <p className="subheading color-onsurfacelowest">
                      Each key color group consists of several tokens. Each
                      token maps to a specific tone from 0 to 100.
                    </p>
                  </div>
                  <TokenToneList groupKey={seedRole.key} />
                </div>
              )}
              {resetTarget && (
                <div className="mt-lg">
                  <Button
                    variant="outline"
                    color="error"
                    className="w-full"
                    label={`Reset ${resetTarget.label}`}
                    onClick={() =>
                      dispatch({
                        type: "RESET_SECTION",
                        section: resetTarget.section,
                      })
                    }
                  />
                </div>
              )}
            </GoldenBox>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar>
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>

      <AlertDialog open={confirmingReset} onOpenChange={setConfirmingReset}>
        <AlertDialogContent
          render={<Card scaleFactor="title3" opticalCorrection="top" />}
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="title3-bold mb-2xs">
              Reset theme?
            </AlertDialogTitle>
            <AlertDialogDescription className="body mb-sm">
              This resets the whole theme. Proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex items-center justify-end gap-sm">
              <AlertDialogClose>Cancel</AlertDialogClose>
              <AlertDialogAction
                onClick={() => {
                  dispatch({ type: "RESET" });
                  setConfirmingReset(false);
                }}
              >
                Reset
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </aside>
  );
}
