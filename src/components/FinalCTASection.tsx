import React from "react";
import { Github, TrendingUp, Users, ArrowRight } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const FinalCTASection = () => {
  const ctas = [
    {
      title: "For Developers",
      subtitle: "Integrate CyberSec AI",
      description:
        "Easy-to-use APIs and SDKs for seamless security integration",
      button: "Start Building",
      icon: Github,
    },
    {
      title: "For Investors",
      subtitle: "Support Blockchain Security",
      description: "Join us in building the most secure blockchain ecosystem",
      button: "Learn More",
      icon: TrendingUp,
    },
    {
      title: "For Community",
      subtitle: "Join Us in Building Safer ICP",
      description: "Contribute to the future of decentralized security",
      button: "Get Involved",
      icon: Users,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Secure the Future?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctas.map((cta, index) => (
            <Card key={index} hover className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                <cta.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {cta.title}
              </h3>
              <h4 className="text-lg text-purple-400 mb-4">{cta.subtitle}</h4>
              <p className="text-slate-300 mb-6">{cta.description}</p>
              <Button className="w-full">{cta.button}</Button>
            </Card>
          ))}
        </div>

        <Card className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-6">
            CyberSec AI Agent isn't just a project. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              It's a movement towards trust, resilience, and security in Web3.
            </span>
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers, researchers, and security experts in
            building the most secure blockchain ecosystem.
          </p>
          <Button size="lg">
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTASection;
