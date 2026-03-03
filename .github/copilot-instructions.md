# LiftKit Documentation Site - AI Coding Instructions

## Project Overview

Next.js 16 (React 19) documentation site for **LiftKit** — a React component library wrapping `@base-ui/react` primitives with a golden-ratio-based design token system. TypeScript, MDX for docs, no Tailwind — entirely custom utility CSS.

## Architecture

### Component Library (`liftkit/ui/`)

Two wrapping patterns coexist:

**Pattern A — forwardRef** (e.g., `button/button.tsx`):

```tsx
export type ButtonProps = ComponentPropsWithoutRef<typeof BaseButton> & { variant?, color?, ... };
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, color, ...props }, ref) {
    // ⚠️ CRITICAL: Destructure ALL custom props before spreading
    return <BaseButton ref={ref} className={buttonClasses({...})} {...props} />
  }
);
```

**Pattern B — plain functions** (e.g., `accordion/accordion.tsx`, `switch/switch.tsx`):

```tsx
"use client";
function AccordionTrigger({ className, ...props }: Accordion.Trigger.Props) {
  return <Accordion.Trigger data-slot="accordion-trigger" className={cn(className)} {...props} />;
}
```

**Key rules**:

- Destructure all custom props before spreading `...props` to prevent DOM warnings
- Use `data-slot="component-name"` for CSS targeting (Base UI convention)
- CSS: regular CSS with `lk-` prefix — **never CSS modules** (import `./lk-{component}.css` directly)
- Each component folder: `{component}.tsx`, `lk-{component}.css`, `index.ts`, `lk-example.tsx`

### Type System (`liftkit/types/*.d.ts`)

**Global declarations** — available everywhere without imports:

| File                 | Key Types                                                 |
| -------------------- | --------------------------------------------------------- |
| `lk-color.d.ts`      | `LkColor` (75+ tokens), `LkColorWithOnToken`, `LkOnColor` |
| `lk-typography.d.ts` | `LkFontClass` (36 values: 12 base × regular/bold/mono)    |
| `lk-material.d.ts`   | `LkMaterial` ("flat"/"glass"/"rubber")                    |
| `lk-units.d.ts`      | `LkSizeUnit` (3xs→4xl), `LkContainerWidth`                |
| `lk-shape.d.ts`      | `LkAspectRatio` (12 ratios)                               |
| `lk-utility.d.ts`    | `LkHeadingTag`, `LkSemanticTag`                           |

Use `Extract<Type, ...>` to narrow union types (NOT `Pick<>` — that's for objects only).

### CSS Architecture (`liftkit/utility-classes/`)

- **Golden ratio scale**: `--lk-scalefactor: 1.618` in `liftkit-core.css`
- Size tokens: `--lk-size-{5xs..4xl}` calculated as powers of scale factor
- **Typography classes redefine `--lk-size-md`** relative to their line height, making child spacing proportional to text size
- Material Design 3 color palette with light/dark CSS variables (`--light__*_lkv`, `--dark__*_lkv`)
- 35+ utility CSS files imported via `index.css`, classes: `bg-{color}`, `mb-{size}`, `flex`, etc.
- Entry point: `app/globals.css` → `@import "../liftkit/utility-classes/index.css"`

### Dual Shiki Syntax Highlighting

Two parallel highlighting paths — both use `shiki` directly:

**Server-side** (`app/docs/lib/highlighted-code-server.tsx`):

- Uses `createHighlighter` from `"shiki"` (full Node bundle)
- Called by `ComponentPreviewWrapper` (async Server Component) for static code samples
- Themes: `github-light` + `github-dark`

**Client-side** (`app/docs/lib/highlighted-code-client.ts`):

- `"use client"` hook: `useHighlightedCode(code, lang)` → returns highlighted HTML or null
- Dynamic `import("shiki/bundle/web")` — lazy-loaded browser bundle (~2MB WASM, loaded once via singleton)
- Used for reactive code that changes based on knob values

**MDX code blocks** separately use `rehype-pretty-code` (configured in `next.config.ts`) with themes `synthwave-84`/`github-light`.

**`RichCodeBlock`** (`app/docs/lib/rich-code-block.tsx`) unifies both paths:

- Props: `preHighlightedCode` (server HTML), `codeForClientHighlighting` (raw string), `lang`
- Priority: `clientHtml` (reactive) → `preHighlightedCode` (static fallback) → raw text

### Component Preview Pipeline

End-to-end flow for interactive component playgrounds:

1. **MDX page** uses `<ComponentPreviewWrapper componentName="accordion" tsExampleStatic={...} />`
2. **`ComponentPreviewWrapper`** (async Server Component) pre-highlights static code via server shiki → passes HTML to client
3. **`ComponentPreview`** (Client Component) owns knob state, renders:
   - Live component preview (top)
   - Knob controls (left panel) — Select, Switch, Input, etc.
   - Code tabs (right panel) — TypeScript/CSS via `RichCodeBlock`
4. On knob change → `manifest.tsExample(knobValues)` generates raw code → `RichCodeBlock` → client shiki highlights

### Component Manifest (`app/docs/lib/component-manifest.ts`)

Defines interactive playgrounds. Key fields per entry:

```tsx
accordion: {
  title: "Accordion",
  Component: ExampleAccordion,           // Live preview component (from lk-example.tsx)
  knobs: { multiple: { kind: "boolean", default: false } },
  tsExample: (knobs) => string,        // Dynamic TS code generation
  cssExample: (knobs) => string,       // Dynamic CSS code generation
  mapKnobsToProps?: (knobs) => props,    // Transform knobs before rendering
  baseProps?: { ... },                   // Always-applied props
  subComponents?: { ... },              // Compound component docs (props, data attributes, CSS vars)
}
```

Control types: `select`, `boolean`, `text`, `slot` (children), `number`, `color`

### MDX Configuration

- Custom components via `mdx-components.tsx`: `pre` → `RichCodeBlock`, `PropsTable`, `TableOfContents`
- Custom headings with LiftKit typography classes
- Plugins: `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, `rehype-pretty-code`

## Key Conventions

- **Path alias**: `@/*` → project root (e.g., `@/liftkit/component-definitions/button`)
- **Class names**: `cn()` from `@/lib/cn` (wraps `clsx`)
- **Component naming**: `import { Button as BaseButton }` → `export const Button`
- **CSS classes**: `lk-{component}`, `lk-{component}-variant--{value}`, `lk-colorgroup--{color}`
- **`propsToDataAttrs()`** from `lib/utilities.ts` converts props to `data-lk-*` attributes
- **Navigation**: auto-generated at runtime from `app/docs/` folder structure via `lib/docs-nav.ts`

## Development Workflow

### Commands

| Command                     | Purpose                                                      |
| --------------------------- | ------------------------------------------------------------ |
| `npm run dev`               | Start dev server (port 3000)                                 |
| `npm run build`             | Production build                                             |
| `npm run docs:gen-props`    | Generate props tables from component types (uses `ts-morph`) |
| `npm run docs:gen-examples` | Generate example code files from `lk-example.tsx`            |
| `npm run docs:gen-css`      | Generate CSS example files from component CSS                |

### Adding a New Component

1. Create `liftkit/ui/{component}/` with `{component}.tsx`, `lk-{component}.css`, `index.ts`
2. Wrap Base UI primitive — destructure custom props, use `data-slot`, apply `cn()` for classes
3. Create `lk-example.tsx` — live preview component accepting knob-mapped props
4. Add entry to `app/docs/lib/component-manifest.ts` with knobs, `tsExample`, `cssExample`
5. Create `app/docs/components/{component}/page.mdx`
6. Run `npm run docs:gen-props` to generate props documentation

### Common Pitfalls

- ❌ `Pick<>` on union types → use `Extract<>`
- ❌ Spreading all props without destructuring custom ones → DOM warnings
- ❌ CSS modules → use regular CSS with `lk-` prefixes
- ❌ Passing raw code strings to `preHighlightedCode` prop → use `codeForClientHighlighting` instead
- ❌ Importing from `shiki` in client components → use `shiki/bundle/web` via dynamic import
- ❌ Passing functions through Server→Client component boundary → put them in the manifest instead

## File Structure

```
liftkit/
  ui/              # Component library — {component}/{component}.tsx, lk-{component}.css, lk-example.tsx
  styles/          # Global CSS tokens & 35+ utility files, entry: index.css
  types/           # Global TypeScript declarations (no imports needed)
app/
  docs/
    lib/           # Preview system: component-manifest, component-preview, highlighted-code-*, rich-code-block
    components/    # Per-component docs: page.mdx, dynamic-ts-example.ts, dynamic-css-example.ts
lib/               # cn.ts, docs-nav.ts, utilities.ts
components/mdx/    # MDX overrides: code-block, PropsTable, TableOfContents
scripts/           # gen-props.mjs (ts-morph), gen-css.mjs, generate-local-code-samples.mjs
```
