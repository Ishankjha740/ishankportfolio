import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Contact } from "@/components/portfolio/Contact";

export default function ContactPage() {
  const title = "Contact | Ishank Jha — Let's Build Something Bold";
  const description =
    "Reach Ishank Jha for brand strategy, content architecture & digital ecosystem projects. Email, LinkedIn, Behance, or download the resume.";
  const url = "https://ishankportfolio.lovable.app/contact";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main className="min-h-dvh bg-paper">
        <div className="container max-w-6xl pt-12 sm:pt-16 md:pt-24 pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
          <h1 className="display-heading text-[8vw] sm:text-5xl md:text-6xl text-ink leading-[1.02] mt-6">
            Let&apos;s Connect
          </h1>
        </div>

        <Contact />
      </main>
    </>
  );
}
