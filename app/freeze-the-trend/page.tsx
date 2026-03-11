"use client";

import { useMemo, useState } from "react";
import { InputField } from "@/components/InputField";
import { Card } from "@/components/Card";

export default function FreezeTheTrendPage() {
  const [itemPrice, setItemPrice] = useState(3000);
  const [monthlyIncome, setMonthlyIncome] = useState(80000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  const result = useMemo(() => {
    if (monthlyIncome <= 0 || hoursPerWeek <= 0 || itemPrice <= 0) {
      return { hourlyRate: 0, hoursNeeded: 0 };
    }

    const weeksPerMonth = 4.33;
    const totalHoursPerMonth = hoursPerWeek * weeksPerMonth;
    const hourlyRate = monthlyIncome / totalHoursPerMonth;
    const hoursNeeded = itemPrice / hourlyRate;

    return { hourlyRate, hoursNeeded };
  }, [itemPrice, monthlyIncome, hoursPerWeek]);

  const roundedHours = Number.isFinite(result.hoursNeeded)
    ? result.hoursNeeded.toFixed(1)
    : "0.0";

  return (
    <div className="section-wrapper py-10 md:py-14">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            Tool · Freeze the Trend
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            Translate impulse purchases into hours of your time.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Use this tool when something tempting pops up on your feed. Enter
            the price and your work pattern to see how much of your time it
            represents.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <Card className="bg-sarasage-deep/85">
            <div className="space-y-4 text-sm text-sarasage-cream/90">
              <h2 className="font-serif text-lg text-sarasage-cream">
                Enter a potential purchase
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                <InputField
                  label="Item price"
                  type="number"
                  min={0}
                  value={itemPrice}
                  onChange={(e) => setItemPrice(Number(e.target.value) || 0)}
                />
                <InputField
                  label="Monthly income (after tax)"
                  type="number"
                  min={0}
                  value={monthlyIncome}
                  onChange={(e) =>
                    setMonthlyIncome(Number(e.target.value) || 0)
                  }
                />
                <InputField
                  label="Hours worked per week"
                  type="number"
                  min={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value) || 0)}
                  hint="Include commute and overtime if that feels right."
                />
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                Time cost
              </p>
              <div className="mt-4 space-y-3">
                <p className="text-lg font-serif text-sarasage-cream">
                  This purchase represents approximately{" "}
                  <span className="text-sarasage-gold">{roundedHours}</span>{" "}
                  hours of your work.
                </p>
                <p className="text-[13px] text-sarasage-cream/80">
                  That includes time spent earning before and after tax, spread
                  across a typical month.
                </p>
              </div>
            </Card>

            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                Reflection prompts
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sarasage-gold" />
                  <span>
                    Would you still choose this item if you had to block{" "}
                    {roundedHours} hours in your calendar for it?
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sarasage-gold" />
                  <span>
                    Is there something else—like debt payoff, savings, or an
                    experience—that you&apos;d rather give those hours to?
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sarasage-gold" />
                  <span>
                    If you waited a week before deciding, do you think this
                    purchase would still feel as important?
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


