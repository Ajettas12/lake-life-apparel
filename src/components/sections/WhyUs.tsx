import { MapPin, Package, MessageCircle, Leaf } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Made Locally in the Twin Cities",
    desc: "Every order is produced right here in Minnesota. Real accountability and real quality control.",
  },
  {
    icon: Package,
    title: "Built for Bulk Orders",
    desc: "We specialize in larger, organized orders and keep pricing fair. The bigger the order, the better the per-piece rate.",
  },
  {
    icon: MessageCircle,
    title: "Simple, Guided Ordering",
    desc: "From first quote to final pickup, we walk you through every step. It should feel personal, not like a transaction.",
  },
  {
    icon: Leaf,
    title: "Minnesota Values",
    desc: "As proud members of the Boundary Waters Business Coalition, a portion of every order gives back to protecting Minnesota's wilderness.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding" style={{ background: "#1b3a5c" }}>
      <div className="container-base">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-lake-blue-100 mb-3 opacity-60">
            Why Lake Life
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            More Than Just a Print Shop
          </h2>
          <p className="text-white/55 max-w-xl mx-auto leading-relaxed">
            We're a small Minnesota business that cares about your order as much as you do.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-lake-blue-100" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
