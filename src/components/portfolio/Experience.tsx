import { useReveal } from "@/hooks/use-reveal";

const roles = [
  {
    period: "Jan 2026 — Present",
    company: "StreeVia Studios",
    title: "Brand Manager",
    points: [
      "Leading end-to-end brand strategy, social ecosystems, and creative direction across premium and lifestyle brands.",
      "Building performance-led content systems aligned with positioning, engagement, and growth metrics.",
      "Streamlining workflows, managing cross-functional teams, and driving execution at scale.",
    ],
  },
  {
    period: "Jul 2025 — Oct 2025",
    company: "UNFPA",
    title: "Social Outreach Volunteer",
    points: [
      "Shaped digital awareness strategy for \u201CJustAsk! Khulke Poocho!\u201D chatbot ecosystem.",
      "Designed media plans, content systems, and campaigns that drove 1,000+ user growth.",
      "Translated public-health narratives into high-engagement, platform-native content.",
    ],
  },
  {
    period: "Dec 2025",
    company: "SATHI UP",
    title: "Freelance — Data & Digital Projects",
    points: [
      "Built end-to-end data workflows, collection, analysis, and insight delivery for decision-making.",
      "Developed reporting systems and insight decks to track performance and optimise outcomes.",
      "Refined digital platforms (website + classroom) to improve clarity, structure, and UX.",
    ],
  },
  {
    period: "Mar 2024 — Jun 2025",
    company: "Cog Culture",
    title: "Management Trainee",
    points: [
      "Managed multi-platform social ecosystems reaching ~6.5 lakh users/month.",
      "Led content planning, execution, and analytics across Instagram, LinkedIn, X, and YouTube.",
      "Drove 25% MoM engagement growth through data-led optimisation and content refinement.",
      "Directed shoots and aligned creative output with brand voice and performance goals.",
    ],
  },
  {
    period: "May 2023 — Jul 2023",
    company: "Magnik India",
    title: "Social Media Marketing Intern",
    points: [
      "Built lead-gen creatives and campaign CTAs, driving a 12% increase in qualified leads.",
      "Managed content calendars and contributed to D2C growth through performance testing.",
      "Supported email and social campaigns to improve outreach and conversions.",
    ],
  },
  {
    period: "Feb 2022 — Jul 2022",
    company: "GMR Hyderabad International Airport",
    title: "Corporate Communications Intern",
    points: [
      "Created social content, edited videos, and supported brand communications across platforms.",
      "Assisted in campaign execution, stakeholder coordination, and on-ground event coverage.",
      "Contributed to consistent storytelling across digital and physical brand touchpoints.",
    ],
  },
];

export const Experience = () => {
  const { ref, className } = useReveal<HTMLElement>();
  return (
    <section
      id="experience"
      ref={ref}
      className={`py-16 md:py-28 bg-paper-warm relative overflow-hidden ${className}`}
    >
      <div className="container max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <div className="reveal-up inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">Resume</h2>
          </div>
        </div>

        <h3 className="reveal-left stagger-1 display-heading text-lg sm:text-xl text-ink mb-5 sm:mb-6 flex items-center gap-3">
          <span className="w-8 h-1 bg-citrus" /> Experience
        </h3>

        <div className="stagger-children grid md:grid-cols-2 gap-px bg-ink border-2 border-ink">
          {roles.map((r, i) => (
            <article
              key={r.company + r.period}
              style={{ ["--i" as string]: i }}
              className="group bg-paper p-5 sm:p-6 md:p-7 hover:bg-citrus transition-colors duration-300 cursor-default relative"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="display-heading text-2xl text-ink">0{i + 1}</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] font-bold text-ink-soft tabular-nums text-right">{r.period}</span>
              </div>
              <h4 className="display-heading text-lg sm:text-xl text-ink leading-tight">{r.title}</h4>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-soft mt-1 group-hover:text-ink">— {r.company}</p>
              <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm text-ink-soft group-hover:text-ink/80 leading-relaxed">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-ink mt-2 h-px w-3 bg-ink shrink-0 translate-y-2" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
