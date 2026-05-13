"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CTA } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="container-base">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Wordmark */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex flex-col leading-none group"
          >
            <span className="font-display text-xl font-bold text-lake-blue-800 tracking-tight group-hover:text-lake-blue-700 transition-colors">
              Lake Life
            </span>
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-evergreen-700">
              Apparel
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-700 hover:text-lake-blue-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={CTA.primaryHref}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-lake-blue-800 text-white text-sm font-medium rounded hover:bg-lake-blue-700 transition-colors"
          >
            {CTA.primary}
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-charcoal-700 hover:text-lake-blue-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 shadow-md">
          <div className="container-base py-4 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3.5 text-base font-medium text-charcoal-700 hover:text-lake-blue-800 border-b border-stone-200 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA.primaryHref}
              onClick={() => setIsOpen(false)}
              className="mt-4 py-3 bg-lake-blue-800 text-white text-center font-medium rounded hover:bg-lake-blue-700 transition-colors"
            >
              {CTA.primary}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
