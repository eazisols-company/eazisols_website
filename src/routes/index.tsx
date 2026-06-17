import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Code2, Layers, Palette, Sparkles } from "lucide-react";
import { Contact } from "@/components/site/Contact";
import { DiscoveryCall } from "@/components/site/DiscoveryCall";
import { TestimonialSection } from "@/components/site/TestimonialSection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ChallengesSection } from "@/components/site/ChallengesSection";
import Statics from "@/components/site/Statics";
import { BarChart } from "@/components/site/BarChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eazisols — Software Development Agency" },
      { name: "description", content: "Eazisols builds software, ERP, AI, marketing, and app design solutions." },
      { property: "og:title", content: "Eazisols — Software Development Agency" },
      { property: "og:description", content: "Reference-aligned digital agency website for Eazisols." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Software Development", text: "Custom web apps, mobile apps, enterprise software, and scalable digital products." },
  { icon: Layers, title: "ERP Solutions", text: "Odoo ERP, custom ERP development, migrations, and workflow automation." },
  { icon: Brain, title: "AI/ML Services", text: "Agentic AI, generative AI, RAG systems, AI chatbots, and automation services." },
  { icon: Sparkles, title: "Kick-Off Marketing", text: "Social media marketing, performance marketing, graphic editing, and video editing." },
  { icon: Palette, title: "App Designing", text: "App prototyping, design audits, illustrations, brand guidelines, and design systems." },
];

function Hero() {
  return (
    <section id="contact" className="relative overflow-hidden pt-12 pl-16 pr-16 md:pt-20">
      <div className="absolute left-1/2 top-8 h-64 w-[720px] -translate-x-1/2 rounded-full bg-[#418ed6]/8 blur-3xl" />
      <div className="container-page relative pb-20 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <h1 className="text-5xl font-extrabold leading-[0.98] text-[#418ed6] md:text-[72px]">
              Your
              <br />
              Technology
              <br />
              <span className="text-[#418ed6]">Partner</span>{" "}
              <span className="text-ink-soft">for AI</span>
              <br />
              <span className="text-ink-soft">&amp; Digital</span>
              <br />
              <span className="text-ink-soft">Growth</span>
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
      

      <section className="bg-surface py-12">
        <div className="container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {["80+|Projects delivered", "10+|Countries served", "370+|Estimates generated", "£2M+|Estimated via calculator"].map((item) => { const [value, label] = item.split("|"); return <div key={item}><div className="text-4xl font-extrabold text-ink">{value}</div><p className="mt-1 text-sm text-ink-soft">{label}</p></div>; })}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="max-w-[700px]"><h2 className="text-4xl font-extrabold text-ink md:text-5xl">Services built around your product goals.</h2><p className="mt-5 text-ink-soft">A closer look at the main capabilities shown across the eazisols reference experience.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {services.map((service) => <Link key={service.title} to="/services" className="group min-h-[260px] bg-card p-8 transition hover:bg-surface"><service.icon className="h-9 w-9 text-ink" /><h3 className="mt-8 text-2xl font-extrabold text-ink group-hover:text-brand">{service.title}</h3><p className="mt-4 text-sm leading-relaxed text-ink-soft">{service.text}</p></Link>)}
        </div>
      </section>
      <ProcessTimeline />
      <ChallengesSection />
      <Statics  />
      <BarChart />
      <TestimonialSection />

      <DiscoveryCall />

      <section className="container-page pb-24">
        <div className="grid gap-5 md:grid-cols-2"><Link to="/app-cost-calculator" className="relative min-h-[180px] overflow-hidden p-7 text-primary-foreground image-tile-bg"><h3 className="text-2xl font-extrabold">App Cost Calculator</h3><p className="absolute bottom-7 left-7 inline-flex items-center gap-2 font-bold">Start calculating <ArrowRight className="h-4 w-4" /></p></Link><a href="#contact" className="relative min-h-[180px] overflow-hidden p-7 text-primary-foreground image-tile-bg"><h3 className="text-2xl font-extrabold">Contact Us</h3><p className="absolute bottom-7 left-7 inline-flex items-center gap-2 font-bold">Get a custom proposal <ArrowRight className="h-4 w-4" /></p></a></div>
      </section>
    </>
  );
}