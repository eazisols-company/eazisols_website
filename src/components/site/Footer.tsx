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
const SOCIAL = ["Facebook", "Instagram", "LinkedIn", "YouTube", "Twitter"];

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white">
      <div className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_0.9fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 text-white/65 max-w-xs leading-relaxed">
              Ready to transform your brand's digital presence? Our expert team is here to help you achieve.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 font-medium hover:brightness-110 transition">
              Book a Free Call
            </a>
          </div>

          <Col title="Company">
            {COMPANY.map((l) => (
              <li key={l.label}><Link to={l.to} className="text-white/70 hover:text-white transition">{l.label}</Link></li>
            ))}
          </Col>

          <Col title="Services">
            {SERVICES.map((s) => (
              <li key={s}><Link to="/services" className="text-white/70 hover:text-white transition">{s}</Link></li>
            ))}
          </Col>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <p className="font-medium text-white">Our Email</p>
                <a href="mailto:sales@tecaudex.com" className="text-white/70 underline underline-offset-4 hover:text-white">sales@tecaudex.com</a>
              </div>
              <div>
                <p className="font-medium text-white">Our Phone</p>
                <p className="text-white/70 underline underline-offset-4">+1 6562700320</p>
                <p className="text-white/70 underline underline-offset-4">+44 7897021964</p>
                <p className="text-white/70 underline underline-offset-4">+61 483910820</p>
              </div>
              <div>
                <p className="font-medium text-white">Our Address</p>
                <p className="text-white/70 leading-relaxed">2nd Floor, 7 - B OPF, Main Boulevard, Lahore, Pakistan, 54770</p>
                <p className="mt-3 text-white/70 leading-relaxed">131 Continental Dr, Suite 305, Newark, Delaware, 19713</p>
              </div>
            </div>
          </div>

          <Col title="Social">
            {SOCIAL.map((s) => (
              <li key={s}><a href="#" className="text-white/70 hover:text-white transition">{s}</a></li>
            ))}
          </Col>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex items-center justify-between text-sm text-white/55">
          <p>© {new Date().getFullYear()} Tecaudex. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition">
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
      <h4 className="font-semibold text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
