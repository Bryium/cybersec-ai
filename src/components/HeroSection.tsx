import React from "react";
import { ArrowRight, Play } from "lucide-react";
import CyberBackground from "./ui/CyberBackground";
import Button from "./ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CyberBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CyberSec AI Agent
          </span>
          <br />
          <span className="text-slate-200">Redefining Blockchain Security</span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Protecting the Internet Computer (ICP) ecosystem with AI-powered
          threat detection, certified scanning, and advanced cybersecurity
          intelligence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group">
            Start Securing Your Canister
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>

          {/* Scrolls down to Demo Section */}
          <a href="#demo">
            <Button variant="secondary" size="lg" className="group">
              <Play
                className="mr-2 group-hover:scale-110 transition-transform"
                size={20}
              />
              Watch Demo on YouTube
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
