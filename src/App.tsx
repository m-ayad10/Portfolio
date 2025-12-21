// App.tsx
import { useEffect } from "react";
import "./App.css"; // Make sure this is imported
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/About/About";
import SkillsSectionSimple from "./Components/SkillSection/SkillSection";
import ProjectsSection from "./Components/ProjectSection/ProjectSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import SmoothCursor from "./Components/lightswind/smooth-cursor";
import SmokeyCursor from "./Components/lightswind/smokey-cursor";
import ParticlesBackground from "./Components/lightswind/particles-background";

function App() {
  // Initialize AOS if you want animations
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 600,
        once: true,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
 
<ParticlesBackground
  colors={['#00ffff', '#ff00ff', '#ffaa00']}
  size={4}
  countDesktop={40}
  countTablet={30}
  countMobile={30}
/>;
      <SmoothCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSectionSimple />
      <ProjectsSection />
      <ContactSection />
      {/* Add your content sections */}
    </div>
  );
}

export default App;
