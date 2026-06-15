import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function ServiceCTA({
  intro = "Want to know what your software could cost? Start with a simple estimate or reach out directly.",
}: {
  intro?: string;
}) {
  return (
    <section id="start" className="container-page pb-24 pt-4">
      <div className="max-w-[420px]">
        <p className="text-sm leading-relaxed text-ink-soft">{intro}</p>
        <a href="#contact" className="btn-brand mt-4">
          Book a free call <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Link
          to="/app-cost-calculator"
          className="group relative min-h-[170px] overflow-hidden rounded-md p-6 text-primary-foreground image-tile-bg"
        >
          <h3 className="text-lg font-extrabold">App Cost Calculator</h3>
          <p className="mt-2 max-w-[280px] text-xs text-primary-foreground/85">
            Get a personalised estimate based on your project scope and features.
          </p>
          <p className="absolute bottom-5 left-6 inline-flex items-center gap-2 text-sm font-bold">
            <ArrowRight className="h-4 w-4" /> Start calculating
          </p>
        </Link>
        <a
          href="#contact"
          className="group relative min-h-[170px] overflow-hidden rounded-md p-6 text-primary-foreground image-tile-bg"
        >
          <h3 className="text-lg font-extrabold">Contact Us</h3>
          <p className="mt-2 max-w-[280px] text-xs text-primary-foreground/85">
            Have a project in mind? Let's talk and find out how we can help.
          </p>
          <p className="absolute bottom-5 left-6 inline-flex items-center gap-2 text-sm font-bold">
            Get a custom proposal <ArrowRight className="h-4 w-4" />
          </p>
        </a>
      </div>
    </section>
  );
}

export default ServiceCTA;
