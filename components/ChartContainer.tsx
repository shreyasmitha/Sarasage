import type { ReactNode } from "react";
import { Card } from "./Card";

interface ChartContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ChartContainer({
  title,
  description,
  children,
}: ChartContainerProps) {
  return (
    <Card className="bg-sarasage-deep/80">
      <div className="mb-3 space-y-1">
        <h3 className="font-serif text-sm text-sarasage-cream">{title}</h3>
        {description && (
          <p className="text-[11px] text-sarasage-cream/75">{description}</p>
        )}
      </div>
      <div className="h-56">{children}</div>
    </Card>
  );
}

