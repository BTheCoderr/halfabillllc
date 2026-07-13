"use client";

import { FormEvent, useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { budgetOptions, siteConfig, timelineOptions } from "@/lib/site-data";
import { serviceOptions } from "@/lib/brand";
import {
  BUDGET_PREFILL_KEY,
  MESSAGE_PREFILL_KEY,
  SERVICE_PREFILL_KEY,
} from "@/lib/intake";

/** Netlify Forms on Next.js must POST to a static HTML path, not `/`. */
const NETLIFY_FORM_ACTION = "/netlify-form.html";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/50 px-4 py-4 text-base text-white placeholder:text-zinc-600 transition-all duration-200 focus:border-brand-gold/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/20";

const labelClass = "mb-2.5 block text-sm font-medium text-zinc-300";

function buildEncodedBody(form: HTMLFormElement): string {
  const formData = new FormData(form);
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    params.append(key, String(value));
  });

  if (!params.get("form-name")) {
    params.set("form-name", "project-request");
  }

  return params.toString();
}

function applyPrefill(
  setService: (value: string) => void,
  setBudget: (value: string) => void,
  setMessage: (value: string) => void
) {
  const params = new URLSearchParams(window.location.search);
  const serviceFromUrl = params.get("service");
  const serviceFromStorage = sessionStorage.getItem(SERVICE_PREFILL_KEY);
  const serviceValue = serviceFromUrl ?? serviceFromStorage;

  if (
    serviceValue &&
    (serviceOptions as readonly string[]).includes(serviceValue)
  ) {
    setService(serviceValue);
    sessionStorage.removeItem(SERVICE_PREFILL_KEY);
  }

  const budgetValue = sessionStorage.getItem(BUDGET_PREFILL_KEY);
  if (budgetValue && budgetOptions.includes(budgetValue)) {
    setBudget(budgetValue);
    sessionStorage.removeItem(BUDGET_PREFILL_KEY);
  }

  const messageValue = sessionStorage.getItem(MESSAGE_PREFILL_KEY);
  if (messageValue) {
    setMessage(messageValue);
    sessionStorage.removeItem(MESSAGE_PREFILL_KEY);
  }
}

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    applyPrefill(setService, setBudget, setMessage);

    function handlePrefillEvent() {
      applyPrefill(setService, setBudget, setMessage);
    }

    window.addEventListener("hab-intake-prefill", handlePrefillEvent);
    return () =>
      window.removeEventListener("hab-intake-prefill", handlePrefillEvent);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;

    try {
      const response = await fetch(NETLIFY_FORM_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: buildEncodedBody(form),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`);
      }

      window.location.href = "/thank-you";
    } catch {
      setError(
        `Something went wrong sending your request. Please try again, call ${siteConfig.phone}, or use the booking link.`
      );
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[980px] px-5 lg:px-8">
        <SectionHeading
          title="Start Your Project"
          subtitle="Tell us what you need built. We will review your details and get back to you shortly."
          eyebrow="Project Request"
        />

        <div className="gradient-border">
          <form
            name="project-request"
            method="POST"
            action={NETLIFY_FORM_ACTION}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="glass-card space-y-6 rounded-2xl p-8 sm:space-y-7 sm:p-10 lg:p-14"
          >
            <input type="hidden" name="form-name" value="project-request" />

            <p className="hidden" aria-hidden="true">
              <label>
                Don&apos;t fill this out:
                <input
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-brand-gold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@business.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="(401) 217-9799"
                />
              </div>
              <div>
                <label htmlFor="businessName" className={labelClass}>
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Your business"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className={labelClass}>
                What do you need help with?{" "}
                <span className="text-brand-gold">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={service}
                onChange={(event) => setService(event.target.value)}
                className={inputClass}
              >
                <option value="">Select one</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget Range <span className="text-brand-gold">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                  className={inputClass}
                >
                  <option value="">Select one</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Timeline <span className="text-brand-gold">*</span>
                </label>
                <select id="timeline" name="timeline" required className={inputClass}>
                  <option value="">Select one</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message <span className="text-brand-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${inputClass} min-h-[180px] resize-y`}
                placeholder="Tell us what you need built, fixed, automated, or launched."
              />
            </div>

            {error && (
              <p
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                role="alert"
              >
                {error}
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-brand-gold px-10 py-4 text-base font-semibold text-[#050505] shadow-lg shadow-brand-gold/25 transition-all duration-300 hover:bg-brand-gold-light hover:shadow-brand-gold/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[280px] sm:w-auto"
              >
                {submitting ? "Sending..." : "Send Project Request"}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Not sure what you need yet? Send the problem. We will help you figure
          out the build.
        </p>
        <p className="mt-4 text-center text-sm text-zinc-500">
          Prefer to talk first?{" "}
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-medium text-brand-gold transition-colors hover:text-brand-gold-light hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
