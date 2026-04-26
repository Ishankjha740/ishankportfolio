import { ArrowUpRight } from "lucide-react";

type Ratio = "portrait" | "square";

// Auto-import every image in src/assets/works as a hashed URL
const imageModules = import.meta.glob("@/assets/works/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

// Detect ratio from filename heuristic via known portrait set
const portraitSet = new Set([
  "work-1.png",
  "work-11.png",
  "work-18.png",
  "work-20.png",
  "work-26.png",
  "work-28.png",
]);

const works = Object.entries(imageModules)
  .map(([path, src]) => {
    const name = path.split("/").pop() ?? "";
    const ratio: Ratio = portraitSet.has(name) ? "portrait" : "square";
    return { id: name, src, ratio, title: "Creative work" };
  })
  .sort((a, b) => {
    const an = parseInt(a.id.replace(/\D/g, ""), 10);
    const bn = parseInt(b.id.replace(/\D/g, ""), 10);
    return an - bn;
  });

const ratioClass: Record<Ratio, string> = {
  portrait: "md:row-span-2 aspect-[4/5]",
  square: "aspect-square",
};

export const CreativeWorks = () => {
  return (
    <section id="creative-works" className="py-16 md:py-28 bg-paper">
      <div className="container max-w-6xl">
        <div className="text-center mb-3 md:mb-4">
          <div className="inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper-warm shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">Works</h2>
          </div>
        </div>
        <p className="text-center label-eyebrow mb-10 md:mb-14">
          Selected creative across platforms
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[240px]">
          {works.map((w) => (
            <div
              key={w.id}
              className={`group relative overflow-hidden border-2 border-ink bg-paper-warm transition-transform duration-300 ease-out hover:-translate-y-1 ${ratioClass[w.ratio]}`}
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              {/* hover veil */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />
              {/* arrow accent */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 border-2 border-ink bg-citrus p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight size={14} className="text-ink" strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
