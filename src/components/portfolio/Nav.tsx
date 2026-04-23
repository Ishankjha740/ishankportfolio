import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-rule" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-4 h-16 md:h-20">
        <a href="#top" className="flex flex-col leading-tight min-w-0 shrink">
          <span className="font-serif text-xl md:text-2xl tracking-tight text-ink whitespace-nowrap">
            Ishank Jha<span className="text-terracotta">.</span>
          </span>
          <span className="hidden lg:block text-[10px] uppercase tracking-[0.18em] text-ink-soft mt-0.5 whitespace-nowrap">
            Strategy · Content · Growth systems that scale
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors duration-300 relative group whitespace-nowrap"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta transition-colors whitespace-nowrap"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
};
