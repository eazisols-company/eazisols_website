import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}) {
  return (
    <article className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 card-hover">
      <div className="flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-surface group-hover:bg-brand group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-soft group-hover:border-ink group-hover:text-ink transition-colors">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <h3 className="mt-8 text-xl font-semibold text-ink tracking-tight">{title}</h3>
      <p className="mt-3 text-ink-soft leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-6 space-y-2 text-sm text-ink-soft">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
