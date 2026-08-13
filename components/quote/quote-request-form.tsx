"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { serviceCategories, getWhatsAppHref, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground " +
  "placeholder:text-muted-foreground/70 outline-none shadow-xs " +
  "transition-[box-shadow,border-color,background-color] " +
  "focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/25";

const labelClass =
  "mb-1.5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase";

/** Sub-services under each pillar (for the quote select). */
const serviceSelectGroups = serviceCategories.map((category) => ({
  label: category.title,
  options: category.items.map((item) => item.title),
}));

/**
 * Quote form (client) — builds a WhatsApp message and opens wa.me.
 * Backend API can replace this later without changing the page layout.
 */
export function QuoteRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    if (!firstName || !lastName || !phone || !service || !location || !details) {
      setError("Please fill in all required fields.");
      return;
    }

    const lines = [
      `Hello LimeLine — free quote request from the website.`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Service: ${service}`,
      `Location: ${location}`,
      ``,
      `Project details:`,
      details,
    ].filter(Boolean);

    const href = getWhatsAppHref(lines.join("\n"));
    window.open(href, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/8 sm:p-8">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-foreground">
          <CheckCircle2 className="size-6" aria-hidden />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Request ready</h2>
          <p className="text-sm text-muted-foreground">
            WhatsApp should open with your quote details. If it didn&apos;t,{" "}
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-blue hover:underline"
            >
              chat with us here
            </a>{" "}
            or call{" "}
            <a href={siteConfig.phoneHref} className="font-medium text-brand-blue hover:underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-foreground hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/8 sm:p-8"
      noValidate
    >
      <p className="mb-6 text-sm text-muted-foreground">
        Fill in the form and we&apos;ll respond as soon as we can.
      </p>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="John"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Doe"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="0700 000 000"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service required
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={cn(
                fieldClass,
                "cursor-pointer appearance-none bg-background pr-11 font-medium",
                "text-foreground"
              )}
            >
              <option value="" disabled className="text-muted-foreground">
                Select a sub-service…
              </option>
              {serviceSelectGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
            {/* Visible chevron — native select arrow is easy to miss on muted fields */}
            <span
              className="pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-center text-foreground"
              aria-hidden
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="location" className={labelClass}>
            Your location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            placeholder="e.g. Kasarani, Roysambu…"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="details" className={labelClass}>
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={4}
            placeholder="Describe your electrical, security, or solar project or issue…"
            className={cn(fieldClass, "min-h-[7rem] resize-y")}
          />
        </div>

        {error ? (
          <p className="text-sm font-medium text-destructive" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className={
            "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full " +
            "bg-primary text-sm font-semibold text-primary-foreground " +
            "shadow-md transition-colors hover:bg-primary/90 " +
            "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          }
        >
          Submit Request
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
