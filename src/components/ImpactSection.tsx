import React from "react";
import { TrendingUp, Shield, Globe, Users } from "lucide-react";
import Card from "./ui/Card";

const ImpactSection = () => {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Increases Trust",
      description:
        "Building confidence in ICP ecosystem through verified security",
    },
    {
      icon: Shield,
      title: "Prevents Costly Exploits",
      description:
        "Proactive threat detection saves millions in potential losses",
    },
    {
      icon: Globe,
      title: "Secure dApp Platform",
      description: "Establishing ICP as the most secure blockchain for dApps",
    },
    {
      icon: Users,
      title: "Community-Driven Security",
      description: "Collaborative approach to blockchain security standards",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Impact on{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ICP Ecosystem
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-6 relative">
                  <impact.icon className="w-10 h-10 text-cyan-400" />
                  {index < impacts.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {impact.title}
              </h3>
              <p className="text-slate-300">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transforming Web3 Security
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              CyberSec AI Agent is not just protecting individual projects—we're
              building the foundation for a more secure, trustworthy, and
              resilient decentralized internet.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
