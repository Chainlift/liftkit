import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

export async function highlightCode(code: string, language = "tsx"): Promise<string> {
  console.log(code);

  const options: Options = {
    theme: {
      dark: "synthwave-84",
      light: "github-light",
    },
    keepBackground: false,
  };

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, options)
    .use(rehypeStringify)
    .process(`\`\`\`${language}\n${code}\n\`\`\``);

  return String(file);
}
