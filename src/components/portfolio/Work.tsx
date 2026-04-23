const projects = [
  {
    n: "01",
    tag: "Brand Social",
    title: "Scaling GMR Hyderabad's Social to 6.5L+ Monthly Reach",
    context: "Official handles for one of India's busiest international airports needed a sharper editorial identity.",
    approach: "Built a structured content pipeline blending operations, culture and traveller stories—anchored in a recognisable voice.",
    impact: "Scaled to ~6.5 lakh monthly reach with consistent engagement growth across platforms.",
  },
  {
    n: "02",
    tag: "Systems",
    title: "Multi-Platform Content Engine",
    context: "Brands shipping content reactively, with no single source of truth or repeatable rhythm.",
    approach: "Designed a centralised pipeline—briefs, calendars, creative templates and review loops—mapped to platform-native formats.",
    impact: "Cut turnaround time, lifted output volume, and made quality predictable instead of accidental.",
  },
  {
    n: "03",
    tag: "Campaign",
    title: "Campaign-Led Engagement Strategy",
    context: "Cluttered feeds where brand posts disappeared in the noise of the moment.",
    approach: "Layered moment-marketing with shareable formats—hooks built for the algorithm, narratives built for the brand.",
    impact: "Outsized reach on lean budgets; campaigns that traveled beyond the followed audience.",
  },
  {
    n: "04",
    tag: "Positioning",
    title: "Brand Voice & Positioning Refinement",
    context: "Founders with strong product, fuzzy story—being read as commodity in a crowded category.",
    approach: "Tightened the POV, rebuilt the messaging hierarchy, balanced authority with relatability across channels.",
    impact: "A brand that finally sounds like itself—and is remembered for what it stands for.",
  },
  {
    n: "05",
    tag: "Analytics",
    title: "Performance Tracking & Optimization System",
    context: "Dashboards everyone opened, no one used. Decisions made on gut, not signal.",
    approach: "Stood up a single-pane reporting layer with north-star metrics, leading indicators and weekly review rituals.",
    impact: "Shifted teams from reporting to deciding—budgets and creative now move with the data.",
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-24 md:py-36 bg-paper-warm">
      <div className="container">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="label-eyebrow">Selected Work</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mt-6">
              Case studies in <span className="italic text-terracotta">impact.</span>
            </h2>
          </div>
          <span className="label-eyebrow">{projects.length.toString().padStart(2, "0")} projects</span>
        </div>

        <div className="space-y-px bg-rule border-y border-rule">
          {projects.map((p) => (
            <article
              key={p.n}
              className="group bg-paper-warm hover:bg-paper transition-colors duration-500 px-1 md:px-4 py-10 md:py-14 cursor-default"
            >
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="col-span-12 md:col-span-3">
                  <div className="font-serif text-3xl text-ink">{p.n}</div>
                  <div className="mt-2 label-eyebrow text-terracotta">{p.tag}</div>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <h3 className="font-serif text-2xl md:text-[2rem] leading-[1.15] text-ink text-balance">
                    {p.title}
                  </h3>
                  <div className="mt-6 grid sm:grid-cols-2 gap-6 text-sm text-ink-soft">
                    <div>
                      <div className="label-eyebrow mb-2">Context</div>
                      <p className="leading-relaxed">{p.context}</p>
                    </div>
                    <div>
                      <div className="label-eyebrow mb-2">Approach</div>
                      <p className="leading-relaxed">{p.approach}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 md:border-l md:border-rule md:pl-6">
                  <div className="label-eyebrow mb-2">Impact</div>
                  <p className="font-serif text-lg md:text-xl text-ink leading-snug text-balance">
                    {p.impact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
