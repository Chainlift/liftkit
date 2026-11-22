import type { FontAssignments, FontFamilies, ThemeState } from "./types";
import { DEFAULT_FONT_ASSIGNMENTS, DEFAULT_FONT_FAMILIES, DEFAULT_THEME_STATE } from "./defaults";
import { PICKED_GLOBAL, RANDOM_THEME_KEY, THEME_STORAGE_KEY } from "./theme-boot";


interface PersistedTheme {
  version: 1;
  masterSeed: string;
  seedColors: ThemeState["seedColors"];
  toneOverrides: ThemeState["toneOverrides"];
  colorMode: ThemeState["colorMode"];
  schemeVariant: ThemeState["schemeVariant"];
  scaleFactor?: number;
  fontFamilies?: FontFamilies;
  fontAssignments?: FontAssignments;
  activePresetId?: string | null;
}

export function saveTheme(state: ThemeState): void {
  try {
    const data: PersistedTheme = {
      version: 1,
      masterSeed: state.masterSeed,
      seedColors: state.seedColors,
      toneOverrides: state.toneOverrides,
      colorMode: state.colorMode,
      schemeVariant: state.schemeVariant,
      scaleFactor: state.scaleFactor,
      fontFamilies: state.fontFamilies,
      fontAssignments: state.fontAssignments,
      activePresetId: state.activePresetId,
    };
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage may be unavailable (SSR, private browsing quota)
  }
}

/** Older saves kept one set of overrides for both schemes; those are applied to both. */
function loadToneOverrides(saved: unknown): ThemeState["toneOverrides"] {
  if (!saved || typeof saved !== "object") return { light: {}, dark: {} };
  const record = saved as Record<string, unknown>;
  if (typeof record.light === "object" || typeof record.dark === "object") {
    return {
      light: (record.light as Record<string, number>) ?? {},
      dark: (record.dark as Record<string, number>) ?? {},
    };
  }
  return { light: { ...(saved as Record<string, number>) }, dark: { ...(saved as Record<string, number>) } };
}

function loadFontFamilies(saved: unknown): FontFamilies {
  if (!Array.isArray(saved)) return DEFAULT_FONT_FAMILIES;
  const [a, b, c] = saved as unknown[];
  return [
    typeof a === "string" ? a : "",
    typeof b === "string" ? b : "",
    typeof c === "string" ? c : "",
  ];
}

function loadFontAssignments(saved: unknown): FontAssignments {
  if (!saved || typeof saved !== "object") return DEFAULT_FONT_ASSIGNMENTS;
  const record = saved as Record<string, unknown>;
  const out: FontAssignments = { ...DEFAULT_FONT_ASSIGNMENTS };
  for (const key of Object.keys(out) as (keyof FontAssignments)[]) {
    const value = record[key];
    if (value === 1 || value === 2 || value === 3) out[key] = value;
  }
  return out;
}

export function loadTheme(): Partial<ThemeState> | null {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedTheme;
    if (parsed.version !== 1) return null;
    return {
      masterSeed: parsed.masterSeed ?? DEFAULT_THEME_STATE.masterSeed,
      seedColors: { ...DEFAULT_THEME_STATE.seedColors, ...parsed.seedColors },
      toneOverrides: loadToneOverrides(parsed.toneOverrides),
      colorMode: parsed.colorMode ?? "system",
      schemeVariant: parsed.schemeVariant ?? "tonalSpot",
      scaleFactor: parsed.scaleFactor ?? DEFAULT_THEME_STATE.scaleFactor,
      fontFamilies: loadFontFamilies(parsed.fontFamilies),
      fontAssignments: loadFontAssignments(parsed.fontAssignments),
      activePresetId: parsed.activePresetId ?? null,
    };
  } catch {
    return null;
  }
}

export function clearTheme(): void {
  try {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } catch {
    // ignore
  }
}

/** The preset the boot script picked on this page load for a visitor with nothing saved, if any. */
export function loadPickedPresetId(): string | null {
  const id = (window as unknown as Record<string, unknown>)[PICKED_GLOBAL];
  return typeof id === "string" ? id : null;
}

/** Whether the nav bar's random-theme switch is on. It is on unless the visitor turned it off. */
export function loadRandomThemeEnabled(): boolean {
  try {
    return localStorage.getItem(RANDOM_THEME_KEY) !== "off";
  } catch {
    return true;
  }
}

export function saveRandomThemeEnabled(on: boolean): void {
  try {
    if (on) localStorage.removeItem(RANDOM_THEME_KEY);
    else localStorage.setItem(RANDOM_THEME_KEY, "off");
  } catch {
    // localStorage may be unavailable (private browsing quota)
  }
}
