import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { BlogCard } from "@/components/site/BlogCard";
import { blogPosts as posts, featuredPost as featured } from "@/data/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Development Blog — eazisols" },
      { name: "description", content: "Articles on software, ERP, AI, design, and digital growth." },
    ],
  }),
  component: BlogRoutePage,
});

function BlogRoutePage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isBlogDetail =
    pathname.startsWith("/blog/") && pathname.length > "/blog/".length;

  if (isBlogDetail) {
    return <Outlet />;
  }

  return <BlogPage />;
}

function BlogPage() {
  const featuredTags = featured.tags ?? [];

  return (
    <>
      <section className="relative overflow-hidden pt-10 md:pt-14">
        <div className="container-page relative">
          <h1 className="text-[36px] font-semibold tracking-[-0.72px] text-[#1B1B1B] sm:text-[48px] lg:text-[72px] lg:leading-[68px] leading-tight">
            Development <span className="text-ink-soft/70">Blog</span>
          </h1>

          <div className="relative mt-10 pb-24 md:pb-32">
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/blog.png"
                alt=""
                className="aspect-[16/7] w-full object-cover"
              />
            </div>
            <div className="relative z-10 mt-5 w-full max-w-[440px] md:absolute md:bottom-0 md:left-12 md:mt-0 md:w-[40%] md:max-w-[440px] md:translate-y-[10%]">
              <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between text-[12px] text-ink-soft">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <Link to="/blog/$slug" params={{ slug: featured.slug! }}>
                  <h2 className="mt-3 text-[20px] font-bold leading-[1.3] text-ink transition-colors hover:text-[#418ed6] md:text-[22px]">
                    {featured.title}
                  </h2>
                </Link>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-ink-soft">{featured.excerpt}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {featuredTags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-ink-soft">{t}</span>
                    ))}
                    {featuredTags.length > 2 && (
                      <span className="text-[11px] font-semibold text-[#418ed6]">+ {featuredTags.length - 2} more</span>
                    )}
                  </div>
                  <Link to="/blog/$slug" params={{ slug: featured.slug! }} className="inline-flex shrink-0 items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[#418ed6]">
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 pt-8 md:pt-12">
        <h2 className="text-[28px] font-extrabold tracking-tight text-ink md:text-[34px]">More Articles</h2>
        <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} image={`/images/blog${index + 1}.png`} />
          ))}
        </div>
      </section>
    </>
  );
}
