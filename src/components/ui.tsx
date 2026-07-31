import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, href, variant = "primary", className, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-bold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary" && "bg-gold text-navy-dark shadow-lg shadow-black/10 hover:bg-[#d5aa50] hover:-translate-y-0.5",
    variant === "secondary" && "border border-navy/20 bg-white text-navy hover:border-gold hover:text-navy-dark",
    variant === "light" && "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy",
    className,
  );
  if (href) return <Link href={href} className={styles}>{children}</Link>;
  return <button className={styles} {...props}>{children}</button>;
}

export function SectionHeading({ eyebrow, title, description, light = false, align = "left" }: { eyebrow: string; title: string; description?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("mb-4 text-xs font-extrabold uppercase tracking-[0.22em]", light ? "text-gold-light" : "text-gold")}>{eyebrow}</p>
      <h2 className={cn("font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.7rem]", light ? "text-white" : "text-navy-dark")}>{title}</h2>
      {description && <p className={cn("mt-5 text-base leading-7 sm:text-lg", light ? "text-slate-300" : "text-slate-600")}>{description}</p>}
    </div>
  );
}
