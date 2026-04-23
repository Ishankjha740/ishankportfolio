import { ArrowDownToLine, ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "jha.ishank74@gmail.com", href: "mailto:jha.ishank74@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 99858 76895", href: "tel:+919985876895" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ishankjha", href: "https://www.linkedin.com/in/ishankjha" },
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
                    <l.icon size={18} className="opacity-60 group-hover:text-terracotta group-hover:opacity-100" />
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
