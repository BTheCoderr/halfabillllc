"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { getBookingHref, navLinks } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const bookingHref = getBookingHref();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="#top"
          className="group flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
          onClick={closeMenu}
          aria-label="Half A Bil Agency — home"
        >
          <Logo
            variant="mark"
            size="sm"
            className="h-10 w-10 sm:hidden"
            decorative
          />
          <Logo
            variant="horizontal"
            size="sm"
            className="hidden sm:block"
            decorative
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={bookingHref}>Book a Free Call</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-black/95 px-5 py-6 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3.5 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button href={bookingHref} className="w-full" onClick={closeMenu}>
                Book a Free Call
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
