import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Eye,
  Code2,
  Rocket,
  Settings,
  Wrench,
  RefreshCw,
} from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  // const projects = [
  //   {
  //     title: "D.A.N.B Financial Consultancy Services",
  //     description:
  //       "A Single Page Application for a Financing Company to create a vision for collateral and non-collateral loans for business owners, real-state, and personal clients",
  //     technologies: ["React", "Node.js", "TailwindCSS"],
  //     image: "bg-gradient-to-br from-blue-500 to-purple-600",
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     category: "Front End",
  //     status: "Beta",
  //     // stars: "2.4k",
  //     // views: "15.8k",
  //   },
  //   {
  //     title:
  //       "QCU-FMS: Facilities Management and Reporting System for Quezon City University",
  //     description:
  //       "Collaborative task management tool with real-time updates, job orders, student reports, booking and analytics dashboard. Built with modern web technologies for seamless team collaboration and productivity tracking.",
  //     technologies: ["React.js", "Laravel", "MySQL"],
  //     image: "bg-gradient-to-br from-green-500 to-emerald-600",
  //     liveUrl: "#",
  //     githubUrl: "#",
  //     category: ["Progressive Web App & Web App"],
  //     status: "Beta",
  //     // stars: "1.8k",
  //     // views: "12.3k",
  //   },
  // ];

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

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transform transition-all duration-1000
               ${
                 isVisible
                   ? "translate-y-0 opacity-100"
                   : "translate-y-8 opacity-0"
               }
            `}
          >
            <div className="flex justify-center items-center mb-1">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Projects
              </h2>
            </div>
            {/* <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Some of my recent work showcasing modern web development and
              innovative solutions
            </p> */}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Icon with rotating animation */}
          {/* <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25">
                <Settings
                  className="w-8 h-8 text-white animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Wrench className="w-3 h-3 text-gray-800" />
              </div>
            </div>
          </div> */}

          {/* Title */}
          <p className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
            Under Maintenance
          </p>

          {/* Estimated Time */}
          <div
            className={`bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ animationDelay: "1000ms" }}
          >
            <p className="text-purple-300 font-medium">
              Expected to be back online shortly
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Thank you for your patience
            </p>
          </div>

          {/* Status Message */}
          <div
            className={`flex items-center justify-center text-gray-400 mt-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <RefreshCw
              className="w-4 h-4 mr-2 animate-spin"
              style={{ animationDuration: "2s" }}
            />
            <span>System updates in progress...</span>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* {projects.map((project, index) => ( */}
              <div
              // key={project.title}
              // className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl transform ${
              //   isVisible
              //     ? "translate-y-0 opacity-100"
              //     : "translate-y-12 opacity-0"
              // }`}
              // style={{
              //   animationDelay: `${index * 200}ms`,
              //   boxShadow:
              //     hoveredProject === index
              //       ? "0 25px 50px -12px rgba(168, 85, 247, 0.25)"
              //       : "none",
              // }}
              // onMouseEnter={() => setHoveredProject(index)}
              // onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Header */}
                <div className="">
                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" /> */}

                  {/* Floating Elements */}
                  {/* <div className="absolute top-4 right-4 flex space-x-2">
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
                  </div> */}

                  {/* Stats */}
                  {/* <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white/80">
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
                  {/* <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
                  </div> */}
                </div>

                <div className="p-8">
                  {/* Project Description */}
                  {/* <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p> */}

                  {/* Technologies */}
                  {/* <div className="flex flex-wrap gap-2 mb-8">
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
                  </div> */}

                  {/* Project Links */}
                  {/* <div className="flex gap-4">
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
                  </div> */}
                </div>

                {/* Corner Decoration */}
                {/* <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" /> */}
                {/* <div
                  className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                /> */}
              </div>
            {/* ))} */}
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
    </section>
  );
};

export default Projects;
