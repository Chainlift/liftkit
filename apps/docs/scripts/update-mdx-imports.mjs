import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsComponentsDir = path.join(__dirname, '../app/docs/components');

// Get all component directories
const componentDirs = fs.readdirSync(docsComponentsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

let updatedCount = 0;
let skippedCount = 0;

for (const componentName of componentDirs) {
    const mdxPath = path.join(docsComponentsDir, componentName, 'page.mdx');

    if (!fs.existsSync(mdxPath)) {
        continue;
    }

    let content = fs.readFileSync(mdxPath, 'utf8');

    // Skip if no Example*2 pattern
    if (!content.includes('Example') || !content.includes('2')) {
        skippedCount++;
        continue;
    }

    // Get component name in PascalCase
    const pascalName = componentName
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');

    const newDemoName = `${pascalName}Demo`;

    // Pattern 1: import ExampleXxx, { ExampleXxx2 } from "@/liftkit/component-definitions/xxx/example";
    const importPattern1 = new RegExp(
        `import\\s+Example\\w+,\\s*\\{\\s*Example\\w+2\\s*\\}\\s*from\\s*["']@/liftkit/component-definitions/${componentName}/example["'];?`,
        'g'
    );

    if (importPattern1.test(content)) {
        content = content.replace(
            importPattern1,
            `import ${newDemoName} from "@/liftkit/component-definitions/${componentName}/lk-example";`
        );
    }

    // Pattern 2: import { ExampleXxx2 } from "@/liftkit/component-definitions/xxx/example";
    const importPattern2 = new RegExp(
        `import\\s*\\{\\s*Example\\w+2\\s*\\}\\s*from\\s*["']@/liftkit/component-definitions/${componentName}/example["'];?`,
        'g'
    );

    if (importPattern2.test(content)) {
        content = content.replace(
            importPattern2,
            `import ${newDemoName} from "@/liftkit/component-definitions/${componentName}/lk-example";`
        );
    }

    // Replace component usage: <ExampleXxx2 /> with <XxxDemo />
    const usagePattern = /Example\w+2/g;
    content = content.replace(usagePattern, newDemoName);

    // Remove old <ExampleXxx /> usage if it exists (the Base UI variant)
    // Match: <ExampleXxx /> or <ExampleXxx></ExampleXxx>
    const oldUsagePattern = new RegExp(`<Example${pascalName}\\s*\\/?>(?:[\\s\\S]*?<\\/Example${pascalName}>)?`, 'g');
    content = content.replace(oldUsagePattern, '');

    // Clean up multiple blank lines
    content = content.replace(/\n{3,}/g, '\n\n');

    fs.writeFileSync(mdxPath, content, 'utf8');
    console.log(`✓ Updated: ${componentName}`);
    updatedCount++;
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Updated: ${updatedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
console.log(`${'='.repeat(60)}`);
