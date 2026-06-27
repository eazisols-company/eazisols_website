import { createFileRoute } from "@tanstack/react-router";

import { BlogDetailPage, BlogNotFound } from "@/components/site/BlogDetailPage";
import { getBlogBySlug } from "@/data/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const data = getBlogBySlug(params.slug);
    const title = data?.title ?? "Blog not found";
    return {
      meta: [
        { title: `${title} — eazisols` },
        {
          name: "description",
          content: data?.excerpt ?? "Read articles on software, ERP, AI, and digital growth.",
        },
        { property: "og:title", content: `${title} — eazisols` },
        {
          property: "og:description",
          content: data?.excerpt ?? "Read articles on software, ERP, AI, and digital growth.",
        },
      ],
    };
  },
  loader: ({ params }) => getBlogBySlug(params.slug) ?? null,
  component: BlogDetailRoutePage,
});

function BlogDetailRoutePage() {
  const data = Route.useLoaderData();

  if (!data) {
    return <BlogNotFound />;
  }

  return <BlogDetailPage post={data} />;
}
