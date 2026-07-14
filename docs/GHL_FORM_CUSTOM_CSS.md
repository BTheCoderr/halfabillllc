# Restyling the GoHighLevel "Website Project Request" Form

The project request form on the site (`components/ContactSection.tsx`) is a
GoHighLevel form embedded via `<iframe src="https://api.leadconnectorhq.com/widget/form/...">`.

## Why this can't be done from our codebase alone

The iframe points at `api.leadconnectorhq.com` — a different origin from our
site. Browsers block a parent page's CSS/JS from reaching into a
cross-origin iframe's document (Same-Origin Policy), so nothing in
`app/globals.css` or a `<style>` tag on our page can restyle the inputs,
labels, dropdowns, or submit button rendered *inside* that iframe.
GoHighLevel's own docs confirm this: "You cannot style fields or buttons
[from the parent page] because the form is loaded inside an iframe."

The fix has to be applied inside GoHighLevel's **Custom CSS** field on the
form itself — GHL injects it directly into the form's own document, so it
runs in the same context as the fields and can override them.

**This CSS block below was written and pixel-verified against the live
form** (loaded directly, outside the iframe, with the CSS injected and
screenshotted) — it's confirmed working, not just theoretical.

## Where to paste it

1. In your GoHighLevel account, go to **Sites → Forms**.
2. Open the **Website Project Request** form (ID `uGyIDWHvy0skHNNheTW8`) in the builder.
3. In the right sidebar, click the **Styles** tab.
4. Open the **Advanced** section → **Custom CSS** box.
5. Paste the CSS block below.
6. Click **Save**, then **Publish**.
7. Hard-refresh the live site (or open an incognito window) — GHL/browsers cache the previous styles for a bit.

## Custom CSS (paste as-is)

```css
/* === Half A Bil Agency brand theme for the embedded form === */

html, body { background: #050505 !important; }

/* Outer form canvas — transparent so it blends into the site's glass card */
#_builder-form, .form-builder--wrap, .ghl-form-wrap {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 16px !important;
  padding: 4px !important;
}

#_builder-form * {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

.form-field-wrapper { margin-bottom: 20px !important; }

/* Labels */
.form-builder--wrap label,
.left-label-alignment,
.field-label {
  color: #ffffff !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  margin-bottom: 6px !important;
}

.field-label span, label span { color: #d4af37 !important; }

/* Text / tel / email / number / textarea / dropdown box —
   selectors mirror GHL's own generated theme rules so this wins on
   specificity + source order */
#_builder-form .form-builder--item input[type="text"][class="form-control"],
#_builder-form .form-builder--item .date-picker-custom-style,
#_builder-form .form-builder--item input[type="number"],
#_builder-form textarea,
#_builder-form input[type="tel"],
#_builder-form input[type="email"],
#_builder-form .multiselect .multiselect__tags,
#_builder-form .form-builder--item .multiselect {
  background-color: rgba(255, 255, 255, 0.04) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.14) !important;
  border-radius: 10px !important;
  box-shadow: none !important;
  padding: 12px 14px !important;
}

/* The tiny inner search input + selected-value text inside the dropdown box
   must stay transparent/borderless, otherwise it renders as a nested pill */
#_builder-form .form-builder--item .multiselect .multiselect__input,
.multiselect__input,
.multiselect__single {
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  color: #ffffff !important;
  box-shadow: none !important;
}

.text-area-element { min-height: 120px !important; resize: vertical !important; }

/* Hover */
#_builder-form .form-builder--item input[type="text"][class="form-control"]:hover,
#_builder-form .form-builder--item .date-picker-custom-style:hover,
#_builder-form .form-builder--item input[type="number"]:hover,
#_builder-form textarea:hover,
#_builder-form input[type="tel"]:hover,
#_builder-form input[type="email"]:hover,
#_builder-form .multiselect .multiselect__tags:hover {
  border: 1px solid rgba(212, 175, 55, 0.4) !important;
}

/* Focus — gold ring, matches the site's buttons/cards */
#_builder-form .form-builder--item input[type="text"][class="form-control"]:focus,
#_builder-form .form-builder--item .date-picker-custom-style:focus,
#_builder-form .form-builder--item input[type="number"]:focus,
#_builder-form textarea:focus,
#_builder-form input[type="tel"]:focus,
#_builder-form input[type="email"]:focus,
#_builder-form .multiselect .multiselect__tags:focus,
#_builder-form .multiselect--active .multiselect__tags {
  border: 1px solid #d4af37 !important;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18) !important;
  outline: none !important;
}

/* Placeholders — muted gray */
.form-control::placeholder,
.multiselect__input::placeholder,
.multiselect__placeholder,
#_builder-form .form-builder--item .multiselect__placeholder {
  color: #71717a !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  opacity: 1 !important;
}

.input-icon { color: #71717a !important; }

/* Dropdown caret + open options panel */
.multiselect__select::before { border-color: #a1a1aa transparent transparent !important; }

.multiselect__content-wrapper {
  background: #111111 !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 10px !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45) !important;
}

.multiselect__option { color: #ffffff !important; background: transparent !important; }
.multiselect__option--highlight { background: rgba(212, 175, 55, 0.15) !important; color: #ffffff !important; }
.multiselect__option--selected,
.multiselect__option--selected.multiselect__option--highlight {
  background: rgba(212, 175, 55, 0.25) !important;
  color: #f2d675 !important;
}

/* Checkboxes — gold accent (GHL hand-draws these with appearance:none,
   so accent-color has no effect; background + border must be overridden) */
#_builder-form input[type="checkbox"] {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
}

#_builder-form input[type="checkbox"]:checked {
  background: #d4af37 !important;
  border-color: #d4af37 !important;
}

.checkbox-container label,
.checkbox-container p,
.terms-text-container p {
  color: rgba(255, 255, 255, 0.65) !important;
  font-size: 13px !important;
  line-height: 1.5 !important;
}

/* Footer links (Privacy Policy / Terms of Service) */
.text-element a { color: #d4af37 !important; text-decoration: none !important; }
.text-element a:hover { color: #f2d675 !important; text-decoration: underline !important; }
.text-element, .text-element p { color: rgba(255, 255, 255, 0.5) !important; }

/* Submit button — matches the site's gold CTA buttons */
button.button-element {
  background: #d4af37 !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 14px 28px !important;
  box-shadow: 0 10px 30px -8px rgba(212, 175, 55, 0.35) !important;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease !important;
}

button.button-element:hover {
  background: #f2d675 !important;
  box-shadow: 0 14px 36px -6px rgba(212, 175, 55, 0.5) !important;
  transform: translateY(-1px) !important;
}

button.button-element:active { transform: translateY(0) scale(0.98) !important; }

button.button-element .button-text--full div {
  color: #050505 !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  letter-spacing: 0.02em !important;
}
```

## Why the selectors look so specific

GHL generates its own theme stylesheet per form (based on your account's
accent color, currently blue `#155EEF`) using rules like:

```css
#_builder-form .form-builder--item input[type="text"][class="form-control"] {
  background-color: rgb(255, 255, 255) !important;
  ...
}
```

That selector's specificity (an ID + two attribute/class matches) beats a
plain `.form-control { ... !important }` override, even though both use
`!important` — CSS resolves ties between two `!important` rules by
specificity, then by source order. Rather than fight that, the CSS above
**mirrors GHL's exact selector chains**, so it's guaranteed to at least tie
on specificity — and since the Custom CSS box is injected after GHL's
generated theme, it wins the tie and takes effect.

## What this does

- **Container** — transparent background, no shadow/border of its own, so
  it merges with the dark `glass-card` frame already wrapping the iframe
  on the site (see `ContactSection.tsx`).
- **Inputs, textarea, dropdown box** — dark translucent fill
  (`rgba(255,255,255,0.04)`) with a soft white border, 10px radius, gold
  border on hover, and a gold focus ring + border (matches
  `--brand-gold` / `--brand-gold-light`).
- **Labels** — solid white, 500 weight; the `*` required-asterisk turns gold.
- **Placeholders** — muted gray (`#71717a`, the site's `--brand-muted` token).
- **Dropdowns** — the vue-multiselect box matches the other fields; the open
  options panel gets a dark card background with a gold highlight/selected
  state; the inner search input and selected-value text stay transparent so
  they don't render as a visible nested box.
- **Checkboxes** — recolored to gold when checked (their unchecked state is
  a soft translucent outline), and their legal fine print becomes soft
  white instead of GHL's default dark gray (unreadable on a dark background).
- **Submit button** — solid gold, dark near-black text, 12px radius, gold
  glow shadow, and a subtle lift-on-hover — the same treatment as
  `components/ui/Button.tsx`'s primary variant.

## Verification

This exact CSS was injected into the live, standalone form page
(`https://api.leadconnectorhq.com/widget/form/uGyIDWHvy0skHNNheTW8`) via
DevTools and screenshotted to confirm every rule actually applies (not just
written blind) — inputs, dropdowns, checkboxes, and the submit button all
rendered correctly in the black/gold theme with no leftover white boxes.

## The booking calendar widget

`components/BookingSection.tsx` embeds a separate GoHighLevel surface (the
booking **Calendar** widget, not a Form), which has its own Custom CSS
setting under the calendar's own **Style** settings in GHL — the same
cross-origin constraint applies there. Let us know if you'd like a matching
CSS block for that widget too.
