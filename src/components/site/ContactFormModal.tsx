import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Dialog, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Contact } from "./Contact";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactFormModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/45 backdrop-blur-[6px]" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[640px] -translate-x-1/2 -translate-y-1/2 border-0 bg-transparent p-0 shadow-none outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">Tell us about your project</DialogPrimitive.Title>

          <div className="relative">
            <DialogPrimitive.Close
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1a1a1a] opacity-80 shadow-sm transition hover:opacity-100 focus:outline-none"
            >
              <X className="h-5 w-5 stroke-[1.75]" />
            </DialogPrimitive.Close>
            <Contact />
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
