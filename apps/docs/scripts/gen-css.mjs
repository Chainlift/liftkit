import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const docsComponentsDir = path.join(projectRoot, 'app', 'docs', 'components');
const liftkitUiDir = path.join(projectRoot, 'liftkit', 'ui');

function escapeForJSX(code) {
    // Escape backticks and ${} for template literal safety
    return code
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');
}

function generateLocalCssSample(componentName, sourceCode) {
    const escapedCode = escapeForJSX(sourceCode);

    return `export function LocalCssSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{\`${escapedCode}\`}</code>
    </pre>
  );
}
`;
}

function processComponents() {
    // Check if docs components directory exists
    if (!fs.existsSync(docsComponentsDir)) {
        console.error(`Docs components directory not found: ${docsComponentsDir}`);
        process.exit(1);
    }

    // Read all directories in docs/components
    const componentDirs = fs.readdirSync(docsComponentsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    console.log(`Found ${componentDirs.length} component directories in docs/components`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    componentDirs.forEach(componentName => {
        const cssPath = path.join(liftkitUiDir, componentName, `${componentName}.css`);
        const outputPath = path.join(docsComponentsDir, componentName, 'example-css.tsx');

        // Check if component.css exists
        if (!fs.existsSync(cssPath)) {
            console.log(`⚠️  Skipping ${componentName}: ${componentName}.css not found`);
            skipCount++;
            return;
        }

        try {
            // Read the source code
            const sourceCode = fs.readFileSync(cssPath, 'utf-8');

            // Skip empty files
            if (!sourceCode.trim()) {
                console.log(`⚠️  Skipping ${componentName}: ${componentName}.css is empty`);
                skipCount++;
                return;
            }

            // Generate the LocalCssSample component
            const outputContent = generateLocalCssSample(componentName, sourceCode);

            // Write to example-css.tsx
            fs.writeFileSync(outputPath, outputContent, 'utf-8');

            console.log(`✅ Generated example-css.tsx for ${componentName}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Error processing ${componentName}:`, error.message);
            errorCount++;
        }
    });

    console.log('\n--- Summary ---');
    console.log(`✅ Successfully generated: ${successCount}`);
    console.log(`⚠️  Skipped: ${skipCount}`);
    console.log(`❌ Errors: ${errorCount}`);
}

// Run the script
processComponents();