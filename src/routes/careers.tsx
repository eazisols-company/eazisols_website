import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  CalendarClock,
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
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — eazisols" },
      {
        name: "description",
        content: "Join the crew building future-ready digital products at eazisols.",
      },
      { property: "og:title", content: "Careers — eazisols" },
      { property: "og:description", content: "Open positions and life at eazisols." },
    ],
  }),
  component: CareersPage,
});

const TIMELINE = [
  {
    year: 2019,
    label: "Foundation",
    icon: Users,
    text: "Built eazisols with no-code vibes. Apps made easy, no cap!",
  },
  {
    year: 2020,
    label: "Growth",
    icon: TrendingUp,
    text: "eazisols landed its first client and never looked back.",
  },
  {
    year: 2021,
    label: "Launch",
    icon: Rocket,
    text: "eazisols went official and got a spot to call home!",
  },
  {
    year: 2022,
    label: "Pivot",
    icon: FileText,
    text: "eazisols went full startup mode, new squad, fresh vibes, and pivoted to custom software dev.",
  },
  {
    year: 2023,
    label: "Expansion",
    icon: XCircle,
    text: "eazisols leveled up, moved to a bigger office, crushed the launch, and became one of the few Flutter & ROR pros! The squad grew to 15 strong!",
  },
  {
    year: 2024,
    label: "Takeoff",
    icon: Plane,
    text: "eazisols went BIG — moved to an even bigger office, leveled up our tech stack, and added UI/UX + Marketing to the mix! Team's now 25 strong.",
  },
  {
    year: 2025,
    label: "Milestones",
    icon: Linkedin,
    text: "eazisols squad hit 40, 70+ projects delivered, and now we're crushing it with 2 ERPs in the works. The game is just getting started!",
  },
];

const BENEFITS = [
  {
    icon: CalendarClock,
    title: "Flexible Work Schedules",
    text: "We trust our squad to own their time, work hard, vibe harder, and keep that work-life balance on point!",
    cls: "benefit-blue",
  },
  {
    icon: HeartHandshake,
    title: "Paid Leaves",
    text: "Need a break? We got you. Take paid time off, recharge, and come back ready to slay!",
    cls: "benefit-cream",
  },
  {
    icon: Home,
    title: "Work From Home",
    text: "Work from anywhere, anytime. Flexibility + productivity = the perfect balance.",
    cls: "benefit-pink",
  },
  {
    icon: MonitorPlay,
    title: "Free Online Development Courses",
    text: "We're all about your growth! Get access to top online courses and stay ahead in tech and trends.",
    cls: "benefit-lime",
  },
  {
    icon: ShieldPlus,
    title: "Health Insurance Benefits (IPD + OPD)",
    text: "Your health, our priority! We've got you covered with full health insurance for both inpatient and outpatient care.",
    cls: "benefit-violet",
  },
  {
    icon: UsersRound,
    title: "Team Development Allowance",
    text: "Team bonding just got better! We've got a dedicated allowance for ice-breakers and epic fun activities. Let's vibe!",
    cls: "benefit-mint",
  },
  {
    icon: GraduationCap,
    title: "Development & Learning Allowance",
    text: "Got a passion to level up? We got you! Enjoy a dedicated allowance for certifications, workshops, and skill boosts your growth, your vibe!",
    cls: "benefit-sky",
  },
  {
    icon: BadgeDollarSign,
    title: "Provident Fund",
    text: "Teamwork makes the dream work! Both you and the company pitch in to a fund you can dip into whenever you need because your future's yours to own!",
    cls: "benefit-peach",
  },
];

const OFFICE_IMAGES = [
  "/images/office.JPG",
  "/images/office1.jpg",
  "/images/office2.jpg",
  "/images/office3.JPEG",
  "/images/office4.JPEG",
  "/images/office5.JPG",
  "/images/office6.jpg",
] as const;

const gallerySliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
      },
    },
  ],
};

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
        <h1
          className="mx-auto max-w-[640px] 
        text-[36px] font-semibold tracking-[-0.72px] text-[#1B1B1B] sm:text-[48px] lg:text-[72px] max-w-xl leading-[1.15] md:leading-[1.10] lg:leading-[1.05]"
        >
          Join the crew that&apos;s building the future.
        </h1>
        <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
          We build apps that actually work and make life easier for everyone who uses them. Join us
          if you love turning crazy ideas into real products, experimenting boldly, and leaving your
          mark on every pixel and line of code.
        </p>
        <a
          href="#positions"
          className="btn-brand mt-8 group relative inline-flex items-center justify-center rounded-full px-5 py-3 text-sm sm:text-base font-semibold min-w-[130px] 
        sm:min-w-[140px] lg:min-w-[160px] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 
        transition-colors duration-400 cursor-pointer text-white lg:px-7 lg:py-3.5"
        >
          <BriefcaseBusiness className="h-4 w-4" />
          Job openings
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
  const count = TIMELINE.length;
  const minorsPerSegment = 4;
  const activeCenter = `${((active + 0.5) / count) * 100}%`;

  const ticks: { major: boolean; yearIndex: number }[] = [];
  for (let i = 0; i < count; i++) {
    ticks.push({ major: true, yearIndex: i });
    if (i < count - 1) {
      for (let m = 0; m < minorsPerSegment; m++) {
        ticks.push({ major: false, yearIndex: i });
      }
    }
  }

  return (
    <div className="mx-auto mt-16 w-full max-w-[720px]">
      {/* Year labels */}
      <div className="grid grid-cols-7 text-[13px] font-medium text-ink-soft/70">
        {TIMELINE.map((t, i) => (
          <span
            key={t.year}
            className={`text-center transition-colors ${i === active ? "font-semibold text-ink" : ""}`}
          >
            {t.year}
          </span>
        ))}
      </div>

      {/* Tick marks + active line */}
      <div className="relative mt-2 h-10">
        <div
          className="absolute top-0 grid h-full"
          style={{
            left: `${(0.5 / count) * 100}%`,
            right: `${(0.5 / count) * 100}%`,
            gridTemplateColumns: `repeat(${ticks.length}, minmax(0, 1fr))`,
          }}
        >
          {ticks.map((tick, i) => {
            const isActiveMajor = tick.major && tick.yearIndex === active;
            if (isActiveMajor) {
              return <span key={i} className="justify-self-center" aria-hidden />;
            }
            return (
              <span
                key={i}
                className={`justify-self-center border-l border-ink/15 ${tick.major ? "h-8" : "h-5"}`}
                aria-hidden
              />
            );
          })}
        </div>
        <div
          className="absolute top-0 h-9 w-[2px] -translate-x-1/2 bg-brand transition-all duration-300"
          style={{ left: activeCenter }}
        />
      </div>

      {/* Interactive icon row — all milestones, click/hover to switch */}
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

      {/* Active card — aligned under active year/icon */}
      <div className="relative mt-8 min-h-[132px]">
        <div
          key={active}
          className="absolute top-0 w-[240px] -translate-x-1/2 text-center animate-fade-in"
          style={{ left: activeCenter }}
        >
          <div className="mx-auto grid h-10 w-10 place-items-center text-ink">
            <ActiveIcon className="h-7 w-7" />
          </div>
          <p className="mt-4 text-base font-extrabold text-ink">{item.label}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

function GallerySlider() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="[&_.slick-list]:overflow-hidden [&_.slick-slide>div]:px-2 md:[&_.slick-slide>div]:px-3">
        <Slider {...gallerySliderSettings}>
          {OFFICE_IMAGES.map((src) => (
            <div key={src}>
              <div className="h-[240px] overflow-hidden sm:h-[350px] md:h-[340px] lg:h-[430px]">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="container-page py-16">
      <h2
        className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] text-neutral-900 sm:text-[33px] 
      sm:leading-tight sm:tracking-normal md:text-[36px] lg:text-[36px] "
      >
        What we value at eazisols
      </h2>
      <p className="mt-3 max-w-[540px] text-sm text-ink-soft">
        A closer look at the principles and perks that shape everyday life at eazisols.
      </p>
      <div className="mt-12 grid border-t border-l border-border md:grid-cols-4">
        {BENEFITS.map((item) => (
          <article
            key={item.title}
            className={`${item.cls} group relative min-h-[260px] border-b border-r border-border p-7 transition-transform duration-300 hover:-translate-y-0.5 md:min-h-[280px]`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-9 w-9 shrink-0 text-ink" />
              <h3 className="max-w-[230px] text-base font-bold leading-snug text-ink">
                {item.title}
              </h3>
            </div>

            <p className="mt-12 text-sm leading-relaxed text-ink md:mt-14">{item.text}</p>
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
      <h2 className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em] sm:text-[33px] sm:leading-tight 
      sm:tracking-normal md:text-[36px] lg:text-[36px] text-[#1B1B1B]">Open positions</h2>
      <p className="mt-3 max-w-[650px] text-sm text-ink-soft">
        A closer look at the core features and technologies that shape this project designed for
        efficiency, innovation, and impact.
      </p>
      <div className="mt-10">
        {jobs.map((j) => (
          <article
            key={j.title}
            className="group py-8"
          >
            <div className="flex flex-col items-start gap-2 border border-[#ECECEC] bg-white p-5 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-[#0D0D0D] md:text-xl">{j.title}</h3>
                <p className="mt-14 text-[12px] font-medium text-[#4C4C4C] md:text-base">{j.role}</p>
                <p className="mt-2 text-[12px] font-medium text-[#4C4C4C] md:text-base">{j.type}</p>
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
