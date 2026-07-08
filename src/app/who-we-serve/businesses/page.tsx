import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Branded Apparel for Businesses",
  description:
    "Staff uniforms, branded polos, workwear, and company gear made locally in the Twin Cities. Consistent quality with an easy reorder process.",
};

const details = [
  "Consistent quality across reorders so your branding stays on-brand as your team grows.",
  "Embroidery for a polished, professional finish on polos, hats, and outerwear.",
  "Screen printing for casual branded tees, promotional gear, and large staff orders.",
  "Easy reorder process so adding a new hire does not become a project.",
  "Works for businesses of any size, from a 5-person shop to a 200-person company.",
];

const orders = [
  "Staff uniforms",
  "Branded polos",
  "Workwear",
  "Company hats",
  "Promotional tees",
  "New hire kits",
  "Trade show shirts",
  "Crew jackets",
  "Customer-facing apparel",
  "Company swag",
];

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Branded Apparel for Businesses"
        subtitle="Staff uniforms, workwear, branded polos, and company gear. Made locally in the Twin Cities with consistent quality and an easy reorder process."
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
                Your team should look like a team.
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                Branded workwear and staff apparel are one of the simplest ways to make a business
                look professional and put-together. The problem is that getting it done right takes
                more effort than it should, especially when you are trying to match a previous
                order or add to a growing team.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                We keep things simple. You get a real quote, a proof you can approve, and a
                consistent product that you can reorder without starting over every time.
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
                  Screen Print vs. Embroidery
                </p>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium text-charcoal-800">Screen printing</p>
                    <p className="text-xs text-charcoal-500">Bold, casual, and cost-effective for large quantities. Great for t-shirts, event shirts, and promotional gear.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-800">Embroidery</p>
                    <p className="text-xs text-charcoal-500">Polished and professional. The right choice for staff polos, hats, and outerwear where the finish matters.</p>
                  </div>
                </div>
              </div>

              <div className="bg-lake-blue-800 rounded p-6 text-white">
                <p className="font-display font-bold text-lg mb-2">Local means easier to work with</p>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Twin Cities businesses can pick up locally, check quality in person, and reach
                  a real person when something needs to be sorted out.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lake-blue-800 font-semibold rounded text-sm hover:bg-stone-100 transition-colors"
                >
                  Outfit Your Team
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
