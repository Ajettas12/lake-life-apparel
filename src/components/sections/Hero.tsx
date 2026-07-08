import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">

      {/* Boundary Waters aerial photo */}
      <Image
        src="https://images.unsplash.com/photo-1753176392557-74d3a9da1b59?w=2000&q=85"
        alt="Aerial view of the Boundary Waters wilderness — lakes and forest from above"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — heavier left where text lives, lighter right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.70) 45%, rgba(10,22,40,0.35) 100%)",
        }}
      />

      {/* Hero content */}
      <div className="container-base relative z-10 py-24 md:py-32">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-evergreen-400" />
          <span className="text-xs font-medium text-white/85 tracking-wider uppercase">
            Twin Cities Made · Minnesota Proud
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.08] max-w-3xl mb-6 text-balance">
          Your Group.{" "}
          <br className="hidden sm:block" />
          Your Apparel.{" "}
          <span className="text-lake-blue-100">Done Right.</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-white/75 max-w-xl mb-10 leading-relaxed">
          Bulk custom apparel for schools, sports associations, camps, businesses, and community groups.
          Made locally in the Twin Cities. Pricing that gets better the more you order.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href={CTA.primaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-lake-blue-800 font-semibold rounded hover:bg-stone-100 transition-colors text-base"
          >
            {CTA.primary}
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-medium rounded hover:border-white/70 hover:bg-white/5 transition-all text-base backdrop-blur-sm"
          >
            See Our Work
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {[
            "Made locally in the Twin Cities",
            "Better pricing at 100, 250, and 500+ pieces",
            "Giving back to the Boundary Waters",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-evergreen-400 shrink-0" />
              <span className="text-sm text-white/70">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition out */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10">
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "54px" }}
        >
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#f5f2ed" />
        </svg>
      </div>
    </section>
  );
}
