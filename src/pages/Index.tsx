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
    <main
      className="min-h-screen bg-paper transition-[padding] duration-300 ease-out lg:pl-[var(--rail-w,220px)]"
    >
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
