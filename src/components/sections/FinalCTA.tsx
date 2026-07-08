import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ background: "#0f2238" }}>
      <div className="container-base text-center">

        <p className="text-xs font-semibold tracking-widest uppercase text-lake-blue-100 mb-4 opacity-50">
          Ready to Start?
        </p>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
          Let&apos;s Get Your Group Outfitted
        </h2>

        <p className="text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what you need and we&apos;ll send back a clear, no-commitment quote. Most requests get a response within one business day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={CTA.primaryHref}
            className="inline-flex items-center gap-2 px-9 py-4 bg-white text-lake-blue-800 font-semibold rounded hover:bg-stone-100 transition-colors text-base"
          >
            {CTA.primary}
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 border-2 border-white/30 text-white font-medium rounded hover:border-white/60 hover:bg-white/5 transition-all text-base"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
