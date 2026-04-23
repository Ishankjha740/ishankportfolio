const education = [
  { year: "2025–2026", school: "ISB Hyderabad", program: "Advanced Digital Marketing & Analytics" },
  { year: "2022–2024", school: "Woxsen University", program: "MBA — Analytics & Marketing" },
  { year: "2018–2021", school: "Amity University", program: "BCA — Computer Applications" },
  { year: "2018–2019", school: "Wiztoonz", program: "Diploma in VFX" },
];

const known = [
  { t: "Insight → Content", d: "Turning research into formats that perform on the feed." },
  { t: "Creative × Data", d: "Pairing instinct with numbers, not one or the other." },
  { t: "Scalable Systems", d: "Building pipelines that ship quality on repeat." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-paper-warm relative overflow-hidden">
      {/* Floating numeral */}
      <div className="absolute -top-10 right-4 md:right-12 font-serif text-[12rem] md:text-[18rem] leading-none text-ink/[0.04] select-none pointer-events-none">
        02
      </div>

      <div className="container relative">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-terracotta" />
              <span className="label-eyebrow">About — 02</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              A strategist who thinks in <span className="italic">systems</span>,
              <br />
              builds in <span className="italic text-terracotta">stories</span>.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pt-4">
            <div className="space-y-6 text-ink-soft text-base md:text-lg leading-relaxed">
              <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:text-terracotta first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                I came up through tech and craft—a <span className="text-ink">BCA</span> and a
                <span className="text-ink"> diploma in VFX</span>—before sharpening that lens with an
                <span className="text-ink"> MBA in Analytics & Marketing</span> and an advanced
                certification at <span className="text-ink">ISB Hyderabad</span>.
              </p>
              <p>
                That hybrid path is the work: I sit at the intersection of creative, data and systems,
                building brand ecosystems that don't just look good—they perform. Every campaign starts
                with a question, and ends with a number that moved.
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-ink pt-4 border-t border-rule">
                "Make the strategy obvious in hindsight, and the execution sharp enough to be remembered."
              </p>
            </div>

            {/* Known for */}
            <div className="mt-12">
              <div className="label-eyebrow mb-4">What I'm known for</div>
              <div className="grid sm:grid-cols-3 gap-px bg-rule border border-rule">
                {known.map((k, i) => (
                  <div key={k.t} className="bg-paper-warm p-6 group hover:bg-paper transition-colors duration-500">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-terracotta">0{i + 1}</span>
                      <span className="h-px w-6 bg-ink/20 group-hover:w-10 group-hover:bg-terracotta transition-all duration-500" />
                    </div>
                    <p className="mt-4 text-ink font-medium leading-snug">{k.t}</p>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{k.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-terracotta" />
                <span className="label-eyebrow">Education</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-ink">A foundation in craft, code & commerce.</h3>
            </div>
            <span className="label-eyebrow text-ink-soft tabular-nums">2018 — 2026</span>
          </div>

          <div className="border-t border-ink">
            {education.map((e, i) => (
              <div
                key={e.school}
                className="group grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-rule items-baseline hover:bg-paper transition-colors duration-500 cursor-default"
              >
                <div className="col-span-12 md:col-span-2 text-sm text-ink-soft tabular-nums flex items-center gap-3">
                  <span className="text-terracotta opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {e.year}
                </div>
                <div className="col-span-12 md:col-span-5 font-serif text-2xl md:text-3xl text-ink group-hover:text-terracotta transition-colors duration-500">
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
