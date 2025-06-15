import type LkColorWithOnToken from "@/registry/universal/lib/types/lk-color";
import type LkColor from "@/registry/universal/lib/types/lk-color";
import { LkColors } from "@/registry/universal/lib/utils/debugUtils";

const colorsWithOnTokens = [
  "primary",
  "primarycontainer",
  "secondary",
  "secondarycontainer",
  "tertiary",
  "tertiarycontainer",
  "error",
  "errorcontainer",
  "success",
  "successcontainer",
  "warning",
  "warningcontainer",
  "info",
  "infocontainer",
  "background",
  "surface",
  "surfacevariant",
  "surfacecontainerlowest", //todo: make sure component assigns "onsurface" to text when these are present
  "surfacecontainerlow",
  "surfacecontainer",
  "surfacecontainerhigh",
  "surfacecontainerhighest",
  "inversesurface",
  "primaryfixed",
  "secondaryfixed",
  "tertiaryfixed",
];

const colorsWithoutOnTokens = [
  "onprimaryfixed",
  "primaryfixeddim",
  "onprimaryfixedvariant",
  "onsecondaryfixed",
  "secondaryfixeddim",
  "onsecondaryfixedvariant",
  "ontertiaryfixed",
  "tertiaryfixeddim",
  "ontertiaryfixedvariant",
  "surfacedim",
  "surfacebright",
  "outline",
  "outlinevariant",
];

export function getColorsWithoutOnTokens(): LkColor[] {
  return LkColors.filter((color) => !colorsWithOnTokens.includes(color as LkColorWithOnToken));
}

export function getOnToken(colorToken: LkColor) {
  //check if the token has an on-token in the first place

  // if (!colorsWithOnTokens.includes(colorToken as LkColorWithOnToken)) {
  //   throw new Error(`The color token "${colorToken}" does not have a corresponding "on-" token.`);
  // }

  const isAlreadyOnToken = colorToken.startsWith("on") || colorToken.startsWith("inverseon");
  const startsWithOn = colorToken.startsWith("on");
  const endsWithFixed = colorToken.endsWith("fixed");
  const endsWithDim = colorToken.endsWith("dim");
  const endsWithVariant = colorToken.endsWith("variant");

  function getFixedColorComplement(color: LkColor) {
    /** If the color token ends with fixed, see if it sta */
    switch (endsWithFixed) {
      case true:
        switch (startsWithOn) {
          case true:
            return color.slice(2);
          case false:
            return `on${color}`;
        }
      case false: {
        switch (endsWithDim) {
          case true:
            const rootColor = color.slice(0, -3); // remove "dim"
            return `on${rootColor}variant`;
          case false: {
            switch (endsWithVariant) {
              case true:
                const rootColor = color.slice(0, -8); // remove "variant"
                return `on${rootColor}fixed`;
              case false:
                return `on${color}`;
            }
          }
        }
      }
    }
  }

  var tokenToReturn;
  //first, figure out if it's already an "on" token.

  switch (isAlreadyOnToken) {
    case false:
      switch (colorToken) {
        /**First, handle surfacecontainers and their variants */
        case "surfacecontainerlowest":
        case "surfacecontainerlow":
        case "surfacecontainer":
        case "surfacecontainerhigh":
        case "surfacecontainerhighest":
        case "surfacedim":
        case "surfacebright":
          tokenToReturn = `onsurface`;
          break;
        case "inversesurface":
          tokenToReturn = `inverseonsurface`;
          break;
        case "inverseprimary":
          tokenToReturn = "onprimarycontainer";
          break;
        case "shadow":
        case "scrim":
          tokenToReturn = "white";
          break;
        case "primaryfixeddim":
        case "secondaryfixeddim":
        case "tertiaryfixeddim":
        case "onprimaryfixed":
        case "onsecondaryfixed":
        case "ontertiaryfixed":
        case "onprimaryfixedvariant":
        case "onsecondaryfixedvariant":
        case "ontertiaryfixedvariant":
          tokenToReturn = getFixedColorComplement(colorToken);
          break;
        case "outline":
        case "outlinevariant":
          tokenToReturn = `onsurfacevariant`;
          break;
        default:
          tokenToReturn = `on${colorToken}`;
          break;
      }
      break;
    default:
      switch (colorToken) {
        case "inverseonsurface":
          tokenToReturn = `inversesurface`;
          break;
        default:
          /** If it's already an on-token, return the normal token. i.e. if it's "onprimary", return "primary" */
          tokenToReturn = colorToken.slice(2);
      }
  }

  //   const isContainerColor = colorToken.includes("container");

  return tokenToReturn;
}
