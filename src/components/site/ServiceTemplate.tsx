import { Link } from "@tanstack/react-router";
import { openCalBookingTab } from "@/lib/cal";
import type { ServiceHeroContent } from "@/data/services-hero-slides";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServiceBulletList, ServiceSectionBody, type ServiceSectionContent } from "@/components/site/ServiceBulletList";
// import { ServiceCTA } from "./ServiceCTA";
import { ServicesHero } from "./ServicesHero";
import { ExpectationsSection } from "./ExpectationsSection";
import { ServiceClosingSection } from "./ServiceClosingSection";
import { CTASection } from "./CTASection";
import { OurProcessSection } from "./OurProcessSection";
import { CategorySubServicesSection } from "./CategorySubServicesSection";
import { isCategorySlug } from "@/data/services-data";
import type { CategorySlug } from "@/data/services-data";

export interface ServiceTemplateData {
  /** Route slug for this service page */
  slug?: string;
  /** Hero title, e.g. "Custom ERP Development" */
  title: string;
  /** Hero content and background images — sourced from static data or API */
  hero: {
    content: ServiceHeroContent;
    images: readonly string[];
  };
  /** Breadcrumb chain after Home */
  breadcrumb: string[];
  /** Intro paragraph below hero */
  intro: string;
  /** Black band section */
  blackBand: {
    title: string;
    body: ServiceSectionContent;
    linkLabel?: string;
    linkHref?: string;
    afterLink?: string;
    /** Image shown attached below */
    image?: string;
  };
  /** Blue block + image row */
  splitBlue: {
    title: string;
    body: ServiceSectionContent;
    image?: string;
  };
  /** Blue gradient two-column section */
  blueGradient: {
    left: { title: string; body: ServiceSectionContent };
    right: { title: string; body: ServiceSectionContent };
  };
  /** Expectations / Strategy-Execution-Creativity */
  expectations?: {
    label: string;
    body: ServiceSectionContent;
    images: string[];
  }[];
  /** Show the Our Process section (category overview pages only) */
  showOurProcess?: boolean;
}

const PLACEHOLDER = "/placeholder.svg";
const expectationImages = [
  "/images/img.png",
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img.png",
];

export function ServiceTemplate({ data }: { data: ServiceTemplateData }) {
    const expectations =
  data.expectations ??
  ([
    {
      label: "Strategy",
      body: [
        "We start every engagement by understanding the business goals, users, and constraints so the work delivers measurable outcomes.",
        "Discovery sessions define scope, priorities, and success metrics before build work begins.",
        "Stakeholder alignment keeps delivery focused on measurable business value.",
        "Risk areas and dependencies are surfaced early in the planning phase.",
      ],
      images: [expectationImages[0], expectationImages[1]],
    },
    {
      label: "Execution",
      body: [
        "Cross-functional teams ship in short, predictable cycles with design, engineering, QA, and DevOps coordinated end-to-end.",
        "Staging environments and automated checks reduce release risk.",
        "Progress is tracked through demos, tickets, and shared documentation.",
        "Integrations with your existing tools and workflows are handled in parallel.",
      ],
      images: [expectationImages[2], expectationImages[3]],
    },
    {
      label: "Creativity",
      body: [
        "We pair product thinking with craft so interfaces feel sharp, useful, and unmistakably yours — not generic templates.",
        "Visual and interaction design are refined for clarity, accessibility, and brand fit.",
        "Alternatives are explored early so the final experience feels distinctive.",
        "Post-launch iteration is informed by user feedback and performance data.",
      ],
      images: [expectationImages[4], expectationImages[5]],
    },
  ] as const);


  return (
    <>
      <ServicesHero content={data.hero.content} images={data.hero.images} />

      {/* b. Intro text */}
      <section className="container-page pt-14 pb-10">
        <ScrollReveal>
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{data.title}</h2>
            <nav aria-label="Breadcrumb" className="hidden text-xs text-ink-soft md:block">
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
              {data.breadcrumb.map((b) => (
                <span key={b}>
                  <span className="mx-2">›</span>
                  <span className="text-brand">{b}</span>
                </span>
              ))}
            </nav>
          </div>
          <p className="mt-5 max-w-[1100px] text-sm leading-relaxed text-ink-soft">{data.intro}</p>
        </ScrollReveal>
      </section>

      {data.showOurProcess ? <OurProcessSection /> : null}

      {data.showOurProcess && data.slug && isCategorySlug(data.slug) ? (
        <CategorySubServicesSection
          categorySlug={data.slug as CategorySlug}
          title={data.title}
        />
      ) : null}

      {/* c. Black band + attached image */}
      <section className="container-page pb-16 ">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[20px]">
            <div className="bg-ink p-8 text-primary-foreground md:p-12">
              <h3 className="text-1xl font-bold md:text-3xl">{data.blackBand.title}</h3>
              <ServiceSectionBody
                content={data.blackBand.body}
                className="mt-5 max-w-[1000px] text-md text-primary-foreground/85"
                paragraphClassName="text-primary-foreground/85"
                listClassName="mt-5 max-w-[1000px] text-md text-primary-foreground/85"
                itemClassName="text-primary-foreground/85"
              />
            </div>
            <div className="aspect-[16/8] overflow-hidden">
              <img
                src="/images/web6.jpg"
                alt={data.blackBand.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* d. Blue block left + image right */}
      <section className="container-page pb-16">
        <ScrollReveal>
          <div className="grid min-h-[580px] overflow-hidden rounded-[2rem] shadow-card md:min-h-[620px] md:grid-cols-2 md:rounded-[2.5rem]">
            <div
              className="flex flex-col justify-center p-10 text-primary-foreground md:p-14 lg:p-16"
              style={{
                background: "linear-gradient(135deg, #d34b60 0%, #bb3e50 45%, #9b2d3f 100%)",
              }}
            >
              <h3 className="text-3xl font-bold leading-tight md:text-2xl lg:text-[2.75rem] lg:leading-[1.15]">
                {data.splitBlue.title}
              </h3>
              <ServiceSectionBody
                content={data.splitBlue.body}
                className="mt-6 text-base text-primary-foreground/95 md:text-lg"
                paragraphClassName="text-primary-foreground/95 md:leading-[1.75]"
                listClassName="mt-6 text-base text-primary-foreground/95 md:text-lg"
                itemClassName="text-primary-foreground/95 md:leading-[1.75]"
              />
              <button
                type="button"
                onClick={openCalBookingTab}
                className="mt-8 inline-flex w-fit items-center rounded-full border border-primary-foreground/80 px-6 py-2.5 text-sm font-bold transition hover:bg-primary-foreground/10"
              >
                Book a free call
              </button>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <img
                src={data.splitBlue.image ?? "/images/web5.jpg"}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* e. Blue gradient two-column */}
      <section className="container-page pb-20">
        <ScrollReveal>
          <div
            className="grid gap-10 overflow-hidden rounded-[2rem] p-10 text-primary-foreground md:min-h-[620px] md:grid-cols-2 md:gap-14 md:rounded-[2.5rem] md:p-14 lg:p-16"
            style={{
              background: "linear-gradient(135deg, #418ed6 0%, #2d6cb5 50%, #1a3d6e 100%)",
            }}
          >
            <TwoColBlock {...data.blueGradient.left} showButton={false} />
            <TwoColBlock {...data.blueGradient.right} />
          </div>
        </ScrollReveal>
      </section>

      <ExpectationsSection items={[...expectations]} />

      <ServiceClosingSection />

      {/* g. CTA */}
      {/* <ServiceCTA /> */}
      <CTASection />
    </>
  );
}

function TwoColBlock({
  title,
  body,
  showButton = true,
}: {
  title: string;
  body: ServiceSectionContent;
  showButton?: boolean;
}) {
  return (
    <div className="flex h-full flex-col justify-start">
      <h3 className="text-xl font-bold leading-tight md:text-2xl lg:text-[30px] lg:leading-[1.25]">
        {title}
      </h3>

      <ServiceSectionBody
        content={body}
        className="mt-5 text-sm text-primary-foreground/90 md:text-[15px]"
        paragraphClassName="text-primary-foreground/90 leading-[1.7]"
        listClassName="mt-5 text-sm text-primary-foreground/90 md:text-[15px]"
        itemClassName="text-primary-foreground/90 leading-[1.7]"
      />

      {showButton ? (
        <button
          type="button"
          onClick={openCalBookingTab}
          className="mt-7 inline-flex w-fit items-center rounded-full border border-primary-foreground/80 px-6 py-2.5 text-sm font-bold transition hover:bg-primary-foreground/10"
        >
          Book a free call
        </button>
      ) : null}
    </div>
  );
}

export default ServiceTemplate;
