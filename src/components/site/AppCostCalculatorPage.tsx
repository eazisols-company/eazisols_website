import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Globe, Layers, Smartphone, Sparkles } from "lucide-react";
import { CostCalculatorFlow } from "./CostCalculatorFlow";

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
            <p className="mt-4 max-w-[760px] text-[14px] leading-relaxed text-ink">Building an app in the United Kingdom typically costs between £4,000 and £120,000+ depending on the type, platform, and features. The cost to develop an app varies based on whether you need iOS, Android, or a web app, the complexity of features, and whether you use a freelancer, an agency, or a dedicated development company like eazisols. Complete our 2-minute calculator to get a personalised cost breakdown and project roadmap sent directly to your inbox.</p>
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

export function AppCostCalculatorPage() {
  const [open, setOpen] = useState(false);
  return open ? (
    <CostCalculatorFlow onClose={() => setOpen(false)} />
  ) : (
    <Landing onStart={() => setOpen(true)} />
  );
}
