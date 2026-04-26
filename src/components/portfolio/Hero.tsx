import portrait from "@/assets/ishank-portrait.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";

type Stat = { n: string; l: string; value: number; format: (v: number) => string };

const stats: Stat[] = [
  {
    n: "6.5L+",
    l: "Reach Scaled",
    value: 6.5,
    format: (v) => `${v.toFixed(1)}L+`,
  },
  {
    n: "2+",
    l: "Years Practice",
    value: 2,
    format: (v) => `${Math.round(v)}+`,
  },
  {
    n: "12+",
    l: "Brands Shaped",
    value: 12,
    format: (v) => `${Math.round(v)}+`,
  },
];

const StatCard = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const v = useCountUp(stat.value, start, 1400);
  return (
    <div className="bg-paper-warm p-3 sm:p-5 text-center card-hover">
      <div className="display-heading text-xl sm:text-3xl md:text-4xl text-ink tabular-nums">
        {stat.format(v)}
      </div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft mt-1 sm:mt-2 font-bold leading-tight">
        {stat.l}
      </div>
    </div>
  );
};

export const Hero = () => {
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState(0);
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLDivElement>();

  // Subtle vertical parallax for the portrait panel — capped at ±40px so it
  // never overlaps neighbouring sections.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const el = portraitRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * 0.06;
      setParallax(Math.max(-40, Math.min(40, offset)));
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[90vh] pt-16 lg:pt-12 pb-16 overflow-hidden bg-paper">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--ink)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="grid lg:grid-cols-[1fr_45%] min-h-[90vh] relative">
        {/* LEFT — copy block */}
        <div className="flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-14 lg:py-20 relative">
          {/* yellow strip accent */}
          <span className="hidden lg:block absolute top-0 right-0 w-2 h-32 bg-citrus" />

          <div className="fade-up">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-ink-soft mb-3">Hi There!</p>
            <h1 className="display-heading text-[14vw] sm:text-[10vw] lg:text-[6rem] xl:text-[7.5rem] text-ink leading-[1.05] break-words">
              I'M{" "}
              <span className="relative inline-block pr-[0.08em]">
                <span className="relative z-10 text-ink">ISHANK</span>
                <span className="absolute left-0 right-0 bottom-1 h-[0.55em] bg-citrus -z-0" aria-hidden />
              </span>
            </h1>
            <div className="mt-5 inline-flex max-w-full items-center bg-citrus border-2 border-ink px-3 sm:px-4 py-2">
              <span className="text-ink font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em]">
                Brand Strategist · Content Architect
              </span>
            </div>
          </div>

          <p className="mt-6 sm:mt-8 max-w-xl text-ink-soft text-sm sm:text-base md:text-lg leading-relaxed fade-up delay-200">
            I sit where creativity meets data and execution meets scale, leading brand strategy, social ecosystems, and creative direction for brands like The Trilight, Inside Out, Sri Aditya Vantage, Style Chai, The Commons by Incor, and GMR Hyderabad Airport; building
            <span className="text-ink font-semibold"> high-impact digital ecosystems</span> that don't just look good but drive engagement, adoption, and qualified growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 fade-up delay-300">
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
          <div
            ref={statsRef}
            className="mt-10 sm:mt-14 grid grid-cols-3 gap-px bg-ink border-2 border-ink max-w-xl fade-up delay-500"
          >
            {stats.map((s) => (
              <StatCard key={s.l} stat={s} start={statsVisible} />
            ))}
          </div>
        </div>

        {/* RIGHT — Portrait panel */}
        <div
          ref={portraitRef}
          className="relative bg-paper-warm border-t-2 lg:border-t-0 lg:border-l-2 border-ink overflow-hidden min-h-[420px] sm:min-h-[500px] lg:min-h-full fade-in"
        >
          {/* yellow corner accents */}
          <span className="absolute top-0 left-0 w-20 h-2 bg-citrus z-20" />
          <span className="absolute top-0 left-0 w-2 h-20 bg-citrus z-20" />
          <span className="absolute bottom-0 right-0 w-20 h-2 bg-citrus z-20" />
          <span className="absolute bottom-0 right-0 w-2 h-20 bg-citrus z-20" />

          {/* huge background letter */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="display-heading text-[40vw] lg:text-[28rem] text-ink/[0.06] leading-none select-none">IJ</span>
          </div>

          <img
            src={portrait}
            alt="Portrait of Ishank Jha, brand strategist"
            width={1024}
            height={1280}
            className="relative z-10 w-full h-full object-cover object-top grayscale contrast-110 brightness-90 will-change-transform"
            style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
          />

          {/* Floating yellow tag */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 bg-citrus border-2 border-ink px-3 sm:px-4 py-1.5 sm:py-2 shadow-pop">
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
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 display-heading text-xl sm:text-2xl md:text-3xl" aria-hidden={i === 1}>
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
