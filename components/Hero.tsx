import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoShowcase } from "@/components/VideoShowcase";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-orange/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Half a bil agency — Build Partner
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Websites, apps, and automations built to help your business{" "}
            <span className="text-brand-orange">move faster.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Half a bil agency helps small businesses and growing brands launch
            better websites, build useful apps, and automate the busywork that
            slows everything down.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact">
              Book a Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Start a Project
            </Button>
          </div>

          <p className="mt-8 flex items-start gap-2 text-sm text-zinc-500">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
            Fast builds. Clear pricing. Practical systems your business can
            actually use.
          </p>
        </div>

        <VideoShowcase
          src="/videos/hero-showcase.mov"
          title="Half a bil agency build showcase"
          label="See the work in motion"
          className="lg:justify-self-end"
        />
      </div>
    </section>
  );
}
