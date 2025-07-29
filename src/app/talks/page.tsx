import Talks from "@/markdown/talks.mdx";

export default async function Page() {
  return (
    <div className="font-sans p-8 pb-20 gap-16 sm:p-20">
      <article className="prose dark:prose-invert">
        <h1 className="text-3xl font-bold">Talks</h1>
        <Talks />
      </article>
    </div>
  );
}
