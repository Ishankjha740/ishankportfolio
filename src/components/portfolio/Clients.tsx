import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";
import logoGMRAirport from "@/assets/clients/GMR_Hyderabad_International_Airport.jpg";
import logoGMRSchool from "@/assets/clients/GMR_School_of_Aviation.jpg";
import logoGMRAeroTechnic from "@/assets/clients/gmr_aero_technic_logo.jpg";
import logoTrilight from "@/assets/clients/The_Trilight.png";
import logoInsideOut from "@/assets/clients/Inside_Out.png";
import logoSriAditya from "@/assets/clients/Sri_Aditya_Vantage.png";
import logoStyleChai from "@/assets/clients/Style_Chai.png";
import logoCommons from "@/assets/clients/The_Commons_by_Incor.jpg";

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
  logo?: string;
  logoBg?: string;
  socials: Social;
};

const clients: Client[] = [
  {
    name: "GMR Hyderabad International Airport",
    initials: "GMR",
    logo: logoGMRAirport,
    socials: {
      instagram: "https://www.instagram.com/rgiahyd/",
      facebook: "https://www.facebook.com/HyderabadAirport",
      twitter: "https://x.com/RGIAHyd",
      linkedin: "https://www.linkedin.com/company/rgiahyd/",
      youtube: "https://www.youtube.com/@RGIAHyderabad",
    },
  },
  {
    name: "GMR School of Aviation",
    initials: "GSA",
    logo: logoGMRSchool,
    socials: {
      instagram: "https://www.instagram.com/gmrschoolofaviation/",
      facebook: "https://www.facebook.com/gmr-school-of-aviation",
      linkedin: "https://www.linkedin.com/company/rgiahyd/",
    },
  },
  {
    name: "GMR Aero Technic (MRO)",
    initials: "GAT",
    logo: logoGMRAeroTechnic,
    socials: {
      linkedin: "https://www.linkedin.com/company/gmr-aero-technic/",
    },
  },
  {
    name: "The Trilight",
    initials: "TTL",
    logo: logoTrilight,
    socials: {
      instagram: "https://www.instagram.com/thetrilight/",
      facebook: "https://www.facebook.com/thetrilighthyd",
      twitter: "https://x.com/thetrilight",
      linkedin: "https://www.linkedin.com/company/thetrilight/",
      youtube: "https://www.youtube.com/@TheTrilight",
    },
  },
  {
    name: "Inside Out",
    initials: "IO",
    logo: logoInsideOut,
    socials: {
      instagram: "https://www.instagram.com/insideoutgelato/",
      facebook: "https://www.facebook.com/insideoutgelato",
    },
  },
  {
    name: "Sri Aditya Vantage",
    initials: "SAV",
    logo: logoSriAditya,
    socials: {
      instagram: "https://www.instagram.com/sriaditya_luxury/",
      facebook: "https://www.facebook.com/sriadityaluxury",
      twitter: "https://x.com/sriadityaluxury",
      linkedin: "https://www.linkedin.com/company/sri-aditya-luxury/",
      youtube: "https://www.youtube.com/@SriAdityaLuxury",
    },
  },
  {
    name: "Style Chai",
    initials: "SC",
    logo: logoStyleChai,
    socials: {
      instagram: "https://www.instagram.com/stylechai_ch/",
      facebook: "https://www.facebook.com/stylechai",
      linkedin: "https://www.linkedin.com/company/stylechai/",
      youtube: "https://www.youtube.com/@stylechai_ch",
    },
  },
  {
    name: "The Commons by Incor",
    initials: "TCI",
    logo: logoCommons,
    socials: {},
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
        <Reveal className="text-center mb-3 md:mb-4">
          <div className="inline-block border-2 border-ink px-6 sm:px-8 md:px-16 py-4 sm:py-5 bg-paper shadow-pop-yellow">
            <h2 className="display-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-ink">
              Clients Handled
            </h2>
          </div>
        </Reveal>
        <Reveal as="p" className="text-center label-eyebrow mb-10 md:mb-14" delay={80}>
          Brands I've built and scaled
        </Reveal>

        {(() => {
          const renderCard = (c: Client, i: number) => (
            <Reveal
              as="article"
              key={c.name}
              delay={i * 70}
              className="group relative bg-paper hover:bg-citrus/40 transition-colors duration-300 p-5 sm:p-7 md:p-8 flex flex-col items-center justify-between min-h-[180px] sm:min-h-[210px] card-hover"
            >
              {/* Logo placeholder block — swap with <img src=... /> later */}
              <div className="flex-1 w-full flex items-center justify-center">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="logo-mono max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-full object-contain"
                  />
                ) : (
                  <div className="display-heading text-3xl sm:text-4xl md:text-5xl text-ink transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    {c.initials}
                  </div>
                )}
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
                      className="border border-ink/60 hover:border-ink hover:bg-ink hover:text-paper p-1.5 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Icon size={12} strokeWidth={2.25} />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          );

          const topRows = clients.slice(0, 6);
          const lastRow = clients.slice(6);

          return (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
                {topRows.map((c, i) => renderCard(c, i))}
              </div>
              {lastRow.length > 0 && (
                <div className="mt-px grid grid-cols-2 gap-px bg-ink border-2 border-ink border-t-0 sm:max-w-[66.6667%] sm:mx-auto">
                  {lastRow.map((c, i) => renderCard(c, topRows.length + i))}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>
  );
};
