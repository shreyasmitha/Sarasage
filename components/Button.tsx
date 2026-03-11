import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sarasage-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-sarasage-deep disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-sarasage-gold text-sarasage-deep shadow-lg shadow-black/40 hover:-translate-y-0.5 hover:bg-sarasage-gold-soft",
  secondary:
    "border border-sarasage-gold/60 bg-sarasage-deep/40 text-sarasage-cream hover:-translate-y-0.5 hover:border-sarasage-gold hover:bg-sarasage-deep",
  ghost:
    "border border-transparent bg-transparent text-sarasage-cream/85 hover:bg-sarasage-cream/5",
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(baseClasses, VARIANT_STYLES[variant], "px-5 py-2.5", className)}
      {...props}
    />
  );
}

