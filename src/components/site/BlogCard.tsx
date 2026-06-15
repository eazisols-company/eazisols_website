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
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden image-tile-bg">
        <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 text-xs font-extrabold text-brand">{post.category}</span>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center gap-3 text-xs text-ink-soft">
          <span>{post.date}</span>
          <span>· {post.readTime}</span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold leading-snug text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-brand" />
            <span className="text-sm font-bold text-ink">{post.author}</span>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-soft transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
