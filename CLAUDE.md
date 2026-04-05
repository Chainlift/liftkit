# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

LiftKit Docs — a documentation site for "LiftKit," a component library built on top of [Base UI](https://base-ui.com) (`@base-ui/react`). The site showcases each component with a live interactive preview, knob-based controls, syntax-highlighted code samples, and auto-generated props/sub-component tables. Eventually, it will also serve as the source code repository for these components which other developers will pull and install from. Finally, the project will incorporate a 'playground' feature that allows users to customize global style tokens for color, typography, and spacing. It uses a unique design system called LiftKit which centralizes all design tokens in a single file called liftkit-core.css.

## Commands

- `npm run dev` — start Next.js dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run docs:gen-css` — regenerate CSS code samples from `liftkit/component-css/`
- `npm run docs:gen-examples` — regenerate local code samples
- `npm run docs:gen-props` — regenerate prop definitions

## Tech Stack

- **Next.js 16** (App Router) with React 19, TypeScript
- **MDX** for docs pages — configured via `@next/mdx` with remark-gfm, rehype-slug, rehype-autolink-headings, rehype-pretty-code (Shiki)
- **@base-ui/react** — unstyled primitives that LiftKit wraps
- **CSS custom properties** — LiftKit's design system uses golden-ratio-based spacing/sizing tokens (`--lk-size-*`, `--lk-scalefactor`) defined in `liftkit/utility-classes/liftkit-core.css`
- **lucide-react** for icons
- Path alias: `@/*` maps to project root

## Architecture

### `liftkit/` — The Component Library

This is the library being documented, not the docs site itself.

- **`component-definitions/`** — Each component in its own folder (e.g., `button/button.tsx`). Components wrap Base UI primitives, add LiftKit-specific props (variant, color, material, etc.), and import their CSS from `component-css/`. Barrel-exported via `index.ts`.
- **`component-css/`** — One CSS file per component (`lk-button.css`, etc.). Uses `data-lk-component` and `data-lk-*` attribute selectors, not class-based styling.
- **`examples/`** — `lk-example-*.tsx` files. Self-contained example components used in both docs previews and the component mosaic.
- **`types/`** — TypeScript type definitions for the design system (colors, typography, shapes, units, utilities).
- **`utility-classes/`** — CSS utility classes (flexbox, spacing, typography, colors, etc.) imported globally.

### `app/docs/` — The Documentation Site

- **`components/{component-name}/`** — Per-component docs folder containing:
  - `page.mdx` — the docs page (uses `ComponentPreviewWrapper` and `SubComponentSection`)
  - `codeTemplates/` — functions that generate TS/CSS code strings based on knob values
  - Sometimes `props-table.tsx`, `example-css.tsx`

- **`lib/`** — Shared docs infrastructure:
  - **`component-manifest.ts`** — Central registry (`componentManifest`) mapping component names to their `ComponentEntry` (title, Component, knobs, subComponents, code template generators). This is the single source of truth for the interactive docs.
  - **`manifest-entries/`** — One file per component (`manifest-button.tsx`, etc.) defining the `ComponentEntry` with knobs, sub-component metadata, props, and data attributes.
  - **`component-preview.tsx`** — Client component that renders the live preview with knob controls, using the manifest entry.
  - **`component-preview-wrapper.tsx`** — Server component that pre-highlights code via Shiki, then passes it to `ComponentPreview`.
  - **`component-mosaic.tsx`** — Showcase page composing all example components into an app-like layout.
  - **`subcomponent-section.tsx` / `subcomponent-utils.tsx`** — Renders API reference tables from manifest sub-component data.
  - **`rich-code-block.tsx` / `simple-code-block.tsx`** — Code display components with syntax highlighting.

### Key Pattern: Adding a New Component to Docs

1. Create the component in `liftkit/component-definitions/{name}/`
2. Add its CSS in `liftkit/component-css/lk-{name}.css`
3. Create an example in `liftkit/examples/lk-example-{name}.tsx`
4. Create a manifest entry in `app/docs/lib/manifest-entries/manifest-{name}.tsx`
5. Register it in `app/docs/lib/component-manifest.ts`
6. Create the docs page at `app/docs/components/{name}/page.mdx`
7. Add code templates in `app/docs/components/{name}/codeTemplates/`

### Design System Conventions

- Components use `data-slot` attributes for CSS targeting (not className-based)
- **GoldenBox** is a layout primitive used extensively — it applies golden-ratio-based padding with optical correction. Props: `scaleFactor` (font class name), `opticalCorrection` (top/bottom/x/y/all/none).
- Color tokens follow pattern: `--lk-color-{name}` with `on` variants (e.g., `primary` / `onprimary`)
- Size tokens: `--lk-size-{5xs..5xl}` based on powers of the golden ratio scale factor
- Navigation is auto-generated from the filesystem via `lib/docs-nav.ts` — any folder under `app/docs/` with a `page.mdx` or `page.tsx` automatically appears in the sidebar
