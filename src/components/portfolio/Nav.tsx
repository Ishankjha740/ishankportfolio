import { useEffect, useState } from "react";
import logo from "@/assets/ij-logo.png";
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  Home,
  User,
  FileText,
  Briefcase,
  FolderKanban,
  Sparkles,
  Image as ImageIcon,
  Users,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

const BehanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M7.4 4.8c1.4 0 2.5.3 3.2.9.8.6 1.1 1.5 1.1 2.6 0 .7-.2 1.3-.5 1.8-.3.5-.8.9-1.4 1.2.9.2 1.5.7 2 1.3.4.6.6 1.4.6 2.3 0 1.3-.5 2.3-1.4 3-.9.7-2.2 1.1-3.8 1.1H1V4.8h6.4Zm-.4 5.3c.7 0 1.2-.1 1.6-.4.4-.3.6-.7.6-1.3 0-.6-.2-1-.6-1.3-.4-.3-1-.4-1.7-.4H3.9v3.4h3.1Zm.3 6.5c.8 0 1.4-.2 1.9-.5.4-.3.6-.8.6-1.5s-.2-1.2-.7-1.5c-.4-.3-1.1-.5-1.9-.5H3.9v4h3.4Zm10.4-7.7c1 0 1.9.2 2.6.6.7.4 1.3 1 1.7 1.7.4.7.6 1.6.6 2.6v.6H15c.1.9.4 1.5.9 1.9.5.4 1.1.6 1.9.6.6 0 1.1-.1 1.4-.3.4-.2.7-.5.9-1h2.5c-.3 1-.9 1.7-1.7 2.3-.8.5-1.8.8-3 .8-1.1 0-2-.2-2.8-.7-.8-.5-1.4-1.1-1.9-1.9-.4-.8-.7-1.8-.7-2.8 0-1.1.2-2 .7-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.7-.7Zm-.1 2.1c-.7 0-1.2.2-1.6.6-.4.4-.7.9-.8 1.6h4.7c-.1-.7-.4-1.2-.8-1.6-.4-.4-.9-.6-1.5-.6Zm-3.7-5.5h6.5v1.6h-6.5V5.5Z" />
  </svg>
);

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const links: NavLink[] = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About Me", icon: User },
  { href: "#experience", label: "Resume", icon: FileText },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#work", label: "Portfolio", icon: FolderKanban },
  { href: "#creative-works", label: "Works", icon: ImageIcon },
  { href: "#clients", label: "Clients", icon: Users },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#contact", label: "Contact", icon: Send },
];

const STORAGE_KEY = "nav:rail-collapsed";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  // Persist + expose width to the layout via a CSS variable on <html>
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
    } catch {
      /* ignore */
    }
    const root = document.documentElement;
    root.style.setProperty("--rail-w", collapsed ? "72px" : "220px");
    root.dataset.railCollapsed = collapsed ? "true" : "false";
  }, [collapsed]);

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
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop sticky side rail */}
      <aside
        className={`hidden lg:flex fixed top-0 left-0 bottom-0 z-50 bg-citrus border-r-2 border-ink flex-col transition-[width] duration-300 ease-out ${
          collapsed ? "w-[72px]" : "w-[220px]"
        }`}
        aria-label="Primary"
      >
        {/* Logo / brand block */}
        <a
          href="#top"
          className={`block border-b-2 border-ink bg-ink ${collapsed ? "p-3" : "p-5"}`}
        >
          <div className="aspect-square w-full overflow-hidden bg-ink border-2 border-citrus flex items-center justify-center">
            <img
              src={logo}
              alt="Ishank Jha — IJ monogram logo"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
          {!collapsed && (
            <>
              <div className="mt-3 text-paper text-center font-black uppercase text-sm tracking-wider">
                Ishank Jha
              </div>
              <div className="text-paper/60 text-center text-[10px] uppercase tracking-[0.2em] mt-1">
                Strategist
              </div>
            </>
          )}
        </a>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col py-6">
          {links.map((l) => {
            const isActive = active === l.href;
            const Icon = l.icon;
            return (
              <a
                key={l.href}
                href={l.href}
                title={collapsed ? l.label : undefined}
                aria-label={l.label}
                className={`relative uppercase text-[13px] font-bold tracking-[0.18em] transition-colors duration-300 border-b border-ink/20 ${
                  collapsed
                    ? "flex items-center justify-center px-0 py-4"
                    : "px-6 py-3.5"
                } ${
                  isActive
                    ? "bg-ink text-citrus"
                    : "text-ink hover:bg-ink hover:text-citrus"
                }`}
              >
                {collapsed ? (
                  <Icon size={18} strokeWidth={2.25} />
                ) : (
                  <>
                    <span className="inline-block mr-3 opacity-50">→</span>
                    {l.label}
                  </>
                )}
              </a>
            );
          })}
        </nav>

        {/* Socials */}
        <div
          className={`border-t-2 border-ink bg-paper ${
            collapsed
              ? "p-3 flex flex-col items-center gap-3"
              : "p-5 flex items-center justify-center gap-3"
          }`}
        >
          <a
            href="mailto:jha.ishank74@gmail.com"
            aria-label="Email"
            title="Email"
            className="inline-flex items-center justify-center w-10 h-10 shrink-0 text-ink hover:text-citrus transition-all duration-300 border-2 border-ink hover:bg-ink hover:-translate-y-0.5"
          >
            <Mail size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ishankjha"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 shrink-0 text-ink hover:text-citrus transition-all duration-300 border-2 border-ink hover:bg-ink hover:-translate-y-0.5"
          >
            <Linkedin size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          <a
            href="https://www.behance.net/ishankjha"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            title="Behance"
            className="inline-flex items-center justify-center w-10 h-10 shrink-0 text-ink hover:text-citrus transition-all duration-300 border-2 border-ink hover:bg-ink hover:-translate-y-0.5"
          >
            <BehanceIcon width={18} height={18} aria-hidden="true" />
          </a>
        </div>

        {/* Collapse handle — sits on the outside edge of the rail */}
        <button
          type="button"
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
          aria-expanded={!collapsed}
          title={collapsed ? "Expand" : "Collapse"}
          className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-12 bg-ink text-citrus border-2 border-ink hover:bg-citrus hover:text-ink transition-colors flex items-center justify-center shadow-pop-yellow"
        >
          {collapsed ? <ChevronRight size={14} strokeWidth={2.5} /> : <ChevronLeft size={14} strokeWidth={2.5} />}
        </button>
      </aside>

      {/* Mobile top bar */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 border-b-2 border-ink transition-all duration-300 ${
          scrolled
            ? "bg-citrus/85 backdrop-blur-md shadow-pop-yellow"
            : "bg-citrus"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-5">
          <a
            href="#top"
            className="flex items-center gap-3 font-black uppercase text-ink tracking-wider"
          >
            <span className="w-8 h-8 overflow-hidden border-2 border-ink bg-ink flex items-center justify-center">
              <img src={logo} alt="" className="w-5 h-5 object-contain" />
            </span>
            Ishank Jha
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="px-3 py-2 border-2 border-ink bg-ink text-citrus font-bold uppercase text-xs tracking-wider transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="border-t-2 border-ink bg-citrus animate-fade-in">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-5 py-3 border-b border-ink/30 uppercase font-bold text-ink text-sm tracking-wider transition-colors duration-200 hover:bg-ink hover:text-citrus"
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
