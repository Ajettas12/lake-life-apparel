import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Custom Merch for Resorts, Marinas, and Lake Associations",
  description:
    "Gift shop gear, staff apparel, event shirts, and member merchandise with a Minnesota identity. Made locally in the Twin Cities.",
};

const details = [
  "Brand story alignment. Lake Life Apparel has the same lake-first, Minnesota-proud values.",
  "Experience with gift shop inventory and seasonal ordering timelines.",
  "Staff apparel that looks sharp and holds up through a full season of outdoor work.",
  "Lake association member apparel and event gear for cleanups, tournaments, and fundraisers.",
  "Options for embroidery on staff outerwear and screen printing on retail tees.",
];

const orders = [
  "Resort gift shop tees",
  "Marina staff polos",
  "Lake association shirts",
  "Event tees",
  "Tournament shirts",
  "Seasonal hoodies",
  "Lake cleanup shirts",
  "Member apparel",
  "Staff outerwear",
  "Cabin group shirts",
];

export default function LakeResortMarinaPage() {
  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Custom Merch for Resorts, Marinas, and Lake Associations"
        subtitle="Gift shop gear, staff apparel, event shirts, and member merchandise with a Minnesota identity behind every piece."
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
                If you are on the water, we are a natural fit.
              </h2>
              <p className="text-charcoal-500 leading-relaxed mb-6">
                Resorts, marinas, lake associations, and outfitters need apparel that matches the
                environment: durable, well-designed, and tied to a Minnesota outdoors identity.
                That is exactly what Lake Life Apparel is built around.
              </p>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                Whether you need staff polos for a marina crew, gift shop tees for summer guests,
                or event shirts for a lake cleanup and tournament weekend, we make the process
                simple and the product something people actually want to wear.
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
                  Giving Back to the Waters
                </p>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  We are proud members of the Boundary Waters Business Coalition. A portion of
                  every order goes toward protecting the BWCA. When your guests wear gear from
                  Lake Life Apparel, it connects them to that story too.
                </p>
              </div>

              <div className="bg-lake-blue-800 rounded p-6 text-white">
                <p className="font-display font-bold text-lg mb-2">Made for Minnesota. Made locally.</p>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  Gift shop inventory, staff apparel, and event gear with a brand that fits the
                  lifestyle your guests already love.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lake-blue-800 font-semibold rounded text-sm hover:bg-stone-100 transition-colors"
                >
                  Create Lake Merch
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
