export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    id: "minimum-order",
    question: "Is there a minimum order size?",
    answer: "Yes, we specialize in bulk orders and generally work best with groups of 24 or more pieces. That said, reach out and we'll talk through your specific situation. We want to find the right fit.",
  },
  {
    id: "turnaround",
    question: "How long does an order take?",
    answer: "Most orders are ready within 2 to 3 weeks after artwork is approved and payment is confirmed. Rush timelines may be available, so just ask when you request your quote.",
  },
  {
    id: "design-help",
    question: "What if I don't have a design ready?",
    answer: "No problem. We offer design help and can work with you from a rough idea, a logo file, or even just a description of what you're envisioning. You'll approve everything before we print.",
  },
  {
    id: "pricing",
    question: "How does pricing work?",
    answer: "Pricing depends on the garment, decoration method, number of colors, and quantity. The more you order, the better the per-piece price. Request a quote and we'll send you a clear, no-surprise breakdown.",
  },
  {
    id: "reorders",
    question: "Can I reorder the same design later?",
    answer: "Yes. We keep your artwork on file so reorders are fast and straightforward. Pricing may adjust slightly based on quantity, but the process is simple.",
  },
  {
    id: "artwork-files",
    question: "What file types work for artwork?",
    answer: "Vector files (.ai, .eps, .pdf, .svg) give us the best results. High-resolution raster files (.png at 300 dpi) often work too. If you're not sure what you have, send it over and we'll take a look.",
  },
  {
    id: "shipping-pickup",
    question: "Do you offer shipping or local pickup?",
    answer: "We're based in the Twin Cities and offer local pickup. We can also arrange shipping for groups outside the area. Just ask when you request your quote.",
  },
  {
    id: "see-examples",
    question: "Can I see examples of your work?",
    answer: "Yes. Reach out and we'll send over photos of previous orders that match your type of project. We're happy to show you what we've done for similar groups.",
  },
];
