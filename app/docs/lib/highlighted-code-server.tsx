import { createHighlighter } from "shiki";

let highlighterPromise: Promise<any> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["ts", "tsx", "css", "bash"],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  language: string = "tsx"
): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, { lang: language, themes: { light: "github-light", dark: "github-dark" } });
}


