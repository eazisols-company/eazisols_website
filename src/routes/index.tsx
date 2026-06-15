import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Code2, Layers, Palette, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tecaudex — Software Development Agency" },
      { name: "description", content: "Tecaudex builds software, ERP, AI, marketing, and app design solutions." },
      { property: "og:title", content: "Tecaudex — Software Development Agency" },
      { property: "og:description", content: "Reference-aligned digital agency website for Tecaudex." },
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

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-28">
        <div className="absolute left-1/2 top-8 h-64 w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative pb-20">
          <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-brand">Digital product agency</p>
              <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] text-ink md:text-[72px]">Build software that works beautifully.</h1>
              <p className="mt-7 max-w-[560px] text-base leading-relaxed text-ink-soft">We design and develop practical digital products for teams that need clean execution, strong engineering, and a premium user experience.</p>
              <div className="mt-9 flex flex-wrap gap-4"><Link to="/app-cost-calculator" className="btn-brand">Calculate App Cost <ArrowRight className="h-4 w-4" /></Link><Link to="/portfolio" className="btn-ghost">View Portfolio</Link></div>
            </div>
            <div className="min-h-[420px] image-tile-bg" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {["80+|Projects delivered", "10+|Countries served", "370+|Estimates generated", "£2M+|Estimated via calculator"].map((item) => { const [value, label] = item.split("|"); return <div key={item}><div className="text-4xl font-extrabold text-ink">{value}</div><p className="mt-1 text-sm text-ink-soft">{label}</p></div>; })}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="max-w-[700px]"><h2 className="text-4xl font-extrabold text-ink md:text-5xl">Services built around your product goals.</h2><p className="mt-5 text-ink-soft">A closer look at the main capabilities shown across the Tecaudex reference experience.</p></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {services.map((service) => <Link key={service.title} to="/services" className="group min-h-[260px] bg-card p-8 transition hover:bg-surface"><service.icon className="h-9 w-9 text-ink" /><h3 className="mt-8 text-2xl font-extrabold text-ink group-hover:text-brand">{service.title}</h3><p className="mt-4 text-sm leading-relaxed text-ink-soft">{service.text}</p></Link>)}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-5 md:grid-cols-2"><Link to="/app-cost-calculator" className="relative min-h-[180px] overflow-hidden p-7 text-primary-foreground image-tile-bg"><h3 className="text-2xl font-extrabold">App Cost Calculator</h3><p className="absolute bottom-7 left-7 inline-flex items-center gap-2 font-bold">Start calculating <ArrowRight className="h-4 w-4" /></p></Link><a href="#contact" className="relative min-h-[180px] overflow-hidden p-7 text-primary-foreground image-tile-bg"><h3 className="text-2xl font-extrabold">Contact Us</h3><p className="absolute bottom-7 left-7 inline-flex items-center gap-2 font-bold">Get a custom proposal <ArrowRight className="h-4 w-4" /></p></a></div>
      </section>
    </>
  );
}