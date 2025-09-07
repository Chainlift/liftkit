<!-- markdownlint-disable -->
<br />
<div align="center">
  <a href="https://github.com/chainlift/liftkit">
    <img src="https://cdn.prod.website-files.com/657f62adb6ceeafe578853be/68748d8bdb8b734290a3db92_h-lockup-transparent.svg" height="100em" alt="chainlift-liftkit">
  </a>
  <p>🎢</p>
  <p>
    <strong>
      The UI Framework for Perfectionists
    </strong>
  </p>

[![css][css-shield]][css-url]
[![NextJS][nextjs-shield]][nextjs-url]

[![GPL2 License][license-shield]][license-url]
[![Issues][issues-shield]][issues-url]
</div>
<!-- markdownlint-restore -->

# :grey_question: What is LiftKit?
LiftKit is a UI framework based on the golden ratio. At its core, it's a set of formulas and variables that unlock advanced visual design features like optical spacing corrections and dynamic color, powered by Material 3. 

## Getting Started
- The following instructions are easier to read on our website: See [Documentation](https://www.chainlift.io/liftkit/get-started)

# Install

This documentation assumes the following:

* You already have **Node.js**, **npm**, and **Git** installed on your local machine
* You’re familiar with basic terminal commands like `cd`

## 1. Create the Config Files

### Option A: Clone Template Project

1. Paste the following command into your terminal to clone the template:

   ```bash
   git clone https://github.com/Chainlift/liftkit-template.git
   ```
2. `cd` into the newly-created project.

   * If you get an error that says `direnv: error`, just ignore it. It's a bug we'll fix soon.
3. Run:

   ```bash
   npm install
   ```
4. Install the components you need (see section 2 below).
5. Import LiftKit’s CSS into your app’s `globals.css`:

   ```css
   @import url('@/lib/css/index.css');
   @layer components
   ```

#### What’s in the template?

A blank Next.js project with LiftKit Core’s config files pre-installed—fastest way to get up and running.

---

### Option B: Add to Existing Next.js Project

1. `cd` into your project’s root directory.
2. Install LiftKit CLI as a dev dependency:

   ```bash
   npm install @chainlift/liftkit --save-dev
   ```
3. Initialize LiftKit:

   ```bash
   npx liftkit init
   ```

   * If prompted to add an `add` script to `package.json`, say **yes**.
   * If prompted to install **shadcn** as a devDependency, say **yes**.
4. Install the components you need (see section 2 below).
5. Import LiftKit’s CSS into your app’s `globals.css`:

   ```css
   @import url('@/lib/css/index.css');
   @layer components
   ```

#### What does `npx liftkit init` do?

It adds two files to your project root:

* `components.json`
* `tailwind.config.ts`

> *You do not need Tailwind itself to use LiftKit—just the config file for now.*

---

## 2. Install LiftKit Components & Styles

LiftKit Core is just the base config. LiftKit Components are the actual UI components (with their CSS). At build time, unused CSS is tree-shaken away.

| Method            | Instructions                                      | Command                                 |
| ----------------- | ------------------------------------------------- | --------------------------------------- |
| **Everything**    | All components, CSS, and types                    | `npm run add all`                       |
| **One Component** | Specified component only (with its CSS and types) | `npm run add component-name-kebab-case` |
| **Base**          | CSS and types only                                | `npm run add base`                      |

> If warned about React 19 compatibility, add `--force` and proceed.

---

## FAQ

* **I only installed one component, but it installed multiple. Why?**
  Some components import others. E.g., installing `Badge` also brings in `Icon`.
* **Why did it install CSS for components I’m not using?**
  By design—to let you play freely. Unused styles are removed at build time.
* **How can I get rid of unused CSS?**
  It’s automatically removed at build time.
* **Does LiftKit require Tailwind?**
  No—only a `tailwind.config.ts` file is needed (a requirement of the current registry). Tailwind itself is *not* a dependency.

---

## The Figma Template

> **Warning:** It’s currently a dumpster fire. We’re working on improvements—contributors welcome!

### Clone the Community File

* [View File on Figma](https://www.figma.com/community/file/1404856652359938563) (opens in new tab)

---

## Known Issues

### Button variants are out of control

* We know. We’ll fix it soon.

  * Buttons adjust padding based on icon presence, and padding values aren’t controllable via props.
  * Our only option was to list everything explicitly—clearly a bad idea in hindsight.

### Local variables need documentation

* Figma doesn’t support margins or `em` units, so we converted everything to pixels (assuming `1rem = 16px`).
* Variables are organized into collections:

  * **Global collection** = base `LkSizeUnit` variables
  * **Text Spacing Vals** = subsets per `LkFontClass`, simulating spacing props like `.m-bottom-xs`

---

## Clone the Webflow Template

* [View on Made in Webflow](https://www.webflow.com) (opens in new tab)



<!-- MARKDOWN LINKS & IMAGES -->
[nextjs-shield]: https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://github.com/vercel/next.js
[nix-shield]: https://img.shields.io/badge/nix-0175C2?style=for-the-badge&logo=NixOS&logoColor=white
[nix-url]: https://nixos.org/
[css-shield]: https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[shadcn-shield]: https://img.shields.io/badge/shadcn-registry-%23EDE9FE.svg?style=for-the-badge&logo=vercel&logoColor=black
[shadcn-url]: https://ui.shadcn.com/docs/registry

[license-shield]: https://img.shields.io/github/license/chainlift/liftkit.svg?style=for-the-badge
[license-url]: https://github.com/chainlift/liftkit/blob/master/LICENSE
[issues-shield]: https://img.shields.io/github/issues/chainlift/liftkit.svg?style=for-the-badge
[issues-url]: https://github.com/chainlift/liftkit/issues
[license-shield]: https://img.shields.io/github/license/chainlift/liftkit.svg?style=for-the-badge
[license-url]: https://github.com/chainlift/liftkit/blob/master/LICENSE
