import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { BlogCard, type BlogPost } from "@/components/site/BlogCard";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tecaudex" },
      { name: "description", content: "Tecaudex articles on software, AI, design, and digital growth." },
      { property: "og:title", content: "Blog — Tecaudex" },
      { property: "og:description", content: "Latest thinking from the Tecaudex team." },
    ],
  }),
  component: BlogPage,
});

const posts: BlogPost[] = [
  { title: "How to plan a custom web app before development starts", excerpt: "A practical breakdown of scope, features, timelines, and design decisions that shape a successful launch.", category: "Software", date: "Jun 12, 2026", readTime: "7 min read", author: "Tecaudex Team", gradient: "" },
  { title: "What makes a mobile app feel premium?", excerpt: "Performance, flows, visual polish, and the subtle details that separate good apps from forgettable ones.", category: "Mobile", date: "Jun 4, 2026", readTime: "5 min read", author: "Design Team", gradient: "" },
  { title: "AI products need workflows, not just prompts", excerpt: "Why useful AI products are built around business processes, data quality, and clear user outcomes.", category: "AI/ML", date: "May 28, 2026", readTime: "8 min read", author: "AI Team", gradient: "" },
  { title: "ERP migration mistakes to avoid", excerpt: "A closer look at planning data, integrations, staff adoption, and risk during ERP modernization.", category: "ERP", date: "May 15, 2026", readTime: "6 min read", author: "ERP Team", gradient: "" },
  { title: "Design systems for fast-moving teams", excerpt: "Reusable components and tokens help teams ship faster without losing consistency across screens.", category: "Design", date: "Apr 29, 2026", readTime: "6 min read", author: "Design Team", gradient: "" },
  { title: "How marketing websites convert better", excerpt: "Messaging, structure, proof, and performance tips for turning traffic into qualified leads.", category: "Marketing", date: "Apr 10, 2026", readTime: "5 min read", author: "Growth Team", gradient: "" },
];

const categories = ["All", "Software", "Mobile", "AI/ML", "ERP", "Design", "Marketing"];

function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <>
      <section className="relative overflow-hidden pt-14 md:pt-24">
        <div className="absolute left-1/2 top-8 h-52 w-[560px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative pb-16">
          <div className="max-w-[760px]">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-brand">Tecaudex blog</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] text-ink md:text-[64px]">Ideas, guides, and updates from our team.</h1>
            <p className="mt-6 max-w-[680px] text-base leading-relaxed text-ink-soft">Practical articles about software development, AI/ML, ERP solutions, product design, and digital growth.</p>
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="flex flex-col gap-5 border-y border-border py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => <button key={cat} onClick={() => setActive(cat)} className={`rounded-full border px-4 py-2 text-xs font-extrabold transition ${active === cat ? "border-ink bg-ink text-primary-foreground" : "border-border bg-card text-ink hover:border-ink"}`}>{cat}</button>)}
          </div>
          <label className="relative block w-full md:w-72"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" /><input className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-4 text-sm outline-none focus:border-ink" placeholder="Search articles" /></label>
        </div>
      </section>

      <section className="container-page pb-24">
        <article className="mb-12 grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2">
          <div className="min-h-[320px] image-tile-bg" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand">Featured</span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-ink">How much does it cost to build modern software?</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">A clear guide to the major cost factors behind app development, web platforms, AI tools, and enterprise software.</p>
            <button className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-brand">Read article <ArrowRight className="h-4 w-4" /></button>
          </div>
        </article>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => <BlogCard key={post.title} post={post} />)}
        </div>
      </section>
    </>
  );
}