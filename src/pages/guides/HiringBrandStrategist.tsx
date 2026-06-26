import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertTriangle, Lightbulb, Users, FileSearch, MessageSquare, Briefcase } from "lucide-react";

export default function HiringBrandStrategist() {
  const title = "Hire a Brand Strategist: What Founders Actually Need to Ask";
  const description =
    "Hiring a brand strategist or brand strategy consulting firm? Learn what to ask in interviews, red flags to avoid, and how to turn scattered content into growth.";
  const url = "https://ishankportfolio.lovable.app/guides/hiring-a-brand-strategist";

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
            description: description,
            author: { "@type": "Person", name: "Ishank Jha" },
            publisher: {
              "@type": "Organization",
              name: "Ishank Jha — Brand Strategy Studio",
              logo: { "@type": "ImageObject", url: "https://ishankportfolio.lovable.app/og-image.jpg" },
            },
            url: url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          })}
        </script>
      </Helmet>

      <main className="min-h-dvh bg-paper">
        <div className="container max-w-4xl py-12 sm:py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>

        <article className="container max-w-4xl pb-16 sm:pb-24">
          {/* Hero header */}
          <header className="mb-12 sm:mb-16">
            <span className="label-eyebrow mb-4 block">Guide</span>
            <h1 className="display-heading text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05] mb-6">
              How to Hire a{" "}
              <span className="relative inline-block">
                Brand Strategist
                <span className="absolute left-0 right-0 bottom-1 h-[0.35em] bg-citrus -z-10" aria-hidden />
              </span>
            </h1>
            <p className="text-ink-soft text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              A practical guide for founders and marketing leads who are ready to stop patching content together and start building a brand system that compounds.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold">
              <span>By Ishank Jha</span>
              <span className="hidden sm:inline text-rule">|</span>
              <span>Brand Strategist &amp; Content Architect</span>
            </div>
          </header>

          {/* Intro / The scattered content problem */}
          <section className="mb-14 sm:mb-20">
            <div className="border-l-4 border-citrus pl-5 sm:pl-6 py-2">
              <p className="text-ink text-base sm:text-lg leading-relaxed font-medium italic">
                Most growth-stage teams don't have a brand problem. They have a <strong>scattered content problem</strong> — blog posts that don't connect, social feeds that feel random, and a website that reads like it was written by five different people. A brand strategist fixes that at the root.
              </p>
            </div>
            <p className="mt-6 text-ink-soft text-sm sm:text-base leading-relaxed">
              If you are a founder or marketing lead reading this, you have probably already felt the pain: your team is producing content, running campaigns, and showing up on social — but nothing sticks together. There is no thread. No system. Just a growing pile of disconnected assets that cost time and budget but don't build momentum.
            </p>
            <p className="mt-4 text-ink-soft text-sm sm:text-base leading-relaxed">
              Hiring the right brand strategist changes that. Not by adding more content, but by building a system — a framework of messaging, visuals, and channel strategy that turns scattered output into compounding brand equity.
            </p>
            <p className="mt-4 text-ink-soft text-sm sm:text-base leading-relaxed">
              This guide will walk you through exactly how to evaluate, interview, and hire a brand strategist — whether you are looking for brand strategy consulting support or a full-time hire.
            </p>
          </section>

          {/* What a brand strategist actually does */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <Briefcase size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">What a Brand Strategist Actually Does</h2>
            </div>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              Before you write a job description or send a brief, it helps to know what you are actually buying. A brand strategist is not a logo designer, a copywriter, or a social media manager — though they should understand all three. Their core job is to define <em>why</em> your brand exists, <em>who</em> it speaks to, and <em>how</em> it shows up consistently across every channel.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Develops brand positioning and messaging frameworks",
                "Creates audience personas and journey maps",
                "Designs content architecture and editorial calendars",
                "Defines visual and tonal brand guidelines",
                "Aligns marketing channels under one narrative",
                "Measures brand health and engagement metrics",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-paper-warm border-2 border-ink p-4">
                  <CheckCircle size={18} className="text-citrus mt-0.5 shrink-0" />
                  <span className="text-ink text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-ink-soft text-sm sm:text-base leading-relaxed">
              In short: they build the <strong>operating system</strong> your marketing runs on. Without it, every campaign is a one-off. With it, every piece of content reinforces the last.
            </p>
          </section>

          {/* When to hire */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <AlertTriangle size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">When You Know It Is Time to Hire</h2>
            </div>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-4">
              Not every team needs a brand strategist on day one. But there are clear signals that scattered content has become a bottleneck:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Your website, social, and sales deck feel like they belong to different companies.",
                "You are spending more time debating 'tone' than executing campaigns.",
                "Every new hire asks 'how do we talk about ourselves?' and gets a different answer.",
                "Traffic is up, but conversions are flat — people land, then leave confused.",
                "You have outgrown your original brand story but haven't figured out the next one.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-soft text-sm sm:text-base leading-relaxed">
                  <span className="inline-block w-6 h-6 bg-ink text-citrus text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
              If two or more of these sound familiar, you are past the point where better tactics will help. You need strategic architecture.
            </p>
          </section>

          {/* How to evaluate */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <FileSearch size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">How to Evaluate a Brand Strategist</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-black text-ink text-base sm:text-lg uppercase tracking-wide mb-2">Look for systems thinking, not just style</h3>
                <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                  Anyone can show you pretty decks. What matters is whether they can articulate <em>how</em> a brand system works — how messaging maps to audience segments, how content pillars connect to business goals, how visual identity reinforces narrative. Ask them to walk you through a framework they have built, not just a campaign they have run.
                </p>
              </div>

              <div>
                <h3 className="font-black text-ink text-base sm:text-lg uppercase tracking-wide mb-2">Check for analytical rigor</h3>
                <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                  Modern brand strategy is not purely creative. The best strategists blend storytelling with analytics — they read engagement data, map conversion paths, and iterate based on performance. Ask how they measure brand health. If the answer is vague, keep looking.
                </p>
              </div>

              <div>
                <h3 className="font-black text-ink text-base sm:text-lg uppercase tracking-wide mb-2">Review their portfolio for consistency, not flash</h3>
                <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                  A strong brand strategist should be able to show you multiple touchpoints from the same brand — website, social, email, pitch decks — and explain how they all connect. Flashy one-off campaigns are less interesting than evidence of sustained, coherent brand building.
                </p>
              </div>

              <div>
                <h3 className="font-black text-ink text-base sm:text-lg uppercase tracking-wide mb-2">Verify cross-channel fluency</h3>
                <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                  Your strategist does not need to execute on every channel, but they must understand how each one works — SEO, paid social, email, organic content, and sales enablement. Brand strategy that ignores channel realities stays theoretical.
                </p>
              </div>
            </div>
          </section>

          {/* Interview questions */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <MessageSquare size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">Questions to Ask in the Interview</h2>
            </div>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              The interview is where you separate strategists from stylists. Here are questions that surface real depth:
            </p>
            <div className="space-y-5">
              {[
                {
                  q: "Walk me through a brand system you built from scratch. What was the business problem, and how did the strategy solve it?",
                  why: "Reveals whether they think in business outcomes or just creative outputs.",
                },
                {
                  q: "How do you approach a brand that has outgrown its original story?",
                  why: "Tests their ability to handle evolution, not just launches.",
                },
                {
                  q: "What metrics do you use to judge whether a brand strategy is working?",
                  why: "Separates data-driven strategists from opinion-driven ones.",
                },
                {
                  q: "How do you align a founder's vision with what the market actually needs?",
                  why: "Shows whether they can mediate between internal and external reality.",
                },
                {
                  q: "Describe a time a strategy did not land. What did you learn?",
                  why: "Maturity and adaptability matter more than a perfect record.",
                },
                {
                  q: "How do you prevent brand drift across teams and channels over time?",
                  why: "Good answers involve guidelines, governance, and training — not just documents.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-paper-warm border-2 border-ink p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-ink text-citrus text-sm font-black flex items-center justify-center shrink-0">{i + 1}</span>
                    <div>
                      <p className="text-ink font-bold text-sm sm:text-base leading-relaxed mb-2">{item.q}</p>
                      <p className="text-ink-soft text-xs sm:text-sm leading-relaxed"><span className="text-citrus font-bold">Why it matters:</span> {item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Red flags */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <AlertTriangle size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">Red Flags to Watch For</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "They lead with aesthetics before understanding your business model.",
                "They cannot name a single metric they use to evaluate brand health.",
                "Their portfolio shows one campaign after another with no thread connecting them.",
                "They dismiss SEO, analytics, or performance marketing as 'not creative enough'.",
                "They offer a fixed package without asking about your stage, audience, or goals.",
                "They promise to 'fix your brand' in 30 days.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 border-2 border-ink p-4 bg-paper">
                  <span className="text-citrus font-black text-lg leading-none mt-0.5">×</span>
                  <span className="text-ink-soft text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* The hiring process */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <Users size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">A Practical Hiring Process</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "Define the brief",
                  detail: "Write one page describing your current state, your audience, your business goals, and what success looks like in 12 months. The clearer your brief, the better your candidates.",
                },
                {
                  step: "Screen for strategic depth",
                  detail: "Ask for a portfolio walkthrough focused on frameworks, not just finished assets. Look for evidence of systems thinking.",
                },
                {
                  step: "Assign a paid trial project",
                  detail: "A small brand audit or messaging framework exercise is worth more than any interview answer. Pay fairly — this filters out candidates who are not serious.",
                },
                {
                  step: "Test collaboration, not just output",
                  detail: "The best strategists ask hard questions, push back on assumptions, and involve your team in the process. Watch how they interact with stakeholders.",
                },
                {
                  step: "Check references for continuity",
                  detail: "Ask past clients how the brand held up six months after the strategist left. Sustainability is the real test.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-ink text-citrus text-sm font-black flex items-center justify-center shrink-0">{i + 1}</div>
                    <div className="w-0.5 flex-1 bg-ink/20 mt-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="font-black text-ink text-sm sm:text-base uppercase tracking-wide mb-1">{item.step}</h3>
                    <p className="text-ink-soft text-sm sm:text-base leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What good looks like */}
          <section className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-citrus border-2 border-ink flex items-center justify-center">
                <Lightbulb size={18} className="text-ink" />
              </div>
              <h2 className="display-heading text-xl sm:text-2xl md:text-3xl text-ink">What Good Brand Strategy Consulting Looks Like</h2>
            </div>
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-6">
              If you are engaging a brand strategy consultant rather than hiring full-time, the engagement should still be comprehensive. Here is what a strong consulting engagement typically includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { phase: "Discovery", deliverable: "Stakeholder interviews, competitive audit, audience research" },
                { phase: "Positioning", deliverable: "Brand narrative, value proposition, messaging pillars" },
                { phase: "Architecture", deliverable: "Content strategy, channel mapping, editorial framework" },
                { phase: "Guidelines", deliverable: "Voice & tone guide, visual direction, usage rules" },
                { phase: "Activation", deliverable: "Launch roadmap, team training, measurement plan" },
                { phase: "Governance", deliverable: "Review cadence, feedback loops, iteration protocol" },
              ].map((item) => (
                <div key={item.phase} className="bg-paper-warm border-2 border-ink p-5">
                  <span className="text-citrus text-xs font-black uppercase tracking-wider">{item.phase}</span>
                  <p className="text-ink text-sm font-medium mt-2">{item.deliverable}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-ink-soft text-sm sm:text-base leading-relaxed">
              Anything less than this is tactical support, not strategy. Be clear about what you need before you sign.
            </p>
          </section>

          {/* CTA */}
          <section className="border-2 border-ink bg-citrus p-6 sm:p-10">
            <h2 className="display-heading text-xl sm:text-2xl text-ink mb-4">Ready to Stop Scattering and Start Compounding?</h2>
            <p className="text-ink text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              If you are a founder or marketing lead wrestling with disconnected content, inconsistent messaging, or a brand that no longer fits where you are headed — I build the systems that fix it.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-ink border-2 border-ink text-citrus text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors duration-300"
              >
                Start a Project Brief
              </Link>
              <Link
                to="/experience"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-ink text-ink text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-ink hover:text-citrus transition-colors duration-300"
              >
                View Experience
              </Link>
            </div>
          </section>
        </article>

        {/* Footer */}
        <div className="container max-w-4xl pb-12 sm:pb-16 md:pb-24">
          <div className="mt-12 sm:mt-16 pt-6 border-t-2 border-ink flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold text-center">
            <span>© {new Date().getFullYear()} Ishank Jha</span>
            <span>Brand Strategist · Content Architect</span>
          </div>
        </div>
      </main>
    </>
  );
}
