import { createFileRoute, redirect } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { getServiceBySlug } from "@/data/services-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const data = getServiceBySlug(params.slug);
    const title = data?.title ?? "Service";
    return {
      meta: [
        { title: `${title} — eazisols` },
        {
          name: "description",
          content: data?.intro ?? "Software development services from eazisols.",
        },
        { property: "og:title", content: `${title} — eazisols` },
        {
          property: "og:description",
          content: data?.intro ?? "Software, ERP, AI, marketing, and app design services.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const data = getServiceBySlug(params.slug);
    if (!data) {
      throw redirect({ to: "/services" });
    }
    return data;
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const loaderData = Route.useLoaderData();
  const data = loaderData ?? getServiceBySlug(slug);

  if (!data) {
    return null;
  }

  return <ServiceTemplate key={slug} data={data} />;
}
