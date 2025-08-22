import React from "react";
import { AlertTriangle, Eye, Zap, Activity, Lock } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const WhySecuritySection = () => {
  const threats = [
    {
      icon: AlertTriangle,
      name: "Canister exploits",
      description: "Malicious code injection",
    },
    {
      icon: Eye,
      name: "Phishing attacks",
      description: "Identity theft attempts",
    },
    { icon: Zap, name: "Brute force", description: "Unauthorized access" },
    {
      icon: Activity,
      name: "Cycles drain",
      description: "Resource exhaustion",
    },
    {
      icon: Lock,
      name: "Access control",
      description: "Permission vulnerabilities",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Security on{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ICP
            </span>{" "}
            Matters
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            The Internet Computer Protocol represents the future of
            decentralized computing, but with great power comes great
            responsibility. As the ecosystem grows, so do the security
            challenges that threaten its integrity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {threats.map((threat, index) => (
            <Card key={index} hover className="text-center">
              <threat.icon className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {threat.name}
              </h3>
              <p className="text-sm text-slate-400">{threat.description}</p>
            </Card>
          ))}
        </div>

        <Card className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            CyberSec AI Agent Solves These Gaps
          </h3>
          <p className="text-lg text-slate-300 mb-6">
            Our AI-powered solution provides comprehensive protection against
            all these threats and more, ensuring your ICP infrastructure remains
            secure and resilient.
          </p>
          <Button>Learn How We Protect You</Button>
        </Card>
      </div>
    </section>
  );
};

export default WhySecuritySection;
