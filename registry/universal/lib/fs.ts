// utils/directoryNavUtils.ts
import fs from "fs";
import path from "path";

export interface NavItem {
  title: string;
  slug: string;
  children?: NavItem[];
}

/**
 * Formats a filename into a readable title
 * Example: "getting-started.mdx" becomes "Getting Started"
 */
export function formatTitle(fileName: string): string {
  const withoutExtension = fileName.replace(/\.(mdx?|jsx?|tsx?)$/, "");
  return withoutExtension
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Gets directory contents and formats them into navigation items
 */
export function getDirectoryContents(
  directoryPath: string,
  basePath: string = "",
): NavItem[] {
  const items: NavItem[] = [];
  const contents = fs.readdirSync(directoryPath);

  // Sort files and directories
  contents.sort((a, b) => {
    // Optional: Add custom sorting logic here if needed
    return a.localeCompare(b);
  });

  for (const item of contents) {
    // Skip hidden files/directories and non-content files
    if (item.startsWith(".") || item === "node_modules" || item === "_app")
      continue;

    const fullPath = path.join(directoryPath, item);
    const stats = fs.statSync(fullPath);
    const slug = path.join(basePath, item.replace(/\.(mdx?|jsx?|tsx?)$/, ""));

    if (stats.isDirectory()) {
      // Check if directory has an index file
      const hasIndex =
        fs.existsSync(path.join(fullPath, "index.mdx")) ||
        fs.existsSync(path.join(fullPath, "index.jsx")) ||
        fs.existsSync(path.join(fullPath, "index.tsx"));

      // Get child items
      const children = getDirectoryContents(
        fullPath,
        path.join(basePath, item),
      );

      if (children.length > 0 || hasIndex) {
        items.push({
          title: formatTitle(item),
          slug: hasIndex ? slug : children[0]?.slug || slug,
          children: children.length > 0 ? children : undefined,
        });
      }
    } else if (
      item.endsWith(".mdx") ||
      item.endsWith(".md") ||
      item.endsWith(".jsx") ||
      item.endsWith(".tsx")
    ) {
      // Skip index files in the listing, but include others
      if (
        item !== "index.mdx" &&
        item !== "index.jsx" &&
        item !== "index.tsx" &&
        item !== "index.md"
      ) {
        items.push({
          title: formatTitle(item),
          slug,
        });
      }
    }
  }

  return items;
}
