import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Circle, Globe, Layers, Smartphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/app-cost-calculator")({
  head: () => ({
    meta: [
      { title: "App Cost Calculator — Tecaudex" },
      { name: "description", content: "Estimate the cost to build an app with Tecaudex." },
      { property: "og:title", content: "App Cost Calculator — Tecaudex" },
      { property: "og:description", content: "Get a personalised app development estimate." },
    ],
  }),
  component: CalculatorPage,
});

const appTypes = [
  { icon: Smartphone, title: "Mobile Apps", subtitle: "iOS, Android, cross-platform", price: "£8,000 – £80,000+" },
  { icon: Globe, title: "Web Apps", subtitle: "SaaS, PWAs, portals", price: "£6,000 – £95,000+" },
  { icon: Sparkles, title: "AI / ML", subtitle: "ML, agents, automations", price: "£12,000 – £100,000+" },
  { icon: Layers, title: "Blockchain", subtitle: "Smart contracts, DeFi, Web3", price: "£16,000 – £120,000+" },
];

const factors = [
  "App type and platform",
  "Features and complexity",
  "Design requirements",
  "Team location",
  "Ongoing maintenance",
];

const faqs = [
  "How much does it cost to make an app in the United Kingdom?",
  "How accurate is this cost calculator?",
  "How long does it take to build an app?",
  "Is my data secure?",
  "What happens after I get my estimate?",
];

function CalculatorPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-28">
        <div className="absolute left-1/2 top-8 h-56 w-[520px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-page relative pb-16">
          <div className="mx-auto max-w-[850px]">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-brand">App development cost calculator</p>
            <h1 className="mt-5 max-w-[650px] text-5xl font-extrabold leading-[0.98] text-ink md:text-[64px]">
              How Much Does It Cost to Build an App?
            </h1>
            <p className="mt-6 max-w-[760px] text-[17px] leading-relaxed text-ink">
              Get a free, personalised cost report for iOS, Android, or web apps — delivered to your email and WhatsApp in minutes.
            </p>
            <p className="mt-6 max-w-[830px] text-sm leading-relaxed text-ink-soft">
              Building an app in the United Kingdom typically costs between £4,000 and £120,000+ depending on the type, platform, and features. The cost to develop an app varies based on design quality, backend complexity, integrations, and your development company’s location.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="btn-brand">Calculate Your App Cost <ArrowRight className="h-4 w-4" /></button>
              <span className="text-xs font-medium text-ink-soft">Free · 2 minutes · No signup</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Instant detailed report", "Sent to email & WhatsApp", "370+ estimates generated"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-ink-soft">
                  <Check className="h-3.5 w-3.5 text-brand" /> {item}
                </span>
              ))}
            </div>
            <p className="mt-12 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">Explore unique app development cost ranges</p>
            <div className="mt-4 grid gap-5 md:grid-cols-4">
              {appTypes.map((type) => (
                <article key={type.title} className="rounded-xl bg-surface p-5 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-card text-ink-soft"><type.icon className="h-4 w-4" /></span>
                  <h3 className="mt-4 text-sm font-extrabold text-ink">{type.title}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{type.subtitle}</p>
                  <p className="mt-5 text-sm font-extrabold text-ink">{type.price}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Steps />
      <Factors />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Stats() {
  return (
    <section className="bg-surface py-12">
      <div className="container-page mx-auto grid max-w-[850px] grid-cols-2 gap-8 text-center md:grid-cols-4">
        {["80+|Projects delivered", "10+|Countries served", "370+|Estimates generated", "£2M+|Estimated via calculator"].map((item) => {
          const [value, label] = item.split("|");
          return <div key={item}><div className="text-4xl font-extrabold text-ink">{value}</div><p className="mt-1 text-sm text-ink-soft">{label}</p></div>;
        })}
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="py-24 text-center">
      <div className="container-page mx-auto max-w-[820px]">
        <h2 className="text-2xl font-extrabold text-ink">Get your estimate in 3 simple steps</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {["Pick your app type|Select the platforms and technology for your project", "Describe your project|Tell our AI about your idea and specific requirements", "Get your personalised report|Receive a detailed cost breakdown and roadmap"].map((item, index) => {
            const [title, text] = item.split("|");
            return <div key={item}><span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-primary-foreground">{index + 1}</span><h3 className="mt-5 font-extrabold text-ink">{title}</h3><p className="mx-auto mt-2 max-w-[210px] text-sm text-ink-soft">{text}</p></div>;
          })}
        </div>
        <button className="btn-brand mt-12">Get Your Personalised Report <ArrowRight className="h-4 w-4" /></button>
        <p className="mt-3 text-xs text-ink-soft">Takes less than 2 minutes</p>
      </div>
    </section>
  );
}

function Factors() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page mx-auto max-w-[850px]">
        <p className="text-sm text-ink-soft">What you should know</p>
        <h2 className="mt-3 max-w-[720px] text-4xl font-extrabold leading-tight text-ink md:text-5xl">What Affects the Cost to Build an App in the United Kingdom?</h2>
        <p className="mt-5 max-w-[580px] text-sm leading-relaxed text-ink-soft">Every project is unique. Here are the key factors that determine your final development cost.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {factors.map((factor) => (
            <article key={factor} className="min-h-[160px] rounded-xl bg-card p-7 shadow-soft">
              <h3 className="font-extrabold text-ink">{factor}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">A simple MVP with 3–5 screens costs far less than a full-featured marketplace or enterprise product.</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center"><button className="inline-flex items-center gap-2 text-sm font-extrabold text-brand">Get your personalised cost report <ArrowRight className="h-4 w-4" /></button></div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24">
      <div className="container-page mx-auto max-w-[760px]">
        <p className="text-sm text-ink-soft">Common questions</p>
        <h2 className="mt-2 text-4xl font-extrabold text-ink">Frequently asked questions</h2>
        <div className="mt-12 divide-y divide-border">
          {faqs.map((q) => <button key={q} className="flex w-full items-center justify-between py-6 text-left text-sm font-semibold text-ink"><span>{q}</span><ChevronDown className="h-4 w-4 text-ink-soft" /></button>)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface py-20 text-center">
      <div className="container-page">
        <Circle className="mx-auto h-3 w-3 fill-brand text-brand" />
        <h2 className="mt-4 text-2xl font-extrabold text-ink">Ready for your free estimate?</h2>
        <p className="mt-2 text-sm text-ink-soft">Join 370+ businesses who’ve received their personalised report.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4"><button className="btn-brand">Get Your Personalised Report <ArrowRight className="h-4 w-4" /></button><button className="btn-ghost">Talk to Our Team</button></div>
      </div>
    </section>
  );
}