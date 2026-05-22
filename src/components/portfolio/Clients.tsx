import type { SVGProps } from "react";
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

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46L20 4"/></svg>
);
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const socialMeta: Array<{
  key: keyof Social;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}> = [
  { key: "instagram", Icon: InstagramIcon, label: "Instagram" },
  { key: "facebook", Icon: FacebookIcon, label: "Facebook" },
  { key: "twitter", Icon: XIcon, label: "X" },
  { key: "linkedin", Icon: LinkedinIcon, label: "LinkedIn" },
  { key: "youtube", Icon: YoutubeIcon, label: "YouTube" },
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

        {(() => {
          const renderCard = (c: Client) => (
            <article
              key={c.name}
              className="group relative bg-paper hover:bg-citrus/40 transition-colors duration-300 p-5 sm:p-7 md:p-8 flex flex-col items-center justify-between min-h-[180px] sm:min-h-[210px]"
            >
              {/* Logo placeholder block — swap with <img src=... /> later */}
              <div className="flex-1 w-full flex items-center justify-center">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-20 sm:max-h-24 md:max-h-28 w-auto max-w-full object-contain transition-transform duration-300 ease-out group-hover:-translate-y-1"
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
                      className="border border-ink/60 hover:border-ink hover:bg-ink hover:text-paper p-1.5 transition-colors duration-200"
                    >
                      <Icon width={12} height={12} />
                    </a>
                  );
                })}
              </div>
            </article>
          );

          const topRows = clients.slice(0, 6);
          const lastRow = clients.slice(6);

          return (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
                {topRows.map(renderCard)}
              </div>
              {lastRow.length > 0 && (
                <div className="mt-px grid grid-cols-2 gap-px bg-ink border-2 border-ink border-t-0 sm:max-w-[66.6667%] sm:mx-auto">
                  {lastRow.map(renderCard)}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>
  );
};
