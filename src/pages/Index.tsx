import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Contact } from "@/components/portfolio/Contact";
import { SectionDivider } from "@/components/portfolio/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen bg-paper">
      <Nav />
      <Hero />
      <SectionDivider n="✦ 02" label="The strategist behind the work" />
      <About />
      <SectionDivider n="✦ 03" label="A timeline of the practice" />
      <Experience />
      <Skills />
      <SectionDivider n="✦ 05" label="Engagements I take on" />
      <Services />
      <SectionDivider n="✦ 06" label="Selected case studies" />
      <Work />
      <Contact />
    </main>
  );
};

export default Index;
