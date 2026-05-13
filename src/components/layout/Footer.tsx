import Link from "next/link";
import { MapPin, Mail, TreePine } from "lucide-react";
import { NAV_LINKS, SITE, CTA } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-base py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-display text-2xl font-bold text-white">Lake Life</p>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-evergreen-100">Apparel</p>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs">
              Custom bulk apparel made locally in the Twin Cities. Fair pricing, strong quality, and service that actually feels personal.
            </p>
            <div className="flex items-start gap-2 text-charcoal-400 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-lake-blue-100" />
              <span>Twin Cities, Minnesota</span>
            </div>
            <div className="flex items-start gap-2 text-charcoal-400 text-sm">
              <Mail size={14} className="mt-0.5 shrink-0 text-lake-blue-100" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-charcoal-400 mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={CTA.primaryHref}
                  className="text-lake-blue-100 hover:text-white text-sm font-medium transition-colors"
                >
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>

          {/* BWBC card */}
          <div className="bg-evergreen-800 rounded p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <TreePine size={16} className="text-evergreen-100" />
              <p className="text-[10px] font-semibold tracking-widest uppercase text-evergreen-100">Our Values</p>
            </div>
            <p className="text-white text-sm font-semibold leading-snug">
              Proud Members of the Boundary Waters Business Coalition
            </p>
            <p className="text-evergreen-100 text-xs leading-relaxed">
              A portion of every order we fulfill goes toward protecting the Boundary Waters Canoe Area. When you order with Lake Life, your gear gives back to Minnesota.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-700">
        <div className="container-base py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-charcoal-500 text-xs">
            © {new Date().getFullYear()} Lake Life Apparel. All rights reserved.
          </p>
          <p className="text-charcoal-500 text-xs">Made with care in the Twin Cities, MN</p>
        </div>
      </div>
    </footer>
  );
}
