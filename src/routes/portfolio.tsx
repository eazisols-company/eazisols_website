import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — eazisols" },
      { name: "description", content: "Explore selected eazisols portfolio projects." },
      { property: "og:title", content: "Portfolio — eazisols" },
      { property: "og:description", content: "A grid of digital products and brand work by eazisols." },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Mobile", "Web", "Healthcare", "Cryptocurrency", "Design", "Technology", "Fintech"];
const names = ["rocket", "success", "Alraha", "Relitech", "Saberlee", "The Wealth", "Kivva", "Memonli", "Ultrabo", "Infinity", "YTY", "Zlply", "Stock", "thevault", "LovinPark", "Tuneflow", "HDAA", "Sentinel", "Findr", "Cloudly", "Givtrade", "Leafly", "Khal Kood", "Printshop", "ynTRY", "Social Rent", "WayMoto", "BAFY STAND", "Monarch", "Chat AI", "Loca", "ProHireAI", "Activio", "ai.io", "Schramm", "Vivid", "Hybridz"];

function PortfolioPage() {
  const [active, setActive] = useState("All");
  return (
    <>
      <section className="container-page pt-12 md:pt-16">
        <h1 className="text-5xl font-extrabold text-ink md:text-6xl">Our <span className="text-ink/35">portfolio</span></h1>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`rounded-full border px-4 py-1.5 text-xs font-bold transition ${active === cat ? "border-ink bg-ink text-primary-foreground" : "border-border bg-card text-ink hover:border-ink"}`}>{cat}</button>
            ))}
          </div>
          <div className="flex items-center gap-5 text-ink-soft"><Search className="h-4 w-4" /><button className="inline-flex items-center gap-2 text-xs font-bold">Filter <SlidersHorizontal className="h-4 w-4" /></button></div>
        </div>
      </section>
      <section className="mt-7 grid grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 56 }).map((_, i) => {
          const name = names[i % names.length];
          return <article key={i} className="group relative aspect-square overflow-hidden border-r border-b border-background image-tile-bg"><div className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/5" /><div className="absolute inset-0 grid place-items-center"><div className="grid min-h-20 min-w-24 place-items-center rounded-lg bg-card px-5 py-4 shadow-card transition group-hover:-translate-y-1"><span className="text-center text-sm font-black text-ink">{name}</span></div></div></article>;
        })}
        <div className="aspect-square border-r border-b border-background bg-surface" />
        <div className="aspect-square border-r border-b border-background bg-surface" />
      </section>
    </>
  );
}