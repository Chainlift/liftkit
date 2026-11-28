import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Number Field",
  description: "A numeric input with increment and decrement buttons.",
  baseUiUrl: "https://base-ui.com/react/components/number-field",
  subComponents: {
    Root: {
      description: "The root provider component for the number field. Manages value and step state.",
      renders: "<div>",
      props: [],
    },
    ScrubArea: {
      description: "An area that allows changing the value by clicking and dragging.",
      renders: "<div>",
      props: [],
    },
    ScrubAreaCursor: {
      description: "A custom cursor displayed within the scrub area while dragging.",
      renders: "<span>",
      props: [],
    },
    Group: {
      description: "Groups the input and increment/decrement buttons together.",
      renders: "<div>",
      props: [],
    },
    Input: {
      description: "The text input for entering a numeric value.",
      renders: "<input>",
      props: [],
    },
    Increment: {
      description: "A button that increments the value by one step.",
      renders: "<button>",
      props: [],
    },
    Decrement: {
      description: "A button that decrements the value by one step.",
      renders: "<button>",
      props: [],
    },
  },
};

export default meta;
