import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { BlogCard, type BlogPost } from "@/components/site/BlogCard";
import { CTA } from "@/components/site/CTA";
import { ArrowUpRight, Search } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Nordex" },
      { name: "description", content: "Essays, tutorials and case studies on AI, product engineering and digital growth." },
      { property: "og:title", content: "Blog — Nordex" },
      { property: "og:description", content: "Notes from the studio on building modern software." },
    ],
  }),
  component: BlogPage,
});

const FEATURED: BlogPost = {
  title: "Building production-grade RAG: lessons from 12 deployments",
  excerpt: "A field guide to retrieval, evaluation and the unsexy details that decide whether your AI app ships — or stalls in a demo.",
  category: "AI Engineering",
  date: "Jun 12, 2026",
  readTime: "9 min read",
  author: "Sarah Chen",
  gradient: "linear-gradient(135deg, #4338ca 0%, #ec4899 100%)",
};

const POSTS: BlogPost[] = [
  { title: "Why we ship in two-week sprints", excerpt: "How short cycles keep momentum, reduce risk and surface signal earlier.", category: "Process", date: "Jun 6, 2026", readTime: "5 min", author: "James Okafor", gradient: "linear-gradient(135deg, #ff6b6b, #c44569)" },
  { title: "Design systems that scale with your team", excerpt: "Tokens, primitives and the missing layer most teams skip.", category: "Design", date: "May 28, 2026", readTime: "7 min", author: "Maya Patel", gradient: "linear-gradient(135deg, #059669, #84cc16)" },
  { title: "TanStack Start in production", excerpt: "Patterns, pitfalls and performance from real-world apps.", category: "Engineering", date: "May 18, 2026", readTime: "8 min", author: "Liam Park", gradient: "linear-gradient(135deg, #1e3a8a, #6366f1)" },
  { title: "Conversion experiments that actually moved revenue", excerpt: "Five A/B tests from last quarter and the framing behind them.", category: "Growth", date: "May 7, 2026", readTime: "6 min", author: "Aïcha Diop", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)" },
  { title: "From idea to App Store in 9 weeks", excerpt: "A case study on shipping a polished mobile app on a tight timeline.", category: "Case Study", date: "Apr 22, 2026", readTime: "10 min", author: "Sarah Chen", gradient: "linear-gradient(135deg, #0ea5e9, #10b981)" },
  { title: "Edge-first architecture with Cloudflare Workers", excerpt: "When to push logic to the edge — and when not to.", category: "Engineering", date: "Apr 11, 2026", readTime: "6 min", author: "Liam Park", gradient: "linear-gradient(135deg, #0f172a, #6366f1)" },
];

const CATEGORIES = ["All", "AI Engineering", "Engineering", "Design", "Process", "Growth", "Case Study"];

function BlogPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? POSTS : POSTS.filter((p) => p.category === cat);
  return (
    <>
      <Section
        eyebrow="The Nordex journal"
        title={<>Notes from the studio on <span className="gradient-text">building software</span>.</>}
        description="Deep dives, tutorials and case studies on AI, product engineering, design and growth."
        align="center"
      />

      {/* Featured */}
      <section className="container-page -mt-6 mb-20">
        <article className="group grid lg:grid-cols-2 gap-0 rounded-3xl border border-border overflow-hidden bg-card card-hover">
          <div className="aspect-[16/10] lg:aspect-auto" style={{ background: FEATURED.gradient }} />
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="eyebrow">Featured</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight group-hover:text-brand transition-colors">
              {FEATURED.title}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">{FEATURED.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-ink-soft">
              <span className="rounded-full bg-surface px-3 py-1 font-medium text-ink">{FEATURED.category}</span>
              <span>{FEATURED.date}</span>
              <span>· {FEATURED.readTime}</span>
            </div>
            <button className="mt-8 inline-flex w-fit items-center gap-2 font-medium text-ink">
              Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </article>
      </section>

      {/* Categories + search */}
      <section className="container-page mb-10">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  cat === c ? "bg-ink text-white border-ink" : "bg-card text-ink-soft border-border hover:text-ink hover:border-ink/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
            <input
              placeholder="Search articles"
              className="w-full rounded-full border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-ink transition"
            />
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <BlogCard key={p.title} post={p} />)}
        </div>
      </section>

      <CTA eyebrow="Newsletter" title="Get the best of the journal, monthly." description="One email a month. No spam, no fluff — only the essays our readers loved most." ctaLabel="Subscribe" />
    </>
  );
}
