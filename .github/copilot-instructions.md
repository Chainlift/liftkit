# LiftKit Copilot Instructions

## Project Overview

LiftKit is a UI framework that enforces high-detail design principles through golden ratio scaling, optical symmetry, and Material Design 3 color systems. It's built as a Next.js component registry system with platform-agnostic design tokens.

## Core Architecture

### Registry System

- **Components**: Located in `registry/nextjs/components/[component-name]/`
- **Universal Types**: Global TypeScript types in `registry/universal/lib/types/` (`.d.ts` files)
- **Build Process**: `npm run registry` generates `registry.json` via `registry.js`
- **Installation**: Components installed via `npm run add [component-name]` using shadcn registry system

### Component Structure Pattern

Each component follows this structure:

```
registry/nextjs/components/button/
├── index.tsx          # Main component file
├── button.css         # Component-specific styles
└── [other-files]      # Additional supporting files
```

### Data Attribute System

Components use consistent data attributes for styling:

- `data-lk-component="[component-name]"` - Primary component identifier
- `data-lk-[component]-[prop]="[value]"` - Component-specific properties
- Generated via `propsToDataAttrs()` utility in `registry/nextjs/lib/utilities.ts`

### Color System

- Based on Material Design 3 color tokens
- Global types: `LkColor`, `LkColorWithOnToken`
- Dynamic theme generation in `registry/nextjs/components/theme/index.tsx`
- Color utilities in `registry/universal/lib/colorUtils.ts`

### Typography System

- `LkFontClass` types define all typography scales (display1, title1, body, etc.)
- Available in regular, bold, and mono variants
- Exported as `LK_FONT_CLASSES` constant

## Key Development Patterns

### Component Dependencies

Components auto-import dependencies via @ paths:

```tsx
import Button from "@/registry/nextjs/components/button";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
```

### State Management

- Theme context in `ThemeProvider` component
- Singleton registries for dropdowns/selects to manage focus
- Client components use "use client" directive

### Styling Approach

- CSS-in-JS with styled-jsx for dynamic styles
- CSS custom properties for theming (`--lk-[token]`)
- No Tailwind dependency (only config file for registry compatibility)

## Critical Commands

- `npm run dev` - Start development server with Turbopack
- `npm run registry` - Build component registry (run after component changes)
- `npm run add [component]` - Install specific component
- `npm run add all` - Install all components
- `npm run lint:css` - Lint CSS files with Stylelint

## Testing & Quality

- Vitest for unit testing (`npm test`)
- ESLint configuration in `eslint.config.mjs`
- Prettier formatting (`npm run pretty`)
- TypeScript utilities in `scripts/` for type analysis

## Registry Build Process

The `registry.js` script:

1. Scans `registry/nextjs/components/` for component directories
2. Analyzes imports to detect dependencies
3. Includes all neighboring files (CSS, types, etc.)
4. Generates registry entries with proper dependency URLs
5. Creates meta "all" and "base" entries

## Material Design Integration

- Uses `@material/material-color-utilities` for dynamic color generation
- MaterialLayer component for glass/surface effects
- StateLayer component for interaction states
- Floating UI for positioning (dropdowns, tooltips)

## Common Gotchas

- Components depend on base CSS being imported in `globals.css`
- Registry must be rebuilt after component structure changes
- Some components have complex variant systems (buttons have many CSS selectors)
- Type definitions are global and live in `.d.ts` files
