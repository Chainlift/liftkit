// Helper for rounding to the same granularity you used in CSS
const round = (num, precision = 0.001) => {
  const factor = 1 / precision;
  return Math.round(num * factor) / factor;
};

const LiftKit = {
  // Base
  scalefactor: 1.618,

  // Core steps (kept as formulas, not hardcoded literals)
  steps: {
    wholestep: 1.618,
    halfstep: round(Math.pow(1.618, 0.5), 0.001),
    quarterstep: round(Math.pow(1.618, 0.25), 0.001),
    eighthstep: round(Math.pow(1.618, 0.125), 0.001),
  },

  // Filled in below after steps are defined
  decrements: {},
  sizes: {},
  unitless: {},

  // Final per-style mapping: { size, lineHeight, offset }
  text: {}
};

// Dependent values
LiftKit.decrements = {
  wholestep: LiftKit.steps.wholestep - 1,
  halfstep: LiftKit.steps.halfstep - 1,
  quarterstep: LiftKit.steps.quarterstep - 1,
  eighthstep: LiftKit.steps.eighthstep - 1,
};

// Base sizes (em treated as 1 for unit math)
LiftKit.sizes = {
  em: 1,
  md: 1,
  sm: 1 / LiftKit.scalefactor,
  xs: 1 * round(Math.pow(LiftKit.scalefactor, -1), 0.001),
  "2xs": 1 * round(Math.pow(LiftKit.scalefactor, -2), 0.001),
  "3xs": 1 * round(Math.pow(LiftKit.scalefactor, -3), 0.001),
  lg: 1 * LiftKit.scalefactor,
  xl: 1 * round(Math.pow(LiftKit.scalefactor, 2), 0.001),
  "2xl": 1 * round(Math.pow(LiftKit.scalefactor, 3), 0.001),
  "3xl": 1 * round(Math.pow(LiftKit.scalefactor, 4), 0.001),
  "4xl": 1 * round(Math.pow(LiftKit.scalefactor, 5), 0.001),
};

// Unitless versions for ad-hoc calc() parity
LiftKit.unitless = {
  sm: 1 / LiftKit.scalefactor,
  xs: (1 / LiftKit.scalefactor) / LiftKit.scalefactor,
  "2xs": ((1 / LiftKit.scalefactor) / LiftKit.scalefactor) / LiftKit.scalefactor,
  lg: 1 * LiftKit.scalefactor,
  xl: (1 * LiftKit.scalefactor) * LiftKit.scalefactor,
  "2xl": ((1 * LiftKit.scalefactor) * LiftKit.scalefactor) * LiftKit.scalefactor,
};

// Helper to build a text entry with the standard offset formula:
// offset = size * (lineHeight / wholestep)
// (Body is a special case handled below.)
const makeText = (sizeExpr, lineHeightExpr) => ({
  size: sizeExpr,
  lineHeight: lineHeightExpr,
  offset: sizeExpr * (lineHeightExpr / LiftKit.steps.wholestep),
});

// Font sizes (JS equivalents of your CSS calc() formulas)
const size = {
  display1: LiftKit.sizes.em * Math.pow(LiftKit.steps.wholestep, 3),
  display2: LiftKit.sizes.em * Math.pow(LiftKit.steps.wholestep, 2),
  title1: LiftKit.sizes.em * LiftKit.steps.wholestep * LiftKit.steps.halfstep,
  title2: LiftKit.sizes.em * LiftKit.steps.wholestep,
  title3: LiftKit.sizes.em * LiftKit.steps.halfstep,
  heading: LiftKit.sizes.em * LiftKit.steps.quarterstep,
  subheading: LiftKit.sizes.em / LiftKit.steps.quarterstep,
  body: LiftKit.sizes.em,
  callout: LiftKit.sizes.em / LiftKit.steps.eighthstep,
  label: (LiftKit.sizes.em / LiftKit.steps.quarterstep) / LiftKit.steps.eighthstep,
  caption: LiftKit.sizes.em / LiftKit.steps.halfstep,
  capline: LiftKit.sizes.em / LiftKit.steps.halfstep,
};

// Line heights (unitless ratios)
const lh = {
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
};

// Build per-style objects
LiftKit.text = {
  display1: makeText(size.display1, lh.display1),
  display2: makeText(size.display2, lh.display2),
  title1: makeText(size.title1, lh.title1),
  title2: makeText(size.title2, lh.title2),
  title3: makeText(size.title3, lh.title3),
  heading: makeText(size.heading, lh.heading),
  subheading: makeText(size.subheading, lh.subheading),
  // Body is the one exception: offset = size / wholestep (not size * lh/wholestep)
  body: {
    size: size.body,
    lineHeight: lh.body,
    offset: size.body / LiftKit.steps.wholestep,
  },
  callout: makeText(size.callout, lh.callout),
  label: makeText(size.label, lh.label),
  caption: makeText(size.caption, lh.caption),
  capline: makeText(size.capline, lh.capline),
};

export { LiftKit };
