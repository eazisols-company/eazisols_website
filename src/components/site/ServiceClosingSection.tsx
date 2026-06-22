import { openCalBookingTab } from "@/lib/cal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceClosingSection() {
  return (
    <section className="container-page pb-24">
      <ScrollReveal>
        <div className="max-w-[540px]">
          <p className="text-sm leading-relaxed text-ink-soft md:text-[15px] md:leading-[1.7]">
            Committed to delivering tangible value, we focus on achieving measurable outcomes for
            your business.
          </p>
          <button
            type="button"
            onClick={openCalBookingTab}
            className="btn-brand mt-8 px-6 py-3.5 text-sm md:px-8 md:py-4 md:text-base"
          >
            Book a free call
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
