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
    <section id="contact" className="py-16 md:py-28 bg-paper">
      <div className="container max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper-warm shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">Contact</h2>
          </div>
          <p className="mt-5 sm:mt-6 text-ink-soft text-base sm:text-lg">
            Feel <span className="bg-citrus px-1 font-bold text-ink">free</span> to contact me!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink border-2 border-ink">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 sm:gap-5 bg-paper-warm hover:bg-citrus transition-colors duration-300 p-4 sm:p-6"
            >
              <span className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 border-2 border-ink bg-paper flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-citrus transition-colors">
                <l.icon width={18} height={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-soft group-hover:text-ink">{l.label}</div>
                <div className="display-heading text-sm sm:text-base md:text-lg mt-1 text-ink truncate">{l.value}</div>
              </div>
              <ArrowUpRight size={16} className="ml-auto text-ink opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-5 sm:gap-6 text-center">
          <a
            href="/Ishank_Jha_Resume.pdf"
            download="Ishank_Jha_Resume.pdf"
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-ink text-citrus text-xs sm:text-sm font-black uppercase tracking-widest shadow-pop-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300"
          >
            <ArrowDownToLine size={16} />
            Download Resume
          </a>
          <p className="display-heading text-xl sm:text-2xl md:text-3xl text-ink mt-2 sm:mt-4">
            Thanks <span className="bg-citrus px-2">For Patience!</span>
          </p>
        </div>

        <div className="mt-12 sm:mt-16 pt-5 sm:pt-6 border-t-2 border-ink flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold text-center">
          <span>© {new Date().getFullYear()} Ishank Jha</span>
          <span>Designed with intent · Built to perform</span>
        </div>
      </div>
    </section>
  );
};
