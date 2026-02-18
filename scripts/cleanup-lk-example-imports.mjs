import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uiDir = path.join(__dirname, '../liftkit/ui');

const componentDirs = fs.readdirSync(uiDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

let cleanedCount = 0;

for (const componentName of componentDirs) {
    const filePath = path.join(uiDir, componentName, 'lk-example.tsx');

    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.trim()) continue;

    let changed = false;

    // Remove unused Base imports
    const baseImportRegex = /import\s+\{[^}]*as\s+Base\w+[^}]*\}\s+from\s+["']@base-ui\/[^"']+["'];?\n/g;
    const matches = content.match(baseImportRegex);

    if (matches) {
        for (const match of matches) {
            const aliasMatch = match.match(/as\s+(Base\w+)/);
            if (aliasMatch) {
                const alias = aliasMatch[1];
                // Check if this alias is used elsewhere in the file
                const usageRegex = new RegExp(`${alias}\\.`, 'g');
                const usages = content.replace(match, '').match(usageRegex);
                if (!usages || usages.length === 0) {
                    content = content.replace(match, '');
                    changed = true;
                }
            }
        }
    }

    // Remove unused styles import
    if (content.includes('import styles from') && !content.includes('styles.')) {
        content = content.replace(/import\s+styles\s+from\s+["'][^"']+\.module\.css["'];?\n/g, '');
        changed = true;
    }

    // Clean up multiple blank lines
    if (content.match(/\n{3,}/)) {
        content = content.replace(/\n{3,}/g, '\n\n');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Cleaned: ${componentName}`);
        cleanedCount++;
    }
}

console.log(`\nCleaned ${cleanedCount} files`);
