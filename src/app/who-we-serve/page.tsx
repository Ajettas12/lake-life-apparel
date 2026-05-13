import type { Metadata } from "next";
import { GraduationCap, Trophy, Heart, Briefcase, Tent, Users } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Lake Life Apparel specializes in custom bulk orders for schools, sports teams, churches, businesses, camps, and community groups in Minnesota.",
};

const audiences = [
  {
    icon: GraduationCap,
    title: "Schools",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    description:
      "From elementary school spirit days to high school class shirts, we make bulk ordering easy for teachers, administrators, PTOs, and student organizers.",
    details: [
      "We work with everyone from the principal's office to the booster club.",
      "Clear proofing process so nothing goes to print without approval.",
      "Flexible timeline to fit the school calendar.",
      "Competitive bulk pricing for budget-conscious programs.",
    ],
    examples: ["Spirit wear", "Staff polo shirts", "Class of [year] tees", "Graduation gear", "Pep rally shirts"],
  },
  {
    icon: Trophy,
    title: "Sports Teams",
    color: "bg-stone-50 border-stone-200",
    iconBg: "bg-evergreen-700",
    description:
      "We understand the pressure of game day deadlines and roster changes. Whether you need uniforms, warmups, or fan gear, we deliver what your program needs.",
    details: [
      "Experience with both small recreational leagues and competitive programs.",
      "Options for numbers, names, and custom layouts.",
      "Fan gear and spirit wear available alongside uniform orders.",
      "Rush timelines available when needed.",
    ],
    examples: ["Game uniforms", "Practice jerseys", "Warmup jackets", "Fan shirts", "Athletic polos"],
  },
  {
    icon: Heart,
    title: "Churches",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    description:
      "Mission trips, youth groups, volunteer programs, and congregational events. We help churches of all sizes outfit their people with gear that means something.",
    details: [
      "Comfortable working with faith-based organizations and their timelines.",
      "Design help for incorporating scripture, logos, or mission trip themes.",
      "Bulk pricing that works for nonprofit budgets.",
      "Experience with multi-trip reorder programs.",
    ],
    examples: ["Mission trip shirts", "Youth group hoodies", "Volunteer tees", "VBS gear", "Retreat apparel"],
  },
  {
    icon: Briefcase,
    title: "Businesses",
    color: "bg-stone-50 border-stone-200",
    iconBg: "bg-evergreen-700",
    description:
      "Staff uniforms, branded workwear, and promotional apparel that makes your team look like a team. We work with small businesses and mid-sized companies across Minnesota.",
    details: [
      "Consistent quality across reorders so your branding stays on-brand.",
      "Options for embroidery (polished) or screen print (casual/bold).",
      "Easy reorder process for growing teams.",
      "Branded gift bags and promotional items available alongside apparel.",
    ],
    examples: ["Staff uniforms", "Branded polos", "Company swag", "Trade show shirts", "New hire kits"],
  },
  {
    icon: Tent,
    title: "Camps",
    color: "bg-lake-blue-50 border-lake-blue-100",
    iconBg: "bg-lake-blue-800",
    description:
      "Summer camps, day camps, and retreat programs need gear that holds up and arrives on time. We know camp season is real, and we plan around it with you.",
    details: [
      "Seasonal ordering experience. We know camp timelines are not flexible.",
      "Staff shirt differentiation from camper gear.",
      "Youth sizing options alongside adult.",
      "Durable prints that survive a summer of activity.",
    ],
    examples: ["Staff shirts", "Camper tees", "Session-specific gear", "Alumni apparel", "Color war shirts"],
  },
  {
    icon: Users,
    title: "Community Groups",
    color: "bg-stone-50 border-stone-200",
    iconBg: "bg-evergreen-700",
    description:
      "Neighborhood associations, nonprofits, clubs, and community organizations. We make custom apparel accessible for groups of every size and budget.",
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
        subtitle="We specialize in bulk orders for organized groups of all kinds: schools, teams, businesses, and communities."
      />

      {/* Audience sections */}
      <section className="bg-white section-padding">
        <div className="container-base flex flex-col gap-10">
          {audiences.map(({ icon: Icon, title, color, iconBg, description, details, examples }) => (
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            Fill out a quick quote request and we&apos;ll get back to you with everything you need to know.
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
