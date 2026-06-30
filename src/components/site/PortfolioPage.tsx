import { useMemo, useState, type FormEvent } from "react";
import { ChevronDown, Search } from "lucide-react";

import {
  getPortfolioFilterOptions,
  portfolioItems,
  portfolioTypeTabs,
  type PortfolioItem,
  type PortfolioTypeTab,
} from "@/data/portfolio-data";
import { PortfolioGridCard } from "@/components/site/PortfolioGridCard";

const filterSelectClass =
  "appearance-none rounded-full border border-gray-200 bg-white py-2 pl-3.5 pr-8 text-xs font-medium text-ink focus:outline-none cursor-pointer";

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <div className="relative shrink-0">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={filterSelectClass}
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-ink-soft"
        strokeWidth={1.5}
      />
    </div>
  );
}

function matchesSearch(item: PortfolioItem, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  const searchable = [
    item.title,
    item.category,
    item.industry,
    item.region,
    item.type,
    ...item.technologies,
    ...item.features,
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(normalized);
}

export function PortfolioPage() {
  const filterOptions = useMemo(() => getPortfolioFilterOptions(), []);

  const [activeTab, setActiveTab] = useState<PortfolioTypeTab>("All");
  const [industry, setIndustry] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [technology, setTechnology] = useState("");
  const [feature, setFeature] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      if (activeTab !== "All" && item.type !== activeTab) return false;
      if (industry && item.industry !== industry) return false;
      if (category && item.category !== category) return false;
      if (region && item.region !== region) return false;
      if (technology && !item.technologies.includes(technology)) return false;
      if (feature && !item.features.includes(feature)) return false;
      if (!matchesSearch(item, appliedSearch)) return false;
      return true;
    });
  }, [activeTab, industry, category, region, technology, feature, appliedSearch]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAppliedSearch(searchInput.trim());
  };

  return (
    <>
      <section className="container-page pt-12 md:pt-16">
        <h1 className="text-5xl font-bold text-ink md:text-6xl">
          Our <span className="text-ink/35">portfolio</span>
        </h1>

        <div className="mt-8 flex items-center gap-2 overflow-x-auto mb-8 md:gap-3">
          <div className="inline-flex shrink-0 items-center rounded-full bg-gray-100 p-1">
            {portfolioTypeTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide transition md:px-4 ${
                  activeTab === tab
                    ? "bg-white text-ink shadow-sm"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <FilterSelect
              label="Industries"
              value={industry}
              options={filterOptions.industries}
              onChange={setIndustry}
            />
            <FilterSelect
              label="Categories"
              value={category}
              options={filterOptions.categories}
              onChange={setCategory}
            />
            <FilterSelect
              label="Region"
              value={region}
              options={filterOptions.regions}
              onChange={setRegion}
            />
            <FilterSelect
              label="Technologies"
              value={technology}
              options={filterOptions.technologies}
              onChange={setTechnology}
            />
            <FilterSelect
              label="Features"
              value={feature}
              options={filterOptions.features}
              onChange={setFeature}
            />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-3">
            <form
              onSubmit={handleSearchSubmit}
              className={`flex items-center overflow-hidden transition-all duration-300 ${
                searchOpen ? "w-44 rounded-full border border-gray-200 bg-white px-3" : "w-auto"
              }`}
            >
              {searchOpen ? (
                <input
                  type="search"
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                  placeholder="Search apps..."
                  autoFocus
                  onBlur={() => {
                    if (!searchInput.trim()) setSearchOpen(false);
                  }}
                  className="min-w-0 flex-1 bg-transparent py-1.5 text-xs text-ink placeholder:text-ink-soft focus:outline-none"
                />
              ) : null}
              <button
                type={searchOpen ? "submit" : "button"}
                aria-label="Search portfolio"
                onClick={() => {
                  if (!searchOpen) {
                    setSearchOpen(true);
                    return;
                  }
                  setAppliedSearch(searchInput.trim());
                }}
                className="grid h-8 w-8 place-items-center text-ink-soft transition hover:text-ink"
              >
                <Search className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </form>

            <span className="h-8 w-px shrink-0 bg-border" />

            <div className="text-right text-[11px] leading-snug text-ink-soft">
              <span className="block">Showing</span>
              <span className="block">{filteredItems.length} apps</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredItems.length === 0 ? (
          <div className="col-span-full px-6 py-16 text-center">
            <p className="text-sm font-medium text-ink">No portfolio items match your filters.</p>
            <p className="mt-2 text-sm text-ink-soft">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          filteredItems.map((item) => <PortfolioGridCard key={item.id} item={item} />)
        )}
      </section>
    </>
  );
}
