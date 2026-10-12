import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Darshan Sapnar | Developer Portfolio",
  description: "Final Year B.Tech IT Student | Full-Stack Developer | AI Enthusiast.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#080808] overflow-x-hidden">
      {/* Header positioned over hero background */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-auto">
        <Header showSkipIntro={true} skipIntroHref="#projects" />
      </div>

      {/* Hero Landing Page */}
      <main className="w-full min-h-screen">
        <Hero />
      </main>
    </div>
  );
}
