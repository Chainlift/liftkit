import { PropsTable } from "@/components/mdx/PropsTable";

const rows = [
  {
    "name": "color",
    "type": "LkColor | \"currentColor\" | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "display",
    "type": "\"block\" | \"inline-block\" | \"inline\" | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "fill",
    "type": "string | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "fontClass",
    "type": "\"display1\" | \"display2\" | \"title1\" | \"title2\" | \"title3\" | \"heading\" | \"subheading\" | \"body\" | \"callout\" | \"label\" | \"caption\" | \"capline\" | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "height",
    "type": "string | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "name",
    "type": "IconName | undefined",
    "typeLink": "/docs/types/IconName",
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "opticShift",
    "type": "boolean | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "strokeWidth",
    "type": "number | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  },
  {
    "name": "width",
    "type": "string | undefined",
    "typeLink": null,
    "required": false,
    "description": "-",
    "default": "-"
  }
];

export default function IconPropsTable() {
  return <PropsTable rows={rows} />;
}
