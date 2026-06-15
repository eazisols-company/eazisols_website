import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ServiceCTA } from "./ServiceCTA";

export interface ServiceTemplateData {
  /** Hero title, e.g. "Custom ERP Development" */
  title: string;
  /** Hero subtitle */
  heroSubtitle: string;
  /** Breadcrumb chain after Home */
  breadcrumb: string[];
  /** Intro paragraph below hero */
  intro: string;
  /** Black band section */
  blackBand: {
    title: string;
    body: string;
    linkLabel?: string;
    linkHref?: string;
    afterLink?: string;
    /** Image shown attached below */
    image?: string;
  };
  /** Blue block + image row */
  splitBlue: {
    title: string;
    body: string;
    image?: string;
  };
  /** Blue gradient two-column section */
  blueGradient: {
    left: { title: string; body: string };
    right: { title: string; body: string };
  };
  /** Expectations / Strategy-Execution-Creativity */
  expectations?: {
    label: string;
    body: string;
    images: string[];
  }[];
}

const PLACEHOLDER = "/placeholder.svg";

export function ServiceTemplate({ data }: { data: ServiceTemplateData }) {
  const expectations =
    data.expectations ??
    ([
      {
        label: "Strategy",
        body: "We start every engagement by understanding the business goals, users, and constraints so the work delivers measurable outcomes.",
        images: [PLACEHOLDER, PLACEHOLDER],
      },
      {
        label: "Execution",
        body: "Cross-functional teams ship in short, predictable cycles — design, engineering, QA, and DevOps working together end-to-end.",
        images: [PLACEHOLDER, PLACEHOLDER],
      },
      {
        label: "Creativity",
        body: "We pair product thinking with craft so interfaces feel sharp, useful, and unmistakably yours — not generic templates.",
        images: [PLACEHOLDER, PLACEHOLDER],
      },
    ] as const);

  return (
    <>
      {/* a. Hero */}
      <section className="relative min-h-[420px] overflow-hidden image-tile-bg md:min-h-[480px]">
        <div className="absolute inset-0 bg-ink/55" />
        <div className="container-page relative flex min-h-[420px] items-center md:min-h-[480px]">
          <div className="max-w-[520px] text-primary-foreground">
            <h1 className="text-5xl font-extrabold leading-[1] md:text-6xl">{data.title}</h1>
            <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-primary-foreground/85">
              {data.heroSubtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#start" className="btn-brand">Book a Free Call</a>
              <Link
                to="/app-cost-calculator"
                className="inline-flex items-center rounded-full border border-primary-foreground/70 px-5 py-3 text-xs font-bold text-primary-foreground"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* b. Intro text */}
      <section className="container-page pt-14 pb-10">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{data.title}</h2>
          <nav aria-label="Breadcrumb" className="hidden text-xs text-ink-soft md:block">
            <Link to="/" className="hover:text-brand">Home</Link>
            {data.breadcrumb.map((b) => (
              <span key={b}>
                <span className="mx-2">›</span>
                <span className="text-brand">{b}</span>
              </span>
            ))}
          </nav>
        </div>
        <p className="mt-5 max-w-[1100px] text-sm leading-relaxed text-ink-soft">{data.intro}</p>
      </section>

      {/* c. Black band + attached image */}
      <section className="container-page pb-16">
        <div className="overflow-hidden rounded-md">
          <div className="bg-ink p-8 text-primary-foreground md:p-12">
            <h3 className="text-2xl font-extrabold md:text-3xl">{data.blackBand.title}</h3>
            <p className="mt-5 max-w-[1000px] text-sm leading-relaxed text-primary-foreground/85">
              {data.blackBand.body}
            </p>
            {data.blackBand.linkLabel && (
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                With our{" "}
                <a
                  href={data.blackBand.linkHref ?? "#"}
                  className="font-semibold text-brand-2 underline underline-offset-4"
                >
                  {data.blackBand.linkLabel}
                </a>{" "}
                {data.blackBand.afterLink}
              </p>
            )}
          </div>
          <div className="aspect-[16/8] image-tile-bg" />
        </div>
      </section>

      {/* d. Blue block left + image right */}
      <section className="container-page pb-16">
        <div className="grid overflow-hidden rounded-md md:grid-cols-2">
          <div className="bg-brand p-8 text-primary-foreground md:p-12">
            <h3 className="text-2xl font-extrabold leading-tight md:text-3xl">
              {data.splitBlue.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/90">
              {data.splitBlue.body}
            </p>
            <button className="mt-6 inline-flex items-center rounded-full border border-primary-foreground/70 px-5 py-2 text-xs font-bold">
              Book a free call
            </button>
          </div>
          <div className="min-h-[320px] image-tile-bg" />
        </div>
      </section>

      {/* e. Blue gradient two-column */}
      <section className="container-page pb-20">
        <div
          className="grid gap-px overflow-hidden rounded-md p-8 text-primary-foreground md:grid-cols-2 md:p-12"
          style={{ background: "linear-gradient(135deg, var(--brand), var(--deep-blue))" }}
        >
          <TwoColBlock {...data.blueGradient.left} />
          <TwoColBlock {...data.blueGradient.right} />
        </div>
      </section>

      {/* f. Strategy / Execution / Creativity */}
      <section className="container-page pb-24">
        <h2 className="text-2xl font-extrabold text-ink">What you can expect from us</h2>
        <div className="mt-12 space-y-24">
          {expectations.map((row, idx) => (
            <ExpectationRow key={row.label} {...row} index={idx} />
          ))}
        </div>
      </section>

      {/* g. CTA */}
      <ServiceCTA />
    </>
  );
}

function TwoColBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 md:p-6">
      <h3 className="text-xl font-extrabold leading-tight md:text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">{body}</p>
      <button className="mt-6 rounded-full border border-primary-foreground/70 px-5 py-2 text-xs font-bold">
        Book a free call
      </button>
    </div>
  );
}

function ExpectationRow({
  label,
  body,
  images,
  index,
}: {
  label: string;
  body: string;
  images: string[];
  index: number;
}) {
  // Alternate composition for visual rhythm matching the reference collage
  const flip = index % 2 === 1;
  return (
    <div className="grid items-start gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
      <div className="pt-2">
        <h3 className="text-lg font-extrabold text-ink">{label}</h3>
        <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-ink-soft">{body}</p>
      </div>
      <div className="relative h-[360px] w-full">
        <div
          className={`absolute h-[180px] w-[180px] overflow-hidden rounded-md shadow-card transition-transform duration-500 hover:scale-105 ${
            flip ? "right-[35%] top-0" : "left-[35%] top-0"
          }`}
        >
          <img
            src={images[0]}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          className={`absolute h-[180px] w-[260px] overflow-hidden rounded-md shadow-card transition-transform duration-500 hover:scale-105 ${
            flip ? "left-[15%] bottom-0" : "right-[5%] bottom-0"
          }`}
        >
          <img
            src={images[1] ?? images[0]}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceTemplate;
