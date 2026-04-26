import { Reveal } from "./Reveal";

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
    <section id="work" className="py-16 md:py-28 bg-paper-warm">
      <div className="container max-w-6xl">
        <Reveal className="text-center mb-10 md:mb-12">
          <div className="inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">Portfolio</h2>
          </div>
        </Reveal>

        <div className="space-y-px bg-ink border-2 border-ink">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.n}
              delay={i * 100}
              className="group bg-paper hover:bg-citrus/40 transition-colors duration-300 px-4 sm:px-5 md:px-8 py-6 sm:py-8 md:py-10 cursor-default"
            >
              <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-8 items-start">
                <div className="col-span-12 md:col-span-2">
                  <div className="flex items-center gap-3 md:block">
                    <div className="display-heading text-3xl sm:text-4xl text-ink">{p.n}</div>
                    <div className="md:mt-2 inline-block bg-citrus border border-ink px-2 py-1 text-[10px] font-black uppercase tracking-widest text-ink">
                    {p.tag}
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <h3 className="display-heading text-lg sm:text-xl md:text-2xl leading-tight text-ink text-balance">
                    {p.title}
                  </h3>
                  <div className="mt-3 sm:mt-4 grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-ink-soft">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink mb-1">Context</div>
                      <p className="leading-relaxed">{p.context}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink mb-1">Approach</div>
                      <p className="leading-relaxed">{p.approach}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 border-t-2 md:border-t-0 md:border-l-2 border-ink/40 md:border-ink pt-3 md:pt-0 md:pl-5">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink mb-1">Impact</div>
                  <p className="display-heading text-sm sm:text-base md:text-lg text-ink leading-snug">
                    {p.impact}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
