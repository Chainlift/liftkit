import type LkColorWithOnToken from "../liftkit/types/lk-color";
import type LkColor from "../liftkit/types/lk-color";

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
    "inversesurface"
];

export function getOnToken(colorToken: LkColor) {

//check if the token has an on-token in the first place
if (!colorsWithOnTokens.includes(colorToken as LkColorWithOnToken)) {
    throw new Error(`The color token "${colorToken}" does not have a corresponding "on-" token.`);
}

let onToken;
let isContainerColor = colorToken.includes('container');

 switch (colorToken) {
    case "surfacecontainerlowest":
    case "surfacecontainerlow":
    case "surfacecontainer":
    case "surfacecontainerhigh":
    case "surfacecontainerhighest":
        onToken = `onsurface`;
        break;
    case "inversesurface":
        onToken = `inverseonsurface`;
        break;
    default:
        onToken = `on${colorToken}`;
        break;
 }

 return onToken;

}