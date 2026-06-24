import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/site/PortfolioPage";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — eazisols" },
      { name: "description", content: "Explore selected eazisols portfolio projects." },
      { property: "og:title", content: "Portfolio — eazisols" },
      {
        property: "og:description",
        content: "A grid of digital products and brand work by eazisols.",
      },
    ],
  }),
  component: PortfolioRoutePage,
});

function PortfolioRoutePage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isPortfolioDetail =
    pathname.startsWith("/portfolio/") && pathname.length > "/portfolio/".length;

  if (isPortfolioDetail) {
    return <Outlet />;
  }

  return <PortfolioPage />;
}
