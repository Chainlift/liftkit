"use client";

import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "@/registry/nextjs/components/theme";
import Card from "@/registry/nextjs/components/card";
import Column from "@/registry/nextjs/components/column";
import Row from "@/registry/nextjs/components/row";
import Switch from "@/registry/nextjs/components/switch";
import IconButton from "@/registry/nextjs/components/icon-button";

type LkColorGroup =
  | "master"
  | "primary"
  | "secondary"
  | "tertiary"
  | "neutral"
  | "neutralvariant"
  | "error"
  | "warning"
  | "success"
  | "info";

export default function ThemeController() {
  const { palette, setPalette, theme, updateTheme, updateThemeFromMaster, colorMode, setColorMode } =
    useContext(ThemeContext);

  const brandPalette: LkColorGroup[] = ["primary", "secondary", "tertiary"];

  const semanticPalette: LkColorGroup[] = ["error", "warning", "success", "info"];

  const layoutPalette: LkColorGroup[] = ["neutral", "neutralvariant"];

  const [paletteArray, setPaletteArray] = useState(
    Object.keys(palette).map((key) => {
      return { key, value: palette[key] };
    })
  );
  useEffect(() => {
    updateTheme(palette);
    const newPaletteArray = Object.keys(palette).map((key) => {
      return { key, value: palette[key] };
    });
    setPaletteArray(newPaletteArray);
  }, [palette]);

  const handleColorChange = (key: LkColorGroup, newValue: string) => {


    if (key === "master") {
      updateThemeFromMaster(newValue, setPalette);
    } else {
      setPalette((prevPalette) => ({
        ...prevPalette,
        [key]: newValue,
      }));
    }
  };

  function handleColorModeSwitch() {
    if (colorMode === "dark") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  }

  const handleCopyPalette = async () => {
    try {
      const codeContent = `const [colorMode, setColorMode] = useState<"light" | "dark">("${colorMode}");
  
  const [palette, setPalette] = useState<PaletteState>(${JSON.stringify(palette, null, 2)}`;
      await navigator.clipboard.writeText(codeContent);
      alert("Code copied");
    } catch (err) {
      console.error("Failed to copy palette:", err);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div className="position-fixed" style={{ zIndex: 1000 }}>
          <IconButton
            icon="palette"
            fontClass="display2"
            onClick={() => setIsOpen(true)}
            className="shadow-xl"
            color="inversesurface"
            style={{
              position: "fixed",
              zIndex: 1000,
              top: "var(--lk-size-xs)",
              left: "var(--lk-size-xs)",
            }}
          />
        </div>
      )}
      {isOpen &&
        createPortal(
          <div className="lk-theme-drawer">
            <Card
              scaleFactor="heading"
              bgColor="surfacecontainerlowest"
              className="shadow-lg mb-2xl h-full"
              material="glass"
              materialProps={{ thickness: "normal" }}
              isScrollable={true}
            >
              <Column gap="md">
                <Row alignItems="center" justifyContent="space-between">
                  <h2 className="body-bold">Theme Controller</h2>

                  <IconButton
                    icon="x"
                    variant="outline"
                    color="onsurface"
                    onClick={() => setIsOpen(false)}
                  ></IconButton>
                </Row>
                <div>
                  <h2 className="label mb-xs">Config</h2>
                  <p className="caption color-onsurfacevariant mb-xs">
                    Copy and paste this snippet into your theme/index.tsx file to update your project to match the
                    current configuration.
                  </p>

                  <Card
                    material="glass"
                    materialProps={{ thickness: "thin", tint: "onsurface", tintOpacity: 0.1 }}
                    bgColor="surfacecontainerlowest"
                    scaleFactor="body"
                    className="position-relative"
                  >
                    <pre style={{ fontSize: "0.618em", overflow: "auto" }}>
                      {`
const [colorMode, setColorMode] = useState<"light" | "dark">("${colorMode}");

const [palette, setPalette] = useState<PaletteState>(${JSON.stringify(palette, null, 2)}
`}
                    </pre>
                    <IconButton
                      icon="copy"
                      style={{ position: "absolute", inset: "1em 1em auto auto" }}
                      onClick={handleCopyPalette}
                    ></IconButton>
                  </Card>
                </div>
                <div>
                  <h2 className="capline mb-lg color-onsurfacevariant">Mode</h2>
                  <Row alignItems="start" gap="md">
                    <Column>
                      <Switch onClick={handleColorModeSwitch} value={colorMode === "dark" ? true : false}></Switch>
                    </Column>
                    <Column>
                      <label className="label mb-xs">Default to Dark Mode</label>
                      <p className="caption color-onsurfacevariant mb-xs">Toggles dark mode.</p>
                    </Column>
                  </Row>
                </div>
                <div>
                  <h2 className="capline mb-lg color-onsurfacevariant">Globals</h2>
                  <Row alignItems="start" gap="md">
                    <input
                      type="color"
                      name="master"
                      value={palette["master"]}
                      onChange={(event) => handleColorChange("master", event.target.value)}
                    ></input>
                    <Column>
                      <label className="label mb-xs" htmlFor={"master"}>
                        {"master"}
                      </label>
                      <p className="caption color-onsurfacevariant mb-xs">
                        The seed color.{" "}
                        <strong className="color-error">If you edit this, all other color tokens will reset.</strong>
                      </p>
                    </Column>
                  </Row>
                </div>
                <div>
                  <div>
                    <h2 className="capline mb-lg color-onsurfacevariant">Brand</h2>
                  </div>
                  {brandPalette.map((colorGroup) => (
                    <Row key={colorGroup} alignItems="start" gap="md" className="mb-sm">
                      <input
                        type="color"
                        name={colorGroup}
                        value={palette[colorGroup]}
                        onChange={(event) => handleColorChange(colorGroup, event.target.value)}
                      ></input>
                      <Column>
                        <label className="caption-bold mono mb-2xs" htmlFor={colorGroup}>
                          {colorGroup}
                        </label>
                        <p className="caption color-onsurfacevariant mb-xs">
                          {colorGroup === "primary"
                            ? "Main brand color, used for most UI elements."
                            : colorGroup === "secondary"
                              ? "Desaturated variant of primary."
                              : colorGroup === "tertiary"
                                ? "Your accent color. Defaults to complementary hue to primary."
                                : null}
                        </p>
                      </Column>
                    </Row>
                  ))}
                </div>
                <div>
                  <div>
                    <h2 className="capline color-onsurfacevariant mb-lg">Semantic</h2>
                  </div>
                  {semanticPalette.map((colorGroup) => (
                    <Row key={colorGroup} alignItems="start" gap="md" className="mb-sm">
                      <input
                        type="color"
                        name={colorGroup}
                        value={palette[colorGroup]}
                        onChange={(event) => handleColorChange(colorGroup, event.target.value)}
                      ></input>
                      <Column>
                        <label className="caption-bold mono mb-2xs" htmlFor={colorGroup}>
                          {colorGroup}
                        </label>
                        <p className="caption color-onsurfacevariant mb-xs">
                          {colorGroup === "error"
                            ? "A pink or red, indicating problems."
                            : colorGroup === "warning"
                              ? "An orange or yellow, indicating caution."
                              : colorGroup === "success"
                                ? "A green, indicating success."
                                : colorGroup === "info"
                                  ? "A blue, indicating neutral information."
                                  : null}
                        </p>
                      </Column>
                    </Row>
                  ))}
                </div>
                <div>
                  <div>
                    <h2 className="capline color-onsurfacevariant mb-lg">Layout</h2>
                  </div>
                  {layoutPalette.map((colorGroup) => (
                    <Row key={colorGroup} alignItems="start" gap="md" className="mb-sm">
                      <input
                        type="color"
                        name={colorGroup}
                        value={palette[colorGroup]}
                        onChange={(event) => handleColorChange(colorGroup, event.target.value)}
                      ></input>
                      <Column>
                        <label className="caption-bold mono mb-xs" htmlFor={colorGroup}>
                          {colorGroup}
                        </label>
                        <p className="caption color-onsurfacevariant mb-xs">
                          {colorGroup === "neutral"
                            ? "Backgrounds, surfaces, outlines, and default text color"
                            : colorGroup === "neutralvariant"
                              ? "Surface variant, outline variant, and text color variant"
                              : null}
                        </p>
                      </Column>
                    </Row>
                  ))}
                </div>
              </Column>
            </Card>
          </div>,
          document.body
        )}

      <style jsx>{`
        input[type="color"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: var(--lk-size-lg);
          height: var(--lk-size-lg);
          flex-basis: auto;
          flex: 0 0 auto;
          background-color: transparent;
          border: none;
          cursor: pointer;
          outline: 2px solid var(--lk-onsurface);
          border-radius: 100em;

          padding-block: 0px;
          padding-inline: 0px;

          &::-webkit-color-swatch-wrapper {
            padding: 0;
          }

          &::-webkit-color-swatch {
            border-radius: 100em;
            border: none;
          }
          &::-moz-color-swatch {
            border-radius: 100%;
            border: none;
          }
        }

        .lk-theme-drawer {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;

          width: calc(var(--lk-size-4xl) * var(--lk-wholestep));
          z-index: 1000;
          padding: var(--lk-size-md);
        }
      `}</style>
    </>
  );
}
