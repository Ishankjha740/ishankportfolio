import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

type Platform = "instagram" | "linkedin" | "youtube";
type Ratio = "landscape" | "portrait" | "square";

const platformIcon: Record<Platform, typeof Instagram> = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

// Placeholder creative grid — swap `src`, `href`, `platform` with real assets later.
// Mixed ratios create the editorial / asymmetric feel.
const works: Array<{
  id: string;
  src: string;
  href: string;
  platform: Platform;
  ratio: Ratio;
  title: string;
  type?: "image" | "video";
}> = [
  {
    id: "w1",
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1920&q=80",
    href: "https://www.instagram.com/",
    platform: "instagram",
    ratio: "landscape",
    title: "Brand campaign — long form",
  },
  {
    id: "w2",
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1080&q=80",
    href: "https://www.instagram.com/",
    platform: "instagram",
    ratio: "portrait",
    title: "Reel cover — story driven",
  },
  {
    id: "w3",
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1350&q=80",
    href: "https://www.linkedin.com/",
    platform: "linkedin",
    ratio: "square",
    title: "Editorial post — leadership voice",
  },
  {
    id: "w4",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1080&q=80",
    href: "https://www.instagram.com/",
    platform: "instagram",
    ratio: "portrait",
    title: "Vertical — culture series",
  },
  {
    id: "w5",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    href: "https://www.youtube.com/",
    platform: "youtube",
    ratio: "landscape",
    title: "YouTube thumbnail — premium edit",
  },
  {
    id: "w6",
    src: "https://images.unsplash.com/photo-1492138645863-2c13855dbf57?auto=format&fit=crop&w=1350&q=80",
    href: "https://www.instagram.com/",
    platform: "instagram",
    ratio: "square",
    title: "Carousel — data storytelling",
  },
  {
    id: "w7",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1080&q=80",
    href: "https://www.linkedin.com/",
    platform: "linkedin",
    ratio: "portrait",
    title: "Thought piece — long caption",
  },
  {
    id: "w8",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80",
    href: "https://www.instagram.com/",
    platform: "instagram",
    ratio: "landscape",
    title: "Hospitality brand — hero frame",
  },
];

const ratioClass: Record<Ratio, string> = {
  // span 2 cols on md+
  landscape: "md:col-span-2 aspect-[16/9]",
  // tall portrait spans 2 rows
  portrait: "md:row-span-2 aspect-[9/16]",
  square: "aspect-square md:aspect-[5/4]",
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {works.map((w) => {
            const Icon = platformIcon[w.platform];
            return (
              <a
                key={w.id}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${w.title} — opens on ${w.platform}`}
                className={`group relative overflow-hidden border-2 border-ink bg-paper-warm transition-transform duration-300 ease-out hover:-translate-y-1 ${ratioClass[w.ratio]}`}
              >
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                {/* hover veil */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300" />

                {/* platform chip */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1.5 border-2 border-ink bg-citrus px-1.5 py-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Icon size={12} className="text-ink" strokeWidth={2.5} />
                  <span className="text-[9px] font-black uppercase tracking-widest text-ink">
                    {w.platform}
                  </span>
                </div>

                {/* arrow */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 border-2 border-ink bg-paper p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={14} className="text-ink" strokeWidth={2.5} />
                </div>

                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="display-heading text-[11px] sm:text-xs leading-tight text-paper text-balance">
                    {w.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
