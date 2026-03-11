import type { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: ReactNode;
}

export function InputField({ label, hint, className, ...props }: InputFieldProps) {
  return (
    <label className="flex flex-col gap-1 text-xs text-sarasage-cream/85">
      <span className="flex items-center justify-between">
        <span>{label}</span>
        {hint && <span className="text-[10px] text-sarasage-cream/70">{hint}</span>}
      </span>
      <input
        className={clsx(
          "rounded-xl border border-sarasage-cream/25 bg-sarasage-deep/60 px-3 py-2 text-sm text-sarasage-cream placeholder:text-sarasage-cream/40 outline-none transition focus:border-sarasage-gold focus:ring-1 focus:ring-sarasage-gold/70",
          className,
        )}
        {...props}
      />
    </label>
  );
}

