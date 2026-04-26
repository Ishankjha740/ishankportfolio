import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";

type Social = {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
};

type Client = {
  name: string;
  initials: string;
  socials: Social;
};

// Replace `initials` block with a real <img src="..." /> logo when assets are ready.
const clients: Client[] = [
  {
    name: "GMR Hyderabad Airport",
    initials: "GMR",
    socials: {
      instagram: "https://www.instagram.com/hyderabadairport/",
      facebook: "https://www.facebook.com/HyderabadAirport/",
      twitter: "https://x.com/HydAirport",
      linkedin: "https://www.linkedin.com/company/gmr-hyderabad-international-airport-limited/",
      youtube: "https://www.youtube.com/@GMRHyderabadAirport",
    },
  },
  {
    name: "The Trilight",
    initials: "TTL",
    socials: {
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Inside Out",
    initials: "IO",
    socials: {
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Sri Aditya Vantage",
    initials: "SAV",
    socials: {
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
    },
  },
  {
    name: "Style Chai",
    initials: "SC",
    socials: {
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "The Commons by Incor",
    initials: "TCI",
    socials: {
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

const socialMeta: Array<{
  key: keyof Social;
  Icon: typeof Instagram;
  label: string;
}> = [
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "twitter", Icon: Twitter, label: "X" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "youtube", Icon: Youtube, label: "YouTube" },
];

export const Clients = () => {
  return (
    <section id="clients" className="py-16 md:py-28 bg-paper-warm">
      <div className="container max-w-6xl">
        <div className="text-center mb-3 md:mb-4">
          <div className="inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">
              Clients Handled
            </h2>
          </div>
        </div>
        <p className="text-center label-eyebrow mb-10 md:mb-14">
          Brands I've built and scaled
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
          {clients.map((c) => (
            <article
              key={c.name}
              className="group relative bg-paper hover:bg-citrus/40 transition-colors duration-300 p-5 sm:p-7 md:p-8 flex flex-col items-center justify-between min-h-[180px] sm:min-h-[210px]"
            >
              {/* Logo placeholder block — swap with <img src=... /> later */}
              <div className="flex-1 w-full flex items-center justify-center">
                <div className="display-heading text-3xl sm:text-4xl md:text-5xl text-ink transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {c.initials}
                </div>
              </div>

              <div className="mt-4 sm:mt-5 text-center">
                <h3 className="display-heading text-xs sm:text-sm text-ink leading-tight">
                  {c.name}
                </h3>
              </div>

              {/* Socials — subtle by default, lift on hover */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2.5 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {socialMeta.map(({ key, Icon, label }) => {
                  const href = c.socials[key];
                  if (!href) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.name} on ${label}`}
                      onClick={(e) => e.stopPropagation()}
                      className="border border-ink/60 hover:border-ink hover:bg-ink hover:text-paper p-1.5 transition-colors duration-200"
                    >
                      <Icon size={12} strokeWidth={2.25} />
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
