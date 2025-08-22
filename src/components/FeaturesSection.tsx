import {
  Eye,
  Shield,
  AlertTriangle,
  FileText,
  Brain,
  BarChart3,
} from "lucide-react";
import Card from "./ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Threat Detection",
      description:
        "Advanced AI algorithms continuously monitor your canisters for suspicious activities and potential security breaches.",
    },
    {
      icon: Shield,
      title: "Certified Network Scanning",
      description:
        "Comprehensive network analysis with certified results to ensure complete visibility of your security posture.",
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability & CVE Analysis",
      description:
        "Real-time scanning against the latest CVE database with automated vulnerability assessments and remediation suggestions.",
    },
    {
      icon: FileText,
      title: "Secure Logging & Audit",
      description:
        "Immutable audit trails with wallet-based authentication ensuring complete transparency and compliance.",
    },
    {
      icon: Brain,
      title: "AI-Powered Security Recommendations",
      description:
        "Machine learning models provide personalized security recommendations based on your specific infrastructure patterns.",
    },
    {
      icon: BarChart3,
      title: "Weekly Security Reports",
      description:
        "Comprehensive security analytics and reports delivered weekly to keep you informed of your security status.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect every aspect of
            your ICP infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
