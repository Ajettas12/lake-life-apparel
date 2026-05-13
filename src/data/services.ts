export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    id: "screen-printing",
    title: "Screen Printing",
    description: "Bold, durable prints built for large orders. Perfect for teams, events, and branded gear that needs to last.",
    icon: "print",
  },
  {
    id: "embroidery",
    title: "Embroidery",
    description: "Professional embroidery for polos, hats, and outerwear. The finish that makes a group look put together.",
    icon: "needle",
  },
  {
    id: "team-apparel",
    title: "Team Apparel",
    description: "Uniforms, warmups, and fan gear built for sports teams and athletic programs of all sizes.",
    icon: "team",
  },
  {
    id: "business-branded",
    title: "Business Branded Apparel",
    description: "Staff uniforms, branded polos, and workwear that makes your team look sharp and consistent.",
    icon: "briefcase",
  },
  {
    id: "event-apparel",
    title: "Event Apparel",
    description: "Custom shirts and gear for fundraisers, camps, retreats, and community events. Done right, on time.",
    icon: "calendar",
  },
  {
    id: "design-help",
    title: "Design Help & Ordering Guidance",
    description: "Not sure where to start? We help you through the entire process from artwork to final delivery.",
    icon: "sparkle",
  },
];
