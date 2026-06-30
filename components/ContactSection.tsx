"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { budgetOptions, timelineOptions } from "@/lib/site-data";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange";

const labelClass = "mb-1.5 block text-sm font-medium text-zinc-300";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Connect form submission backend
    // Options: Formspree, Resend, Supabase, custom API route at /api/contact
    // Example:
    // const formData = new FormData(e.currentTarget);
    // await fetch('/api/contact', { method: 'POST', body: formData });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-white/5 bg-brand-charcoal/30 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          title="Let's talk about your project"
          subtitle="Not sure what you need yet? Send the problem. We will help you figure out the build."
        />

        {submitted ? (
          <div
            className="rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-8 text-center"
            role="status"
          >
            <p className="text-lg font-semibold text-white">
              Thanks — we got your message.
            </p>
            <p className="mt-2 text-zinc-400">
              We will review your project details and get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
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

            <div className="grid gap-5 sm:grid-cols-2">
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
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="business" className={labelClass}>
                  Business name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  className={inputClass}
                  placeholder="Your business"
                />
              </div>
            </div>

            <div>
              <label htmlFor="need" className={labelClass}>
                What do you need help with?{" "}
                <span className="text-brand-orange">*</span>
              </label>
              <input
                id="need"
                name="need"
                type="text"
                required
                className={inputClass}
                placeholder="Website, booking system, automation, app..."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget range
                </label>
                <select id="budget" name="budget" className={inputClass}>
                  <option value="">Select a range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Timeline
                </label>
                <select id="timeline" name="timeline" className={inputClass}>
                  <option value="">Select a timeline</option>
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
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${inputClass} resize-y`}
                placeholder="Tell us about your business, what's broken, and what you want built."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:w-auto"
            >
              Submit Project Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
