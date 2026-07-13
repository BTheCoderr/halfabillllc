"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BUDGET_PREFILL_KEY,
  MESSAGE_PREFILL_KEY,
  SERVICE_PREFILL_KEY,
  configuratorOptions,
} from "@/lib/intake";

export function ServicesConfigurator() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleSelect(id: string) {
    const option = configuratorOptions.find((item) => item.id === id);
    if (!option) return;

    setSelectedId(id);
    sessionStorage.setItem(SERVICE_PREFILL_KEY, option.service);
    if (option.budget) {
      sessionStorage.setItem(BUDGET_PREFILL_KEY, option.budget);
    } else {
      sessionStorage.removeItem(BUDGET_PREFILL_KEY);
    }
    sessionStorage.setItem(MESSAGE_PREFILL_KEY, option.message);

    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
      window.dispatchEvent(new CustomEvent("hab-intake-prefill"));
    }
  }

  return (
    <section id="configurator" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Quick Start"
          title="Pick what you need built"
          subtitle="Tap a chip — we scroll to the form and pre-fill your service, budget, and message."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {configuratorOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedId === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={`group inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                  isSelected
                    ? "border-brand-gold bg-brand-gold/15 text-white shadow-lg shadow-brand-gold/15"
                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-brand-gold/40 hover:bg-brand-gold/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${
                    isSelected ? "text-brand-gold" : "text-zinc-500 group-hover:text-brand-gold"
                  }`}
                  aria-hidden="true"
                />
                <span>{option.label}</span>
                <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                  {option.hint}
                </span>
                {isSelected && (
                  <Check className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-zinc-500">
          <ArrowRight className="h-4 w-4 text-brand-gold" aria-hidden="true" />
          Selecting a chip scrolls to the form with service, budget, and message pre-filled.
        </p>
      </div>
    </section>
  );
}
