import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import AboutMe from "@/components/AboutMe";
import TechnicalWriting from "@/components/TechnicalWriting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Darshan Sapnar | Developer Portfolio",
  description: "Final Year B.Tech IT Student | Full-Stack Developer | AI Enthusiast.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#080808] overflow-x-hidden">
      {/* Fixed navigation header */}
      <Header showNav={true} showSkipIntro={true} skipIntroHref="#projects" />

      {/* Hero, Projects, Tech Stack, Education, About Me, Technical Writing & Contact Sections */}
      <main className="w-full">
        <Hero />
        <Projects />
        <TechStack />
        <Education />
        <AboutMe />
        <TechnicalWriting />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
