import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uiDir = path.join(__dirname, '../liftkit/ui');

// Get all lk-example.tsx files
const componentDirs = fs.readdirSync(uiDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

let processedCount = 0;
let skippedCount = 0;

for (const componentName of componentDirs) {
    const filePath = path.join(uiDir, componentName, 'lk-example.tsx');

    if (!fs.existsSync(filePath)) {
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip empty files
    if (!content.trim()) {
        console.log(`Skipped (empty): ${componentName}`);
        skippedCount++;
        continue;
    }

    // Skip if no Example*2 pattern
    if (!content.match(/export\s+function\s+Example\w+2/)) {
        console.log(`Skipped (no Example2): ${componentName}`);
        skippedCount++;
        continue;
    }

    // Get component name in PascalCase
    const pascalName = componentName
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');

    // Step 1: Remove the first exported function (the one using Base primitives)
    // This matches: export default function ExampleXxx() { ... }
    // We need to find the matching closing brace
    const defaultExportMatch = content.match(/export\s+default\s+function\s+\w+\([^)]*\)\s*\{/);

    if (defaultExportMatch) {
        let braceCount = 0;
        let inFunction = false;
        let startIndex = defaultExportMatch.index;
        let endIndex = -1;

        for (let i = startIndex; i < content.length; i++) {
            if (content[i] === '{') {
                braceCount++;
                inFunction = true;
            } else if (content[i] === '}') {
                braceCount--;
                if (inFunction && braceCount === 0) {
                    endIndex = i + 1;
                    break;
                }
            }
        }

        if (endIndex > -1) {
            // Remove the default export function and any blank lines after
            const beforeFunction = content.substring(0, startIndex);
            const afterFunction = content.substring(endIndex);
            content = beforeFunction + afterFunction.replace(/^\n+/, '\n\n');
        }
    }

    // Step 2: Find and rename Example*2 to *Demo and make it default export
    const example2Regex = /export\s+function\s+(Example\w+2)\s*\(/;
    const match = content.match(example2Regex);

    if (match) {
        const oldName = match[1];
        const newName = `${pascalName}Demo`;

        // Replace the function declaration
        content = content.replace(
            new RegExp(`export\\s+function\\s+${oldName}\\s*\\(`, 'g'),
            `export default function ${newName}(`
        );

        console.log(`✓ Processed: ${componentName} (${oldName} → ${newName})`);
        processedCount++;
    } else {
        console.log(`✗ Failed to find Example2 in: ${componentName}`);
        skippedCount++;
        continue;
    }

    // Step 3: Remove any imports that are only used by the removed function
    // Remove Base imports if they're no longer used
    const baseImportRegex = /import\s+\{[^}]*\}\s+from\s+["']@base-ui\/react\/\w+["'];?\n/g;
    const baseAliasRegex = /import\s+\{[^}]+as\s+Base\w+[^}]*\}\s+from\s+["']@base-ui\/react\/\w+["'];?\n/g;

    // Check if Base* is still used in the content
    if (!content.includes('Base') && !content.match(/from\s+["']@base-ui/)) {
        content = content.replace(baseImportRegex, '');
        content = content.replace(baseAliasRegex, '');
    }

    // Remove unused styles import if no longer referenced
    if (!content.includes('styles.')) {
        content = content.replace(/import\s+styles\s+from\s+["'][^"']+["'];?\n/g, '');
    }

    // Clean up multiple blank lines
    content = content.replace(/\n{3,}/g, '\n\n');

    // Write back to file
    fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Processed: ${processedCount} files`);
console.log(`Skipped: ${skippedCount} files`);
console.log(`${'='.repeat(60)}`);
