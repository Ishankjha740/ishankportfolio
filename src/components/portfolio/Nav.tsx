import { useEffect, useState } from "react";
import portrait from "@/assets/ishank-portrait.png";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Resume" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");
  useEffect(() => {
    const onScroll = () => {
      const ids = links.map((l) => l.href.slice(1));
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop sticky side rail */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[220px] z-50 bg-citrus border-r-2 border-ink flex-col">
        <a href="#top" className="block border-b-2 border-ink bg-ink p-5">
          <div className="aspect-square w-full overflow-hidden bg-citrus border-2 border-citrus">
            <img src={portrait} alt="Ishank Jha" className="w-full h-full object-cover object-top grayscale" />
          </div>
          <div className="mt-3 text-paper text-center font-black uppercase text-sm tracking-wider">Ishank Jha</div>
          <div className="text-paper/60 text-center text-[10px] uppercase tracking-[0.2em] mt-1">Strategist</div>
        </a>
        <nav className="flex-1 flex flex-col py-6">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-6 py-3.5 uppercase text-[13px] font-bold tracking-[0.18em] transition-colors duration-300 border-b border-ink/20 ${
                  isActive ? "bg-ink text-citrus" : "text-ink hover:bg-ink hover:text-citrus"
                }`}
              >
                <span className="inline-block mr-3 opacity-50">→</span>
                {l.label}
              </a>
            );
          })}
        </nav>
        <div className="border-t-2 border-ink p-5 flex items-center justify-around bg-paper">
          <a href="mailto:jha.ishank74@gmail.com" className="text-ink hover:text-citrus transition-colors p-2 border border-ink hover:bg-ink"><Mail size={16} /></a>
          <a href="https://www.linkedin.com/in/ishankjha" target="_blank" rel="noreferrer" className="text-ink hover:text-citrus transition-colors p-2 border border-ink hover:bg-ink"><Linkedin size={16} /></a>
          <a href="https://www.behance.net/ijxe740tsd" target="_blank" rel="noreferrer" className="text-ink hover:text-citrus transition-colors p-2 border border-ink hover:bg-ink"><Instagram size={16} /></a>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-citrus border-b-2 border-ink">
        <div className="flex items-center justify-between h-14 px-5">
          <a href="#top" className="flex items-center gap-3 font-black uppercase text-ink tracking-wider">
            <span className="w-8 h-8 rounded-full overflow-hidden border-2 border-ink">
              <img src={portrait} alt="" className="w-full h-full object-cover object-top grayscale" />
            </span>
            Ishank Jha
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="px-3 py-2 border-2 border-ink bg-ink text-citrus font-bold uppercase text-xs tracking-wider"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="border-t-2 border-ink bg-citrus">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-5 py-3 border-b border-ink/30 uppercase font-bold text-ink text-sm tracking-wider"
              >
                {l.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};
