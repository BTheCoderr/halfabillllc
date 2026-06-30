import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroDashboard } from "@/components/HeroDashboard";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-brand-orange/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-orange/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="mb-6 hidden lg:block">
            <Logo variant="stacked" size="lg" className="opacity-95" />
          </div>

          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-xs font-semibold tracking-wide text-brand-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse-glow" />
            {siteConfig.brandLine}
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Websites, Apps, and Automations Built for Businesses That Need to{" "}
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">
              Move Faster
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {siteConfig.name} helps businesses launch better websites, build
            useful apps, and automate the busywork that slows growth.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact">
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Start a Project
            </Button>
          </div>

          <p className="mt-8 flex items-start gap-2.5 text-sm text-zinc-500">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
              aria-hidden="true"
            />
            Fast builds. Clear pricing. Practical systems your business can
            actually use.
          </p>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
