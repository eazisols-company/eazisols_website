import { openCalBookingTab } from "@/lib/cal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Props = {
  title?: string;
};

export function ServiceClosingSection({ title = "Creativity" }: Props) {
  return (
    <section className="container-page pb-24">
      <ScrollReveal>
        <div className="grid gap-8 md:grid-cols-[minmax(500px,540px)_minmax(0,1fr)] md:gap-50">
          <h3 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[33px] sm:leading-tight md:text-[36px]">
            {title}
          </h3>
          <div>
            <p className="max-w-[540px] text-sm leading-relaxed text-ink-soft md:text-[15px] md:leading-[1.7]">
              Committed to delivering tangible value, we focus on achieving measurable outcomes for
              your business.
            </p>
            <button type="button" onClick={openCalBookingTab} className="btn-brand mt-8">
              Book a free call
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
