import { CommentSection } from "@/components/CommentSection";

export default function CommunityPage() {
  return (
    <div className="section-wrapper py-12 md:py-16">
      <div className="max-w-3xl space-y-6">
        <div className="space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            Community
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            A quiet feed for money reflections.
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Share small wins, questions, or &quot;aha&quot; moments as you
            explore Sarasage. Think of it as a gentle money journal that feels
            more like a conversation than a comment section.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card-elevated border-sarasage-cream/15 bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p>
                “Writing down how I feel about a purchase is oddly calming. It
                made me realise I&apos;m more worried about stability than
                &apos;keeping up&apos;.”
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-sarasage-cream/70">
                <span>— Aanya, 1 year into work</span>
                <span>💬 4 · ✨ 12</span>
              </div>
            </div>
            <div className="card-elevated border-sarasage-cream/15 bg-sarasage-deep/85 text-sm text-sarasage-cream/90">
              <p>
                “Seeing other people share small, honest money moments makes me
                feel less alone in figuring things out.”
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-sarasage-cream/70">
                <span>— Dev, product analyst</span>
                <span>💬 3 · ✨ 9</span>
              </div>
            </div>
          </div>

          <CommentSection />
        </div>
      </div>
    </div>
  );
}

