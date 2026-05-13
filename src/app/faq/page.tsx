import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FAQS } from "@/data/faqs";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about ordering custom bulk apparel with Lake Life Apparel. Minimums, turnaround, pricing, design help, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before placing your first order with us."
      />

      {/* FAQ accordion */}
      <section className="bg-white section-padding">
        <div className="container-base max-w-3xl mx-auto">
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-stone-100 py-14">
        <div className="container-base max-w-xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
            Still Curious?
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-800 mb-4">
            We&apos;re Happy to Talk
          </h2>
          <p className="text-charcoal-500 leading-relaxed mb-7">
            If something wasn&apos;t answered above, reach out directly. We&apos;re a small team
            and we respond fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="px-7 py-3 bg-lake-blue-800 text-white font-medium rounded hover:bg-lake-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 border-2 border-lake-blue-800 text-lake-blue-800 font-medium rounded hover:bg-lake-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
