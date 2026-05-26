import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export const ContactDialog = ({ open, onOpenChange }: Props) => {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <DialogPrimitive.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed left-1/2 top-1/2 z-[101] w-[calc(100vw-1rem)] sm:w-[92vw] md:w-[88vw] max-w-3xl max-h-[92vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border-2 border-ink bg-paper shadow-[8px_8px_0_0_hsl(var(--citrus))] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%] duration-300"
        >
          {/* Yellow corner accents */}
          <span className="pointer-events-none absolute top-0 left-0 w-16 h-1.5 bg-citrus z-10" aria-hidden />
          <span className="pointer-events-none absolute top-0 left-0 w-1.5 h-16 bg-citrus z-10" aria-hidden />
          <span className="pointer-events-none absolute bottom-0 right-0 w-16 h-1.5 bg-citrus z-10" aria-hidden />
          <span className="pointer-events-none absolute bottom-0 right-0 w-1.5 h-16 bg-citrus z-10" aria-hidden />

          <div className="flex items-center justify-between gap-4 border-b-2 border-ink px-5 sm:px-8 py-4 sm:py-5 bg-paper sticky top-0 z-20">
            <div>
              <DialogPrimitive.Title asChild>
                <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink leading-none">
                  Let's <span className="bg-citrus px-2 text-ink">Connect</span>
                </h2>
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-ink-soft">
                Drop the details — I'll be in touch
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close
              aria-label="Close"
              className="shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 border-2 border-ink text-ink hover:bg-citrus hover:text-ink hover:border-ink transition-colors duration-200"
            >
              <X size={18} strokeWidth={2.5} />
            </DialogPrimitive.Close>
          </div>

          <div className="p-3 sm:p-5 md:p-6 bg-paper">
            <ContactForm tone="light" />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};