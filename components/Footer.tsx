import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { footerLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="#top"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
              aria-label="Half A Bil Agency — home"
            >
              <Logo variant="stacked" size="md" decorative />
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Quick Links
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-brand-orange"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2 text-zinc-500">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-zinc-600">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
