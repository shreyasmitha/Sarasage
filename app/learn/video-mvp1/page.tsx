"use client";

export default function VideoMvp1Page() {
  return (
    <div className="section-wrapper py-10 md:py-14">
      <div className="max-w-3xl space-y-5">
        <p className="pill text-[10px] uppercase tracking-[0.18em]">
          Learn · Video
        </p>
        <h1 className="font-serif text-3xl text-sarasage-cream">
          Your first investment: Growing money for the future
        </h1>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-sarasage-deep/80">
          <video
            className="h-full w-full object-contain"
            controls
            preload="metadata"
          >
            <source src="/videos/first-investment.mp4" type="video/mp4" />
            <source src="/videos/first-investment.mov" type="video/quicktime" />
            <p className="flex h-full items-center justify-center p-6 text-center text-sm text-sarasage-cream/80">
              Add your video file to <code className="rounded bg-white/10 px-1">public/videos/first-investment.mp4</code> to watch it here. MP4 (H.264) is recommended for best browser support.
            </p>
          </video>
        </div>
        <p className="text-sm leading-relaxed text-sarasage-cream/85">
          Watch this short video to learn the basics of growing your money for the future and taking your first investment steps.
        </p>
      </div>
    </div>
  );
}
