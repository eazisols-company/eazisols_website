import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-pad ${className}`}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-ink-soft leading-relaxed">{description}</p>
            )}
          </div>
        )}
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </div>
    </section>
  );
}
