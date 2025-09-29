"use client";

import { createContext, useState, useCallback, useEffect, ReactNode, useContext } from "react";
import materialDynamicColors from "material-dynamic-colors";
import { hexFromArgb, argbFromHex, TonalPalette, Hct, customColor } from "@material/material-color-utilities";

// Define types for theme colors
interface ThemeColors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  success: string;
  onSuccess: string;
  successContainer: string;
  onSuccessContainer: string;
  info: string;
  onInfo: string;
  infoContainer: string;
  onInfoContainer: string;
  [key: string]: string; // Add index signature for string keys
}

interface ThemeState {
  light: ThemeColors;
  dark: ThemeColors;
}

interface PaletteState {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralvariant: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  [key: string]: string; // Add index signature for string keys
}

interface ThemeContextType {
  theme: ThemeState;
  updateTheme: (palette: PaletteState) => Promise<void>;
  updateThemeFromMaster: (
    hexCode: string,
    setPalette: React.Dispatch<React.SetStateAction<PaletteState>>
  ) => Promise<void>;
  palette: PaletteState;
  setPalette: React.Dispatch<React.SetStateAction<PaletteState>>;
  colorMode: "light" | "dark";
  setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;

  //todo: why are these here?
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeState>({
    light: {
      primary: "#004ee7",
      onPrimary: "#ffffff",
      primaryContainer: "#dce1ff",
      onPrimaryContainer: "#001550",
      secondary: "#595d72",
      onSecondary: "#ffffff",
      secondaryContainer: "#dee1f9",
      onSecondaryContainer: "#161b2c",
      tertiary: "#75546f",
      onTertiary: "#ffffff",
      tertiaryContainer: "#ffd7f5",
      onTertiaryContainer: "#2c122a",
      error: "#ba1a1a",
      onError: "#ffffff",
      errorContainer: "#ffdad6",
      onErrorContainer: "#410002",
      background: "#fefbff",
      onBackground: "#1b1b1f",
      surface: "#fbf8fd",
      onSurface: "#1b1b1f",
      surfaceVariant: "#e2e1ec",
      onSurfaceVariant: "#45464f",
      outline: "#767680",
      outlineVariant: "#c6c5d0",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#303034",
      inverseOnSurface: "#f2f0f4",
      inversePrimary: "#b6c4ff",
      surfaceDim: "#dbd9de",
      surfaceBright: "#fbf8fd",
      surfaceContainerLowest: "#ffffff",
      surfaceContainerLow: "#f5f3f7",
      surfaceContainer: "#efedf1",
      surfaceContainerHigh: "#eae7ec",
      surfaceContainerHighest: "#e4e1e6",
      warning: "#e3aa00",
      onWarning: "#281b00",
      warningContainer: "#ffdfa0",
      onWarningContainer: "#261a00",
      success: "#41ca82",
      onSuccess: "#002311",
      successContainer: "#77fbae",
      onSuccessContainer: "#002110",
      info: "#9bb0ff",
      onInfo: "#001754",
      infoContainer: "#dce1ff",
      onInfoContainer: "#001550",
    },
    dark: {
      primary: "#004ee7",
      onPrimary: "#ffffff",
      primaryContainer: "#dce1ff",
      onPrimaryContainer: "#001550",
      secondary: "#595d72",
      onSecondary: "#ffffff",
      secondaryContainer: "#dee1f9",
      onSecondaryContainer: "#161b2c",
      tertiary: "#75546f",
      onTertiary: "#ffffff",
      tertiaryContainer: "#ffd7f5",
      onTertiaryContainer: "#2c122a",
      error: "#ba1a1a",
      onError: "#ffffff",
      errorContainer: "#ffdad6",
      onErrorContainer: "#410002",
      background: "#fefbff",
      onBackground: "#1b1b1f",
      surface: "#fbf8fd",
      onSurface: "#1b1b1f",
      surfaceVariant: "#e2e1ec",
      onSurfaceVariant: "#45464f",
      outline: "#767680",
      outlineVariant: "#c6c5d0",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#303034",
      inverseOnSurface: "#f2f0f4",
      inversePrimary: "#b6c4ff",
      surfaceDim: "#dbd9de",
      surfaceBright: "#fbf8fd",
      surfaceContainerLowest: "#ffffff",
      surfaceContainerLow: "#f5f3f7",
      surfaceContainer: "#efedf1",
      surfaceContainerHigh: "#eae7ec",
      surfaceContainerHighest: "#e4e1e6",
      warning: "#e3aa00",
      onWarning: "#281b00",
      warningContainer: "#ffdfa0",
      onWarningContainer: "#261a00",
      success: "#41ca82",
      onSuccess: "#002311",
      successContainer: "#77fbae",
      onSuccessContainer: "#002110",
      info: "#9bb0ff",
      onInfo: "#001754",
      infoContainer: "#dce1ff",
      onInfoContainer: "#001550",
    },
  });

  /**
   * REPLACE THE BELOW IF USING THE CHAINLIFT THEME BUILDER
   *
   */

const [colorMode, setColorMode] = useState<"light" | "dark">("light");
  
  const [palette, setPalette] = useState<PaletteState>({
  "primary": "#035eff",
  "secondary": "#badcff",
  "tertiary": "#00ddfe",
  "neutral": "#000000",
  "neutralvariant": "#3f4f5b",
  "error": "#dd305c",
  "warning": "#feb600",
  "success": "#0cfecd",
  "info": "#175bfc"
}

  /**
   * END OF REPLACE BLOCK; DO NOT ALTER ANYTHING BELOW THIS COMMENT
   */

  );

  const [navIsOpen, setNavIsOpen] = useState(false);

  // update the root css variables with the theme values
  useEffect(() => {
    const root = document.documentElement;
    // console.log(root);
    Object.keys(theme.light).forEach((key) => {
      root.style.setProperty(`--light__${key.toLowerCase()}_lkv`, theme.light[key]);
    });

    Object.keys(theme.dark).forEach((key) => {
      root.style.setProperty(`--dark__${key.toLowerCase()}_lkv`, theme.dark[key]);
    });

    if (colorMode === "dark") {
      Object.keys(theme.dark).forEach((key) => {
        root.style.setProperty(`--light__${key.toLowerCase()}_lkv`, theme.dark[key]);
      });
    }
  }, [theme, colorMode]);

  //run the initial theme generation on first load
  useEffect(() => {
    updateTheme(palette);

    /**TODO: Debundle scroll behavior overrides from the central theme context */
    /**This is such a confusing place to put it. */

    const disableScrollOnNumberInputs = (event: WheelEvent) => {
      const activeElement = document.activeElement as HTMLInputElement;
      if (activeElement?.type === "number") {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLInputElement;
      if (["ArrowUp", "ArrowDown"].includes(event.key) && activeElement?.type === "number") {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", disableScrollOnNumberInputs, {
      passive: false,
    });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("wheel", disableScrollOnNumberInputs);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toSentenceCase(str: string): string {
    if (!str) return ""; // handle empty or undefined input
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const getTonesFromKeyColors = (palette: PaletteState) => {
    class TonalSwatches {
      [key: string]: any; // Add index signature for string keys

      constructor(hue: number, chroma: number) {
        const swatch = TonalPalette.fromHueAndChroma(hue, chroma);

        for (let i = 1; i <= 99; i++) {
          this[`_${i}`] = hexFromArgb(swatch.tone(i));
        }
      }
    }
  };

  // Define the updateTheme function
  const updateTheme = useCallback(async (palette: PaletteState) => {
    class TonalSwatches {
      [key: string]: any; // Add index signature for string keys

      constructor(hue: number, chroma: number) {
        const swatch = TonalPalette.fromHueAndChroma(hue, chroma);

        for (let i = 1; i <= 99; i++) {
          this[`_${i}`] = hexFromArgb(swatch.tone(i));
        }
      }
    }

    Object.keys(palette).forEach((key) => {
      var argb = argbFromHex(palette[key]);
      var hct = Hct.fromInt(argb);

      var tones = new TonalSwatches(hct.hue, hct.chroma);

      // map the tones from each color group to a swatch name

      switch (key) {
        case "neutral":
          setTheme((prevTheme) => ({
            ...prevTheme,

            light: {
              ...prevTheme.light,
              background: tones._99,
              onBackground: tones._10,
              surfaceDim: tones._87,
              surface: tones._98,
              surfaceBright: tones._98,
              surfaceContainerLowest: "white",
              surfaceContainerLow: tones._96,
              surfaceContainer: tones._94,
              surfaceContainerHigh: tones._92,
              surfaceContainerHighest: tones._90,
              onSurface: tones._10,
              inverseSurface: tones._20,
              inverseOnSurface: tones._95,
            },
            dark: {
              ...prevTheme.dark,
              background: tones._10,
              onBackground: tones._85,
              surfaceContainerLowest: tones._4,
              surfaceDim: tones._6,
              surface: tones._6,
              surfaceContainerLow: tones._10,
              surfaceContainer: tones._12,
              surfaceContainerHigh: tones._17,
              surfaceContainerHighest: tones._22,
              surfaceBright: tones._24,
              onSurface: tones._90,
              inverseSurface: tones._98,
              inverseOnSurface: tones._10,
            },
          }));
          break;
        case "neutralvariant":
          setTheme((prevTheme) => ({
            ...prevTheme,

            light: {
              ...prevTheme.light,
              surfaceVariant: tones._80,
              onSurfaceVariant: tones._40,
              outline: tones._60,
              outlineVariant: tones._90,
            },

            dark: {
              ...prevTheme.dark,
              surfaceVariant: tones._20,
              onSurfaceVariant: tones._60,
              outline: tones._50,
              outlineVariant: tones._30,
            },
          }));
          break;
        case "primary":
          setTheme((prevTheme) => ({
            ...prevTheme,

            light: {
              ...prevTheme.light,
              [key]: tones._40,
              [`on${toSentenceCase(key)}`]: tones._98,
              [`${key}Container`]: tones._90,
              [`on${toSentenceCase(key)}Container`]: tones._10,
              [`${key}Fixed`]: tones._90,
              [`${key}FixedDim`]: tones._80,
              [`on${toSentenceCase(key)}Fixed`]: tones._10,
              [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
              ["inversePrimary"]: tones._80,
            },
            dark: {
              ...prevTheme.dark,
              [key]: tones._80,
              [`on${toSentenceCase(key)}`]: tones._20,
              [`${key}Container`]: tones._30,
              [`on${toSentenceCase(key)}Container`]: tones._90,
              [`${key}Fixed`]: tones._90,
              [`${key}FixedDim`]: tones._80,
              [`on${toSentenceCase(key)}Fixed`]: tones._10,
              [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
              ["inversePrimary"]: tones._80,
            },
          }));
          break;
        case "secondary":
        case "tertiary":
          setTheme((prevTheme) => ({
            ...prevTheme,
            light: {
              ...prevTheme.light,
              [key]: tones._40,
              [`on${toSentenceCase(key)}`]: tones._98,
              [`${key}Container`]: tones._90,
              [`on${toSentenceCase(key)}Container`]: tones._10,
              [`${key}Fixed`]: tones._90,
              [`${key}FixedDim`]: tones._80,
              [`on${toSentenceCase(key)}Fixed`]: tones._10,
              [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
            },
            dark: {
              ...prevTheme.dark,
              [key]: tones._80,
              [`on${toSentenceCase(key)}`]: tones._20,
              [`${key}Container`]: tones._30,
              [`on${toSentenceCase(key)}Container`]: tones._90,
              [`${key}Fixed`]: tones._90,
              [`${key}FixedDim`]: tones._80,
              [`on${toSentenceCase(key)}Fixed`]: tones._10,
              [`on${toSentenceCase(key)}FixedVariant`]: tones._30,
            },
          }));
        default:
          setTheme((prevTheme) => ({
            ...prevTheme,
            light: {
              ...prevTheme.light,
              [key]: tones._40,
              [`on${toSentenceCase(key)}`]: tones._98,
              [`${key}Container`]: tones._90,
              [`on${toSentenceCase(key)}Container`]: tones._10,
            },
            dark: {
              ...prevTheme.dark,
              [key]: tones._80,
              [`on${toSentenceCase(key)}`]: tones._20,
              [`${key}Container`]: tones._30,
              [`on${toSentenceCase(key)}Container`]: tones._90,
            },
          }));
      }
    });
  }, []);

  const updateThemeFromMaster = useCallback(
    async (hexCode: string, setPalette: React.Dispatch<React.SetStateAction<PaletteState>>) => {
      var newPalette: Record<string, string> = {};

      // need to get the key colors to feed back to the ColorModule so it can update the palette
      try {
        const colors = await materialDynamicColors(hexCode);

        newPalette.primary = colors.light.primary;
        newPalette.secondary = colors.light.secondary;
        newPalette.tertiary = colors.light.tertiary;
        newPalette.neutral = colors.light.surfaceContainer;

        const customColors: Record<string, { color: string; name: string }> = {
          info: { color: "#175bfc", name: "info" },
          warning: { color: "#ffbf00", name: "warning" },
          success: { color: "#42cb83", name: "success" },
        };

        Object.keys(customColors).forEach((key) => {
          const sourceColor = argbFromHex(hexCode);
          const customColorObj = {
            value: argbFromHex(customColors[key].color),
            blend: true,
            name: customColors[key].name,
          };

          const result = customColor(sourceColor, customColorObj);

          const newHexVal = hexFromArgb(result.value);
          newPalette[key] = newHexVal;
        });

        Object.keys(newPalette).forEach((key) => {
          setPalette((prevPalette) => ({
            ...prevPalette,
            [key]: newPalette[key],
          }));
        });
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  //normalization functions; things that prevent weird input behavior

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme,
        updateThemeFromMaster,
        palette,
        setPalette,
        navIsOpen,
        setNavIsOpen,
        colorMode,
        setColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
