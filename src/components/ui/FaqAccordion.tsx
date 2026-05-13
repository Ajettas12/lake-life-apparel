"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/data/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-stone-200 border border-stone-200 rounded">
      {faqs.map((faq) => {
        const isOpen = open === faq.id;
        return (
          <div key={faq.id}>
            <button
              onClick={() => setOpen(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-stone-50 transition-colors group"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-charcoal-800 text-base leading-snug group-hover:text-lake-blue-800 transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "text-charcoal-400 shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-charcoal-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
