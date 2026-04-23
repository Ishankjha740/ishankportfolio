import portrait from "@/assets/ishank-portrait.png";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-gradient-paper">
      {/* Vibrant blobs */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-citrus/40 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[26rem] h-[26rem] rounded-full bg-cobalt/30 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 left-1/3 w-[22rem] h-[22rem] rounded-full bg-terracotta/25 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '8s' }} />

      {/* Background grid lines for editorial structure */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="container h-full grid grid-cols-12 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-ink h-full" />
          ))}
        </div>
      </div>

      <div className="container relative">
        {/* Top meta strip */}
        <div className="flex items-center justify-between mb-10 md:mb-16 fade-in">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint/70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="label-eyebrow text-ink">Available for select projects · 2026</span>
          </div>
          <span className="label-eyebrow hidden sm:block text-cobalt">Hyderabad ⟶ Worldwide</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 relative">
            <p className="label-eyebrow mb-6 fade-up flex items-center gap-3 text-ink">
              <span className="h-1 w-10 bg-gradient-citrus rounded-full" />
              Brand &amp; Social Strategist
            </p>
            <h1 className="font-serif text-[16vw] sm:text-[12vw] lg:text-[9vw] xl:text-[8.5rem] leading-[0.88] tracking-[-0.03em] text-ink fade-up delay-100">
              Ishank
              <br />
              <span className="italic font-light text-gradient-hero">Jha</span>
            </h1>

            <div className="mt-10 max-w-xl fade-up delay-300 relative pl-5 border-l-4 border-citrus">
              <p className="text-base md:text-lg text-ink-soft leading-relaxed text-balance">
                I blend creative storytelling with sharp analytics to build
                <span className="text-ink font-medium bg-citrus/40 px-1"> high-performing digital ecosystems</span>—turning
                insights into impact, scaling engagement, and making content actually work.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 fade-up delay-400">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-cobalt transition-all duration-500 shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                View Work
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 border-2 border-ink text-ink text-sm font-medium hover:bg-citrus transition-colors duration-500"
              >
                <ArrowDownToLine size={16} />
                Download Resume
              </a>
            </div>

            {/* Stat strip */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl fade-up delay-500">
              {[
                { n: "6.5L+", l: "Monthly reach scaled", c: "text-terracotta" },
                { n: "2+ yrs", l: "Strategy & comms", c: "text-cobalt" },
                { n: "12+", l: "Brands shaped", c: "text-plum" },
              ].map((s) => (
                <div key={s.l} className="border-t-2 border-ink pt-3">
                  <div className={`font-serif text-2xl md:text-3xl ${s.c}`}>{s.n}</div>
                  <div className="text-xs text-ink-soft mt-1 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 fade-up delay-200">
            <div className="relative">
              {/* Display name backdrop word */}
              <div className="absolute -top-6 -left-2 right-0 font-serif italic text-[18vw] lg:text-[10vw] leading-none text-cobalt/20 select-none pointer-events-none whitespace-nowrap">
                strategist
              </div>

              {/* Color frames — stacked */}
              <div className="absolute inset-0 bg-citrus translate-x-5 translate-y-5" />
              <div className="absolute inset-0 border-2 border-ink translate-x-2 translate-y-2" />

              {/* Portrait block */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-hero border-2 border-ink">
                {/* corner ticks */}
                <span className="absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-paper z-10" />
                <span className="absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-paper z-10" />
                <span className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-paper z-10" />
                <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-paper z-10" />

                <img
                  src={portrait}
                  alt="Portrait of Ishank Jha, brand strategist"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-[1500ms] mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>

              {/* Right side mini badge */}
              <div className="absolute -right-3 top-8 hidden md:flex flex-col items-center gap-2 bg-cobalt text-paper px-2.5 py-4 writing-mode-vertical shadow-pop">
                <span className="text-[10px] tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  Est · 2022
                </span>
              </div>

              {/* Spinning seal */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-ink text-paper flex items-center justify-center hidden md:flex animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path id="circle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text className="fill-current text-[10px] tracking-[0.3em] uppercase font-medium">
                    <textPath href="#circle">Strategy · Story · Scale · </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-20 md:mt-28 -mx-6 overflow-hidden border-y-2 border-ink py-6 bg-gradient-hero text-paper">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 pr-10 font-serif text-2xl md:text-3xl italic">
                <span>Strategy</span><span className="text-citrus">✦</span>
                <span>Storytelling</span><span className="text-citrus">✦</span>
                <span>Analytics</span><span className="text-citrus">✦</span>
                <span>Brand Building</span><span className="text-citrus">✦</span>
                <span>Content Systems</span><span className="text-citrus">✦</span>
                <span>Growth</span><span className="text-citrus">✦</span>
                <span>Performance</span><span className="text-citrus">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
