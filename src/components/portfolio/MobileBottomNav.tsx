import { Home, User, FolderKanban, Briefcase, Send } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#work", label: "Work", icon: FolderKanban },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Send },
];

export const MobileBottomNav = () => {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive("#" + current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[55] flex items-center gap-1 bg-ink border-2 border-ink shadow-pop-yellow px-1.5 py-1.5 rounded-none"
    >
      {items.map((it) => {
        const Icon = it.icon;
        const isActive = active === it.href;
        return (
          <a
            key={it.href}
            href={it.href}
            aria-label={it.label}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[54px] px-2 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] transition-colors duration-200 ${
              isActive
                ? "bg-citrus text-ink"
                : "text-citrus hover:bg-citrus hover:text-ink"
            }`}
          >
            <Icon size={16} strokeWidth={2.25} />
            <span>{it.label}</span>
          </a>
        );
      })}
    </nav>
  );
};