import { Linkedin, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3 md:right-8 md:bottom-8">
      <a
        href="#"
        aria-label="LinkedIn"
        className="grid h-12 w-12 place-items-center rounded-full bg-linkedin text-primary-foreground shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="#"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
