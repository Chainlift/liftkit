import type { ThemeState } from "./types";
import { DEFAULT_THEME_STATE } from "./defaults";

const STORAGE_KEY = "lk-theme-v1";

interface PersistedTheme {
  version: 1;
  masterSeed: string;
  seedColors: ThemeState["seedColors"];
  toneOverrides: ThemeState["toneOverrides"];
  colorMode: ThemeState["colorMode"];
  schemeVariant: ThemeState["schemeVariant"];
  scaleFactor?: number;
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
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
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

export function loadTheme(): Partial<ThemeState> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
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
    };
  } catch {
    return null;
  }
}

export function clearTheme(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
