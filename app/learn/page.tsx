import Link from "next/link";

const modules = [
  {
    slug: "ctc-vs-in-hand-salary",
    title: "CTC vs In-hand salary",
    duration: "6 min",
  },
  {
    slug: "emergency-funds",
    title: "Building your first emergency fund",
    duration: "8 min",
  },
  {
    slug: "inflation-basics",
    title: "Inflation, in everyday terms",
    duration: "7 min",
  },
  {
    slug: "first-investment-steps",
    title: "Your first investment steps",
    duration: "9 min",
  },
];

export default function LearnPage() {
  return (
    <div className="section-wrapper py-12 md:py-16">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            Learn
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            Bite-sized lessons for real money decisions.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Explore short modules that unpack key money concepts in plain
            language, with examples that feel close to everyday life.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/learn/${module.slug}`}
              className="card-elevated group flex flex-col gap-3 border-white/8 bg-sarasage-deep/70 transition hover:-translate-y-1 hover:border-sarasage-gold/40 hover:bg-sarasage-deep/80"
            >
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-sarasage-sage/50 via-sarasage-deep/60 to-sarasage-gold/40 group-hover:from-sarasage-gold/55 group-hover:to-sarasage-sage/60" />
              <div className="space-y-1">
                <h2 className="text-sm font-medium text-sarasage-cream">
                  {module.title}
                </h2>
                <p className="text-[11px] text-sarasage-cream/70">
                  Video-style overview · {module.duration}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

