import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Package, MessageCircle, Heart, TreePine } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lake Life Apparel is a Minnesota-rooted custom bulk apparel company based in the Twin Cities. Learn our story and what drives us.",
};

const values = [
  {
    icon: MapPin,
    title: "Local Production",
    desc: "Every order is produced right here in the Twin Cities. Better quality control and faster turnaround.",
  },
  {
    icon: Package,
    title: "Bulk is Our Thing",
    desc: "We built this business around organized group orders. The bigger the order, the more we're in our element.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    desc: "You'll always know where your order stands. No vague timelines, no surprises. Just honest updates.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "We serve schools, teams, and local organizations because we believe in the groups that hold communities together.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About Lake Life Apparel"
        subtitle="A small Minnesota business making bulk apparel simple, personal, and done right."
      />

      {/* Story section */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800 mb-6 text-balance">
              Doing Things the Right Way for the Groups That Bring People Together
            </h2>
            <div className="flex flex-col gap-5 text-charcoal-500 leading-relaxed">
              <p>
                Lake Life Apparel is a Minnesota custom apparel company focused on bulk orders for
                schools, sports teams, churches, businesses, camps, and community organizations. We
                started it with a simple goal: to make the process more personal, more
                straightforward, and more dependable for the people placing the order.
              </p>
              <p>
                Custom apparel is not a new idea. We just believe it should be done better. Too
                often, group orders come with inflated pricing, inconsistent quality, and poor
                communication. We built Lake Life Apparel to offer a better experience with fair
                pricing, strong quality, and customer service that actually feels personal.
              </p>
              <p>
                Every order is produced locally in the Twin Cities. Keeping production local helps
                us stay close to the process, pay attention to the details, and make sure the final
                product meets the standard we want attached to our name.
              </p>
              <p>
                At its core, Lake Life Apparel is about doing things the right way for the groups
                that bring people together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-100 section-padding">
        <div className="container-base">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded p-6 border border-stone-200 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-lake-blue-50 flex items-center justify-center">
                  <Icon size={18} className="text-lake-blue-800" />
                </div>
                <h3 className="font-display font-bold text-charcoal-800">{title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boundary Waters Mission — with photos */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Photos */}
            <div className="relative">
              {/* Primary photo */}
              <div className="relative rounded overflow-hidden aspect-[4/3] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1590256446799-2dd1691a0775?w=900&q=80"
                  alt="Calm lake surrounded by pine trees in the Boundary Waters Canoe Area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Inset secondary photo */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-[55%] rounded overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1621890970455-2625aaa55476?w=600&q=80"
                  alt="Pine trees on an island in the Boundary Waters, Minnesota wilderness"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
              {/* Spacer for the inset overlap */}
              <div className="mt-10 md:mt-0 h-8 lg:hidden" />
            </div>

            {/* Text */}
            <div className="lg:pl-4 pt-8 lg:pt-0">
              <div className="flex items-center gap-2 mb-4">
                <TreePine size={18} className="text-evergreen-700" />
                <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700">
                  Our Mission
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-800 mb-5 text-balance">
                Rooted in Minnesota. Giving Back to It.
              </h2>
              <div className="flex flex-col gap-4 text-charcoal-500 leading-relaxed mb-6">
                <p>
                  Minnesota is a big part of this business and the values behind it. We care
                  deeply about protecting the waters we grew up loving and cherishing, which is
                  one of the reasons our involvement with the{" "}
                  <span className="text-charcoal-800 font-medium">
                    Boundary Waters Business Coalition
                  </span>{" "}
                  matters to us.
                </p>
                <p>
                  The BWBC is a community of Minnesota businesses committed to protecting the
                  Boundary Waters Canoe Area. A portion of every order we fulfill goes directly
                  toward that effort. It&apos;s not a marketing line. It&apos;s just how we do business.
                </p>
                <p>
                  When your group orders with Lake Life Apparel, your gear does more than outfit
                  your team. It helps keep one of the most beautiful places in Minnesota wild and
                  accessible for the next generation.
                </p>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-lake-blue-800 text-white font-medium rounded hover:bg-lake-blue-700 transition-colors"
              >
                Start Your Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
