"use client";

import { useEffect, useState } from "react";

declare global {
  // eslint-disable-next-line no-var
  var __shikiClientHighlighter: Promise<any> | undefined;
}

function getHighlighter() {
  if (!globalThis.__shikiClientHighlighter) {
    globalThis.__shikiClientHighlighter = import("shiki/bundle/web")
      .then(({ createHighlighter }) =>
        createHighlighter({
          themes: ["github-light", "github-dark"],
          langs: ["tsx", "css", "bash"],
        }),
      )
      .catch((err) => {
        globalThis.__shikiClientHighlighter = undefined;
        throw err;
      });
  }
  return globalThis.__shikiClientHighlighter;
}

export function useHighlightedCode(code: string | null, lang: string = "tsx") {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    let cancelled = false;

    getHighlighter().then((highlighter) => {
      if (cancelled) return;
      const result = highlighter.codeToHtml(code, { lang, themes: { light: "github-light", dark: "github-dark" } });
      setHtml(result);
    });

    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  return html;
}
