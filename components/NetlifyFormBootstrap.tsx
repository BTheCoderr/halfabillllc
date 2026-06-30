import { budgetOptions, timelineOptions } from "@/lib/site-data";
import { serviceOptions } from "@/lib/brand";

/**
 * Hidden duplicate form for Netlify build-time detection in prerendered HTML.
 * Mirrors public/netlify-form.html and the visible contact form field names.
 * @see https://docs.netlify.com/forms/setup/
 */
export function NetlifyFormBootstrap() {
  return (
    <form
      name="project-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      hidden
    >
      <input type="hidden" name="form-name" value="project-request" />

      <p hidden>
        <label>
          Don&apos;t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="tel" name="phone" />
      <input type="text" name="businessName" />

      <select name="service" defaultValue="">
        <option value="">Select one</option>
        {serviceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select name="budget" defaultValue="">
        <option value="">Select one</option>
        {budgetOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select name="timeline" defaultValue="">
        <option value="">Select one</option>
        {timelineOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <textarea name="message" />
    </form>
  );
}
