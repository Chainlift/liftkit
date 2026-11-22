import catalogJson from "../../../content/google-fonts.json";

export interface FontCatalogEntry {
  family: string;
  category: "Sans Serif" | "Serif" | "Display" | "Handwriting" | "Monospace";
}

interface CatalogJson {
  fetchedAt: string;
  families: FontCatalogEntry[];
}

export const FONT_CATALOG: FontCatalogEntry[] = (catalogJson as CatalogJson).families;

const byFamily = new Map(FONT_CATALOG.map((entry) => [entry.family, entry.category]));

export function getCategoryFor(family: string): FontCatalogEntry["category"] | undefined {
  return byFamily.get(family);
}
