import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — eazisols" },
      {
        name: "description",
        content: "Learn how eazisols collects, uses, and protects your information.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Introduction",
    body: "eazisols (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, or use our services. By using our site, you agree to the practices described here.",
  },
  {
    title: "Information We Collect",
    body: "We may collect information you provide directly, such as your name, email address, phone number, company name, and project details when you fill out a contact form, book a call, or apply for a role. We may also collect technical information automatically, including browser type, device information, IP address, and pages visited, to help us understand how our website is used.",
  },
  {
    title: "How We Use Information",
    body: "We use the information we collect to respond to inquiries, provide services, improve our website, communicate with clients and applicants, and send relevant updates when permitted. We may also use aggregated or anonymized data to analyze site performance and improve user experience.",
  },
  {
    title: "Data Protection",
    body: "We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Contact",
    body: "If you have questions about this Privacy Policy or how we handle your information, contact us at info@eazisols.com or write to eazisols, 65 J1, WAPDA Town Phase 1 Block, Lahore, Pakistan.",
  },
];

function PrivacyPolicyPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[36px] font-bold text-ink md:text-[40px]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: June 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-ink">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
