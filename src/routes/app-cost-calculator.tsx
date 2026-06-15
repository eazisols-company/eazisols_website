import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import {
  Smartphone, Globe, Brain, ShoppingCart, Layers, Zap, Shield, Sparkles, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/app-cost-calculator")({
  head: () => ({
    meta: [
      { title: "App Cost Calculator — Tecaudex" },
      { name: "description", content: "Estimate the cost of your web or mobile app in seconds with our interactive calculator." },
      { property: "og:title", content: "App Cost Calculator — Tecaudex" },
      { property: "og:description", content: "Get an instant budget estimate for your next project." },
    ],
  }),
  component: CalculatorPage,
});

type Option = { id: string; label: string; icon?: any; price: number; desc?: string };

const STEPS: { key: string; title: string; subtitle: string; multi?: boolean; options: Option[] }[] = [
  {
    key: "type",
    title: "What kind of app are you building?",
    subtitle: "Pick the primary product surface.",
    options: [
      { id: "mobile", label: "Mobile app", icon: Smartphone, price: 18000, desc: "iOS + Android" },
      { id: "web", label: "Web platform", icon: Globe, price: 15000, desc: "Dashboards, SaaS" },
      { id: "ai", label: "AI / LLM app", icon: Brain, price: 22000, desc: "LLM, RAG, agents" },
      { id: "ecom", label: "E-commerce", icon: ShoppingCart, price: 14000, desc: "DTC & marketplace" },
    ],
  },
  {
    key: "features",
    title: "Which features do you need?",
    subtitle: "Select all that apply.",
    multi: true,
    options: [
      { id: "auth", label: "Authentication", icon: Shield, price: 1500 },
      { id: "payments", label: "Payments", icon: Zap, price: 3000 },
      { id: "chat", label: "Realtime chat", icon: Sparkles, price: 3500 },
      { id: "ai-feat", label: "AI features", icon: Brain, price: 5000 },
      { id: "dash", label: "Admin dashboard", icon: Layers, price: 4000 },
      { id: "push", label: "Push notifications", icon: Smartphone, price: 1200 },
    ],
  },
  {
    key: "design",
    title: "Design fidelity",
    subtitle: "Choose how custom the UX should feel.",
    options: [
      { id: "starter", label: "Template-based", price: 0, desc: "Fast, polished baseline" },
      { id: "custom", label: "Custom design", price: 5000, desc: "Tailored UX & components" },
      { id: "premium", label: "Premium brand", price: 12000, desc: "Bespoke art direction" },
    ],
  },
  {
    key: "timeline",
    title: "When do you need to launch?",
    subtitle: "Faster timelines need a larger team.",
    options: [
      { id: "asap", label: "ASAP (4–6 weeks)", price: 8000 },
      { id: "normal", label: "Standard (2–3 months)", price: 0 },
      { id: "long", label: "Long-term (4+ months)", price: -3000 },
    ],
  },
];

function CalculatorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const total = useMemo(() => {
    let sum = 0;
    for (const s of STEPS) {
      const picked = answers[s.key] ?? [];
      for (const id of picked) {
        const opt = s.options.find((o) => o.id === id);
        if (opt) sum += opt.price;
      }
    }
    return sum;
  }, [answers]);

  const current = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  const toggle = (id: string) => {
    setAnswers((prev) => {
      const cur = prev[current.key] ?? [];
      if (current.multi) {
        const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
        return { ...prev, [current.key]: next };
      }
      return { ...prev, [current.key]: [id] };
    });
  };

  const selectedSummary = STEPS.flatMap((s) =>
    (answers[s.key] ?? []).map((id) => {
      const opt = s.options.find((o) => o.id === id)!;
      return { step: s.title, label: opt.label, price: opt.price };
    })
  );

  return (
    <>
      <Section
        eyebrow="App cost calculator"
        title={<>Estimate your project, in <span className="gradient-text">under 60 seconds</span>.</>}
        description="Answer four quick questions and get a transparent ballpark for your build. We'll share a detailed proposal afterwards."
        align="center"
      />

      <section className="container-page -mt-6 pb-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          {/* Steps panel */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-ink-soft">
                Step {step + 1} of {STEPS.length}
              </div>
              <div className="text-sm font-medium text-ink-soft">{Math.round(progress)}%</div>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full bg-brand transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <div key={current.key} className="rise mt-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">{current.title}</h3>
              <p className="mt-2 text-ink-soft">{current.subtitle}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt) => {
                  const picked = (answers[current.key] ?? []).includes(opt.id);
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggle(opt.id)}
                      className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                        picked
                          ? "border-ink bg-ink text-white shadow-card"
                          : "border-border bg-card hover:border-ink/30 hover:-translate-y-0.5"
                      }`}
                    >
                      {Icon && (
                        <span className={`grid h-11 w-11 place-items-center rounded-xl ${
                          picked ? "bg-white/10" : "bg-surface group-hover:bg-brand/10"
                        }`}>
                          <Icon className={`h-5 w-5 ${picked ? "text-white" : "text-ink"}`} />
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold ${picked ? "text-white" : "text-ink"}`}>{opt.label}</div>
                        {opt.desc && <div className={`text-sm mt-0.5 ${picked ? "text-white/70" : "text-ink-soft"}`}>{opt.desc}</div>}
                      </div>
                      {picked && <CheckCircle2 className="h-5 w-5 text-brand-2 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="btn-ghost disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
                  disabled={step === STEPS.length - 1}
                  className="btn-primary disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="eyebrow">Estimate</span>
              <div className="mt-3 text-5xl font-bold tracking-tight text-ink">
                ${total.toLocaleString()}
              </div>
              <p className="mt-2 text-ink-soft text-sm">
                Ballpark range — your final proposal includes timeline, team and milestones.
              </p>

              <div className="mt-6 border-t border-border pt-5">
                <h4 className="text-sm font-semibold text-ink uppercase tracking-wide">Your selections</h4>
                {selectedSummary.length === 0 ? (
                  <p className="mt-3 text-sm text-ink-soft">No selections yet — start with step one.</p>
                ) : (
                  <ul className="mt-3 space-y-2 text-sm">
                    {selectedSummary.map((s, i) => (
                      <li key={i} className="flex items-center justify-between gap-3">
                        <span className="text-ink">{s.label}</span>
                        <span className="text-ink-soft tabular-nums">{s.price >= 0 ? "+" : "-"}${Math.abs(s.price).toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button className="btn-brand mt-6 w-full">Get detailed proposal</button>
              <p className="mt-3 text-xs text-ink-soft text-center">We respond within 24 hours.</p>
            </div>
          </aside>
        </div>
      </section>

      <CTA title="Prefer to talk it through?" description="Book a free 30-minute consult with one of our product strategists." ctaLabel="Book a call" />
    </>
  );
}
