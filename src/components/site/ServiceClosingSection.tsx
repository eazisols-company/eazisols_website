import { openCalBookingTab } from "@/lib/cal";
import { Button } from "@/components/ui/button";
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
          <Button type="button" variant="brand" className="mt-8" onClick={openCalBookingTab}>
            Book a free call
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
