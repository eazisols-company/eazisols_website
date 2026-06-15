import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CTA({
  eyebrow = "Let's build",
  title = "Have a project in mind?",
  description = "Tell us about your idea — we'll respond within 24 hours with a clear next step.",
  ctaLabel = "Start a project",
  ctaTo = "/app-cost-calculator",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
}) {
  return (
    <section className="container-page pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-8 py-16 md:p-20">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-2/30 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow text-brand-2">{eyebrow}</span>
            <h3 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              {title}
            </h3>
            <p className="mt-4 text-white/75 max-w-xl text-lg">{description}</p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-4 font-medium hover:bg-brand hover:text-white transition-colors"
            >
              {ctaLabel} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
