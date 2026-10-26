# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

LiftKit Docs — a documentation site for "LiftKit," a component library built on top of [Base UI](https://base-ui.com) (`@base-ui/react`). The site showcases each component with a live interactive preview, knob-based controls, syntax-highlighted code samples, and auto-generated props/sub-component tables. Eventually, it will also serve as the source code repository for these components which other developers will pull and install from. Finally, the project will incorporate a 'playground' feature that allows users to customize global style tokens for color, typography, and spacing. It uses a unique design system called LiftKit which centralizes all design tokens in a single file called liftkit-core.css.

## Repo Layout

pnpm workspace with two members:

- `packages/liftkit/`: the component library, published to npm as `@chainlift/liftkit`. In the workspace, the docs consume it as TypeScript source (`exports` points at `src/`, and the docs use `transpilePackages`).
- `apps/docs/`: the Next.js docs site (`@liftkit/docs`). It imports the library only via `@chainlift/liftkit`, never by relative path.

The library must never import from `apps/docs`. Inside the library, use relative imports (no `@/` alias).

## Commands

Run from the repo root (pnpm 10, Node >= 20.9):

- `pnpm dev`: start the docs dev server (localhost:3000)
- `pnpm build`: build all workspace packages
- `pnpm typecheck`: `tsc --noEmit` in every package
- `pnpm lint`: ESLint

## Tech Stack

- **Next.js 16** (App Router) with React 19, TypeScript
- **MDX** for docs pages — configured via `@next/mdx` with remark-gfm, rehype-slug, rehype-autolink-headings, rehype-pretty-code (Shiki)
- **@base-ui/react** — unstyled primitives that LiftKit wraps
- **CSS custom properties** — LiftKit's design system uses golden-ratio-based spacing/sizing tokens (`--lk-size-*`, `--lk-scalefactor`) defined in `packages/liftkit/src/css/utilities/liftkit-core.css`
- **lucide-react** for icons
- Path alias (docs only): `@/*` maps to `apps/docs/`

## Architecture

### `packages/liftkit/src/` — The Component Library

This is the library being documented, not the docs site itself.

- **`index.ts`** — the package entry point. Re-exports `components/index.ts` and references the global type declarations in `types/`.
- **`components/`** — Each component in its own folder (e.g., `button/button.tsx`). Components wrap Base UI primitives, add LiftKit-specific props (variant, color, material, etc.), and import their CSS from `css/components/`. Barrel-exported via `index.ts`.
- **`css/components/`** — One CSS file per component (`lk-button.css`, etc.). Uses `data-lk-component` and `data-lk-*` attribute selectors, not class-based styling.
- **`types/`** — TypeScript type definitions for the design system (colors, typography, shapes, units, utilities).
- **`css/utilities/`** — CSS utility classes (flexbox, spacing, typography, colors, etc.) imported globally.

### `apps/docs/` — The Documentation Site

- **`content/components/{name}/`** — One folder per component docs page: `demo.tsx`, `meta.ts`, optional `notes.mdx` (see below). `registry.ts` lists them all.
- **`app/docs/components/[slug]/page.tsx`** — The shared template that renders every component page from its content folder. Statically generated (`generateStaticParams`).
- **`app/docs/{page}/page.mdx`** — Regular docs pages (e.g. `getting-started`), plain MDX. `mdx-components.tsx` maps Markdown elements to LiftKit typography.
- **`app/docs/lib/`** — Shared docs infrastructure:
  - **`component-preview.tsx`** — Client component: live demo, knob controls, TS/CSS code tabs. Resolves the demo from the registry by slug.
  - **`demo-source.ts`** — Turns a demo file's source into the displayed code sample with the current knob values.
  - **`component-doc.ts`** — Types: `ComponentDocMeta`, `Control` (knob definitions), `SubComponentEntry` (API reference data).
  - **`example.tsx`** — `<Example>` for extra live examples (with source) inside `notes.mdx`.
  - **`subcomponent-section.tsx` / `subcomponent-utils.tsx`** — API reference tables from `meta.subComponents`.
  - **`component-mosaic.tsx`** — The home page showcase, composed from the component demos.
  - **`rich-code-block.tsx` / `simple-code-block.tsx`** — Syntax-highlighted code blocks.
  - **`theme-panel/`** — The theme control panel (floating button on docs pages, sidebar on /playground).
- **`components/site-header.tsx`** — Top navigation. **`lib/docs-nav.ts`** — Sidebar sections.

### Key Pattern: Component Docs Pages (shared template)

Every component page is rendered by one shared template, `apps/docs/app/docs/components/[slug]/page.tsx`. To add a component page:

1. Library: the component in `packages/liftkit/src/components/{name}/` (exported from `components/index.ts`), its CSS in `packages/liftkit/src/css/components/lk-{name}.css`. Interactive components need `"use client"`.
2. Docs content in `apps/docs/content/components/{name}/`:
   - `demo.tsx`: a default-exported component (add `"use client"` only if it uses hooks; it's shown in the sample) taking `knobs` as its only parameter and spreading `{...knobs}` onto the controlled element, after any plain props (on its own line, inside `return (...)`). Components without knobs take no parameter. This file IS the TS code sample: `app/docs/lib/demo-source.ts` strips the parameter and fills in the current knob values.
   - `meta.ts`: default-exported `ComponentDocMeta` (title, description, `baseUiUrl`, `knobs`, `subComponents`, optional `cssFile`).
   - `notes.mdx` (optional): page-specific content, shown after Installation. Use `<Example file="{name}/foo.tsx"><Foo /></Example>` for extra live examples whose source is shown.
3. Register it in `apps/docs/content/components/registry.ts` (meta + Demo). The registry is imported by the client-side preview, so it must stay browser-safe. Notes are loaded by the page, not the registry.

The CSS tab shows the component's real stylesheet, read from the library at build time. The sidebar's Components section is built from the registry.

### Design System Conventions

- Components use `data-slot` attributes for CSS targeting (not className-based)
- **GoldenBox** is a layout primitive used extensively — it applies golden-ratio-based padding with optical correction. Props: `scaleFactor` (font class name), `opticalCorrection` (top/bottom/x/y/all/none).
- Color tokens follow pattern: `--lk-color-{name}` with `on` variants (e.g., `primary` / `onprimary`)
- Size tokens: `--lk-size-{5xs..5xl}` based on powers of the golden ratio scale factor
- The docs sidebar is grouped into sections defined in `apps/docs/lib/docs-nav.ts` (`SECTIONS`: Overview, Components, Types & Tokens). Overview and Types & Tokens list the folders with a `page.mdx`/`page.tsx` (pages directly under `app/docs/` go in Overview); Components comes from the registry.

### Key pattern: updating CSS rules

1. 