import { highlightCode } from "./highlighted-code-server";
import { RichCodeBlock } from "@/app/docs/lib/rich-code-block";

interface SimpleCodeBlockProps {
  codeString?: string;
  lang?: string;
}

export async function SimpleCodeBlock({ codeString, lang }: SimpleCodeBlockProps) {
  const highlightedCode = codeString ? await highlightCode(codeString, lang) : null;

  if (highlightedCode) {
    return (
      <RichCodeBlock
        preHighlightedCode={highlightedCode}
        codeForClientHighlighting={codeString || ""}
        lang={lang || "tsx"}
        vertCenterButton={true}
      />
    );
  }
}
