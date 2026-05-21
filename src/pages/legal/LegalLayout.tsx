import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  eyebrow?: string;
  description?: string;
  path?: string;
  children: ReactNode;
}

export const LegalLayout = ({ title, eyebrow, description, path, children }: LegalLayoutProps) => {
  const pageTitle = `${title} | Ishank Jha`;
  const desc =
    description ?? `${title} — Ishank Jha's portfolio.`;
  const url = `https://ishankportfolio.lovable.app${path ?? ""}`;
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
      </Helmet>
    <main className="min-h-screen bg-paper">
      <div className="container max-w-3xl py-12 sm:py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
        >
          <ArrowLeft size={14} /> Back to site
        </Link>

        <header className="mt-8 sm:mt-10 border-b-2 border-ink pb-8 sm:pb-10">
          {eyebrow && (
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-ink-soft">{eyebrow}</div>
          )}
          <h1 className="display-heading text-4xl sm:text-5xl md:text-6xl text-ink mt-3">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-sm sm:text-base text-ink-soft leading-relaxed max-w-2xl">{description}</p>
          )}
        </header>

        <article className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 text-sm sm:text-base text-ink-soft leading-relaxed [&_h2]:display-heading [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-black [&_h3]:uppercase [&_h3]:tracking-[0.15em] [&_h3]:text-ink [&_h3]:text-xs [&_h3]:sm:text-sm [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:bg-citrus">
          {children}
        </article>

        <footer className="mt-12 sm:mt-16 pt-6 border-t-2 border-ink text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold text-center">
          © {new Date().getFullYear()} Ishank Jha
        </footer>
      </div>
    </main>
    </>
  );
};

export default LegalLayout;