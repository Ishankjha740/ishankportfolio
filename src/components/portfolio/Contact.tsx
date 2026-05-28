import { ArrowDownToLine, ArrowUpRight, Mail, Phone, Link2, MapPin, Send } from "lucide-react";
import { useState, type SVGProps } from "react";
import { Link } from "react-router-dom";
import { useSiteText } from "@/hooks/useSiteText";
import { ContactDialog } from "./ContactDialog";
import { trackEvent } from "@/lib/analytics";

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

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  const [open, setOpen] = useState(false);
  const email = useSiteText("contact.email", "jha.ishank74@gmail.com");
  const phone = useSiteText("contact.phone", "+91 99858 76895");
  const linkedin = useSiteText("contact.linkedin", "https://www.linkedin.com/in/ishankjha");
  const behance = useSiteText("contact.behance", "https://www.behance.net/ishankjha");
  const location = useSiteText("contact.location", "Hyderabad, Telangana, India");
  const resumeUrl = useSiteText("contact.resume_url", "/Ishank Jha_resume_updated.pdf");

  const stripProto = (u: string) => u.replace(/^https?:\/\//, "");

  const links = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone.replace(/\s+/g, "")}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: stripProto(linkedin), href: linkedin },
    { icon: BehanceIcon, label: "Behance", value: stripProto(behance), href: behance },
    { icon: Link2, label: "More Info", value: "https://bit.ly/ishankjhaportfolio", href: "https://bit.ly/ishankjhaportfolio" },
    { icon: MapPin, label: "Location", value: location, href: `https://www.google.com/maps/place/${encodeURIComponent(location)}` },
  ];

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

        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-6 sm:gap-8 text-center">
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-5 w-full max-w-xl">
            <button
              type="button"
              onClick={() => {
                trackEvent("contact_section_contact_me");
                setOpen(true);
              }}
              className="group flex-1 inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-ink text-citrus border-2 border-ink text-xs sm:text-sm font-black uppercase tracking-widest shadow-pop-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300"
            >
              <Send size={16} />
              Contact Me
            </button>
            <a
              href={resumeUrl}
              download
              onClick={() => trackEvent("download_resume")}
              className="group flex-1 inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-citrus text-ink border-2 border-ink text-xs sm:text-sm font-black uppercase tracking-widest shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300"
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
          </div>
          <p className="display-heading text-xl sm:text-2xl md:text-3xl text-ink mt-2 sm:mt-4">
            Thanks <span className="bg-citrus px-2">For Patience!</span>
          </p>
        </div>

        <ContactDialog open={open} onOpenChange={setOpen} />

        <div className="mt-12 sm:mt-16 pt-5 sm:pt-6 border-t-2 border-ink flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold text-center">
          <span>© {new Date().getFullYear()} Ishank Jha</span>
          <span>Brand Strategist · Content Architect</span>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t-2 border-ink text-[10px] sm:text-xs uppercase tracking-wider text-ink-soft font-bold text-center space-y-1.5 sm:space-y-2">
          <p>All content presented on this website is for informational and portfolio purposes only.</p>
          <p>All trademarks, logos, and brand names are the property of their respective owners.</p>
          <p>Work shown may include collaborative projects, and individual contributions may vary.</p>
          <p>No commercial claims are made over third-party assets.</p>
        </div>

        <nav
          aria-label="Secondary footer"
          className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-ink/20"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
            {[
              { to: "/security", label: "Security" },
              { to: "/code-of-conduct", label: "Code of Conduct" },
              { to: "/license", label: "License" },
              { to: "/sitemap", label: "Sitemap" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative inline-block text-ink-soft transition-colors duration-300 hover:text-ink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:text-ink focus-visible:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};
