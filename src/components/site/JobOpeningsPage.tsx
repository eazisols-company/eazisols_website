import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, Search } from "lucide-react";

import { fetchJobOpenings, getApiErrorMessage, type JobOpening } from "@/lib/api";
import { JobPageHero } from "@/components/site/JobPageHero";

const selectClass =
  "w-full appearance-none rounded-lg border border-border bg-white px-4 py-3 pr-10 text-sm text-ink focus:border-brand focus:outline-none";

function uniqueSortedValues(jobs: JobOpening[], key: keyof JobOpening): string[] {
  return [...new Set(jobs.map((job) => String(job[key]).trim()).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b),
  );
}

function matchesSearch(job: JobOpening, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  const searchableText = [
    job.title,
    job.department,
    job.workplace_type,
    job.location,
    job.work_type,
  ]
    .join(" ")
    .toLowerCase();

  return (
    job.title.toLowerCase().includes(normalized) ||
    job.department.toLowerCase().includes(normalized) ||
    searchableText.includes(normalized)
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={selectClass}
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
    </div>
  );
}

export function JobOpeningsPage() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [workplaceType, setWorkplaceType] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [workType, setWorkType] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadJobs() {
      setIsLoading(true);
      setLoadError(null);

      try {
        const data = await fetchJobOpenings();
        if (isMounted) {
          setJobs(data);
        }
      } catch (error) {
        if (isMounted) {
          setLoadError(getApiErrorMessage(error, "Unable to load job openings."));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadJobs();

    return () => {
      isMounted = false;
    };
  }, []);

  const workplaceOptions = useMemo(
    () => uniqueSortedValues(jobs, "workplace_type"),
    [jobs],
  );
  const locationOptions = useMemo(() => uniqueSortedValues(jobs, "location"), [jobs]);
  const departmentOptions = useMemo(() => uniqueSortedValues(jobs, "department"), [jobs]);
  const workTypeOptions = useMemo(() => uniqueSortedValues(jobs, "work_type"), [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (!matchesSearch(job, appliedSearch)) return false;
      if (workplaceType && job.workplace_type !== workplaceType) return false;
      if (location && job.location !== location) return false;
      if (department && job.department !== department) return false;
      if (workType && job.work_type !== workType) return false;
      return true;
    });
  }, [jobs, appliedSearch, workplaceType, location, department, workType]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAppliedSearch(searchInput.trim());
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setAppliedSearch("");
    setWorkplaceType("");
    setLocation("");
    setDepartment("");
    setWorkType("");
  };

  const hasActiveFilters =
    Boolean(appliedSearch) ||
    Boolean(workplaceType) ||
    Boolean(location) ||
    Boolean(department) ||
    Boolean(workType);

  return (
    <div className="bg-white">
      <JobPageHero>
        <h1 className="text-center text-3xl font-bold text-white drop-shadow-sm md:text-4xl">
          Job Search
        </h1>

        <form
          onSubmit={handleSearchSubmit}
          className="mx-auto mt-8 flex max-w-3xl items-center rounded-full border border-white/20 bg-white/95 p-1.5 pl-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm"
        >
          <input
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search by title, team, or keyword..."
            className="min-w-0 flex-1 bg-transparent py-3 text-sm text-ink placeholder:text-ink-soft/80 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search jobs"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#418ED6] text-white shadow-md transition hover:brightness-110"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </JobPageHero>

      <section className="container-page py-12 md:py-14">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#418ed6] md:text-[30px]">
            Find Your Role at eazisols
          </h2>
          <p className="mt-3 text-sm text-ink-soft md:text-base">
            Rewrite your future. Search and apply for a job today
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <FilterSelect
              label="Workplace Type"
              value={workplaceType}
              options={workplaceOptions}
              onChange={setWorkplaceType}
            />
            <FilterSelect
              label="Location"
              value={location}
              options={locationOptions}
              onChange={setLocation}
            />
            <FilterSelect
              label="Department"
              value={department}
              options={departmentOptions}
              onChange={setDepartment}
            />
            <FilterSelect
              label="Work Type"
              value={workType}
              options={workTypeOptions}
              onChange={setWorkType}
            />
          </div>

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={handleClearFilters}
              disabled={!hasActiveFilters}
              className="text-sm font-semibold text-[#418ed6] transition hover:underline disabled:cursor-not-allowed disabled:opacity-40"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-border">
          {isLoading ? (
            <p className="py-12 text-center text-sm text-ink-soft">Loading job openings...</p>
          ) : loadError ? (
            <p className="py-12 text-center text-sm text-red-600">{loadError}</p>
          ) : filteredJobs.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-ink">
                No job openings match your selected filters.
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div>
              {filteredJobs.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() =>
                    navigate({
                      to: "/job-opening/$id",
                      params: { id: String(job.id) },
                    })
                  }
                  className="flex w-full cursor-pointer flex-col gap-3 border-b border-border py-5 text-left transition hover:bg-surface/60 lg:flex-row lg:items-center lg:gap-6"
                >
                  <h3 className="text-base font-bold text-[#1f7a3f] md:text-lg lg:min-w-[220px] lg:flex-[1.2]">
                    {job.title}
                  </h3>
                  <span className="text-sm text-ink-soft lg:flex-1">{job.workplace_type}</span>
                  <span className="truncate text-sm text-ink-soft lg:flex-1" title={job.location}>
                    {job.location}
                  </span>
                  <span className="text-sm text-ink-soft lg:flex-1">{job.department}</span>
                  <span className="text-sm text-ink-soft lg:flex-1">{job.work_type}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
