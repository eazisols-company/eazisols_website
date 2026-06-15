import logoAsset from "@/assets/eazisols-logo.png.asset.json";

type Props = { variant?: "light" | "dark"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="eazisols"
        className={`h-9 w-auto md:h-10 ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
