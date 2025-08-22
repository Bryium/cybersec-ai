import React from "react";
import { Github, Users } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            See CyberSec AI Agent in{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Watch how our AI-powered security solution protects ICP
            infrastructure in real-time
          </p>
        </div>

        {/* Embedded YouTube Video */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/vAxS3BYZ3GM"
                title="CyberSec AI Agent Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </div>

        {/* Community CTA */}
        <div className="mt-16 text-center">
          <Card className="inline-block">
            <h3 className="text-xl font-semibold text-white mb-3">
              Join the Conversation
            </h3>
            <p className="text-slate-300 mb-6">
              Contributors, researchers, and developers welcome to help build
              the future of blockchain security
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="sm">
                <a
                  href="https://github.com/TABBY-ARUH/cybersec-Ai-Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2" size={16} />
                  Contribute on GitHub
                </a>
              </Button>
              <Button variant="secondary" size="sm">
                <a href="#" className="flex items-center">
                  <Users className="mr-2" size={16} />
                  Join Discord
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
