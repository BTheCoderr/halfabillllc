"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions You're Probably Asking"
          subtitle="Straight answers to the things most business owners want to know before they start a project."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeInSection key={faq.question} delay={index * 40}>
                <div
                  className={`gradient-border overflow-hidden rounded-2xl glass-card transition-colors ${
                    isOpen ? "ring-1 ring-brand-gold/25" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="shrink-0 rounded-full bg-brand-gold/10 p-1.5 text-brand-gold"
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed text-zinc-400 sm:px-7 sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
