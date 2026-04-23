const roles = [
  {
    period: "Jan 2026 — Present",
    company: "StreeVia Studios",
    title: "Brand Manager",
    points: [
      "Architecting the brand voice, content strategy, and growth engine end-to-end.",
      "Building the systems that turn creative ideas into measurable category presence.",
    ],
  },
  {
    period: "Jul 2025 — Oct 2025",
    company: "UNFPA",
    title: "Social Outreach Volunteer",
    points: [
      "Translated complex public-health narratives into shareable, platform-native content.",
      "Drove awareness campaigns optimized for engagement across youth audiences.",
    ],
  },
  {
    period: "Dec 2025",
    company: "SATHI UP",
    title: "Freelance — Data & Digital Projects",
    points: [
      "Partnered with founders on positioning, content systems and analytics setups.",
      "Delivered audit-to-execution roadmaps that shipped within weeks, not quarters.",
    ],
  },
  {
    period: "Mar 2024 — Jun 2025",
    company: "Cog Culture",
    title: "Management Trainee",
    points: [
      "Led multi-brand social strategy across lifestyle, B2B and tech accounts.",
      "Built reporting frameworks that turned weekly chaos into clear, decisive action.",
    ],
  },
  {
    period: "May 2023 — Jul 2023",
    company: "Magnik India",
    title: "Social Media Marketing Intern",
    points: [
      "Owned content calendars and community ops for a portfolio of D2C brands.",
      "Tested formats that lifted reach by double digits inside the internship window.",
    ],
  },
  {
    period: "Feb 2022 — Jul 2022",
    company: "GMR Hyderabad International Airport",
    title: "Corporate Communications Intern",
    points: [
      "Helped scale official social to ~6.5 lakh monthly reach through structured storytelling.",
      "Coordinated brand comms across stakeholders, partners and on-ground campaigns.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-paper-warm relative overflow-hidden">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-block border-2 border-ink px-8 md:px-16 py-5 bg-paper shadow-pop-yellow">
            <h2 className="display-heading text-4xl md:text-6xl lg:text-7xl text-ink">Resume</h2>
          </div>
        </div>

        <h3 className="display-heading text-xl text-ink mb-6 flex items-center gap-3">
          <span className="w-8 h-1 bg-citrus" /> Experience
        </h3>

        <div className="grid md:grid-cols-2 gap-px bg-ink border-2 border-ink">
          {roles.map((r, i) => (
            <article
              key={r.company + r.period}
              className="group bg-paper p-6 md:p-7 hover:bg-citrus transition-colors duration-300 cursor-default relative"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="display-heading text-2xl text-ink">0{i + 1}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-ink-soft tabular-nums">{r.period}</span>
              </div>
              <h4 className="display-heading text-xl text-ink leading-tight">{r.title}</h4>
              <p className="text-sm font-bold uppercase tracking-wider text-ink-soft mt-1 group-hover:text-ink">— {r.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft group-hover:text-ink/80 leading-relaxed">
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
