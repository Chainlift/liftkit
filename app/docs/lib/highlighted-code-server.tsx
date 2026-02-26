// import { unified } from "unified";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import rehypeStringify from "rehype-stringify";
// import rehypePrettyCode, { type Options } from "rehype-pretty-code";

// export async function highlightCode(code: string, language = "tsx"): Promise<string> {
//   console.log(code);

//   const options: Options = {
//     theme: {
//       dark: "github-dark",
//       light: "github-light",
//     },
//     keepBackground: false,
//   };

//   const file = await unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypePrettyCode, options)
//     .use(rehypeStringify)
//     .process(`\`\`\`${language}\n${code}\n\`\`\``);

//   return String(file);
// }

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


