import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, Sparkles, Brain, Code2, Smartphone, LineChart, Cloud,
  CheckCircle2, Star, Quote, Zap,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nordex — Technology Partner for AI & Digital Growth" },
      { name: "description", content: "We design and engineer AI products, web platforms, and mobile apps that grow modern businesses." },
      { property: "og:title", content: "Nordex — Technology Partner for AI & Digital Growth" },
      { property: "og:description", content: "AI, web, mobile, and digital growth — engineered by a senior product team." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Brain, title: "AI & Machine Learning", description: "Custom LLM apps, RAG systems, agents, and ML pipelines tailored to your data and workflow." },
  { icon: Code2, title: "Web Development", description: "Modern, performant web platforms built with React, Next.js, and the TanStack ecosystem." },
  { icon: Smartphone, title: "Mobile Apps", description: "Native-quality iOS and Android apps shipped from a single React Native codebase." },
  { icon: LineChart, title: "Digital Growth", description: "Conversion-focused marketing, SEO and product analytics that move real business metrics." },
  { icon: Cloud, title: "Cloud & DevOps", description: "AWS, GCP and edge infrastructure — designed for scale, observability and cost control." },
  { icon: Sparkles, title: "Product Design", description: "Strategy, UX research and high-fidelity design systems that make engineering faster." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Section
        eyebrow="What we do"
        title={<>End-to-end product engineering, <span className="gradient-text">under one roof</span>.</>}
        description="From AI-first prototypes to scaled production platforms, our cross-functional teams ship measurable outcomes — not just deliverables."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/services" className="btn-ghost">
            Explore all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Process />
      <Featured />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-blob h-[420px] w-[420px] bg-brand/40 -top-20 -left-32" />
      <div className="hero-blob h-[460px] w-[460px] bg-brand-2/30 top-40 -right-32" />
      <div className="container-page relative pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div className="rise">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Now booking Q3 partnerships
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-ink">
              Your technology <br className="hidden md:block" />
              partner for <span className="gradient-text">AI &amp; digital growth</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
              We help ambitious teams ship category-defining software — combining product strategy, design and engineering into one focused studio.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/app-cost-calculator" className="btn-brand">
                Get a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="btn-ghost">View our work</Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "120+", l: "Products shipped" },
                { v: "9 yrs", l: "Studio experience" },
                { v: "4.9/5", l: "Client rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold tracking-tight text-ink">{s.v}</div>
                  <div className="text-xs text-ink-soft mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="relative rise" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-3xl bg-card border border-border shadow-card p-7 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">Tell us about your project</h3>
                  <p className="text-sm text-ink-soft mt-1">We'll respond within 24 hours.</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white">
                  <Zap className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <Field label="Name" placeholder="Jane Doe" />
                <Field label="Email" placeholder="jane@company.com" />
                <Field label="Company" placeholder="Acme Inc." />
                <Field label="Budget" placeholder="$25k – $50k" />
              </div>
              <div className="mt-3">
                <label className="text-xs font-medium text-ink-soft">Project description</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you're building, who it's for, and where you need help."
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink transition"
                />
              </div>
              <button className="btn-brand mt-5 w-full">
                Submit inquiry <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-full bg-ink text-white px-4 py-2 text-xs font-medium float">
              <span className="h-2 w-2 rounded-full bg-brand" /> 24h response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-soft">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ink transition"
      />
    </div>
  );
}

function Stats() {
  const logos = ["Lumen", "Northwind", "Helix", "Vertex", "Atlas", "Quanta"];
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-page py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <p className="text-sm font-medium tracking-wide uppercase text-ink-soft">Trusted by teams building the future</p>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {logos.map((l) => (
            <span key={l} className="text-xl md:text-2xl font-semibold text-ink/40 hover:text-ink transition">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "We map your goals, users, and constraints to align on a clear product thesis." },
    { n: "02", t: "Design", d: "Rapid prototyping and design systems that make engineering 3x faster." },
    { n: "03", t: "Build", d: "Senior engineers ship in two-week increments with full visibility." },
    { n: "04", t: "Grow", d: "Analytics, experiments and iteration loops that compound results." },
  ];
  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-brand/20 blur-3xl" />
      <div className="container-page relative section-pad">
        <div className="max-w-3xl">
          <span className="eyebrow text-brand-2">Our process</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            A focused way of working — from idea to outcome.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 hover:bg-white/[0.06] transition">
              <div className="text-sm font-semibold text-brand-2">{s.n}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  const items = [
    { t: "AI ops platform for a Fortune 500 retailer", c: "AI · Web", g: "linear-gradient(135deg, #ff6b6b, #c44569)" },
    { t: "B2B SaaS dashboard with realtime analytics", c: "Web · Data", g: "linear-gradient(135deg, #4338ca, #0ea5e9)" },
    { t: "Health & fitness mobile app — 1M+ downloads", c: "Mobile", g: "linear-gradient(135deg, #059669, #84cc16)" },
  ];
  return (
    <Section
      eyebrow="Selected work"
      title={<>Recent products we're <span className="gradient-text">proud of</span>.</>}
      description="A snapshot of recent launches across AI, web and mobile."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <Link to="/portfolio" key={p.t} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border" style={{ background: p.g }}>
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs">
                  {p.c}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight leading-tight">{p.t}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm">
                    View case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const t = [
    { q: "Nordex moved faster than our internal team and delivered a product our customers actually love. Best engineering partner we've worked with.", a: "Sarah Chen", r: "VP Product, Northwind" },
    { q: "From the first workshop to launch in 14 weeks. Our MRR doubled in the first quarter — they truly understand growth.", a: "James Okafor", r: "CEO, Helix Labs" },
    { q: "Senior, opinionated, and obsessed with quality. They sweat the details that competitors gloss over.", a: "Maya Patel", r: "CTO, Vertex AI" },
  ];
  return (
    <Section
      eyebrow="Words from clients"
      title="Built on long-term partnerships."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {t.map((it) => (
          <div key={it.a} className="rounded-3xl border border-border bg-card p-8 card-hover">
            <Quote className="h-7 w-7 text-brand" />
            <p className="mt-5 text-ink leading-relaxed">"{it.q}"</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <div>
                <div className="font-semibold text-ink">{it.a}</div>
                <div className="text-sm text-ink-soft">{it.r}</div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Unused import guard
void CheckCircle2;
