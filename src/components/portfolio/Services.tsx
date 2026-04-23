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
    <section id="services" className="py-24 md:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="label-eyebrow">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mt-6">
            Strategy → execution → <span className="italic text-terracotta">results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative bg-paper p-8 md:p-10 hover:bg-paper-warm transition-colors duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-serif text-sm text-ink-soft tabular-nums">{s.n}</span>
                <ArrowUpRight
                  size={18}
                  className="text-ink-soft transition-all duration-500 group-hover:text-terracotta group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-[1.65rem] leading-tight text-ink">{s.title}</h3>
              <p className="mt-4 text-ink-soft text-[15px] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
