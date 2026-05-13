import Link from "next/link";

const products = [
  { label: "Custom Tees", bg: "#dce8f4" },
  { label: "Hoodies & Sweatshirts", bg: "#ede9e2" },
  { label: "Staff Polos", bg: "#d4e8d0" },
  { label: "Hats & Caps", bg: "#eef4fb" },
  { label: "Jackets & Outerwear", bg: "#d6d0c8" },
  { label: "Embroidery Work", bg: "#d4e8d0" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white section-padding">
      <div className="container-base">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
              Our Products
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800">
              Quality You Can See
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-lake-blue-800 font-medium text-sm hover:underline shrink-0"
          >
            View full gallery →
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {products.map(({ label, bg }) => (
            <div
              key={label}
              className="aspect-square rounded flex items-end p-4 hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: bg }}
            >
              <span className="text-xs font-medium text-charcoal-700 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
