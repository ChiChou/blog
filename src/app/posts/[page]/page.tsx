import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

import { all } from "@/app/lib/posts";

const perPage = 9;

export async function generateStaticParams() {
  const posts = await all();
  const pages = Math.ceil(posts.length / perPage);
  return Array.from({ length: pages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

type Params = {
  params: Promise<{
    page: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { page } = await props.params;
  const title = `All Posts, Page ${page} | CodeColorist`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export default async function Page({ params }: Params) {
  const p = await params;
  const page = parseInt(p.page, 10);

  const posts = await all();
  const max = Math.ceil(posts.length / perPage);
  if (isNaN(page) || page < 1 || page > max + 1) {
    notFound();
  }

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedPosts = posts.slice(start, end);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-3xl font-bold">Posts - Page {page}</h1>
      <div className="max-w-2xl w-full prose prose-invert">
        <ul>
          {paginatedPosts.map((post) => (
            <li key={post.slug} className="mb-6">
              <Link
                href={`/${post.y}/${post.m}/${post.d}/${post.slug}`}
                className="mb-4 hover:underline"
              >
                <h2 className="inline-block">{post.data.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <ol className="flex justify-center gap-4">
          {Array.from({ length: max }, (_, i) => (
            <li key={i + 1}>
              <Link
                href={`/posts/${i + 1}`}
                className={`px-4 py-2 rounded ${
                  i + 1 === page ? "bg-blue-500 text-white" : "bg-gray-200"
                } hover:bg-blue-400`}
              >
                {i + 1}
              </Link>
            </li>
          ))}
        </ol>
      </footer>
    </div>
  );
}
