export {};

declare global {
  /**
   * Represents all valid LiftKit color tokens.
   */
  type LkColor =
    | "primary"
    | "onprimary"
    | "primarycontainer"
    | "onprimarycontainer"
    | "secondary"
    | "onsecondary"
    | "secondarycontainer"
    | "onsecondarycontainer"
    | "tertiary"
    | "ontertiary"
    | "tertiarycontainer"
    | "ontertiarycontainer"
    | "error"
    | "onerror"
    | "errorcontainer"
    | "onerrorcontainer"
    | "background"
    | "onbackground"
    | "surface"
    | "onsurface"
    | "onsurfacelow"
    | "onsurfacelowest"
    | "surfacevariant"
    | "onsurfacevariant"
    | "shadow"
    | "inversesurface"
    | "scrim"
    | "inverseonsurface"
    | "inverseprimary"
    | "success"
    | "onsuccess"
    | "successcontainer"
    | "onsuccesscontainer"
    | "warning"
    | "onwarning"
    | "warningcontainer"
    | "onwarningcontainer"
    | "info"
    | "oninfo"
    | "infocontainer"
    | "oninfocontainer"
    | "primaryfixed"
    | "onprimaryfixed"
    | "primaryfixeddim"
    | "onprimaryfixedvariant"
    | "secondaryfixed"
    | "onsecondaryfixed"
    | "secondaryfixeddim"
    | "onsecondaryfixedvariant"
    | "tertiaryfixed"
    | "ontertiaryfixed"
    | "tertiaryfixeddim"
    | "ontertiaryfixedvariant"
    | "surfacedim"
    | "surfacebright"
    | "surfacecontainerlowest"
    | "surfacecontainerlow"
    | "surfacecontainer"
    | "surfacecontainerhigh"
    | "surfacecontainerhighest"
    | "outline"
    | "outlinevariant"
    | "transparent";

  /**
   * Represents a subset of LiftKit color tokens that have explicitly defined "on-" swatches to match them.
   * For example, it includes "lk-primary", because "lk-onprimary" exists.
   * It also includes "lk-primarycontainer", because "lk-onprimarycontainer" exists.
   * It does not include "lk-outline," however, because "lk-onoutline" does not exist.
   * The one exception to this rule is the 'surfacecontainer' tokens, which pair with 'lk-onsurface' as their on-token.
   */
  // TODO: Missing some types casing issues
  type LkColorWithOnToken =
    | "primary"
    | "primarycontainer"
    | "secondary"
    | "secondarycontainer"
    | "tertiary"
    | "tertiarycontainer"
    | "error"
    | "errorcontainer"
    | "success"
    | "successcontainer"
    | "warning"
    | "warningcontainer"
    | "info"
    | "infocontainer"
    | "background"
    | "surface"
    | "surfacevariant"
    | "surfacecontainerlowest" //todo: make sure component assigns "onsurface" to text when these are present
    | "surfacecontainerlow"
    | "surfacecontainer"
    | "surfacecontainerhigh"
    | "surfacecontainerhighest"
    | "inversesurface"
    | "transparent"
    | "surfacebright"
    | "surfacedim";

  type LkOnColor =
    | "onprimary"
    | "onprimarycontainer"
    | "onsecondary"
    | "onsecondarycontainer"
    | "ontertiary"
    | "ontertiarycontainer"
    | "onerror"
    | "onerrorcontainer"
    | "onsuccess"
    | "onsuccesscontainer"
    | "onwarning"
    | "onwarningcontainer"
    | "oninfo"
    | "oninfocontainer"
    | "onbackground"
    | "onsurface"
    | "onsurfacevariant"
    | "inverseonsurface";
}

export const LkColorSchemeClassMap = {
  primary: "lk-colorgroup--primary",
  primarycontainer: "lk-colorgroup--primarycontainer",
  secondary: "lk-colorgroup--secondary",
  secondarycontainer: "lk-colorgroup--secondarycontainer",
  tertiary: "lk-colorgroup--tertiary",
  tertiarycontainer: "lk-colorgroup--tertiarycontainer",
  error: "lk-colorgroup--error",
  errorcontainer: "lk-colorgroup--errorcontainer",
  success: "lk-colorgroup--success",
  successcontainer: "lk-colorgroup--successcontainer",
  warning: "lk-colorgroup--warning",
  warningcontainer: "lk-colorgroup--warningcontainer",
  info: "lk-colorgroup--info",
  infocontainer: "lk-colorgroup--infocontainer",
  background: "lk-colorgroup--background",
  surface: "lk-colorgroup--surface",
  surfacevariant: "lk-colorgroup--surfacevariant",
  surfacecontainerlowest: "lk-colorgroup--surfacecontainerlowest",
  surfacecontainerlow: "lk-colorgroup--surfacecontainerlow",
  surfacecontainer: "lk-colorgroup--surfacecontainer",
  surfacecontainerhigh: "lk-colorgroup--surfacecontainerhigh",
  surfacecontainerhighest: "lk-colorgroup--surfacecontainerhighest",
  inversesurface: "lk-colorgroup--inversesurface",
  primaryfixed: "lk-colorgroup--primaryfixed",
  secondaryfixed: "lk-colorgroup--secondaryfixed",
  tertiaryfixed: "lk-colorgroup--tertiaryfixed",
} as const;

export type ColorScheme = keyof typeof COLOR_SCHEME_CLASSES;
