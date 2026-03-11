"use client";

import { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { InputField } from "@/components/InputField";
import { ChartContainer } from "@/components/ChartContainer";
import { Card } from "@/components/Card";

const CATEGORY_COLORS: Record<string, string> = {
  Rent: "#D8BE87",
  Food: "#F5F1E8",
  Transport: "#808A63",
  Subscriptions: "#FBF8F2",
  Lifestyle: "#C6D2B0",
  Other: "#E6E6E6",
};

export default function BudgetCalculatorPage() {
  const [income, setIncome] = useState(80000);
  const [rent, setRent] = useState(25000);
  const [food, setFood] = useState(15000);
  const [transport, setTransport] = useState(5000);
  const [subscriptions, setSubscriptions] = useState(3000);
  const [lifestyle, setLifestyle] = useState(12000);
  const [other, setOther] = useState(5000);
  const [savingsTargetPercent, setSavingsTargetPercent] = useState(20);

  const data = useMemo(() => {
    const categories = [
      { label: "Rent", value: rent },
      { label: "Food", value: food },
      { label: "Transport", value: transport },
      { label: "Subscriptions", value: subscriptions },
      { label: "Lifestyle", value: lifestyle },
      { label: "Other", value: other },
    ];

    const totalExpenses = categories.reduce((sum, c) => sum + (c.value || 0), 0);
    const availableForSavings = income - totalExpenses;
    const savingsRate =
      income > 0 ? Math.max(0, (availableForSavings / income) * 100) : 0;

    const targetSavingsAmount = (savingsTargetPercent / 100) * income;
    const gapToTarget = targetSavingsAmount - Math.max(0, availableForSavings);

    return {
      categories,
      totalExpenses,
      savingsRate,
      availableForSavings: Math.max(0, availableForSavings),
      targetSavingsAmount,
      gapToTarget,
    };
  }, [income, rent, food, transport, subscriptions, lifestyle, other, savingsTargetPercent]);

  function formatCurrency(amount: number) {
    if (!Number.isFinite(amount)) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.max(0, Math.round(amount)));
  }

  const suggestions: string[] = [];

  if (data.savingsRate < savingsTargetPercent) {
    suggestions.push(
      `You are currently saving about ${data.savingsRate.toFixed(
        1,
      )}% of your income. Increasing this towards ${savingsTargetPercent}% would bring you closer to common planning benchmarks.`,
    );
  } else {
    suggestions.push(
      `You are saving roughly ${data.savingsRate.toFixed(
        1,
      )}% of your income, which is in line with or above your target of ${savingsTargetPercent}%.`,
    );
  }

  const discretionary = lifestyle + subscriptions + other;
  if (discretionary > data.availableForSavings) {
    suggestions.push(
      "Your lifestyle, subscriptions, and 'other' spending together are higher than your current savings. Trimming even one category slightly could free up more for goals.",
    );
  }

  if (data.totalExpenses > income) {
    suggestions.push(
      "Your listed expenses are higher than your income. Double-check the numbers and see if anything can be staggered or reduced.",
    );
  }

  return (
    <div className="section-wrapper py-10 md:py-14">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            Tool · Budget Calculator
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            A calm, analytical view of your month.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Enter your monthly income and typical expenses to see how your money
            flows across essentials, lifestyle and savings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* Inputs */}
          <div className="space-y-4">
            <Card className="bg-sarasage-deep/80">
              <div className="space-y-4">
                <h2 className="font-serif text-lg text-sarasage-cream">
                  Your monthly snapshot
                </h2>
                <div className="space-y-3 text-sm">
                  <InputField
                    label="Monthly income (after tax)"
                    type="number"
                    min={0}
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value) || 0)}
                  />

                  <div className="grid gap-3 md:grid-cols-2">
                    <InputField
                      label="Rent / housing"
                      type="number"
                      min={0}
                      value={rent}
                      onChange={(e) => setRent(Number(e.target.value) || 0)}
                    />
                    <InputField
                      label="Food & groceries"
                      type="number"
                      min={0}
                      value={food}
                      onChange={(e) => setFood(Number(e.target.value) || 0)}
                    />
                    <InputField
                      label="Transportation"
                      type="number"
                      min={0}
                      value={transport}
                      onChange={(e) => setTransport(Number(e.target.value) || 0)}
                    />
                    <InputField
                      label="Subscriptions"
                      type="number"
                      min={0}
                      value={subscriptions}
                      onChange={(e) =>
                        setSubscriptions(Number(e.target.value) || 0)
                      }
                    />
                    <InputField
                      label="Lifestyle & experiences"
                      type="number"
                      min={0}
                      value={lifestyle}
                      onChange={(e) => setLifestyle(Number(e.target.value) || 0)}
                    />
                    <InputField
                      label="Other"
                      type="number"
                      min={0}
                      value={other}
                      onChange={(e) => setOther(Number(e.target.value) || 0)}
                    />
                  </div>

                  <InputField
                    label="Savings goal (%)"
                    type="number"
                    min={0}
                    max={80}
                    value={savingsTargetPercent}
                    onChange={(e) =>
                      setSavingsTargetPercent(Number(e.target.value) || 0)
                    }
                    hint="Many planners suggest aiming around 20% over time."
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Analysis */}
          <div className="space-y-4">
            <ChartContainer
              title="Spending breakdown"
              description="How your listed expenses sit inside your monthly income."
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.categories}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                  >
                    {data.categories.map((entry) => (
                      <Cell
                        key={entry.label}
                        fill={
                          CATEGORY_COLORS[entry.label] ?? "rgba(251,248,242,0.7)"
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) =>
                      formatCurrency(Number(value ?? 0))
                    }
                    contentStyle={{
                      backgroundColor: "#3C4A57",
                      borderRadius: 12,
                      border: "1px solid rgba(245,241,232,0.3)",
                      fontSize: 11,
                    }}
                  />
                  <Legend
                    formatter={(v) => v}
                    wrapperStyle={{ fontSize: 11, color: "#FBF8F2" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid gap-3 md:grid-cols-2">
              <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
                <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                  Summary
                </p>
                <div className="mt-3 space-y-1 text-[13px]">
                  <p>
                    Total income:{" "}
                    <span className="font-medium">
                      {formatCurrency(income)}
                    </span>
                  </p>
                  <p>
                    Total expenses:{" "}
                    <span className="font-medium">
                      {formatCurrency(data.totalExpenses)}
                    </span>
                  </p>
                  <p>
                    Estimated savings:{" "}
                    <span className="font-medium">
                      {formatCurrency(data.availableForSavings)}
                    </span>
                  </p>
                  <p>
                    Savings rate:{" "}
                    <span className="font-medium text-sarasage-gold">
                      {data.savingsRate.toFixed(1)}%
                    </span>
                  </p>
                </div>
              </Card>

              <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
                <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                  Against your goal
                </p>
                <div className="mt-3 space-y-1 text-[13px]">
                  <p>
                    Target savings:{" "}
                    <span className="font-medium">
                      {formatCurrency(data.targetSavingsAmount)}
                    </span>
                  </p>
                  <p>
                    Current vs target:{" "}
                    <span className="font-medium">
                      {data.gapToTarget > 0
                        ? `${formatCurrency(data.gapToTarget)} below target`
                        : "at or above target"}
                    </span>
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                Gentle suggestions
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                {suggestions.map((s, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sarasage-gold" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


