/** Seed colors for each color role (hex strings, e.g. "#0051e0") */
export interface ThemeSeedColors {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  neutral: string;
  neutralVariant: string;
  success: string;
  warning: string;
  info: string;
}

export type ColorMode = "system" | "light" | "dark";

/** The two color schemes a token's tone can be set for. */
export type Scheme = "light" | "dark";

/** Per scheme, a sparse map of token name -> tone (0-100). Only overridden tokens appear. */
export type ToneOverrides = Record<Scheme, Record<string, number>>;

export type SchemeVariant =
  | "tonalSpot"
  | "vibrant"
  | "expressive"
  | "neutral"
  | "fidelity"
  | "rainbow"
  | "fruitSalad"
  | "monochrome";

/** The three generic font-family slots in liftkit-core.css. */
export type FontSlot = 1 | 2 | 3;

/**
 * The twelve font-class groups. Each group covers its base class plus
 * its -bold and -mono siblings (e.g. "display1" covers display1,
 * display1-bold, and display1-mono).
 */
export type FontClassGroup =
  | "display1"
  | "display2"
  | "title1"
  | "title2"
  | "title3"
  | "heading"
  | "body"
  | "callout"
  | "subheading"
  | "label"
  | "caption"
  | "capline";

/** Tuple of three family stacks. An empty string means "leave it at inherit". */
export type FontFamilies = [string, string, string];

/** Each group picks one of the three slots. */
export type FontAssignments = Record<FontClassGroup, FontSlot>;

/** The font class tokens that can be edited: --lk-<class>-font-size, -line-height, -font-weight and -letter-spacing. */
export type FontClassTokenKey =
  | "fontSize"
  | "lineHeight"
  | "fontWeight"
  | "boldFontWeight"
  | "monoFontWeight"
  | "letterSpacing";

/** Only the tokens the visitor has changed; everything else keeps liftkit-core.css's value. */
export type FontClassOverrides = Partial<
  Record<FontClassGroup, Partial<Record<FontClassTokenKey, number>>>
>;

/** One click on a font size stepper: multiply or divide the class's font size by a step of the scale factor. */
export interface FontSizeStep {
  op: "multiply" | "divide";
  step: "whole" | "half" | "quarter" | "eighth";
}

/** The clicks made on each class's font size, in order. Empty or missing means liftkit-core.css's own formula. */
export type FontSizeSteps = Partial<Record<FontClassGroup, FontSizeStep[]>>;

export interface ThemeState {
  masterSeed: string;
  seedColors: ThemeSeedColors;
  toneOverrides: ToneOverrides;
  /** When on, a token has one tone for both modes: editing it sets light and dark together. */
  sameTones: boolean;
  colorMode: ColorMode;
  schemeVariant: SchemeVariant;
  scaleFactor: number;
  fontFamilies: FontFamilies;
  fontAssignments: FontAssignments;
  fontClassOverrides: FontClassOverrides;
  fontSizeSteps: FontSizeSteps;
  /** Id of the preset that was last applied, or null if none / the user edited since. */
  activePresetId: string | null;
}

/** Fully resolved hex values for every token, keyed by CSS var name (without --lk- prefix) */
export interface ResolvedTheme {
  light: Record<string, string>;
  dark: Record<string, string>;
}

/** One part of the theme that can be reset on its own. */
export type ResetSection =
  | { scope: "color" }
  | { scope: "keyColor"; role: keyof ThemeSeedColors }
  | { scope: "typography" }
  | { scope: "fontClass"; group: FontClassGroup }
  | { scope: "fontSize"; group: FontClassGroup }
  | { scope: "scaling" };

export type ThemeAction =
  | { type: "SET_MASTER_SEED"; hex: string }
  | { type: "SET_SEED"; role: keyof ThemeSeedColors; hex: string }
  | { type: "SET_TONE_OVERRIDE"; scheme: Scheme; token: string; tone: number }
  | { type: "SET_SAME_TONES"; value: boolean }
  | { type: "CLEAR_TONE_OVERRIDE"; scheme: Scheme; token: string }
  | { type: "SET_COLOR_MODE"; mode: ColorMode }
  | { type: "SET_SCHEME_VARIANT"; variant: SchemeVariant }
  | { type: "SET_SCALE_FACTOR"; value: number }
  | { type: "SET_FONT_FAMILY_SLOT"; slot: FontSlot; family: string }
  | { type: "SET_FONT_ASSIGNMENT"; group: FontClassGroup; slot: FontSlot }
  | { type: "ADD_FONT_SIZE_STEP"; group: FontClassGroup; stepOp: FontSizeStep }
  | {
      type: "CLEAR_FONT_CLASS_TOKEN";
      group: FontClassGroup;
      token: FontClassTokenKey;
    }
  | {
      type: "SET_FONT_CLASS_TOKEN";
      group: FontClassGroup;
      token: FontClassTokenKey;
      value: number;
    }
  | { type: "APPLY_PRESET"; presetId: string }
  | { type: "RESET" }
  | { type: "RESET_SECTION"; section: ResetSection }
  | { type: "LOAD"; state: ThemeState };
