"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "@/components/HeroDashboard";
import { HeroBrandLockup } from "@/components/HeroBrandLockup";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-gold/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-gold/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item}>
            <HeroBrandLockup />
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Stop Losing Customers Because Your{" "}
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
              Business Runs on Outdated Systems
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Half A Bil Agency builds websites, CRM systems, and automations
            that help local businesses generate more leads and save time.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#booking">
              Book Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Start Your Project
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 flex items-start gap-2.5 text-sm text-zinc-500"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
              aria-hidden="true"
            />
            Fast builds. Clear pricing. Practical systems your business can
            actually use.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}
