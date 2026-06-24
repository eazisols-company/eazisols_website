import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronUp, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CategorySlug } from "@/data/services-data";
import { getCategorySubServices } from "@/data/services-data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const AUTO_INTERVAL_MS = 4500;
const NAV_ACTIVE = "text-[#418ED6]";
const ITEM_HEIGHT = 128;

interface CategorySubServicesSectionProps {
  categorySlug: CategorySlug;
  title: string;
}

export function CategorySubServicesSection({ categorySlug, title }: CategorySubServicesSectionProps) {
  const items = getCategorySubServices(categorySlug);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(296);
  const listViewportRef = useRef<HTMLDivElement>(null);

  const isPaused = manualPaused || hovered;

  const translateY = (viewportHeight - ITEM_HEIGHT) / 2 - activeIndex * ITEM_HEIGHT;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + items.length) % items.length);
    },
    [items.length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useLayoutEffect(() => {
    const el = listViewportRef.current;
    if (!el) return;

    const update = () => setViewportHeight(el.clientHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  if (items.length === 0) return null;

  return (
    <section className="container-page pb-16">
      <ScrollReveal>
        <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{title}</h2>

        <div className="mt-10 overflow-hidden rounded-[1.25rem] border border-border/60 bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] md:rounded-[1.5rem]">
          <div className="grid md:grid-cols-[minmax(0,44%)_minmax(0,56%)]">
            {/* Left: sub-service list */}
            <div
              className="flex h-[420px] flex-col border-b border-border/50 p-6 md:h-[520px] md:border-b-0 md:border-r md:p-8 lg:p-10"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div
                ref={listViewportRef}
                className="h-[296px] shrink-0 overflow-hidden md:h-[384px]"
              >
                <div
                  className="transition-transform duration-700 ease-in-out will-change-transform"
                  style={{ transform: `translateY(${translateY}px)` }}
                >
                  {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const distance = Math.abs(index - activeIndex);

                    return (
                      <div
                        key={item.slug}
                        className="shrink-0 transition-opacity duration-500"
                        style={{
                          height: ITEM_HEIGHT,
                          opacity: isActive ? 1 : distance === 1 ? 0.35 : 0.18,
                        }}
                      >
                        <div className="relative h-full py-3 md:py-4">
                          <Link
                            to="/services/$slug"
                            params={{ slug: item.slug }}
                            className="group block h-full pr-10 transition-colors"
                            onMouseEnter={() => setActiveIndex(index)}
                          >
                            <h3
                              className={`text-lg font-bold leading-snug transition-colors duration-300 md:text-xl lg:text-[1.35rem] ${
                                isActive
                                  ? NAV_ACTIVE
                                  : "text-ink-soft/50 group-hover:text-ink-soft/70"
                              }`}
                            >
                              {item.label}
                            </h3>

                            <p
                              className={`mt-2 line-clamp-3 max-w-md text-sm leading-relaxed text-ink-soft transition-opacity duration-500 md:text-[15px] ${
                                isActive ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              {item.description}
                            </p>
                          </Link>

                          {isActive ? (
                            <button
                              type="button"
                              aria-label={manualPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setManualPaused((p) => !p);
                              }}
                              className="absolute right-0 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-ink-soft transition hover:border-[#418ED6]/40 hover:text-[#418ED6] md:top-4"
                            >
                              {manualPaused ? (
                                <Play className="h-3.5 w-3.5 fill-current" />
                              ) : (
                                <Pause className="h-3.5 w-3.5 fill-current" />
                              )}
                            </button>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto flex shrink-0 flex-col gap-2 self-start pt-4">
                <button
                  type="button"
                  aria-label="Previous sub-service"
                  onClick={goPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border/80 text-ink-soft transition hover:border-[#418ED6]/40 hover:text-[#418ED6]"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next sub-service"
                  onClick={goNext}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border/80 text-ink-soft transition hover:border-[#418ED6]/40 hover:text-[#418ED6]"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative h-[280px] md:h-[520px]">
              {items.map((item, index) => (
                <img
                  key={item.slug}
                  src={item.image}
                  alt={item.label}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card/20 via-transparent to-transparent md:from-card/30" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
