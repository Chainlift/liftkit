"use client";

import { useEffect, useState } from "react";

let highlighterPromise: Promise<any> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki/bundle/web")
      .then(({ createHighlighter }) =>
        createHighlighter({
          themes: ["github-dark"],
          langs: ["tsx", "css", "bash"],
        })
      )
      .catch((err) => {
        highlighterPromise = null;
        throw err;
      });
  }
  return highlighterPromise;
}

export function useHighlightedCode(code: string | null, lang: string = "tsx") {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    let cancelled = false;

    getHighlighter().then((highlighter) => {
      if (cancelled) return;
      const result = highlighter.codeToHtml(code, { lang, theme: "github-dark" });
      setHtml(result);
    });

    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  return html;
}