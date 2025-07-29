import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import Talks from "@/markdown/talks.mdx";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default async function Page() {
  return (
    <div className="font-sans min-h-screen">
      <Header />

      <div className="container mx-auto max-md:px-10">
        <Breadcrumb className="my-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Talks</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <article className="prose dark:prose-invert mx-auto max-md:px-10">
        <Talks />
      </article>

      <Footer />
    </div>
  );
}
