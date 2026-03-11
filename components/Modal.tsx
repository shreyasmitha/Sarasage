import type { ReactNode } from "react";
import clsx from "clsx";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className={clsx(
          "relative z-50 w-full max-w-lg rounded-3xl border border-sarasage-cream/15 bg-sarasage-deep/95 p-6 text-sarasage-cream shadow-[0_18px_60px_rgba(0,0,0,0.7)]",
        )}
      >
        {title && (
          <div className="mb-3 flex items-center justify-between gap-4">
            <h2 className="font-serif text-lg">{title}</h2>
            <button
              onClick={onClose}
              className="rounded-full border border-sarasage-cream/25 px-2 py-1 text-xs text-sarasage-cream/80 hover:bg-sarasage-cream/10"
            >
              Close
            </button>
          </div>
        )}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}

