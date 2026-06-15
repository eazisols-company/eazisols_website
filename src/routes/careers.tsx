import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ArrowUpRight, Heart, Globe, Coffee, Sparkles, Users, Rocket, GraduationCap, Wallet, Shield } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Tecaudex" },
      { name: "description", content: "Join Tecaudex Studio. We're a small, senior team building category-defining software with ambitious teams." },
      { property: "og:title", content: "Careers — Tecaudex" },
      { property: "og:description", content: "Open roles at Tecaudex Studio." },
    ],
  }),
  component: CareersPage,
});

const VALUES = [
  { icon: Heart, t: "Craft over noise", d: "We sweat the details — pixels, copy, performance and the boring stuff in between." },
  { icon: Users, t: "Senior by default", d: "Tiny, opinionated teams. No layers, no babysitting, no busywork." },
  { icon: Rocket, t: "Bias to ship", d: "We'd rather learn in production than perfect in a Figma file." },
  { icon: Globe, t: "Remote-first", d: "Work from anywhere in compatible timezones. Quarterly in-person retreats." },
];

const BENEFITS = [
  { icon: Wallet, t: "Above-market salary", d: "Top of band + meaningful equity." },
  { icon: Coffee, t: "Unlimited PTO", d: "With a 4-week minimum, actually taken." },
  { icon: GraduationCap, t: "$3,000 learning budget", d: "Books, courses, conferences — your call." },
  { icon: Shield, t: "Premium health cover", d: "Medical, dental and vision — for you and family." },
  { icon: Sparkles, t: "Home-office stipend", d: "$2,500 to set up the workspace you deserve." },
  { icon: Globe, t: "Workation friendly", d: "Work from another country for up to 90 days a year." },
];

const ROLES = [
  { title: "Senior Product Engineer", team: "Engineering", loc: "Remote · EU/US", type: "Full-time" },
  { title: "AI/ML Engineer", team: "AI", loc: "Remote · EU", type: "Full-time" },
  { title: "Senior Product Designer", team: "Design", loc: "Remote · Worldwide", type: "Full-time" },
  { title: "Growth Strategist", team: "Growth", loc: "Remote · EU/US", type: "Full-time" },
  { title: "Engineering Manager", team: "Engineering", loc: "Remote · EU", type: "Full-time" },
  { title: "Mobile Engineer (React Native)", team: "Engineering", loc: "Remote · Worldwide", type: "Contract" },
];

function CareersPage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="Culture"
        title={<>Small team. Big <span className="gradient-text">ambitions</span>.</>}
        description="We're a fully remote studio of 28 designers, engineers and strategists. We work with companies we admire on problems that matter."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-7 card-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{v.t}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface border-y border-border">
        <div className="container-page section-pad">
          <div className="max-w-3xl">
            <span className="eyebrow">Benefits</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.05]">
              Treating people like the adults they are.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.t} className="flex gap-4 rounded-2xl border border-border bg-card p-6 card-hover">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-white">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{b.t}</h3>
                  <p className="text-sm text-ink-soft mt-1">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Open positions"
        title={<>{ROLES.length} open roles. Let's <span className="gradient-text">build something</span>.</>}
        description="Don't see an exact fit? Send us a thoughtful note — we hire great people whenever we meet them."
      >
        <div className="rounded-3xl border border-border bg-card overflow-hidden divide-y divide-border">
          {ROLES.map((r) => (
            <a key={r.title} href="#" className="group flex flex-col md:flex-row md:items-center justify-between gap-3 p-6 md:p-8 hover:bg-surface transition">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-ink group-hover:text-brand transition-colors">{r.title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-ink-soft">
                  <span>{r.team}</span><span>·</span><span>{r.loc}</span><span>·</span><span>{r.type}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-ink group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all">
                Apply now <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CTA eyebrow="Don't see your role?" title="Introduce yourself anyway." description="We always make time for talented humans. Send a note and a few links to your best work." ctaLabel="Send an intro" />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-blob h-[420px] w-[420px] bg-brand/40 -top-20 -left-32" />
      <div className="hero-blob h-[460px] w-[460px] bg-brand-2/30 top-20 -right-32" />
      <div className="container-page relative pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-3xl rise">
          <span className="eyebrow">Careers</span>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-ink">
            Make work you'll be <span className="gradient-text">proud of</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
            Tecaudex is a fully remote studio of senior product engineers, designers and strategists. We hire slowly, treat people well, and ship work we'd brag about for years.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#roles" className="btn-brand">See open roles <ArrowUpRight className="h-4 w-4" /></a>
            <a href="#" className="btn-ghost">Read our handbook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
