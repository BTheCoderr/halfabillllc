import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FooterBrand } from "@/components/FooterBrand";
import { footerLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          <FooterBrand />

          <nav aria-label="Footer navigation" className="md:pt-2">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Quick Links
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:pt-2">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Get Started
            </p>
            <p className="text-lg font-semibold text-white">Ready to build?</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Submit a project request and tell us what you need built, fixed,
              or automated.
            </p>
            <div className="mt-6">
              <Button href="#contact" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
