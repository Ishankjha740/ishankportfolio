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
    company: "Independent",
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
    <section id="experience" className="py-24 md:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="label-eyebrow">Experience</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mt-6">
            Where the work has lived.
          </h2>
        </div>

        <div className="border-t border-ink">
          {roles.map((r, i) => (
            <article
              key={r.company + r.period}
              className="group grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-b border-rule hover:bg-paper-warm/60 transition-colors duration-500 px-2 -mx-2"
            >
              <div className="col-span-12 md:col-span-3">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-soft tabular-nums">{r.period}</div>
                <div className="mt-2 font-serif text-xl text-terracotta">0{i + 1}</div>
              </div>

              <div className="col-span-12 md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink">{r.title}</h3>
                  <span className="text-ink-soft">— {r.company}</span>
                </div>
                <ul className="mt-5 space-y-2.5 max-w-2xl">
                  {r.points.map((p) => (
                    <li key={p} className="text-ink-soft leading-relaxed flex gap-3">
                      <span className="text-terracotta mt-2 h-px w-4 bg-terracotta shrink-0 self-start translate-y-3" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
