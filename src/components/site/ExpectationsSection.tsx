import { cn } from "@/lib/utils";
import type { ServiceSectionContent } from "@/components/site/ServiceBulletList";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useEffect, useRef, useState } from "react";

export type ExpectationItem = {
  label: string;
  body: ServiceSectionContent;
  images: string[];
};

const IMAGE_CLASS = "h-[200px] w-[200px] md:h-[190px] md:w-[180px]";

function useActivePanelOnScroll(sectionRef: React.RefObject<HTMLElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const panels = section.querySelectorAll<HTMLElement>("[data-expectation-panel]");
      if (!panels.length) return;

      const anchor = window.innerHeight * 0.38;
      let next = 0;

      panels.forEach((panel, index) => {
        if (panel.getBoundingClientRect().top <= anchor) next = index;
      });

      setActiveIndex(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionRef]);

  return activeIndex;
}

function ScrollRevealImage({ src, reducedMotion }: { src: string; reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-2xl shadow-card transition-all duration-700 ease-out",
        IMAGE_CLASS,
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-[0.97] opacity-0",
      )}
    >
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

function StickyExpectationText({
  items,
  activeIndex,
}: {
  items: ExpectationItem[];
  activeIndex: number;
}) {
  return (
    <div className="sticky top-28 pt-2">
      <div className="relative min-h-[52px]">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "transition-all duration-500 ease-out",
              index === activeIndex
                ? "relative translate-y-0 opacity-100"
                : "pointer-events-none absolute inset-0 -translate-y-2 opacity-0",
            )}
          >
            <h3 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[33px] sm:leading-tight md:text-[36px]">
              {item.label}
            </h3>
            {/* body intentionally hidden — title only per design */}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpectationPanel({
  item,
  index,
  reducedMotion,
}: {
  item: ExpectationItem;
  index: number;
  reducedMotion: boolean;
}) {
  return (
    <ScrollReveal delay={index * 60}>
      <article
        data-expectation-panel={index}
        className="min-h-[88vh] pb-20 md:min-h-[100vh] md:pb-28"
      >
      <h3 className="mb-10 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 md:hidden">
        {item.label}
      </h3>

      <div className="max-w-[620px] pr-16 md:pr-24">
        <div className="flex justify-start md:pl-2">
          <ScrollRevealImage src={item.images[0]!} reducedMotion={reducedMotion} />
        </div>

        <div className="mt-8 flex justify-start pl-[22%] md:mt-10 md:pl-[70%]">
          <ScrollRevealImage
            src={item.images[1] ?? item.images[0]!}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>
      </article>
    </ScrollReveal>
  );
}

export function ExpectationsSection({ items }: { items: ExpectationItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const activeIndex = useActivePanelOnScroll(sectionRef);

  return (
    <section ref={sectionRef} className="container-page pb-24">
      <ScrollReveal>
        <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[33px] sm:leading-tight md:text-[36px]">
          What you can expect from us
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-30 md:grid-cols-[minmax(500px,540px)_minmax(0,1fr)] md:gap-50">
        <div className="hidden md:block">
          <StickyExpectationText items={items} activeIndex={activeIndex} />
        </div>

        <div>
          {items.map((item, index) => (
            <ExpectationPanel
              key={item.label}
              item={item}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
