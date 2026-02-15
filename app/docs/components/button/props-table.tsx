import { PropsTable } from "@/components/mdx/PropsTable";

const rows = [
  {
    "name": "color",
    "type": "LkColorWithOnToken | undefined",
    "typeLink": null,
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "endIcon",
    "type": "IconName",
    "typeLink": "/docs/types/IconName",
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "fontClass",
    "type": "\"display1\" | \"display2\" | \"title1\" | \"title2\" | \"title3\" | \"heading\" | \"subheading\" | \"body\" | \"callout\" | \"label\" | \"caption\" | \"capline\" | undefined",
    "typeLink": null,
    "required": false,
    "description": "Some description",
    "default": "\"body\""
  },
  {
    "name": "label",
    "type": "string | undefined",
    "typeLink": null,
    "required": false,
    "description": "Text content for the button. Falls back to children.",
    "default": "-"
  },
  {
    "name": "material",
    "type": "string | undefined",
    "typeLink": null,
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "modifiers",
    "type": "string | undefined",
    "typeLink": null,
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "opticalCorrection",
    "type": "boolean | undefined",
    "typeLink": null,
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "startIcon",
    "type": "IconName",
    "typeLink": "/docs/types/IconName",
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "stateLayerOverride",
    "type": "LkStateLayerProps",
    "typeLink": "/docs/types/LkStateLayerProps",
    "required": false,
    "description": "Some description",
    "default": "-"
  },
  {
    "name": "variant",
    "type": "\"fill\" | \"outline\" | \"text\" | undefined",
    "typeLink": null,
    "required": false,
    "description": "Visual style variant.",
    "default": "-"
  }
];

export default function ButtonPropsTable() {
  return <PropsTable rows={rows} />;
}
