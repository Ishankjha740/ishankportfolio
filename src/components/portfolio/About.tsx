const education = [
  { year: "2025–2026", school: "ISB Hyderabad", program: "Advanced Digital Marketing & Analytics" },
  { year: "2022–2024", school: "Woxsen University", program: "MBA — Analytics & Marketing" },
  { year: "2018–2021", school: "Amity University", program: "BCA — Computer Applications" },
  { year: "2018–2019", school: "Wiztoonz", program: "Diploma in VFX" },
];

const known = [
  "Turning insights into high-performing content",
  "Blending creativity with analytics",
  "Building scalable content systems",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-paper-warm">
      <div className="container">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <span className="label-eyebrow">About</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mt-6">
              A strategist who thinks in <span className="italic">systems</span>, builds in <span className="italic text-terracotta">stories</span>.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pt-4">
            <div className="space-y-6 text-ink-soft text-base md:text-lg leading-relaxed">
              <p>
                I came up through tech and craft—<span className="text-ink">BCA</span> and a
                <span className="text-ink"> diploma in VFX</span>—before sharpening that lens with an
                <span className="text-ink"> MBA in Analytics & Marketing</span> and an advanced
                certification at <span className="text-ink">ISB Hyderabad</span>.
              </p>
              <p>
                That hybrid path is the work: I sit at the intersection of creative, data and systems,
                building brand ecosystems that don't just look good—they perform. Every campaign starts
                with a question, and ends with a number that moved.
              </p>
            </div>

            {/* Known for */}
            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-rule border border-rule">
              {known.map((k, i) => (
                <div key={k} className="bg-paper-warm p-6">
                  <span className="font-serif text-2xl text-terracotta">0{i + 1}</span>
                  <p className="mt-3 text-sm text-ink leading-snug">{k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="label-eyebrow">Education</span>
              <h3 className="font-serif text-3xl md:text-4xl text-ink mt-3">A foundation in craft, code & commerce.</h3>
            </div>
          </div>

          <div className="border-t border-rule">
            {education.map((e, i) => (
              <div
                key={e.school}
                className="group grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-rule items-baseline hover:bg-paper transition-colors duration-500"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="col-span-12 md:col-span-2 text-sm text-ink-soft tabular-nums">{e.year}</div>
                <div className="col-span-12 md:col-span-5 font-serif text-2xl md:text-3xl text-ink">
                  {e.school}
                </div>
                <div className="col-span-12 md:col-span-5 text-ink-soft md:text-right">
                  {e.program}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
