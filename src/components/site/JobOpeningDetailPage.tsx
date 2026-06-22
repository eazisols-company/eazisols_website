import { useEffect, useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";

import {
  fetchJobDetail,
  getApiErrorMessage,
  submitJobApplication,
  type JobDetail,
} from "@/lib/api";
import { Snackbar, useSnackbar } from "@/components/ui/Snackbar";
import { JobPageHero } from "@/components/site/JobPageHero";

const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/80 focus:border-[#418ED6] focus:outline-none";

type Tab = "overview" | "application";

type ApplicationForm = {
  firstName: string;
  lastName: string;
  email: string;
  headline: string;
  phone: string;
  address: string;
};

const emptyForm: ApplicationForm = {
  firstName: "",
  lastName: "",
  email: "",
  headline: "",
  phone: "",
  address: "",
};

type FieldErrors = Partial<Record<keyof ApplicationForm | "resume", string>>;

function isValidResumeFile(file: File): boolean {
  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  return (
    ACCEPTED_RESUME_TYPES.includes(file.type) ||
    ACCEPTED_RESUME_EXTENSIONS.includes(extension)
  );
}

function TextBlock({ title, content }: { title: string; content: string }) {
  const paragraphs = content
    .split(/\r?\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-soft md:p-8">
      <h3 className="text-lg font-bold text-ink md:text-xl">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft md:text-[15px]">
        {paragraphs.map((paragraph, index) => (
          <p key={`${title}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

type JobApplicationFormProps = {
  jobId: number;
};

function JobApplicationForm({ jobId }: JobApplicationFormProps) {
  const [form, setForm] = useState<ApplicationForm>(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { snackbar, hide, showSuccess, showError } = useSnackbar();

  const updateField = (field: keyof ApplicationForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setResume(null);
    setFieldErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleResumeSelection = (file: File | null) => {
    if (!file) return;

    if (!isValidResumeFile(file)) {
      setResume(null);
      setFieldErrors((prev) => ({
        ...prev,
        resume: "Please upload a PDF, DOC, or DOCX file.",
      }));
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      return;
    }

    setResume(file);
    setFieldErrors((prev) => {
      if (!prev.resume) return prev;
      const next = { ...prev };
      delete next.resume;
      return next;
    });
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    handleResumeSelection(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0] ?? null;
    handleResumeSelection(file);
  };

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};

    if (!form.firstName.trim()) errors.firstName = "First name is required.";
    if (!form.lastName.trim()) errors.lastName = "Last name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) errors.phone = "Phone is required.";
    if (!form.address.trim()) errors.address = "Address is required.";
    if (!resume) errors.resume = "Resume is required.";

    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      showError("Please complete all required fields.");
      return;
    }

    if (!resume) return;

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", `${form.firstName.trim()} ${form.lastName.trim()}`);
      payload.append("email", form.email.trim());
      payload.append("phone", form.phone.trim());
      payload.append("headline", form.headline.trim());
      payload.append("address", form.address.trim());
      payload.append("career_id", String(jobId));
      payload.append("resume", resume);

      await submitJobApplication(payload);
      resetForm();
      showSuccess("Application submitted successfully.");
    } catch {
      showError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldErrorClass = (field: keyof ApplicationForm) =>
    fieldErrors[field] ? "border-red-400 focus:border-red-500" : "";

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-ink md:text-xl">Personal Information</h3>
          <button
            type="button"
            onClick={resetForm}
            className="text-sm font-semibold text-[#418ED6] transition hover:underline"
          >
            Clear
          </button>
        </div>

        <div className="space-y-5 rounded-2xl border border-border bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-ink">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
                className={`${inputClass} ${fieldErrorClass("firstName")}`}
                placeholder="First name"
              />
              {fieldErrors.firstName ? (
                <p className="mt-1.5 text-xs text-red-600">{fieldErrors.firstName}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ink">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(event) => updateField("lastName", event.target.value)}
                className={`${inputClass} ${fieldErrorClass("lastName")}`}
                placeholder="Last name"
              />
              {fieldErrors.lastName ? (
                <p className="mt-1.5 text-xs text-red-600">{fieldErrors.lastName}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={`${inputClass} ${fieldErrorClass("email")}`}
              placeholder="Email"
            />
            {fieldErrors.email ? (
              <p className="mt-1.5 text-xs text-red-600">{fieldErrors.email}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">Headline (Optional)</label>
            <input
              type="text"
              value={form.headline}
              onChange={(event) => updateField("headline", event.target.value)}
              className={inputClass}
              placeholder="Headline"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className={`${inputClass} ${fieldErrorClass("phone")}`}
              placeholder="+92"
            />
            {fieldErrors.phone ? (
              <p className="mt-1.5 text-xs text-red-600">{fieldErrors.phone}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.address}
              onChange={(event) => updateField("address", event.target.value)}
              className={`${inputClass} ${fieldErrorClass("address")}`}
              placeholder="Address"
            />
            {fieldErrors.address ? (
              <p className="mt-1.5 text-xs text-red-600">{fieldErrors.address}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Resume <span className="text-red-500">*</span>
            </label>
            <div
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`rounded-xl border-2 border-dashed px-6 py-10 text-center transition ${
                isDragging
                  ? "border-[#418ED6] bg-[#418ED6]/5"
                  : fieldErrors.resume
                    ? "border-red-300 bg-red-50/40"
                    : "border-border bg-surface/40"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileInputChange}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#418ED6]/10 text-[#418ED6]">
                  <Upload className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-medium text-[#418ED6]">
                  Upload a file or drag and drop here
                </p>
                <p className="mt-1 text-xs text-ink-soft">PDF, DOC, or DOCX only</p>
              </label>
              {resume ? (
                <p className="mt-4 text-sm font-medium text-ink">Selected: {resume.name}</p>
              ) : null}
            </div>
            {fieldErrors.resume ? (
              <p className="mt-1.5 text-xs text-red-600">{fieldErrors.resume}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#418ED6] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>

      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        variant={snackbar.variant}
        onClose={hide}
      />
    </>
  );
}

type Props = {
  jobId: string;
};

export function JobOpeningDetailPage({ jobId }: Props) {
  const [job, setJob] = useState<JobDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  useEffect(() => {
    let isMounted = true;

    async function loadJob() {
      setIsLoading(true);
      setLoadError(null);

      try {
        const data = await fetchJobDetail(jobId);
        if (isMounted) {
          setJob(data);
        }
      } catch (error) {
        if (isMounted) {
          setLoadError(getApiErrorMessage(error, "Unable to load job details."));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadJob();

    return () => {
      isMounted = false;
    };
  }, [jobId]);

  if (isLoading) {
    return (
      <div className="bg-white py-24">
        <p className="text-center text-sm text-ink-soft">Loading job details...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="bg-white py-24">
        <div className="container-page mx-auto max-w-xl text-center">
          <p className="text-sm text-red-600">{loadError}</p>
          <Link
            to="/job-openings"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#418ED6] transition hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to jobs
          </Link>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="bg-white py-24">
        <div className="container-page mx-auto max-w-xl text-center">
          <h1 className="text-2xl font-bold text-ink">Job not found</h1>
          <p className="mt-3 text-sm text-ink-soft">
            This job opening may have been removed or is no longer available.
          </p>
          <Link
            to="/job-openings"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#418ED6] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f8fa]">
      <JobPageHero>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-sm md:text-4xl lg:text-[42px]">
            {job.title}
          </h1>
          <button
            type="button"
            onClick={() => setActiveTab("application")}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-7 py-3.5 text-sm font-bold text-ink shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-white/95"
          >
            Apply now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </JobPageHero>

      <section className="border-b border-border bg-white">
        <div className="container-page">
          <div className="flex justify-center gap-8 md:gap-12">
            {(["overview", "application"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 px-2 py-4 text-sm font-semibold capitalize transition md:text-base ${
                  activeTab === tab
                    ? "border-[#418ED6] text-[#418ED6]"
                    : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-10 md:py-12">
        {activeTab === "overview" ? (
          <div className="mx-auto max-w-4xl">
            <Link
              to="/job-openings"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#418ED6] transition hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to jobs
            </Link>

            <div className="mt-6 flex flex-wrap gap-3">
              {[job.workplace_type, job.location, job.department, job.work_type].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              {job.description ? <TextBlock title="Description" content={job.description} /> : null}
              {job.responsibilities ? (
                <TextBlock title="Responsibilities" content={job.responsibilities} />
              ) : null}
              {job.requirements ? (
                <TextBlock title="Requirements" content={job.requirements} />
              ) : null}
            </div>
          </div>
        ) : (
          <JobApplicationForm jobId={job.id} />
        )}
      </section>
    </div>
  );
}
