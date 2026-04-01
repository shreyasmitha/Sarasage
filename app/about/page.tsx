import Image from "next/image";

export default function AboutPage() {
  const team = [
    {
      name: "Laura Clobochar",
      photo: "/team/laura.png",
      background: "Digital product development + financial industry.",
      atSarasage: "She serves as Project Manager and Business Analyst.",
    },
    {
      name: "Shreya Smitha",
      photo: "/team/shreya.png",
      background: "Engineering + Supply Chain.",
      atSarasage:
        "She serves as Community Manager and Marketing & Growth Lead, and is also in charge of developing the prototype.",
    },
    {
      name: "Noémie Ngako",
      photo: "/team/noemie.png",
      background: "Governance + Client Engagement.",
      atSarasage: "She serves as the Impact, Governance & Strategic Partnerships Lead.",
    },
    {
      name: "Jasmine Anand",
      photo: "/team/jasmine.png",
      background: "Software developer + Machine Learning.",
      atSarasage: "She contributes to technical planning and product insights.",
    },
    {
      name: "Minenhle Dlamini",
      photo: "/team/minenhle.png",
      background:
        "Electrical + Electronics Engineering + Backend Development.",
      atSarasage: "She develops content to ensure that the platform educates effectively and improves its impact on users’ financial literacy and confidence.",
    },
  ];

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
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-lg text-sarasage-cream">
                Who we are
              </h2>
              <p className="mt-2">
                Sarasage was born from within the Women@Dior 2025-2026 Program.
                Developed under this prestigious international mentorship
                initiative, our mission is to make money conversation feel calm,
                clear, and grounded in real life. We believe that financial
                independence is the cornerstone of autonomy, yet millions of
                women around the world still encounter systemic barriers to
                managing their own wealth. To solve this, we are building a
                &quot;Financial Big Sister&quot;; a digital space where complex
                economic data is transformed into calm, actionable wisdom.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-sarasage-cream">
                The meaning behind our name
              </h2>
              <p className="mt-2">
                The name Sarasage represents the perfect balance between ancient
                wisdom and modern financial awareness. It is a tribute to
                Saraswati, the Hindu goddess of knowledge, music, art, speech,
                wisdom, and learning. By combining her name with
                &quot;Sage,&quot; we honor the tradition of female enlightenment
                while positioning our users to become experts in their own
                financial lives.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-sarasage-cream">
                Our symbol: the lotus
              </h2>
              <p className="mt-2">
                Our icon is the Lotus, the sacred flower upon which Goddess
                Saraswati rests. Just as the lotus blooms beautifully even in
                murky waters, Sarasage empowers women to rise above financial
                complexity and &quot;bloom&quot; into their full potential. It
                is our symbol of resilience, growth, and the quiet confidence
                that comes with mastering your own money.
              </p>
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
            <div className="mt-3 space-y-4 text-xs text-sarasage-cream/90">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-sarasage-deep/80 p-3"
                >
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-sarasage-deep/80">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <p className="text-[13px] font-medium leading-tight text-sarasage-cream">
                      {member.name}
                    </p>
                    <p className="text-[11px] leading-snug text-sarasage-cream/85">
                      <span className="text-sarasage-cream/70">Background:</span>{" "}
                      {member.background}
                    </p>
                    <p className="text-[11px] leading-snug text-sarasage-cream/85">
                      <span className="text-sarasage-cream/70">At Sarasage:</span>{" "}
                      {member.atSarasage}
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
