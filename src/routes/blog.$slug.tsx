import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Calendar, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Supply Chain Management in ERP — eazisols" },
      { name: "description", content: "What ERP supply chain management actually does for your business." },
    ],
  }),
  component: BlogDetail,
});

function BlogDetail() {
  return (
    <article className="pb-24">
      <div className="container-narrow pt-8 md:pt-12">
        <nav className="flex items-center gap-1.5 text-[13px] text-ink-soft">
          <Link to="/blog" className="hover:text-ink">Blog</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-ink">Article</span>
        </nav>

        <h1 className="mt-6 text-[34px] md:text-[44px] font-extrabold leading-[1.15] tracking-tight text-ink">
          Supply Chain Management in ERP: What It Actually Does for Your Business
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-ink-soft">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />10 minutes</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />2 Jun 2026</span>
        </div>

        <div className="mt-8 overflow-hidden rounded-md">
          <div className="aspect-[16/8] w-full image-tile-bg" />
        </div>

        <div className="prose-blog mt-12">
          <p className="text-[17px] leading-[1.85] text-ink-soft">
            Most companies don't have a supply chain problem. They have a data
            movement problem. Demand forecasts live in one system, purchase
            orders in another, and inventory counts in a spreadsheet. ERP fixes
            that by giving every team one shared source of truth.
          </p>

          <h2 className="mt-12 text-[26px] md:text-[30px] font-extrabold text-ink">What Supply Chain Management in ERP Means</h2>
          <p className="mt-4 text-[17px] leading-[1.85] text-ink-soft">
            An ERP brings the same data that planning, procurement, warehousing
            and finance already use into a single connected workflow. Instead
            of stitching exports together, your team works against one record.
          </p>

          <h3 className="mt-10 text-[22px] font-extrabold text-ink">The Core Functions It Handles</h3>
          <p className="mt-4 text-[17px] leading-[1.85] text-ink-soft">
            Each module in the supply chain area of an ERP focuses on one part
            of the operation — demand planning, procurement, inventory,
            warehouse, manufacturing, logistics, and supplier collaboration.
          </p>

          <h3 className="mt-10 text-[22px] font-extrabold text-ink">Why It Matters</h3>
          <p className="mt-4 text-[17px] leading-[1.85] text-ink-soft">
            With everything in one place, leaders stop guessing. They see real
            stock levels, real lead times, real margins, and they can act on
            them without waiting for a Monday report.
          </p>

          <h3 className="mt-10 text-[22px] font-extrabold text-ink">How To Tell It's Working</h3>
          <ul className="mt-4 space-y-3 text-[17px] leading-[1.85] text-ink-soft list-disc pl-6">
            <li>Forecast accuracy improves quarter over quarter.</li>
            <li>Stock-outs and overstock both trend down.</li>
            <li>Procurement cycle time drops without adding headcount.</li>
            <li>Finance closes the books faster because the numbers already match.</li>
          </ul>

          <h2 className="mt-12 text-[26px] md:text-[30px] font-extrabold text-ink">The Bottom Line</h2>
          <p className="mt-4 text-[17px] leading-[1.85] text-ink-soft">
            ERP supply chain management isn't about replacing your team. It's
            about giving them a faster, cleaner way to make the decisions
            they're already making — with data they can actually trust.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <button className="btn-brand">Book a Free Call</button>
          <Link to="/blog" className="btn-ghost">Back to Blog</Link>
        </div>
      </div>
    </article>
  );
}
