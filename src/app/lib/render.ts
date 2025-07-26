import { remark } from "remark";
import rehypeHighlight from "rehype-highlight";
import html from "remark-html";

export default async function md2html(markdown: string) {
  const result = await remark()
    .use(rehypeHighlight)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
