"use client";

import Link from "next/link";
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
    title: "Your first budget: Understanding your real income",
    link: "/learn/article-1",
    summary:
      "Learn the difference between CTC and in-hand salary, and how to start budgeting with needs, wants, and the 50/30/20 rule.",
  },
  marketSnapshot: {
    sensex: { value: "72,150", change: "+0.8%" },
    nifty: { value: "21,950", change: "+0.6%" },
    repoRate: { value: "6.50%", note: "Last policy review: status quo" },
  },
};

export default function ForYouTodayPage() {
  return (
    <div className="section-wrapper py-10 md:py-14">
      <div className="space-y-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <div className="space-y-2">
            <p className="pill text-[10px] uppercase tracking-[0.18em]">
              Daily brief
            </p>
            <h1 className="font-serif text-3xl text-sarasage-cream">
              Today&apos;s highlights
            </h1>
            <p className="text-sm text-sarasage-cream/85">
              A quick view of today&apos;s money stories and markets in one place.
            </p>
          </div>
          <p className="text-xs text-sarasage-cream/75">
            {todayHighlights.dateLabel}
          </p>
        </div>

        <div className="space-y-6">
          {/* Content for today - highlighted */}
          <div className="rounded-2xl border-2 border-palette-soft-fawn/50 bg-palette-soft-fawn/20 p-6 shadow-lg">
            <p className="text-xs uppercase tracking-[0.18em] text-palette-dark-khaki/80">
              Content for today
            </p>
            <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-[15px] font-medium text-palette-dark-khaki">
                  {todayHighlights.featuredLesson.title}
                </p>
                <p className="text-[13px] text-palette-dark-khaki/85">
                  {todayHighlights.featuredLesson.summary}
                </p>
              </div>
              <Link
                href={todayHighlights.featuredLesson.link}
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-palette-dark-khaki px-4 py-2 text-[12px] font-medium text-palette-porcelain hover:bg-palette-charcoal-blue"
              >
                Open lesson
              </Link>
            </div>
          </div>

          {/* Market snapshot */}
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

          {/* Today's headlines + This week side by side */}
          <div className="grid gap-6 md:grid-cols-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
