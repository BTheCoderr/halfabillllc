import { SectionHeading } from "@/components/ui/SectionHeading";
import { budgetOptions, timelineOptions } from "@/lib/site-data";
import { serviceOptions } from "@/lib/brand";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 transition-all duration-200 focus:border-brand-orange/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/20";

const labelClass = "mb-2 block text-sm font-medium text-zinc-300";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
      <div className="relative mx-auto max-w-2xl px-5 lg:px-8">
        <SectionHeading title="Start Your Project" eyebrow="Contact" />

        <form
          name="project-request"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          className="glass-card space-y-5 rounded-2xl p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="project-request" />

          <p className="hidden">
            <label>
              Don&apos;t fill this out:
              <input name="bot-field" />
            </label>
          </p>

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
              <label htmlFor="businessName" className={labelClass}>
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
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

          <div className="grid gap-5 sm:grid-cols-2">
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
              rows={5}
              required
              className={`${inputClass} resize-y`}
              placeholder="Tell us what you need built, fixed, automated, or launched."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:bg-brand-orange-light hover:shadow-brand-orange/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:w-auto"
          >
            Send Project Request
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Not sure what you need yet? Send the problem. We will help you figure
          out the build.
        </p>
      </div>
    </section>
  );
}
