import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoShowcase } from "@/components/VideoShowcase";

export function FounderSection() {
  return (
    <section id="about" className="border-y border-white/5 bg-brand-charcoal/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Built with purpose."
              align="left"
            />
            <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
              <p>
                Half a bil agency was created to help real people build real
                digital systems without getting lost in tech talk.
              </p>
              <p>
                The mission is simple: give businesses the tools they need to
                look professional, get organized, save time, and grow.
              </p>
              <p className="text-zinc-300">
                We are not here to sell you a dream deck. We are here to build
                what your business actually needs — websites that convert,
                systems that save hours, and tools your team can use from day
                one.
              </p>
            </div>
          </div>

          <VideoShowcase
            src="/videos/founder-story.mov"
            title="Half a bil agency founder story"
            label="Behind the build"
          />
        </div>
      </div>
    </section>
  );
}
