import type { Metadata } from "next";
import { MapPin, Mail, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lake Life Apparel. We're based in the Twin Cities and love hearing from new and returning customers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Say Hello"
        title="Get in Touch"
        subtitle="We're a small team and we respond fast. Reach out any time."
      />

      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">

            {/* Contact info */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-6">
                Contact Info
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-lake-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-lake-blue-800" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 mb-0.5">Location</p>
                    <p className="text-charcoal-500 text-sm">{SITE.location}</p>
                    <p className="text-charcoal-400 text-xs mt-1">Local pickup available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-lake-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-lake-blue-800" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 mb-0.5">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-lake-blue-800 text-sm hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-lake-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} className="text-lake-blue-800" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800 mb-0.5">Response Time</p>
                    <p className="text-charcoal-500 text-sm">Typically within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-100 rounded p-5 border border-stone-200">
                <p className="font-medium text-charcoal-800 text-sm mb-1">
                  Ready to place an order?
                </p>
                <p className="text-charcoal-500 text-xs leading-relaxed mb-3">
                  For the fastest response and a detailed quote, use our quote request form. It
                  gives us everything we need to get back to you with accurate pricing right away.
                </p>
                <a
                  href="/quote"
                  className="text-lake-blue-800 text-sm font-medium hover:underline"
                >
                  Go to Quote Request →
                </a>
              </div>
            </div>

            {/* Simple contact form */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-evergreen-700 mb-6">
                Send a Message
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-charcoal-700" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="px-4 py-2.5 border border-stone-200 rounded text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-lake-blue-600 focus:ring-1 focus:ring-lake-blue-600 bg-white transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-charcoal-700" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="px-4 py-2.5 border border-stone-200 rounded text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-lake-blue-600 focus:ring-1 focus:ring-lake-blue-600 bg-white transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal-700" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What can we help with?"
                    className="px-4 py-2.5 border border-stone-200 rounded text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-lake-blue-600 focus:ring-1 focus:ring-lake-blue-600 bg-white transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-charcoal-700" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="px-4 py-2.5 border border-stone-200 rounded text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-lake-blue-600 focus:ring-1 focus:ring-lake-blue-600 bg-white transition resize-none"
                  />
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <button
                  type="submit"
                  className="self-start px-8 py-3 bg-lake-blue-800 text-white font-medium rounded hover:bg-lake-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
