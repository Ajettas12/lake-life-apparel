import { TreePine, Waves, Heart } from "lucide-react";

export default function BoundaryWaters() {
  return (
    <section className="relative overflow-hidden section-padding" style={{ background: "#1e3d18" }}>

      {/* Decorative background waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -right-16 -bottom-16 opacity-[0.06]"
          width="480"
          height="480"
          viewBox="0 0 480 480"
          fill="none"
        >
          <circle cx="240" cy="240" r="220" stroke="white" strokeWidth="1.5" />
          <circle cx="240" cy="240" r="170" stroke="white" strokeWidth="1.5" />
          <circle cx="240" cy="240" r="120" stroke="white" strokeWidth="1.5" />
          <circle cx="240" cy="240" r="70" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container-base relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* Icon cluster */}
          <div className="flex items-end justify-center gap-2 mb-6">
            <TreePine size={22} className="text-evergreen-100 opacity-60 mb-0.5" />
            <TreePine size={32} className="text-evergreen-100" />
            <Waves size={20} className="text-evergreen-100 opacity-50 mb-1" />
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-100 opacity-50 mb-4">
            Giving Back
          </p>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 text-balance">
            Rooted in Minnesota.{" "}
            <br className="hidden sm:block" />
            Giving Back to It.
          </h2>

          <p className="text-evergreen-100 opacity-80 text-lg leading-relaxed mb-4">
            We&apos;re proud members of the{" "}
            <span className="text-white font-semibold opacity-100">
              Boundary Waters Business Coalition
            </span>{" "}
            , a community of Minnesota businesses committed to protecting the Boundary Waters Canoe Area.
          </p>

          <p className="text-evergreen-100 opacity-65 leading-relaxed mb-10 max-w-xl mx-auto">
            A chunk of every order we fulfill goes directly toward preserving the BWCA,
            Minnesota&apos;s most iconic wilderness. When your group orders with Lake Life Apparel,
            your gear gives back to the lakes, rivers, and forests that make Minnesota worth coming home to.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-evergreen-100/25 bg-white/5">
            <Heart size={13} className="text-evergreen-100" />
            <span className="text-evergreen-100 text-sm font-medium">
              Proud Member · Boundary Waters Business Coalition
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
