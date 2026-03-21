import Link from "next/link";

const PDF_PATH = "/documents/governance-data-framework.pdf";

export default function GovernancePage() {
  return (
    <div className="section-wrapper py-10 md:py-14">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            Transparency
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            Data &amp; governance
          </h1>
          <p className="text-sm text-sarasage-cream/85">
            Our governance and data framework describes how we approach data,
            ethics, and responsibility at Sarasage. The document below opens in
            your browser; you can also download it from the link.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sarasage-gold px-4 py-2 text-sm font-medium text-sarasage-deep hover:bg-sarasage-gold-soft"
          >
            Open PDF in new tab
          </a>
          <a
            href={PDF_PATH}
            download
            className="inline-flex items-center justify-center rounded-full border border-sarasage-cream/40 px-4 py-2 text-sm text-sarasage-cream hover:border-sarasage-gold hover:text-sarasage-gold"
          >
            Download PDF
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center text-sm text-sarasage-cream/70 hover:text-sarasage-gold"
          >
            ← Back to home
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-sarasage-deep/80">
          <iframe
            title="Sarasage governance and data framework"
            src={PDF_PATH}
            className="h-[min(80vh,900px)] w-full"
          />
        </div>

        <p className="text-xs text-sarasage-cream/60">
          Sarasage Data and Governance Framework
        </p>
      </div>
    </div>
  );
}
