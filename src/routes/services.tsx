import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, Lightbulb, Palette, Rocket, Settings2, Sparkles, UsersRound } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tecaudex" },
      { name: "description", content: "Software development services from Tecaudex." },
      { property: "og:title", content: "Services — Tecaudex" },
      { property: "og:description", content: "Software, ERP, AI, marketing, and app design services." },
    ],
  }),
  component: ServicesPage,
});

const process = [
  ["01", "Discovery", "Define goals, scope, user needs, and technical direction before development begins."],
  ["02", "UX/UI Design", "Design polished product flows, interfaces, and prototypes aligned to your business goals."],
  ["03", "Frontend Coding", "Turn approved designs into responsive, accessible, and production-grade interfaces."],
  ["04", "Backend Coding", "Build APIs, databases, integrations, dashboards, and secure backend workflows."],
  ["05", "Testing & debugging", "Run quality checks across screens, devices, browsers, and core product flows."],
  ["06", "Vendor Launch", "Deploy, monitor, and support the product after launch with a practical handover."],
];

function ServicesPage() {
  return (
    <>
      <Hero />
      <Process />
      <SoftwareDevelopment />
      <FeatureCards />
      <Expectations />
      <ServiceCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[360px] overflow-hidden image-tile-bg md:min-h-[430px]">
      <div className="absolute inset-0 bg-ink/30" />
      <div className="container-page relative flex min-h-[360px] items-center md:min-h-[430px]">
        <div className="max-w-[390px] text-primary-foreground">
          <h1 className="text-5xl font-extrabold leading-[0.95] md:text-6xl">Software Development Services</h1>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/85">Transform your ideas into scalable, secure, and user-focused software solutions.</p>
          <div className="mt-7 flex gap-3"><a href="#start" className="btn-brand">Book a Free Call</a><Link to="/app-cost-calculator" className="inline-flex items-center rounded-full border border-primary-foreground/60 px-5 py-3 text-sm font-bold">Cost Calculator</Link></div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container-page py-28">
      <div className="mx-auto max-w-[940px]">
        <h2 className="text-xl font-extrabold text-ink">Our Process</h2>
        <div className="mt-8 divide-y divide-border">
          {process.map(([num, title, text]) => <div key={num} className="grid gap-8 py-5 md:grid-cols-[70px_230px_minmax(0,1fr)]"><span className="text-sm text-ink-soft">{num}</span><h3 className="font-semibold text-ink">{title}</h3><p className="text-sm leading-relaxed text-ink-soft">{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function SoftwareDevelopment() {
  return (
    <section className="container-page pb-24">
      <h2 className="text-xl font-extrabold text-ink">Software Development</h2>
      <div className="mt-7 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <aside className="border-l border-border pl-5">
          <p className="max-w-[290px] text-sm leading-relaxed text-ink-soft">Build reliable applications through a structured, collaborative development process.</p>
          <div className="mt-16 border-l-2 border-brand pl-4"><h3 className="text-base font-extrabold text-brand">Mobile App Development</h3><p className="mt-2 max-w-[260px] text-sm leading-relaxed text-ink-soft">Native and cross-platform mobile apps that feel smooth, fast, and easy to use.</p></div>
          <div className="mt-16 space-y-5 text-sm text-ink-soft"><p>Web App Development</p><p>Enterprise Software</p><p>AI Product Development</p></div>
        </aside>
        <div className="grid min-h-[410px] place-items-center bg-[#7b86ff] p-12"><img src="/placeholder.svg" alt="Placeholder software service" className="max-h-[330px] w-full max-w-[480px] object-contain" /></div>
      </div>
    </section>
  );
}

function FeatureCards() {
  return (
    <section className="container-page space-y-12 pb-28">
      <article className="mx-auto max-w-[1040px] overflow-hidden rounded-xl bg-ink shadow-card"><div className="aspect-[16/7] image-tile-bg" /></article>
      <article className="mx-auto grid max-w-[1040px] overflow-hidden rounded-xl shadow-card md:grid-cols-2"><div className="bg-brand p-9 text-primary-foreground"><h3 className="text-2xl font-extrabold">Agile Software Development Services</h3><p className="mt-5 text-sm leading-relaxed text-primary-foreground/85">We build software in practical phases so teams can review progress, reduce risk, and launch confidently.</p></div><div className="min-h-[270px] image-tile-bg" /></article>
      <article className="mx-auto grid max-w-[1040px] gap-px overflow-hidden rounded-xl bg-deep-blue p-8 text-primary-foreground shadow-card md:grid-cols-2"><TextBlock title="Adaptive Software Development Services for Dynamic Business Needs" /><TextBlock title="Custom Enterprise Software Development for Optimized Workflows" /></article>
    </section>
  );
}

function TextBlock({ title }: { title: string }) {
  return <div className="p-6"><h3 className="text-xl font-extrabold leading-tight">{title}</h3><p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">Our development team turns complex requirements into secure, maintainable systems that support growth and simplify daily operations.</p><button className="mt-6 rounded-full border border-primary-foreground/60 px-5 py-2 text-xs font-bold">Read More</button></div>;
}

function Expectations() {
  const items = [{ label: "Strategy", icon: Lightbulb }, { label: "Execution", icon: Code2 }, { label: "Creativity", icon: Palette }];
  return (
    <section className="container-page pb-28">
      <h2 className="text-xl font-extrabold text-ink">What you can expect from us</h2>
      <div className="relative mx-auto mt-20 min-h-[720px] max-w-[780px]">
        {items.map((item, i) => <div key={item.label} className={`absolute ${i === 0 ? "left-0 top-0" : i === 1 ? "left-0 top-[280px]" : "left-0 top-[560px]"}`}><h3 className="font-extrabold text-ink">{item.label}</h3></div>)}
        {[Settings2, Sparkles, Rocket, UsersRound, Check].map((Icon, i) => <div key={i} className={`absolute grid h-28 w-28 place-items-center image-tile-bg ${["left-[45%] top-0", "right-0 top-28", "left-[45%] top-[260px]", "right-0 top-[390px]", "left-[45%] top-[560px]"][i]}`}><span className="grid h-12 w-12 place-items-center rounded bg-card text-ink"><Icon className="h-5 w-5" /></span></div>)}
      </div>
    </section>
  );
}

function ServiceCTA() {
  return (
    <section id="start" className="container-page pb-24">
      <div className="max-w-[360px]"><p className="text-sm leading-relaxed text-ink-soft">Want to know what your software could cost? Start with a simple estimate or reach out directly.</p><a href="#contact" className="btn-brand mt-4">Book Now <ArrowRight className="h-4 w-4" /></a></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2"><Link to="/app-cost-calculator" className="group relative min-h-[150px] overflow-hidden p-6 text-primary-foreground image-tile-bg"><h3 className="text-lg font-extrabold">App Cost Calculator</h3><p className="absolute bottom-5 left-6 inline-flex items-center gap-2 font-bold">Start calculating <ArrowRight className="h-4 w-4" /></p></Link><a href="#contact" className="group relative min-h-[150px] overflow-hidden p-6 text-primary-foreground image-tile-bg"><h3 className="text-lg font-extrabold">Contact Us</h3><p className="absolute bottom-5 left-6 inline-flex items-center gap-2 font-bold">Get a custom proposal <ArrowRight className="h-4 w-4" /></p></a></div>
    </section>
  );
}