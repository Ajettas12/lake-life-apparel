export default function MinnesotaMade() {
  return (
    <section className="bg-white section-padding">
      <div className="container-base">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
            Locally Made
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800 mb-5">
            Every Order Made Right Here in the Twin Cities
          </h2>
          <div className="flex flex-col gap-4 text-charcoal-500 leading-relaxed mb-10">
            <p>
              We&apos;re a Twin Cities business through and through. Every order is made right here
              in Minnesota, not shipped out of a warehouse across the country.
            </p>
            <p>
              When you have a question, you get a real answer. When your timeline is tight,
              we work with it. If something doesn&apos;t look right, it gets fixed before it
              ever reaches you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: "Twin Cities", label: "Based right here" },
              { stat: "24+", label: "Piece minimum" },
              { stat: "2-3 wks", label: "Typical turnaround" },
              { stat: "Local", label: "Pickup available" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-stone-100 rounded p-5 border border-stone-200">
                <p className="font-display text-xl font-bold text-lake-blue-800 mb-1">{stat}</p>
                <p className="text-xs text-charcoal-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
