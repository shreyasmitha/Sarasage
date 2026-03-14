"use client";

import { Card } from "@/components/Card";

const progressData = {
  streakWeeks: 3,
  streakActivities: 9,
};

const monthActivity: Record<number, string> = {
  3: "Completed first lesson",
  5: "Updated expenses in the budget calculator",
  7: "2 lessons completed today",
  10: "Posted in the community",
  11: "Took the salary basics quiz",
};

const badgesEarned = [
  { id: "1", title: "Started a mutual fund SIP", icon: "📈", year: "2026", color: "bg-palette-soft-fawn/30 border-palette-soft-fawn/60 text-palette-dark-khaki" },
  { id: "2", title: "Learnt your first lesson", icon: "📖", year: "2026", color: "bg-palette-dusty-olive/25 border-palette-dusty-olive/50 text-palette-dark-khaki" },
  { id: "3", title: "Diwali gift sent", icon: "🪔", year: "2025", color: "bg-sarasage-gold/25 border-sarasage-gold/50 text-palette-dark-khaki" },
  { id: "4", title: "First budget logged", icon: "📊", year: "2026", color: "bg-palette-dry-sage/25 border-palette-dry-sage/50 text-palette-dark-khaki" },
  { id: "5", title: "Emergency fund started", icon: "🛡️", year: "2026", color: "bg-sarasage-sage/25 border-sarasage-sage/50 text-palette-dark-khaki" },
  { id: "6", title: "First quiz completed", icon: "✅", year: "2026", color: "bg-emerald-500/20 border-emerald-500/40 text-palette-dark-khaki" },
];

const upcomingMilestones = [
  "Complete 10 lessons",
  "Interact in the community",
  "Log 3 months in the budget calculator",
  "Earn 5 badges",
];

export function PersonalProgressSection() {
  const currentMonthLabel = "March 2026";

  return (
    <div className="space-y-5">
      <Card className="bg-sarasage-deep/90 text-sm text-sarasage-cream/90">
        <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
          Your progress
        </p>
        <div className="mt-4 space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-sarasage-cream/70">
                Current streak
              </p>
              <p className="text-xl font-serif text-sarasage-cream">
                {progressData.streakWeeks} weeks
              </p>
              <p className="text-[11px] text-sarasage-cream/70">
                {progressData.streakActivities} learning check‑ins
              </p>
            </div>
            <div className="flex h-16 w-10 flex-col items-center justify-between rounded-full bg-sarasage-deep/80 p-1">
              <span className="h-2 w-2 rounded-full bg-sarasage-cream/30" />
              <span className="h-2 w-2 rounded-full bg-sarasage-cream/60" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sarasage-gold text-[10px] text-sarasage-deep">
                🔥
              </span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-sarasage-deep/90 text-sm text-sarasage-cream/90">
        <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
          This month at a glance
        </p>
        <p className="mt-1 text-[11px] text-sarasage-cream/75">
          Your progress this month
        </p>
        <div className="mt-3 space-y-2">
          <p className="text-[12px] text-sarasage-cream/80">
            {currentMonthLabel}
          </p>
          <div className="grid grid-cols-7 gap-1 text-[10px] text-sarasage-cream/70">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const isActive = day in monthActivity;
              const tooltip = monthActivity[day as keyof typeof monthActivity];
              return (
                <div
                  key={day}
                  className="group relative flex h-7 w-7 items-center justify-center rounded-full border border-sarasage-cream/15"
                  title={tooltip}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full ${
                      isActive
                        ? "bg-sarasage-gold/80 text-sarasage-deep"
                        : "bg-sarasage-deep/60"
                    }`}
                  >
                    {day}
                  </div>
                  {isActive && tooltip && (
                    <div className="absolute bottom-full left-1/2 z-10 mb-1 hidden w-40 -translate-x-1/2 rounded-lg border border-sarasage-gold/40 bg-palette-dark-khaki px-2 py-1.5 text-[10px] text-palette-porcelain shadow-lg group-hover:block">
                      {tooltip}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="bg-sarasage-deep/90 text-sm text-sarasage-cream/90">
        <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
          Badges earned
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {badgesEarned.map((badge) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center gap-1.5 rounded-xl border py-2.5 px-1 ${badge.color}`}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-lg">
                {badge.icon}
              </div>
              <p className="text-center text-[10px] leading-tight font-medium">
                {badge.title}
              </p>
              {badge.year && (
                <p className="text-[9px] opacity-75">{badge.year}</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-sarasage-deep/90 text-sm text-sarasage-cream/90">
        <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
          Upcoming milestones
        </p>
        <ul className="mt-3 space-y-2 text-[12px]">
          {upcomingMilestones.map((m) => (
            <li key={m} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sarasage-gold" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
