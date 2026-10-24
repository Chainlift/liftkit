import fs from "node:fs";
import path from "node:path";
import { Project, ts, Node } from "ts-morph";

const repoRoot = process.cwd();
const uiRoot = path.join(repoRoot, "liftkit/ui");
const typesRoot = path.join(repoRoot, "liftkit/types");
const docsComponentsRoot = path.join(repoRoot, "app/docs/components");
const docsTypesRoot = path.join(repoRoot, "app/docs/types");

const customTypesFound = new Set();

// NEW: Extract custom type names from a type string
function extractCustomTypes(typeText) {
  const types = [];
  // Match PascalCase type names (avoiding built-in types)
  const matches = typeText.matchAll(/\b([A-Z][a-zA-Z0-9]*(?:Props)?)\b/g);
  for (const match of matches) {
    const typeName = match[1];
    // Skip common built-ins
    if (!["React", "HTMLElement", "Promise", "Record", "Array"].includes(typeName)) {
      types.push(typeName);
    }
  }
  return types;
}

const project = new Project({
  tsConfigFilePath: path.join(repoRoot, "tsconfig.json"),
  skipAddingFilesFromTsConfig: false,
});

// Types that should be linked (in addition to Lk-prefixed types)
const LINKABLE_TYPE_NAMES = new Set(["IconName"]);

// Known React types with their doc URLs
const REACT_TYPE_DOCS = {
  ReactNode: "https://react.dev/reference/react/ReactNode",
  ReactElement: "https://react.dev/reference/react/createElement",
  ComponentPropsWithoutRef: "https://react.dev/reference/react/ComponentPropsWithoutRef",
  ComponentPropsWithRef: "https://react.dev/reference/react/ComponentPropsWithRef",
  HTMLAttributes: "https://react.dev/reference/react-dom/components/common",
  CSSProperties: "https://react.dev/reference/react-dom/components/common",
  MouseEvent: "https://react.dev/reference/react-dom/components/common",
  ChangeEvent: "https://react.dev/reference/react-dom/components/common",
  FormEvent: "https://react.dev/reference/react-dom/components/common",
  KeyboardEvent: "https://react.dev/reference/react-dom/components/common",
  FocusEvent: "https://react.dev/reference/react-dom/components/common",
};

const REACT_FALLBACK_URL = "https://react.dev";

// Tracking for console output
const createdTypePages = new Set();
const reactTypesWithoutDocs = new Set();
const skippedTypes = new Map(); // component -> type[]

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

const shouldLinkType = (typeName) => {
  // Remove React. prefix for checking
  const cleanName = typeName.replace(/^React\./, "");
  return (
    LINKABLE_TYPE_NAMES.has(cleanName) ||
    cleanName.startsWith("Lk") ||
    cleanName in REACT_TYPE_DOCS
  );
};

const isReactType = (typeName) => {
  const cleanName = typeName.replace(/^React\./, "");
  return cleanName in REACT_TYPE_DOCS;
};

const getReactTypeUrl = (typeName) => {
  const cleanName = typeName.replace(/^React\./, "");
  if (cleanName in REACT_TYPE_DOCS) {
    return REACT_TYPE_DOCS[cleanName];
  }
  reactTypesWithoutDocs.add(typeName);
  return REACT_FALLBACK_URL;
};

const findTypeSourceFile = (typeName, currentSourceFile) => {
  // First check if it's imported in the current file
  const imports = currentSourceFile.getImportDeclarations();
  for (const imp of imports) {
    const namedImports = imp.getNamedImports();
    const hasType = namedImports.some(
      (ni) => ni.getName() === typeName || ni.getAliasNode()?.getText() === typeName
    );
    if (hasType) {
      const moduleSpecifier = imp.getModuleSpecifierValue();
      // Resolve relative imports
      if (moduleSpecifier.startsWith(".")) {
        const currentDir = path.dirname(currentSourceFile.getFilePath());
        return path.resolve(currentDir, moduleSpecifier);
      }
      return moduleSpecifier;
    }
  }

  // Check liftkit/types for global declarations
  const typesFiles = fs.readdirSync(typesRoot).filter((f) => f.endsWith(".d.ts"));
  for (const file of typesFiles) {
    const filePath = path.join(typesRoot, file);
    const typeSource = project.getSourceFile(filePath) ?? project.addSourceFileAtPath(filePath);
    const typeAlias = typeSource?.getTypeAlias(typeName);
    if (typeAlias) {
      return filePath;
    }
  }

  return null;
};

const extractTypeValues = (typeAlias) => {
  const typeNode = typeAlias.getTypeNode();
  if (!typeNode) return [];

  if (Node.isUnionTypeNode(typeNode)) {
    return typeNode
      .getTypeNodes()
      .map((t) => t.getText().replace(/['"]/g, ""))
      .filter(Boolean);
  }

  return [];
};

// const ensureTypePageExists = (typeName) => {
//   const typeDir = path.join(docsTypesRoot, typeName);
//   const pagePath = path.join(typeDir, "page.mdx");

//   if (fs.existsSync(pagePath)) {
//     return; // Already exists
//   }

//   // Find the type definition
//   let typeAlias = null;
//   let sourceFile = null;

//   // Check liftkit/types
//   const typesFiles = fs.readdirSync(typesRoot).filter((f) => f.endsWith(".d.ts"));
//   for (const file of typesFiles) {
//     const filePath = path.join(typesRoot, file);
//     sourceFile = project.getSourceFile(filePath) ?? project.addSourceFileAtPath(filePath);
//     typeAlias = sourceFile?.getTypeAlias(typeName);
//     if (typeAlias) break;
//   }

//   if (!typeAlias) {
//     console.warn(`[Type Links] Could not find type alias for: ${typeName}`);
//     return;
//   }

//   const values = extractTypeValues(typeAlias);

//   fs.mkdirSync(typeDir, { recursive: true });

//   const content = `# ${typeName}

// ${values.length > 0 ? `## Values\n\n${values.map((v) => `- \`${v}\``).join("\n")}` : "Type definition."}
// `;

//   fs.writeFileSync(pagePath, content, "utf8");
//   createdTypePages.add(typeName);
//   console.log(`[Type Links] Created type page: ${typeName}`);
// };

const ensureTypePageExists = (typeName) => {
  const typeDir = path.join(docsTypesRoot, typeName);
  const pagePath = path.join(typeDir, "page.mdx");

  if (fs.existsSync(pagePath)) {
    return; // Already exists
  }

  // Always create the directory
  fs.mkdirSync(typeDir, { recursive: true });

  // Try to find the type definition
  let typeAlias = null;
  let sourceFile = null;

  // Check liftkit/types for type aliases
  const typesFiles = fs.readdirSync(typesRoot).filter((f) => f.endsWith(".d.ts"));
  for (const file of typesFiles) {
    const filePath = path.join(typesRoot, file);
    sourceFile = project.getSourceFile(filePath) ?? project.addSourceFileAtPath(filePath);
    typeAlias = sourceFile?.getTypeAlias(typeName);
    if (typeAlias) break;
  }

  if (!typeAlias) {
    console.warn(`[Type Links] Could not find type alias for: ${typeName}`);
    // Still create a placeholder page
    const content = `# ${typeName}

Type definition placeholder.

*Documentation needed - type alias not found during generation.*
`;
    fs.writeFileSync(pagePath, content, "utf8");
    createdTypePages.add(typeName);
    return;
  }

  // Found the type - extract values
  const values = extractTypeValues(typeAlias);

  const content = `# ${typeName}

${values.length > 0 ? `## Values\n\n${values.map((v) => `- \`${v}\``).join("\n")}` : "Type definition."}
`;

  fs.writeFileSync(pagePath, content, "utf8");
  createdTypePages.add(typeName);
  console.log(`[Type Links] Created type page: ${typeName}`);
};

const getPropTypeTextFromMember = (member, componentName, sourceFile) => {
  const typeNode = member.getTypeNode();
  
  if (!typeNode) {
    const t = member.getType();
    const typeString = t.getText(member, ts.TypeFormatFlags.NoTruncation);
    extractCustomTypes(typeString).forEach((t) => customTypesFound.add(t));
    return { type: typeString, link: null };
  }
  
  let baseTypeNode = typeNode;
  let isOptional = member.hasQuestionToken();
  
  // Strategy 1: Direct type reference (e.g., IconName, LkColorWithOnToken)
  if (Node.isTypeReference(baseTypeNode)) {
    const typeName = baseTypeNode.getText();
    const baseTypeName = typeName.split("<")[0].trim();
    
    extractCustomTypes(typeName).forEach((t) => customTypesFound.add(t));
    
    if (shouldLinkType(baseTypeName)) {
      // Handle React types
      if (isReactType(baseTypeName)) {
        const displayType = isOptional 
          ? `${baseTypeName.replace(/^React\./, "")} | undefined`
          : baseTypeName.replace(/^React\./, "");
        return {
          type: displayType,
          link: getReactTypeUrl(baseTypeName),
        };
      }
      
      // Handle custom types
      const typeSourceFile = findTypeSourceFile(baseTypeName, sourceFile);
      
      // ✅ FIX: Create link even if source file not found (for global types)
      ensureTypePageExists(baseTypeName);
      const displayType = isOptional ? `${baseTypeName} | undefined` : baseTypeName;
      return {
        type: displayType,
        link: `/docs/types/${baseTypeName}`,
      };
    }
  }
  
  // Strategy 2: Union type (e.g., "fill" | "outline" | undefined)
  if (Node.isUnionTypeNode(baseTypeNode)) {
    const typeNodes = baseTypeNode.getTypeNodes();
    const nonUndefinedTypes = typeNodes.filter(t => t.getText() !== "undefined");
    
    if (nonUndefinedTypes.length === 1 && Node.isTypeReference(nonUndefinedTypes[0])) {
      const typeName = nonUndefinedTypes[0].getText();
      const baseTypeName = typeName.split("<")[0].trim();
      
      extractCustomTypes(typeName).forEach((t) => customTypesFound.add(t));
      
      if (shouldLinkType(baseTypeName)) {
        if (isReactType(baseTypeName)) {
          return {
            type: `${baseTypeName.replace(/^React\./, "")} | undefined`,
            link: getReactTypeUrl(baseTypeName),
          };
        }
        
        // ✅ FIX: Create link even if source file not found (for global types)
        ensureTypePageExists(baseTypeName);
        return {
          type: `${baseTypeName} | undefined`,
          link: `/docs/types/${baseTypeName}`,
        };
      }
    }
  }
  
  // Fallback: get expanded type string for inline types
  const t = member.getType();
  const typeString = t.getText(member, ts.TypeFormatFlags.NoTruncation);
  extractCustomTypes(typeString).forEach((t) => customTypesFound.add(t));
  
  return { type: typeString, link: null };
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
      const typeInfo = getPropTypeTextFromMember(member, componentName, sourceFile);
      const required = !member.hasQuestionToken();
      const description = getDescriptionFromJsDocNode(member);
      const defaultValue = getDefaultFromJsDocNode(member);

      return {
        name,
        type: typeInfo.type,
        typeLink: typeInfo.link,
        required,
        description,
        default: defaultValue,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  writePropsTableComponent(componentName, rows);
}

// NEW: Generate type documentation pages for all found custom types
console.log("\n" + "=".repeat(60));
console.log("\n[Type Pages] Generating documentation for custom types...");

for (const typeName of customTypesFound) {
  // Skip if already linked (would have been created by ensureTypePageExists)
  if (createdTypePages.has(typeName)) continue;
  
  // Skip React types
  if (isReactType(typeName)) continue;
  
  // Only process Lk-prefixed types and those in LINKABLE_TYPE_NAMES
  if (!typeName.startsWith("Lk") && !LINKABLE_TYPE_NAMES.has(typeName)) continue;
  
  ensureTypePageExists(typeName);
}

// Console output summary
console.log("\n" + "=".repeat(60));
if (createdTypePages.size > 0) {
  console.log("\n[Type Links] Created new type pages:");
  createdTypePages.forEach((type) => console.log(`  - ${type}`));
}

if (reactTypesWithoutDocs.size > 0) {
  console.log("\n[Type Links] React types without specific doc links:");
  reactTypesWithoutDocs.forEach((type) => console.log(`  - ${type} (fallback: ${REACT_FALLBACK_URL})`));
}

if (skippedTypes.size > 0) {
  console.log("\n[Type Links] Skipped (no type alias found):");
  skippedTypes.forEach((types, component) => {
    console.log(`  ${component}:`);
    types.forEach((type) => console.log(`    - ${type}`));
  });
}

console.log("\nDone.");