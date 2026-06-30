"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { budgetOptions, siteConfig, timelineOptions } from "@/lib/site-data";
import { serviceOptions } from "@/lib/brand";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/50 px-4 py-4 text-base text-white placeholder:text-zinc-600 transition-all duration-200 focus:border-brand-orange/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/20";

const labelClass = "mb-2.5 block text-sm font-medium text-zinc-300";

const encode = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: Record<string, string> = {
      "form-name": "project-request",
    };

    formData.forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(data),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      window.location.href = "/thank-you";
    } catch {
      setError(
        `Something went wrong sending your request. Please try again or call ${siteConfig.phone}.`
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
                  Name <span className="text-brand-orange">*</span>
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
                  Email <span className="text-brand-orange">*</span>
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
                <span className="text-brand-orange">*</span>
              </label>
              <select id="service" name="service" required className={inputClass}>
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
                  Budget Range <span className="text-brand-orange">*</span>
                </label>
                <select id="budget" name="budget" required className={inputClass}>
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
                  Timeline <span className="text-brand-orange">*</span>
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
                Message <span className="text-brand-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                className={`${inputClass} min-h-[180px] resize-y`}
                placeholder="Tell us what you need built, fixed, automated, or launched."
              />
            </div>

            {error && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                {error}
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-brand-orange px-10 py-4 text-base font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all duration-300 hover:bg-brand-orange-light hover:shadow-brand-orange/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[280px] sm:w-auto"
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
            className="font-medium text-brand-orange transition-colors hover:text-brand-orange-light hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
