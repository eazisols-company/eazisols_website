import { createFileRoute } from "@tanstack/react-router";
import { AppCostCalculatorPage } from "@/components/site/AppCostCalculatorPage";

export const Route = createFileRoute("/app-cost-calculator")({
  head: () => ({
    meta: [
      { title: "App Cost Calculator — eazisols" },
      { name: "description", content: "Estimate the cost to build an app with eazisols." },
    ],
  }),
  component: AppCostCalculatorPage,
});
