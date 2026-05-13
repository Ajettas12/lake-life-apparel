export const SITE = {
  name: "Lake Life Apparel",
  tagline: "Fair pricing, strong quality, and personal service for groups that need custom apparel done right.",
  location: "Twin Cities, Minnesota",
  email: "lakelifeapparel12@gmail.com",
  phone: "",
  bwbc: "Boundary Waters Business Coalition",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA = {
  primary: "Request a Quote",
  primaryHref: "/quote",
} as const;
