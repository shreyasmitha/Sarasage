export default function AboutPage() {
  return (
    <div className="section-wrapper py-12 md:py-16">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="pill text-[10px] uppercase tracking-[0.18em]">
            About Sarasage
          </p>
          <h1 className="font-serif text-3xl text-sarasage-cream">
            Money clarity for early careers.
          </h1>
          <p className="text-sm leading-relaxed text-sarasage-cream/85">
            Sarasage is a financial literacy platform for young professionals
            navigating their first salaries, benefits, and money choices. The
            goal is not perfection, but gentle, informed decision-making.
          </p>
        </div>

        <section className="grid gap-8 text-sm text-sarasage-cream/85 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-lg text-sarasage-cream">
                Mission
              </h2>
              <p className="mt-2">
                Our mission is to make money conversations feel calm, clear, and
                grounded in real life. Sarasage translates financial concepts
                into everyday language and tools that fit into a busy
                early-career schedule.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-sarasage-cream">
                Why financial literacy matters
              </h2>
              <p className="mt-2">
                The first few years of work are full of invisible decisions:
                understanding compensation, choosing savings rates, making sense
                of inflation, and deciding when to spend or wait. Small choices
                compound. Sarasage exists to make those choices visible, so you
                can align money with the life you&apos;re building.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-sarasage-cream">
                Who Sarasage is for
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Young professionals in their first few years of work.</li>
                <li>
                  Early-career women navigating salary, saving, and investing
                  questions.
                </li>
                <li>
                  Anyone who wants gentle structure around budgeting and
                  day-to-day money choices.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-sarasage-deep/70 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.5)]">
            <h2 className="font-serif text-lg text-sarasage-cream">
              The Sarasage team
            </h2>
            <p className="text-xs text-sarasage-cream/75">
              A small, cross-disciplinary team experimenting at the intersection
              of financial literacy, technology, and community.
            </p>
            <div className="mt-3 space-y-3 text-xs text-sarasage-cream/90">
              {[
                {
                  name: "Laura Clobochar",
                  role: "Project Manager / Business Analyst",
                },
                {
                  name: "Shreya Smitha",
                  role:
                    "Software Developer, Community Manager, Marketing & Growth Lead",
                },
                {
                  name: "Minenhle Dlamini",
                  role: "Product and research",
                },
                {
                  name: "Noémie Ngako",
                  role:
                    "Data, Governance & Ethics Specialist / Philanthropy & Partnerships Lead",
                },
                {
                  name: "Jasmine Anand",
                  role: "Design and storytelling",
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-sarasage-deep/80 p-3"
                >
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-sarasage-sage/40 via-sarasage-gold/40 to-sarasage-deep/80">
                    <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-sarasage-cream">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-sarasage-cream/75">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

