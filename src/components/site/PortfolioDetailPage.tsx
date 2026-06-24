import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Brain,
  Calendar,
  ClipboardList,
  CreditCard,
  Dumbbell,
  Globe,
  LayoutDashboard,
  Layers,
  MessageSquare,
  MousePointer2,
  Play,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  getSimilarPortfolioItems,
  portfolioDetailNavItems,
  portfolioFeatureThemes,
  type PortfolioItem,
} from "@/data/portfolio-data";
import { ServiceBulletList } from "@/components/site/ServiceBulletList";
import { CTASection } from "@/components/site/CTASection";
import { openCalBookingTab } from "@/lib/cal";
import { cn } from "@/lib/utils";

const FEATURE_ICONS: { match: RegExp; icon: LucideIcon }[] = [
  { match: /league|sport/i, icon: Users },
  { match: /fitness|sharing/i, icon: Dumbbell },
  { match: /push|real-time|notification/i, icon: Bell },
  { match: /recommend/i, icon: Layers },
  { match: /ai|ml|scoring|recruitment/i, icon: Brain },
  { match: /analytics|report|dashboard/i, icon: BarChart3 },
  { match: /admin/i, icon: LayoutDashboard },
  { match: /progress|tracking/i, icon: ClipboardList },
  { match: /booking/i, icon: Calendar },
  { match: /crm/i, icon: Users },
  { match: /chat|messaging/i, icon: MessageSquare },
  { match: /stripe|paypal|payment|subscription/i, icon: CreditCard },
  { match: /auth|onboarding|kyc/i, icon: Shield },
  { match: /robot/i, icon: Bot },
];

function getFeatureIcon(title: string): LucideIcon {
  return FEATURE_ICONS.find(({ match }) => match.test(title))?.icon ?? MousePointer2;
}

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "overview");

  useEffect(() => {
    const update = () => {
      const anchor = window.innerHeight * 0.32;
      let next = sectionIds[0] ?? "overview";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= anchor) {
          next = id;
        }
      }

      setActiveId(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return activeId;
}

function PortfolioSidebar({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav className="rounded-xl border border-border bg-card p-4 md:p-5" aria-label="Portfolio sections">
      <ul className="space-y-1">
        {portfolioDetailNavItems.map((item) => {
          const isActive = item.enabled && activeId === item.id;

          return (
            <li key={item.id}>
              <button
                type="button"
                disabled={!item.enabled}
                onClick={() => item.enabled && onNavigate(item.id)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition",
                  isActive
                    ? "font-bold text-ink"
                    : item.enabled
                      ? "text-ink-soft hover:text-ink"
                      : "cursor-default text-ink-soft/50",
                )}
              >
                {isActive ? (
                  <span className="h-px w-3 shrink-0 bg-ink" aria-hidden />
                ) : (
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ink-soft/40" aria-hidden />
                )}
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function PortfolioOverview({ item }: { item: PortfolioItem }) {
  const infoItems = [
    { label: "Team size", value: item.teamSize },
    { label: "Service type", value: item.serviceType },
    { label: "Timeline", value: item.timeline },
    { label: "Region", value: item.region },
  ];

  return (
    <section id="overview" className="scroll-mt-28">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-[42px] lg:leading-tight">
          {item.title}
        </h1>

        {(item.websiteUrl || item.playStoreUrl) && (
          <div className="flex flex-wrap items-center gap-2 lg:shrink-0">
            {item.websiteUrl ? (
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-ink transition hover:border-ink/30"
              >
                <Globe className="h-3.5 w-3.5" />
                Website
              </a>
            ) : null}
            {item.playStoreUrl ? (
              <a
                href={item.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-ink transition hover:border-ink/30"
              >
                <Play className="h-3.5 w-3.5" />
                Play Store
              </a>
            ) : null}
          </div>
        )}
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-[15px]">
        {item.description}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4">
        {infoItems.map((info) => (
          <div key={info.label}>
            <p className="text-xs text-ink-soft">{info.label}</p>
            <p className="mt-1 text-sm font-bold text-ink md:text-base">{info.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-ink">
        <img
          src={item.bannerImage}
          alt={`${item.title} project banner`}
          className="aspect-[16/7] w-full object-cover"
        />
      </div>
    </section>
  );
}

function PortfolioKeyFeatures({ item }: { item: PortfolioItem }) {
  const features = item.keyFeatures.filter((feature) => feature.title?.trim());

  return (
    <section id="features-framework" className="scroll-mt-28 border-t border-border pt-14 md:pt-16">
      <h2 className="text-2xl font-bold text-ink md:text-3xl">Key Features</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-[15px]">
        A closer look at the core features and technologies that shape this project designed for
        efficiency, innovation, and impact.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const theme = portfolioFeatureThemes[index % portfolioFeatureThemes.length];
          const Icon = getFeatureIcon(feature.title);

          return (
            <article
              key={`${feature.title}-${index}`}
              className={cn(
                "flex min-h-[168px] flex-col border border-border p-7",
                theme.card,
              )}
            >
              <div
                className={cn(
                  "grid h-11 w-11 place-items-center rounded-lg",
                  theme.icon,
                )}
              >
                <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-sm font-bold leading-snug text-ink md:text-[15px]">
                {feature.title}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const TECH_TEXT_STYLES: Record<string, string> = {
  "Node.js": "font-bold text-[#3c873a]",
  AWS: "font-bold tracking-wide text-[#232f3e]",
  Framer: "font-bold text-[#111111]",
  Figma: "font-bold text-[#111111]",
  Rails: "font-bold text-[#cc0000]",
  "Ruby on Rails": "font-bold text-[#cc0000]",
  React: "font-bold text-[#61dafb]",
  Python: "font-bold text-[#3776ab]",
  Flutter: "font-bold text-[#02569b]",
  Firebase: "font-bold text-[#ffca28]",
  Stripe: "font-bold text-[#635bff]",
  PostgreSQL: "font-bold text-[#336791]",
  MongoDB: "font-bold text-[#47a248]",
  Docker: "font-bold text-[#2496ed]",
  Kotlin: "font-bold text-[#7f52ff]",
  Redis: "font-bold text-[#dc382d]",
  Swift: "font-bold text-[#f05138]",
  SAP: "font-bold text-[#0faaff]",
  Odoo: "font-bold text-[#714b67]",
  GraphQL: "font-bold text-[#e535ab]",
  Azure: "font-bold text-[#0078d4]",
  "Power BI": "font-bold text-[#f2c811]",
  "SQL Server": "font-bold text-[#cc2927]",
  "React Native": "font-bold text-[#61dafb]",
};

function TechStackMark({ name }: { name: string }) {
  if (!name.trim()) return null;

  return (
    <div className="flex h-14 min-w-[100px] items-center justify-center rounded-lg border border-border/70 bg-white px-4 md:h-16 md:min-w-[112px]">
      <span
        className={cn(
          "text-center text-xs font-semibold leading-tight md:text-sm",
          TECH_TEXT_STYLES[name] ?? "text-ink",
        )}
      >
        {name}
      </span>
    </div>
  );
}

function PortfolioTechStack({ item }: { item: PortfolioItem }) {
  const stack = item.techStack.filter((tech) => tech.name?.trim());

  return (
    <section id="tech-stack" className="scroll-mt-28 border-t border-border pt-14 md:pt-16">
      <h2 className="text-2xl font-bold text-ink md:text-3xl">Technology Stack</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-[15px]">
        A closer look at the core features and technologies that shape this project, designed for
        efficiency, innovation, and impact.
      </p>

      <div className="mt-10 rounded-2xl border border-border bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12 lg:gap-x-16">
          {stack.map((tech) => (
            <TechStackMark key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioKeyResults({ item }: { item: PortfolioItem }) {
  return (
    <section id="key-results" className="scroll-mt-28 border-t border-border pt-14 md:pt-16">
      <h2 className="text-2xl font-bold text-ink md:text-3xl">Key Results</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-[15px]">
        Real numbers. Real results. These highlights capture the difference our work made in growth,
        visibility, and user engagement.
      </p>

      <div className="mt-10 rounded-2xl bg-surface px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-6">
          {item.keyResults.map((result, index) => (
            <div
              key={`${result.value}-${result.label}`}
              className={cn(
                "flex-1 text-center md:text-left",
                index > 0 && "md:border-l md:border-border md:pl-8",
              )}
            >
              <p className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{result.value}</p>
              <p className="mt-2 text-sm text-ink-soft md:text-[15px]">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioVisualHighlights({ item }: { item: PortfolioItem }) {
  const images = item.visualHighlightsImages.filter(Boolean);
  const [primary, secondary, tertiary] = images;

  if (!primary) return null;

  return (
    <section id="visual-highlights" className="scroll-mt-28 border-t border-border pt-14 md:pt-16">
      <h2 className="text-2xl font-bold text-ink md:text-3xl">Visual Highlights</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-[15px]">
        A visual overview of the finished product highlighting its design.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <div className="overflow-hidden rounded-2xl bg-ink">
          <img
            src={primary}
            alt={`${item.title} visual highlight`}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>

        {secondary && tertiary ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-ink">
              <img
                src={secondary}
                alt={`${item.title} visual highlight 2`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-ink">
              <img
                src={tertiary}
                alt={`${item.title} visual highlight 3`}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PortfolioAboutClient({ item }: { item: PortfolioItem }) {
  return (
    <section id="about-client" className="scroll-mt-28 border-t border-border pt-14 md:pt-16">
      <div className="grid min-h-[420px] overflow-hidden rounded-[2rem] shadow-card md:min-h-[520px] md:grid-cols-2 md:rounded-[2.5rem]">
        <div
          className="flex flex-col justify-center p-8 text-primary-foreground md:p-12 lg:p-14"
          style={{
            background: "linear-gradient(135deg, #d34b60 0%, #bb3e50 45%, #9b2d3f 100%)",
          }}
        >
          <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-[2.5rem]">
            {item.clientSection.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/95 md:text-[15px] md:leading-[1.75]">
            {item.clientSection.body}
          </p>
        </div>
        <div className="relative min-h-[260px] md:min-h-full">
          <img
            src={item.clientSection.image}
            alt={item.clientSection.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function PortfolioChallenges({ item }: { item: PortfolioItem }) {
  return (
    <section id="challenges" className="scroll-mt-28 border-t border-border pt-14 md:pt-16">
      <div className="overflow-hidden rounded-[20px]">
        <div className="bg-ink p-8 text-primary-foreground md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">{item.challenges.title}</h2>
          <ServiceBulletList
            items={item.challenges.points}
            className="mt-5 max-w-[1000px] text-sm text-primary-foreground/85 md:text-[15px]"
            itemClassName="text-primary-foreground/85 leading-relaxed"
          />
        </div>
        <div className="aspect-[16/8] overflow-hidden">
          <img
            src={item.challenges.image}
            alt={item.challenges.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function PortfolioBlueSection({ item }: { item: PortfolioItem }) {
  return (
    <section className="border-t border-border pt-14 md:pt-16">
      <div
        className="grid gap-10 overflow-hidden rounded-[2rem] p-8 text-primary-foreground md:min-h-[560px] md:grid-cols-2 md:gap-14 md:rounded-[2.5rem] md:p-12 lg:p-14"
        style={{
          background: "linear-gradient(135deg, #418ed6 0%, #2d6cb5 50%, #1a3d6e 100%)",
        }}
      >
        <div className="flex h-full flex-col justify-start">
          <h2 className="text-xl font-bold leading-tight md:text-2xl lg:text-[30px] lg:leading-[1.25]">
            {item.blueSection.leftTitle}
          </h2>
          <ServiceBulletList
            items={item.blueSection.leftBody}
            className="mt-5 text-sm text-primary-foreground/90 md:text-[15px]"
            itemClassName="text-primary-foreground/90 leading-[1.7]"
          />
        </div>

        <div className="flex h-full flex-col justify-start">
          <h2 className="text-xl font-bold leading-tight md:text-2xl lg:text-[30px] lg:leading-[1.25]">
            {item.blueSection.rightTitle}
          </h2>
          <ServiceBulletList
            items={item.blueSection.rightBody}
            className="mt-5 text-sm text-primary-foreground/90 md:text-[15px]"
            itemClassName="text-primary-foreground/90 leading-[1.7]"
          />
          <button
            type="button"
            onClick={openCalBookingTab}
            className="mt-7 inline-flex w-fit items-center rounded-full border border-primary-foreground/80 px-6 py-2.5 text-sm font-bold transition hover:bg-primary-foreground/10"
          >
            Book a free call
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioSimilarProjects({ current }: { current: PortfolioItem }) {
  const similar = getSimilarPortfolioItems(current);

  return (
    <section id="similar-projects" className="scroll-mt-28 border-t border-border py-14 md:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Similar Projects</h2>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:underline"
        >
          See similar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {similar.map((project) => (
          <Link
            key={project.id}
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="group relative block aspect-square overflow-hidden bg-surface"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="text-center text-base font-bold tracking-tight text-white md:text-lg">
                {project.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PortfolioDetailPage({ item }: { item: PortfolioItem }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const enabledSectionIds = portfolioDetailNavItems
    .filter((item) => item.enabled)
    .map((item) => item.id);
  const activeId = useActiveSection(enabledSectionIds);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div ref={mainRef} className="bg-background pt-10 md:pt-14">
        <div className="container-page">
          <Link
            to="/portfolio"
            className="text-sm font-semibold text-brand transition hover:underline"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            <aside className="lg:w-[220px] lg:shrink-0">
              <div className="lg:sticky lg:top-28">
                <PortfolioSidebar activeId={activeId} onNavigate={scrollToSection} />
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <PortfolioOverview item={item} />
              <PortfolioKeyFeatures item={item} />
              <PortfolioTechStack item={item} />
              <PortfolioKeyResults item={item} />
              <PortfolioVisualHighlights item={item} />
              <PortfolioAboutClient item={item} />
              <PortfolioChallenges item={item} />
              <PortfolioBlueSection item={item} />
            </div>
          </div>
        </div>

        <div className="container-page">
          <PortfolioSimilarProjects current={item} />
        </div>
      </div>

      <CTASection />
    </>
  );
}

export function PortfolioNotFound() {
  return (
    <section className="container-page py-20 md:py-28">
      <Link
        to="/portfolio"
        className="text-sm font-semibold text-brand transition hover:underline"
      >
        ← Back to portfolio
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-ink md:text-4xl">Project not found</h1>
      <p className="mt-3 max-w-lg text-sm text-ink-soft md:text-base">
        The portfolio project you are looking for does not exist or may have been moved.
      </p>
      <Link to="/portfolio" className="btn-primary mt-8">
        View all projects
      </Link>
    </section>
  );
}
