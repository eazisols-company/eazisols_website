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

export function BlogCard({ post, image }: { post: BlogPost; image?: string }) {
  const slug = post.slug ?? "supply-chain-management-in-erp";
  const tags = post.tags ?? [post.category.toLowerCase()];
  return (
    <article className="group flex flex-col">
      <Link to="/blog/$slug" params={{ slug }} className="block overflow-hidden">
        <img
          src={image ?? "/placeholder.svg"}
          alt=""
          className="aspect-[16/9] w-full object-cover"
        />
      </Link>
      <div className="mt-5 flex items-center gap-4 text-[13px] text-ink-soft">
        <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
        <span>{post.date}</span>
      </div>
      <Link to="/blog/$slug" params={{ slug }}>
        <h3 className="mt-3 text-[22px] md:text-[26px] font-extrabold leading-snug text-ink transition-colors duration-200 group-hover:text-[#418ed6]">
          {post.title}
        </h3>
      </Link>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft line-clamp-2">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {tags.slice(0, 2).map((t) => (
          <span key={t} className="rounded-full border border-border bg-white px-3 py-1 text-[12px] text-ink-soft">{t}</span>
        ))}
        {tags.length > 2 && (
          <span className="text-[12px] font-semibold text-[#418ed6]">+ {tags.length - 2} more</span>
        )}
      </div>
      <Link to="/blog/$slug" params={{ slug }} className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13px] font-extrabold uppercase tracking-wide text-[#418ed6]">
        Read more <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
