import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="#top" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Half a bil logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-bold text-white">{siteConfig.name}</p>
                <p className="text-sm text-zinc-500">{siteConfig.tagline}</p>
              </div>
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-brand-orange"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-brand-orange"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>

          <div className="flex gap-4">
            {/* TODO: Replace placeholder social links with real URLs */}
            <Link
              href={siteConfig.social.instagram}
              className="text-sm text-zinc-500 transition-colors hover:text-brand-orange"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href={siteConfig.social.linkedin}
              className="text-sm text-zinc-500 transition-colors hover:text-brand-orange"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.social.twitter}
              className="text-sm text-zinc-500 transition-colors hover:text-brand-orange"
              aria-label="X (Twitter)"
            >
              X
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
