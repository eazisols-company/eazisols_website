type Props = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  const text = variant === "light" ? "text-primary-foreground" : "text-ink";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 92 58" className="h-11 w-[70px] drop-shadow-sm" aria-hidden>
        <path d="M7 50 27 12l14 38H7Z" fill="currentColor" className={variant === "light" ? "text-primary-foreground" : "text-ink"} />
        <path d="M85 50H51l14-38 20 38Z" fill="currentColor" className={variant === "light" ? "text-primary-foreground" : "text-ink"} />
        <path d="M31 3h32l-6 12H47v38H36V15H25l6-12Z" fill="var(--brand)" />
        <path d="M20 50h20l-4-11H26l-6 11Zm32 0h20l-6-11H56l-4 11Z" fill="currentColor" className={variant === "light" ? "text-primary-foreground" : "text-ink"} opacity="0.92" />
      </svg>
      <span className={`text-[15px] font-black italic tracking-normal ${text}`}>tecaudex</span>
    </div>
  );
}
