import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Brain,
  Blocks,
  Smartphone,
  Globe,
  Rocket,
  TrendingUp,
  Sparkles,
  Target,
  Zap,
  Lightbulb,
  User,
  Mail,
  Globe2,
  Phone,
  FileText,
  MessageCircle,
  Clock,
  ShieldCheck,
  Calendar,
  Layers,
} from "lucide-react";
import {
  COUNTRIES,
  countryFlag,
  formatCountryOption,
  formatPhonePrefix,
  getCountryByCode,
} from "@/lib/countries";

export const Route = createFileRoute("/app-cost-calculator")({
  head: () => ({
    meta: [
      { title: "App Cost Calculator — eazisols" },
      { name: "description", content: "Estimate the cost to build an app with eazisols." },
    ],
  }),
  component: CalculatorPage,
});

/* ===================== PAGE ===================== */

function CalculatorPage() {
  const [open, setOpen] = useState(false);
  return open ? (
    <Wizard onClose={() => setOpen(false)} />
  ) : (
    <Landing onStart={() => setOpen(true)} />
  );
}

/* ===================== LANDING ===================== */

const appTypes = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "iOS, Android, cross-platform",
    price: "£8,000 – £80,000+",
  },
  { icon: Globe, title: "Web Apps", subtitle: "SaaS, PWAs, portals", price: "£6,000 – £95,000+" },
  {
    icon: Sparkles,
    title: "AI / ML",
    subtitle: "ML, agents, automations",
    price: "£12,000 – £100,000+",
  },
  {
    icon: Layers,
    title: "Blockchain",
    subtitle: "Smart contracts, DeFi, Web3",
    price: "£16,000 – £120,000+",
  },
];

function Landing({ onStart }: { onStart: () => void }) {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-28">
        <div className="absolute left-1/2 top-8 h-56 w-[520px] -translate-x-1/2 rounded-full bg-[var(--brand)]/10 blur-3xl" />
        <div className="container-page relative pb-16">
          <div className="mx-auto max-w-[1000px]">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[var(--brand)]">
              App development cost calculator
            </p>
            <h1 className="mt-5 max-w-[650px] text-5xl font-bold leading-[1.1] text-ink md:text-[56px]">
              How Much Does It Cost to Build an App?
            </h1>
            <p className="mt-6 max-w-[760px] text-[17px] leading-relaxed text-ink">
              Get a free, personalised cost report for iOS, Android, or web apps — delivered to your
              email and WhatsApp in minutes.
            </p>
            <p className="mt-4 max-w-[760px] text-[14px] leading-relaxed text-ink">Building an app in the United Kingdom typically costs between £4,000 and £120,000+ depending on the type, platform, and features. The cost to develop an app varies based on whether you need iOS, Android, or a web app, the complexity of features, and whether you use a freelancer, an agency, or a dedicated development company like Tecaudex. Complete our 2-minute calculator to get a personalised cost breakdown and project roadmap sent directly to your inbox.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-2)]"
              >
                Get Your Personalised Report <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-xs font-medium text-ink-soft">
                Free · 2 minutes · No signup
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Instant detailed report",
                "Sent to email & WhatsApp",
                "370+ estimates generated",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border  px-4 py-2 text-xs font-semibold text-ink-soft bg-[#f7f7f7]"
                >
                  <Check className="h-3.5 w-3.5 text-[var(--brand)]" /> {item}
                </span>
              ))}
            </div>
            <p className="mt-16 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
              Explore unique app development cost ranges
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-4">
              {appTypes.map((type) => (
                <article
                  key={type.title}
                  className="rounded-xl bg-surface p-5 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#e4e4e3] text-ink-soft">
                    <type.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-ink">{type.title}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{type.subtitle}</p>
                  <p className="mt-5 text-sm font-extrabold text-ink">{type.price}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* STATS */}
      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { v: "80+", l: "Projects delivered" },
              { v: "10+", l: "Countries served" },
              { v: "370+", l: "Estimates generated" },
              { v: "£2M+", l: "Estimated via calculator" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-3xl font-extrabold text-ink md:text-4xl">{s.v}</p>
                <p className="mt-2 text-xs text-ink-soft">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink-soft">
            Trusted by startups and enterprise across the United Kingdom and beyond
          </p>
        </div>
      </section>

     <section className="py-24 text-center">
  <div className="container-page mx-auto max-w-[820px]">
    <h2 className="text-2xl font-bold text-ink-soft">
      Get your estimate in 3 simple steps
    </h2>

    <div className="relative mt-12">
      <div className="pointer-events-none absolute left-[17%] top-5 hidden h-px w-[32%] bg-[#d9d9d9] md:block" />
      <div className="pointer-events-none absolute right-[17%] top-5 hidden h-px w-[32%] bg-[#d9d9d9] md:block" />

      <div className="grid gap-10 md:grid-cols-3">
        {[
          "Pick your app type|Select the platforms and technology for your project",
          "Describe your project|Tell our AI about your idea and specific requirements",
          "Get your personalised report|Receive a detailed cost breakdown and roadmap",
        ].map((item, i) => {
          const [t, d] = item.split("|");
          return (
            <div key={item} className="relative z-10">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-5 font-bold text-ink">{t}</h3>
              <p className="mx-auto mt-2 max-w-[210px] text-sm text-ink-soft">{d}</p>
            </div>
          );
        })}
      </div>
    </div>

    <button
      onClick={onStart}
      className="mt-12 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-2)]"
    >
      Get Your Personalised Report <ArrowRight className="h-4 w-4" />
    </button>

    <p className="mt-3 text-xs text-ink-soft">Takes less than 2 minutes</p>
  </div>
</section>

      {/* AFFECT */}
      <section className="bg-surface/60 py-24">
        <div className="container-page">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
              What you should know
            </p>
            <h2 className="mt-3 max-w-[760px] text-3xl font-bold leading-tight text-neutral-900 md:text-[38px]">
              What Affects the Cost to Build an App in the United Kingdom?
            </h2>
            <p className="mt-4 max-w-[640px] text-[15px] text-ink-soft">
              Every project is unique. Here are the key factors that determine your final
              development cost.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  t: "App type and platform",
                  d: "iOS, Android, or cross-platform (Flutter/React Native) apps each have different cost profiles. A cross-platform app typically costs 30–40% less than building native iOS and Android separately.",
                },
                {
                  t: "Features and complexity",
                  d: "A simple MVP with 3–5 screens costs far less than a full feature marketplace or fintech platform. Every feature adds development time.",
                },
                {
                  t: "Design requirements",
                  d: "Custom UI/UX design adds to the budget but significantly improves user retention. Basic apps use templates, complex products need bespoke design.",
                },
                {
                  t: "Team location",
                  d: "Agencies in the United Kingdom typically charge premium rates. Offshore teams with United Kingdom timezone alignment (like eazisols) deliver the same quality at significantly lower rates.",
                },
                {
                  t: "Ongoing maintenance",
                  d: "Factor in 15–20% of your build cost annually for updates, hosting, and bug fixes.",
                },
              ].map((c) => (
                <article key={c.t} className="rounded-xl bg-card p-6">
                  <h3 className="text-sm font-bold text-brand-500">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.d}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={onStart}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
              >
                Get your personalised cost report <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-page mx-auto max-w-[760px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
            Common questions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-[40px]">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              {
                q: "How much does it cost to make an app in the United Kingdom?",
                a: "Typical costs range from £8,000 for a simple MVP to £120,000+ for complex enterprise platforms. Most projects fall between £20,000 and £60,000.",
              },
              {
                q: "How accurate is this cost calculator?",
                a: "Our calculator uses real project data from 370+ delivered apps. Estimates are typically within 10–15% of the final quote.",
              },
              {
                q: "How long does it take to build an app?",
                a: "MVPs take 2–4 months. Growth-ready apps take 4–8 months depending on scope and integrations.",
              },
              {
                q: "Is my data secure?",
                a: "Yes. Your information is never sold or shared. Reports are delivered only to your email and WhatsApp.",
              },
              {
                q: "What happens after I get my estimate?",
                a: "Our team will reach out within 24 hours to discuss your project, refine the scope, and answer any questions.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-[15px] font-semibold text-ink">
                  {f.q}
                  <ChevronDown className="h-4 w-4 text-ink-soft transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-surface py-20">
        <div className="container-page mx-auto max-w-[760px] text-center">
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">
            Ready for your free estimate?
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Join 370+ businesses who've received their personalised report.
          </p>
          <p className="mt-1 text-xs text-ink-soft">
            Takes 2 minutes · report sent to your email and WhatsApp
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={onStart}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-2)]"
            >
              Get Your Personalised Report <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-ink transition hover:bg-surface"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===================== WIZARD ===================== */

type Form = {
  types: string[];
  scope: "mvp" | "growth" | null;
  description: string;
  features: Record<string, boolean>;
  name: string;
  email: string;
  country: string;
  phone: string;
};

const STEPS = ["Type", "Scale", "Describe", "Details", "Report"] as const;

const TYPE_OPTIONS = [
  {
    id: "ai",
    title: "AI/ML Solutions",
    desc: "Machine learning, NLP, computer vision and AI integrations",
    icon: Brain,
  },
  {
    id: "blockchain",
    title: "Blockchain",
    desc: "Smart contracts, DeFi, NFTs and Web3 applications",
    icon: Blocks,
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    desc: "iOS, Android and cross-platform mobile applications",
    icon: Smartphone,
    popular: true,
  },
  {
    id: "web",
    title: "Web Applications",
    desc: "Progressive web apps, SaaS platforms and websites",
    icon: Globe,
  },
];

const FEATURES: {
  category: string;
  items: { id: string; name: string; desc: string; hours: number }[];
}[] = [
  {
    category: "Authentication",
    items: [
      {
        id: "auth",
        name: "User Authentication System",
        desc: "Secure user registration, login, and password reset functionality with JWT token management. Includes email verification and basic role-based access control.",
        hours: 32,
      },
    ],
  },
  {
    category: "Core Features",
    items: [
      {
        id: "ai-fw",
        name: "AI Model Integration Framework",
        desc: "Core framework for integrating and managing AI models with proper error handling and fallback mechanisms. Supports multiple model types and providers.",
        hours: 48,
      },
      {
        id: "nlp",
        name: "Natural Language Processing Engine",
        desc: "Advanced text processing capabilities including sentiment analysis, entity extraction, and language detection. Integrates with popular NLP APIs and custom models.",
        hours: 56,
      },
      {
        id: "ml",
        name: "Machine Learning Pipeline",
        desc: "Automated pipeline for data preprocessing, model training, validation, and deployment. Includes support for common ML algorithms and custom model development.",
        hours: 72,
      },
      {
        id: "rtd",
        name: "Real-time Data Processing",
        desc: "Stream processing capabilities for handling real-time data inputs and providing instant AI-powered insights. Supports high throughput data ingestion.",
        hours: 44,
      },
      {
        id: "api",
        name: "API Gateway and Rate Limiting",
        desc: "Secure API gateway with rate limiting, request throttling, and API key management. Includes comprehensive logging and monitoring capabilities.",
        hours: 28,
      },
      {
        id: "mti",
        name: "Model Training Interface",
        desc: "User-friendly interface for training custom AI models with parameter tuning, progress tracking, and result visualization. Includes model versioning and comparison tools.",
        hours: 48,
      },
      {
        id: "asf",
        name: "Advanced Search and Filtering",
        desc: "Intelligent search functionality with AI-powered suggestions, filters, and natural language query support. Includes full-text search and semantic matching.",
        hours: 32,
      },
      {
        id: "notif",
        name: "Notification System",
        desc: "Multi-channel notification system supporting email, SMS, and in-app notifications. Includes customizable triggers and user preference management.",
        hours: 24,
      },
      {
        id: "data",
        name: "Data Export and Import Tools",
        desc: "Comprehensive tools for importing data from various sources and exporting results in multiple formats. Includes data validation and transformation capabilities.",
        hours: 28,
      },
    ],
  },
  {
    category: "UI/UX",
    items: [
      {
        id: "dash",
        name: "Custom Dashboard Interface",
        desc: "Interactive dashboard with data visualization components, charts, and real-time updates. Responsive design with customizable widgets and layouts.",
        hours: 40,
      },
      {
        id: "viz",
        name: "Data Visualization Engine",
        desc: "Advanced charting and visualization tools for displaying AI insights and analytics. Supports multiple chart types, interactive features, and export capabilities.",
        hours: 32,
      },
      {
        id: "mob",
        name: "Mobile-Responsive Design",
        desc: "Fully responsive design optimized for mobile devices with touch-friendly interfaces and progressive web app capabilities. Includes offline functionality for key features.",
        hours: 36,
      },
    ],
  },
  {
    category: "Analytics",
    items: [
      {
        id: "perf",
        name: "AI Model Performance Monitoring",
        desc: "Comprehensive monitoring system tracking model accuracy, response times, and usage patterns. Includes automated alerts and performance degradation detection.",
        hours: 36,
      },
      {
        id: "rep",
        name: "Automated Reporting System",
        desc: "Scheduled report generation with customizable templates, automated delivery, and multiple export formats. Includes AI-powered insights and recommendations.",
        hours: 36,
      },
    ],
  },
  {
    category: "Integrations",
    items: [
      {
        id: "tp",
        name: "Third-party AI Service Integration",
        desc: "Integration with external AI services like OpenAI, Google Cloud AI, and AWS AI services. Includes unified interface and cost optimization features.",
        hours: 40,
      },
      {
        id: "cloud",
        name: "Cloud Storage Integration",
        desc: "Seamless integration with cloud storage providers for data management, model storage, and backup solutions. Includes automated synchronization and version control.",
        hours: 20,
      },
    ],
  },
  {
    category: "Admin Panel",
    items: [
      {
        id: "ump",
        name: "User Management Console",
        desc: "Administrative interface for managing users, permissions, and system settings. Includes user activity tracking and access control management.",
        hours: 24,
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        id: "sec",
        name: "Security and Compliance Framework",
        desc: "Comprehensive security implementation including data encryption, audit logging, and compliance with industry standards. Includes vulnerability scanning and security monitoring.",
        hours: 40,
      },
    ],
  },
  {
    category: "Performance",
    items: [
      {
        id: "opt",
        name: "Performance Optimization Engine",
        desc: "Automated performance optimization including caching strategies, database optimization, and resource management. Includes load balancing and auto-scaling capabilities.",
        hours: 32,
      },
    ],
  },
  {
    category: "Testing",
    items: [
      {
        id: "qa",
        name: "Quality Assurance and Testing Suite",
        desc: "Comprehensive testing framework including unit tests, integration tests, and automated AI model validation. Includes continuous testing and quality metrics tracking.",
        hours: 48,
      },
    ],
  },
];

const ALL_FEATURE_IDS = FEATURES.flatMap((g) => g.items.map((i) => i.id));

function Wizard({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<Form>({
    types: [],
    scope: null,
    description: "",
    features: Object.fromEntries(ALL_FEATURE_IDS.map((id) => [id, true])),
    name: "",
    email: "",
    country: "us",
    phone: "",
  });

  const totalHours = useMemo(
    () =>
      FEATURES.flatMap((g) => g.items).reduce(
        (sum, it) => sum + (form.features[it.id] ? it.hours : 0),
        0,
      ),
    [form.features],
  );
  const selectedCount = useMemo(
    () => Object.values(form.features).filter(Boolean).length,
    [form.features],
  );
  const estimate = totalHours * 22; // simple rate

  const canNext = () => {
    if (step === 0) return form.types.length > 0;
    if (step === 1) return form.scope !== null;
    if (step === 2) return form.description.trim().split(/\s+/).filter(Boolean).length >= 10;
    if (step === 3) return form.name && form.email && form.phone;
    return true;
  };

  if (done) return <ThankYou estimate={estimate} onBack={onClose} />;

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20">
      <div className="absolute left-1/2 top-0 h-48 w-[520px] -translate-x-1/2 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="container-page relative">
        <Stepper current={step} />
        <div className="mx-auto mt-14 max-w-[1100px]">
          {step === 0 && <StepType form={form} setForm={setForm} />}
          {step === 1 && <StepScale form={form} setForm={setForm} />}
          {step === 2 && <StepDescribe form={form} setForm={setForm} />}
          {step === 3 && <StepDetails form={form} setForm={setForm} />}
          {step === 4 && (
            <StepReport
              form={form}
              setForm={setForm}
              selectedCount={selectedCount}
              totalHours={totalHours}
            />
          )}

          <div className="mt-14 flex items-center justify-between">
            <button
              onClick={() => (step === 0 ? onClose() : setStep(step - 1))}
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2.5 text-sm font-semibold text-ink-soft transition hover:bg-gray-200"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            {step < 4 ? (
              <button
                disabled={!canNext()}
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-gray-400 px-6 py-2.5 text-sm font-bold text-white transition enabled:bg-[var(--brand)] enabled:hover:bg-[var(--brand-2)] disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setDone(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--brand-2)]"
              >
                Get My Report <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== STEPPER ===================== */

function Stepper({ current }: { current: number }) {
  return (
    <div className="mx-auto flex max-w-[900px] items-start justify-between">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              {i > 0 && (
                <div className={`h-px flex-1 ${i <= current ? "bg-ink" : "bg-gray-200"}`} />
              )}
              <div
                className={`grid h-9 w-9 place-items-center rounded-full text-xs font-bold ${
                  done
                    ? "bg-ink text-white"
                    : active
                      ? "bg-ink text-white"
                      : "bg-gray-100 text-ink-soft"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-px flex-1 ${i < current ? "bg-ink" : "bg-gray-200"}`} />
              )}
            </div>
            <span
              className={`mt-2 text-xs font-semibold ${active || done ? "text-ink" : "text-ink-soft"}`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ===================== STEP HEADERS ===================== */

function StepHeader({
  num,
  kicker,
  title,
  desc,
  hint,
}: {
  num: string;
  kicker: string;
  title: string;
  desc: string;
  hint?: string;
}) {
  return (
    <div className="max-w-[760px]">
      <p className="text-sm font-semibold text-ink-soft">
        {num} — {kicker}
      </p>
      <h2 className="text-xl md:text-[32px] font-semibold text-neutral-900 leading-tight mt-3">
        {title}
      </h2>
      <p className="mt-4 text-base text-ink-soft md:text-[17px]">{desc}</p>
      {hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>}
    </div>
  );
}

/* ===================== STEP 1: TYPE ===================== */

function StepType({ form, setForm }: { form: Form; setForm: (f: Form) => void }) {
  const toggle = (id: string) => {
    const types = form.types.includes(id)
      ? form.types.filter((t) => t !== id)
      : [...form.types, id];
    setForm({ ...form, types });
  };
  return (
    <>
      <StepHeader
        num="01"
        kicker="Application Type"
        title="What are you building?"
        desc="Select one or more — you can combine app types"
        hint="Complete in 2 minutes — get your personalised report by email and WhatsApp"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {TYPE_OPTIONS.map((opt) => {
          const selected = form.types.includes(opt.id);
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              className={`relative flex items-start gap-5 shadow-sm
                 text-left rounded-2xl p-5 md:p-7  duration-200 cursor-pointer
                bg-[#f7f7f6] hover:bg-white hover:shadow-[0_2px_16px_-2px_rgba(0,0,0,0.08)]
              
                ${selected ? "ring-2 ring-ink" : ""}`}
            >
              {opt.popular && (
                <span className="absolute -top-2.5 right-6 rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-neutral-300 text-ink">
                <opt.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-1">{opt.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{opt.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ===================== STEP 2: SCALE ===================== */

function StepScale({ form, setForm }: { form: Form; setForm: (f: Form) => void }) {
  const opts = [
    {
      id: "mvp" as const,
      icon: Rocket,
      title: "MVP",
      subtitle: "Minimum Viable Product",
      time: "2–4 months typical delivery",
      bestFor: "Startups validating ideas, proof of concepts, quick market entry",
      bullets: [
        "Core features only",
        "Basic UI/UX design",
        "Essential functionality",
        "Quick time to market",
      ],
      badge: "RECOMMENDED",
    },
    {
      id: "growth" as const,
      icon: TrendingUp,
      title: "Growth Ready",
      subtitle: "Scale-Ready Application",
      time: "4–8 months typical delivery",
      bestFor: "Growing businesses, established products, competitive markets",
      bullets: [
        "Extended feature set",
        "Custom UI/UX design",
        "Third-party integrations",
        "Scalable architecture",
      ],
    },
  ];
  return (
    <>
      <StepHeader
        num="02"
        kicker="Project Scale"
        title="Choose your project scope"
        desc="Select the development scope that matches your goals and timeline"
        hint="This helps us tailor your cost report accurately"
      />
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 mt-12">
        {opts.map((opt) => {
          const selected = form.scope === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setForm({ ...form, scope: opt.id })}
              className={`relative  
                  flex flex-col gap-2 shadow-sm
               text-left rounded-2xl p-5 md:p-8 transition-all duration-200 cursor-pointer
                bg-[#f7f7f6] hover:bg-white hover:shadow-[0_2px_16px_-2px_rgba(0,0,0,0.08)]
              
                 ${selected ? "ring-2 ring-ink" : ""}`}
            >
              {opt.badge && (
                <span className="absolute -top-2.5 right-6 rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {opt.badge}
                </span>
              )}
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ececec] text-ink border border-gray-300">
                  <opt.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{opt.title}</h3>
                  <p className="text-sm text-ink-soft">{opt.subtitle}</p>
                </div>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
                <Clock className="h-4 w-4" /> {opt.time}
              </p>
              <div className="mt-4 rounded-xl bg-white p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                  Best for
                </p>
                <p className="mt-1.5 text-xs md:text-sm text-neutral-700 leading-relaxed">{opt.bestFor}</p>
              </div>
              <ul className="mt-5 space-y-2.5">
                {opt.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink">
                    <Check className="h-4 w-4 text-ink-soft" /> {b}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ===================== STEP 3: DESCRIBE ===================== */

function StepDescribe({ form, setForm }: { form: Form; setForm: (f: Form) => void }) {
  const words = form.description.trim().split(/\s+/).filter(Boolean).length;
  return (
    <>
      <StepHeader
        num="03"
        kicker="Description"
        title="Describe your project"
        desc="Our AI analyses your description to generate tailored features and an accurate cost breakdown."
        hint="Even a brief description works — our AI fills in the details"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value.slice(0, 2000) })}
            placeholder="I want to build an AI-powered platform that analyses customer support tickets, categorises them automatically, suggests responses to agents, and provides sentiment analysis dashboards for managers..."
            className="min-h-[320px] w-full resize-none border-0 bg-transparent text-[15px] leading-relaxed text-ink placeholder:text-ink-soft focus:outline-none"
          />
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-ink-soft">
            <span>{form.description.length}/2000</span>
            <span>{words} words (min 10)</span>
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl bg-gray-50 p-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <h4 className="font-extrabold text-ink">Tips for better results</h4>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-ink">
              <li className="flex items-start gap-2.5">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" /> Define your target
                audience and main goals
              </li>
              <li className="flex items-start gap-2.5">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" /> List key features and
                functionality
              </li>
              <li className="flex items-start gap-2.5">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" /> Mention any
                third-party integrations
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
              Good example
            </p>
            <p className="mt-2 text-sm italic leading-relaxed text-ink-soft">
              “An AI-driven customer support platform with NLP-based ticket classification,
              automated response suggestions, sentiment analysis, agent performance analytics, and
              integration with Zendesk and Intercom.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===================== STEP 4: DETAILS ===================== */

function StepDetails({ form, setForm }: { form: Form; setForm: (f: Form) => void }) {
  const selectedCountry = getCountryByCode(form.country) ?? getCountryByCode("us")!;

  return (
    <div className="mx-auto max-w-[630px]">
      <div className="text-start">
        <p className="text-sm font-semibold text-ink-soft">05 — Almost there</p>
        <h2 className="text-xl md:text-[32px] font-semibold text-neutral-900 leading-tight mb-2 md:mb-3 mt-3">
          Where should we send your report?
        </h2>
        <p className="mt-4 max-w-[560px] text-start text-ink-soft">
          Your personalised cost breakdown and project roadmap will be delivered within minutes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { icon: FileText, label: "Detailed cost breakdown" },
          { icon: MessageCircle, label: "Sent via email & WhatsApp" },
          { icon: Clock, label: "Delivered in minutes" },
        ].map((b) => (
          <div key={b.label} className="rounded-xl bg-[#f5f5f6] px-5 py-4 text-center">
            <b.icon className="mx-auto h-5 w-5 text-ink-soft" />
            <p className="text-[11px] md:text-xs text-neutral-600 text-center font-medium leading-tight mt-2">{b.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-7">
        <Field icon={User} label="Full Name">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g., Sarah Thompson"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
          />
        </Field>
        <Field icon={Mail} label="Work Email">
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="e.g., sarah@company.co.uk"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
          />
        </Field>
        <Field icon={Globe2} label="Country">
          <div className="relative">
            <select
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 text-sm text-ink focus:border-ink focus:outline-none"
            >
              {COUNTRIES.map((country) => (
                <option key={country.code} value={country.code}>
                  {formatCountryOption(country)}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          </div>
        </Field>
        <Field icon={Phone} label="WhatsApp Number" right="Report sent here">
          <div className="flex gap-2">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-3 text-sm font-semibold text-ink-soft">
              <span aria-hidden>{countryFlag(selectedCountry.code)}</span>
              <span>{formatPhonePrefix(selectedCountry)}</span>
            </span>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="7700 900 123"
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
            />
            <button
              type="button"
              className="rounded-lg bg-gray-400 px-5 text-sm font-bold text-white"
            >
              Verify
            </button>
          </div>
        </Field>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f5f5f6] p-4">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-ink-soft" />
        <div>
          <p className="text-sm font-bold text-ink">Your information is secure</p>
          <p className="text-xs text-ink-soft">
            We never sell or share your data. Your report is sent directly to your email and
            WhatsApp only.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  right,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  right?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Icon className="h-4 w-4 text-ink-soft" /> {label}
        </label>
        {right && <span className="text-xs text-ink-soft">{right}</span>}
      </div>
      {children}
    </div>
  );
}

/* ===================== STEP 5: REPORT (review features) ===================== */

function StepReport({
  form,
  setForm,
  selectedCount,
  totalHours,
}: {
  form: Form;
  setForm: (f: Form) => void;
  selectedCount: number;
  totalHours: number;
}) {
  const toggle = (id: string) =>
    setForm({ ...form, features: { ...form.features, [id]: !form.features[id] } });
  return (
    <div>
      <div className="max-w-[760px]">
        <p className="text-sm font-semibold text-ink-soft">05 — Your Report</p>
        <h2 className="mt-3 text-xl md:text-[32px] font-semibold text-neutral-900 leading-tight mb-2 md:mb-3">
          Review your features
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          Toggle the features you want included in your report
        </p>
        <p className="mt-1 text-xs text-[var(--brand)]">
          Your personalised cost breakdown will be sent to your email and WhatsApp
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Metric  label="Selected" value={`${selectedCount}`} suffix={`/${ALL_FEATURE_IDS.length}`} />
        <Metric label="Hours" value={`${totalHours}`} suffix="h" />
        <div className=" p-5 rounded-2xl bg-[#f7f7f6] p-4 md:p-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">
            Estimate Ready
          </p>
          <div className="mt-2 h-3 w-32 rounded-full bg-[var(--brand)]/30 blur-[2px]" />
          <p className="mt-2 text-xs text-ink-soft">Complete next step to review</p>
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {FEATURES.map((group) => (
          <div key={group.category}>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-4 w-px bg-ink" />
              <h3 className="text-sm  font-semibold text-neutral-900 mb-2">{group.category}</h3>
            </div>
            <div className="space-y-3">
              {group.items.map((item) => {
                const checked = !!form.features[item.id];
                return (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-start gap-4 rounded-xl border
                     bg-white p-4 transition hover:border-gray-300
                     transition-all duration-200 cursor-pointer
                      bg-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)]
                    
                     "
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(item.id)}
                      className="mt-1 h-4 w-4 accent-[#0f172a]"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-medium text-sm md:text-base text-neutral-900 mb-0.5
                        ">{item.name}</h4>
                        <span className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-semibold text-ink-soft">
                          {item.hours}h
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs md:text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Metric({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-5">
      <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">{label}</p>
      <p className="mt-2 text-3xl font-extrabold text-ink">
        {value}
        {suffix && <span className="text-base font-semibold text-ink-soft">{suffix}</span>}
      </p>
    </div>
  );
}

/* ===================== THANK YOU ===================== */

function ThankYou({ estimate, onBack }: { estimate: number; onBack: () => void }) {
  const formatted = "£" + estimate.toLocaleString();
  return (
    <section className="py-24">
      <div className="container-page mx-auto max-w-[640px] text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-white">
          <Check className="h-7 w-7" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">Thank you</h1>
        <p className="text-lg font-semibold mb-1 text-[var(--brand)]">
          Estimated cost: {formatted}
        </p>
        <p className="text-base text-neutral-600">
          Your detailed cost breakdown and roadmap are on the way to your email and WhatsApp.
        </p>

        <div className="mt-10 space-y-3 text-left">
          {[
            {
              icon: Phone,
              title: "Check your WhatsApp",
              desc: "Your report will be sent to your verified WhatsApp number.",
            },
            {
              icon: Calendar,
              title: "We'll contact you within 24 hours",
              desc: "Our team will discuss your requirements and answer questions.",
            },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-4 p-5 rounded-2xl bg-[#f7f7f6]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink-soft">
                <b.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-neutral-900 text-sm mb-0.5">{b.title}</p>
                <p className="text-xs text-neutral-600">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-2)]">
            <Calendar className="h-4 w-4" /> Book a Discovery Call
          </button>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-bold text-ink transition hover:bg-gray-200"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Calculator
          </button>
        </div>

        <p className="mt-10 text-xs text-ink-soft">Questions? sales@eazisols.com</p>
      </div>
    </section>
  );
}
