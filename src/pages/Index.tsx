import { Nav } from "@/components/portfolio/Nav";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { CreativeWorks } from "@/components/portfolio/CreativeWorks";
import { Clients } from "@/components/portfolio/Clients";
import { Contact } from "@/components/portfolio/Contact";
import { SectionDivider } from "@/components/portfolio/SectionDivider";

const Index = () => {
  return (
    <>
    <Helmet>
      <title>Ishank Jha — Social Media &amp; Brand Strategist</title>
      <meta name="description" content="Ishank Jha blends storytelling with analytics to build high-performing digital ecosystems—scaling engagement and driving brand impact." />
      <link rel="canonical" href="https://ishankportfolio.lovable.app/" />
      <meta property="og:url" content="https://ishankportfolio.lovable.app/" />
    </Helmet>
    <main
      className="min-h-screen bg-paper transition-[padding] duration-300 ease-out lg:pl-[var(--rail-w,220px)]"
    >
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Work />
      <CreativeWorks />
      <Clients />
      <Skills />
      <Contact />
    </main>
    </>
  );
};

export default Index;
