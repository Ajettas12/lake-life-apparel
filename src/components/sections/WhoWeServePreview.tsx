import Link from "next/link";
import { GraduationCap, Trophy, Heart, Briefcase, Tent, Users } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Schools",
    desc: "Spirit wear, staff uniforms, class shirts, and event gear. Organized and easy.",
  },
  {
    icon: Trophy,
    title: "Sports Teams",
    desc: "Uniforms, warmups, fan apparel, and practice gear built for competitive programs.",
  },
  {
    icon: Heart,
    title: "Churches",
    desc: "Mission trips, youth groups, volunteer tees, and congregational events.",
  },
  {
    icon: Briefcase,
    title: "Businesses",
    desc: "Branded workwear, staff polos, and company swag that makes teams look sharp.",
  },
  {
    icon: Tent,
    title: "Camps",
    desc: "Staff shirts, camper tees, and seasonal program gear. We know camp timelines.",
  },
  {
    icon: Users,
    title: "Community Groups",
    desc: "Clubs, nonprofits, fundraisers, and local organizations of any size.",
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
            Whether you're organizing a team, planning a retreat, or outfitting a whole school, we make bulk ordering feel easy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded p-6 border border-stone-200 hover:border-lake-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-lake-blue-50 flex items-center justify-center mb-4 group-hover:bg-lake-blue-100 transition-colors">
                <Icon size={19} className="text-lake-blue-800" />
              </div>
              <h3 className="font-display text-lg font-bold text-charcoal-800 mb-1">{title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/who-we-serve"
            className="text-lake-blue-800 font-medium text-sm hover:underline"
          >
            Learn more about who we work with →
          </Link>
        </div>
      </div>
    </section>
  );
}
