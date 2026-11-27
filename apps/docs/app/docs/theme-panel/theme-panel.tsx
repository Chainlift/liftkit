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
  StateLayer,
} from "liftkit";
import { ColorListItem } from "@/components/color-list-item";
import { PanelHeader } from "./panel-header";
import { TokenToneList } from "./token-tone-list";
import { PresetSelect } from "./preset-select";
import { SchemeVariantSelect } from "./scheme-variant-select";
import { useTheme } from "./theme-context";
import type { ThemeSeedColors } from "./types";
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
const SEED_ROLES: { key: keyof ThemeSeedColors; label: string; description: string }[] = [
  { key: "primary", label: "Primary", description: "Main brand color. Used the most." },
  { key: "secondary", label: "Secondary", description: "Used when primary is too much, but you still need color" },
  { key: "tertiary", label: "Tertiary", description: "Accents, decorative, complements primary" },
  { key: "neutral", label: "Neutral", description: "Backgrounds and text" },
  { key: "neutralVariant", label: "Neutral Variant", description: "Outlines and alt surfaces" },
  { key: "error", label: "Error", description: "Destructive, stop, bad, blocking issue" },
  { key: "success", label: "Success", description: "Confirm, active, good" },
  { key: "warning", label: "Warning", description: "Pending, caution, non-blocking issue" },
  { key: "info", label: "Info", description: "Tips, callouts, announcements" },
];

type SeedRole = (typeof SEED_ROLES)[number];

// A native button with its default chrome stripped, so a whole row can be clicked.
const ROW_BUTTON_STYLE = {
  display: "block",
  position: "relative",
  width: "100%",
  padding: 0,
  border: 0,
  background: "none",
  color: "inherit",
  font: "inherit",
  textAlign: "left",
  cursor: "pointer",
} as const;

/** The Theme Generator's control panel, shown as a fixed sidebar on the /playground page. */
export function ThemePanel() {
  const { state, dispatch } = useTheme();
  // The open subscreen, or null for the main screen
  const [screen, setScreen] = useState<Screen | null>(null);
  // The key color group open inside the Color subscreen, or null for the Color subscreen itself
  const [seedRole, setSeedRole] = useState<SeedRole | null>(null);
  const [confirmingReset, setConfirmingReset] = useState(false);

  return (
    <aside className="flex-v flex-none h-full overflow-hidden bg-surface shadow-2xs rounded-sm " style={PANEL_WIDTH}>
      <PanelHeader
        title={seedRole ? seedRole.label : screen ? screen.title : "Theme builder"}
        leading={
          screen && (
            <IconButton
              iconName="arrow-left"
              variant="text"
              fontClass="heading"
              aria-label="Back"
              title="Back"
              onClick={() => (seedRole ? setSeedRole(null) : setScreen(null))}
            />
          )
        }
      >
        <IconButton
          iconName="rotate-ccw"
          variant="outline"
          fontClass="heading"
          aria-label="Reset theme"
          title="Reset"
          // Reset always clears the whole theme, so confirm it where the user might think it's scoped to the screen
          onClick={() => (screen ? setConfirmingReset(true) : dispatch({ type: "RESET" }))}
        />
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
            <GoldenBox scaleFactor="heading" opticalCorrection="y">
              {!screen &&
                SCREENS.map((item) => (
                  <button key={item.id} type="button" style={ROW_BUTTON_STYLE} onClick={() => setScreen(item)}>
                    <StateLayer />
                    <GoldenBox>
                      <div className="flex-h items-center gap-md">
                        <div className="flex-grow">
                          <h3 className="body-bold mb-2xs">{item.title}</h3>
                          <p className="subheading color-onsurfacelowest">{item.description}</p>
                        </div>
                        <Icon name="chevron-right" />
                      </div>
                    </GoldenBox>
                  </button>
                ))}
              {screen?.id === "color" && !seedRole && (
                <div className="flex-v gap-lg">
                  <div>
                    <div>
                      <h3 className="body-bold mb-xs">Generate a palette</h3>
                      <p className="subheading color-onsurfacelowest mb-md">
                        Pick a source color and a scheme variant. LiftKit derives your key colors from them.
                      </p>
                    </div>
                    <Card
                      noPadding="all"
                      scaleFactor="label"
                      className="bg-surfacecontainerlow border border-color-outlinevariant"
                    >
                      <GoldenBox scaleFactor="label" className="border-b border-color-outlinevariant">
                        <PresetSelect />
                      </GoldenBox>
                      <GoldenBox scaleFactor="label" className="border-b border-color-outlinevariant">
                        {/* Not a Field: lk-field.css restyles every input inside one, including the color picker's */}
                        <div className="flex-h items-center gap-md">
                          <div className="flex-grow">
                            <p className="label font-500 mb-xs">Master color</p>
                            <p className="caption color-onsurfacelowest">Used to generate key colors</p>
                          </div>
                          <ColorInput
                            className="theme-panel-color-input label flex-none"
                            value={state.masterSeed}
                            onValueChange={(hex) => dispatch({ type: "SET_MASTER_SEED", hex })}
                            aria-label="Master color"
                          />
                        </div>
                      </GoldenBox>
                      <GoldenBox scaleFactor="label">
                        <SchemeVariantSelect />
                      </GoldenBox>
                    </Card>
                  </div>
                  <div>
                    <div>
                      <h3 className="body-bold mb-xs">Tweak key colors</h3>
                      <p className="subheading color-onsurfacelowest mb-md">Select to map tones per token.</p>
                    </div>
                    <Card
                      noPadding="all"
                      scaleFactor="label"
                      className="bg-surfacecontainerlow border border-color-outlinevariant"
                    >
                      {SEED_ROLES.map((role) => (
                        <ColorListItem
                          key={role.key}
                          isLink
                          onSelect={() => setSeedRole(role)}
                          goldenBoxProps={{
                            className: "border-b border-color-outlinevariant",
                          }}
                          title={role.label}
                          description={role.description}
                          trailingMeta={
                            <div className="flex-h items-center gap-sm">
                              <ColorInput
                                className="theme-panel-color-input label flex-none"
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
              {seedRole && (
                <div className="flex-v gap-lg">
                  <div>
                    <h3 className="body-bold mb-xs">Map tones per token</h3>
                    <p className="subheading color-onsurfacelowest">
                      Each key color group consists of several tokens. Each token maps to a specific tone from 0 to 100.
                    </p>
                  </div>
                  <TokenToneList groupKey={seedRole.key} />
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
        <AlertDialogContent render={<Card scaleFactor="title3" opticalCorrection="top" />}>
          <AlertDialogHeader>
            <AlertDialogTitle className="title3-bold mb-2xs">Reset theme?</AlertDialogTitle>
            <AlertDialogDescription className="body mb-sm">
              This resets the whole theme, not just {seedRole ? seedRole.label : screen?.title}. Proceed?
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
