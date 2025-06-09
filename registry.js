const fs = require('fs');
const path = require('path');
const url = process.env.CF_PAGES_URL || "https://localhost:3000";

// Configuration
const config = {
  componentsDir: './registry/nextjs/components',
  outputFile: './registry.json',
  libraryDirs: [
    './registry/universal',
    './registry/nextjs/lib',
  ],
  baseDepUrl: `${url}/r/base.json`,
  componentDepUrlPattern: `${url}/r/\${name}.json`,
  dependencies: ["lucide-react", "@material/material-color-utilities", "@csstools/normalize.css"]
};

/**
 * Extract component dependencies from file content
 */
function extractComponentDependencies(fileContent) {
  const regex = /@\/registry\/nextjs\/components\/([a-zA-Z0-9_-]+)/g;
  const deps = new Set();
  let match;

  while ((match = regex.exec(fileContent)) !== null) {
    const depUrl = config.componentDepUrlPattern.replace('${name}', match[1]);
    deps.add(depUrl);
  }

  return Array.from(deps);
}

/**
 * Recursively collect all files in a directory
 */
function getAllFiles(dir, baseDir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, baseDir));
    } else {
      const relPath = path.relative(baseDir, filePath);
      results.push(relPath);
    }
  });

  return results;
}

/**
 * Generate registry entries for components
 */
function generateComponentEntries() {
  const componentDirs = fs.readdirSync(config.componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const entries = componentDirs.map(componentName => {
    const indexPath = path.join(config.componentsDir, componentName, 'index.tsx');
    let additionalDeps = [];

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8');
      additionalDeps = extractComponentDependencies(content);
    }

    return {
      name: componentName,
      type: "registry:block",
      title: `${componentName} Component`,
      description: `A Simple ${componentName} Component`,
      registryDependencies: [
        config.baseDepUrl,
        ...additionalDeps
      ],
      files: [
        {
          path: `registry/nextjs/components/${componentName}/index.tsx`,
          type: "registry:component"
        },
        {
          path: `registry/nextjs/components/${componentName}/${componentName}.css`,
          type: "registry:component"
        }
      ]
    };
  });

  return { componentDirs, entries };
}

/**
 * Generate base library entry with all utility files
 */
function generateBaseLibraryEntry() {
  const files = config.libraryDirs.flatMap(inputDir => {
    const absDir = path.resolve(inputDir);
    const registryPrefix = path.relative(process.cwd(), absDir);

    return getAllFiles(absDir, absDir).map(relPath => ({
      path: `${registryPrefix}/${relPath}`.replace(/\\/g, '/'),
      type: "registry:lib"
    }));
  });

  return {
    name: "base",
    type: "registry:lib",
    title: "base dependencies",
    description: "base dependencies",
    dependencies: config.dependencies,
    files
  };
}

/**
 * Generate a special "all" component that depends on all other components
 */
function generateAllComponentEntry(componentNames) {
  const depUrls = componentNames.map(name =>
    config.componentDepUrlPattern.replace('${name}', name)
  );

  return {
    name: "all",
    type: "registry:block",
    title: "All Components",
    description: "A meta component that links all individual components",
    registryDependencies: [config.baseDepUrl, ...depUrls],
    files: [] // no files, just a virtual meta component
  };
}

/**
 * Main function to generate the registry
 */
function generateRegistry() {
  const { componentDirs, entries: components } = generateComponentEntries();
  const baseLibrary = generateBaseLibraryEntry();
  const allComponent = generateAllComponentEntry(componentDirs);

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "lift kit",
    homepage: "https://liftkit.pages.dev/",
    items: [...components, baseLibrary, allComponent]
  };

  fs.writeFileSync(config.outputFile, JSON.stringify(registry, null, 2));
  console.log(`✅ JSON saved to ${config.outputFile}`);
}

// Execute the generator
generateRegistry();
