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
    <section id="skills" className="py-24 md:py-36 bg-ink text-paper">
      <div className="container">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-5">
            <span className="label-eyebrow text-paper/60">Skills & Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-6">
              The toolkit, <span className="italic text-terracotta">sharpened.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-paper/70 text-base md:text-lg leading-relaxed">
              A working stack across strategy, platforms and AI—built to move from
              insight to execution without losing the through-line.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
          {groups.map((g) => (
            <div key={g.title} className="bg-ink p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl">{g.title}</h3>
                <span className="text-terracotta text-sm tabular-nums">/{g.items.length.toString().padStart(2, "0")}</span>
              </div>
              <ul className="space-y-3.5">
                {g.items.map((it) => (
                  <li key={it} className="group flex items-baseline gap-3 text-paper/85 hover:text-paper transition-colors">
                    <span className="text-terracotta text-xs">●</span>
                    <span className="text-[15px]">{it}</span>
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
