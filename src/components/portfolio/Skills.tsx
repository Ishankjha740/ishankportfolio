const groups = [
  {
    title: "Core Expertise",
    items: [
      "Social Media Strategy & Brand Building",
      "Content Strategy & Storytelling",
      "Data-Driven Marketing & Optimization",
      "Campaign Planning & Execution",
      "Audience Growth & Engagement",
      "Cross-Platform Content Systems",
      "Brand Positioning & Ecosystem Thinking",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Meta Business Suite",
      "LinkedIn Campaign Manager",
      "X Pro",
      "Google Analytics",
      "YouTube Studio",
      "Adobe Suite — Ps · Ai · Pr · Ae",
      "Canva",
    ],
  },
  {
    title: "AI & Workflow",
    items: [
      "ChatGPT · Claude · Gemini",
      "Genspark · Higgsfield",
      "Eleven Labs",
      "AI-led content scaling",
      "Automation & workflow design",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-10 md:py-28 bg-ink text-paper">
      <div className="container max-w-6xl">
        <div className="text-center mb-6 md:mb-14">
          <div className="inline-block border-2 border-citrus px-5 sm:px-8 md:px-16 py-3 sm:py-5 bg-ink shadow-pop-yellow">
            <h2 className="display-heading text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-citrus">Skills</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-citrus border-2 border-citrus">
          {groups.map((g) => (
            <div key={g.title} className="bg-ink p-4 sm:p-7 hover:bg-paper hover:text-ink transition-colors duration-300 group">
              <div className="flex items-center justify-between mb-3 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-citrus group-hover:border-ink">
                <h3 className="display-heading text-base sm:text-lg">{g.title}</h3>
                <span className="text-citrus group-hover:text-ink text-xs tabular-nums font-bold">/{g.items.length.toString().padStart(2, "0")}</span>
              </div>
              <ul className="space-y-2 sm:space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-baseline gap-3 text-xs sm:text-sm">
                    <span className="h-1 w-1 bg-citrus group-hover:bg-ink shrink-0 translate-y-[-2px]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
