import Link from "next/link";
import { Printer, Scissors, Palette } from "lucide-react";

const featured = [
  {
    icon: Printer,
    title: "Screen Printing",
    desc: "Bold, durable prints built for large orders. Perfect for teams, events, and branded gear that needs to last.",
  },
  {
    icon: Scissors,
    title: "Embroidery",
    desc: "Professional embroidery for polos, hats, and outerwear. The finish that makes a group look polished and put together.",
  },
  {
    icon: Palette,
    title: "Design Help",
    desc: "Not sure where to start? We guide you from concept to final proof. No design experience needed.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white section-padding">
      <div className="container-base">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800">
              Services Built for Bulk
            </h2>
          </div>
          <Link
            href="/services"
            className="text-lake-blue-800 font-medium text-sm hover:underline shrink-0"
          >
            View all services →
          </Link>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-7 border border-stone-200 rounded hover:border-lake-blue-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded bg-lake-blue-800 flex items-center justify-center mb-5 group-hover:bg-lake-blue-700 transition-colors">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-charcoal-800 mb-2">{title}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
