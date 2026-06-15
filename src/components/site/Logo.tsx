type Props = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 64 48" className="h-9 w-12" aria-hidden>
        <polygon points="2,4 30,4 26,12 12,12 12,44 22,44 22,20 30,20 26,28 22,28 22,44 6,44" fill="currentColor" className={variant === "light" ? "text-white" : "text-ink"} />
        <polygon points="34,4 62,4 58,12 44,12 44,44 54,44 54,20 46,20" fill="#ef4444" />
      </svg>
      <span className={`font-semibold tracking-tight italic ${text}`}>tecaudex</span>
    </div>
  );
}
