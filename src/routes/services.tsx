import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { DEFAULT_SERVICE_DATA } from "@/data/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — eazisols" },
      { name: "description", content: "Software development services from eazisols." },
      { property: "og:title", content: "Services — eazisols" },
      {
        property: "og:description",
        content: "Software, ERP, AI, marketing, and app design services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isServiceDetail =
    pathname.startsWith("/services/") && pathname.length > "/services/".length;

  if (isServiceDetail) {
    return <Outlet />;
  }

  return <ServiceTemplate data={DEFAULT_SERVICE_DATA} />;
}
