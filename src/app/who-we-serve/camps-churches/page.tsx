import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Custom Apparel for Camps and Churches",
  description:
    "Staff shirts, camper tees, retreat gear, and mission trip apparel for summer camps, church groups, and youth programs across Minnesota.",
};

const details = [
  "Annual ordering experience. We plan around camp openings and retreat calendars.",
  "Staff shirt differentiation from camper gear so your team stands out.",
  "Youth sizing available alongside adult for full coverage.",
  "Design help for scripture, logos, mission trip themes, and camp artwork.",
  "Durable prints that hold up through a full summer of activity.",
];

const orders = [
  "Staff shirts",
  "Camper tees",
  "Color war shirts",
  "Mission trip shirts",
  "Retreat hoodies",
  "VBS gear",
  "Youth group shirts",
  "Volunteer apparel",
  "Alumni shirts",
  "Camp store merch",
];

export default function CampsChurchesPage() {
  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Custom Apparel for Camps and Churches"
        subtitle="Staff shirts, camper tees, retreat gear, and mission trip apparel. We build around your timeline because we know it is not flexible."
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
                Camp season does not wait. Neither do we.
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                Summer camps and church programs run on tight, predictable timelines. The shirts
                need to arrive before opening week, every time, without drama. We understand that
                your apparel deadline is not a preference, it is a hard date.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                We work with camp directors, program coordinators, youth pastors, and church
                administrators to make the ordering process as smooth as possible, whether it is
                100 camper tees or 400 pieces across staff, campers, and counselors.
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
                  When to Order
                </p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium text-charcoal-800">Summer camps</p>
                    <p className="text-xs text-charcoal-500">Lock in your order by May. Earlier gives you more design flexibility.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-800">Mission trips and retreats</p>
                    <p className="text-xs text-charcoal-500">Order 6 to 8 weeks before your departure or retreat date.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-800">Recurring programs</p>
                    <p className="text-xs text-charcoal-500">We keep your files on record to make reorders fast and consistent.</p>
                  </div>
                </div>
              </div>

              <div className="bg-lake-blue-800 rounded p-6 text-white">
                <p className="font-display font-bold text-lg mb-2">Straightforward pricing for faith-based budgets</p>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Bulk pricing that works for nonprofit and church budgets. The more pieces you
                  order, the better the per-piece rate.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lake-blue-800 font-semibold rounded text-sm hover:bg-stone-100 transition-colors"
                >
                  Get Camp or Church Pricing
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
