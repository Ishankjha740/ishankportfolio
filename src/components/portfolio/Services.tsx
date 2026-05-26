import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Social Media Strategy",
    desc: "Platform-native strategy that maps audience, narrative and cadence to clear business outcomes.",
  },
  {
    n: "02",
    title: "Content & Creative Direction",
    desc: "Editorial direction that turns brand thinking into shareable formats people actually stop for.",
  },
  {
    n: "03",
    title: "Brand Building & Positioning",
    desc: "Sharpening voice, ecosystem and category POV—from audit to a defensible point of view.",
  },
  {
    n: "04",
    title: "Performance Marketing & Optimization",
    desc: "Paid + organic loops engineered to compound. Test, learn, scale—without burning the brand.",
  },
  {
    n: "05",
    title: "Analytics & Growth Systems",
    desc: "Reporting that drives decisions: dashboards, north-star metrics and weekly operating rhythm.",
  },
  {
    n: "06",
    title: "End-to-End Social Management",
    desc: "Strategy → calendar → creative → publishing → community → reporting. One owner, one system.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-10 md:py-28 bg-paper">
      <div className="container max-w-6xl">
        <div className="text-center mb-6 md:mb-14">
          <div className="inline-block border-2 border-ink px-5 sm:px-8 md:px-16 py-3 sm:py-5 bg-paper-warm shadow-pop-yellow">
            <h2 className="display-heading text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">Services</h2>
          </div>
        </div>

        {/* Mobile: horizontal snap carousel. Desktop: grid */}
        <div className="md:hidden flex snap-row overflow-x-auto -mx-5 px-5 gap-3 pb-2">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative shrink-0 w-[78%] border-2 border-ink bg-paper-warm p-5"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="display-heading text-3xl text-ink">{s.n}</span>
                <ArrowUpRight size={18} className="text-ink opacity-60" />
              </div>
              <h3 className="display-heading text-base leading-tight text-ink">{s.title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-ink-soft">{s.desc}</p>
            </article>
          ))}
        </div>
        <p className="md:hidden mt-2 text-center text-[10px] uppercase tracking-[0.2em] font-bold text-ink-soft">
          Swipe →
        </p>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-paper-warm p-5 sm:p-7 hover:bg-citrus transition-colors duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <span className="display-heading text-3xl text-ink">{s.n}</span>
                <ArrowUpRight
                  size={20}
                  className="text-ink opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
              <h3 className="display-heading text-base sm:text-lg leading-tight text-ink">{s.title}</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-soft group-hover:text-ink">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
