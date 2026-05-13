import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Custom apparel work from Lake Life Apparel. Reach out and we can send photos of previous orders that match your project.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Photos Available on Request"
        subtitle="We can send examples of previous orders that match your specific type of project."
      />

      <section className="bg-white section-padding">
        <div className="container-base max-w-xl mx-auto text-center">
          <p className="text-charcoal-500 leading-relaxed mb-8">
            Reach out and tell us what you&apos;re looking for. Whether it&apos;s screen printing,
            embroidery, team uniforms, or spirit wear, we&apos;re happy to share relevant examples
            from past orders.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lake-blue-800 text-white font-semibold rounded hover:bg-lake-blue-700 transition-colors"
          >
            Request Examples
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
