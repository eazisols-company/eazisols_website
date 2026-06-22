import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export type SnackbarVariant = "success" | "error";

type SnackbarProps = {
  open: boolean;
  message: string;
  variant: SnackbarVariant;
  onClose: () => void;
  duration?: number;
};

const variantStyles: Record<SnackbarVariant, string> = {
  success: "border-green-200 bg-green-50 text-green-950",
  error: "border-red-200 bg-red-50 text-red-950",
};

const iconStyles: Record<SnackbarVariant, string> = {
  success: "text-green-600",
  error: "text-red-600",
};

export function Snackbar({
  open,
  message,
  variant,
  onClose,
  duration = 5000,
}: SnackbarProps) {
  useEffect(() => {
    if (!open) return;

    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [open, message, variant, onClose, duration]);

  if (!open || !message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-6 right-6 z-[200] flex w-[min(100vw-2rem,24rem)] items-start gap-3 rounded-xl border px-4 py-3 shadow-lg",
        variantStyles[variant],
      )}
    >
      {variant === "success" ? (
        <CheckCircle2 className={cn("mt-0.5 h-5 w-5 shrink-0", iconStyles[variant])} />
      ) : (
        <XCircle className={cn("mt-0.5 h-5 w-5 shrink-0", iconStyles[variant])} />
      )}
      <p className="flex-1 text-sm font-medium leading-snug">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="shrink-0 rounded-md p-0.5 opacity-70 transition hover:opacity-100"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function useSnackbar(duration = 5000) {
  const [state, setState] = useState<{
    open: boolean;
    message: string;
    variant: SnackbarVariant;
  }>({
    open: false,
    message: "",
    variant: "success",
  });

  const hide = useCallback(() => {
    setState((prev) => ({ ...prev, open: false }));
  }, []);

  const show = useCallback((message: string, variant: SnackbarVariant) => {
    setState({ open: true, message, variant });
  }, []);

  const showSuccess = useCallback(
    (message: string) => show(message, "success"),
    [show],
  );

  const showError = useCallback(
    (message: string) => show(message, "error"),
    [show],
  );

  return {
    snackbar: state,
    hide,
    showSuccess,
    showError,
  };
}
