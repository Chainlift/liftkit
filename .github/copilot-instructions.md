# LiftKit Documentation Site - AI Coding Instructions

## Project Overview

Next.js 16 documentation site for **LiftKit** - a React component library wrapping Base UI primitives with custom styling system. Uses TypeScript, MDX for docs, and a golden-ratio-based design token system.

## Architecture

### Component Library Pattern (`liftkit/ui/`)

Components wrap `@base-ui/react` primitives following this strict pattern:

```tsx
// Folder structure: liftkit/ui/button/{button.tsx,button.css,index.ts}
export type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  // Custom props (variant, color, size, etc.)
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, color, ...customProps }, ref) {
    // ⚠️ CRITICAL: Destructure ALL custom props to prevent DOM pollution
    // Only spread ...props containing valid HTML/BaseUI attributes
    return <BaseButton ref={ref} className={buttonClasses({...})} {...props} />
  }
);
```

**Key Rule**: Explicitly destructure custom props (variant, size, color, etc.) before spreading `...props` to Base components. This prevents passing wrapper-specific props to the DOM.

### Type System (`liftkit/types/*.d.ts`)

Uses **global type declarations** for design tokens:

- `LkColor` - Material Design 3 color tokens (primary, surface, etc.)
- `LkFontClass` - Typography scale (display1, body, caption, etc.)
- `LkColorWithOnToken` - Color + "on" variant pairs

Types are globally available without imports. Use `Extract<Type, ...>` to narrow union types (NOT `Pick` - that's for objects only).

### CSS Architecture (`liftkit/styles/`)

- **Token-based system** in `liftkit-core.css` using golden ratio scale (`--lk-scalefactor: 1.618`)
- Modular utility files (`margins.css`, `typography.css`, etc.) imported via `index.css`
- Custom properties cascade globally - components reference via `var(--lk-*)`
- Component CSS is **regular CSS** (not modules) using `lk-` prefix convention
- Import pattern: `import "./component.css"` directly in component files

### Documentation Site (`app/docs/`)

#### Navigation

Auto-generated from folder structure via `lib/docs-nav.ts`. Folders with `page.mdx` or `page.tsx` become nav items.

#### Interactive Component Previews

**Pattern**: Live playground system via `ComponentPreview` component

1. **Define controls** in `app/docs/lib/component-manifest.ts`:

```tsx
button: {
  Component: Button,
  knobs: {
    variant: { kind: "select", options: [...] },
    disabled: { kind: "boolean", default: false }
  },
  mapKnobsToProps?: (k) => ({ ...k }) // Optional transform
}
```

2. **Use in MDX**: `<ComponentPreview componentName="button" />`

Control types: `select`, `boolean`, `text`, `slot` (for children), `number`, `color`

#### MDX Configuration

- Custom components via `mdx-components.tsx`: `pre` → CodeBlock, PropsTable
- Rehype plugins: `rehype-slug`, `rehype-autolink-headings`
- `.mdx` files supported anywhere in `app/` directory

## Key Conventions

### Path Aliases

`@/*` resolves to project root. Example: `@/liftkit/ui/button`

### Class Name Utility

Use `cn()` from `@/lib/cn` (wraps clsx) for conditional classes:

```tsx
className={cn("lk-btn", variant && `lk-btn-variant--${variant}`)}
```

### Component Naming

- Base UI import: `import { Button as BaseButton }`
- Export: `export const Button = ...`
- CSS classes: `lk-{component}`, `lk-{component}-{modifier}`

### TypeScript Patterns

- Props type: `ComponentNameProps` extending Base UI via `ComponentPropsWithoutRef`
- Forward refs: Always use `React.forwardRef` with explicit return type
- Type helpers: Use `Pick<>` for object properties, `Extract<>` for union narrowing

## Development Workflow

### Commands

- `npm run dev` - Start dev server (port 3000)
- `npm run build` - Production build
- `npm run docs:gen-props` - Generate props tables (future: via react-docgen-typescript)

### Adding New Components

1. **Create folder**: `liftkit/ui/{component}/`
2. **Files**: `{component}.tsx`, `{component}.css`, `index.ts` (exports)
3. **Import Base UI primitive** and wrap following destructuring pattern
4. **Add to manifest** at `app/docs/lib/component-manifest.ts`
5. **Create MDX page** at `app/docs/components/{component}/page.mdx`

### Common Pitfalls

❌ Using `Pick<>` on union types → Use `Extract<>` instead  
❌ Spreading all props without destructuring custom ones → Causes DOM warnings  
❌ Importing CSS modules → Use regular CSS with `lk-` prefixes  
❌ Forgetting `forwardRef` → Base UI requires refs for accessibility

## File Structure

```
liftkit/
  ui/              # Component library (publishable)
  styles/          # Global CSS tokens & utilities
  types/           # Global TypeScript declarations
app/
  docs/            # Documentation pages (MDX)
    lib/           # Doc-specific utilities (manifest, preview)
    components/    # Component docs (one folder per component)
lib/               # Shared utilities (cn, docs-nav)
components/mdx/    # Custom MDX components (CodeBlock, PropsTable)
```

## Design System Values

- Scale factor: **1.618** (golden ratio)
- Size tokens: `--lk-size-{5xs,4xs,3xs,2xs,xs,sm,md,lg,xl,2xl,3xl,4xl}`
- Color scheme: Material Design 3 palette (light/dark mode via CSS custom properties)
- Typography: 12 scale levels + bold/mono variants

## Important Notes

- Components are **wrappers**, not reimplementations - leverage Base UI's accessibility
- CSS custom properties handle theming - avoid hardcoded colors
- Keep prop types strict for library, loose (`any`) for doc manifest
- MDX pages auto-render with Next.js - no special compilation needed
