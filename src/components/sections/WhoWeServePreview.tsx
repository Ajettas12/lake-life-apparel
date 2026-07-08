import Link from "next/link";
import { GraduationCap, Trophy, Tent, Briefcase, Anchor, Users } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Schools & Booster Clubs",
    desc: "Spirit wear, staff shirts, class tees, booster gear, and homecoming. One school can mean multiple orders every year.",
    href: "/who-we-serve/schools",
  },
  {
    icon: Trophy,
    title: "Youth Sports",
    desc: "Player packs, parent gear, tournament merch, and fan apparel for clubs and associations with hundreds of athletes.",
    href: "/who-we-serve/youth-sports",
  },
  {
    icon: Tent,
    title: "Camps & Churches",
    desc: "Staff shirts, camper tees, retreat gear, and mission trip apparel. We plan around your timeline because it is not flexible.",
    href: "/who-we-serve/camps-churches",
  },
  {
    icon: Briefcase,
    title: "Businesses",
    desc: "Staff uniforms, branded polos, workwear, and promotional gear that makes your team look consistent.",
    href: "/who-we-serve/businesses",
  },
  {
    icon: Anchor,
    title: "Lake & Marina",
    desc: "Resort merch, lake association shirts, staff apparel, and event gear with a Minnesota identity behind it.",
    href: "/who-we-serve/lake-resort-marina",
  },
  {
    icon: Users,
    title: "Community Groups",
    desc: "Nonprofits, clubs, fundraisers, and local organizations. Clear process, competitive bulk pricing, no pressure.",
    href: "/who-we-serve",
  },
];

export default function WhoWeServePreview() {
  return (
    <section className="bg-stone-100 section-padding">
      <div className="container-base">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
            Who We Serve
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
            Built for Groups Like Yours
          </h2>
          <p className="text-charcoal-500 max-w-xl mx-auto leading-relaxed">
            We specialize in organized bulk orders for groups that need apparel done right and delivered on time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="bg-white rounded p-6 border border-stone-200 hover:border-lake-blue-200 hover:shadow-md transition-all group block"
            >
              <div className="w-10 h-10 rounded-full bg-lake-blue-50 flex items-center justify-center mb-4 group-hover:bg-lake-blue-100 transition-colors">
                <Icon size={19} className="text-lake-blue-800" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal-800 mb-1">{title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-3">{desc}</p>
              <span className="text-lake-blue-800 text-xs font-medium group-hover:underline">
                See how we work with {title.split(" ")[0].toLowerCase()} →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/who-we-serve"
            className="text-lake-blue-800 font-medium text-sm hover:underline"
          >
            See all the groups we work with →
          </Link>
        </div>
      </div>
    </section>
  );
}
