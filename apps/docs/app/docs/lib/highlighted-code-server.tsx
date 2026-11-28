import { createHighlighter } from "shiki";

declare global {
  // eslint-disable-next-line no-var
  var __shikiServerHighlighter: Promise<any> | undefined;
}

function getHighlighter() {
  if (!globalThis.__shikiServerHighlighter) {
    globalThis.__shikiServerHighlighter = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["ts", "tsx", "css", "bash"],
    }).catch((err) => {
      globalThis.__shikiServerHighlighter = undefined;
      throw err;
    });
  }
  return globalThis.__shikiServerHighlighter;
}

export async function highlightCode(code: string, language: string = "tsx"): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, { lang: language, themes: { light: "github-light", dark: "github-dark" } });
}
