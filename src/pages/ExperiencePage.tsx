import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Experience } from "@/components/portfolio/Experience";

export default function ExperiencePage() {
  const title = "Resume & Experience | Ishank Jha — Brand Manager & Digital Strategist";
  const description =
    "Explore Ishank Jha's professional experience across brand management, social ecosystems, and data-led digital strategy—from StreeVia Studios to UNFPA and Cog Culture.";
  const url = "https://ishankportfolio.lovable.app/experience";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main className="min-h-dvh bg-paper">
        <h1 className="sr-only">Experience and Resume — Ishank Jha</h1>
        <div className="container max-w-6xl py-12 sm:py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>

        <Experience />

        <div className="container max-w-6xl pb-12 sm:pb-16 md:pb-24">
          <div className="mt-12 sm:mt-16 pt-6 border-t-2 border-ink flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold text-center">
            <span>© {new Date().getFullYear()} Ishank Jha</span>
            <span>Brand Strategist · Content Architect</span>
          </div>
        </div>
      </main>
    </>
  );
}
