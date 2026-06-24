import { createFileRoute } from "@tanstack/react-router";
import { PortfolioDetailPage, PortfolioNotFound } from "@/components/site/PortfolioDetailPage";
import { getPortfolioBySlug } from "@/data/portfolio-data";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const data = getPortfolioBySlug(params.slug);
    const title = data?.title ?? "Project not found";
    return {
      meta: [
        { title: `${title} — eazisols` },
        {
          name: "description",
          content: data?.description ?? "Explore eazisols portfolio projects.",
        },
        { property: "og:title", content: `${title} — eazisols` },
        {
          property: "og:description",
          content: data?.description ?? "Explore eazisols portfolio projects.",
        },
      ],
    };
  },
  loader: ({ params }) => getPortfolioBySlug(params.slug) ?? null,
  component: PortfolioDetailRoutePage,
});

function PortfolioDetailRoutePage() {
  const data = Route.useLoaderData();

  if (!data) {
    return <PortfolioNotFound />;
  }

  return <PortfolioDetailPage item={data} />;
}
