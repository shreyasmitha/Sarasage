"use client";

import { useMemo } from "react";
import { Card } from "@/components/Card";

const todayHighlights = {
  dateLabel: "Wednesday · March 11, 2026",
  dailyNews: [
    {
      region: "India",
      title: "RBI signals steady rates amid inflation easing",
      summary:
        "The Reserve Bank of India indicated it will hold rates while watching food inflation, giving borrowers a little more certainty for the next few months.",
    },
    {
      region: "India",
      title: "New tax regime adoption continues to rise",
      summary:
        "More salaried professionals are opting for the new tax regime, making it even more important to understand deductions and take‑home pay.",
    },
    {
      region: "Global",
      title: "Markets pause after record highs",
      summary:
        "Global equity markets cooled slightly after strong rallies, with investors watching central bank commentary on future rate cuts.",
    },
  ],
  weeklyNews: [
    {
      title: "Mutual fund inflows stay strong among first‑time investors",
      summary:
        "Systematic investment plans continue to see healthy inflows, especially from young professionals starting with small monthly amounts.",
    },
    {
      title: "Cost of living remains uneven across cities",
      summary:
        "Tier‑1 city rents are rising faster than salaries for many sectors, increasing the importance of housing choices in monthly budgets.",
    },
  ],
  featuredLesson: {
    title: "Today’s focus: Emergency funds",
    link: "/learn/emergency-funds",
    summary:
      "A few months of essential expenses in an easy‑to‑access place can turn surprises into inconveniences instead of crises.",
  },
  marketSnapshot: {
    sensex: { value: "72,150", change: "+0.8%" },
    nifty: { value: "21,950", change: "+0.6%" },
    repoRate: { value: "6.50%", note: "Last policy review: status quo" },
  },
};

const progressData = {
  streakWeeks: 3,
  streakActivities: 9,
  milestones: ["First salary", "Emergency fund started", "First investment"],
};

const badgesEarned = [
  { id: "1", title: "Started a mutual fund SIP", icon: "📈", year: "2026" },
  { id: "2", title: "Learnt your first lesson", icon: "📖", year: "2026" },
  { id: "3", title: "Diwali gift sent", icon: "🪔", year: "2025" },
  { id: "4", title: "First budget logged", icon: "📊", year: "2026" },
  { id: "5", title: "Emergency fund started", icon: "🛡️", year: "2026" },
  { id: "6", title: "First quiz completed", icon: "✅", year: "2026" },
];

export default function ForYouTodayPage() {
  const currentMonthLabel = useMemo(() => "March 2026", []);

  return (
    <div className="section-wrapper py-10 md:py-14">
      <div className="space-y-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div className="space-y-2">
            <p className="pill text-[10px] uppercase tracking-[0.18em]">
              Daily brief
            </p>
            <h1 className="font-serif text-3xl text-sarasage-cream">
              For you today.
            </h1>
            <p className="text-sm text-sarasage-cream/85">
              A quick view of today&apos;s money stories, markets, and your own
              progress—all in one place.
            </p>
          </div>
          <p className="text-xs text-sarasage-cream/75">{todayHighlights.dateLabel}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          {/* Left: News & content */}
          <div className="space-y-5">
            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                Today&apos;s headlines
              </p>
              <div className="mt-3 space-y-3">
                {todayHighlights.dailyNews.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-sarasage-deep/80 p-3"
                  >
                    <div className="mb-1 flex items-center justify-between text-[11px] text-sarasage-cream/70">
                      <span>{item.region}</span>
                      <span>2–3 min read</span>
                    </div>
                    <p className="text-[13px] font-medium text-sarasage-cream">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[12px] text-sarasage-cream/80">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                This week in money
              </p>
              <div className="mt-3 space-y-3">
                {todayHighlights.weeklyNews.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-sarasage-deep/80 p-3"
                  >
                    <p className="text-[13px] font-medium text-sarasage-cream">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[12px] text-sarasage-cream/80">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                Content for today
              </p>
              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <p className="text-[13px] font-medium text-sarasage-cream">
                    {todayHighlights.featuredLesson.title}
                  </p>
                  <p className="text-[12px] text-sarasage-cream/80">
                    {todayHighlights.featuredLesson.summary}
                  </p>
                </div>
                <a
                  href={todayHighlights.featuredLesson.link}
                  className="inline-flex items-center justify-center rounded-full bg-sarasage-gold px-4 py-1.5 text-[12px] font-medium text-sarasage-deep hover:bg-sarasage-gold-soft"
                >
                  Open lesson
                </a>
              </div>
            </Card>

            <Card className="bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                Market snapshot
              </p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-[11px] text-sarasage-cream/70">Sensex</p>
                  <p className="text-[15px] font-semibold text-sarasage-cream">
                    {todayHighlights.marketSnapshot.sensex.value}
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    {todayHighlights.marketSnapshot.sensex.change}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-sarasage-cream/70">Nifty 50</p>
                  <p className="text-[15px] font-semibold text-sarasage-cream">
                    {todayHighlights.marketSnapshot.nifty.value}
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    {todayHighlights.marketSnapshot.nifty.change}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-sarasage-cream/70">Repo rate</p>
                  <p className="text-[15px] font-semibold text-sarasage-cream">
                    {todayHighlights.marketSnapshot.repoRate.value}
                  </p>
                  <p className="text-[11px] text-sarasage-cream/75">
                    {todayHighlights.marketSnapshot.repoRate.note}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Progress column */}
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
              <div className="mt-3 space-y-2">
                <p className="text-[12px] text-sarasage-cream/80">
                  {currentMonthLabel}
                </p>
                <div className="grid grid-cols-7 gap-1 text-[10px] text-sarasage-cream/70">
                  {Array.from({ length: 28 }, (_, index) => index + 1).map(
                    (day) => {
                      const isActive = day <= 11;
                      return (
                        <div
                          key={day}
                          className={`flex h-7 w-7 items-center justify-center rounded-full border border-sarasage-cream/15 ${
                            isActive
                              ? "bg-sarasage-gold/80 text-sarasage-deep"
                              : "bg-sarasage-deep/60"
                          }`}
                        >
                          {day}
                        </div>
                      );
                    },
                  )}
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
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-sarasage-cream/15 bg-sarasage-deep/80 py-2.5 px-1"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sarasage-gold/25 text-base">
                      {badge.icon}
                    </div>
                    <p className="text-center text-[10px] leading-tight text-sarasage-cream/90">
                      {badge.title}
                    </p>
                    {badge.year && (
                      <p className="text-[9px] text-sarasage-cream/60">
                        {badge.year}
                      </p>
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
                {progressData.milestones.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sarasage-gold" />
                    <span>{m}</span>
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

