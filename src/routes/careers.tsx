import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap,
  HeartHandshake,
  Home,
  Linkedin,
  MonitorPlay,
  Plane,
  Rocket,
  ShieldPlus,
  TrendingUp,
  Users,
  UsersRound,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — eazisols" },
      { name: "description", content: "Join the crew building future-ready digital products at eazisols." },
      { property: "og:title", content: "Careers — eazisols" },
      { property: "og:description", content: "Open positions and life at eazisols." },
    ],
  }),
  component: CareersPage,
});

const TIMELINE = [
  { year: 2019, label: "Foundation", icon: Users, text: "Built eazisols with no-code vibes. Apps made easy, no cap!" },
  { year: 2020, label: "Growth", icon: TrendingUp, text: "eazisols landed its first client and never looked back." },
  { year: 2021, label: "Launch", icon: Rocket, text: "eazisols went official and got a spot to call home!" },
  { year: 2022, label: "Pivot", icon: FileText, text: "eazisols went full startup mode, new squad, fresh vibes, and pivoted to custom software dev." },
  { year: 2023, label: "Expansion", icon: XCircle, text: "eazisols leveled up, moved to a bigger office, crushed the launch, and became one of the few Flutter & ROR pros! The squad grew to 15 strong!" },
  { year: 2024, label: "Takeoff", icon: Plane, text: "eazisols went BIG — moved to an even bigger office, leveled up our tech stack, and added UI/UX + Marketing to the mix! Team's now 25 strong." },
  { year: 2025, label: "Milestones", icon: Linkedin, text: "eazisols squad hit 40, 70+ projects delivered, and now we're crushing it with 2 ERPs in the works. The game is just getting started!" },
];

const BENEFITS = [
  { icon: CalendarClock, title: "Flexible Work Schedules", text: "We trust our squad to own their time, work hard, vibe harder, and keep that work-life balance on point!", cls: "benefit-blue" },
  { icon: HeartHandshake, title: "Paid Leaves", text: "Need a break? We got you. Take paid time off, recharge, and come back ready to slay!", cls: "benefit-cream" },
  { icon: Home, title: "Work From Home", text: "Work from anywhere, anytime. Flexibility + productivity = the perfect balance.", cls: "benefit-pink" },
  { icon: MonitorPlay, title: "Free Online Development Courses", text: "We're all about your growth! Get access to top online courses and stay ahead in tech and trends.", cls: "benefit-lime" },
  { icon: ShieldPlus, title: "Health Insurance Benefits (IPD + OPD)", text: "Your health, our priority! We've got you covered with full health insurance for both inpatient and outpatient care.", cls: "benefit-violet" },
  { icon: UsersRound, title: "Team Development Allowance", text: "Team bonding just got better! We've got a dedicated allowance for ice-breakers and epic fun activities. Let's vibe!", cls: "benefit-mint" },
  { icon: GraduationCap, title: "Development & Learning Allowance", text: "Got a passion to level up? We got you! Enjoy a dedicated allowance for certifications, workshops, and skill boosts your growth, your vibe!", cls: "benefit-sky" },
  { icon: BadgeDollarSign, title: "Provident Fund", text: "Teamwork makes the dream work! Both you and the company pitch in to a fund you can dip into whenever you need because your future's yours to own!", cls: "benefit-peach" },
];

function CareersPage() {
  return (
    <>
      <Hero />
      <GallerySlider />
      <Benefits />
      <OpenPositions />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24">
      <div className="absolute left-1/2 top-8 h-52 w-[520px] -translate-x-1/2 rounded-full bg-brand/12 blur-3xl" />
      <div className="container-page relative pb-16 text-center">
        <h1 className="mx-auto max-w-[640px] text-5xl font-extrabold leading-[1.02] tracking-tight text-ink md:text-[70px]">
          Join the crew that&apos;s building the future.
        </h1>
        <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
          We build apps that actually work and make life easier for everyone who uses them. Join us if you love turning crazy ideas into real products, experimenting boldly, and leaving your mark on every pixel and line of code.
        </p>
        <a href="#positions" className="btn-brand mt-8">
          <BriefcaseBusiness className="h-4 w-4" /> Job openings
        </a>
        <InteractiveTimeline />
      </div>
    </section>
  );
}

function InteractiveTimeline() {
  const [active, setActive] = useState(2); // Launch by default

  const item = TIMELINE[active];
  const ActiveIcon = item.icon;

  // Window of 4 years centered on active when possible
  const start = Math.max(0, Math.min(active - 1, TIMELINE.length - 4));
  const visible = TIMELINE.slice(start, start + 4);

  return (
    <div className="mx-auto mt-16 max-w-[640px]">
      {/* Year labels */}
      <div className="grid grid-cols-4 text-[13px] font-medium text-ink-soft/70">
        {visible.map((t) => (
          <span key={t.year} className={`text-center transition-colors ${t.year === item.year ? "text-ink" : ""}`}>
            {t.year}
          </span>
        ))}
      </div>

      {/* Ticks with the active red line */}
      <div className="relative mt-2 h-10">
        <div className="absolute inset-x-0 top-0 grid grid-cols-[repeat(40,minmax(0,1fr))]">
          {Array.from({ length: 40 }).map((_, i) => {
            const isMajor = i % 10 === 0;
            return <span key={i} className={`${isMajor ? "h-8" : "h-5"} border-l border-ink/15`} />;
          })}
        </div>
        {/* Red active marker — positioned over active year tick */}
        <div
          className="absolute top-0 h-9 w-[2px] bg-brand transition-all duration-300"
          style={{ left: `${(visible.findIndex((v) => v.year === item.year) / 4) * 100 + 12.5}%` }}
        />
      </div>

      {/* Interactive icon row — all 7 milestones, click/hover to switch */}
      <div className="mt-6 grid grid-cols-7 place-items-center">
        {TIMELINE.map((t, i) => {
          const Icon = t.icon;
          const isActive = i === active;
          return (
            <button
              key={t.year}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`${t.year} — ${t.label}`}
              className={`grid h-10 w-10 place-items-center rounded-full transition-all duration-200 ${
                isActive
                  ? "scale-110 bg-ink text-background shadow-md"
                  : "text-ink-soft/70 hover:scale-105 hover:text-ink"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </button>
          );
        })}
      </div>

      {/* Active card */}
      <div key={active} className="mx-auto mt-8 max-w-[260px] text-center animate-fade-in">
        <div className="mx-auto grid h-10 w-10 place-items-center text-ink">
          <ActiveIcon className="h-7 w-7" />
        </div>
        <p className="mt-4 text-base font-extrabold text-ink">{item.label}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{item.text}</p>
      </div>
    </div>
  );
}

function GallerySlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const slides = [
    "aspect-[4/3] w-[320px] md:w-[420px]",
    "aspect-[16/10] w-[460px] md:w-[560px]",
    "aspect-[16/10] w-[460px] md:w-[560px]",
    "aspect-[4/3] w-[320px] md:w-[420px]",
    "aspect-[16/10] w-[460px] md:w-[560px]",
  ];

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section className="relative py-10 md:py-14">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-3 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((cls, i) => (
          <div
            key={i}
            className={`${cls} image-tile-bg shrink-0 snap-start rounded-2xl shadow-card transition-transform duration-300 hover:scale-[1.01]`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        disabled={!canPrev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/90 text-ink shadow-card transition hover:bg-ink hover:text-background disabled:cursor-not-allowed disabled:opacity-30 md:grid"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        disabled={!canNext}
        aria-label="Next"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/90 text-ink shadow-card transition hover:bg-ink hover:text-background disabled:cursor-not-allowed disabled:opacity-30 md:grid"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}

function Benefits() {
  return (
    <section className="container-page py-16">
      <h2 className="text-4xl font-extrabold tracking-tight text-ink">What we value at eazisols</h2>
      <p className="mt-3 max-w-[540px] text-sm text-ink-soft">
        A closer look at the principles and perks that shape everyday life at eazisols.
      </p>
      <div className="mt-12 grid border-t border-l border-border md:grid-cols-4">
        {BENEFITS.map((item) => (
          <article
            key={item.title}
            className={`${item.cls} group relative min-h-[290px] border-b border-r border-border p-7 transition-transform duration-300 hover:-translate-y-0.5 md:min-h-[330px]`}
          >
            <item.icon className="h-9 w-9 text-ink" />
            <h3 className="mt-6 max-w-[230px] text-base font-extrabold leading-snug text-ink">{item.title}</h3>
            <p className="mt-24 text-sm leading-relaxed text-ink md:mt-28">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OpenPositions() {
  const jobs = [
    { title: "Business Development Executive", role: "Upwork Bidder", type: "Full Time" },
  ];
  return (
    <section id="positions" className="container-page py-20 md:pb-28">
      <h2 className="text-4xl font-extrabold tracking-tight text-ink">Open positions</h2>
      <p className="mt-3 max-w-[650px] text-sm text-ink-soft">
        A closer look at the core features and technologies that shape this project designed for efficiency, innovation, and impact.
      </p>
      <div className="mt-10">
        {jobs.map((j) => (
          <article key={j.title} className="group border-t border-border py-8 transition-colors hover:bg-surface/40">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-ink">{j.title}</h3>
                <p className="mt-14 text-sm text-ink">{j.role}</p>
                <p className="mt-2 text-sm text-ink">{j.type}</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-4 text-xs font-extrabold uppercase tracking-wider text-ink"
              >
                Apply
                <span className="grid h-9 w-9 place-items-center rounded-full border border-brand text-brand transition group-hover:bg-brand group-hover:text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
