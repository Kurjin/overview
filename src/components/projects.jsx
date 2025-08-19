import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Simplified projects schema
  const projects = [
    {
      project: "D.A.N.B Financial Consultancy Services",
      stack: ["React", "Node.js", "TailwindCSS"],
      description:
        "A single-page app for a financing company to showcase collateral and non-collateral loan offerings.",
      image: "https://placehold.co/800x450/png?text=Project+Image",
      github: "https://github.com/yourname/danb-finance",
      live: "https://danb-finance.vercel.app",
      iconClass: [
        "devicon-react-original colored",
        "devicon-nodejs-plain colored",
        "devicon-tailwindcss-plain colored",
      ],
    },
    {
      project: "QCU-FMS: Facilities Management System",
      stack: ["React", "Laravel", "MySQL"],
      description:
        "Facilities and reporting system with job orders, student reports, bookings, and an analytics dashboard.",
      image: "https://placehold.co/800x450/png?text=Project+Image",
      github: "https://github.com/yourname/qcu-fms",
      live: "https://qcu-fms.vercel.app",
      iconClass: [
        "devicon-react-original colored",
        "devicon-laravel-plain colored",
        "devicon-mysql-plain-wordmark colored",
      ],
    },
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
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-4">
              <Code2 className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((item, index) => (
              <div
                key={item.project}
                className={`group bg-white/5  border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.02] transform-gpu will-change-transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.project}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.project}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 text-md  leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.stack.map((tech) => (
                      <span
                        key={`${item.project}-${tech}`}
                        className="px-3 py-1 text-sm font-medium bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href="/oops"
                      target="_self"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white rounded-lg hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    <a
                      href="/oops"
                      target="_self"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Link
              to="/maintenance"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <Code2 className="w-5 h-5 mr-2" />
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
