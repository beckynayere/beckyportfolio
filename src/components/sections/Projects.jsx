import { RevealOnScroll } from "../RevealOnScroll";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description: "Scalable cloud infrastructure management with real-time monitoring and automated scoring.",
      tags: ["Host", "Network", "SNR", "Socket"],
      link: "#",
      accentColor: "blue" // Added for color customization
    },
    {
      title: "E-Commerce Web App",
      description: "Full-sized e-commerce with modern UI, content supports image apps, and automated protection.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
      accentColor: "purple"
    },
    {
      title: "AI Analytics Dashboard",
      description: "AI-powered data visualization platform with predictive analytics and interactive reports.",
      tags: ["Python", "TensorFlow", "D3.js", "Flask"],
      link: "#",
      accentColor: "green"
    },
    {
      title: "Real-Time Chat App",
      description: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      tags: ["Socket.IO", "Express", "React", "Redis"],
      link: "#",
      accentColor: "cyan"
    }
  ];

  // Color mapping for tags and accents
  const colorMap = {
    blue: {
      text: "text-blue-400",
      hoverText: "text-blue-300",
      bg: "bg-blue-500/10",
      hoverBg: "bg-blue-500/20",
      shadow: "shadow-blue-500/10",
      border: "border-blue-500/30"
    },
    purple: {
      text: "text-purple-400",
      hoverText: "text-purple-300",
      bg: "bg-purple-500/10",
      hoverBg: "bg-purple-500/20",
      shadow: "shadow-purple-500/10",
      border: "border-purple-500/30"
    },
    green: {
      text: "text-green-400",
      hoverText: "text-green-300",
      bg: "bg-green-500/10",
      hoverBg: "bg-green-500/20",
      shadow: "shadow-green-500/10",
      border: "border-green-500/30"
    },
    cyan: {
      text: "text-cyan-400",
      hoverText: "text-cyan-300",
      bg: "bg-cyan-500/10",
      hoverBg: "bg-cyan-500/20",
      shadow: "shadow-cyan-500/10",
      border: "border-cyan-500/30"
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Some of my recent work and contributions
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = colorMap[project.accentColor] || colorMap.blue;
            
            return (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className={`group relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:${colors.shadow} hover:${colors.border}`}>
                  
                  <h3 className={`text-xl font-bold mb-3 group-hover:${colors.text} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-medium hover:${colors.hoverBg} transition-all`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto">
                    <a
                      href={project.link}
                      className={`inline-flex items-center ${colors.text} hover:${colors.hoverText} transition-colors group/link font-medium`}
                    >
                      View Project
                      <FiExternalLink className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};