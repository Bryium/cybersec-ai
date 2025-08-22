import { Linkedin, Github } from "lucide-react";
import Card from "./ui/card";

const TeamSection = () => {
  const team = [
    {
      name: "Nelly Rumot",
      role: "Backend Developer",
      image: "#",
      linkedin: "https://www.linkedin.com/in/nelly-rumot-7ba206309/",
      github: "https://github.com/TABBY-ARUH",
    },
    {
      name: "Bryium Onyancha",
      role: "Machine Learning Developer",
      image: "",
      linkedin: "https://www.linkedin.com/in/bryium/",
      github: "https://github.com/Bryium",
    },
    {
      name: "Divine Birasa",
      role: "Frontend Developer",
      image: "#",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate experts dedicated to securing the future of blockchain
            technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} hover className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500/30"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-purple-400 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
