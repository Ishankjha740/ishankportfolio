import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { About } from "@/components/portfolio/About";

export default function AboutPage() {
  const title = "About Me | Ishank Jha — Brand Strategist & Content Architect";
  const description =
    "Learn about Ishank Jha's journey from tech and VFX to brand strategy—an MBA in Analytics & Marketing, ISB certification, and a portfolio of 12+ brands scaled.";
  const url = "https://ishankportfolio.lovable.app/about";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="profile" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main className="min-h-screen bg-paper">
        <div className="container max-w-6xl py-12 sm:py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>

        <About />

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
