import Link from "next/link";
import { FileText, Palette, Package } from "lucide-react";
import { CTA } from "@/lib/constants";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Request a Quote",
    desc: "Fill out a short form with your group size, what you are thinking, and when you need it. We get back to you quickly with a clear, no-commitment quote.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Approve Your Design",
    desc: "We handle the artwork and send proofs for your review. Nothing goes to print until you sign off on exactly how it looks.",
  },
  {
    number: "03",
    icon: Package,
    title: "Pick Up or Ship",
    desc: "Pick up locally in the Twin Cities or have it shipped to you. On time, outfitted right, no surprises.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-stone-100 section-padding">
      <div className="container-base">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
            Ordering Is Simple
          </h2>
          <p className="text-charcoal-500 max-w-xl mx-auto leading-relaxed">
            Three steps. One point of contact. You should not need to be an apparel expert to get your group outfitted right.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
          {/* Connector line visible on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-px bg-lake-blue-100" />

          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="flex flex-col items-center text-center">
              {/* Step circle */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-lake-blue-100 flex items-center justify-center mb-5 shadow-sm relative z-10">
                <Icon size={26} className="text-lake-blue-800" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-lake-blue-600 mb-2">{number}</span>
              <h3 className="font-display text-xl font-bold text-charcoal-800 mb-2">{title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href={CTA.primaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-lake-blue-800 text-white font-semibold rounded hover:bg-lake-blue-700 transition-colors"
          >
            {CTA.primary}
          </Link>
        </div>
      </div>
    </section>
  );
}
