import fs from "node:fs";
import path from "node:path";
import { SimpleCodeBlock } from "./simple-code-block";
import { renderDemoSource } from "./demo-source";

const CONTENT_DIR = path.join(process.cwd(), "content", "components");

/**
 * A static example for a component's notes.mdx: the live component, then its
 * source. `file` is relative to content/components, e.g. "button/variants.tsx".
 */
export function Example({ file, children }: { file: string; children: React.ReactNode }) {
  const source = renderDemoSource(fs.readFileSync(path.join(CONTENT_DIR, file), "utf8"));

  return (
    <div className="w-full rounded-xs shadow-2xs overflow-hidden mb-lg">
      <div className="flex py-2xl items-center justify-center border-b border-color-outlinevariant bg-background">
        {children}
      </div>
      <SimpleCodeBlock codeString={source} lang="tsx" vertCenterButton={false} />
    </div>
  );
}
