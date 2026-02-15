import fs from "node:fs";
import path from "node:path";
import { Project, ts, Node } from "ts-morph";

const repoRoot = process.cwd();
const uiRoot = path.join(repoRoot, "liftkit/ui");
const docsComponentsRoot = path.join(repoRoot, "app/docs/components");

const project = new Project({
  tsConfigFilePath: path.join(repoRoot, "tsconfig.json"),
  skipAddingFilesFromTsConfig: false,
});

const toPascalCase = (name) =>
  name
    .split(/[-_]/g)
    .filter(Boolean)
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join("");

const safeText = (text) => (text && text.trim() ? text.trim() : "-");

const getDefaultFromJsDocNode = (member) => {
  const tags = member.getJsDocs().flatMap((d) => d.getTags());
  const tag = tags.find((t) => t.getTagName() === "default");
  if (!tag) return "-";
  const value = (tag.getComment() ?? "").toString().trim();
  return safeText(value);
};

const getDescriptionFromJsDocNode = (member) => {
  const docs = member.getJsDocs();
  if (docs.length === 0) return "-";
  const text = docs
    .map((d) => d.getDescription().trim())
    .filter(Boolean)
    .join(" ");
  return safeText(text);
};

const getPropTypeTextFromMember = (member) => {
  const t = member.getType();
  return t.getText(member, ts.TypeFormatFlags.NoTruncation);
};

const getPropsTypeNode = (sourceFile, componentName) => {
  const pascal = toPascalCase(componentName);
  const exactName = `${pascal}Props`;

  const exportedTypeAliases = sourceFile
    .getTypeAliases()
    .filter((t) => t.isExported());

  const exportedInterfaces = sourceFile
    .getInterfaces()
    .filter((i) => i.isExported());

  const exactType =
    exportedTypeAliases.find((t) => t.getName() === exactName) ??
    exportedInterfaces.find((i) => i.getName() === exactName);

  if (exactType) return exactType;

  const fallbackType =
    exportedTypeAliases.find((t) => t.getName().endsWith("Props")) ??
    exportedInterfaces.find((i) => i.getName().endsWith("Props"));

  return fallbackType ?? null;
};

const getCustomPropMembers = (propsNode) => {
  if (Node.isInterfaceDeclaration(propsNode)) {
    return propsNode.getMembers().filter(Node.isPropertySignature);
  }

  if (Node.isTypeAliasDeclaration(propsNode)) {
    let typeNode = propsNode.getTypeNode();

    while (typeNode && Node.isParenthesizedTypeNode(typeNode)) {
      typeNode = typeNode.getTypeNode();
    }

    if (typeNode && Node.isTypeLiteral(typeNode)) {
      return typeNode.getMembers().filter(Node.isPropertySignature);
    }

    if (typeNode && Node.isIntersectionTypeNode(typeNode)) {
      const literal = typeNode
        .getTypeNodes()
        .find(Node.isTypeLiteral);

      if (literal) {
        return literal.getMembers().filter(Node.isPropertySignature);
      }
    }
  }

  return [];
};

const getComponentSourceFile = (componentDir) => {
  const entries = fs.readdirSync(componentDir);
  const tsxFiles = entries.filter(
    (f) =>
      f.endsWith(".tsx") &&
      f !== "index.tsx" &&
      f !== "index.ts" &&
      !f.endsWith(".test.tsx") &&
      !f.endsWith(".spec.tsx")
  );

  if (tsxFiles.length === 0) return null;

  // Prefer {component}.tsx if present
  const baseName = path.basename(componentDir);
  const preferred = tsxFiles.find((f) => f === `${baseName}.tsx`);
  const fileName = preferred ?? tsxFiles[0];
  return path.join(componentDir, fileName);
};

const writePropsTableComponent = (componentName, rows) => {
  const outDir = path.join(docsComponentsRoot, componentName);
  fs.mkdirSync(outDir, { recursive: true });

  const filePath = path.join(outDir, "props-table.tsx");

  const content = `import { PropsTable } from "@/components/mdx/PropsTable";

const rows = ${JSON.stringify(rows, null, 2)};

export default function ${toPascalCase(componentName)}PropsTable() {
  return <PropsTable rows={rows} />;
}
`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Wrote ${path.relative(repoRoot, filePath)}`);
};

const componentDirs = fs
  .readdirSync(uiRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => path.join(uiRoot, d.name));

for (const componentDir of componentDirs) {
  const componentName = path.basename(componentDir);
  const sourcePath = getComponentSourceFile(componentDir);
  if (!sourcePath) continue;

  const sourceFile =
    project.getSourceFile(sourcePath) ?? project.addSourceFileAtPath(sourcePath);
  if (!sourceFile) continue;

  const propsNode = getPropsTypeNode(sourceFile, componentName);
  if (!propsNode) {
    console.warn(`No exported Props type found for ${componentName}`);
    continue;
  }

  const members = getCustomPropMembers(propsNode);
  if (members.length === 0) {
    console.warn(`No custom prop members found for ${componentName}`);
    continue;
  }

  const rows = members
    .map((member) => {
      const name = member.getName();
      const type = getPropTypeTextFromMember(member);
      const required = !member.hasQuestionToken();
      const description = getDescriptionFromJsDocNode(member);
      const defaultValue = getDefaultFromJsDocNode(member);

      return {
        name,
        type,
        required,
        description,
        default: defaultValue,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  writePropsTableComponent(componentName, rows);
}

console.log("Done.");