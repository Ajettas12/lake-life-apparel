import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Custom Apparel for Schools & Booster Clubs",
  description:
    "Spirit wear, staff shirts, class tees, and event gear for schools, booster clubs, PTOs, and activities departments in the Twin Cities and Minnesota.",
};

const details = [
  "We work with principals, activities directors, booster presidents, and PTO chairs.",
  "Clear proofing process so nothing goes to print without your approval.",
  "Flexible ordering built around the school calendar and your event dates.",
  "Pricing that rewards larger orders, with strong rates at 100, 250, and 500+ pieces.",
  "Reorder support for programs that need the same gear every season.",
];

const orders = [
  "Spirit wear",
  "Staff polo shirts",
  "Class of [year] tees",
  "Homecoming gear",
  "Pep rally shirts",
  "Tournament shirts",
  "Fundraiser tees",
  "Graduation gear",
  "Field day shirts",
  "Club apparel",
];

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Custom Apparel for Schools and Booster Clubs"
        subtitle="Spirit wear, staff shirts, class tees, and event gear. We work with the people who actually run school apparel programs."
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
                One school can mean multiple orders every year.
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                School apparel programs have a lot of moving parts. You are coordinating with staff,
                managing a booster budget, hitting a homecoming deadline, and trying to make the
                shirts look good for a crowd that will be critical. We handle the apparel side so
                you can focus on the rest.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                Whether it is a 50-piece staff order or 500 pieces of spirit wear for a tournament,
                we quote fast, proof carefully, and deliver on time.
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
            <div>
              <div className="bg-stone-50 border border-stone-200 rounded p-6 mb-6">
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

              <div className="bg-lake-blue-800 rounded p-6 text-white">
                <p className="font-display font-bold text-lg mb-2">Pricing that scales with your order</p>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Our per-piece pricing gets better at 100, 250, and 500+ pieces. Spirit wear
                  and booster orders are exactly what we built this business around.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lake-blue-800 font-semibold rounded text-sm hover:bg-stone-100 transition-colors"
                >
                  Get a School Quote
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-5 p-4 border border-stone-200 rounded bg-stone-50">
                <p className="text-xs font-semibold text-charcoal-700 mb-1">Timing tip</p>
                <p className="text-xs text-charcoal-500 leading-relaxed">
                  Plan 3 to 4 weeks out from your event or season start. Rush timelines are available,
                  but earlier is always easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
