# Sub-Components Guide

This guide explains how to add and use sub-components in the component manifest system.

## Overview

Some components are **compound components** with multiple sub-parts (e.g., `Accordion.Root`, `Accordion.Item`, `Accordion.Header`, etc.). The manifest system now supports adding metadata for these sub-components to enable automatic props table generation and documentation.

**Important:** Adding sub-components is **completely optional** and does **NOT affect** the existing `ComponentPreview` behavior.

## Adding Sub-Components to the Manifest

### Step 1: Define Your Component Entry

Add your component to `component-manifest.ts` with the optional `subComponents` field:

```typescript
import { Accordion } from "@/liftkit/component-definitions/accordion";

export const componentManifest = {
  // ... other components

  accordion: {
    title: "Accordion",
    Component: AccordionWrapper, // A wrapper for the preview
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
```

### Step 2: Use Sub-Component Data in Your Documentation

In your MDX documentation pages, you can render props tables for each sub-component:

```mdx
import { SubComponentDocs } from "@/app/docs/lib/subcomponent-utils";

## API Reference

### Root

<SubComponentDocs componentName="accordion" subComponentName="Root" />

### Item

<SubComponentDocs componentName="accordion" subComponentName="Item" />
```

Or render individual tables:

```mdx
import { SubComponentPropsTable, SubComponentDataAttributesTable } from "@/app/docs/lib/subcomponent-utils";

### Root Props

<SubComponentPropsTable componentName="accordion" subComponentName="Root" />

### Root Data Attributes

<SubComponentDataAttributesTable componentName="accordion" subComponentName="Root" />
```

## SubComponentEntry Type

Each sub-component can have the following metadata:

```typescript
type SubComponentEntry = {
  Component?: React.ComponentType<any>; // Optional: the actual component
  description?: string; // What the sub-component does
  renders?: string; // HTML element (e.g., "<div>", "<button>")
  props?: Array<{
    name: string;
    type: string;
    defaultValue?: string;
    description?: string;
    required?: boolean;
  }>;
  dataAttributes?: Array<{
    name: string;
    type?: string;
    description?: string;
  }>;
  cssVariables?: Array<{
    name: string;
    type?: string;
    defaultValue?: string;
    description?: string;
  }>;
};
```

## Available Utility Functions

From `subcomponent-utils.tsx`:

### Query Functions

- `getSubComponents(componentName)` - Get all sub-components for a component
- `getSubComponent(componentName, subComponentName)` - Get a specific sub-component
- `getSubComponentNames(componentName)` - Get all sub-component names
- `hasSubComponents(componentName)` - Check if a component has sub-components

### React Components

- `<SubComponentPropsTable>` - Renders a props table
- `<SubComponentDataAttributesTable>` - Renders data attributes table
- `<SubComponentCSSVariablesTable>` - Renders CSS variables table
- `<SubComponentDocs>` - Renders complete documentation for a sub-component

## Example Usage in MDX

```mdx
---
title: Accordion
---

import { ComponentPreview } from "@/app/docs/lib/component-preview";
import { SubComponentDocs } from "@/app/docs/lib/subcomponent-utils";

# Accordion

A set of collapsible panels with headings.

## Demo

<ComponentPreview componentName="accordion" />

## API Reference

### Root

<SubComponentDocs componentName="accordion" subComponentName="Root" />

### Item

<SubComponentDocs componentName="accordion" subComponentName="Item" />

### Header

<SubComponentDocs componentName="accordion" subComponentName="Header" />
```

## Benefits

1. **No Breaking Changes** - Existing components without sub-components work exactly as before
2. **ComponentPreview Unchanged** - The preview system doesn't need to know about sub-components
3. **Automatic Props Tables** - Generate consistent documentation tables from manifest data
4. **Single Source of Truth** - All component metadata lives in one place
5. **Type-Safe** - TypeScript ensures your sub-component data is well-formed
6. **Flexible** - Add as much or as little metadata as you need

## Tips

- Start by adding just `description` and `renders` for each sub-component
- Add `props` incrementally as you document each sub-component
- Use the Base UI documentation as a reference for prop types and descriptions
- Data attributes and CSS variables are optional but helpful for complete documentation
