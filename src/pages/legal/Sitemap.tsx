import { Link } from "react-router-dom";
import { LegalLayout } from "./LegalLayout";

const sections = [
  {
    title: "Main",
    links: [
      { to: "/#home", label: "Home" },
      { to: "/#about", label: "About" },
      { to: "/#skills", label: "Skills" },
      { to: "/#work", label: "Work" },
      { to: "/#creative", label: "Creative Works" },
      { to: "/#experience", label: "Experience" },
      { to: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/security", label: "Security" },
      { to: "/code-of-conduct", label: "Code of Conduct" },
      { to: "/license", label: "License" },
      { to: "/sitemap", label: "Sitemap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/sitemap.xml", label: "XML Sitemap", external: true },
      { to: "/robots.txt", label: "robots.txt", external: true },
    ],
  },
];

const Sitemap = () => (
  <LegalLayout
    eyebrow="Index"
    title="Sitemap"
    path="/sitemap"
    description="A complete map of every page and resource on this site."
  >
    <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 not-prose">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="display-heading text-2xl sm:text-3xl text-ink mb-3">{section.title}</h2>
          <ul className="mt-3 space-y-2">
            {section.links.map((l) => (
              <li key={l.to}>
                {"external" in l && l.external ? (
                  <a
                    href={l.to}
                    className="text-ink-soft hover:text-ink transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 group-hover:after:w-full">
                      {l.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    to={l.to}
                    className="text-ink-soft hover:text-ink transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 group-hover:after:w-full">
                      {l.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </LegalLayout>
);

export default Sitemap;