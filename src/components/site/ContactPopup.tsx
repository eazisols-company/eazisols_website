import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Mail, X } from "lucide-react";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Logo } from "./Logo";

const PHONES = [
  { code: "PK", country: "PK", number: "+92 321 8881156" },
  { code: "PK", country: "PK", number: "+92 313 8484008" },
  { code: "UAE", country: "Dubai", number: "+971 54 4244629" },
] as const;

const WHATSAPP_NUMBER = "92 321 8881156";
const WHATSAPP_LINK = "https://wa.me/923218881156";
const EMAIL = "info@eazisols.com";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneCard({ code, country, number }: (typeof PHONES)[number]) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#e8e8e8] bg-white px-5 py-4">
      <span className="w-8 shrink-0 text-[15px] font-bold text-[#3d3d3d]">{code}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-[#9a9a9a]">{country}</p>
        <p className="mt-0.5 text-[17px] font-bold leading-tight text-[#1a1a1a]">{number}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-lg border border-[#d4d4d4] bg-white px-4 py-1.5 text-[13px] font-medium text-[#6b6b6b] transition hover:bg-[#fafafa]"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export function ContactPopup({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/45 backdrop-blur-[6px]" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-0 bg-white px-8 pb-8 pt-5 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.28)] outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:px-10 sm:pb-10 sm:pt-5"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">Contact us</DialogPrimitive.Title>

          <header className="flex items-center justify-between border-b border-gray-200 ">
            <Logo />
            <DialogPrimitive.Close
              aria-label="Close"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-[#1a1a1a] opacity-80 transition hover:opacity-100 focus:outline-none"
            >
              <X className="h-5 w-5 stroke-[1.75]" />
            </DialogPrimitive.Close>
          </header>

          <div className="mt-6 grid gap-5 md:grid-cols-[1fr_268px] md:gap-6">
            <div className="flex flex-col gap-3">
              {PHONES.map((phone) => (
                <PhoneCard key={phone.code} {...phone} />
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col items-center justify-center rounded-xl border border-[#b8e6c8] bg-[#f0faf4] px-6 text-center transition hover:bg-[#e8f7ee]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[#25a55f]">WhatsApp</p>
                <p className="mt-1 text-[15px] font-bold text-[#1a1a1a]">Chat instantly</p>
                <p className="mt-1 text-[14px] font-medium text-[#4a4a4a]">{WHATSAPP_NUMBER}</p>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-[#418ed6] bg-[#e9f3fd] px-5 py-5 text-center transition hover:bg-[#bfddfc]"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#418ed6]" strokeWidth={1.75} />
                <p className="text-[14px] text-[#1a1a1a]">
                  Email us at{" "}
                  <span className="font-bold text-[#418ed6]">{EMAIL}</span>
                </p>
              </a>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
