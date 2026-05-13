import type { Metadata } from "next";
import { Printer, Scissors, Palette, Trophy, Briefcase, Calendar } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Screen printing, embroidery, team apparel, business branded gear, event shirts, and design help. All made locally in the Twin Cities.",
};

const services = [
  {
    icon: Printer,
    title: "Screen Printing",
    description:
      "Bold, durable prints built for large orders. Screen printing is the go-to for t-shirts, hoodies, and any order where you need a sharp look at a great per-piece price.",
    bestFor: ["Team shirts", "Event tees", "School spirit wear", "Fundraiser apparel"],
  },
  {
    icon: Scissors,
    title: "Embroidery",
    description:
      "Professional embroidery for polos, hats, jackets, and outerwear. Embroidery adds a level of polish that makes your group look put-together and serious.",
    bestFor: ["Staff polos", "Baseball caps", "Zip-up fleeces", "Branded outerwear"],
  },
  {
    icon: Trophy,
    title: "Team Apparel",
    description:
      "Uniforms, warmups, fan gear, and practice apparel built for sports programs of all sizes. We understand deadlines, roster changes, and the pressures of game day.",
    bestFor: ["Game uniforms", "Warmup jackets", "Fan shirts", "Practice gear"],
  },
  {
    icon: Briefcase,
    title: "Business Branded Apparel",
    description:
      "Staff uniforms, branded polos, and workwear that makes your team look consistent and professional. Great for businesses of any size, from a 5-person shop to a 200-person company.",
    bestFor: ["Staff uniforms", "Company polos", "Branded swag", "Promotional gear"],
  },
  {
    icon: Calendar,
    title: "Event Apparel",
    description:
      "Custom shirts and gear for fundraisers, retreats, camps, and community events. We know event timelines are tight, and we make sure your gear arrives when you need it.",
    bestFor: ["Fundraiser shirts", "Retreat gear", "Camp tees", "Awareness apparel"],
  },
  {
    icon: Palette,
    title: "Design Help & Ordering Guidance",
    description:
      "Not sure where to start? We help you build a design from scratch, clean up an existing logo, or turn a rough idea into a finished print-ready file. Then we walk you through every step.",
    bestFor: ["First-time orders", "Logo cleanup", "New design concepts", "File prep"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        subtitle="Screen printing, embroidery, and everything your group needs to look great."
      />

      {/* Services grid */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, bestFor }) => (
              <div
                key={title}
                className="border border-stone-200 rounded p-7 hover:border-lake-blue-200 hover:shadow-md transition-all group flex flex-col gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-lake-blue-800 flex items-center justify-center shrink-0 group-hover:bg-lake-blue-700 transition-colors">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-charcoal-800 mb-2">
                      {title}
                    </h2>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-2">
                    Best For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bestFor.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-charcoal-600 border border-stone-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-stone-100 section-padding">
        <div className="container-base max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
            Pricing
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-800 mb-4">
            Transparent Quotes, No Hidden Fees
          </h2>
          <p className="text-charcoal-500 leading-relaxed mb-8">
            Pricing depends on the garment, decoration method, number of colors, and quantity.
            The more you order, the better the per-piece price. Fill out a quick quote request
            and we&apos;ll send you a clear, itemized breakdown with no pressure and no commitment required.
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lake-blue-800 text-white font-semibold rounded hover:bg-lake-blue-700 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
