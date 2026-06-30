import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site-data";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-md text-center">
        <Logo variant="stacked" size="md" className="mx-auto mb-8" />
        <h1 className="text-3xl font-bold text-white">Request received</h1>
        <p className="mt-4 text-lg text-zinc-400">
          Thanks for reaching out to {siteConfig.name}. We will review your
          project details and get back to you shortly.
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-orange">
          {siteConfig.brandLine}
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
        <p className="mt-6 text-sm text-zinc-500">
          Need to add more detail?{" "}
          <Link href="/#contact" className="text-brand-orange hover:underline">
            Send another message
          </Link>
        </p>
      </div>
    </main>
  );
}
