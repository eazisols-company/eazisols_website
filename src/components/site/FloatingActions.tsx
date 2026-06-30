import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/company/eazisols/";
const WHATSAPP_URL = "https://wa.me/923218881156";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-4 md:right-8 md:bottom-8">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="floating-action-btn floating-action-btn--linkedin grid h-12 w-12 place-items-center rounded-full bg-[#0A66C2] text-white shadow-[0_10px_25px_rgba(10,102,194,0.35)] md:h-16 md:w-16"
      >
        <FaLinkedinIn className="relative z-10 h-5 w-5 md:h-7 md:w-7" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="floating-action-btn floating-action-btn--whatsapp grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] md:h-16 md:w-16"
      >
        <FaWhatsapp className="relative z-10 h-6 w-6 md:h-8 md:w-8" />
      </a>
    </div>
  );
}