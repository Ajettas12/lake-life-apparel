import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Custom Apparel for Youth Sports Associations",
  description:
    "Player packs, parent gear, fan apparel, and tournament merch for youth sports clubs and associations across Minnesota.",
};

const details = [
  "Experience with multi-item orders covering players, parents, coaches, and fans.",
  "Seasonal ordering built around hockey, soccer, lacrosse, baseball, volleyball, and more.",
  "Options for names, numbers, and custom layouts.",
  "Strong pricing at 100, 250, and 500+ pieces for large associations.",
  "Reorder support for programs that run the same gear season over season.",
];

const orders = [
  "Player tees",
  "Parent hoodies",
  "Fan shirts",
  "Tournament shirts",
  "Warmup jackets",
  "Team hats",
  "Coach polos",
  "Spirit packs",
  "Practice gear",
  "Volunteer shirts",
];

const seasons = [
  { sport: "Hockey / Football / Volleyball", timing: "Order by mid-August" },
  { sport: "Soccer / Baseball / Softball / Lacrosse", timing: "Order by mid-January" },
  { sport: "Basketball / Dance / Cheer", timing: "Order by mid-September" },
];

export default function YouthSportsPage() {
  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Custom Apparel for Youth Sports Associations"
        subtitle="Player packs, parent gear, fan apparel, and tournament merch. Built for clubs and associations that need organized bulk ordering across a full season."
      />

      {/* Main content */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">

            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
                Who This Is For
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-800 mb-4">
                Hundreds of players, parents, and fans to outfit every season.
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                Youth sports associations are one of the best fits for bulk ordering. A single club
                can have hundreds of players plus families and coaching staff. Add tournament gear,
                fan apparel, and volunteer shirts and you are looking at a serious piece of
                inventory to coordinate every season.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                We make the ordering process as organized as your program. One contact, one quote,
                one clear timeline from proof to delivery.
              </p>
              <ul className="flex flex-col gap-3">
                {details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-charcoal-600">
                    <CheckCircle size={16} className="text-evergreen-700 mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <div className="bg-stone-50 border border-stone-200 rounded p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
                  Common Orders
                </p>
                <div className="flex flex-wrap gap-2">
                  {orders.map((o) => (
                    <span
                      key={o}
                      className="text-xs px-3 py-1.5 rounded-full bg-white border border-stone-200 text-charcoal-600"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
                  Season Timing Guide
                </p>
                <div className="flex flex-col gap-3">
                  {seasons.map(({ sport, timing }) => (
                    <div key={sport} className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-charcoal-800">{sport}</p>
                      <p className="text-xs text-charcoal-500">{timing}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lake-blue-800 rounded p-6 text-white">
                <p className="font-display font-bold text-lg mb-2">Better pricing for bigger clubs</p>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  The more pieces you order, the better your per-piece rate. Large associations
                  ordering 250+ pieces get our strongest pricing.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lake-blue-800 font-semibold rounded text-sm hover:bg-stone-100 transition-colors"
                >
                  Plan Your Season Apparel
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
