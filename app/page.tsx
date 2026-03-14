import Link from "next/link";
import Image from "next/image";

const featureCards = [
  {
    title: "Learn",
    description: "Short, calm lessons that explain real-world money decisions.",
  },
  {
    title: "Test",
    description: "Lightweight quizzes that reinforce concepts without pressure.",
  },
  {
    title: "Apply",
    description:
      "Practical tools like budgeting and Freeze the Trend to use right away.",
  },
];

const toolCards = [
  {
    title: "Budget Calculator",
    description:
      "See where your money goes each month with a clear, visual breakdown.",
    href: "/budget-calculator",
    tag: "Most used in testing",
  },
  {
    title: "Freeze the Trend",
    description:
      "Translate impulse purchases into hours of work so you can pause and reflect.",
    href: "/freeze-the-trend",
    tag: "New reflective tool",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20 pt-10 md:space-y-28 md:pt-16">
      {/* Hero */}
      <section className="section-wrapper grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-7">
          <div className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-sarasage-gold" />
            <span className="uppercase tracking-[0.18em] text-[10px]">
              Early access · Beta
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="font-serif text-3xl leading-snug tracking-tight text-sarasage-cream md:text-4xl lg:text-[2.9rem]">
              Financial wisdom for the life you&apos;re building.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-sarasage-cream/85 md:text-base">
              Sarasage helps you find clarity through simple tools, real-world
              insights, and practical guidance. No jargon. Just calm, transparent
              and confident money decisions.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center rounded-full bg-sarasage-gold px-5 py-2.5 text-sm font-medium text-sarasage-deep shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:bg-sarasage-gold-soft"
            >
              Start Learning
            </Link>
            <Link
              href="/budget-calculator"
              className="inline-flex items-center justify-center rounded-full border border-sarasage-gold/60 bg-sarasage-deep/40 px-5 py-2.5 text-sm font-medium text-sarasage-cream/90 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sarasage-gold hover:bg-sarasage-deep"
            >
              Try the Budget Calculator
            </Link>
            <Link
              href="/freeze-the-trend"
              className="inline-flex items-center justify-center rounded-full border border-sarasage-gold/60 bg-sarasage-deep/40 px-5 py-2.5 text-sm font-medium text-sarasage-cream/90 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sarasage-gold hover:bg-sarasage-deep"
            >
              Try the Freeze the Trend tool
            </Link>
          </div>

          <p className="text-[11px] text-sarasage-cream/70">
            Designed for early-career professionals and women in their first
            few years of work, with tools that grow alongside your money life.
          </p>
        </div>

        <div className="relative">
          <div className="card-elevated relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sarasage-sage/25 via-transparent to-sarasage-gold/25 opacity-70" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-sarasage-deep">
                    <Image
                      src="/sarasage-logo-sage.png"
                      alt="Sarasage logo"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/80">
                      Sarasage Snapshot
                    </p>
                    <p className="text-xs text-sarasage-cream/80">
                      Monthly flow preview
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-sarasage-cream/5 px-3 py-1 text-[10px] text-sarasage-cream">
                  Prototype · V0.1
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_minmax(0,1fr)]">
                <div className="rounded-xl border border-white/8 bg-sarasage-deep/70 px-4 py-3 text-[11px] text-sarasage-cream">
                  <div className="mb-2 flex items-center justify-between text-[10px] text-sarasage-cream/80">
                    <span>Spending overview</span>
                    <span>Sample view</span>
                  </div>
                  <div className="mt-1 flex items-end gap-1.5">
                    <div className="flex-1 space-y-1">
                      <div className="h-20 rounded-t-lg bg-sarasage-gold/85" />
                      <p className="text-[10px] text-sarasage-cream/80">
                        Essentials
                      </p>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-14 rounded-t-lg bg-sarasage-sage/85" />
                      <p className="text-[10px] text-sarasage-cream/80">
                        Lifestyle
                      </p>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-10 rounded-t-lg bg-sarasage-cream/80" />
                      <p className="text-[10px] text-sarasage-cream/80">
                        Savings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-sarasage-cream/85">
                  <p className="font-medium text-sarasage-cream">
                    See your month at a glance.
                  </p>
                  <p>
                    Sarasage turns your income and spending into calm visuals
                    plus gentle nudges, so you can see whether your habits
                    support the life you want.
                  </p>
                  <div className="flex flex-col gap-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-sarasage-cream/75">
                        Est. savings rate
                      </span>
                      <span className="font-medium text-sarasage-gold">
                        18%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sarasage-cream/75">
                        Suggested benchmark
                      </span>
                      <span className="text-sarasage-cream/85">20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-wrapper space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-serif text-2xl text-sarasage-cream">
            Learn, test, and apply at your own pace.
          </h2>
          <p className="text-sm text-sarasage-cream/80">
            Sarasage combines gentle education, quick checks, and practical
            calculators so you can move from &quot;I should figure this
            out&quot; to quiet confidence.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="card-elevated flex flex-col gap-3 border-white/8 bg-sarasage-deep/60 shadow-[0_14px_40px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-sarasage-gold/40 hover:bg-sarasage-deep/80"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                {card.title}
              </p>
              <p className="text-sm text-sarasage-cream/90">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools preview */}
      <section className="section-wrapper space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-sarasage-cream">
              Try the Sarasage tools.
            </h2>
            <p className="mt-1 max-w-xl text-sm text-sarasage-cream/80">
              Start with a budget snapshot or explore the time-cost of impulse
              spending using simple, visual tools.
            </p>
          </div>
          <p className="text-xs text-sarasage-cream/70">
            No sign-up · No email · Just experiment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {toolCards.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group card-elevated flex flex-col justify-between border-palette-dusty-olive/50 bg-palette-dusty-olive/20 transition hover:-translate-y-1 hover:border-palette-dusty-olive/70 hover:bg-palette-dusty-olive/30"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sarasage-cream">
                    {tool.title}
                  </p>
                  <span className="rounded-full bg-sarasage-deep/30 px-3 py-1 text-[10px] text-sarasage-cream/90">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-sm text-sarasage-cream/90">
                  {tool.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-sarasage-cream/80">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-sarasage-gold" />
                  Runs in your browser
                </span>
                <span className="inline-flex items-center gap-1 text-sarasage-gold group-hover:translate-x-0.5 transition font-medium">
                  Open tool
                  <span aria-hidden>↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Community preview */}
      <section className="section-wrapper grid gap-8 rounded-3xl border border-white/8 bg-sarasage-deep/80 px-5 py-8 shadow-[0_16px_45px_rgba(0,0,0,0.55)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:px-8">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl text-sarasage-cream">
            A calm space to talk about money.
          </h2>
          <p className="text-sm text-sarasage-cream/85">
            The Sarasage community is a small, supportive feed where people
            share what they&apos;re trying, what&apos;s working, and what still
            feels confusing—without judgement.
          </p>
          <p className="text-xs text-sarasage-cream/70">
            You choose what to share and how often, so the space stays gentle
            and grounded.
          </p>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm font-medium text-sarasage-gold hover:text-sarasage-gold-soft"
          >
            Visit the community feed
            <span aria-hidden>↗</span>
          </Link>
        </div>

        <div className="card-elevated space-y-3 border-white/10 bg-sarasage-deep">
          <p className="text-[11px] uppercase tracking-[0.18em] text-sarasage-cream/70">
            Community · Sample reflections
          </p>
          <div className="space-y-3 text-xs text-sarasage-cream/90">
            <div className="rounded-xl border border-white/8 bg-sarasage-deep/80 px-3 py-2.5">
              “I finally wrote down all my subscriptions and realised they&apos;re
              a whole brunch every month.”
              <p className="mt-1 text-[10px] text-sarasage-cream/60">
                — Early career consultant
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-sarasage-deep/80 px-3 py-2.5">
              “Seeing my savings rate as a percentage was more motivating than a
              rupee number.”
              <p className="mt-1 text-[10px] text-sarasage-cream/60">
                — First-year product manager
              </p>
            </div>
            <div className="rounded-xl border border-dashed border-sarasage-cream/40 bg-sarasage-deep/50 px-3 py-2.5 text-sarasage-cream/80">
              Your reflections will appear here as you start sharing.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
