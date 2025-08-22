import React from "react";
import { Shield, Activity } from "lucide-react";
import Card from "./ui/card";

const WhySection: React.FC = () => {
  const reasons: string[] = [
    "Blockchain adoption is accelerating, but security expertise is scarce",
    "Traditional security tools are inadequate for decentralized systems",
    "Hackers never sleep, and neither should your security",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Reasons */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why We Built{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CyberSec AI Agent
              </span>
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-cyan-400 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg text-slate-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Mission Card */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-purple-500/30">
            <div className="text-center">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                CyberSec AI Agent ensures every canister, wallet, and smart
                contract is actively monitored and secured against the
                ever-evolving landscape of cyber threats.
              </p>
              <div className="inline-flex items-center text-cyan-400">
                <Activity className="mr-2" size={20} />
                <span className="font-semibold">
                  Always Vigilant, Always Protecting
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
