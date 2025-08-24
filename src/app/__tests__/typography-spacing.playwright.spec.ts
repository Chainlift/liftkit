import { test, expect } from '@playwright/test';

// LiftKit formulas for expected values
const round = (num: number, precision = 0.001) => {
  const factor = 1 / precision;
  return Math.round(num * factor) / factor;
};

const LiftKit = {
  scalefactor: 1.618,
  steps: {
    wholestep: 1.618,
    halfstep: round(Math.pow(1.618, 0.5), 0.001),
    quarterstep: round(Math.pow(1.618, 0.25), 0.001),
    eighthstep: round(Math.pow(1.618, 0.125), 0.001),
  },
  decrements: {} as any,
};

LiftKit.decrements = {
  wholestep: LiftKit.steps.wholestep - 1,
  halfstep: LiftKit.steps.halfstep - 1,
  quarterstep: LiftKit.steps.quarterstep - 1,
  eighthstep: LiftKit.steps.eighthstep - 1,
};

// Base typography styles (without -bold variants)
const baseSize = {
  display1: Math.pow(LiftKit.steps.wholestep, 3),
  display2: Math.pow(LiftKit.steps.wholestep, 2),
  title1: LiftKit.steps.wholestep * LiftKit.steps.halfstep,
  title2: LiftKit.steps.wholestep,
  title3: LiftKit.steps.halfstep,
  heading: LiftKit.steps.quarterstep,
  subheading: 1 / LiftKit.steps.quarterstep,
  body: 1,
  callout: 1 / LiftKit.steps.eighthstep,
  label: 1 / (LiftKit.steps.quarterstep * LiftKit.steps.eighthstep),
  caption: 1 / LiftKit.steps.halfstep,
  capline: 1 / LiftKit.steps.halfstep,
} as const;

const baseLh = {
  display1: LiftKit.steps.quarterstep,
  display2: LiftKit.steps.halfstep,
  title1: LiftKit.steps.halfstep,
  title2: LiftKit.steps.halfstep,
  title3: LiftKit.steps.halfstep,
  heading: LiftKit.steps.halfstep,
  subheading: LiftKit.steps.halfstep,
  body: LiftKit.steps.wholestep,
  callout: LiftKit.steps.halfstep,
  label: LiftKit.steps.halfstep,
  caption: LiftKit.steps.halfstep,
  capline: LiftKit.steps.halfstep,
} as const;

// Helper function that removes -bold suffix
const getBaseStyle = (style: string): keyof typeof baseSize => {
  return style.replace('-bold', '') as keyof typeof baseSize;
};

// Calculate expected margin-bottom values per the table
const getClassValue = (textStyle: string, spacingSize: string, rootPx = 16): number => {
  const baseStyle = getBaseStyle(textStyle);
  const fontSizeEm = baseSize[baseStyle];
  const lineHeightRatio = baseLh[baseStyle];
  const fontSizePx = fontSizeEm * rootPx;
  
  let multiplier: number;
  switch (spacingSize) {
    case '2xs':
      multiplier = lineHeightRatio * LiftKit.decrements.quarterstep;
      break;
    case 'xs':
      multiplier = lineHeightRatio * LiftKit.decrements.halfstep;
      break;
    case 'sm':
      multiplier = lineHeightRatio * LiftKit.decrements.wholestep;
      break;
    case 'md':
      multiplier = lineHeightRatio;
      break;
    case 'lg':
      multiplier = lineHeightRatio * LiftKit.steps.wholestep;
      break;
    case 'xl':
      multiplier = lineHeightRatio * LiftKit.steps.wholestep * LiftKit.steps.wholestep;
      break;
    case '2xl':
      multiplier = lineHeightRatio * LiftKit.steps.wholestep * LiftKit.steps.wholestep * LiftKit.steps.wholestep;
      break;
    default:
      throw new Error(`Unknown spacing size: ${spacingSize}`);
  }
  
  const result = multiplier * fontSizePx;
  // Round to 3 decimal places like the table format
  return Math.round(result * 1000) / 1000;
};

const TYPOGRAPHY_CLASSES = [
  "display1", "display1-bold",
  "display2", "display2-bold", 
  "title1", "title1-bold",
  "title2", "title2-bold",
  "title3", "title3-bold",
  "heading", "heading-bold",
  "subheading", "subheading-bold",
  "body", "body-bold",
  "callout", "callout-bold",
  "label", "label-bold",
  "caption", "caption-bold",
  "capline", "capline-bold",
];

const SPACING_SIZES = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"];

test.describe('Typography Spacing - Tailwind CSS Values', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/staging/tailwind-test');
    await page.waitForSelector('[data-testid="typography-spacing-test"]');
  });

  test('component renders successfully', async ({ page }) => {
    const component = page.locator('[data-testid="typography-spacing-test"]');
    await expect(component).toBeVisible();
  });

 
test('all typography margin values match expected', async ({ page }) => {
  test.setTimeout(300_000); // give it up to 2 minutes

  const tolerance = 0.1;

  const MARGIN_DIRECTIONS = [
    { classPrefix: 'm', cssProp: 'margin' },
    { classPrefix: 'mt', cssProp: 'marginTop' },
    { classPrefix: 'mb', cssProp: 'marginBottom' },
    { classPrefix: 'ml', cssProp: 'marginLeft' },
    { classPrefix: 'mr', cssProp: 'marginRight' },
  ] as const;

  for (const typography of TYPOGRAPHY_CLASSES) {
    for (const spacing of SPACING_SIZES) {
      for (const { classPrefix, cssProp } of MARGIN_DIRECTIONS) {
        const elementId = `${typography}-${classPrefix}-${spacing}`;
        const element = page.locator(`#${elementId}`);

        await expect(element, `${elementId} should exist`).toBeVisible();

        const actualMargin = await element.evaluate(
          (el, cssProp) => parseFloat(window.getComputedStyle(el)[cssProp]),
          cssProp
        );

        const expectedValue = getClassValue(typography, spacing); 

        const difference = Math.abs(actualMargin - expectedValue);

        expect(
          difference,
          `${typography} ${classPrefix}-${spacing}: expected ${expectedValue}px, got ${actualMargin}px (diff: ${difference.toFixed(3)}px)`
        ).toBeLessThan(tolerance);
      }
    }
  }
});


test('verifies all margin class combinations exist', async ({ page }) => {
  test.setTimeout(300_000); // give it up to 2 minutes

  const MARGIN_DIRECTIONS = ["m", "mt", "mb", "ml", "mr"];
  const SPACING_SIZES = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"];

  for (const typography of TYPOGRAPHY_CLASSES) {
    for (const dir of MARGIN_DIRECTIONS) {
      for (const spacing of SPACING_SIZES) {
        const marginClass = `${dir}-${spacing}`;
        const elementId = `${typography}-${marginClass}`;
        const element = page.locator(`#${elementId}`);

        await expect(element, `Element ${elementId} should exist`).toBeVisible();

        // Ensure fixture tagged it properly
        await expect(element).toHaveAttribute('data-typography-class', typography);
        await expect(element).toHaveAttribute('data-margin-class', marginClass);
      }
    }
  }
});

});