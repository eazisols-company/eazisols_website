import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate, type ServiceTemplateData } from "@/components/site/ServiceTemplate";
import { SERVICE_HERO_CONTENT, SERVICE_HERO_IMAGES } from "@/data/services-hero-slides";

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

const data: ServiceTemplateData = {
  title: "Custom ERP Development",
  hero: {
    content: SERVICE_HERO_CONTENT,
    images: SERVICE_HERO_IMAGES,
  },
  breadcrumb: ["ERP Development", "Custom ERP Development"],
  intro:
    "Our custom ERP development services are built around how your business actually works. We design and deliver ERP platforms that consolidate processes, simplify reporting, and give teams a single, reliable source of truth across departments — from finance and operations to sales and customer success.",
  blackBand: {
    title: "ERP Implementation, Migration and Cloud Deployment Services",
    body: "We deliver end-to-end ERP implementation, migration, and cloud deployment programs that move your business from legacy systems to modern, scalable platforms with minimal disruption. From planning and architecture to data migration, integrations, and rollout, our team owns the entire lifecycle so your ERP investment pays back faster.",
    linkLabel: "ERP implementation and cloud deployment",
    linkHref: "#",
    afterLink:
      "expertise, you get a partner that understands the full lifecycle of enterprise systems and can plan, configure, and operate them with confidence.",
  },
  splitBlue: {
    title: "Industry-Specific ERP Solutions for Enhanced Efficiency",
    body: "Every industry has its own workflows, regulations, and KPIs. We build ERP solutions tailored to manufacturing, retail, logistics, healthcare, and professional services — so the platform reflects how your industry actually operates and where the biggest efficiency gains live.",
  },
  blueGradient: {
    left: {
      title: "ERP Software Development Services for Business Process Automation",
      body: "We design and build ERP software that automates repetitive workflows, removes silos between teams, and keeps your data clean and connected. The result is fewer manual handoffs, faster decisions, and operations that scale without adding headcount. We design and build ERP software that automates repetitive workflows, removes silos between teams, and keeps your data clean and connected. The result is fewer manual handoffs, faster decisions, and operations that scale without adding headcount.We design and build ERP software that automates repetitive workflows, removes silos between teams, and keeps your data clean and connected. The result is fewer manual handoffs, faster decisions, and operations that scale without adding headcount.We design and build ERP software that automates repetitive workflows, removes silos between teams, and keeps your data clean and connected. The result is fewer manual handoffs, faster decisions, and operations that scale without adding headcount.",
    },
    right: {
      title: "Custom ERP Software Development Services for Business Solutions",
      body: "Whether you need a full ERP suite or a focused module that plugs into existing systems, our team ships secure, maintainable, and well-documented software designed around your business — not a generic template.",
    },
  },
};

function ServicesPage() {
  return <ServiceTemplate data={data} />;
}
