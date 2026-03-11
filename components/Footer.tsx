import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sarasage-soft/30 bg-sarasage-deep/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-sarasage-soft md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-serif text-sarasage-gold">Sarasage</p>
          <p className="mt-1 max-w-md text-xs text-sarasage-soft/80">
            Financial wisdom for the life you&apos;re building. Prototype tools
            for learning, experimenting, and reflecting on money choices.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs">
          <Link href="/about" className="hover:text-sarasage-gold">
            About
          </Link>
          <Link href="/learn" className="hover:text-sarasage-gold">
            Learn
          </Link>
          <Link href="/quizzes" className="hover:text-sarasage-gold">
            Quizzes
          </Link>
          <Link href="/community" className="hover:text-sarasage-gold">
            Community
          </Link>
          <Link
            href="/budget-calculator"
            className="hover:text-sarasage-gold"
          >
            Budget Calculator
          </Link>
          <Link
            href="/freeze-the-trend"
            className="hover:text-sarasage-gold"
          >
            Freeze the Trend
          </Link>
        </div>
        <p className="text-[11px] text-sarasage-soft/70">
          Sarasage is an educational prototype and does not provide financial
          advice.
        </p>
      </div>
    </footer>
  );
}

