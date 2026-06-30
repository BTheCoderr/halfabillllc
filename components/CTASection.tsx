import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className="rounded-3xl border border-brand-orange/30 bg-gradient-to-br from-brand-charcoal to-black p-10 sm:p-14">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to fix the digital side of your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Tell us what you need built. We will help you figure out the
            fastest, cleanest path to launch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact">Book a Free Call</Button>
            <Button href="#contact" variant="secondary">
              Submit a Project Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
