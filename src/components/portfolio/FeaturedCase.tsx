import { ArrowUpRight } from "lucide-react";

const metrics = [
  { n: "6.5L+", l: "Avg. Monthly Reach" },
  { n: "+25%",  l: "MoM Engagement" },
  { n: "5",     l: "Platforms Orchestrated" },
];

export const FeaturedCase = () => {
  return (
    <section
      id="featured-case"
      aria-labelledby="featured-case-title"
      className="py-16 md:py-28 bg-ink text-paper relative overflow-hidden"
    >
      <div className="container max-w-6xl">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="w-8 h-1 bg-citrus" />
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-citrus">
            Featured Case Study
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h2
              id="featured-case-title"
              className="display-heading text-3xl sm:text-5xl md:text-6xl leading-[1.05] text-paper"
            >
              GMR Hyderabad Airport —{" "}
              <span className="bg-citrus text-ink px-2">a social engine that flies on data.</span>
            </h2>

            <div className="mt-8 grid sm:grid-cols-3 gap-px bg-paper/20 border border-paper/20">
              {[
                { k: "Client", v: "GMR Hyderabad Intl. Airport" },
                { k: "Role",   v: "Strategy · Ops · Analytics" },
                { k: "Scope",  v: "Instagram · LinkedIn · X · FB · YouTube" },
              ].map((m) => (
                <div key={m.k} className="bg-ink p-3 sm:p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-citrus font-bold">{m.k}</div>
                  <div className="text-paper text-sm mt-1.5 leading-snug">{m.v}</div>
                </div>
              ))}
            </div>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-[10px] font-black uppercase tracking-[0.3em] text-citrus">Challenge</dt>
                <dd className="mt-2 text-paper/85 text-base sm:text-lg leading-relaxed">
                  Maintain a consistent, data-driven social presence across five platforms — without
                  diluting brand alignment or fragmenting the audience experience.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-black uppercase tracking-[0.3em] text-citrus">Approach</dt>
                <dd className="mt-2 text-paper/85 text-base sm:text-lg leading-relaxed">
                  Owned the full loop: content strategy, stakeholder coordination, analytics review and
                  day-to-day operations — paired with platform-specific creative built around what the
                  numbers actually moved.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-black uppercase tracking-[0.3em] text-citrus">Outcome</dt>
                <dd className="mt-2 text-paper/85 text-base sm:text-lg leading-relaxed">
                  Engagement up <span className="text-paper font-bold">25% month-over-month</span>,
                  with an average audience of <span className="text-paper font-bold">6.5 lakh users every month</span>.
                </dd>
              </div>
            </dl>
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="border-2 border-citrus bg-ink/60 backdrop-blur-sm">
              {metrics.map((m, i) => (
                <div
                  key={m.l}
                  className={`p-5 sm:p-6 text-center ${
                    i < metrics.length - 1 ? "border-b border-citrus/30" : ""
                  }`}
                >
                  <div className="display-heading text-4xl sm:text-5xl text-citrus">{m.n}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-paper/70 mt-2 font-bold">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-5 flex items-center justify-between gap-3 px-5 py-4 bg-citrus border-2 border-citrus text-ink text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-paper hover:border-paper transition-colors"
            >
              Want results like this?
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};