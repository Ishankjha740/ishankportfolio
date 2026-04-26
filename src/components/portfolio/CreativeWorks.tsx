import { ArrowUpRight, Play } from "lucide-react";
import { useRef } from "react";

type Ratio = "portrait" | "square";
type Kind = "image" | "video";

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

const imageWorks = Object.entries(imageModules)
  .map(([path, src]) => {
    const name = path.split("/").pop() ?? "";
    const ratio: Ratio = portraitSet.has(name) ? "portrait" : "square";
    return { id: name, src, ratio, title: "Creative work", kind: "image" as Kind };
  })
  .sort((a, b) => {
    const an = parseInt(a.id.replace(/\D/g, ""), 10);
    const bn = parseInt(b.id.replace(/\D/g, ""), 10);
    return an - bn;
  });

// Videos served from /public/works-video — optimized 720p, muted, autoplay on hover
const videoFiles: Array<{ file: string; ratio: Ratio }> = [
  { file: "video.mp4", ratio: "portrait" },
  { file: "cheers.mp4", ratio: "portrait" },
  { file: "pour.mp4", ratio: "portrait" },
  { file: "cutlery.mp4", ratio: "portrait" },
  { file: "rgia-skytrax.mp4", ratio: "square" },
  { file: "reel-1.mp4", ratio: "portrait" },
  { file: "reel-2.mp4", ratio: "portrait" },
  { file: "reel-3.mp4", ratio: "square" },
  { file: "fb-1.mp4", ratio: "portrait" },
  { file: "fb-2.mp4", ratio: "portrait" },
];

const videoWorks = videoFiles.map((v) => ({
  id: v.file,
  src: `/works-video/${v.file}`,
  ratio: v.ratio,
  title: "Creative video",
  kind: "video" as Kind,
}));

// Interleave videos through the image grid so the layout feels mixed-media
function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  const max = Math.max(a.length, b.length);
  // place a video roughly every 3 images
  let bi = 0;
  for (let i = 0; i < a.length; i++) {
    out.push(a[i]);
    if ((i + 1) % 3 === 0 && bi < b.length) {
      out.push(b[bi++]);
    }
  }
  while (bi < b.length) out.push(b[bi++]);
  return out;
}

const works = interleave(imageWorks, videoWorks);

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
            <WorkTile key={w.id} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TileProps = {
  id: string;
  src: string;
  ratio: Ratio;
  title: string;
  kind: Kind;
};

const WorkTile = ({ src, ratio, title, kind }: TileProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnter = () => {
    if (kind !== "video" || !videoRef.current) return;
    void videoRef.current.play().catch(() => {
      /* autoplay may be blocked — ignore */
    });
  };

  const handleLeave = () => {
    if (kind !== "video" || !videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative overflow-hidden border-2 border-ink bg-paper-warm transition-transform duration-300 ease-out hover:-translate-y-1 ${ratioClass[ratio]}`}
    >
      {kind === "image" ? (
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      )}
      {/* hover veil */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />
      {/* video badge */}
      {kind === "video" && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 border-2 border-ink bg-paper px-1.5 py-1 group-hover:opacity-0 transition-opacity duration-300">
          <Play size={10} className="text-ink" strokeWidth={2.5} fill="currentColor" />
          <span className="text-[9px] font-black uppercase tracking-widest text-ink">Reel</span>
        </div>
      )}
      {/* arrow accent */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 border-2 border-ink bg-citrus p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <ArrowUpRight size={14} className="text-ink" strokeWidth={2.5} />
      </div>
    </div>
  );
};
