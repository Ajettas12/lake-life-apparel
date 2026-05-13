import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost-light";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const variants: Record<Variant, string> = {
  primary: "bg-lake-blue-800 text-white hover:bg-lake-blue-700",
  secondary: "bg-evergreen-700 text-white hover:bg-evergreen-600",
  outline: "border-2 border-lake-blue-800 text-lake-blue-800 hover:bg-lake-blue-50",
  "ghost-light": "border-2 border-white/60 text-white hover:bg-white/10 hover:border-white/80",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lake-blue-600 focus-visible:ring-offset-2";

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
