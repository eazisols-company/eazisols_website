const LOGO_SRC = "/images/logo.png";

type Props = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={LOGO_SRC}
        alt="Eazisols"
        className={`h-9 w-auto md:h-10 ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
