import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/app-cost-calculator", label: "App Cost Calculator" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white font-black text-sm tracking-tight shadow-soft transition-transform group-hover:rotate-3">
            N<span className="text-brand">.</span>
          </span>
          <span className="font-semibold text-ink tracking-tight">nordex</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/app-cost-calculator" className="btn-primary">
            Contact us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                  activeProps={{ className: "bg-surface" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  <span>{n.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft" />
                </Link>
              ))}
              <Link
                to="/app-cost-calculator"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Contact us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
