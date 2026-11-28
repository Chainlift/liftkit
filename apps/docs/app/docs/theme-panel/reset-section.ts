import { DEFAULT_THEME_STATE } from "./defaults";
import { TOKEN_MAP } from "./token-map";
import type {
  FontClassGroup,
  ResetSection,
  ThemeSeedColors,
  ThemeState,
} from "./types";

/** `record` without `key`, leaving it untouched when `key` isn't there. */
function without<T>(
  record: Partial<Record<string, T>>,
  key: string,
): Partial<Record<string, T>> {
  const { [key]: _removed, ...rest } = record;
  return rest;
}

/** The state after resetting one part of the theme to its defaults. Everything outside that part is left alone. */
export function resetSection(
  state: ThemeState,
  section: ResetSection,
): ThemeState {
  const defaults = DEFAULT_THEME_STATE;
  switch (section.scope) {
    case "color":
      // The light/dark mode isn't part of it
      return {
        ...state,
        masterSeed: defaults.masterSeed,
        schemeVariant: defaults.schemeVariant,
        seedColors: defaults.seedColors,
        toneOverrides: defaults.toneOverrides,
        sameTones: defaults.sameTones,
        activePresetId: null,
      };
    case "keyColor": {
      const role: keyof ThemeSeedColors = section.role;
      const tokens = Object.keys(TOKEN_MAP[role]?.tokens ?? {});
      const clear = (overrides: Record<string, number>) =>
        tokens.reduce<Record<string, number>>(
          (acc, token) => without(acc, token) as Record<string, number>,
          overrides,
        );
      return {
        ...state,
        seedColors: { ...state.seedColors, [role]: defaults.seedColors[role] },
        toneOverrides: {
          light: clear(state.toneOverrides.light),
          dark: clear(state.toneOverrides.dark),
        },
        sameTones: defaults.sameTones,
      };
    }
    case "typography":
      return {
        ...state,
        fontFamilies: defaults.fontFamilies,
        fontAssignments: defaults.fontAssignments,
        fontClassOverrides: defaults.fontClassOverrides,
        fontSizeSteps: defaults.fontSizeSteps,
      };
    case "fontClass": {
      const group: FontClassGroup = section.group;
      return {
        ...state,
        fontAssignments: {
          ...state.fontAssignments,
          [group]: defaults.fontAssignments[group],
        },
        fontClassOverrides: without(state.fontClassOverrides, group),
        fontSizeSteps: without(state.fontSizeSteps, group),
      };
    }
    case "fontSize":
      return {
        ...state,
        fontSizeSteps: without(state.fontSizeSteps, section.group),
      };
    case "scaling":
      return { ...state, scaleFactor: defaults.scaleFactor };
  }
}
