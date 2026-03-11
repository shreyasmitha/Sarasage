"use client";

import { useState } from "react";

type Option = {
  id: string;
  label: string;
};

type Question = {
  id: string;
  prompt: string;
  options: Option[];
  correctId: string;
  explanation: string;
};

const salaryQuiz: Question[] = [
  {
    id: "q1",
    prompt: "What does CTC usually include that your in-hand salary does NOT?",
    options: [
      { id: "a", label: "Only the amount credited to your bank account" },
      { id: "b", label: "Employer PF contributions and some benefits" },
      { id: "c", label: "Just performance bonuses" },
      { id: "d", label: "Only taxes and deductions" },
    ],
    correctId: "b",
    explanation:
      "CTC is the total cost to company, often including base pay, employer PF, gratuity, insurance and other benefits.",
  },
  {
    id: "q2",
    prompt:
      "When comparing two job offers, which number is most useful for your monthly budget?",
    options: [
      { id: "a", label: "The higher CTC, no matter the structure" },
      { id: "b", label: "Estimated in-hand salary after deductions" },
      { id: "c", label: "Only the joining bonus" },
      { id: "d", label: "Company revenue" },
    ],
    correctId: "b",
    explanation:
      "Your in-hand salary is what actually lands in your account and drives day-to-day budgeting.",
  },
];

const emergencyQuiz: Question[] = [
  {
    id: "q3",
    prompt: "An emergency fund is usually based on which of these?",
    options: [
      { id: "a", label: "Your total CTC" },
      { id: "b", label: "Your essential monthly expenses" },
      { id: "c", label: "Your planned vacation costs" },
      { id: "d", label: "The cost of a new phone" },
    ],
    correctId: "b",
    explanation:
      "Guidelines suggest saving 3–6 months of essential expenses—rent, groceries, EMIs, utilities, transport.",
  },
  {
    id: "q4",
    prompt: "Where should an emergency fund usually be kept?",
    options: [
      { id: "a", label: "Locked in a long, illiquid investment" },
      { id: "b", label: "In cash at home only" },
      { id: "c", label: "In a liquid, low‑risk place you can access quickly" },
      { id: "d", label: "In risky assets to chase high returns" },
    ],
    correctId: "c",
    explanation:
      "An emergency fund is about quick access and stability, not maximising returns.",
  },
];

function QuizBlock({ title, questions }: { title: string; questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce(
    (sum, q) => (answers[q.id] === q.correctId ? sum + 1 : sum),
    0,
  );

  function handleSelect(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="card-elevated space-y-4 border-white/8 bg-sarasage-deep/80">
      <div className="space-y-1">
        <h2 className="font-serif text-lg text-sarasage-cream">{title}</h2>
        <p className="text-xs text-sarasage-cream/75">
          Answer quickly, then read the explanations to deepen your understanding.
        </p>
      </div>

      <div className="space-y-4 text-sm text-sarasage-cream/90">
        {questions.map((q) => (
          <div key={q.id} className="space-y-2 rounded-2xl border border-sarasage-cream/20 bg-sarasage-deep/80 p-3">
            <p>{q.prompt}</p>
            <div className="mt-1 space-y-1 text-xs">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.id;
                const isCorrect = opt.id === q.correctId;

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(q.id, opt.id)}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition ${
                      selected
                        ? "border-sarasage-gold bg-sarasage-gold/10"
                        : "border-sarasage-cream/20 bg-sarasage-deep/60 hover:border-sarasage-gold/40"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {submitted && (
                      <span className="ml-2 text-[11px]">
                        {isCorrect ? "✓" : selected ? "✗" : ""}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-2 text-[11px] text-sarasage-cream/75">
                {q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-sarasage-cream/75">
        <div>
          {submitted ? (
            <span>
              Score:{" "}
              <span className="font-medium text-sarasage-gold">
                {score} / {questions.length}
              </span>
            </span>
          ) : (
            <span>Ready when you are.</span>
          )}
        </div>
        <div className="space-x-2">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-sarasage-cream/30 px-3 py-1.5 text-[11px] hover:bg-sarasage-cream/5"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-full bg-sarasage-gold px-3 py-1.5 text-[11px] font-medium text-sarasage-deep hover:bg-sarasage-gold-soft"
          >
            Check answers
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuizzesPage() {
  return (
    <div className="section-wrapper py-12 md:py-16">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">Quizzes</p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            Light-touch check-ins, not exams.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Use these quick quizzes to sense-check your understanding. Answer first
            from intuition, then read the explanations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <QuizBlock title="Salary basics" questions={salaryQuiz} />
          <QuizBlock title="Emergency funds" questions={emergencyQuiz} />
        </div>
      </div>
    </div>
  );
}


