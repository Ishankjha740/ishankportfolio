const education = [
  { year: "2025–2026", school: "ISB Hyderabad", program: "Advanced Digital Marketing & Analytics" },
  { year: "2022–2024", school: "Woxsen University", program: "MBA — Analytics & Marketing" },
];

const known = [
  { t: "Insight → Content", d: "Turning research into formats that perform on the feed." },
  { t: "Creative × Data", d: "Pairing instinct with numbers, not one or the other." },
  { t: "Scalable Systems", d: "Building pipelines that ship quality on repeat." },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-28 bg-paper relative overflow-hidden">
      <div className="container max-w-6xl">
        {/* Boxed title */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper-warm shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">About Me</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl md:text-3xl text-ink leading-snug font-bold">
              I build <span className="bg-citrus px-2">brand systems</span> where creative and analytics actually talk to each other.
            </p>
            <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-ink-soft text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Over two years I've shaped <span className="text-ink font-semibold">12+ brands</span> across
                real-estate, hospitality, F&amp;B and lifestyle — scaling reach past
                <span className="text-ink font-semibold"> 6.5 lakh/month</span> and turning content from a cost
                center into a pipeline.
              </p>
              <p>
                Background spans engineering, VFX, and an MBA in analytics, so I can sit equally with a designer,
                a media buyer, or a CFO. <span className="text-ink font-semibold">What you get: a system, not a deliverable.</span>
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
                <div key={s.l} className={`p-4 sm:p-6 text-center ${i % 3 === 0 ? 'bg-citrus' : 'bg-ink text-paper'}`}>
                  <div className={`display-heading text-2xl sm:text-3xl md:text-4xl ${i % 3 === 0 ? 'text-ink' : 'text-citrus'}`}>{s.n}</div>
                  <div className={`text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] mt-1.5 sm:mt-2 font-bold leading-tight ${i % 3 === 0 ? 'text-ink' : 'text-paper/70'}`}>{s.l}</div>
                </div>
              ))}
            </div>

            {/* What I Do */}
            <div className="mt-6 sm:mt-8">
              <h3 className="display-heading text-lg sm:text-xl text-ink mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-citrus" /> What I Do?
              </h3>
              <div className="space-y-px bg-ink border-2 border-ink">
                {known.map((k, i) => (
                  <div key={k.t} className="bg-paper-warm p-3 sm:p-4 flex items-start gap-3 sm:gap-4 hover:bg-citrus transition-colors duration-300">
                    <span className="display-heading text-xl sm:text-2xl text-ink shrink-0">0{i + 1}</span>
                    <div>
                      <p className="text-ink font-bold uppercase tracking-wider text-xs sm:text-sm">{k.t}</p>
                      <p className="text-ink-soft text-xs sm:text-sm mt-1 leading-relaxed">{k.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div className="mt-14 sm:mt-20">
          <h3 className="display-heading text-lg sm:text-xl text-ink mb-5 sm:mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-citrus" /> Education
          </h3>
          <div className="border-t-2 border-ink">
            {education.map((e) => (
              <div
                key={e.school}
                className="group grid grid-cols-12 gap-2 sm:gap-4 py-4 sm:py-5 border-b border-ink/15 items-start md:items-center hover:bg-citrus/30 transition-colors duration-300 px-2"
              >
                <div className="col-span-12 md:col-span-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-bold text-ink-soft tabular-nums">{e.year}</div>
                <div className="col-span-12 md:col-span-5 display-heading text-lg sm:text-xl text-ink mt-1 md:mt-0">{e.school}</div>
                <div className="col-span-12 md:col-span-5 text-ink-soft md:text-right text-xs sm:text-sm mt-1 md:mt-0">{e.program}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
