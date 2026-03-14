"use client";

import { useState } from "react";
import { CommentSection } from "@/components/CommentSection";
import { PersonalProgressSection } from "@/components/PersonalProgressSection";
import { Card } from "@/components/Card";

type Thread = {
  id: string;
  author: string;
  role: string;
  body: string;
  reactions: { count: number; emoji: string }[];
  comments: { author: string; body: string; time: string }[];
};

const dummyThreads: Thread[] = [
  {
    id: "badge",
    author: "Riya",
    role: "Community member",
    body: "Shared a badge earned — just completed my first 5 lessons and got the 'First steps' badge! So glad I stuck with it.",
    reactions: [{ count: 24, emoji: "🎉" }, { count: 18, emoji: "✨" }, { count: 8, emoji: "💬" }],
    comments: [
      { author: "Ananya", body: "Congratulations! That's a big milestone.", time: "1h ago" },
      { author: "Kavya", body: "Love this! Keep going, you're doing great.", time: "55m ago" },
      { author: "Meera", body: "So inspiring. I'm two lessons away from mine!", time: "40m ago" },
      { author: "Sneha", body: "We should celebrate these more. Well done Riya!", time: "25m ago" },
    ],
  },
  {
    id: "1",
    author: "Priya",
    role: "1 year into work",
    body: "Writing down how I feel about a purchase is oddly calming. It made me realise I'm more worried about stability than 'keeping up'.",
    reactions: [{ count: 12, emoji: "✨" }, { count: 4, emoji: "💬" }],
    comments: [
      { author: "Ananya", body: "Same here! Tracking helped me see how much I was spending on food delivery.", time: "2h ago" },
      { author: "Kavya", body: "Stability over keeping up — that hit different. Thanks for sharing.", time: "1h ago" },
      { author: "Meera", body: "Did you use the budget calculator for this? It helped me a lot.", time: "45m ago" },
    ],
  },
  {
    id: "2",
    author: "Riya",
    role: "Product analyst",
    body: "Seeing other people share small, honest money moments makes me feel less alone in figuring things out.",
    reactions: [{ count: 9, emoji: "✨" }, { count: 3, emoji: "💬" }],
    comments: [
      { author: "Ishita", body: "This community is so reassuring. We're all learning.", time: "3h ago" },
      { author: "Neha", body: "Exactly why I joined. No judgment, just support.", time: "2h ago" },
    ],
  },
  {
    id: "3",
    author: "Divya",
    role: "First-year consultant",
    body: "I finally wrote down all my subscriptions and realised they're a whole brunch every month. Game changer.",
    reactions: [{ count: 15, emoji: "✨" }, { count: 6, emoji: "💬" }],
    comments: [
      { author: "Sneha", body: "Haha same! Cancelled two I never used.", time: "5h ago" },
      { author: "Pooja", body: "Which ones did you keep? I'm struggling to choose.", time: "4h ago" },
      { author: "Divya", body: "Kept my music and one streaming. Dropped the rest.", time: "3h ago" },
    ],
  },
  {
    id: "4",
    author: "Aarti",
    role: "Early career",
    body: "Seeing my savings rate as a percentage was more motivating than a rupee number. Small win!",
    reactions: [{ count: 11, emoji: "✨" }, { count: 2, emoji: "💬" }],
    comments: [
      { author: "Shruti", body: "Percentages make it so much easier to compare across months.", time: "1d ago" },
    ],
  },
];

export default function CommunityPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const expanded = expandedId ? dummyThreads.find((t) => t.id === expandedId) : null;

  return (
    <div className="section-wrapper py-12 md:py-16">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            Community
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            A quiet feed for money reflections.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Share small wins, questions, or &quot;aha&quot; moments as you
            explore Sarasage. This platform is by and for women.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.6fr)]">
          {/* Left: Message board */}
          <div className="space-y-4">
            {expanded ? (
              <Card className="bg-sarasage-deep/85">
                <button
                  type="button"
                  onClick={() => setExpandedId(null)}
                  className="mb-3 text-xs text-sarasage-gold hover:underline"
                >
                  ← Back to feed
                </button>
                <div className="space-y-3 rounded-xl border border-white/10 bg-sarasage-deep/80 p-4 text-sm">
                  <p className="text-sarasage-cream/95">{expanded.body}</p>
                  <div className="flex items-center justify-between text-[11px] text-sarasage-cream/70">
                    <span>— {expanded.author}, {expanded.role}</span>
                    <div className="flex gap-3">
                      {expanded.reactions.map((r) => (
                        <span key={r.emoji}>
                          {r.emoji} {r.count}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-sarasage-cream/70">
                    Comments
                  </p>
                  {expanded.comments.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/8 bg-sarasage-deep/60 px-3 py-2 text-[13px]"
                    >
                      <p className="text-sarasage-cream/90">{c.body}</p>
                      <p className="mt-1 text-[11px] text-sarasage-cream/60">
                        — {c.author} · {c.time}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ) : (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  {dummyThreads.map((thread) => (
                    <button
                      key={thread.id}
                      type="button"
                      onClick={() => setExpandedId(thread.id)}
                      className="card-elevated text-left border-sarasage-cream/15 bg-sarasage-deep/85 text-sm text-sarasage-cream/90 transition hover:border-sarasage-gold/40 hover:bg-sarasage-deep/90"
                    >
                      <p className="line-clamp-3">{thread.body}</p>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-sarasage-cream/70">
                        <span>— {thread.author}, {thread.role}</span>
                        <span>
                          {thread.reactions.map((r) => `${r.emoji} ${r.count}`).join(" · ")}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                <CommentSection />
              </>
            )}
          </div>

          {/* Right: Personal section */}
          <div>
            <PersonalProgressSection />
          </div>
        </div>
      </div>
    </div>
  );
}
