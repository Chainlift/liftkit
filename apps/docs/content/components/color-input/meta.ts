import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Color Input",
  description: "A color swatch that opens the color picker, next to a hex field. Both stay in sync.",
  knobs: {
    disabled: { kind: "boolean", label: "Disabled", default: false },
  },
  subComponents: {
    Root: {
      description:
        "A swatch and a hex field in a row. Clicking the swatch opens the browser's native color picker, which can't be themed.",
      renders: "<div>",
      props: [
        {
          name: "value",
          type: "string",
          required: true,
          description: 'The current color as a 6-digit hex code, e.g. "#0051e0".',
        },
        {
          name: "onValueChange",
          type: "(hex: string) => void",
          required: true,
          description: "Called with a valid hex code whenever the color changes, from the picker or the hex field.",
        },
        { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables the picker and the hex field." },
        {
          name: "aria-label",
          type: "string",
          defaultValue: '"Color"',
          description: 'Accessible name for the color. The hex field is named "<name> hex".',
        },
      ],
    },
  },
};

export default meta;
