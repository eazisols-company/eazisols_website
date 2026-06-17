import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ContactPopup } from "./ContactPopup";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  // { to: "/", label: "Partnerships" },
  { to: "/app-cost-calculator", label: "App Cost Calculator" },
  // { to: "/", label: "Odoo Cost Calculator" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
] as const;

const MEGA = [
  {
    title: "Software Development",
    items: [
      "Custom Web App Development",
      "Mobile App Development",
      "Desktop App Development",
      "Smart Watch App Development",
      "Marketing Website Development",
      "No Code Development",
      "Blockchain",
      "NFTs",
    ],
  },
  {
    title: "ERP Solutions",
    items: [
      "Odoo ERP Solutions",
      "Custom ERP Development",
      "Oracle ERP to Odoo Migration",
      "MS Dynamics 365 to Odoo",
      "SAP to Odoo Migration",
      "NetSuite ERP to Odoo",
      "ERPNext to Odoo Migration",
    ],
  },
  {
    title: "AI/ML Services",
    items: [
      "Agentic AI Services",
      "Generative AI Services",
      "RAG Development Services",
      "AI Chatbot Development",
      "AI App Development",
      "AI Automation Services",
      "AI Consulting",
      "AI Integration Services",
      "ML Development Services",
        "ML Consulting Services",
    ],
  },
  {
    title: "Kick-Off Marketing",
    items: [
      "Social Media Marketing",
      "Performance Marketing",
      "Graphic Editing",
      "Video Editing",
    ],
  },
  {
    title: "App Designing",
    items: [
      "App Prototyping",
      "Design Audit",
      "Illustrations",
      "Brand Guideline",
      "Logo Design",
      "Design systems",
      "Pitch Deck",
      "Presentations",
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border/70"
          : "bg-background"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[83px]">
        <Link to="/" className="shrink-0"><Logo /></Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
          {NAV.map((n) =>
            n.to === "/services" ? (
              <div key={`${n.label}-${n.to}`} onMouseEnter={openMega} onMouseLeave={closeMega} className="relative">
                <Link
                  to={n.to}
                  className={`flex items-center gap-1 rounded-full px-5 py-3 text-[18px]  transition-colors ${
                    mega ? "bg-brand/5 text-brand" : "text-ink hover:bg-brand/5 hover:text-brand"
                  }`}
                  activeProps={{ className: "text-brand" }}
                >
                  {n.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mega ? "rotate-180" : ""}`} />
                </Link>
              </div>
            ) : (
              <Link
                key={`${n.label}-${n.to}`}
                to={n.to}
                className="px-2 py-2 text-[18px]  text-ink transition-colors hover:text-brand xl:px-3"
                // activeProps={n.label === "Partnerships" || n.label === "Odoo Cost Calculator" ? undefined : { className: "text-brand" }}
                activeOptions={{ exact: n.label === "Home" }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-extrabold text-primary-foreground transition hover:bg-primary"
          >
            Contact us
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega menu */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={`absolute left-0 right-0 top-full hidden lg:block transition-all duration-200 ${
          mega ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container-page pb-8">
          <div className="max-h-[78vh] overflow-y-auto rounded-[28px] border border-border bg-card p-10 shadow-[0_28px_70px_-24px_rgb(0_0_0_/_0.28)] xl:p-14">
            <div className="grid grid-cols-5 gap-8 xl:gap-14">
              {MEGA.map((col) => (
                <div key={col.title}>
                  <Link to="/services" className="group flex items-start justify-between gap-2">
                    <h4 className="text-[20px] font-extrabold leading-tight text-ink xl:text-[26px]">{col.title}</h4>
                    <ChevronRight className="mt-1 h-6 w-6 text-ink-soft transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <ul className="mt-8 space-y-6">
                    {col.items.map((it) => (
                      <li key={it}>
                        <Link to="/services" className="flex items-start gap-4 text-[15px] font-medium leading-tight text-ink-soft transition-colors hover:text-brand xl:text-[19px]">
                          <span className="text-2xl leading-none text-ink-soft/70">↳</span>
                          <span>{it}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page pb-6 pt-2">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-card">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={`${n.label}-${n.to}`}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-surface transition"
                  activeProps={{ className: "text-brand" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  <span>{n.label}</span>
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setContactOpen(true);
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-primary-foreground"
              >
                Contact us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
