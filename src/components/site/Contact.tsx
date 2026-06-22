import { useState, useRef, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import {
  COUNTRIES,
  formatDialCodeValue,
  formatPhonePrefix,
  getCountryByCode,
} from "@/lib/countries";
import { getApiErrorMessage, submitContactUs } from "@/lib/api";
import { Snackbar, useSnackbar } from "@/components/ui/Snackbar";

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/80 focus:border-ink focus:outline-none";

const MESSAGE_MIN_LENGTH = 20;
const MESSAGE_MAX_LENGTH = 500;

const SUCCESS_MESSAGE =
  "Your message has been sent successfully. We will get back to you soon.";

type ValidationResult = {
  snackbarError: string | null;
  messageFieldError: string | null;
};

function validateContactForm(formData: FormData): ValidationResult {
  const fullName = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("description") ?? "").trim();

  const emptyCount = [fullName, email, phone, company, message].filter((value) => !value).length;

  if (emptyCount > 1) {
    return {
      snackbarError: "Please fill in all required fields.",
      messageFieldError: null,
    };
  }

  if (!fullName) {
    return {
      snackbarError: "Please enter your name.",
      messageFieldError: null,
    };
  }

  if (!email) {
    return {
      snackbarError: "Please fill in all required fields.",
      messageFieldError: null,
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      snackbarError: "Please enter a valid email address.",
      messageFieldError: null,
    };
  }

  if (!phone) {
    return {
      snackbarError: "Please enter your phone number.",
      messageFieldError: null,
    };
  }

  if (!company) {
    return {
      snackbarError: "Please enter your company name.",
      messageFieldError: null,
    };
  }

  if (!message) {
    return {
      snackbarError: "Please fill in all required fields.",
      messageFieldError: null,
    };
  }

  if (message.length < MESSAGE_MIN_LENGTH) {
    return {
      snackbarError: "Please enter at least 20 characters in your message.",
      messageFieldError: "Please enter at least 20 characters.",
    };
  }

  if (message.length > MESSAGE_MAX_LENGTH) {
    return {
      snackbarError: "Please keep your message within 500 characters.",
      messageFieldError: "Maximum 500 characters allowed.",
    };
  }

  return {
    snackbarError: null,
    messageFieldError: null,
  };
}

function buildContactPayload(formData: FormData) {
  const countryCode = String(formData.get("country_code") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  return {
    fullName: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: `${countryCode}${phone}`,
    message: String(formData.get("description") ?? "").trim(),
    company_name: String(formData.get("company") ?? "").trim(),
    subject: "General Inquiry",
  };
}

export function Contact() {
  const [selectedCountry, setSelectedCountry] = useState("pk");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageFieldError, setMessageFieldError] = useState<string | null>(null);
  const { snackbar, hide, showSuccess, showError } = useSnackbar();
  const formRef = useRef<HTMLFormElement>(null);
  const country = getCountryByCode(selectedCountry) ?? COUNTRIES[0];

  const resetForm = () => {
    formRef.current?.reset();
    setSelectedCountry("pk");
    setMessageFieldError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageFieldError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const validation = validateContactForm(formData);

    if (validation.snackbarError) {
      setMessageFieldError(validation.messageFieldError);
      showError(validation.snackbarError);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactUs(buildContactPayload(formData));
      resetForm();
      showSuccess(SUCCESS_MESSAGE);
    } catch (error) {
      showError(getApiErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
          ref={formRef}
          className="mt-8 space-y-4"
          onSubmit={handleSubmit}
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
              <input name="company" type="text" placeholder="Company" className={inputClass} />
            </div>
          </div>

          <div>
            <textarea
              name="description"
              rows={5}
              maxLength={MESSAGE_MAX_LENGTH}
              placeholder="Product / Idea description"
              className={`${inputClass} min-h-[140px] resize-none ${messageFieldError ? "border-red-400 focus:border-red-500" : ""}`}
              onChange={() => {
                if (messageFieldError) setMessageFieldError(null);
              }}
            />
            <div className="mt-1.5 flex items-start justify-between gap-3">
              <p className="text-xs text-ink-soft">Maximum 500 characters.</p>
              {messageFieldError ? (
                <p className="text-xs text-red-600">{messageFieldError}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-[#418ed6] px-8 py-3 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        variant={snackbar.variant}
        onClose={hide}
      />
    </>
  );
}
