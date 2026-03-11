import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "card-elevated border-white/8 bg-sarasage-deep/70 shadow-[0_14px_40px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

