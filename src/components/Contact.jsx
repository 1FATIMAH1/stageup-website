import { useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, lang } = useLanguage();
  const contact = t.contact;
  const form = contact.form;
  const productOptions = [
    ...t.categories.items.map((c) => c.title),
    form.notSureOption,
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const labels =
      lang === "ar"
        ? {
            heading: "طلب عرض سعر جديد من الموقع",
            name: "الاسم",
            company: "الشركة",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            need: "الخدمة المطلوبة",
            eventDate: "تاريخ الفعالية",
            budget: "الميزانية التقديرية",
            details: "تفاصيل المشروع",
          }
        : {
            heading: "New quote request from the website",
            name: "Name",
            company: "Company",
            email: "Email",
            phone: "Phone",
            need: "Service needed",
            eventDate: "Event date",
            budget: "Estimated budget",
            details: "Project details",
          };

    const optionalLine = (label, value) =>
      value ? `${label}: ${String(value).trim()}` : null;
    const message = [
      `*${labels.heading}*`,
      "",
      `${labels.name}: ${String(data.get("name") || "").trim()}`,
      optionalLine(labels.company, data.get("company")),
      `${labels.email}: ${String(data.get("email") || "").trim()}`,
      `${labels.phone}: ${String(data.get("phone") || "").trim()}`,
      `${labels.need}: ${String(data.get("need") || "").trim()}`,
      optionalLine(labels.eventDate, data.get("eventDate")),
      optionalLine(labels.budget, data.get("budget")),
      "",
      `${labels.details}:`,
      String(data.get("details") || "").trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal as="p" className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-copper-light">
            {contact.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-cream sm:text-5xl"
          >
            {contact.title}
          </Reveal>
          <Reveal delay={140} as="p" className="mt-5 max-w-[65ch] text-base leading-relaxed text-tan/75">
            {contact.description}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal delay={180} className="lg:col-span-3">
            {submitted ? (
              <div
                className="flex h-full flex-col items-center justify-center rounded-sm border border-copper/30 bg-charcoal p-12 text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-copper-light text-2xl text-copper-light">
                  ✓
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                  {form.successTitle}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-tan/65">
                  {form.successCopy}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={form.nameLabel} name="name" required />
                  <Field
                    label={form.companyLabel}
                    name="company"
                    required={false}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label={form.emailLabel}
                    name="email"
                    type="email"
                    required
                  />
                  <Field label={form.phoneLabel} name="phone" type="tel" required />
                </div>

                <div>
                  <label htmlFor="need" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-tan/70">
                    {form.needLabel} <span className="text-copper-light">*</span>
                  </label>
                  <select
                    id="need"
                    name="need"
                    required
                    defaultValue=""
                    className="w-full rounded-sm border border-tan/20 bg-charcoal px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-copper-light"
                  >
                    <option value="" disabled>
                      {form.needPlaceholder}
                    </option>
                    {productOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label={form.eventDateLabel}
                    name="eventDate"
                    type="date"
                    required={false}
                  />
                  <Field
                    label={form.budgetLabel}
                    name="budget"
                    required={false}
                  />
                </div>

                <div>
                  <label htmlFor="details" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-tan/70">
                    {form.detailsLabel} <span className="text-copper-light">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    maxLength={1500}
                    rows={5}
                    placeholder={form.detailsPlaceholder}
                    className="w-full resize-none rounded-sm border border-tan/20 bg-charcoal px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-tan/35 focus:border-copper-light"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-sm bg-copper px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-copper-light"
                >
                  {form.submit}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={240} className="lg:col-span-2">
            <div className="rounded-sm border border-tan/12 p-8">
              <h3 className="font-display text-xl font-semibold text-cream">
                {contact.infoTitle}
              </h3>
              <dl className="mt-6 space-y-5">
                {contact.info.map((c) => (
                  <div key={c.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-copper-light">
                      {c.label}
                    </dt>
                    <dd className="mt-1 text-sm text-tan/80">{c.value}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-copper-light">
                    {contact.emailsLabel}
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {contact.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-sm text-tan/80 transition-colors hover:text-copper-light"
                      >
                        {email}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-copper-light">
                    {contact.phonesLabel}
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        dir="ltr"
                        className="block text-sm text-tan/80 transition-colors hover:text-copper-light"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-sm text-tan/60">
                {contact.presenceLabel} {contact.presenceCities}
              </p>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 rounded-sm bg-copper px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-200 hover:bg-copper-light"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11a16.5 16.5 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
                </svg>
                {contact.whatsappLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-tan/70"
      >
        {label} {required && <span className="text-copper-light">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={type === "email" ? 254 : 120}
        autoComplete={
          name === "name"
            ? "name"
            : name === "email"
              ? "email"
              : name === "phone"
                ? "tel"
                : "organization"
        }
        className="w-full rounded-sm border border-tan/20 bg-charcoal px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-tan/35 focus:border-copper-light"
      />
    </div>
  );
}
