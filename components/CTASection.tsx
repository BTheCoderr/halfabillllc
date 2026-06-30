import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="gradient-border relative overflow-hidden rounded-3xl glass-card p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand-orange">
              {siteConfig.brandLine}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build the System Your Business Actually Needs?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
              Tell us what you need built, fixed, automated, or launched. We
              will help you figure out the cleanest path forward.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#contact">Book a Free Call</Button>
              <Button href="#contact" variant="secondary">
                Submit a Project Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
