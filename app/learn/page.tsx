"use client";

import Link from "next/link";
import { QuizBlock, type Question } from "@/components/QuizBlock";

const learnModules = [
  { slug: "article-1", title: "Your first budget: Understanding your real income", type: "Article", duration: "6 min" },
  { slug: "article-2", title: "How much is that really worth? The work-hours behind every purchase", type: "Article", duration: "5 min" },
  { slug: "video-mvp1", title: "Your first investment: Growing money for the future", type: "Video", duration: "8 min" },
  { slug: "inflation-explained", title: "Inflation explained: Why money loses value over time", type: "Video", duration: "Coming soon" },
];

const salaryQuiz: Question[] = [
  { id: "q1", prompt: "What does CTC usually include that your in-hand salary does NOT?", options: [{ id: "a", label: "Only the amount credited to your bank account" }, { id: "b", label: "Employer PF contributions and some benefits" }, { id: "c", label: "Just performance bonuses" }, { id: "d", label: "Only taxes and deductions" }], correctId: "b", explanation: "CTC includes base pay, employer PF, gratuity, insurance and other benefits." },
  { id: "q2", prompt: "When comparing job offers, which number is most useful for your monthly budget?", options: [{ id: "a", label: "The higher CTC, no matter the structure" }, { id: "b", label: "Estimated in-hand salary after deductions" }, { id: "c", label: "Only the joining bonus" }, { id: "d", label: "Company revenue" }], correctId: "b", explanation: "In-hand salary is what lands in your account and drives day-to-day budgeting." },
];

const emergencyQuiz: Question[] = [
  { id: "q3", prompt: "An emergency fund is usually based on which of these?", options: [{ id: "a", label: "Your total CTC" }, { id: "b", label: "Your essential monthly expenses" }, { id: "c", label: "Your planned vacation costs" }, { id: "d", label: "The cost of a new phone" }], correctId: "b", explanation: "Aim for 3–6 months of essential expenses—rent, groceries, EMIs, utilities." },
  { id: "q4", prompt: "Where should an emergency fund usually be kept?", options: [{ id: "a", label: "Locked in a long, illiquid investment" }, { id: "b", label: "In cash at home only" }, { id: "c", label: "In a liquid, low‑risk place you can access quickly" }, { id: "d", label: "In risky assets to chase high returns" }], correctId: "c", explanation: "Emergency fund is about quick access and stability." },
];

const investingQuiz: Question[] = [
  { id: "q5", prompt: "Why does inflation matter for your savings?", options: [{ id: "a", label: "It only affects groceries" }, { id: "b", label: "Over time, the same amount of money buys less" }, { id: "c", label: "It increases your salary automatically" }, { id: "d", label: "It doesn’t affect long-term savings" }], correctId: "b", explanation: "Inflation means prices rise over time, so the purchasing power of money held in low-return accounts can fall." },
  { id: "q6", prompt: "A good first step before investing is usually:", options: [{ id: "a", label: "Put all savings in one stock" }, { id: "b", label: "Clear high-interest debt and build an emergency fund" }, { id: "c", label: "Wait until you have a large lump sum" }, { id: "d", label: "Skip learning and start immediately" }], correctId: "b", explanation: "Building an emergency fund and managing debt first creates a safer base for investing." },
];

export default function LearnPage() {
  return (
    <div className="section-wrapper py-12 md:py-16">
      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">Learn</p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            Bite-sized lessons for real money decisions.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Explore articles and videos that unpack key money concepts in plain language, then test your understanding with quick quizzes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* Left: Learn modules */}
          <div className="grid gap-4 sm:grid-cols-2">
            {learnModules.map((module) => (
              <Link
                key={module.slug}
                href={`/learn/${module.slug}`}
                className="card-elevated group flex flex-col gap-2 border-white/8 bg-sarasage-deep/70 transition hover:-translate-y-1 hover:border-sarasage-gold/40 hover:bg-sarasage-deep/80"
              >
                <div className="aspect-[2/1] w-full max-h-[200px] rounded-xl bg-gradient-to-br from-sarasage-sage/50 via-sarasage-deep/60 to-sarasage-gold/40 group-hover:from-sarasage-gold/55 group-hover:to-sarasage-sage/60" />
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase tracking-wider text-sarasage-cream/70">{module.type}</p>
                  <h2 className="text-sm font-medium text-sarasage-cream line-clamp-2">
                    {module.title}
                  </h2>
                  <p className="text-[11px] text-sarasage-cream/70">{module.duration}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Right: Quizzes */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">Quizzes</p>
            <QuizBlock title="Salary basics" questions={salaryQuiz} />
            <QuizBlock title="Emergency funds" questions={emergencyQuiz} />
            <QuizBlock title="Investing & inflation" questions={investingQuiz} />
          </div>
        </div>
      </div>
    </div>
  );
}
