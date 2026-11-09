# LiftKit

LiftKit is a design system for React apps built on [Base UI](https://base-ui.com) where everything is proportional to everything else. From just a single, global scale factor, LiftKit computes a perfectly-proportional scaling system for typography and spacing.

It's over-the-top, unlike anything you've ever used, and almost certainly a bad idea. Pretty fun, though, if you're up for a challenge.

By abstracting its unique scaling system behind easy-to-use CSS variables and utility classes, LiftKit makes design techniques long considered too irrational for user interfaces possible to implement at scale with little pain involved. These techniques, staples for graphic designers and visual artists for centuries, involve satisfying the human eye's frequent preference for asymmetry over symmetry, entropy over order, and imbalance over balance. For the sake of simplicity, LiftKit refers to all of these thousands of tiny tricks of the trade as **optical corrections.**

Under the hood, LiftKit's system starts with a single global scale factor. The default value is 1.618, phi, also known as the golden ratio. I chose this value because it looks the best to me, and it's what I originally designed it with. But you can set it to whatever you like. 1.25 gives you easier computed values to work with.

| Aspect           | Most design systems                                         | LiftKit                                                                     |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| Layout / Spacing | Global, base-4 pixel grid                                   | No global grid. Everything's `em` based. Layouts scale relative to content. |
| Size & Scaling   | Linear, based on a factor of 1.25                           | Exponential, based on any scale factor                                      |
| Color            | Minimal set of semantic tokens, Tailwind-ish                | Maximalist set of semantic tokens, Material 3-ish                           |
| Symmetry         | Literal symmetry. Numbers add up, but designs can look off. | Optical symmetry. Numbers don't add up, but designs look more balanced.     |
| Ease of use      | Easy to learn, hard to master                               | Hard to learn, AND hard to master!                                          |


---

The future of LiftKit is uncertain. I no longer have the time to maintain it I once did. However, I promised an update in early 2026, and I wanted to finish what I started. So here it is: LiftKit v2 in all its glory, gracefully flopping over the finish line over six months late.

> **Alpha.** LiftKit v2 is an early release and the API may change.

## Install

```bash
npm i liftkit
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
