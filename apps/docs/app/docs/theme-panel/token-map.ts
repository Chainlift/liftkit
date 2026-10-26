/**
 * Static mapping between Material Color Utilities palettes and LiftKit CSS custom properties.
 *
 * Each token group is driven by a seed color role. Within a group, each token
 * has a CSS variable name (without the `--lk-` prefix) and default tones for
 * light and dark schemes (matching standard M3 assignments).
 *
 * The "tone" is a 0-100 value in the HCT color space where 0 = black, 100 = white.
 */

export interface TokenDef {
  cssVar: string;
  defaultTone: { light: number; dark: number };
}

export interface TokenGroup {
  seedRole: string;
  tokens: Record<string, TokenDef>;
}

export const TOKEN_MAP: Record<string, TokenGroup> = {
  // ─── PRIMARY ──────────────────────────────────────────
  primary: {
    seedRole: "primary",
    tokens: {
      primary:               { cssVar: "primary",               defaultTone: { light: 40, dark: 80 } },
      onPrimary:             { cssVar: "onprimary",             defaultTone: { light: 100, dark: 20 } },
      primaryContainer:      { cssVar: "primarycontainer",      defaultTone: { light: 90, dark: 30 } },
      onPrimaryContainer:    { cssVar: "onprimarycontainer",    defaultTone: { light: 10, dark: 90 } },
      primaryFixed:          { cssVar: "primaryfixed",          defaultTone: { light: 90, dark: 90 } },
      onPrimaryFixed:        { cssVar: "onprimaryfixed",        defaultTone: { light: 10, dark: 10 } },
      primaryFixedDim:       { cssVar: "primaryfixeddim",       defaultTone: { light: 80, dark: 80 } },
      onPrimaryFixedVariant: { cssVar: "onprimaryfixedvariant", defaultTone: { light: 30, dark: 30 } },
      inversePrimary:        { cssVar: "inverseprimary",        defaultTone: { light: 80, dark: 40 } },
    },
  },

  // ─── SECONDARY ────────────────────────────────────────
  secondary: {
    seedRole: "secondary",
    tokens: {
      secondary:               { cssVar: "secondary",               defaultTone: { light: 40, dark: 80 } },
      onSecondary:             { cssVar: "onsecondary",             defaultTone: { light: 100, dark: 20 } },
      secondaryContainer:      { cssVar: "secondarycontainer",      defaultTone: { light: 90, dark: 30 } },
      onSecondaryContainer:    { cssVar: "onsecondarycontainer",    defaultTone: { light: 10, dark: 90 } },
      secondaryFixed:          { cssVar: "secondaryfixed",          defaultTone: { light: 90, dark: 90 } },
      onSecondaryFixed:        { cssVar: "onsecondaryfixed",        defaultTone: { light: 10, dark: 10 } },
      secondaryFixedDim:       { cssVar: "secondaryfixeddim",       defaultTone: { light: 80, dark: 80 } },
      onSecondaryFixedVariant: { cssVar: "onsecondaryfixedvariant", defaultTone: { light: 30, dark: 30 } },
    },
  },

  // ─── TERTIARY ─────────────────────────────────────────
  tertiary: {
    seedRole: "tertiary",
    tokens: {
      tertiary:               { cssVar: "tertiary",               defaultTone: { light: 40, dark: 80 } },
      onTertiary:             { cssVar: "ontertiary",             defaultTone: { light: 100, dark: 20 } },
      tertiaryContainer:      { cssVar: "tertiarycontainer",      defaultTone: { light: 90, dark: 30 } },
      onTertiaryContainer:    { cssVar: "ontertiarycontainer",    defaultTone: { light: 10, dark: 90 } },
      tertiaryFixed:          { cssVar: "tertiaryfixed",          defaultTone: { light: 90, dark: 90 } },
      onTertiaryFixed:        { cssVar: "ontertiaryfixed",        defaultTone: { light: 10, dark: 10 } },
      tertiaryFixedDim:       { cssVar: "tertiaryfixeddim",       defaultTone: { light: 80, dark: 80 } },
      onTertiaryFixedVariant: { cssVar: "ontertiaryfixedvariant", defaultTone: { light: 30, dark: 30 } },
    },
  },

  // ─── ERROR ────────────────────────────────────────────
  error: {
    seedRole: "error",
    tokens: {
      error:              { cssVar: "error",              defaultTone: { light: 40, dark: 80 } },
      onError:            { cssVar: "onerror",            defaultTone: { light: 100, dark: 20 } },
      errorContainer:     { cssVar: "errorcontainer",     defaultTone: { light: 90, dark: 30 } },
      onErrorContainer:   { cssVar: "onerrorcontainer",   defaultTone: { light: 10, dark: 90 } },
    },
  },

  // ─── NEUTRAL (drives surface, background, scrim, shadow) ─
  neutral: {
    seedRole: "neutral",
    tokens: {
      background:                { cssVar: "background",                defaultTone: { light: 98, dark: 6 } },
      onBackground:              { cssVar: "onbackground",              defaultTone: { light: 10, dark: 90 } },
      surface:                   { cssVar: "surface",                   defaultTone: { light: 98, dark: 6 } },
      onSurface:                 { cssVar: "onsurface",                 defaultTone: { light: 10, dark: 90 } },
      surfaceDim:                { cssVar: "surfacedim",                defaultTone: { light: 87, dark: 6 } },
      surfaceBright:             { cssVar: "surfacebright",             defaultTone: { light: 98, dark: 24 } },
      surfaceContainerLowest:    { cssVar: "surfacecontainerlowest",    defaultTone: { light: 100, dark: 4 } },
      surfaceContainerLow:       { cssVar: "surfacecontainerlow",       defaultTone: { light: 96, dark: 10 } },
      surfaceContainer:          { cssVar: "surfacecontainer",          defaultTone: { light: 94, dark: 12 } },
      surfaceContainerHigh:      { cssVar: "surfacecontainerhigh",      defaultTone: { light: 92, dark: 17 } },
      surfaceContainerHighest:   { cssVar: "surfacecontainerhighest",   defaultTone: { light: 90, dark: 22 } },
      inverseSurface:            { cssVar: "inversesurface",            defaultTone: { light: 20, dark: 90 } },
      inverseOnSurface:          { cssVar: "inverseonsurface",          defaultTone: { light: 95, dark: 20 } },
      onSurfaceLow:              { cssVar: "onsurfacelow",              defaultTone: { light: 36, dark: 68 } },
      onSurfaceLowest:           { cssVar: "onsurfacelowest",           defaultTone: { light: 46, dark: 51 } },
      scrim:                     { cssVar: "scrim",                     defaultTone: { light: 0, dark: 0 } },
      shadow:                    { cssVar: "shadow",                    defaultTone: { light: 0, dark: 0 } },
    },
  },

  // ─── NEUTRAL VARIANT (drives outline, surfaceVariant) ─────
  neutralVariant: {
    seedRole: "neutralVariant",
    tokens: {
      surfaceVariant:      { cssVar: "surfacevariant",      defaultTone: { light: 90, dark: 30 } },
      onSurfaceVariant:    { cssVar: "onsurfacevariant",    defaultTone: { light: 30, dark: 80 } },
      outline:             { cssVar: "outline",             defaultTone: { light: 50, dark: 60 } },
      outlineVariant:      { cssVar: "outlinevariant",      defaultTone: { light: 80, dark: 30 } },
    },
  },

  // ─── SUCCESS (custom role) ────────────────────────────
  success: {
    seedRole: "success",
    tokens: {
      success:             { cssVar: "success",             defaultTone: { light: 40, dark: 80 } },
      onSuccess:           { cssVar: "onsuccess",           defaultTone: { light: 100, dark: 20 } },
      successContainer:    { cssVar: "successcontainer",    defaultTone: { light: 90, dark: 30 } },
      onSuccessContainer:  { cssVar: "onsuccesscontainer",  defaultTone: { light: 10, dark: 90 } },
    },
  },

  // ─── WARNING (custom role) ────────────────────────────
  warning: {
    seedRole: "warning",
    tokens: {
      warning:             { cssVar: "warning",             defaultTone: { light: 40, dark: 80 } },
      onWarning:           { cssVar: "onwarning",           defaultTone: { light: 100, dark: 20 } },
      warningContainer:    { cssVar: "warningcontainer",    defaultTone: { light: 90, dark: 30 } },
      onWarningContainer:  { cssVar: "onwarningcontainer",  defaultTone: { light: 10, dark: 90 } },
    },
  },

  // ─── INFO (custom role) ───────────────────────────────
  info: {
    seedRole: "info",
    tokens: {
      info:             { cssVar: "info",             defaultTone: { light: 40, dark: 80 } },
      onInfo:           { cssVar: "oninfo",           defaultTone: { light: 100, dark: 20 } },
      infoContainer:    { cssVar: "infocontainer",    defaultTone: { light: 90, dark: 30 } },
      onInfoContainer:  { cssVar: "oninfocontainer",  defaultTone: { light: 10, dark: 90 } },
    },
  },
} as const;

/** Flat list of all CSS var names (without --lk- prefix) for iteration */
export const ALL_CSS_VARS: string[] = Object.values(TOKEN_MAP).flatMap((group) =>
  Object.values(group.tokens).map((t) => t.cssVar)
);

/** Look up which group and token def a cssVar belongs to */
export function findTokenByCssVar(cssVar: string): { group: string; tokenName: string; def: TokenDef } | null {
  for (const [groupName, group] of Object.entries(TOKEN_MAP)) {
    for (const [tokenName, def] of Object.entries(group.tokens)) {
      if (def.cssVar === cssVar) {
        return { group: groupName, tokenName, def };
      }
    }
  }
  return null;
}
