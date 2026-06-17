import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

const COMPANY = [
  { label: "Contact us", to: "/#contact" },
  { label: "About Us", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "App Cost Calculator", to: "/app-cost-calculator" },
  { label: "Privacy Policy", to: "/" },
];
const SERVICES = [
  "Software Development",
  "ERP Solutions",
  "AI/ML Services",
  "Kick-Off Marketing",
  "App Designing",
];
const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/eazisols" },
  { label: "Instagram", href: "https://www.instagram.com/eazisols/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eazisols/" },
  { label: "YouTube", href: "https://www.youtube.com/@eazisols" },
  { label: "Twitter", href: "https://x.com/eazisols" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-footer text-footer-foreground">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_0.85fr_0.9fr_1.25fr_0.8fr] xl:gap-20">
          <div>
            <Logo variant="light" />
            <p className="mt-10 max-w-md text-lg leading-relaxed text-footer-foreground/45">
              Ready to transform your brand's digital presence? Our expert team is here to help you
              achieve.
            </p>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-extrabold text-primary-foreground transition hover:text-[#418ed6]"
            >
              Book a Free Call
            </a>
          </div>

          <Col title="Company">
            {COMPANY.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-footer-foreground/45 transition hover:text-[#418ed6]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </Col>

          <Col title="Services">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-footer-foreground/45 transition hover:text-[#418ed6]"
                >
                  {s}
                </Link>
              </li>
            ))}
          </Col>

          <div>
            <h4 className="text-xl font-extrabold text-footer-foreground">Contact</h4>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <p className="font-extrabold text-footer-foreground">Our Email</p>
                <a
                  href="mailto:info@eazisols.com"
                  className="text-footer-foreground/45 underline underline-offset-4 hover:text-[#418ed6]"
                >
                  info@eazisols.com
                </a>
              </div>
              <div>
                <p className="font-extrabold text-footer-foreground">Our Phone</p>
                <p className="text-footer-foreground/45 underline underline-offset-4">
                  +92 321 8881156
                </p>
                <p className="text-footer-foreground/45 underline underline-offset-4">
                  +92 313 8484 008
                </p>
                <p className="text-footer-foreground/45 underline underline-offset-4">
                  +971 54 424 4629
                </p>
              </div>
              <div>
                <p className="font-extrabold text-footer-foreground">Our Address</p>
                <p className="text-footer-foreground/45 leading-relaxed">
                  65 J1, WAPDA Town Phase 1 Block, Lahore, Pakistan
                </p>
                {/* <p className="mt-3 text-footer-foreground/45 leading-relaxed">131 Continental Dr, Suite 305, Newark, Delaware, 19713</p> */}
              </div>
            </div>
          </div>

          <Col title="Social">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-foreground/45 transition hover:text-[#418ed6]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </Col>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-footer-foreground/55 pt-14 text-base text-footer-foreground/45">
          <p>© {new Date().getFullYear()} eazisols. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 font-extrabold text-footer-foreground transition hover:text-[#418ed6]"
          >
            Back to the top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xl font-extrabold text-footer-foreground">{title}</h4>
      <ul className="mt-5 space-y-4 text-base text-footer-foreground/45">{children}</ul>
    </div>
  );
}
