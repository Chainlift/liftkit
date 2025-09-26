import { clsx, type ClassValue } from "clsx";
import { LkColorsWithOnTokens } from "@/registry/universal/lib/utils/debugUtils";

export function propsToDataAttrs(props: Record<string, unknown>, baseAttr: string): Record<string, string> {
  const dataAttrs: Record<string, string> = {};

  Object.entries(props).forEach(([key, value]) => {
    // Only process serializable values
    if (value === undefined || value === null || typeof value === "function" || typeof value === "object") return;

    const kebabKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

    dataAttrs[`data-lk-${baseAttr}-${kebabKey}`] = String(value);
  });

  return dataAttrs;
}

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const lkFontClasses: LkFontClass[] = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "heading",
  "subheading",
  "body",
  "callout",
  "label",
  "caption",
  "capline",
  "display1-bold",
  "display2-bold",
  "title1-bold",
  "title2-bold",
  "title3-bold",
  "heading-bold",
  "subheading-bold",
  "body-bold",
  "callout-bold",
  "label-bold",
  "caption-bold",
  "capline-bold",
  "display1-mono",
  "display2-mono",
  "title1-mono",
  "title2-mono",
  "title3-mono",
  "heading-mono",
  "subheading-mono",
  "body-mono",
  "callout-mono",
  "label-mono",
  "caption-mono",
  "capline-mono",
] as const;

export const colorsWithOnTokens = {
  primary: "bg-primary color-onprimary",
  primarycontainer: "bg-primarycontainer color-onprimarycontainer",
  secondary: "bg-secondary color-onsecondary",
  secondarycontainer: "bg-secondarycontainer color-onsecondarycontainer",
  tertiary: "bg-tertiary color-ontertiary",
  tertiarycontainer: "bg-tertiarycontainer color-ontertiarycontainer",
  error: "bg-error color-onerror",
  errorcontainer: "bg-errorcontainer color-onerrorcontainer",
  success: "bg-success color-onsuccess",
  successcontainer: "bg-successcontainer color-onsuccesscontainer",
  warning: "bg-warning color-onwarning",
  warningcontainer: "bg-warningcontainer color-onwarningcontainer",
  info: "bg-info color-oninfo",
  infocontainer: "bg-infocontainer color-oninfocontainer",
  background: "bg-background color-onbackground",
  surface: "bg-surface color-onsurface",
  surfacevariant: "bg-surfacevariant color-onsurfacevariant",
  surfacecontainerlowest: "bg-surfacecontainerlowest color-onsurfacecontainerlowest",
  surfacecontainerlow: "bg-surfacecontainerlow color-onsurfacecontainerlow",
  surfacecontainer: "bg-surfacecontainer color-onsurfacecontainer",
  surfacecontainerhigh: "bg-surfacecontainerhigh color-onsurfacecontainerhigh",
  surfacecontainerhighest: "bg-surfacecontainerhighest color-onsurfacecontainerhighest",
  inversesurface: "bg-inversesurface color-oninversesurface",
  primaryfixed: "bg-primaryfixed color-onprimaryfixed",
  secondaryfixed: "bg-secondaryfixed color-onsecondaryfixed",
  tertiaryfixed: "bg-tertiaryfixed color-ontertiaryfixed",
};

function arrayToObject(arr: string[]) {
  return Object.fromEntries(arr.map((item) => [item, item]));
}

export const LK_FONT_CLASSES = Object.fromEntries(lkFontClasses.map((f) => [f, f])) as Record<
  (typeof lkFontClasses)[number],
  string
>;
