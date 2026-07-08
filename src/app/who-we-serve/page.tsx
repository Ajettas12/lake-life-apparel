import type { Metadata } from "next";
import { GraduationCap, Trophy, Heart, Briefcase, Tent, Users, Anchor } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Lake Life Apparel specializes in custom bulk orders for schools, youth sports associations, camps, churches, businesses, lake resorts, and community groups in Minnesota.",
};

const audiences = [
  {
    icon: GraduationCap,
    title: "Schools & Booster Clubs",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    href: "/who-we-serve/schools",
    description:
      "From spirit wear and staff polos to homecoming gear and booster club apparel, we work with the people who actually run school apparel programs.",
    details: [
      "We work with principals, activities directors, booster presidents, and PTO chairs.",
      "Clear proofing process so nothing goes to print without your approval.",
      "Flexible ordering built around the school calendar and your event dates.",
      "Pricing that rewards larger orders, with strong rates at 100, 250, and 500+ pieces.",
    ],
    examples: ["Spirit wear", "Staff polo shirts", "Class of [year] tees", "Homecoming gear", "Tournament shirts", "Fundraiser tees"],
  },
  {
    icon: Trophy,
    title: "Youth Sports",
    color: "bg-stone-50 border-stone-200",
    iconBg: "bg-evergreen-700",
    href: "/who-we-serve/youth-sports",
    description:
      "Player packs, parent gear, fan apparel, and tournament merch for clubs and associations that need organized bulk ordering across a full season.",
    details: [
      "Experience with multi-item orders covering players, parents, coaches, and fans.",
      "Seasonal ordering built around hockey, soccer, lacrosse, baseball, volleyball, and more.",
      "Options for names, numbers, and custom layouts.",
      "Strong pricing at 100, 250, and 500+ pieces for large associations.",
    ],
    examples: ["Player tees", "Parent hoodies", "Fan shirts", "Tournament shirts", "Warmup jackets", "Team hats"],
  },
  {
    icon: Heart,
    title: "Churches",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    href: "/who-we-serve/camps-churches",
    description:
      "Mission trips, youth groups, volunteer programs, and congregational events. We help churches outfit their people with gear that means something.",
    details: [
      "Comfortable working with faith-based organizations and their timelines.",
      "Design help for scripture, logos, and mission trip themes.",
      "Bulk pricing that works for nonprofit and church budgets.",
      "Experience with multi-trip reorder programs.",
    ],
    examples: ["Mission trip shirts", "Youth group hoodies", "Volunteer tees", "VBS gear", "Retreat apparel"],
  },
  {
    icon: Briefcase,
    title: "Businesses",
    color: "bg-stone-50 border-stone-200",
    iconBg: "bg-evergreen-700",
    href: "/who-we-serve/businesses",
    description:
      "Staff uniforms, branded workwear, and promotional apparel that makes your team look consistent. We work with small businesses and mid-sized companies across Minnesota.",
    details: [
      "Consistent quality across reorders so your branding stays on-brand.",
      "Embroidery for a polished, professional finish. Screen printing for bold casual gear.",
      "Easy reorder process so adding a new hire does not become a project.",
      "Works for businesses of any size, from a 5-person shop to a 200-person company.",
    ],
    examples: ["Staff uniforms", "Branded polos", "Company swag", "Trade show shirts", "New hire kits"],
  },
  {
    icon: Tent,
    title: "Camps",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    href: "/who-we-serve/camps-churches",
    description:
      "Summer camps, day camps, and retreat programs need gear that holds up and arrives on time. We know camp season is real, and we plan around it with you.",
    details: [
      "Annual ordering experience. We know camp timelines are not flexible.",
      "Staff shirt differentiation from camper gear so your team stands out.",
      "Youth sizing options alongside adult for full coverage.",
      "Durable prints that survive a full summer of activity.",
    ],
    examples: ["Staff shirts", "Camper tees", "Color war shirts", "Alumni apparel", "Session gear"],
  },
  {
    icon: Anchor,
    title: "Lake & Marina",
    color: "bg-stone-50 border-stone-200",
    iconBg: "bg-evergreen-700",
    href: "/who-we-serve/lake-resort-marina",
    description:
      "Gift shop gear, staff apparel, event shirts, and member merchandise with a Minnesota identity. Resorts, marinas, and lake associations are a natural fit for what we do.",
    details: [
      "Brand story alignment. Lake Life Apparel has the same lake-first, Minnesota-proud values.",
      "Experience with gift shop inventory and seasonal ordering timelines.",
      "Staff apparel that holds up through a full season of outdoor work.",
      "Lake association member apparel and event gear for cleanups and tournaments.",
    ],
    examples: ["Resort gift shop tees", "Marina staff polos", "Lake association shirts", "Event tees", "Tournament shirts"],
  },
  {
    icon: Users,
    title: "Community Groups",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    href: "/who-we-serve",
    description:
      "Neighborhood associations, nonprofits, clubs, and community organizations. Custom apparel at accessible pricing for groups of every size and budget.",
    details: [
      "Low-pressure process. We work at your pace.",
      "Design help for groups without a dedicated designer.",
      "Bulk pricing that makes sense for community budgets.",
      "Experience with awareness campaigns and fundraiser shirts.",
    ],
    examples: ["Fundraiser shirts", "Club polos", "Nonprofit gear", "Awareness tees", "Run/walk shirts"],
  },
];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        label="Who We Serve"
        title="Built for Groups Like Yours"
        subtitle="We specialize in bulk orders for organized groups that need apparel done right and delivered on time."
      />

      {/* Audience sections */}
      <section className="bg-white section-padding">
        <div className="container-base flex flex-col gap-10">
          {audiences.map(({ icon: Icon, title, color, iconBg, href, description, details, examples }) => (
            <div
              key={title}
              className={`rounded border ${color} p-6 md:p-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon size={26} className="text-white" />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display text-2xl font-bold text-charcoal-800 mb-2">{title}</h2>
                <p className="text-charcoal-500 leading-relaxed mb-5">{description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                  {/* Details */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
                      What We Bring
                    </p>
                    <ul className="flex flex-col gap-2">
                      {details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-charcoal-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-lake-blue-800 mt-1.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
                      Common Orders
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-xs px-2.5 py-1 rounded-full bg-white border border-stone-200 text-charcoal-600"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {href !== "/who-we-serve" && (
                  <Link
                    href={href}
                    className="text-lake-blue-800 text-sm font-medium hover:underline"
                  >
                    See our full guide for {title.toLowerCase()} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-stone-100 py-16">
        <div className="container-base text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-800 mb-3">
            Sound Like Your Group?
          </h2>
          <p className="text-charcoal-500 max-w-md mx-auto mb-7">
            Tell us what you need and we will send back a clear quote. Most requests get a response within one business day.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lake-blue-800 text-white font-semibold rounded hover:bg-lake-blue-700 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
