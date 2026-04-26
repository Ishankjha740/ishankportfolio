import portrait from "@/assets/ishank-portrait.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type Stat = { n: string; l: string; target: number; suffix: string; prefix: string };

const STATS: Stat[] = [
  { n: "6.5L+", l: "Reach Scaled", target: 6.5, suffix: "L+", prefix: "" },
  { n: "2+",    l: "Years Practice", target: 2, suffix: "+", prefix: "" },
  { n: "12+",   l: "Brands Shaped", target: 12, suffix: "+", prefix: "" },
];

const useCountUp = (target: number, startDelay: number, duration = 1200, decimals = 0) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    let intervalId: number | undefined;
    const startTimer = window.setTimeout(() => {
      const steps = 40;
      const stepTime = duration / steps;
      let i = 0;
      intervalId = window.setInterval(() => {
        i += 1;
        const progress = Math.min(i / steps, 1);
        // ease-out
        const eased = 1 - Math.pow(1 - progress, 3);
        setVal(Number((target * eased).toFixed(decimals)));
        if (progress >= 1 && intervalId) {
          window.clearInterval(intervalId);
        }
      }, stepTime);
    }, startDelay);
    return () => {
      window.clearTimeout(startTimer);
      if (intervalId) window.clearInterval(intervalId);
      cancelAnimationFrame(raf);
    };
  }, [target, startDelay, duration, decimals]);
  return val;
};

export const Hero = () => {
  const reach = useCountUp(6.5, 1600, 1400, 1);
  const years = useCountUp(2, 1600, 1200, 0);
  const brands = useCountUp(12, 1600, 1400, 0);
  const counts = [
    `${reach.toFixed(1)}L+`,
    `${Math.round(years)}+`,
    `${Math.round(brands)}+`,
  ];

  return (
    <section id="top" className="relative min-h-[90vh] pt-16 lg:pt-12 pb-16 overflow-hidden bg-paper">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] hero-anim hero-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="grid lg:grid-cols-[1fr_45%] min-h-[90vh] relative">
        {/* LEFT — copy block */}
        <div className="flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-14 lg:py-20 relative">
          {/* yellow strip accent */}
          <span className="hidden lg:block absolute top-0 right-0 w-2 h-32 bg-citrus hero-anim hero-grow-down" style={{ animationDelay: "0.9s" }} />

          <div className="fade-up">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-ink-soft mb-3 hero-anim hero-slide-left" style={{ animationDelay: "0.3s" }}>Hi There!</p>
            <h1 className="display-heading text-[14vw] sm:text-[10vw] lg:text-[6rem] xl:text-[7.5rem] text-ink leading-[1.05] break-words">
              <span className="inline-block hero-anim hero-slide-up" style={{ animationDelay: "0.5s" }}>I'M</span>{" "}
              <span className="relative inline-block pr-[0.08em]">
                <span className="relative z-10 text-ink">ISHANK</span>
                <span className="absolute left-0 right-0 bottom-1 h-[0.55em] bg-citrus -z-0 hero-anim hero-scale-x" style={{ animationDelay: "0.7s" }} aria-hidden />
              </span>
            </h1>
            <div className="mt-5 inline-flex max-w-full items-center bg-citrus border-2 border-ink px-3 sm:px-4 py-2 hero-anim hero-slide-left" style={{ animationDelay: "1.0s" }}>
              <span className="text-ink font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em]">
                Brand Strategist · Content Architect
              </span>
            </div>
          </div>

          <p className="mt-6 sm:mt-8 max-w-xl text-ink-soft text-sm sm:text-base md:text-lg leading-relaxed hero-anim hero-fade-in" style={{ animationDelay: "1.1s" }}>
            I sit where creativity meets data and execution meets scale, leading brand strategy, social ecosystems, and creative direction for brands like The Trilight, Inside Out, Sri Aditya Vantage, Style Chai, The Commons by Incor, and GMR Hyderabad Airport; building
            <span className="text-ink font-semibold"> high-impact digital ecosystems</span> that don't just look good but drive engagement, adoption, and qualified growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 hero-anim hero-slide-up" style={{ animationDelay: "1.3s" }}>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 bg-citrus border-2 border-ink text-ink text-xs sm:text-sm font-black uppercase tracking-wider shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300"
            >
              More About Me
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 border-2 border-ink text-ink text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-ink hover:text-citrus transition-colors duration-300"
            >
              View Work
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Bottom stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-px bg-ink border-2 border-ink max-w-xl hero-anim hero-fade-in" style={{ animationDelay: "1.5s" }}>
            {STATS.map((s, i) => (
              <div key={s.l} className="bg-paper-warm p-3 sm:p-5 text-center">
                <div className="display-heading text-xl sm:text-3xl md:text-4xl text-ink">{counts[i]}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft mt-1 sm:mt-2 font-bold leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Portrait panel */}
        <div className="relative bg-paper-warm border-t-2 lg:border-t-0 lg:border-l-2 border-ink overflow-hidden min-h-[420px] sm:min-h-[500px] lg:min-h-full hero-anim hero-slide-right" style={{ animationDelay: "0.4s" }}>
          {/* yellow corner accents */}
          <span className="absolute top-0 left-0 w-20 h-2 bg-citrus z-20 hero-anim hero-fade-in" style={{ animationDelay: "1.2s" }} />
          <span className="absolute top-0 left-0 w-2 h-20 bg-citrus z-20 hero-anim hero-fade-in" style={{ animationDelay: "1.2s" }} />
          <span className="absolute bottom-0 right-0 w-20 h-2 bg-citrus z-20 hero-anim hero-fade-in" style={{ animationDelay: "1.2s" }} />
          <span className="absolute bottom-0 right-0 w-2 h-20 bg-citrus z-20 hero-anim hero-fade-in" style={{ animationDelay: "1.2s" }} />

          {/* huge background letter */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="display-heading text-[40vw] lg:text-[28rem] text-ink/[0.06] leading-none select-none">IJ</span>
          </div>

          <img
            src={portrait}
            alt="Portrait of Ishank Jha, brand strategist"
            width={1024}
            height={1280}
            className="relative z-10 w-full h-full object-cover object-top grayscale contrast-110 brightness-90"
          />

          {/* Floating yellow tag */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 bg-citrus border-2 border-ink px-3 sm:px-4 py-1.5 sm:py-2 shadow-pop hero-anim hero-fade-in" style={{ animationDelay: "1.4s" }}>
            <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ink">Available · 2026</div>
          </div>

          {/* Vertical Est badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 bg-ink text-citrus px-2.5 sm:px-3 py-3 sm:py-4 border-2 border-ink">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold" style={{ writingMode: 'vertical-rl' }}>
              Est · 2022
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-y-2 border-ink py-4 sm:py-5 bg-ink text-citrus">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 display-heading text-xl sm:text-2xl md:text-3xl">
              <span>STRATEGY</span><span className="text-paper">★</span>
              <span>STORYTELLING</span><span className="text-paper">★</span>
              <span>ANALYTICS</span><span className="text-paper">★</span>
              <span>BRAND BUILDING</span><span className="text-paper">★</span>
              <span>CONTENT SYSTEMS</span><span className="text-paper">★</span>
              <span>GROWTH</span><span className="text-paper">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
