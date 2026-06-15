import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeDollarSign, BriefcaseBusiness, CalendarClock, GraduationCap, HeartHandshake, Home, MonitorPlay, ShieldPlus, UsersRound } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Tecaudex" },
      { name: "description", content: "Join the crew building future-ready digital products at Tecaudex." },
      { property: "og:title", content: "Careers — Tecaudex" },
      { property: "og:description", content: "Open positions and life at Tecaudex." },
    ],
  }),
  component: CareersPage,
});

const benefits = [
  { icon: CalendarClock, title: "Flexible Work Schedules", text: "We trust our squad to own their time, work hard, vibe harder, and keep that work-life balance on point!", cls: "benefit-blue" },
  { icon: HeartHandshake, title: "Paid Leaves", text: "Need a break? We got you. Take paid time off, recharge, and come back ready to slay!", cls: "benefit-cream" },
  { icon: Home, title: "Work From Home", text: "Work from anywhere, anytime. Flexibility + productivity = the perfect balance.", cls: "benefit-pink" },
  { icon: MonitorPlay, title: "Free Online Development Courses", text: "Get access to top online courses and stay ahead in tech and trends.", cls: "benefit-lime" },
  { icon: ShieldPlus, title: "Health Insurance Benefits (IPD + OPD)", text: "Your health, our priority! We’ve got you covered with comprehensive health insurance.", cls: "benefit-violet" },
  { icon: UsersRound, title: "Team Development Allowance", text: "Team bonding just got better with a dedicated allowance for epic activities.", cls: "benefit-mint" },
  { icon: GraduationCap, title: "Development & Learning Allowance", text: "Enjoy a dedicated allowance for certifications, workshops, and skill boosts.", cls: "benefit-sky" },
  { icon: BadgeDollarSign, title: "Provident Fund", text: "Both you and the company pitch in to a fund that grows your future.", cls: "benefit-peach" },
];

function CareersPage() {
  return (
    <>
      <Hero />
      <GalleryStrip />
      <Benefits />
      <OpenPositions />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24">
      <div className="absolute left-1/2 top-8 h-52 w-[520px] -translate-x-1/2 rounded-full bg-brand/12 blur-3xl" />
      <div className="container-page relative pb-20 text-center">
        <h1 className="mx-auto max-w-[610px] text-5xl font-extrabold leading-[1.02] text-ink md:text-[70px]">
          Join the crew that&apos;s building the future.
        </h1>
        <p className="mx-auto mt-8 max-w-[580px] text-[15px] leading-relaxed text-ink">
          We build apps that actually work and make life easier for everyone who uses them. Join us if you love turning crazy ideas into real products, experimenting boldly, and leaving your mark on every pixel and line of code.
        </p>
        <a href="#positions" className="btn-brand mt-8"><BriefcaseBusiness className="h-4 w-4" /> Job openings</a>
        <Timeline />
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <div className="mx-auto mt-16 max-w-[560px]">
      <div className="grid grid-cols-6 text-xs text-ink-soft"><span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2026</span></div>
      <div className="mt-3 grid grid-cols-31 gap-1 px-1">
        {Array.from({ length: 31 }).map((_, i) => <span key={i} className={`h-9 border-l ${i === 12 ? "border-brand" : "border-border"}`} />)}
      </div>
      <div className="mx-auto mt-3 grid max-w-[440px] grid-cols-6 place-items-center text-ink-soft"><span>👥</span><span>⌘</span><span className="text-brand">🚀</span><span>▣</span><span>✕</span><span>∞</span></div>
      <div className="mx-auto mt-8 max-w-[150px] text-center"><div className="text-2xl">🚀</div><p className="mt-4 text-sm font-extrabold text-ink">Launch</p><p className="mt-2 text-xs leading-tight text-ink-soft">Tecaudex went official and got a spot to call home.</p></div>
    </div>
  );
}

function GalleryStrip() {
  return (
    <section className="overflow-hidden py-10">
      <div className="flex w-[120vw] -translate-x-[10vw] gap-6">
        {["aspect-[4/3] w-[360px]", "aspect-[4/3] w-[450px]", "aspect-[16/9] w-[520px]", "aspect-[4/3] w-[380px]"].map((cls, index) => (
          <div key={index} className={`${cls} shrink-0 image-tile-bg`} />
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="container-page py-16">
      <h2 className="text-4xl font-extrabold text-ink">What we value at tecaudex</h2>
      <p className="mt-3 max-w-[540px] text-sm text-ink-soft">A closer look at the principles and perks that shape everyday life at Tecaudex.</p>
      <div className="mt-12 grid border border-border md:grid-cols-4">
        {benefits.map((item) => (
          <article key={item.title} className={`${item.cls} min-h-[285px] border-b border-r border-border p-7 md:min-h-[330px]`}>
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
  return (
    <section id="positions" className="container-page py-20 md:pb-28">
      <h2 className="text-4xl font-extrabold text-ink">Open positions</h2>
      <p className="mt-3 max-w-[650px] text-sm text-ink-soft">A closer look at the core features and technologies that shape this project designed for efficiency, innovation, and impact.</p>
      <article className="mt-12 border-t border-border py-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div><h3 className="text-lg font-extrabold text-ink">Business Development Executive</h3><p className="mt-14 text-sm text-ink">Upwork Bidder</p><p className="mt-2 text-sm text-ink">Full Time</p></div>
          <a href="#" className="group inline-flex items-center gap-4 text-xs font-extrabold uppercase text-ink">Apply <span className="grid h-9 w-9 place-items-center rounded-full border border-brand text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><ArrowRight className="h-4 w-4" /></span></a>
        </div>
      </article>
    </section>
  );
}