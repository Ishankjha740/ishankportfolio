import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Contact } from "@/components/portfolio/Contact";

export default function ContactPage() {
  const title = "Contact | Ishank Jha — Let's Build Something Bold";
  const description =
    "Reach out to Ishank Jha for brand strategy, content architecture, and digital ecosystem projects. Email, LinkedIn, Behance, or download the resume directly.";
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
        <h1 className="sr-only">Contact Ishank Jha</h1>
        <div className="container max-w-6xl py-12 sm:py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>

        <Contact />
      </main>
    </>
  );
}
