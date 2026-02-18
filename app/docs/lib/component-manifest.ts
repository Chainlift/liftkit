import type * as React from "react";
import { Button } from "@/liftkit/ui/button";
import { Accordion } from "@/liftkit/ui/accordion/accordion";
// import other components you want to preview

export type Control =
  | { kind: "boolean"; label?: string; default?: boolean }
  | { kind: "text"; label?: string; default?: string; placeholder?: string }
  | { kind: "select"; label?: string; default?: string; options: { label: string; value: string }[] }
  | { kind: "number"; label?: string; default?: number; min?: number; max?: number; step?: number }
  | { kind: "color"; label?: string; default?: string } // if you want to wire to CSS vars, etc.
  | { kind: "slot"; label?: string; default?: string }; // convenience for children

/**
 * Metadata for a sub-component (e.g., Accordion.Root, Accordion.Item)
 * Used to generate props tables and documentation without affecting ComponentPreview
 */
export type SubComponentEntry = {
  /** The actual React component (for potential future use) */
  Component?: React.ComponentType<any>;
  /** Description of what this sub-component does */
  description?: string;
  /** HTML element it renders (e.g., "<div>", "<button>", "<h3>") */
  renders?: string;
  /** Props information for generating props tables */
  props?: Array<{
    name: string;
    type: string;
    defaultValue?: string;
    description?: string;
    required?: boolean;
  }>;
  /** Data attributes from the API reference */
  dataAttributes?: Array<{
    name: string;
    type?: string;
    description?: string;
  }>;
  /** CSS Variables from the API reference */
  cssVariables?: Array<{
    name: string;
    type?: string;
    defaultValue?: string;
    description?: string;
  }>;
};

export type ComponentEntry = {
  title: string;
  // Component is a React component type; we keep props loosely typed in docs code
  Component: React.ComponentType<any>;
  // "knobs" defines a subset of props you want to expose
  knobs: Record<string, Control>;
  // base props always applied (can include className, etc.)
  baseProps?: Record<string, unknown>;
  // optional: transform the knobs into final props (e.g. map "label" → children)
  mapKnobsToProps?: (knobs: Record<string, unknown>) => Record<string, unknown>;
  // NEW: sub-components for compound components (e.g., Accordion.Root, Accordion.Item)
  // This is used for documentation/props tables and does NOT affect ComponentPreview
  subComponents?: Record<string, SubComponentEntry>;
};

export const componentManifest: Record<string, ComponentEntry> = {
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
        ],
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
      startIcon: {
        kind: "select",
        label: "Start Icon",
        default: "",
        options: [
          { label: "None", value: "" },
          { label: "Arrow Right", value: "arrow-right" },
          { label: "Arrow Left", value: "arrow-left" },
          { label: "Check", value: "check" },
          { label: "X", value: "x" },
          { label: "Plus", value: "plus" },
          { label: "Minus", value: "minus" },
          { label: "Search", value: "search" },
          { label: "Settings", value: "settings" },
          { label: "Download", value: "download" },
          { label: "Upload", value: "upload" },
          { label: "Heart", value: "heart" },
          { label: "Star", value: "star" },
          { label: "Trash", value: "trash" },
          { label: "Edit", value: "edit" },
          { label: "Save", value: "save" },
        ],
      },
      endIcon: {
        kind: "select",
        label: "End Icon",
        default: "",
        options: [
          { label: "None", value: "" },
          { label: "Arrow Right", value: "arrow-right" },
          { label: "Arrow Left", value: "arrow-left" },
          { label: "Check", value: "check" },
          { label: "X", value: "x" },
          { label: "Plus", value: "plus" },
          { label: "Minus", value: "minus" },
          { label: "Search", value: "search" },
          { label: "Settings", value: "settings" },
          { label: "Download", value: "download" },
          { label: "Upload", value: "upload" },
          { label: "Heart", value: "heart" },
          { label: "Star", value: "star" },
          { label: "Trash", value: "trash" },
          { label: "Edit", value: "edit" },
          { label: "Save", value: "save" },
        ],
      },
      disabled: { kind: "boolean", label: "Disabled", default: false },
    },
    mapKnobsToProps: (k) => ({
      ...k,
      children: k.children,
      startIcon: k.startIcon || undefined,
      endIcon: k.endIcon || undefined,
    }),
  },
  accordion: {
    title: "Accordion",
    Component: Accordion, // A wrapper for the preview
    knobs: {
      multiple: { kind: "boolean", label: "Multiple", default: false },
      disabled: { kind: "boolean", label: "Disabled", default: false },
    },
    // NEW: Add sub-components here
    subComponents: {
      Root: {
        description: "Groups all parts of the accordion.",
        renders: "<div>",
        props: [
          {
            name: "defaultValue",
            type: "any[]",
            description: "The uncontrolled value of the item(s) that should be initially expanded.",
            required: false,
          },
          {
            name: "multiple",
            type: "boolean",
            defaultValue: "false",
            description: "Whether multiple items can be open at the same time.",
            required: false,
          },
        ],
        dataAttributes: [
          {
            name: "data-orientation",
            description: "Indicates the orientation of the accordion.",
          },
          {
            name: "data-disabled",
            description: "Present when the accordion is disabled.",
          },
        ],
      },
      Item: {
        description: "Groups an accordion header with the corresponding panel.",
        renders: "<div>",
        props: [
          {
            name: "value",
            type: "any",
            description: "A unique value that identifies this accordion item.",
            required: false,
          },
        ],
        dataAttributes: [
          {
            name: "data-open",
            description: "Present when the accordion item is open.",
          },
        ],
      },
      // Add more sub-components as needed
    },
  },
};

export type ComponentName = keyof typeof componentManifest;

/* 
  EXAMPLE: How to add a compound component with sub-components
  
  accordion: {
    title: "Accordion",
    Component: AccordionWrapper, // A wrapper component for the preview
    knobs: {
      multiple: { kind: "boolean", label: "Multiple", default: false },
      disabled: { kind: "boolean", label: "Disabled", default: false },
    },
    subComponents: {
      Root: {
        description: "Groups all parts of the accordion. Renders a <div> element.",
        renders: "<div>",
        props: [
          {
            name: "defaultValue",
            type: "any[]",
            description: "The uncontrolled value of the item(s) that should be initially expanded.",
            required: false,
          },
          {
            name: "multiple",
            type: "boolean",
            defaultValue: "false",
            description: "Whether multiple items can be open at the same time.",
            required: false,
          },
          // ... more props
        ],
        dataAttributes: [
          {
            name: "data-orientation",
            description: "Indicates the orientation of the accordion.",
          },
          {
            name: "data-disabled",
            description: "Present when the accordion is disabled.",
          },
        ],
      },
      Item: {
        description: "Groups an accordion header with the corresponding panel. Renders a <div> element.",
        renders: "<div>",
        props: [
          {
            name: "value",
            type: "any",
            description: "A unique value that identifies this accordion item.",
            required: false,
          },
          {
            name: "disabled",
            type: "boolean",
            defaultValue: "false",
            description: "Whether the component should ignore user interaction.",
            required: false,
          },
          // ... more props
        ],
        dataAttributes: [
          {
            name: "data-open",
            description: "Present when the accordion item is open.",
          },
          {
            name: "data-disabled",
            description: "Present when the accordion item is disabled.",
          },
          {
            name: "data-index",
            type: "number",
            description: "Indicates the index of the accordion item.",
          },
        ],
      },
      // Header, Trigger, Panel, etc...
    },
  },
*/
