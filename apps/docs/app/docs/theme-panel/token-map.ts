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
  /** The token's name in normal grammar, e.g. "On Primary Fixed Variant". */
  displayName: string;
  /** A short description of the token's role. */
  description: string;
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
      primary:               { cssVar: "primary",               displayName: "Primary",                  description: "Main primary color, for prominent components",                     defaultTone: { light: 40, dark: 80 } },
      onPrimary:             { cssVar: "onprimary",             displayName: "On Primary",               description: "Foreground color when background is Primary",                      defaultTone: { light: 100, dark: 20 } },
      primaryContainer:      { cssVar: "primarycontainer",      displayName: "Primary Container",        description: "Tinted primary background for less prominent components",          defaultTone: { light: 90, dark: 30 } },
      onPrimaryContainer:    { cssVar: "onprimarycontainer",    displayName: "On Primary Container",     description: "Foreground color when background is Primary Container",            defaultTone: { light: 10, dark: 90 } },
      primaryFixed:          { cssVar: "primaryfixed",          displayName: "Primary Fixed",            description: "Primary that stays the same in light and dark mode",               defaultTone: { light: 90, dark: 90 } },
      onPrimaryFixed:        { cssVar: "onprimaryfixed",        displayName: "On Primary Fixed",         description: "Foreground color when background is Primary Fixed",                defaultTone: { light: 10, dark: 10 } },
      primaryFixedDim:       { cssVar: "primaryfixeddim",       displayName: "Primary Fixed Dim",        description: "A dimmer primary fixed shade",                                     defaultTone: { light: 80, dark: 80 } },
      onPrimaryFixedVariant: { cssVar: "onprimaryfixedvariant", displayName: "On Primary Fixed Variant", description: "Lower-emphasis foreground color when background is Primary Fixed", defaultTone: { light: 30, dark: 30 } },
      inversePrimary:        { cssVar: "inverseprimary",        displayName: "Inverse Primary",          description: "Primary for use on inverse surfaces",                              defaultTone: { light: 80, dark: 40 } },
    },
  },

  // ─── SECONDARY ────────────────────────────────────────
  secondary: {
    seedRole: "secondary",
    tokens: {
      secondary:               { cssVar: "secondary",               displayName: "Secondary",                  description: "Main secondary color, for prominent components",                     defaultTone: { light: 40, dark: 80 } },
      onSecondary:             { cssVar: "onsecondary",             displayName: "On Secondary",               description: "Foreground color when background is Secondary",                      defaultTone: { light: 100, dark: 20 } },
      secondaryContainer:      { cssVar: "secondarycontainer",      displayName: "Secondary Container",        description: "Tinted secondary background for less prominent components",          defaultTone: { light: 90, dark: 30 } },
      onSecondaryContainer:    { cssVar: "onsecondarycontainer",    displayName: "On Secondary Container",     description: "Foreground color when background is Secondary Container",            defaultTone: { light: 10, dark: 90 } },
      secondaryFixed:          { cssVar: "secondaryfixed",          displayName: "Secondary Fixed",            description: "Secondary that stays the same in light and dark mode",               defaultTone: { light: 90, dark: 90 } },
      onSecondaryFixed:        { cssVar: "onsecondaryfixed",        displayName: "On Secondary Fixed",         description: "Foreground color when background is Secondary Fixed",                defaultTone: { light: 10, dark: 10 } },
      secondaryFixedDim:       { cssVar: "secondaryfixeddim",       displayName: "Secondary Fixed Dim",        description: "A dimmer secondary fixed shade",                                     defaultTone: { light: 80, dark: 80 } },
      onSecondaryFixedVariant: { cssVar: "onsecondaryfixedvariant", displayName: "On Secondary Fixed Variant", description: "Lower-emphasis foreground color when background is Secondary Fixed", defaultTone: { light: 30, dark: 30 } },
    },
  },

  // ─── TERTIARY ─────────────────────────────────────────
  tertiary: {
    seedRole: "tertiary",
    tokens: {
      tertiary:               { cssVar: "tertiary",               displayName: "Tertiary",                  description: "Main tertiary color, for prominent components",                     defaultTone: { light: 40, dark: 80 } },
      onTertiary:             { cssVar: "ontertiary",             displayName: "On Tertiary",               description: "Foreground color when background is Tertiary",                      defaultTone: { light: 100, dark: 20 } },
      tertiaryContainer:      { cssVar: "tertiarycontainer",      displayName: "Tertiary Container",        description: "Tinted tertiary background for less prominent components",          defaultTone: { light: 90, dark: 30 } },
      onTertiaryContainer:    { cssVar: "ontertiarycontainer",    displayName: "On Tertiary Container",     description: "Foreground color when background is Tertiary Container",            defaultTone: { light: 10, dark: 90 } },
      tertiaryFixed:          { cssVar: "tertiaryfixed",          displayName: "Tertiary Fixed",            description: "Tertiary that stays the same in light and dark mode",               defaultTone: { light: 90, dark: 90 } },
      onTertiaryFixed:        { cssVar: "ontertiaryfixed",        displayName: "On Tertiary Fixed",         description: "Foreground color when background is Tertiary Fixed",                defaultTone: { light: 10, dark: 10 } },
      tertiaryFixedDim:       { cssVar: "tertiaryfixeddim",       displayName: "Tertiary Fixed Dim",        description: "A dimmer tertiary fixed shade",                                     defaultTone: { light: 80, dark: 80 } },
      onTertiaryFixedVariant: { cssVar: "ontertiaryfixedvariant", displayName: "On Tertiary Fixed Variant", description: "Lower-emphasis foreground color when background is Tertiary Fixed", defaultTone: { light: 30, dark: 30 } },
    },
  },

  // ─── ERROR ────────────────────────────────────────────
  error: {
    seedRole: "error",
    tokens: {
      error:            { cssVar: "error",            displayName: "Error",              description: "Main error color, for error states and messages",       defaultTone: { light: 40, dark: 80 } },
      onError:          { cssVar: "onerror",          displayName: "On Error",           description: "Foreground color when background is Error",             defaultTone: { light: 100, dark: 20 } },
      errorContainer:   { cssVar: "errorcontainer",   displayName: "Error Container",    description: "Tinted error background for less prominent components", defaultTone: { light: 90, dark: 30 } },
      onErrorContainer: { cssVar: "onerrorcontainer", displayName: "On Error Container", description: "Foreground color when background is Error Container",   defaultTone: { light: 10, dark: 90 } },
    },
  },

  // ─── NEUTRAL (drives surface, background, scrim, shadow) ─
  neutral: {
    seedRole: "neutral",
    tokens: {
      background:              { cssVar: "background",              displayName: "Background",                description: "Page background",                                             defaultTone: { light: 100, dark: 4 } },
      onBackground:            { cssVar: "onbackground",            displayName: "On Background",             description: "Foreground color when background is Background",              defaultTone: { light: 10, dark: 90 } },
      surface:                 { cssVar: "surface",                 displayName: "Surface",                   description: "Default surface for components",                              defaultTone: { light: 98, dark: 6 } },
      onSurface:               { cssVar: "onsurface",               displayName: "On Surface",                description: "Foreground color when background is Surface",                 defaultTone: { light: 10, dark: 90 } },
      surfaceDim:              { cssVar: "surfacedim",              displayName: "Surface Dim",               description: "A dimmer surface for recessed areas",                         defaultTone: { light: 87, dark: 6 } },
      surfaceBright:           { cssVar: "surfacebright",           displayName: "Surface Bright",            description: "A brighter surface for raised areas and inputs",              defaultTone: { light: 100, dark: 24 } },
      surfaceContainerLowest:  { cssVar: "surfacecontainerlowest",  displayName: "Surface Container Lowest",  description: "Lowest-contrast surface container",                           defaultTone: { light: 100, dark: 4 } },
      surfaceContainerLow:     { cssVar: "surfacecontainerlow",     displayName: "Surface Container Low",     description: "Low-contrast surface container",                              defaultTone: { light: 96, dark: 10 } },
      surfaceContainer:        { cssVar: "surfacecontainer",        displayName: "Surface Container",         description: "Mid-contrast surface container",                              defaultTone: { light: 94, dark: 12 } },
      surfaceContainerHigh:    { cssVar: "surfacecontainerhigh",    displayName: "Surface Container High",    description: "High-contrast surface container",                             defaultTone: { light: 92, dark: 17 } },
      surfaceContainerHighest: { cssVar: "surfacecontainerhighest", displayName: "Surface Container Highest", description: "Highest-contrast surface container",                          defaultTone: { light: 90, dark: 22 } },
      inverseSurface:          { cssVar: "inversesurface",          displayName: "Inverse Surface",           description: "Surface that contrasts with the current mode, for toasts",    defaultTone: { light: 20, dark: 90 } },
      inverseOnSurface:        { cssVar: "inverseonsurface",        displayName: "Inverse On Surface",        description: "Foreground color when background is Inverse Surface",         defaultTone: { light: 95, dark: 20 } },
      onSurfaceLow:            { cssVar: "onsurfacelow",            displayName: "On Surface Low",            description: "Lower-emphasis foreground color when background is Surface",  defaultTone: { light: 36, dark: 68 } },
      onSurfaceLowest:         { cssVar: "onsurfacelowest",         displayName: "On Surface Lowest",         description: "Lowest-emphasis foreground color when background is Surface", defaultTone: { light: 46, dark: 51 } },
      scrim:                   { cssVar: "scrim",                   displayName: "Scrim",                     description: "Overlay behind modals and dialogs",                           defaultTone: { light: 0, dark: 0 } },
      shadow:                  { cssVar: "shadow",                  displayName: "Shadow",                    description: "Color of shadows",                                            defaultTone: { light: 0, dark: 0 } },
    },
  },

  // ─── NEUTRAL VARIANT (drives outline, surfaceVariant) ─────
  neutralVariant: {
    seedRole: "neutralVariant",
    tokens: {
      surfaceVariant:   { cssVar: "surfacevariant",   displayName: "Surface Variant",    description: "Tonal fill for chips, tracks and other controls",     defaultTone: { light: 90, dark: 30 } },
      onSurfaceVariant: { cssVar: "onsurfacevariant", displayName: "On Surface Variant", description: "Foreground color when background is Surface Variant", defaultTone: { light: 30, dark: 80 } },
      outline:          { cssVar: "outline",          displayName: "Outline",            description: "Borders and dividers",                                defaultTone: { light: 50, dark: 60 } },
      outlineVariant:   { cssVar: "outlinevariant",   displayName: "Outline Variant",    description: "Subtle borders and dividers",                         defaultTone: { light: 80, dark: 30 } },
    },
  },

  // ─── SUCCESS (custom role) ────────────────────────────
  success: {
    seedRole: "success",
    tokens: {
      success:            { cssVar: "success",            displayName: "Success",              description: "Main success color, for success states and messages",     defaultTone: { light: 40, dark: 80 } },
      onSuccess:          { cssVar: "onsuccess",          displayName: "On Success",           description: "Foreground color when background is Success",             defaultTone: { light: 100, dark: 20 } },
      successContainer:   { cssVar: "successcontainer",   displayName: "Success Container",    description: "Tinted success background for less prominent components", defaultTone: { light: 90, dark: 30 } },
      onSuccessContainer: { cssVar: "onsuccesscontainer", displayName: "On Success Container", description: "Foreground color when background is Success Container",   defaultTone: { light: 10, dark: 90 } },
    },
  },

  // ─── WARNING (custom role) ────────────────────────────
  warning: {
    seedRole: "warning",
    tokens: {
      warning:            { cssVar: "warning",            displayName: "Warning",              description: "Main warning color, for warning states and messages",     defaultTone: { light: 40, dark: 80 } },
      onWarning:          { cssVar: "onwarning",          displayName: "On Warning",           description: "Foreground color when background is Warning",             defaultTone: { light: 100, dark: 20 } },
      warningContainer:   { cssVar: "warningcontainer",   displayName: "Warning Container",    description: "Tinted warning background for less prominent components", defaultTone: { light: 90, dark: 30 } },
      onWarningContainer: { cssVar: "onwarningcontainer", displayName: "On Warning Container", description: "Foreground color when background is Warning Container",   defaultTone: { light: 10, dark: 90 } },
    },
  },

  // ─── INFO (custom role) ───────────────────────────────
  info: {
    seedRole: "info",
    tokens: {
      info:            { cssVar: "info",            displayName: "Info",              description: "Main info color, for info states and messages",        defaultTone: { light: 40, dark: 80 } },
      onInfo:          { cssVar: "oninfo",          displayName: "On Info",           description: "Foreground color when background is Info",             defaultTone: { light: 100, dark: 20 } },
      infoContainer:   { cssVar: "infocontainer",   displayName: "Info Container",    description: "Tinted info background for less prominent components", defaultTone: { light: 90, dark: 30 } },
      onInfoContainer: { cssVar: "oninfocontainer", displayName: "On Info Container", description: "Foreground color when background is Info Container",   defaultTone: { light: 10, dark: 90 } },
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
