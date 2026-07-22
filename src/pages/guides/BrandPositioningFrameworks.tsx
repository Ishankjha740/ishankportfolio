import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Layers, Compass, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function BrandPositioningFrameworks() {
  const title = "Brand Positioning Frameworks: A Practical Guide for Founders";
  const description =
    "A deep-dive into brand strategy and brand positioning frameworks — the 7 components, templates, and examples founders can use to build a defensible point of view.";
  const url = "https://ishankportfolio.lovable.app/guides/brand-positioning-frameworks";

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            author: { "@type": "Person", name: "Ishank Jha" },
            mainEntityOfPage: url,
          })}
        </script>
      </Helmet>

      <main className="min-h-dvh bg-paper">
        <div className="container max-w-4xl pt-12 sm:pt-16 md:pt-24 pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>

        <article className="container max-w-4xl pb-16 sm:pb-24">
          <header className="border-b-2 border-ink pb-8 mb-10">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-ink-soft mb-4">
              Guide · Brand Strategy
            </p>
            <h1 className="display-heading text-[9vw] sm:text-5xl md:text-6xl text-ink leading-[1.02]">
              Brand Positioning Frameworks
            </h1>
            <p className="mt-6 text-ink-soft text-base sm:text-lg leading-relaxed">
              A practical, no-fluff guide to <strong>brand strategy</strong> and the
              <strong> branding strategy</strong> frameworks founders actually use to
              build a point of view that competitors cannot copy in a weekend.
            </p>
          </header>

          <section className="prose prose-neutral max-w-none text-ink-soft leading-relaxed space-y-6">
            <p>
              Most early-stage brands do not fail because the logo is wrong. They fail
              because nobody — internally or externally — can finish the sentence:
              <em>&ldquo;We are the only brand that ______.&rdquo;</em> Positioning is
              the discipline of finishing that sentence honestly and defensibly.
            </p>

            <h2 className="display-heading text-2xl sm:text-3xl text-ink pt-4 flex items-center gap-3">
              <Target size={22} /> The 7 Components of Brand Strategy
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Purpose</strong> — the reason the brand exists beyond profit.</li>
              <li><strong>Vision</strong> — the future you are trying to pull the market toward.</li>
              <li><strong>Mission</strong> — how you show up daily to make the vision real.</li>
              <li><strong>Values</strong> — the non-negotiables that shape decisions.</li>
              <li><strong>Audience</strong> — the specific person you serve better than anyone.</li>
              <li><strong>Positioning</strong> — the single idea you own in that person&apos;s mind.</li>
              <li><strong>Personality &amp; voice</strong> — how the brand sounds and behaves.</li>
            </ol>

            <h2 className="display-heading text-2xl sm:text-3xl text-ink pt-4 flex items-center gap-3">
              <Layers size={22} /> Four Frameworks Worth Knowing
            </h2>

            <h3 className="display-heading text-xl text-ink pt-2">1. The Positioning Statement (Geoffrey Moore)</h3>
            <p>
              <em>For [target customer] who [need], [brand] is a [category] that
              [benefit]. Unlike [competitor], we [key differentiator].</em> If any
              blank feels forced, that blank is the real work.
            </p>

            <h3 className="display-heading text-xl text-ink pt-2">2. The Brand Key (Unilever)</h3>
            <p>
              A one-page canvas covering roots, competitive environment, target,
              insight, benefits, values &amp; beliefs, reason to believe, and
              discriminator. Best when a team needs alignment fast.
            </p>

            <h3 className="display-heading text-xl text-ink pt-2">3. Jobs-to-be-Done Positioning</h3>
            <p>
              Positioning built on the <em>job</em> customers hire the product to do,
              not demographics. Powerful for SaaS and services where behavior beats
              persona.
            </p>

            <h3 className="display-heading text-xl text-ink pt-2">4. The Category Design Approach (Play Bigger)</h3>
            <p>
              Instead of competing in an existing category, you name and design a new
              one. Riskier, but the payoff — as with Salesforce, HubSpot, or Notion —
              is category dominance.
            </p>

            <h2 className="display-heading text-2xl sm:text-3xl text-ink pt-4 flex items-center gap-3">
              <Compass size={22} /> A Fill-in-the-Blanks Template
            </h2>
            <div className="border-2 border-ink bg-paper-warm p-5 sm:p-6 font-mono text-sm text-ink not-prose">
              <p>For <span className="bg-citrus px-1">[specific audience]</span></p>
              <p>who struggle with <span className="bg-citrus px-1">[urgent problem]</span>,</p>
              <p><span className="bg-citrus px-1">[Brand]</span> is the <span className="bg-citrus px-1">[category]</span></p>
              <p>that delivers <span className="bg-citrus px-1">[unique benefit]</span>.</p>
              <p>Unlike <span className="bg-citrus px-1">[main alternative]</span>,</p>
              <p>we <span className="bg-citrus px-1">[defensible differentiator]</span>.</p>
            </div>

            <h2 className="display-heading text-2xl sm:text-3xl text-ink pt-4 flex items-center gap-3">
              <Users size={22} /> How to Build a Defensible Point of View
            </h2>
            <ul className="space-y-2">
              <li className="flex gap-3"><CheckCircle size={18} className="mt-1 shrink-0" /> Interview 8–12 customers before writing a single word.</li>
              <li className="flex gap-3"><CheckCircle size={18} className="mt-1 shrink-0" /> Name the enemy — a status quo, a lazy assumption, a competitor tactic.</li>
              <li className="flex gap-3"><CheckCircle size={18} className="mt-1 shrink-0" /> Choose one primary differentiator; kill the other three.</li>
              <li className="flex gap-3"><CheckCircle size={18} className="mt-1 shrink-0" /> Pressure-test with a &ldquo;so what?&rdquo; from a skeptical customer.</li>
              <li className="flex gap-3"><CheckCircle size={18} className="mt-1 shrink-0" /> Rewrite the homepage hero using the positioning — if it does not fit, iterate.</li>
            </ul>

            <h2 className="display-heading text-2xl sm:text-3xl text-ink pt-4 flex items-center gap-3">
              <TrendingUp size={22} /> From Positioning to Growth
            </h2>
            <p>
              Positioning is not a document you finish and file. It becomes the brief
              for every ad, sales deck, landing page, and product decision for the
              next 18 months. When it is right, the content system compounds — because
              every asset reinforces the same one idea.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t-2 border-ink flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft">
              Need help applying this to your brand?
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-citrus border-2 border-ink text-ink text-xs font-black uppercase tracking-wider shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300"
            >
              Start a Project Brief
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}