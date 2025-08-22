import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhySecuritySection from "./components/WhySecuritySection";
import FeaturesSection from "./components/FeaturesSection";
import ImpactSection from "./components/ImpactSection";
import TeamSection from "./components/TeamSection";
import WhySection from "./components/WhySection";
import DemoSection from "./components/DemoSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhySecuritySection />
      <FeaturesSection />
      <ImpactSection />
      <TeamSection />
      <WhySection />
      <DemoSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
