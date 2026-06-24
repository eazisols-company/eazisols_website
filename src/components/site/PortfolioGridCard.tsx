import { Link } from "@tanstack/react-router";
import type { PortfolioItem } from "@/data/portfolio-data";

export function PortfolioGridCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: item.slug }}
      className="group relative block aspect-square overflow-hidden bg-surface"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:blur-sm"
      />

      <div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/55" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-white shadow-card">
          <span className="text-lg font-black text-ink">{item.title.charAt(0)}</span>
        </div>
        <p className="mt-3 text-center text-base font-bold tracking-tight text-white md:text-lg">
          {item.title}
        </p>
      </div>
    </Link>
  );
}
