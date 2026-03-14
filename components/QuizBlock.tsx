"use client";

import { useState } from "react";

export type Option = { id: string; label: string };
export type Question = {
  id: string;
  prompt: string;
  options: Option[];
  correctId: string;
  explanation: string;
};

export function QuizBlock({ title, questions }: { title: string; questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce(
    (sum, q) => (answers[q.id] === q.correctId ? sum + 1 : sum),
    0,
  );

  function handleSelect(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  return (
    <div className="card-elevated space-y-3 border-white/8 bg-sarasage-deep/80">
      <h3 className="font-serif text-sm text-sarasage-cream">{title}</h3>
      <div className="space-y-2 text-xs text-sarasage-cream/90">
        {questions.map((q) => (
          <div key={q.id} className="rounded-xl border border-sarasage-cream/20 bg-sarasage-deep/80 p-2">
            <p className="mb-1.5 text-[11px]">{q.prompt}</p>
            <div className="space-y-1">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.id;
                const isCorrect = opt.id === q.correctId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(q.id, opt.id)}
                    className={`flex w-full items-center justify-between rounded-lg border px-2 py-1.5 text-left transition ${
                      selected ? "border-sarasage-gold bg-sarasage-gold/10" : "border-sarasage-cream/20 hover:border-sarasage-gold/40"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {submitted && (isCorrect ? "✓" : selected ? "✗" : "")}
                  </button>
                );
              })}
            </div>
            {submitted && <p className="mt-1.5 text-[10px] text-sarasage-cream/75">{q.explanation}</p>}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        {submitted ? (
          <span className="text-[11px] text-sarasage-gold">Score: {score}/{questions.length}</span>
        ) : (
          <span className="text-[11px] text-sarasage-cream/70">Answer then check</span>
        )}
        <div className="flex gap-1">
          <button type="button" onClick={() => { setAnswers({}); setSubmitted(false); }} className="rounded-full border border-sarasage-cream/30 px-2 py-1 text-[10px] hover:bg-sarasage-cream/5">Reset</button>
          <button type="button" onClick={() => setSubmitted(true)} className="rounded-full bg-sarasage-gold px-2 py-1 text-[10px] font-medium text-sarasage-deep">Check</button>
        </div>
      </div>
    </div>
  );
}
