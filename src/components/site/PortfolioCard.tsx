import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  year: string;
}

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="group cursor-pointer">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 grid place-items-center text-white/95 p-10">
          <div className="text-center">
            <div className="text-xs tracking-widest uppercase opacity-80">{project.category}</div>
            <div className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{project.title}</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500" />
        <div className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-white text-ink translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium text-white">
          {project.year}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-ink tracking-tight">{project.title}</h3>
          <p className="mt-1 text-ink-soft">{project.description}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs rounded-full border border-border px-3 py-1 text-ink-soft">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
