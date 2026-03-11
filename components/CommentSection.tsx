"use client";

import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { InputField } from "./InputField";

interface Comment {
  id: string;
  name?: string;
  text: string;
  createdAt: string;
}

const STORAGE_KEY = "sarasage-community-comments";

export function CommentSection() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setComments(JSON.parse(stored));
      }
    } catch {
      // ignore read errors
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch {
      // ignore write errors
    }
  }, [comments]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;

    const now = new Date();
    const newComment: Comment = {
      id: `${now.getTime()}`,
      name: name.trim() || undefined,
      text: text.trim(),
      createdAt: now.toISOString(),
    };

    setComments((prev) => [newComment, ...prev]);
    setText("");
  }

  return (
    <div className="space-y-6">
      <Card className="bg-sarasage-deep/80">
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <p className="text-xs text-sarasage-cream/80">
            Share a quick reflection, question, or &quot;aha&quot; moment.
            Comments stay on this device and are stored in your browser&apos;s
            local storage.
          </p>
          <div className="grid gap-3 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)]">
            <InputField
              label="Name (optional)"
              placeholder="First name or initials"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="flex flex-col gap-1 text-xs text-sarasage-cream/85">
              <span>Reflection</span>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder="What did you notice about your money habits today?"
                className="min-h-[72px] rounded-xl border border-sarasage-cream/25 bg-sarasage-deep/60 px-3 py-2 text-sm text-sarasage-cream placeholder:text-sarasage-cream/40 outline-none transition focus:border-sarasage-gold focus:ring-1 focus:ring-sarasage-gold/70"
              />
            </label>
          </div>
          <div className="flex items-center justify-between text-[11px] text-sarasage-cream/70">
            <span>Only you can see these comments on this device.</span>
            <Button type="submit" variant="primary" disabled={!text.trim()}>
              Post
            </Button>
          </div>
        </form>
      </Card>

      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-xs text-sarasage-cream/70">
            No reflections yet. Post your first note to see how the feed will
            look during testing.
          </p>
        ) : (
          comments.map((comment) => (
            <Card
              key={comment.id}
              className="bg-sarasage-deep/80 border-sarasage-cream/12"
            >
              <div className="space-y-1 text-sm text-sarasage-cream/90">
                <p>{comment.text}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-sarasage-cream/65">
                  <span>{comment.name ?? "Anonymous"}</span>
                  <span>
                    {new Date(comment.createdAt).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

