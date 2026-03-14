"use client";

import { useMemo, useState } from "react";
import { InputField } from "@/components/InputField";
import { Card } from "@/components/Card";

function getIconForItem(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("bag") || n.includes("purse")) return "👜";
  if (n.includes("phone") || n.includes("mobile")) return "📱";
  if (n.includes("watch")) return "⌚";
  if (n.includes("shoe") || n.includes("sneaker")) return "👟";
  if (n.includes("dress") || n.includes("saree")) return "👗";
  if (n.includes("laptop") || n.includes("earphone")) return "🎧";
  return "🛍️";
}

type SavedItem = {
  id: string;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  monthlyIncome: number;
  hoursPerWeek: number;
  hoursNeeded: number;
};

const dummySaved: SavedItem[] = [
  { id: "d1", itemName: "Designer bag", itemDescription: "Crossbody", itemPrice: 12000, monthlyIncome: 75000, hoursPerWeek: 40, hoursNeeded: 18.5 },
  { id: "d2", itemName: "Wireless earbuds", itemDescription: "Noise cancelling", itemPrice: 4500, monthlyIncome: 80000, hoursPerWeek: 40, hoursNeeded: 6.2 },
  { id: "d3", itemName: "Weekend getaway", itemDescription: "2-night trip", itemPrice: 25000, monthlyIncome: 90000, hoursPerWeek: 45, hoursNeeded: 28.8 },
  { id: "d4", itemName: "Skincare set", itemDescription: "Monthly restock", itemPrice: 3200, monthlyIncome: 70000, hoursPerWeek: 40, hoursNeeded: 6.6 },
];

export default function FreezeTheTrendPage() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState(3000);
  const [monthlyIncome, setMonthlyIncome] = useState(80000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [savedItems, setSavedItems] = useState<SavedItem[]>(dummySaved);

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

  function handleSave() {
    if (!itemName.trim() || itemPrice <= 0 || monthlyIncome <= 0 || hoursPerWeek <= 0) return;
    const newItem: SavedItem = {
      id: `saved-${Date.now()}`,
      itemName: itemName.trim(),
      itemDescription: itemDescription.trim(),
      itemPrice,
      monthlyIncome,
      hoursPerWeek,
      hoursNeeded: result.hoursNeeded,
    };
    setSavedItems((prev) => [newItem, ...prev]);
    setItemName("");
    setItemDescription("");
    setItemPrice(3000);
  }

  function removeItem(id: string) {
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
  }

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
            represents. Save items to compare and reflect later.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <Card className="bg-sarasage-deep/85">
            <div className="space-y-4 text-sm text-sarasage-cream/90">
              <h2 className="font-serif text-lg text-sarasage-cream">
                Enter a potential purchase
              </h2>
              <div className="space-y-3">
                <InputField
                  label="Item name"
                  placeholder="e.g. Designer bag"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
                <InputField
                  label="Item description"
                  placeholder="Optional short note"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                />
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
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full rounded-full bg-sarasage-gold py-2.5 text-sm font-medium text-sarasage-deep hover:bg-sarasage-gold-soft"
                >
                  Save
                </button>
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

        {/* Saved items */}
        <div className="space-y-3">
          <h2 className="font-serif text-lg text-sarasage-cream">
            Saved items
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="card-elevated relative border-white/8 bg-sarasage-deep/80 py-4 px-4"
              >
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] text-sarasage-cream/80 hover:bg-white/20 hover:text-sarasage-cream"
                  aria-label="Remove"
                >
                  ×
                </button>
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden>
                    {getIconForItem(item.itemName)}
                  </span>
                  <div className="min-w-0 flex-1 pr-6">
                    <p className="font-medium text-sarasage-cream">
                      {item.itemName}
                    </p>
                    <p className="text-[11px] text-sarasage-cream/80">
                      ₹{item.itemPrice.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-1 text-[11px] text-sarasage-cream/90">
                      This will cost you{" "}
                      <span className="font-semibold text-sarasage-gold">
                        {item.hoursNeeded.toFixed(1)} hours
                      </span>{" "}
                      of work
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
