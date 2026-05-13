type Props = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(155deg, #0f2238 0%, #1b3a5c 100%)" }}
    >
      <div className="container-base text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-lake-blue-100 mb-3 opacity-60">
          {label}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
