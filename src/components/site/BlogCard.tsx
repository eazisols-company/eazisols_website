import { ArrowUpRight } from "lucide-react";

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  author: string;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden card-hover">
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: post.gradient }}>
        <div className="absolute inset-0 grid place-items-center text-white/90 px-6 text-center">
          <span className="text-sm uppercase tracking-widest opacity-80">{post.category}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center gap-3 text-xs text-ink-soft">
          <span className="rounded-full bg-surface px-3 py-1 font-medium text-ink">{post.category}</span>
          <span>{post.date}</span>
          <span>· {post.readTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink tracking-tight leading-snug group-hover:text-brand transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-ink-soft leading-relaxed flex-1">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand to-brand-2" />
            <span className="text-sm font-medium text-ink">{post.author}</span>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-soft group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
