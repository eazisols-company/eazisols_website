import { createFileRoute } from "@tanstack/react-router";
import { JobOpeningDetailPage } from "@/components/site/JobOpeningDetailPage";

export const Route = createFileRoute("/job-opening/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Job Opening — eazisols` },
      {
        name: "description",
        content: `View job opening details and apply for role ${params.id} at eazisols.`,
      },
    ],
  }),
  component: JobOpeningRoutePage,
});

function JobOpeningRoutePage() {
  const { id } = Route.useParams();
  return <JobOpeningDetailPage jobId={id} />;
}
