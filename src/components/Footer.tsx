import React from "react";
import {
  Twitter,
  Github,
  Linkedin,
  Youtube,
  type LucideIcon,
} from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const footerLinks: string[] = [
    "Home",
    "About",
    "Features",
    "Team",
    "Demo",
    "Contact",
  ];
  const socialLinks: SocialLink[] = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            CyberSec AI Agent
          </h3>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">
              © 2024 CyberSec AI Agent. Building the future of blockchain
              security.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
