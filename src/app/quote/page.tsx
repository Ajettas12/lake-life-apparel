import type { Metadata } from "next";
import { FileText, Palette, Package } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Start your bulk apparel order with Lake Life Apparel. Fill out a quick quote request and we'll get back to you within 1 business day.",
};

const steps = [
  { icon: FileText, label: "Fill out the form below" },
  { icon: Palette, label: "We send a proof for approval" },
  { icon: Package, label: "Your order ships or is ready for pickup" },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        label="Let's Get Started"
        title="Request a Quote"
        subtitle="Tell us about your order and we'll respond with a clear, no-pressure quote within 1 business day."
      />

      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 max-w-5xl mx-auto">

            {/* Sidebar */}
            <div className="flex flex-col gap-8">

              {/* How it works */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-5">
                  What Happens Next
                </p>
                <div className="flex flex-col gap-5">
                  {steps.map(({ icon: Icon, label }, i) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-lake-blue-50 border border-lake-blue-100 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-lake-blue-800" />
                      </div>
                      <div className="flex flex-col gap-0.5 pt-1.5">
                        <span className="text-xs text-charcoal-400 font-medium">Step {i + 1}</span>
                        <span className="text-sm font-medium text-charcoal-700">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reassurance */}
              <div className="bg-stone-100 border border-stone-200 rounded p-5 flex flex-col gap-3">
                <p className="font-medium text-charcoal-800 text-sm">No commitment required</p>
                <p className="text-xs text-charcoal-500 leading-relaxed">
                  Submitting a quote request doesn&apos;t lock you into anything. It&apos;s just
                  the first step in a conversation. We&apos;ll reach out, answer questions, and
                  figure out if we&apos;re the right fit for your order.
                </p>
              </div>

              {/* Minimum note */}
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-400">
                  Minimums
                </p>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  We generally work best with orders of 24+ pieces. Not sure if your quantity
                  qualifies? Reach out anyway. We&apos;re happy to talk it through.
                </p>
              </div>
            </div>

            {/* Form */}
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
