import React from "react";
import { Shield, CheckCircle } from "lucide-react";
import Card from "./ui/Card";

const AboutSection = () => {
  const features = [
    "Automated vulnerability detection",
    "Real-time AI threat analysis",
    "Certified query responses",
    "Inter-canister call security",
    "Wallet-based secure logging",
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CyberSec AI Agent
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A decentralized cybersecurity solution designed specifically for the
            Internet Computer Protocol (ICP) ecosystem, providing comprehensive
            protection through advanced AI-powered security intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Key Capabilities
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle
                    className="text-cyan-400 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card hover className="text-center">
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Enterprise-Grade Security
            </h3>
            <p className="text-slate-300">
              Built with military-grade encryption and advanced AI algorithms to
              ensure your blockchain infrastructure remains secure against
              evolving threats.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
