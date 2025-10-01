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
 * Only handles @ imports to OTHER components (not local files)
 */
function extractComponentDependencies(fileContent, currentComponentName) {
  const deps = new Set();

  // Remove comments before parsing
  const contentWithoutComments = fileContent
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  // Pattern 1: Direct @ imports to other components
  // e.g., import { Button } from "@/registry/nextjs/components/button"
  const atImportRegex = /@\/registry\/nextjs\/components\/([a-zA-Z0-9_-]+)/g;
  let match;

  while ((match = atImportRegex.exec(contentWithoutComments)) !== null) {
    const componentName = match[1];
    // Don't add self-dependency
    if (componentName !== currentComponentName) {
      const depUrl = config.componentDepUrlPattern.replace('${name}', componentName);
      deps.add(depUrl);
    }
  }

  // Pattern 2: General @ imports that might reference components
  // e.g., import { SomeComponent } from "@/components/some-component"
  const generalAtImportRegex = /import\s+[^'"]*\s+from\s+['"]@\/(?:registry\/nextjs\/)?components\/([a-zA-Z0-9_-]+)['"]/g;

  while ((match = generalAtImportRegex.exec(contentWithoutComments)) !== null) {
    const potentialComponentName = match[1];
    // Check if this component exists in our components directory
    const componentPath = path.join(config.componentsDir, potentialComponentName);
    if (fs.existsSync(componentPath) && potentialComponentName !== currentComponentName) {
      const depUrl = config.componentDepUrlPattern.replace('${name}', potentialComponentName);
      deps.add(depUrl);
    }
  }

  // Pattern 3: Dynamic imports to components
  const dynamicImportRegex = /import\(['"]@\/(?:registry\/nextjs\/)?components\/([a-zA-Z0-9_-]+)['"]\)/g;

  while ((match = dynamicImportRegex.exec(contentWithoutComments)) !== null) {
    const componentName = match[1];
    if (componentName !== currentComponentName) {
      const depUrl = config.componentDepUrlPattern.replace('${name}', componentName);
      deps.add(depUrl);
    }
  }

  return Array.from(deps);
}

/**
 * Extract all local files that should be included with the component
 * This now includes ALL neighboring files, not just explicitly imported ones
 */
function extractLocalFiles(fileContent, componentDir, componentName) {
  const importedFiles = new Set();

  // Remove comments before parsing imports
  const contentWithoutComments = fileContent
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  // First, find explicitly imported files
  // Pattern 1: Relative imports with 'from' (./filename)
  const relativeImportRegex = /import\s+[^'"]*\s+from\s+['"]\.\/([^'"\/]+)['"]/g;
  let match;

  while ((match = relativeImportRegex.exec(contentWithoutComments)) !== null) {
    const importPath = match[1];
    // Add file extension if not present
    const possibleExtensions = ['', '.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.less'];

    for (const ext of possibleExtensions) {
      const fullPath = path.join(componentDir, importPath + ext);
      if (fs.existsSync(fullPath)) {
        const fileName = path.basename(fullPath);
        if (fileName !== 'index.tsx') {
          importedFiles.add(fileName);
        }
        break;
      }
    }
  }

  // Pattern 2: CSS imports without 'from' (import "./style.css")
  const cssImportRegex = /import\s+['"]\.\/([^'"\/]+\.(?:css|scss|less))['"]/g;
  while ((match = cssImportRegex.exec(contentWithoutComments)) !== null) {
    const fileName = path.basename(match[1]);
    importedFiles.add(fileName);
  }

  // Pattern 3: Other import patterns (export from, etc.)
  const exportFromRegex = /export\s+[^'"]*\s+from\s+['"]\.\/([^'"\/]+)['"]/g;
  while ((match = exportFromRegex.exec(contentWithoutComments)) !== null) {
    const importPath = match[1];
    const possibleExtensions = ['', '.ts', '.tsx', '.js', '.jsx'];

    for (const ext of possibleExtensions) {
      const fullPath = path.join(componentDir, importPath + ext);
      if (fs.existsSync(fullPath)) {
        const fileName = path.basename(fullPath);
        if (fileName !== 'index.tsx') {
          importedFiles.add(fileName);
        }
        break;
      }
    }
  }

  // NEW: Also include ALL neighboring files that look like they belong to the component
  // This ensures we don't miss any files that should be included
  if (fs.existsSync(componentDir)) {
    const allFiles = fs.readdirSync(componentDir);

    for (const file of allFiles) {
      const filePath = path.join(componentDir, file);
      const stat = fs.statSync(filePath);

      // Skip directories and the index file itself
      if (stat.isDirectory() || file === 'index.tsx') {
        continue;
      }

      // Include common file types that are likely part of the component
      const isComponentFile = /\.(tsx?|jsx?|css|scss|less|json|md)$/i.test(file);

      // Skip common non-component files
      const isIgnoredFile = /^(\.|package\.json|tsconfig\.json|\.gitignore|README\.md)/.test(file);

      if (isComponentFile && !isIgnoredFile) {
        importedFiles.add(file);
      }
    }
  }

  return Array.from(importedFiles);
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
    const componentDir = path.join(config.componentsDir, componentName);
    const indexPath = path.join(componentDir, 'index.tsx');
    let additionalDeps = [];
    let importedFiles = [];

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8');
      additionalDeps = extractComponentDependencies(content, componentName);
      importedFiles = extractLocalFiles(content, componentDir, componentName);

      // Compact logging
      console.log(`🔍 ${componentName}: ${additionalDeps.length} deps, ${importedFiles.length} files [${importedFiles.join(', ')}]`);
    } else {
      // Even without index.tsx, we should include other files in the directory
      if (fs.existsSync(componentDir)) {
        const allFiles = fs.readdirSync(componentDir).filter(file => {
          const stat = fs.statSync(path.join(componentDir, file));
          return !stat.isDirectory() && /\.(tsx?|jsx?|css|scss|less)$/i.test(file);
        });
        importedFiles = allFiles;
      }
      console.warn(`⚠️  ${componentName}: No index.tsx, including ${importedFiles.length} files [${importedFiles.join(', ')}]`);
    }

    // Build files array starting with the index file (if it exists)
    const files = [];

    if (fs.existsSync(indexPath)) {
      files.push({
        path: `registry/nextjs/components/${componentName}/index.tsx`,
        type: "registry:component"
      });
    }

    // Add all imported/neighboring files
    importedFiles.forEach(fileName => {
      files.push({
        path: `registry/nextjs/components/${componentName}/${fileName}`,
        type: "registry:component"
      });
    });

    return {
      name: componentName,
      type: "registry:block",
      title: `${componentName} Component`,
      description: `A Simple ${componentName} Component`,
      registryDependencies: [
        config.baseDepUrl,
        ...additionalDeps
      ],
      files
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
  console.log('🚀 Generating component registry...');

  const { componentDirs, entries: components } = generateComponentEntries();
  const baseLibrary = generateBaseLibraryEntry();
  const allComponent = generateAllComponentEntry(componentDirs);

  console.log(`📦 Found ${componentDirs.length} components: ${componentDirs.join(', ')}`);

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "lift kit",
    homepage: "https://liftkit.pages.dev/",
    items: [...components, baseLibrary, allComponent]
  };

  fs.writeFileSync(config.outputFile, JSON.stringify(registry, null, 2));
  console.log(`✅ Registry saved to ${config.outputFile}`);
  console.log(`📊 Generated ${registry.items.length} total items (${components.length} components + base + all)`);
}

// Execute the generator
generateRegistry();
