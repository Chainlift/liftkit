import type * as React from "react";

import { Accordion_Example_CSS, Accordion_Example_TS } from "@/app/docs/components";

import { accordion } from "@/app/docs/lib/manifest-entries/manifest-accordion";
import { alertDialog } from "@/app/docs/lib/manifest-entries/manifest-alert-dialog";
import { autocomplete } from "@/app/docs/lib/manifest-entries/manifest-autocomplete";
import { avatar } from "@/app/docs/lib/manifest-entries/manifest-avatar";
import { button } from "@/app/docs/lib/manifest-entries/manifest-button";
import { checkbox } from "@/app/docs/lib/manifest-entries/manifest-checkbox";
import { checkboxGroup } from "@/app/docs/lib/manifest-entries/manifest-checkbox-group";
import { collapsible } from "@/app/docs/lib/manifest-entries/manifest-collapsible";
import { combobox } from "@/app/docs/lib/manifest-entries/manifest-combobox";
import { contextMenu } from "@/app/docs/lib/manifest-entries/manifest-context-menu";
import { dialog } from "@/app/docs/lib/manifest-entries/manifest-dialog";
import { field } from "@/app/docs/lib/manifest-entries/manifest-field";
import { fieldset } from "@/app/docs/lib/manifest-entries/manifest-fieldset";
import { form } from "@/app/docs/lib/manifest-entries/manifest-form";
import { icon } from "@/app/docs/lib/manifest-entries/manifest-icon";
import { iconButton } from "@/app/docs/lib/manifest-entries/manifest-icon-button";
import { input } from "@/app/docs/lib/manifest-entries/manifest-input";
import { menu } from "@/app/docs/lib/manifest-entries/manifest-menu";
import { menuBar } from "@/app/docs/lib/manifest-entries/manifest-menubar";
import { meter } from "@/app/docs/lib/manifest-entries/manifest-meter";
import { navigationMenu } from "@/app/docs/lib/manifest-entries/manifest-navigation-menu";
import { numberField } from "@/app/docs/lib/manifest-entries/manifest-number-field";
import { popover } from "@/app/docs/lib/manifest-entries/manifest-popover";
import { previewCard } from "@/app/docs/lib/manifest-entries/manifest-preview-card";
import { progress } from "@/app/docs/lib/manifest-entries/manifest-progress";
import { radio } from "@/app/docs/lib/manifest-entries/manifest-radio";
import { scrollArea } from "@/app/docs/lib/manifest-entries/manifest-scroll-area";
import { select } from "@/app/docs/lib/manifest-entries/manifest-select";
import { separator } from "@/app/docs/lib/manifest-entries/manifest-separator";
import { slider } from "@/app/docs/lib/manifest-entries/manifest-slider";
import { switchInput } from "@/app/docs/lib/manifest-entries/manifest-switch";
import { tabs } from "@/app/docs/lib/manifest-entries/manifest-tabs";
import { toast } from "@/app/docs/lib/manifest-entries/manifest-toast";
import { toggle } from "@/app/docs/lib/manifest-entries/manifest-toggle";
import { toggleGroup } from "@/app/docs/lib/manifest-entries/manifest-toggle-group";
import { toolbar } from "@/app/docs/lib/manifest-entries/manifest-toolbar";
import { tooltip } from "@/app/docs/lib/manifest-entries/manifest-tooltip";

export type Control =
  | { kind: "boolean"; label?: string; description?: string; default?: boolean }
  | { kind: "text"; label?: string; description?: string; default?: string; placeholder?: string }
  | {
      kind: "select";
      label?: string;
      description?: string;
      default?: string;
      options: { label: string; value: string }[];
    }
  | {
      kind: "number";
      label?: string;
      description?: string;
      default?: number;
      min?: number;
      max?: number;
      step?: number;
    }
  | { kind: "color"; label?: string; description?: string; default?: string } // if you want to wire to CSS vars, etc.
  | { kind: "slot"; label?: string; description?: string; default?: string } // convenience for children
  | {
      kind: "radio";
      label?: string;
      description?: string;
      default?: string;
      options: { label: string; value: string }[];
    };

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

/*

    mapKnobsToProps: (k) => ({
      ...k,
      children: k.children,
      startIcon: k.startIcon || undefined,
      endIcon: k.endIcon || undefined,
    }),


 */

export type ComponentEntry = {
  title: string;
  // Component is a React component type; we keep props loosely typed in docs code
  Component: React.ComponentType<any>;
  // tsExample generates the TypeScript code string for the example based on current knob values
  Example_TS_Static?: (knobs: Record<string, unknown>) => string;
  Example_TS_Dynamic?: (knobs: Record<string, unknown>) => string;
  // Example_CSS_Dynamic
  Example_CSS_Dynamic?: (knobs: Record<string, unknown>) => string;
  // "knobs" defines a subset of props you want to expose
  knobs?: Record<string, Control>;
  // base props always applied (can include className, etc.)
  baseProps?: Record<string, unknown>;
  // optional: transform the knobs into final props (e.g. map "label" → children)
  mapKnobsToProps?: (knobs: Record<string, unknown>) => Record<string, unknown>;
  // NEW: sub-components for compound components (e.g., Accordion.Root, Accordion.Item)
  // This is used for documentation/props tables and does NOT affect ComponentPreview
  subComponents?: Record<string, SubComponentEntry>;
  example_TS?: (knobs: Record<string, unknown>) => string;
  example_CSS?: (knobs: Record<string, unknown>) => string;
  docsLink?: string; //link to base UI documentation for this component
};

export const componentManifest: Record<string, ComponentEntry> = {
  accordion: accordion,
  alertDialog: alertDialog,
  autocomplete: autocomplete,
  avatar: avatar,
  button: button,
  checkboxGroup: checkboxGroup,
  checkbox: checkbox,
  collapsible: collapsible,
  combobox: combobox,
  contextMenu: contextMenu,
  dialog: dialog,
  field: field,
  fieldset: fieldset,
  form: form,
  icon: icon,
  iconButton: iconButton,
  input: input,
  menu: menu,
  menuBar: menuBar,
  meter: meter,
  navigationMenu: navigationMenu,
  numberField: numberField,
  popover: popover,
  previewCard: previewCard,
  progress: progress,
  radio: radio,
  scrollArea: scrollArea,
  select: select,
  separator: separator,
  slider: slider,
  switch: switchInput,
  tabs: tabs,
  toast: toast,
  toggle: toggle,
  toggleGroup: toggleGroup,
  toolbar: toolbar,
  tooltip: tooltip,
};

export type ComponentName = keyof typeof componentManifest;
