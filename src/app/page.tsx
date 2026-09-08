import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

// Everything below the fold loads on demand — the hero is the only thing that
// has to be in the first paint.
const About = dynamic(() => import("@/components/sections/About"));
const CurrentlyBuilding = dynamic(
  () => import("@/components/sections/CurrentlyBuilding")
);
const KaryaloShowcase = dynamic(
  () => import("@/components/sections/KaryaloShowcase")
);
const VoiceAgentsShowcase = dynamic(
  () => import("@/components/sections/VoiceAgentsShowcase")
);
const Toolkit = dynamic(() => import("@/components/sections/Toolkit"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const SelectedWork = dynamic(() => import("@/components/sections/SelectedWork"));
const BuilderNote = dynamic(() => import("@/components/sections/BuilderNote"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <About />
      <CurrentlyBuilding />
      <KaryaloShowcase />
      <VoiceAgentsShowcase />
      <Toolkit />
      <Experience />
      <SelectedWork />
      <BuilderNote />
      <Contact />

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
