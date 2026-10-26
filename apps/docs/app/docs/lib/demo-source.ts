import type { Control } from "./component-manifest";

/**
 * Turns a demo file's source into the code sample shown under the live demo.
 *
 * Demo files are real components that take the knob values as their only
 * parameter and spread them onto the element the knobs control:
 *
 *   export default function ButtonDemo(knobs: ButtonProps) {
 *     return <Button {...knobs} />;
 *   }
 *
 * For display, the `knobs` parameter is removed, `{...knobs}` is replaced
 * with the current knob values as JSX props (a `children` knob becomes the
 * element's children), and type imports that only typed the parameter are
 * dropped. Pure string work, so it runs on the server and in the browser.
 */
export function renderDemoSource(source: string, knobValues: Record<string, unknown> = {}): string {
  const { children, ...props } = activeKnobs(knobValues);
  const attrs = Object.entries(props).map(([key, value]) => serializeProp(key, value));

  let code = source.replace(/^\s*["']use client["'];?\s*\n+/, "");
  code = code.replace(/\(\s*knobs\b[^)]*\)/, "()");
  code = code.replace(
    /^([ \t]*)(.*?)<([A-Za-z][\w.]*)\s+\{\.\.\.knobs\}\s*(\/?)>/m,
    (_match, indent: string, before: string, tag: string, selfClosing: string) => {
      const inline = attrs.length <= 2 && attrs.join(" ").length <= 48;
      const open = attrs.length === 0 ? `<${tag}` : inline ? `<${tag} ${attrs.join(" ")}` : `<${tag}\n${indent}  ${attrs.join(`\n${indent}  `)}\n${indent}`;

      if (!selfClosing) return `${indent}${before}${open}>`;
      if (children === undefined) return `${indent}${before}${open}${inline || attrs.length === 0 ? " " : ""}/>`;
      return inline || attrs.length === 0
        ? `${indent}${before}${open}>${children}</${tag}>`
        : `${indent}${before}${open}>\n${indent}  ${children}\n${indent}</${tag}>`;
    },
  );

  // Remove `type Foo` import specifiers that are no longer referenced.
  code = code.replace(/,\s*type\s+(\w+)(?=\s*[,}])/g, (match, name: string) =>
    (code.match(new RegExp(`\\b${name}\\b`, "g")) ?? []).length > 1 ? match : "",
  );

  return code;
}

/** Knob values minus "unset" ones: undefined, "" (e.g. an icon set to None), and false. */
export function activeKnobs(knobValues: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(knobValues).filter(([, v]) => v !== undefined && v !== "" && v !== false));
}

export function defaultKnobValues(knobs: Record<string, Control> = {}): Record<string, unknown> {
  return Object.fromEntries(Object.entries(knobs).map(([key, control]) => [key, control.default]));
}

function serializeProp(key: string, value: unknown) {
  if (value === true) return key;
  if (typeof value === "string" && !value.includes('"')) return `${key}="${value}"`;
  return `${key}={${JSON.stringify(value)}}`;
}
