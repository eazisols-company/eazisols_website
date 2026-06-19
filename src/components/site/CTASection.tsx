import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactFormModal } from "./ContactFormModal";

const CALCULATOR_BG = "/images/cta/cost-calculator.webp";
const CONTACT_BG = "/images/cta/contact-us.webp";

function CtaCardBackground({ src }: { src: string }) {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40"
      />
    </>
  );
}

export function CTASection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="container-page pb-24">
      <ScrollReveal>
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <Link
          to="/app-cost-calculator"
          className="group relative flex min-h-[280px] cursor-pointer flex-col justify-between overflow-hidden p-6 sm:min-h-[320px] sm:p-8 lg:min-h-[356px]"
        >
          <CtaCardBackground src={CALCULATOR_BG} />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-[40px] lg:leading-tight">
              App Cost Calculator
            </h3>
            <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/85 sm:text-base">
              Our app cost calculator helps companies and startups estimate the budget required for
              software, web, mobile app and ERP development projects.
            </p>
          </div>
          <p className="relative z-10 text-lg font-extrabold text-white underline sm:text-xl lg:text-[32px]">
            ↳ Start calculating
          </p>
        </Link>

        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="group relative flex min-h-[280px] cursor-pointer flex-col justify-between overflow-hidden border-none p-6 text-left sm:min-h-[320px] sm:p-8 lg:min-h-[356px]"
        >
          <CtaCardBackground src={CONTACT_BG} />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-[40px] lg:leading-tight">
              Contact Us
            </h3>
            <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/85 sm:text-base">
              Have questions or ready to start your project? Contact us to discuss your requirements,
              get a free consultation, or request a quote.
            </p>
          </div>
          <p className="relative z-10 text-lg font-extrabold text-white underline sm:text-xl lg:text-[32px]">
            ↳ Get a custom proposal
          </p>
        </button>
        </div>
      </ScrollReveal>

      <ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
}

export default CTASection;
