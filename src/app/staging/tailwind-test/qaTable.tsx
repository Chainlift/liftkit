import React from "react";

// --- Helper + LiftKit formulas (formula-based, not precomputed) ---

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
  sizes: {} as any,
  decrements: {} as any,
};

type baseSizeKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl";

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
};

// Dependent values
LiftKit.decrements = {
  wholestep: LiftKit.steps.wholestep - 1,
  halfstep: LiftKit.steps.halfstep - 1,
  quarterstep: LiftKit.steps.quarterstep - 1,
  eighthstep: LiftKit.steps.eighthstep - 1,
};

type TextStyleKey =
  | "display1"
  | "display2"
  | "title1"
  | "title2"
  | "title3"
  | "heading"
  | "subheading"
  | "body"
  | "callout"
  | "label"
  | "caption"
  | "capline";

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
  label: LiftKit.sizes.em / LiftKit.steps.quarterstep / LiftKit.steps.eighthstep,
  caption: LiftKit.sizes.em / LiftKit.steps.halfstep,
  capline: LiftKit.sizes.em / LiftKit.steps.halfstep,
} as const;

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
} as const;

const offset = {
  display1: size.display1 * (lh.display1 / LiftKit.steps.wholestep),
  display2: size.display2 * (lh.display2 / LiftKit.steps.wholestep),
  title1: size.title1 * (lh.title1 / LiftKit.steps.wholestep),
  title2: size.title2 * (lh.title2 / LiftKit.steps.wholestep),
  title3: size.title3 * (lh.title3 / LiftKit.steps.wholestep),
  heading: size.heading * (lh.heading / LiftKit.steps.wholestep),
  subheading: size.subheading * (lh.subheading / LiftKit.steps.wholestep),
  body: size.body / LiftKit.steps.wholestep, // special case per your CSS
  callout: size.callout * (lh.callout / LiftKit.steps.wholestep),
  label: size.label * (lh.label / LiftKit.steps.wholestep),
  caption: size.caption * (lh.caption / LiftKit.steps.wholestep),
  capline: size.capline * (lh.capline / LiftKit.steps.wholestep),
} as const;

// --- Component ---

interface TypographyTableProps {
  rootPx?: number; // default 16
  precision?: number; // default 0.01 for display
}

const ORDER: TextStyleKey[] = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "heading",
  "subheading",
  "body",
  "callout",
  "label",
  "caption",
  "capline",
];

const fmt = (n: number, p = 0.001) => {
  const factor = 1 / p;
  return (Math.round(n * factor) / factor).toFixed(3);
};

const TypographyTable: React.FC<TypographyTableProps> = ({ rootPx = 16, precision = 0.01 }) => {
  const rows = ORDER.map((k) => {
    const fontSizeEm = size[k];
    const lineHeightRatio = lh[k];
    const offsetEm = offset[k];

    const fontSizePx = fontSizeEm * rootPx;
    const lineHeightPx = fontSizeEm * lineHeightRatio * rootPx; // line-height is unitless * font-size
    const lineHeightRem = lineHeightPx / rootPx;
    const offsetPx = offsetEm * rootPx;

    /** Computed values of margin or padding when applied to the given text class at the given interval (i.e. "mr-xl" or "pt-2xs")*/

    const relSpacingEm = {
      md: lineHeightRatio,
      sm: lineHeightRatio * LiftKit.decrements.wholestep,
      xs: lineHeightRatio * LiftKit.decrements.halfstep,
      "2xs": lineHeightRatio * LiftKit.decrements.quarterstep,
      lg: lineHeightRatio * LiftKit.steps.wholestep,
      xl: lineHeightRatio * LiftKit.steps.wholestep * LiftKit.steps.wholestep,
      "2xl": lineHeightRatio * LiftKit.steps.wholestep * LiftKit.steps.wholestep * LiftKit.steps.wholestep,
    };

    /** Computed values of margin or padding when applied to the given text class at the given interval (i.e. "mr-xl" or "pt-2xs")*/
    const relSpacingPx = {
      md: relSpacingEm.md * fontSizePx,
      sm: relSpacingEm.sm * fontSizePx,
      xs: relSpacingEm.xs * fontSizePx,
      "2xs": relSpacingEm["2xs"] * fontSizePx,
      lg: relSpacingEm.lg * fontSizePx,
      xl: relSpacingEm.xl * fontSizePx,
      "2xl": relSpacingEm["2xl"] * fontSizePx,
    };

    const relSpacingEmList = Object.entries(relSpacingPx).map(([key, value]) => (
      <li key={key}>
        {key}: {fmt(value)}
      </li>
    ));

    const relSpacingPxList = Object.entries(relSpacingPx).map(([key, value]) => (
      <li key={key}>
        {key}: {fmt(value)}
      </li>
    ));

    return {
      key: k,
      fontSizeEm,
      fontSizePx,
      lineHeightRatio,
      lineHeightPx,
      lineHeightRem,
      offsetEm,
      offsetPx,
      relSpacingPxList,
    };
  });

  return (
    <div
      style={{ padding: 16, fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}
    >
      <h2 style={{ marginBottom: 12 }}>LiftKit Typography (root = {rootPx}px)</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>Style</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>fontSize (em)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>fontSize (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>
              lineHeight (ratio)
            </th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>lineHeight (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>
              lineHeight (rem)
            </th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>offset (em)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>offset (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>
              relative spacings
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>{r.key}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.fontSizeEm)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.fontSizePx)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.lineHeightRatio)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.lineHeightPx)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.lineHeightRem)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.offsetEm)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r.offsetPx)}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                <ul>{r.relSpacingPxList}</ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const RelativeSpacingTable: React.FC<TypographyTableProps> = ({ rootPx = 16, precision = 0.01 }) => {
  const rows = ORDER.map((k) => {
    const fontSizeEm = size[k];
    const lineHeightRatio = lh[k];
    const fontSizePx = fontSizeEm * rootPx;

    const relSpacingPx = {
      md: lineHeightRatio * fontSizePx,
      sm: lineHeightRatio * LiftKit.decrements.wholestep * fontSizePx,
      xs: lineHeightRatio * LiftKit.decrements.halfstep * fontSizePx,
      "2xs": lineHeightRatio * LiftKit.decrements.quarterstep * fontSizePx,
      lg: lineHeightRatio * LiftKit.steps.wholestep * fontSizePx,
      xl: lineHeightRatio * LiftKit.steps.wholestep * LiftKit.steps.wholestep * fontSizePx,
      "2xl": lineHeightRatio * LiftKit.steps.wholestep * LiftKit.steps.wholestep * LiftKit.steps.wholestep * fontSizePx,
    };

    return {
      key: k,
      fontSizeEm,
      fontSizePx,
      ...relSpacingPx,
    };
  });

  return (
    <div
      style={{ padding: 16, fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}
    >
      <h2 style={{ marginBottom: 12 }} className="title1-bold">
        Relative Spacing Benchmark
      </h2>
      <p className="title3 mb-lg">
        Assume 1rem = 16px. This table shows the correct computed values of applying margin or padding to each text
        style using utility classes m-[N] or p-[N], where N is a LiftKit spacing variable from 2xs to 2xl.
      </p>
      <h3 className="title3-bold mb-md">To ensure styles are being preserved in Tailwind:</h3>
      <ul className="mb-xl">
        <li>Render a list of each text style (already done below)</li>
        <li>For each text style, render one variant for each spacing variable N with class "mb-[N]"</li>
        <li>Write a client-side script that verifies if the actual computed value of each example matches the correct value from the table below.</li>
        <li>If any values do not match, there is a problem with your Tailwind configuration.</li>
      </ul>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>Style</th>
            <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>Font Size (em)</th>
            <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>Font Size (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>2xs (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>xs (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>sm (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>md (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>lg (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>xl (px)</th>
            <th style={{ textAlign: "right", padding: "8px 12px", borderBottom: "1px solid #ccc" }}>2xl (px)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>{r.key}</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>{fmt(r.fontSizeEm)}</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid #eee" }}>{fmt(r.fontSizePx)}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r["2xs"])}
              </td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>{fmt(r.xs)}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>{fmt(r.sm)}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>{fmt(r.md)}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>{fmt(r.lg)}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>{fmt(r.xl)}</td>
              <td style={{ padding: "8px 12px", textAlign: "right", borderBottom: "1px solid #eee" }}>
                {fmt(r["2xl"])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TypographyTable;
