import { ArrowDownToLine, ArrowUpRight, Mail, Phone, Linkedin, Link2 } from "lucide-react";
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

const links = [
  { icon: Mail, label: "Email", value: "jha.ishank74@gmail.com", href: "mailto:jha.ishank74@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 99858 76895", href: "tel:+919985876895" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ishankjha", href: "https://www.linkedin.com/in/ishankjha" },
  { icon: BehanceIcon, label: "Behance", value: "behance.net/ijxe740tsd", href: "https://www.behance.net/ijxe740tsd" },
  { icon: Link2, label: "More Info", value: "tinyurl.com/ishankjhaportfolio", href: "https://tinyurl.com/ishankjhaportfolio" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-ink text-paper">
      <div className="container">
        <span className="label-eyebrow text-paper/60">Contact</span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mt-8 max-w-5xl text-balance">
          Let's build something that{" "}
          <span className="italic text-terracotta">actually works.</span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7">
            <div className="space-y-px bg-paper/10 border border-paper/10">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 bg-ink hover:bg-paper hover:text-ink transition-colors duration-500 p-6 md:p-7"
                >
                  <div className="flex items-center gap-4">
                    <l.icon width={18} height={18} className="opacity-60 group-hover:text-terracotta group-hover:opacity-100" />
                    <div>
                      <div className="label-eyebrow text-paper/50 group-hover:text-ink-soft">{l.label}</div>
                      <div className="font-serif text-xl md:text-2xl mt-1">{l.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="opacity-40 group-hover:opacity-100 group-hover:text-terracotta transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-10">
            <p className="text-paper/70 text-lg leading-relaxed">
              Open to brand strategy roles, advisory, and freelance partnerships where
              creative thinking meets clean execution.
            </p>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-terracotta text-paper text-sm font-medium hover:bg-paper hover:text-ink transition-colors duration-500 self-start"
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-paper/15 flex flex-wrap items-center justify-between gap-4 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Ishank Jha. All rights reserved.</span>
          <span>Designed with intent. Built to perform.</span>
        </div>
      </div>
    </section>
  );
};
