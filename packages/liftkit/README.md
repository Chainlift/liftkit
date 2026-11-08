# LiftKit

A React component library built on [Base UI](https://base-ui.com). LiftKit uses golden-ratio proportions, optical correction, and Material-based color, so everything you build stays proportional and consistent.

> **Alpha.** LiftKit v2 is an early release and the API may change.

## Install

```bash
npm i liftkit@next
```

Requires React 19.

## Set up

Import the stylesheet once, in your app's root file. It includes the design tokens, utility classes, and styles for every component.

```tsx
// app/layout.tsx (Next.js) or your entry file
import "liftkit/styles.css";
```

## Use a component

```tsx
import { Button } from "liftkit";

export default function Page() {
  return <Button label="Hello" variant="fill" color="primary" />;
}
```

Each component is also available on its own path:

```tsx
import { Select } from "liftkit/select";
```

Either way, your bundler only includes the components you use.

## Next.js

LiftKit works with the App Router. Interactive components are marked `"use client"`, so you can import them from Server Components.

## Links

- [GitHub repository](https://github.com/Chainlift/liftkit)
- [Base UI](https://base-ui.com), the primitives LiftKit builds on

## License

[Apache 2.0](https://github.com/Chainlift/liftkit/blob/main/LICENSE)
