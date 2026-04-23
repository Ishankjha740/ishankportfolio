import portrait from "@/assets/ishank-portrait.jpg";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container">
        {/* Top meta line */}
        <div className="flex items-center justify-between mb-12 md:mb-20 fade-in">
          <span className="label-eyebrow">Portfolio / 2026</span>
          <span className="label-eyebrow hidden sm:block">Hyderabad → Worldwide</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <p className="label-eyebrow mb-6 fade-up">Data-driven Social Media & Brand Strategist</p>
            <h1 className="font-serif text-[14vw] sm:text-[10vw] lg:text-[8.5vw] xl:text-[7.5rem] leading-[0.92] tracking-[-0.02em] text-ink fade-up delay-100">
              Ishank
              <br />
              <span className="italic font-light">Jha</span>
            </h1>

            <div className="mt-10 max-w-xl fade-up delay-300">
              <p className="text-base md:text-lg text-ink-soft leading-relaxed text-balance">
                Blending creative storytelling with sharp analytics to build high-performing
                digital ecosystems. Known for turning insights into impact—scaling engagement,
                driving adoption, and making content actually work.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 fade-up delay-400">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-terracotta transition-colors duration-500"
              >
                View Work
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-500"
              >
                <ArrowDownToLine size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 fade-up delay-200">
            <div className="relative">
              <div className="absolute -inset-3 md:-inset-5 border border-rule -z-10 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5" />
              <div className="aspect-[4/5] w-full overflow-hidden bg-paper-warm">
                <img
                  src={portrait}
                  alt="Portrait of Ishank Jha, brand strategist"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-paper px-4 py-2 border border-rule">
                <span className="label-eyebrow">Strategist · Storyteller</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 md:mt-32 -mx-6 overflow-hidden border-y border-rule py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 pr-12 font-serif text-2xl md:text-3xl italic text-ink-soft">
                <span>Strategy</span><span className="text-terracotta">✦</span>
                <span>Storytelling</span><span className="text-terracotta">✦</span>
                <span>Analytics</span><span className="text-terracotta">✦</span>
                <span>Brand Building</span><span className="text-terracotta">✦</span>
                <span>Content Systems</span><span className="text-terracotta">✦</span>
                <span>Growth</span><span className="text-terracotta">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
