"use client";

import { useState } from "react";
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
import { PanelHeader } from "./panel-header";
import { PresetSelect } from "./preset-select";
import { SchemeVariantSelect } from "./scheme-variant-select";
import { useTheme } from "./theme-context";
import { downloadThemeFiles } from "./theme-export";

// Structural widths are fixed (rem), not length tokens: length tokens grow with the Scale Factor's powers, so the
// panel would collapse or balloon while you drag the very sliders it contains. Fonts, spacing, and corners still
// follow the theme.
const PANEL_WIDTH = { width: "20rem" };

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
  const [confirmingReset, setConfirmingReset] = useState(false);

  return (
    <aside
      className="flex-v flex-none h-full overflow-hidden bg-surfacecontainerlowest border rounded-sm "
      style={PANEL_WIDTH}
    >
      <PanelHeader
        title={screen ? screen.title : "Theme builder"}
        leading={
          screen && (
            <IconButton
              iconName="arrow-left"
              variant="text"
              fontClass="heading"
              aria-label="Back"
              title="Back"
              onClick={() => setScreen(null)}
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
          onClick={() =>
            screen ? setConfirmingReset(true) : dispatch({ type: "RESET" })
          }
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
                  <button
                    key={item.id}
                    type="button"
                    style={ROW_BUTTON_STYLE}
                    onClick={() => setScreen(item)}
                  >
                    <StateLayer />
                    <GoldenBox>
                      <div className="flex-h items-center gap-md">
                        <div className="flex-grow">
                          <h3 className="body-bold mb-2xs">{item.title}</h3>
                          <p className="subheading color-onsurfacelowest">
                            {item.description}
                          </p>
                        </div>
                        <Icon name="chevron-right" />
                      </div>
                    </GoldenBox>
                  </button>
                ))}
              {screen?.id === "color" && (
                <div className="flex-v gap-lg">
                  <PresetSelect />
                  <div className="flex-v gap-md">
                    {/* Not a Field: lk-field.css restyles every input inside one, including the color picker's */}
                    <div className="flex-h items-center gap-md">
                      <div className="flex-grow">
                        <span className="label font-500">Master color</span>
                        <p className="caption color-onsurfacelowest">
                          Used to generate key colors
                        </p>
                      </div>
                      {/* A fixed rem width, like the panel itself, so the control doesn't grow with the scale factor */}
                      <ColorInput
                        className="label flex-none"
                        style={{ width: "10rem" }}
                        value={state.masterSeed}
                        onValueChange={(hex) =>
                          dispatch({ type: "SET_MASTER_SEED", hex })
                        }
                        aria-label="Master color"
                      />
                    </div>
                    <SchemeVariantSelect />
                  </div>
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
              This resets the whole theme, not just {screen?.title}. Proceed?
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
