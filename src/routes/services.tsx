import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Code2, Smartphone, LineChart, Cloud, Sparkles, ShieldCheck, Workflow,
  Database, Search, Palette, Megaphone, CheckCircle2,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tecaudex" },
      { name: "description", content: "AI, web, mobile, cloud, design and growth — a complete product engineering studio." },
      { property: "og:title", content: "Services — Tecaudex" },
      { property: "og:description", content: "End-to-end product engineering for ambitious teams." },
    ],
  }),
  component: ServicesPage,
});

const ALL = [
  { icon: Brain, title: "AI & Machine Learning", description: "Custom LLM applications, RAG systems, AI agents and end-to-end ML pipelines.", features: ["RAG + vector search", "AI agents & workflows", "Fine-tuning & evaluation"] },
  { icon: Code2, title: "Web Development", description: "Production-grade web platforms built with React, TanStack and Next.js.", features: ["SaaS dashboards", "Marketing sites", "Headless commerce"] },
  { icon: Smartphone, title: "Mobile Development", description: "React Native and native iOS/Android apps with offline-first architecture.", features: ["React Native", "Native modules", "App Store launch"] },
  { icon: Cloud, title: "Cloud & DevOps", description: "AWS, GCP and Cloudflare edge infrastructure designed for scale and cost.", features: ["Edge & serverless", "CI/CD & IaC", "Observability"] },
  { icon: LineChart, title: "Digital Growth", description: "Performance marketing, SEO, and conversion experimentation.", features: ["SEO strategy", "Paid acquisition", "Conversion CRO"] },
  { icon: Palette, title: "Product Design", description: "Research, UX, design systems and high-fidelity prototypes.", features: ["UX research", "Design systems", "Prototyping"] },
  { icon: Database, title: "Data Engineering", description: "Modern data stacks, warehousing and analytics platforms.", features: ["dbt + warehouse", "Realtime pipelines", "BI dashboards"] },
  { icon: ShieldCheck, title: "Security & Compliance", description: "SOC2, ISO and HIPAA readiness baked into engineering from day one.", features: ["Audit prep", "Threat modeling", "Pen testing"] },
  { icon: Megaphone, title: "Brand & Storytelling", description: "Identity systems and narrative that make your product unmistakable.", features: ["Brand systems", "Copywriting", "Launch campaigns"] },
];

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title={<>One studio. <span className="gradient-text">Every capability</span> you need to ship.</>}
        description="We combine senior engineering, design and growth talent — so you don't have to coordinate three vendors."
        align="center"
      />

      <section className="container-page -mt-6 mb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <Process />
      <Engagements />
      <Stack />
      <CTA title="Ready to start your project?" />
    </>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery sprint", d: "1–2 weeks of research, workshops and product framing to lock the right problem." },
    { n: "02", t: "Design & architecture", d: "Design system, UX flows and a technical blueprint your team can extend." },
    { n: "03", t: "Iterative build", d: "Two-week sprints with weekly demos, shared roadmap and live preview links." },
    { n: "04", t: "Launch & scale", d: "Performance, analytics, A/B tests and a clear path to ongoing growth." },
  ];
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-page section-pad">
        <div className="max-w-3xl">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.05]">
            A proven process — refined over 120+ launches.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7 card-hover">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand">{s.n}</span>
                <Workflow className="h-4 w-4 text-ink-soft" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{s.t}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engagements() {
  const tiers = [
    { name: "Sprint", price: "from $12k", desc: "Rapid prototype, proof of concept or design audit in 2–3 weeks.", features: ["Design + dev", "Working prototype", "Async + weekly call"] },
    { name: "Project", price: "from $40k", desc: "End-to-end build for a new product or major feature set.", features: ["Cross-functional pod", "Fixed scope & price", "Production launch"], featured: true },
    { name: "Partnership", price: "from $20k / mo", desc: "Embedded team that grows with your product over the long term.", features: ["Dedicated squad", "Roadmap & analytics", "Quarterly planning"] },
  ];
  return (
    <Section
      eyebrow="Engagement models"
      title="Flexible ways to work together."
      description="Pick the structure that matches your stage — from a quick sprint to a long-term partnership."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-3xl p-8 border ${
              t.featured ? "bg-ink text-white border-ink shadow-glow" : "bg-card border-border"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 right-6 rounded-full bg-brand text-white text-xs font-medium px-3 py-1">Most popular</span>
            )}
            <h3 className={`text-2xl font-semibold ${t.featured ? "text-white" : "text-ink"}`}>{t.name}</h3>
            <div className={`mt-2 text-3xl font-bold ${t.featured ? "text-white" : "text-ink"}`}>{t.price}</div>
            <p className={`mt-4 ${t.featured ? "text-white/75" : "text-ink-soft"}`}>{t.desc}</p>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className={`flex items-center gap-2 text-sm ${t.featured ? "text-white/85" : "text-ink"}`}>
                  <CheckCircle2 className={`h-4 w-4 ${t.featured ? "text-brand-2" : "text-brand"}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stack() {
  const groups = [
    { name: "Frontend", items: ["React 19", "Next.js", "TanStack", "Tailwind", "Framer Motion"] },
    { name: "Backend", items: ["Node.js", "Postgres", "Supabase", "tRPC", "Cloudflare Workers"] },
    { name: "AI / ML", items: ["OpenAI", "Anthropic", "LangChain", "PGVector", "Hugging Face"] },
    { name: "Mobile", items: ["React Native", "Expo", "Swift", "Kotlin"] },
  ];
  return (
    <Section eyebrow="Tooling" title="A modern, opinionated stack." description="We pick tools that ship quality faster and stay maintainable as your team grows.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.name} className="rounded-2xl border border-border bg-card p-6 card-hover">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand">{g.name}</h4>
            <ul className="mt-4 space-y-2 text-ink">
              {g.items.map((i) => <li key={i} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-ink-soft" />{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

// guard unused imports
void Search;
