import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

const meta: ComponentDocMeta = {
  title: "Menubar",
  description: "A row of menus, like an application's File, Edit, and View menus.",
  baseUiUrl: "https://base-ui.com/react/components/menubar",
  subComponents: {
    Root: {
      description: "A horizontal menu bar that groups multiple menus together.",
      renders: "<div>",
      props: [],
    },
  },
};

export default meta;
