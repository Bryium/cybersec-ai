import React from "react";
import { Play, Github, Users } from "lucide-react";
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

        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-4 hover:bg-red-500 transition-colors cursor-pointer">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Demo Video
                </h3>
                <p className="text-slate-400">
                  Click to watch our comprehensive demo
                </p>
              </div>
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
                <Github className="mr-2" size={16} />
                Contribute on GitHub
              </Button>
              <Button variant="secondary" size="sm">
                <Users className="mr-2" size={16} />
                Join Discord
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
