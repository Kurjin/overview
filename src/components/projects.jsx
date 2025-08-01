import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Star, Eye, Code2, Rocket } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "D.A.N.B Financial Consultancy Services",
      description:
        "A Single Page Application for a Financing Company to create a vision for collateral and non-collateral loans for business owners, real-state, and personal clients",
      technologies: ["React", "Node.js", "TailwindCss"],
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      liveUrl: "#",
      githubUrl: "#",
      category: "Front End",
      status: "Beta",
      // stars: "2.4k",
      // views: "15.8k",
    },
    {
      title: "QCU-FMS: Facilities Management and Reporting System for Quezon City University",
      description:
        "Collaborative task management tool with real-time updates, job orders, student reports, booking and analytics dashboard. Built with modern web technologies for seamless team collaboration and productivity tracking.",
      technologies: ["React.js", "Laravel", "MySQL"],
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      liveUrl: "#",
      githubUrl: "#",
      category: ["Progressive Web App & Web App"],
      status: "Beta",
      // stars: "1.8k",
      // views: "12.3k",
    },
    // {
    //   title: "AI-Powered Analytics",
    //   description:
    //     "Machine learning platform for business analytics with predictive modeling and data visualization. Provides actionable insights through advanced algorithms and interactive dashboards.",
    //   technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
    //   image: "bg-gradient-to-br from-orange-500 to-red-600",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   category: "AI/ML",
    //   status: "Live",
    //   stars: "3.1k",
    //   views: "22.7k",
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Unified dashboard for managing multiple social media accounts with scheduling and analytics. Streamlines social media management with automation and comprehensive reporting features.",
    //   technologies: ["Next.js", "TypeScript", "Prisma", "Redis", "Vercel"],
    //   image: "bg-gradient-to-br from-pink-500 to-rose-600",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   category: "SaaS",
    //   status: "Live",
    //   stars: "1.9k",
    //   views: "18.5k",
    // },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-4">
              <Rocket className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Some of my recent work showcasing modern web development and
              innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  boxShadow:
                    hoveredProject === index
                      ? "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
                      : "none",
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Header */}
                <div
                  className={`relative h-56 ${project.image} flex items-center justify-center overflow-hidden`}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : project.status === "Beta"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-white/80 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Stats */}
                  {/*  <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white/80">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {project.stars}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {project.views}
                      </span>
                    </div>
                  </div> */}

                  {/* Project Title Overlay */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                  </div>

                  {/* Hover Effect Particles */}
                  {hoveredProject === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white/40 rounded-full animate-float"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                <div className="p-8">
                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-300 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                        style={{
                          animationDelay: `${index * 200 + techIndex * 50}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 border-2 border-gray-400 text-gray-300 font-semibold rounded-2xl hover:border-purple-400 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Code</span>
                    </a>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                <div
                  className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          {/* <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "1000ms" }}
          >
            <button className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center">
                <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View All Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div> */}
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
