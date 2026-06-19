import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Code2, Layers, Palette, Sparkles } from "lucide-react";
import { Contact } from "@/components/site/Contact";
import { LogoSlider } from "@/components/LogoSlider";
import { DiscoveryCall } from "@/components/site/DiscoveryCall";
import { TestimonialSection } from "@/components/site/TestimonialSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ChallengesSection } from "@/components/site/ChallengesSection";
// import Statics from "@/components/site/Statics";
import { BarChart } from "@/components/site/BarChat";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eazisols — Software Development Agency" },
      {
        name: "description",
        content: "Eazisols builds software, ERP, AI, marketing, and app design solutions.",
      },
      { property: "og:title", content: "Eazisols — Software Development Agency" },
      {
        property: "og:description",
        content: "Reference-aligned digital agency website for Eazisols.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Custom web apps, mobile apps, enterprise software, and scalable digital products.",
    slug: "custom-web-app-development",
    bg: "benefit-sky",
  },
  {
    icon: Layers,
    title: "ERP Solutions",
    text: "Odoo ERP, custom ERP development, migrations, and workflow automation.",
    slug: "odoo-erp-solutions",
    bg: "benefit-blue",
  },
  {
    icon: Brain,
    title: "AI/ML Services",
    text: "Agentic AI, generative AI, RAG systems, AI chatbots, and automation services.",
    slug: "ai-app-development",
    bg: "benefit-violet",
  },
  {
    icon: Sparkles,
    title: "Kick-Off Marketing",
    text: "Social media marketing, performance marketing, graphic editing, and video editing.",
    slug: "social-media-marketing",
    bg: "benefit-cream",
  },
  {
    icon: Palette,
    title: "App Designing",
    text: "App prototyping, design audits, illustrations, brand guidelines, and design systems.",
    slug: "app-prototyping",
    bg: "benefit-mint",
  },
] as const;

function Hero() {
  return (
    <section id="contact" className="relative overflow-hidden pt-12 md:pt-20">
      <div className="absolute left-1/2 top-8 h-64 w-[720px] -translate-x-1/2 rounded-full bg-[#418ed6]/8 blur-3xl" />
      <div className="container-page relative pb-20 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <h1 className="text-5xl font-extrabold leading-[0.98] text-[#418ed6] md:text-[72px]">
              Your Technology
              <br />
              <span className="text-[#418ed6]">Partner</span>{" "}
              <span className="text-ink-soft">for AI</span>
              <br />
              <span className="text-ink-soft">&amp; Digital Growth</span>
              {/* <br />
              <span className="text-ink-soft"></span> */}
            </h1>
          </div>
          <Contact />
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <LogoSlider />

      {/* <section className="bg-surface py-12">
        <div className="container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {["80+|Projects delivered", "10+|Countries served", "370+|Estimates generated", "£2M+|Estimated via calculator"].map((item) => { const [value, label] = item.split("|"); return <div key={item}><div className="text-4xl font-extrabold text-ink">{value}</div><p className="mt-1 text-sm text-ink-soft">{label}</p></div>; })}
        </div>
      </section> */}

      <section className="container-page py-14">
        <div className="max-w-[700px]">
          <h2 className="text-4xl font-bold text-ink md:text-5xl">
            Services built around your product goals.
          </h2>
          <p className="mt-5 text-ink-soft">
            A closer look at the main capabilities shown across the eazisols reference experience.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className={`group flex min-h-[190px] cursor-pointer flex-col rounded-2xl border border-border/50 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-[0_8px_24px_-8px_rgb(0_0_0_/_0.12)] md:min-h-[200px] md:p-6 ${service.bg}`}
            >
              <service.icon className="h-7 w-7 shrink-0 text-ink" />
              <h3 className="mt-4 text-lg font-bold text-ink transition-colors group-hover:text-brand md:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <ProcessTimeline />
      <ChallengesSection />
      {/* <Statics /> */}
      <BarChart />
      <TestimonialSection />
      <DiscoveryCall />
      <CTASection />
    </>
  );
}
