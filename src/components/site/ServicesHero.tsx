import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { ServiceHeroContent } from "@/data/services-hero-slides";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CAL_BOOKING_URL } from "@/lib/cal";

const SLIDE_INTERVAL_MS = 5000;
const FADE_MS = 1000;

function splitTitle(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return { first: title, second: null as string | null };
  return {
    first: words.slice(0, -1).join(" "),
    second: words[words.length - 1]!,
  };
}

export function ServicesHero({
  content,
  images,
}: {
  content: ServiceHeroContent;
  images: readonly string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { first, second } = splitTitle(content.title);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative min-h-[480px] overflow-hidden md:min-h-[620px]">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden={index !== activeIndex}
            className="absolute inset-0 h-full w-full object-cover motion-reduce:transition-none"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/55" />

      <div className="container-page relative flex min-h-[480px] items-center md:min-h-[640px]">
        <ScrollReveal className="max-w-[540px] text-primary-foreground lg:mt-20">
          <h1 className="text-5xl font-bold leading-[1.05] md:text-[64px] md:leading-[1.02]">
            {first}
            {second ? (
              <>
                <br />
                {second}
              </>
            ) : null}
          </h1>

          <div className="mt-5 h-[3px] w-11 bg-brand" aria-hidden />

          <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-primary-foreground/90">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand"
            >
              {content.primaryBtnText}
            </a>
            <span className="text-xs font-medium text-primary-foreground/60">or</span>
            <Link
              to="/app-cost-calculator"
              className="inline-flex items-center rounded-full border border-primary-foreground/80 px-5 py-3 text-xs font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              {content.secondaryBtnText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
