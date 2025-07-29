import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRewrite from "rehype-rewrite";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

import { addBasePath } from "./env";

import type { Root, Element, RootContent } from 'hast';

function rewrite(node: Root | RootContent, index?: number, parent?: Root | Element): void {
  if (node.type !== "element") return;

  if (node.tagName === "a" && node.properties) {
    const { href } = node.properties as { href?: string };
    if (href?.startsWith("http")) {
      const url = new URL(href);
      if (url.hostname === "www.youtube.com") {
        node.tagName = "iframe";
        node.properties.className = "w-full aspect-video";
        node.properties.src = url.toString();
        node.properties.frameBorder = "0";
        node.properties.allow = `accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`;
        node.properties.allowFullscreen = true;
        delete node.properties.href;
      } else {
        // todo: handle gists.github.com
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    }
  }

  if (node.tagName === "img" && node.properties) {
    const { src } = node.properties as { src?: string };
    if (src && !src.startsWith("http")) {
      node.properties.src = addBasePath(src);
    }
  }
}

export default async function md2html(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRewrite, { rewrite })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}
