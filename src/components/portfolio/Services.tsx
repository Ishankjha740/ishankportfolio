import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

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
  const { ref, className } = useReveal<HTMLElement>();
  return (
    <section id="services" ref={ref} className={`py-16 md:py-28 bg-paper ${className}`}>
      <div className="container max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <div className="reveal-up inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper-warm shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">Services</h2>
          </div>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
          {services.map((s, i) => (
            <article
              key={s.n}
              style={{ ["--i" as string]: i }}
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
