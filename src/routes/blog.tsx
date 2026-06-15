import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { BlogCard, type BlogPost } from "@/components/site/BlogCard";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Development Blog — Tecaudex" },
      { name: "description", content: "Articles on software, ERP, AI, design, and digital growth." },
    ],
  }),
  component: BlogPage,
});

const featured: BlogPost = {
  slug: "supply-chain-management-in-erp",
  title: "Supply Chain Management in ERP: What It Actually Does for Your Business",
  excerpt:
    "Most companies don't have a supply chain problem. They have a data movement problem. Demand forecasts live in...",
  category: "ERP",
  date: "2 Jun 2026",
  readTime: "10 minutes",
  tags: ["erp", "erp supply chain management"],
};

const posts: BlogPost[] = [
  { slug: "erp-vs-crm", title: "ERP vs CRM: What's the Difference and Which One Do You Need?", excerpt: "If you run a business, you've probably heard both terms thrown around sometimes as if they're interchangeable. They're not. CRM and ERP are two...", category: "ERP", date: "22 May 2026", readTime: "7 minutes", tags: ["erp", "crm", "crm vs erp"] },
  { slug: "erp-inventory-management", title: "ERP Inventory Management: What It Means and How It Works", excerpt: "ERP inventory management is the process of tracking, controlling, and updating inventory through an Enterprise Resource Planning system.", category: "ERP", date: "15 May 2026", readTime: "10 minutes", tags: ["erp inventory management", "erp module inventory management"] },
  { slug: "erp-hr-module", title: "ERP HR Module", excerpt: "An ERP HR module is the part of an Enterprise Resource Planning system that handles everything related to people — employee records, payroll, attendance.", category: "ERP", date: "11 May 2026", readTime: "7 minutes", tags: ["ERP HR Module", "ERP", "HR ERP"] },
  { slug: "app-cost-usa", title: "How Much Does It Cost to Build an App in the USA? (2026 Guide)", excerpt: "App development cost in the USA ranges from $5,000 for a lean MVP to $150,000+ for a full-featured production app in 2026, when you partner with a hybrid US-led...", category: "App", date: "10 May 2026", readTime: "10 minutes", tags: ["app development cost", "app cost", "hybrid app development cost"] },
  { slug: "erp-finance-module", title: "ERP Finance Module Explained", excerpt: "The finance module is the core of any ERP system. It's where all the money-related activity in a business gets recorded, tracked, and reported — general ledger,", category: "ERP", date: "4 May 2026", readTime: "7 minutes", tags: ["erp", "erp finance", "erp finance module"] },
  { slug: "types-of-erp", title: "Types and Tiers of ERP", excerpt: "ERP isn't one-size-fits-all. Systems get sorted in a few different ways — by how they're deployed, what industry they're built for, and the size of company they're...", category: "ERP", date: "30 Apr 2026", readTime: "7 minutes", tags: ["erp types", "erp tiers", "different types of erp"] },
  { slug: "what-is-erp", title: "What is ERP (Enterprise Resource Planning)?", excerpt: "It's a software platform that pulls the major parts of a business — finance, HR, inventory, supply chain, manufacturing, procurement — into one connected system.", category: "ERP", date: "28 Apr 2026", readTime: "5 minutes", tags: ["erp", "what is erp", "erp development"] },
  { slug: "app-cost-usa-2", title: "App Development Cost USA 2026: Complete Pricing Guide", excerpt: "The wide gap exists because cost is driven by feature scope, platform choice, design depth, backend complexity, and your team's hourly rate. At Tecaudex, our...", category: "App", date: "21 Apr 2026", readTime: "10 minutes", tags: ["app development", "app development cost", "app development price"] },
];

function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 md:pt-14">
        <div className="absolute left-1/2 top-0 h-44 w-[520px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative">
          <h1 className="text-[44px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight text-ink">
            Development <span className="text-ink-soft/70">Blog</span>
          </h1>

          <div className="relative mt-10 overflow-hidden rounded-md">
            <div className="aspect-[16/7] w-full image-tile-bg" />
            <div className="md:absolute md:bottom-0 md:left-0 md:max-w-[560px]">
              <div className="bg-white p-7 md:p-10 md:shadow-card">
                <div className="flex items-center justify-between text-[13px] text-ink-soft">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <Link to="/blog/$slug" params={{ slug: featured.slug! }}>
                  <h2 className="mt-4 text-[26px] md:text-[30px] font-extrabold leading-[1.18] text-ink transition-colors hover:text-brand">
                    {featured.title}
                  </h2>
                </Link>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {featured.tags?.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-white px-3 py-1 text-[12px] text-ink-soft">{t}</span>
                    ))}
                  </div>
                  <Link to="/blog/$slug" params={{ slug: featured.slug! }} className="inline-flex items-center gap-1.5 text-[13px] font-extrabold uppercase tracking-wide text-brand">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 pt-20 md:pt-28">
        <h2 className="text-[28px] md:text-[34px] font-extrabold tracking-tight text-ink">More Articles</h2>
        <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>
    </>
  );
}
