# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

LiftKit Docs — a documentation site for "LiftKit," a component library built on top of [Base UI](https://base-ui.com) (`@base-ui/react`). The site showcases each component with a live interactive preview, knob-based controls, syntax-highlighted code samples, and auto-generated props/sub-component tables. Eventually, it will also serve as the source code repository for these components which other developers will pull and install from. Finally, the project will incorporate a 'playground' feature that allows users to customize global style tokens for color, typography, and spacing. It uses a unique design system called LiftKit which centralizes all design tokens in a single file called liftkit-core.css.

## Repo Layout

pnpm workspace with two members:

- `packages/liftkit/`: the component library, published to npm as `liftkit`. In the workspace, the docs consume it as TypeScript source (`exports` points at `src/`, and the docs use `transpilePackages`).
- `apps/docs/`: the Next.js docs site (`@liftkit/docs`). It imports the library only via `liftkit`, never by relative path.

The library must never import from `apps/docs`. Inside the library, use relative imports (no `@/` alias).

## Commands

Run from the repo root (pnpm 10, Node >= 22):

- `pnpm dev`: start the docs dev server (localhost:3000)
- `pnpm build`: build all workspace packages
- `pnpm typecheck`: `tsc --noEmit` in every package
- `pnpm lint`: ESLint

## Tech Stack

- **Next.js 16** (App Router) with React 19, TypeScript
- **MDX** for docs pages — configured via `@next/mdx` with remark-gfm, rehype-slug, rehype-autolink-headings, rehype-pretty-code (Shiki)
- **@base-ui/react** — unstyled primitives that LiftKit wraps
- **CSS custom properties** — LiftKit's design system uses golden-ratio-based spacing/sizing tokens (`--lk-base-*`, `--lk-scalefactor`) defined in `packages/liftkit/src/css/utilities/liftkit-core.css`
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
  - **`component-mosaic-v2.tsx`** — The curated showcase: components arranged as a fictional amusement park's operations dashboard (live ride status, crowding, weather, staffing, maintenance, guest requests). Used on the home page and the Theme Generator's Sample layout tab; cards flow into balanced columns via `component-mosaic-v2.css`.
  - **`system-sheet/`** — The Theme Generator's System tab: a live cheat sheet of every length token in liftkit-core.css (LaTeX of its calc, a line of its computed width, the value in px). Docs-only custom components, deliberately isolated from the LiftKit library; they read the stylesheet at build time and measure with a ResizeObserver, so they follow the theme panel.
  - **`component-mosaic.tsx`** — The original every-component grid, kept for theme testing (Theme Generator > List view).
  - **`rich-code-block.tsx` / `simple-code-block.tsx`** — Syntax-highlighted code blocks.
  - **`theme-panel/`** — The Theme Generator's control panel, a sidebar on /playground, built from LiftKit components (ToggleGroup, Select, Slider, Input, Collapsible, Button, and the library's ColorInput). Its structural widths are fixed rem values on purpose: length tokens grow with the Scale Factor, so the panel would collapse while you drag its own sliders. The theme is site-wide: the root `app/layout.tsx` provides `ThemeProvider` + `ThemeCSSInjector`, so the theme saved in localStorage is applied on every page (docs included), and the panel on /playground edits it live. To avoid a flash of the default theme on a full page load, the injector also caches its finished CSS in localStorage (`lk-theme-css-v1`) and a tiny inline script in the root layout's `<head>` (`theme-panel/theme-boot.ts`) replays it before first paint. A visitor with nothing saved gets a random preset instead: the layout precomputes every preset's CSS on the server (`theme-boot-presets.ts`), and on every full page load the script picks one at random and hands it to `ThemeProvider`, which starts from it. That pick is not saved or cached until the visitor's first edit (any dispatch from the UI, including Reset), so every load rolls again until they change something. A switch in the nav bar (`components/random-theme-switch.tsx`, stored as `lk-random-theme` = "off" in localStorage) turns it off: an unedited visitor then sees the default theme, while a saved theme is never touched. Anyone with a saved theme keeps it. None of this needs a server at request time, so it works with the static export. The injector applies colors and scale factor, plus the Google Font choices (the `--lk-font-family-1/2/3` slots and the 12 per-group assignments), which come from a small build-time catalog in `content/google-fonts.json` (`pnpm -F @liftkit/docs fonts:fetch`). Presets (`presets.ts`) carry colors, scale, the three font slots and the 12 class-group mappings, so applying one sets all of them, and the "(modified)" marker compares all of them.
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
- Size tokens: `--lk-base-{5xs..5xl}` based on powers of the golden ratio scale factor
- The docs sidebar is grouped into sections defined in `apps/docs/lib/docs-nav.ts` (`SECTIONS`: Overview, Components). Overview lists the folders with a `page.mdx`/`page.tsx` (pages directly under `app/docs/` go in it); Components comes from the registry.

### Key pattern: updating CSS rules

1.
