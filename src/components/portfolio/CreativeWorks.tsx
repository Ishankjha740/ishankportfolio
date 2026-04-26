import { ArrowUpRight, Play } from "lucide-react";
import { useRef } from "react";

type Ratio = "portrait" | "square";
type Kind = "image" | "video" | "youtube";

// External redirect links per asset
// Division 1 maps the first 12 images and the 10 reels (videos)
// Division 2 maps the remaining 16 images (work-13 .. work-28)
const imageLinks: Record<string, string> = {
  // Division 1
  "work-1.png": "https://www.instagram.com/p/DJo6cKvvr39/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-2.png": "https://www.instagram.com/p/DG6xVZdCfN6/",
  "work-3.png": "https://www.instagram.com/p/DEyTM3zusUc/",
  "work-4.png": "https://www.instagram.com/p/DWltAy9kkDk/",
  "work-5.png": "https://www.linkedin.com/feed/update/urn:li:activity:7302691177214976000",
  "work-6.png": "https://www.linkedin.com/feed/update/urn:li:activity:7311967906257371137",
  "work-7.png": "https://www.instagram.com/p/DWrHMOGkhTx/",
  "work-8.png": "https://www.instagram.com/p/DGEspZpC9eb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-9.png": "https://www.instagram.com/p/DIgZu_OJ9d4/",
  "work-10.png": "https://www.instagram.com/p/DU0ukjFkkhd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-11.png": "https://www.instagram.com/p/DIpfnhnNcN3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-12.png": "https://www.instagram.com/p/DHKOGjPhmZh/",
  // Division 2
  "work-13.png": "https://www.instagram.com/p/DEmN1QdxaOx/",
  "work-14.png": "https://www.linkedin.com/feed/update/urn:li:activity:7275824452871888896",
  "work-15.png": "https://www.linkedin.com/feed/update/urn:li:activity:7277552997327388672",
  "work-16.png": "https://www.linkedin.com/feed/update/urn:li:activity:7284788842505654273",
  "work-17.png": "https://www.linkedin.com/feed/update/urn:li:activity:7307722721147195392",
  "work-18.png": "https://www.linkedin.com/feed/update/urn:li:activity:7308365510700584960",
  "work-19.png": "https://www.instagram.com/p/DWDTOLikkb9/",
  "work-20.png": "https://www.instagram.com/p/DBIdk9htXkD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-21.png": "https://www.instagram.com/p/DDj7HxQNLYD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-22.png": "https://www.instagram.com/p/C7WpePPSHso/",
  "work-23.png": "https://www.instagram.com/p/DCc9G6JP6FX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "work-24.png": "https://www.linkedin.com/feed/update/urn:li:activity:7271034943072284672",
  "work-25.png": "https://www.instagram.com/p/DWtlIFok3dd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
};

const videoLinks: Record<string, string> = {
  // Reel 1..5, 7, 8, 9, 11, 12 (Division 1)
  "video.mp4": "https://www.instagram.com/reel/C6p_61otJpp/",
  "cheers.mp4": "https://www.instagram.com/p/DWbuIAsAUTU/",
  "pour.mp4": "https://www.instagram.com/p/DWWbfANEnv2/",
  "cutlery.mp4": "https://www.instagram.com/p/DWZVaxwjZO5/",
  "rgia-skytrax.mp4": "https://youtu.be/E27koNVGnUo?si=0SUrhb68otnXs3WK",
  "reel-1.mp4": "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTQ5MDk4OTc5MTA2Nzc1?story_media_id=3855940173892735552_60513541209&igsh=NG9jdTVyYTNvMG1q",
  "reel-2.mp4": "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTQ5MDk4OTc5MTA2Nzc1?story_media_id=3848020089849267759_60513541209&igsh=NG9jdTVyYTNvMG1q",
  "reel-3.mp4": "https://www.linkedin.com/posts/gmr-aero-technic_happywomensday-womeninaviation-leadership-activity-7303746718007791616-1XVY?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY-3wBAyRHCfA7hiY6h9B0Pjb4fHbRLcY",
  "fb-1.mp4": "https://www.instagram.com/p/DHKOI35y06c/",
  "fb-2.mp4": "https://www.instagram.com/p/DIbVOtWS8Td/",
};

// Auto-import every image in src/assets/works as a hashed URL
const imageModules = import.meta.glob("@/assets/works/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

// Uniform square tiles for images for a clean, predictable grid
const imageWorks = Object.entries(imageModules)
  .map(([path, src]) => {
    const name = path.split("/").pop() ?? "";
    return {
      id: name,
      src,
      ratio: "square" as Ratio,
      title: "Creative work",
      kind: "image" as Kind,
      href: imageLinks[name],
    };
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
  { file: "rgia-skytrax.mp4", ratio: "portrait" },
  { file: "reel-1.mp4", ratio: "portrait" },
  { file: "reel-2.mp4", ratio: "portrait" },
  { file: "reel-3.mp4", ratio: "portrait" },
  { file: "fb-1.mp4", ratio: "portrait" },
  { file: "fb-2.mp4", ratio: "portrait" },
];

const videoWorks = videoFiles.map((v) => ({
  id: v.file,
  src: `/works-video/${v.file}`,
  ratio: v.ratio,
  title: "Creative video",
  kind: "video" as Kind,
  href: videoLinks[v.file],
}));

// YouTube embeds — featured films hosted on YouTube (rendered as a wide hero tile)
const youtubeWorks: Array<{ id: string; src: string; ratio: Ratio; title: string; kind: Kind; href?: string }> = [
  {
    id: "yt-Br7Ia-Gl0gs",
    src: "https://www.youtube.com/embed/Br7Ia-Gl0gs?autoplay=1&mute=1&loop=1&playlist=Br7Ia-Gl0gs&controls=1&modestbranding=1&rel=0",
    ratio: "square",
    title: "Featured film",
    kind: "youtube",
    href: "https://youtu.be/Br7Ia-Gl0gs",
  },
];

// Interleave videos through the image grid so the layout feels mixed-media
function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  let bi = 0;
  for (let i = 0; i < a.length; i++) {
    out.push(a[i]);
    // Insert a reel every 4 images for a balanced rhythm
    if ((i + 1) % 4 === 0 && bi < b.length) {
      out.push(b[bi++]);
    }
  }
  while (bi < b.length) out.push(b[bi++]);
  return out;
}

const works = [...youtubeWorks, ...interleave(imageWorks, videoWorks)];

// Uniform tile sizing: squares share one column; portraits span two rows so
// their 4:5 aspect lines up neatly with two stacked square cells.
const ratioClass: Record<Ratio, string> = {
  portrait: "row-span-2 aspect-[4/5]",
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
  href?: string;
};

const WorkTile = ({ src, ratio, title, kind, href }: TileProps) => {
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

  const Wrapper: React.ElementType = href && kind !== "youtube" ? "a" : "div";
  const wrapperProps =
    href && kind !== "youtube"
      ? { href, target: "_blank", rel: "noopener noreferrer", "aria-label": title }
      : {};

  return (
    <Wrapper
      {...wrapperProps}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative block overflow-hidden border-2 border-ink bg-paper-warm transition-transform duration-300 ease-out hover:-translate-y-1 cursor-pointer ${ratioClass[ratio]}`}
    >
      {kind === "image" ? (
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      ) : kind === "video" ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      )}
      {/* hover veil */}
      {kind !== "youtube" && (
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />
      )}
      {/* video badge */}
      {(kind === "video" || kind === "youtube") && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 border-2 border-ink bg-paper px-1.5 py-1 group-hover:opacity-0 transition-opacity duration-300">
          <Play size={10} className="text-ink" strokeWidth={2.5} fill="currentColor" />
          <span className="text-[9px] font-black uppercase tracking-widest text-ink">
            {kind === "youtube" ? "Film" : "Reel"}
          </span>
        </div>
      )}
      {/* arrow accent */}
      {kind !== "youtube" && (
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 border-2 border-ink bg-citrus p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight size={14} className="text-ink" strokeWidth={2.5} />
        </div>
      )}
    </Wrapper>
  );
};
