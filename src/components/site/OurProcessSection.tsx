import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "During the Discovery Stage, we collaborate to outline your software and determine the key features for Version 1 Launch.",
    image: "/images/Discover.png",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We design complete flows and screens for every user type, bringing your app or website visually to life.",
    image: "/images/UIUX.png",
  },
  {
    number: "03",
    title: "Frontend Coding",
    description:
      "Your designs are transformed into real interactive pages. You'll receive previews to test and review.",
    image: "/images/frontend.png",
  },
  {
    number: "04",
    title: "Backend Coding",
    description:
      "We build out every feature and send you regular updated versions for review and feedback.",
    image: "/images/backend.png",
  },
  {
    number: "05",
    title: "Testing & Debugging",
    description:
      "We test the full app end-to-end and remove bugs to ensure everything works perfectly before launch.",
    image: "/images/testing.png",
  },
  {
    number: "06",
    title: "Version 1 Launch",
    description:
      "Your app goes live! We deploy to App Store, Google Play, or web hosting — ready for real users.",
    image: "/images/Launch.png",
  },
  {
    number: "07",
    title: "Maintenance & Upgrades",
    description:
      "We handle hosting, updates, bug fixes, and new features so your users always get the best experience.",
    image: "/images/Maintenance.png",
  },
] as const;

export function OurProcessSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="container-page pb-16">
      <ScrollReveal>
        <h2 className="text-2xl font-extrabold text-ink md:text-3xl">Our Process</h2>

        <div className="relative mt-10">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={step.number}
                className="group relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`grid grid-cols-[3rem_1fr] items-center gap-x-6 gap-y-2 border-b border-border/50 py-7 transition-colors duration-300 md:grid-cols-[4rem_minmax(140px,220px)_1fr_120px] md:gap-x-10 md:py-8 lg:grid-cols-[4rem_minmax(160px,240px)_1fr_160px] ${
                    isActive ? "bg-surface/60" : ""
                  }`}
                >
                  <span
                    className={`text-sm font-medium tabular-nums transition-colors duration-300 md:text-base ${
                      isActive ? "text-ink" : "text-ink-soft/60"
                    }`}
                  >
                    {step.number}
                  </span>

                  <h3
                    className={`text-base font-bold transition-colors duration-300 md:text-lg lg:text-xl ${
                      isActive ? "text-ink" : "text-ink-soft/70"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`col-span-2 flex items-start gap-2 text-sm leading-relaxed transition-colors duration-300 md:col-span-1 md:text-[15px] ${
                      isActive ? "text-ink-soft" : "text-ink-soft/60"
                    }`}
                  >
                    <span>{step.description}</span>
                    <ArrowUpRight
                      className={`mt-0.5 h-4 w-4 shrink-0 text-brand transition-all duration-300 ${
                        isActive ? "translate-x-0 translate-y-0 opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </p>

                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:block">
                    <div
                      className={`h-[88px] w-[88px] overflow-hidden rounded-full border-4 border-background shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 lg:h-[100px] lg:w-[100px] ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-90 opacity-0"
                      }`}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[3px] bg-brand transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                  aria-hidden
                />
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
