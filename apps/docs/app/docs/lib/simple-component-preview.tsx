"use client";

import { RichCodeBlock } from "@/app/docs/lib/rich-code-block";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import { Tabs, TabsPanel, TabsTab, TabsList, TabsIndicator } from "@/liftkit/component-definitions";

interface SimpleComponentPreviewProps {
  children: React.ReactNode;
  codeString?: string | null;
}

export function SimpleComponentPreview({ children, codeString }: SimpleComponentPreviewProps) {
  return (
    <div className="w-full rounded-xs shadow-2xs overflow-hidden">
      {/* Live Preview */}
      <GoldenBox
        opticalCorrection="y"
        scaleFactor="caption"
        className="bg-surface fill-container border-b border-color-outlinevariant"
      >
        <h2 className="capline color-onsurface">Demo</h2>
      </GoldenBox>
      <div
        className="flex flex-grow py-2xl items-center justify-center border-b border-color-outlinevariant bg-background"
        style={{ height: "400px" }}
      >
        {children}
      </div>

      {/* Code Panel */}
      <div style={{ height: "400px" }}>
        <RichCodeBlock preHighlightedCode={codeString ?? undefined} lang="tsx" />
      </div>
    </div>
  );
}
