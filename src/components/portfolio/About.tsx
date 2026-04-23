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
    <section id="about" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="container max-w-6xl">
        {/* Boxed title */}
        <div className="text-center mb-14">
          <div className="inline-block border-2 border-ink px-8 md:px-16 py-5 bg-paper-warm shadow-pop-yellow">
            <h2 className="display-heading text-4xl md:text-6xl lg:text-7xl text-ink">About Me</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl text-ink leading-snug font-bold">
              I'm <span className="bg-citrus px-2">Ishank Jha</span>, Brand Strategist &amp; Content Architect.
            </p>
            <div className="mt-6 space-y-5 text-ink-soft text-base md:text-lg leading-relaxed">
              <p>
                I came up through tech and craft—a <span className="text-ink font-semibold">BCA</span> and a
                <span className="text-ink font-semibold"> diploma in VFX</span>—before sharpening that lens with an
                <span className="text-ink font-semibold"> MBA in Analytics &amp; Marketing</span> and an advanced
                certification at <span className="text-ink font-semibold">ISB Hyderabad</span>.
              </p>
              <p>
                I sit at the intersection of creative, data and systems—building brand ecosystems that don't
                just look good, they perform. Every campaign starts with a question, and ends with a number
                that moved.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-ink border-2 border-ink">
              {[
                { n: "6.5L+", l: "Reach Scaled" },
                { n: "12+", l: "Brands Shaped" },
                { n: "2+", l: "Years Practice" },
                { n: "5+", l: "Verticals" },
              ].map((s, i) => (
                <div key={s.l} className={`p-6 text-center ${i % 3 === 0 ? 'bg-citrus' : 'bg-ink text-paper'}`}>
                  <div className={`display-heading text-3xl md:text-4xl ${i % 3 === 0 ? 'text-ink' : 'text-citrus'}`}>{s.n}</div>
                  <div className={`text-[10px] uppercase tracking-[0.2em] mt-2 font-bold ${i % 3 === 0 ? 'text-ink' : 'text-paper/70'}`}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* What I Do */}
            <div className="mt-8">
              <h3 className="display-heading text-xl text-ink mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-citrus" /> What I Do?
              </h3>
              <div className="space-y-px bg-ink border-2 border-ink">
                {known.map((k, i) => (
                  <div key={k.t} className="bg-paper-warm p-4 flex items-start gap-4 hover:bg-citrus transition-colors duration-300">
                    <span className="display-heading text-2xl text-ink">0{i + 1}</span>
                    <div>
                      <p className="text-ink font-bold uppercase tracking-wider text-sm">{k.t}</p>
                      <p className="text-ink-soft text-sm mt-1 leading-relaxed">{k.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div className="mt-20">
          <h3 className="display-heading text-xl text-ink mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-citrus" /> Education
          </h3>
          <div className="border-t-2 border-ink">
            {education.map((e) => (
              <div
                key={e.school}
                className="group grid grid-cols-12 gap-4 py-5 border-b border-ink/15 items-center hover:bg-citrus/30 transition-colors duration-300 px-2"
              >
                <div className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.18em] font-bold text-ink-soft tabular-nums">{e.year}</div>
                <div className="col-span-12 md:col-span-5 display-heading text-xl text-ink">{e.school}</div>
                <div className="col-span-12 md:col-span-5 text-ink-soft md:text-right text-sm">{e.program}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
