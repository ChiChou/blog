import fs from "fs";
import path from "path";

import matter from "gray-matter";

const root = ".";
const postsDir = path.join(root, "_posts");

// filename: `YYYY-MM-DD-slug.md`
// example: `2024-01-15-first-post.md`

async function read(file: string) {
  const filePath = path.join(postsDir, file);
  const fileContent = await fs.promises.readFile(filePath, "utf-8");
  return {
    y: file.slice(0, 4),
    m: file.slice(5, 7),
    d: file.slice(8, 10),
    slug: file.replace(/\.md$/, "").slice(11),
    ...matter(fileContent),
  };
}

export async function all() {
  const list = await fs.promises.readdir(postsDir);
  const posts = await Promise.all(
    list.filter((f) => f.endsWith("md")).map(read),
  );

  return posts
    .filter((post) => post.data?.published !== false)
    .sort((a, b) => {
      const dateA = new Date(`${a.y}-${a.m}-${a.d}`);
      const dateB = new Date(`${b.y}-${b.m}-${b.d}`);
      return dateB.getTime() - dateA.getTime();
    });
}

export async function get(y: string, m: string, d: string, slug: string) {
  return read(`${y}-${m}-${d}-${slug}.md`);
}
