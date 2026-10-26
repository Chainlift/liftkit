<!-- markdownlint-disable -->
<div align="center">
  <a href="https://github.com/chainlift/liftkit">
    <img src="https://cdn.prod.website-files.com/657f62adb6ceeafe578853be/68748d8bdb8b734290a3db92_h-lockup-transparent.svg" width="240px" alt="LiftKit">
  </a>
  <p><strong>The UI Framework for Perfectionists</strong></p>
</div>
<!-- markdownlint-restore -->

> [!WARNING]
> **LiftKit v2 is in active development and not yet published to npm.** Follow [#237](https://github.com/Chainlift/liftkit/issues/237) for progress. The v1 code is preserved at the [`v1-legacy`](https://github.com/Chainlift/liftkit/tree/v1-legacy) tag.

## What is LiftKit?

LiftKit is a design system and React component library. At its core is a system of formulas for scaling, spacing, and color that enforces design best practices automatically: golden-ratio proportions, optical correction, and smooth Material-based color ramps.

v2 components wrap [Base UI](https://base-ui.com) primitives, so accessibility, keyboard navigation, and focus management are handled for you.

## Repository layout

| Path | What it is |
| --- | --- |
| [`packages/liftkit`](packages/liftkit) | The component library (`@chainlift/liftkit`) |
| [`apps/docs`](apps/docs) | The documentation site |

## Development

Requires Node 20.9+ and [pnpm](https://pnpm.io) 10.

```bash
pnpm install
pnpm dev        # docs site at http://localhost:3000
pnpm typecheck
pnpm build
```

## License

[Apache 2.0](LICENSE)
