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
    <section id="services" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-cobalt/10 blur-3xl pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <span className="label-eyebrow">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mt-6">
            Strategy → execution → <span className="italic text-gradient-hero">results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
          {services.map((s, i) => {
            const hovers = [
              'hover:bg-citrus',
              'hover:bg-terracotta hover:text-paper',
              'hover:bg-cobalt hover:text-paper',
              'hover:bg-mint hover:text-paper',
              'hover:bg-plum hover:text-paper',
              'hover:bg-citrus',
            ];
            return (
              <article
                key={s.n}
                className={`group relative bg-paper p-8 md:p-10 transition-colors duration-500 cursor-default ${hovers[i]}`}
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="font-serif text-sm tabular-nums opacity-60">{s.n}</span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <h3 className="font-serif text-2xl md:text-[1.65rem] leading-tight">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed opacity-75 group-hover:opacity-100">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
