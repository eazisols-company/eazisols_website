import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface BlogPost {
  slug?: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient?: string;
  author?: string;
  tags?: string[];
}

export function BlogCard({ post }: { post: BlogPost }) {
  const slug = post.slug ?? "supply-chain-management-in-erp";
  const tags = post.tags ?? [post.category.toLowerCase()];
  return (
    <article className="group flex flex-col">
      <Link to="/blog/$slug" params={{ slug }} className="block overflow-hidden rounded-md">
        <div className="aspect-[16/9] w-full image-tile-bg transition-transform duration-500 group-hover:scale-[1.02]" />
      </Link>
      <div className="mt-5 flex items-center gap-4 text-[13px] text-ink-soft">
        <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
        <span>{post.date}</span>
      </div>
      <Link to="/blog/$slug" params={{ slug }}>
        <h3 className="mt-3 text-[22px] md:text-[26px] font-extrabold leading-snug text-ink transition-colors duration-200 group-hover:text-brand">
          {post.title}
        </h3>
      </Link>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft line-clamp-2">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-[12px] text-ink-soft">{t}</span>
        ))}
      </div>
      <Link to="/blog/$slug" params={{ slug }} className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13px] font-extrabold tracking-wide text-brand uppercase">
        Read more <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
