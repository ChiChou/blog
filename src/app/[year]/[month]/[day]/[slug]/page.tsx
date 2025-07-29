import { Metadata } from "next";
import { notFound } from "next/navigation";

import { all, get } from "@/app/lib/posts";
import md2html from "@/app/lib/render";

import markdownStyles from "@/app/markdown.module.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type Params = {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await all();
  return posts.map(({ y, m, d, slug }) => ({
    year: y,
    month: m,
    day: d,
    slug: slug,
  }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const { year, month, day, slug } = params;
  const post = await get(year, month, day, slug).catch(() => null);

  if (!post) {
    return notFound();
  }

  const title = `${post.data.title} | CodeColorist`;

  return {
    title,
    openGraph: {
      title,
      images: [post.data.image],
    },
  };
}

export default async function Post({ params }: Params) {
  const p = await params;
  const post = await get(p.year, p.month, p.day, p.slug).catch(() => null);
  if (!post) {
    notFound();
  }

  const html = await md2html(post.content);

  return (
    <div className="font-sans min-h-screen">
      <Header />

      <main className="flex items-center justify-center p-8 pb-20 gap-16 sm:p-20">
        <div className="max-w-2xl w-full prose dark:prose-invert">
          <h1 className="text-3xl font-bold mb-4">{post.data.title}</h1>
          <p className="text-gray-500">{`${p.year}-${p.month}-${p.day}`}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
