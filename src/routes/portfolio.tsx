import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { PortfolioCard, type Project } from "@/components/site/PortfolioCard";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nordex" },
      { name: "description", content: "A selection of products we've designed and engineered — across AI, SaaS, mobile and e-commerce." },
      { property: "og:title", content: "Portfolio — Nordex" },
      { property: "og:description", content: "Selected case studies from Nordex Studio." },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS: Project[] = [
  { title: "Lumen AI", category: "AI · SaaS", description: "AI ops platform for enterprise retail.", tags: ["LLM", "RAG", "Next.js"], year: "2025", gradient: "linear-gradient(135deg, #ff6b6b 0%, #c44569 100%)" },
  { title: "Northwind", category: "B2B · Dashboard", description: "Realtime analytics for logistics teams.", tags: ["React", "Postgres", "tRPC"], year: "2025", gradient: "linear-gradient(135deg, #4338ca 0%, #0ea5e9 100%)" },
  { title: "Helix Health", category: "Mobile · Health", description: "Fitness coaching app with 1M+ downloads.", tags: ["React Native", "Expo"], year: "2024", gradient: "linear-gradient(135deg, #059669 0%, #84cc16 100%)" },
  { title: "Vertex Pay", category: "Fintech · Web", description: "Embedded payments for SMB platforms.", tags: ["Stripe", "Node.js"], year: "2024", gradient: "linear-gradient(135deg, #1e3a8a 0%, #6366f1 100%)" },
  { title: "Atlas Studio", category: "E-commerce", description: "Headless commerce for a DTC brand.", tags: ["Shopify", "Hydrogen"], year: "2024", gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)" },
  { title: "Quanta", category: "AI · Tooling", description: "Vector search platform for developers.", tags: ["pgvector", "Rust"], year: "2023", gradient: "linear-gradient(135deg, #0f172a 0%, #6366f1 100%)" },
];

const CATEGORIES = ["All", "AI · SaaS", "B2B · Dashboard", "Mobile · Health", "Fintech · Web", "E-commerce", "AI · Tooling"];

function PortfolioPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Section
        eyebrow="Portfolio"
        title={<>Work we've shipped — and the <span className="gradient-text">teams behind it</span>.</>}
        description="A selection of recent projects across AI, SaaS, mobile and commerce. Every engagement is a partnership; every launch a measurable win."
        align="center"
      />

      <section className="container-page -mt-6 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                active === c
                  ? "bg-ink text-white border-ink"
                  : "bg-card text-ink-soft border-border hover:text-ink hover:border-ink/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {filtered.map((p) => <PortfolioCard key={p.title} project={p} />)}
        </div>
      </section>

      <CaseStudy />
      <CTA title="Want to be our next case study?" ctaLabel="Start a project" />
    </>
  );
}

function CaseStudy() {
  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
      <div className="container-page relative section-pad">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow text-brand-2">Featured case study</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Lumen AI: from prototype to 40k weekly users in 6 months.
            </h2>
            <p className="mt-5 text-white/75 text-lg max-w-xl">
              We partnered with Lumen to design and ship an AI assistant for retail ops — replacing 3 internal tools with a single, opinionated workflow.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "40k", l: "Weekly users" },
                { v: "3.2x", l: "Faster ops" },
                { v: "$1.2M", l: "ARR in Y1" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold">{s.v}</div>
                  <div className="text-xs text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-white/10" style={{ background: "linear-gradient(135deg, #ff6b6b 0%, #c44569 100%)" }} />
        </div>
      </div>
    </section>
  );
}
