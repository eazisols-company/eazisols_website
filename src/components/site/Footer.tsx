import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-brand-2/20 blur-3xl pointer-events-none" />

      <div className="container-page relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-ink font-black text-base">
                N<span className="text-brand">.</span>
              </span>
              <span className="font-semibold tracking-tight text-lg">nordex</span>
            </div>
            <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
              Your technology partner for AI products, web platforms, and digital growth — built by a senior product team.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-brand hover:text-brand transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Careers", to: "/careers" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { label: "Blog", to: "/blog" },
              { label: "App Cost Calculator", to: "/app-cost-calculator" },
            ]}
          />

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60">
              Get in touch
            </h4>
            <a href="mailto:hello@nordex.studio" className="mt-4 block text-lg font-medium hover:text-brand transition-colors">
              hello@nordex.studio
            </a>
            <Link to="/app-cost-calculator" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 font-medium hover:bg-brand hover:text-white transition-colors">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Nordex Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide uppercase text-white/60">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-white/85 hover:text-brand transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
