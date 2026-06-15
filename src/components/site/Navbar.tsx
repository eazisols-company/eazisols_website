import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";

type NavItem = { to: string; label: string; hasMega?: boolean };
const NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasMega: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/app-cost-calculator", label: "App Cost Calculator" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
];

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
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="shrink-0"><Logo /></Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) =>
            n.hasMega ? (
              <div key={n.to} onMouseEnter={openMega} onMouseLeave={closeMega} className="relative">
                <Link
                  to={n.to}
                  className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    mega ? "text-brand" : "text-ink-soft hover:text-ink"
                  }`}
                  activeProps={{ className: "text-brand" }}
                >
                  {n.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mega ? "rotate-180" : ""}`} />
                </Link>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="px-3.5 py-2 text-[15px] font-medium text-ink-soft hover:text-ink transition-colors"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-black transition">
            Contact us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega menu */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={`absolute left-0 right-0 top-full hidden xl:block transition-all duration-200 ${
          mega ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container-page pb-6">
          <div className="rounded-3xl border border-border bg-card shadow-card p-8">
            <div className="grid grid-cols-5 gap-8">
              {MEGA.map((col) => (
                <div key={col.title}>
                  <Link to="/services" className="group flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-ink leading-snug">{col.title}</h4>
                    <ArrowRight className="h-4 w-4 text-ink-soft mt-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <ul className="mt-5 space-y-2.5">
                    {col.items.map((it) => (
                      <li key={it}>
                        <Link to="/services" className="flex items-start gap-2 text-sm text-ink-soft hover:text-brand transition-colors">
                          <span className="text-ink-soft/60">↳</span>
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
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page pb-6 pt-2">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-card">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-surface transition"
                  activeProps={{ className: "text-brand" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  <span>{n.label}</span>
                </Link>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white px-5 py-3 text-sm font-medium">
                Contact us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
