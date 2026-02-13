import type * as React from "react";
import { Button } from "@/liftkit/ui/button";
// import other components you want to preview

export type Control =
  | { kind: "boolean"; label?: string; default?: boolean }
  | { kind: "text"; label?: string; default?: string; placeholder?: string }
  | { kind: "select"; label?: string; default?: string; options: { label: string; value: string }[] }
  | { kind: "number"; label?: string; default?: number; min?: number; max?: number; step?: number }
  | { kind: "color"; label?: string; default?: string } // if you want to wire to CSS vars, etc.
  | { kind: "slot"; label?: string; default?: string }; // convenience for children

export type ComponentEntry = {
  title: string;
  // Component is a React component type; we keep props loosely typed in docs code
  Component: React.ComponentType<any>;
  // "knobs" defines a subset of props you want to expose
  knobs: Record<string, Control>;
  // base props always applied (can include className, etc.)
  baseProps?: Record<string, unknown>;
  // optional: transform the knobs into final props (e.g. map “label” → children)
  mapKnobsToProps?: (knobs: Record<string, unknown>) => Record<string, unknown>;
};

export const componentManifest = {
  button: {
    title: "Button",
    Component: Button,
    knobs: {
      children: { kind: "slot", label: "Label", default: "Button" },
      variant: {
        kind: "select",
        label: "Variant",
        default: "fill",
        options: [
          { label: "Fill", value: "fill" },
          { label: "Outline", value: "outline" },
          { label: "Text", value: "text" },
        ],
      },
      color: {
        kind: "select",
        label: "Color",
        default: "primary",
        options: [
        { label: "Primary", value: "primary" },
        { label: "Primary Container", value: "primarycontainer" },
        { label: "Secondary", value: "secondary" },
        { label: "Secondary Container", value: "secondarycontainer" },
        { label: "Tertiary", value: "tertiary" },
        { label: "Tertiary Container", value: "tertiarycontainer" },
        { label: "Error", value: "error" },
        { label: "Error Container", value: "errorcontainer" },
        { label: "Success", value: "success" },
        { label: "Success Container", value: "successcontainer" },
        { label: "Warning", value: "warning" },
        { label: "Warning Container", value: "warningcontainer" },
        { label: "Info", value: "info" },
        { label: "Info Container", value: "infocontainer" },
        { label: "Background", value: "background" },
        { label: "Surface", value: "surface" },
        { label: "Surface Variant", value: "surfacevariant" },
        { label: "Surface Container Lowest", value: "surfacecontainerlowest" },
        { label: "Surface Container Low", value: "surfacecontainerlow" },
        { label: "Surface Container", value: "surfacecontainer" },
        { label: "Surface Container High", value: "surfacecontainerhigh" },
        { label: "Surface Container Highest", value: "surfacecontainerhighest" },
        { label: "Inverse Surface", value: "inversesurface" },
        { label: "Transparent", value: "transparent" },
        { label: "Surface Bright", value: "surfacebright" },
        { label: "Surface Dim", value: "surfacedim" },
        ]
      },
      fontClass: {
        kind: "select",
        label: "Font Class",
        default: "body",
        options: [
          { label: "Display 1", value: "display1" },
          { label: "Display 2", value: "display2" },
          { label: "Title 1", value: "title1" },
          { label: "Title 2", value: "title2" },
          { label: "Title 3", value: "title3" },
          { label: "Heading", value: "heading" },
          { label: "Subheading", value: "subheading" },
          { label: "Body", value: "body" },
          { label: "Callout", value: "callout" },
          { label: "Label", value: "label" },
          { label: "Caption", value: "caption" },
          { label: "Capline", value: "capline" },
        ],
      },
      disabled: { kind: "boolean", label: "Disabled", default: false },
    },
    mapKnobsToProps: (k) => ({ ...k, children: k.children }),
  },
} satisfies Record<string, ComponentEntry>;

export type ComponentName = keyof typeof componentManifest;
