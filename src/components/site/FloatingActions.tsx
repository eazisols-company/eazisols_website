import { Linkedin, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
      <a
        href="#"
        aria-label="LinkedIn"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#0a66c2] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="#"
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
