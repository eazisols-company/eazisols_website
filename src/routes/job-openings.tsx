import { createFileRoute } from "@tanstack/react-router";
import { JobOpeningsPage } from "@/components/site/JobOpeningsPage";

export const Route = createFileRoute("/job-openings")({
  head: () => ({
    meta: [
      { title: "Job Openings — eazisols" },
      {
        name: "description",
        content: "Search and apply for open roles at eazisols.",
      },
      { property: "og:title", content: "Job Openings — eazisols" },
      {
        property: "og:description",
        content: "Find your role at eazisols and apply for open positions.",
      },
    ],
  }),
  component: JobOpeningsPage,
});
