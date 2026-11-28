# Setup

# Usage

## Overview

The first thing you have to understand about LiftKit is its units of measurement. Most design systems are based on a base-4 pixel grid, where if you want to set the size of something, you specify it in pixels. You might give a flex list an 8px gap between items, or set the page padding to 64px. LiftKit doesn't work like that. In LiftKit, you have to define everything relative to font size.

That's not so bad, you might think. Just use `rem` instead of `px`. That's what Tailwind does, for example, but that's not quite the same as what LiftKit does. When Tailwind defines its spacing system on a scale of `0.25rem,` it's assuming a default font size of 16px, meaning its `0.25rem` spacing factor still computes to an even `4px`. The unspoken implication is that Tailwind users should still use a mental model of a base-4 pixel grid. That's how their utility classes work for padding, for example. If I use a class of `pb-4`, I'm meant to remember that as "padding bottom of 4 times the spacing unit." In other words, Tailwind may use `rem`, but for all intents and purposes, the experience of designing or building with it is not meaningfully different from designing with a base-4 grid.

LiftKit does something very, very different.

Literally the first thing it does is set the root font size to a sliding scale. It says "the font size should be 1vw, but no smaller than 14px, and no larger than 17px." This helps layouts preserve their proportions when changing viewport width, which can be quite useful if your users are working on small laptops or frequently splitting screens between your app and something else.

```css
/* liftkit-core.css */
:root {
  font-size: clamp(14px, 1vw, 17px);
```

After that, it declares the global scale factor: a unitless constant. You'll see what it's for momentarily.

```css
/* liftkit-core.css */
:root {
  font-size: clamp(14px, 1vw, 17px); /* Sets a font size responsive to viewport width, with a minimum of 14px and a max of 17px. */
  --lk-scalefactor: 1.618; /* A unitless constant used in other calculations */
```

Here, 2 lines in, LiftKit diverges drastically from anything you've ever used before. That's when it introduces **increments**.

## Increments

### Definition

In LiftKit, 'increment' is a generic term meaning "how much greater/lesser one value is compared to another."

Other systems have this concept too; they just don't call it out. In Tailwind's [typography system](https://tailwindcss.com/docs/font-size), you have these variables:

| variable name | rem      | px   |
| ------------- | -------- | ---- |
| `text-base`   | 1rem     | 16px |
| `text-lg`     | 1.125rem | 18px |
| `text-xl`     | 1.25rem  | 20px |

In Tailwind's system, where the 'base' unit of measurement is `4px,` going from `base` to `xl` means increasing the font size from `16px` to `20px.` It's 1 increment. But that also means going from `base` to `lg` would only be _half_ an increment. Is it an exception to the rule? Does it even matter? I don't know. I just know it wasn't what I'd have guessed, if you'd only given me the scale factor and the pixel value for `base` and asked me to guess the rest.

### Linear in theory, irrational in practice

One design team I worked with used a very strict token system for spacing and sizing. It starts at 4px and then goes 8, 12, 16, 20, 24, and then... 32. We skipped 28. I don't know why. It wasn't my decision. But it still haunts me to this day.

Inconsistent increments like that are everywhere you look. Even with the big players. And it's almost always with typography.

## Design guidelines

### Spacing

- When three text elements appear in a single vertical column,
