import type { ReactNode } from "react";

type JobPageHeroProps = {
  children: ReactNode;
};

export function JobPageHero({ children }: JobPageHeroProps) {
  return (
    <section className="relative overflow-hidden  px-4 py-16  md:py-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a3d6e 0%, #2a5f9e 32%, #418ED6 62%, #5ba8e8 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(255,255,255,0.22),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(255,255,255,0.1),transparent_48%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10" />
      <div
        className="absolute -left-20 top-8 h-56 w-56 rounded-full blur-3xl"
        style={{ background: "rgba(255, 255, 255, 0.12)" }}
        aria-hidden
      />
      <div
        className="absolute -right-16 bottom-0 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "rgba(26, 61, 110, 0.35)" }}
        aria-hidden
      />
      <div className="container-page relative z-10">{children}</div>
    </section>
  );
}
