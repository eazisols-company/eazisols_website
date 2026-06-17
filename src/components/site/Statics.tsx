import { useEffect, useRef, useState } from "react";

function AnimatedNumber({
  value,
  duration = 2000,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = Math.floor(value * progress);

      setCurrent(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isVisible]);

  return (
    <span ref={ref}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Statics() {
  return (
    <section className=" py-16 md:py-20">
      <div className="container-page mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.05em] text-ink-soft">
            WE WORKED WITH ALL OF THEM
          </p>

          <h2 className="mb-3 text-3xl font-bold text-ink md:text-5xl">
            We got you covered
          </h2>

          <p className="mx-auto max-w-[800px] text-lg leading-relaxed text-ink-soft">
            Leading global tech services firm, delivering innovative solutions,
            exceptional results, and fostering lasting client relationships.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[5fr_6fr]">
          <div className="text-center">
            <div className="mx-auto inline-block max-w-[280px] md:max-w-[400px]">
              <img
                src="/images/Sheild.png"
                alt="Illustration"
                className="h-auto max-w-full"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[720px] lg:mx-0">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-[#5f5b5b] bg-white p-2 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <p className="mb-2 text-sm tracking-[0.02em] text-[#6b7280]">
                    We coded and designed over
                  </p>

                  <div className="mb-1 text-[44px] font-medium leading-tight text-[#0d1321]">
                    <AnimatedNumber value={40000} />
                  </div>

                  <div className="text-base text-[#374151]">Hours</div>

                  <img
                    src="/clock.svg"
                    alt="Clock"
                    className="mt-3 h-auto max-w-[70px]"
                  />
                </div>

                <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-[#5f5b5b] bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <img
                    src="/technical.svg"
                    alt="Code"
                    className="mb-3 h-[30px] w-[70px]"
                  />

                  <p className="mb-2 text-sm tracking-[0.02em] text-[#6b7280]">
                    We wrote over
                  </p>

                  <div className="mb-1 text-[44px] font-medium leading-tight text-[#0d1321]">
                    <AnimatedNumber value={50000} suffix="+" />
                  </div>

                  <div className="text-base text-[#374151]">lines of code</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-[#5f5b5b] bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <img
                    src="/people.svg"
                    alt="People"
                    className="mb-3 h-auto max-w-[70px]"
                  />

                  <div className="mb-1 text-[44px] font-medium leading-tight text-[#0d1321]">
                    <AnimatedNumber value={3500000} suffix="+" />
                  </div>

                  <p className="mb-0 text-sm text-[#4b5563]">
                    people use the apps monthly that we created
                  </p>
                </div>

                <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-[#5f5b5b] bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <p className="mb-2 text-sm tracking-[0.02em] text-[#6b7280]">
                    We worked with over
                  </p>

                  <div className="mb-1 text-[44px] font-medium leading-tight text-[#0d1321]">
                    <AnimatedNumber value={50} suffix="+" />
                  </div>

                  <div className="text-base text-[#374151]">
                    Different companies
                  </div>

                  <img
                    src="/building.svg"
                    alt="Building"
                    className="mt-3 h-auto max-w-[70px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}