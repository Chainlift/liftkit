import fs from "node:fs";
import path from "node:path";
import parser from "react-docgen-typescript";

const root = process.cwd(); // run from repo root
const outDir = path.join(root, "apps", "docs", "src", "generated", "props");

fs.mkdirSync(outDir, { recursive: true });

const p = parser.withCustomConfig(
  path.join(root, "packages", "ui", "tsconfig.json"),
  {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
  }
);

// Point at your public exports or component files
const files = [
  path.join(root, "packages", "ui", "src", "components", "button", "button.tsx"),
  // add more, or glob
];

for (const file of files) {
  const docs = p.parse(file);
  for (const d of docs) {
    fs.writeFileSync(
      path.join(outDir, `${d.displayName}.json`),
      JSON.stringify(d, null, 2),
      "utf8"
    );
  }
}
