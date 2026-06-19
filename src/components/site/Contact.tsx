import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  COUNTRIES,
  formatDialCodeValue,
  formatPhonePrefix,
  getCountryByCode,
} from "@/lib/countries";

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/80 focus:border-ink focus:outline-none";

export function Contact() {
  const [selectedCountry, setSelectedCountry] = useState("pk");
  const country = getCountryByCode(selectedCountry) ?? COUNTRIES[0];

  return (
    <div className="rounded-[24px] border border-border bg-white p-8 shadow-soft md:p-10">
      <div>
        <h2 className="text-[22px] font-extrabold leading-tight text-ink md:text-2xl">
          Tell us about your project
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Drop your details, we will get in touch with you soon.
        </p>
      </div>

      <form
        className="mt-8 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" type="text" placeholder="Name" className={inputClass} />
          <input name="email" type="email" placeholder="Email" className={inputClass} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex overflow-hidden rounded-xl border border-border bg-white focus-within:border-ink">
            <div className="relative w-[88px] shrink-0 border-r border-border sm:w-[92px]">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="h-full w-full appearance-none bg-transparent py-3.5 pl-3 pr-7 text-sm text-ink focus:outline-none"
                aria-label="Country code"
              >
                {COUNTRIES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {formatPhonePrefix(item)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            </div>
            <input type="hidden" name="country_code" value={formatDialCodeValue(country)} />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/80 focus:outline-none"
            />
          </div>

          <div className="relative">
            <select
              name="communication_medium"
              defaultValue=""
              className={`${inputClass} appearance-none pr-10`}
              aria-label="Communication medium"
            >
              <option value="" disabled>
                Communication medium
              </option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="phone">Phone</option>
              <option value="linkedin">LinkedIn</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          </div>
        </div>

        <textarea
          name="description"
          rows={5}
          placeholder="Product / Idea description"
          className={`${inputClass} min-h-[140px] resize-none`}
        />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-xl bg-[#418ed6] px-8 py-3 text-sm font-extrabold text-white transition hover:brightness-110"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
