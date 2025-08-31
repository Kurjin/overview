import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
    >
      {/* grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          {/* <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-lg text-gray-200 mb-4 font-medium">Hello, I'm</p>
          </div> */}

          {/* Name */}
          <div
            className={`transform transition-all duration-700 delay-200  mt-16 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-5xl sm:text-md  font-bold mb-3 text-gray-200">
              Eugine Manliclic
            </h1>
          </div>

          {/* Title */}
          <div
            className={`transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
              Front End Developer
            </h2>
          </div>

          {/* Description */}
          <div
            className={`transform transition-all duration-700 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              I build modern web applications with clean code and exceptional
              user experiences. Passionate about creating solutions that make a
              difference.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-700 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={800}
              className="inline-block px-4 py-2 bg-gray-900 border border-gray-400 pointer text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Link>
          </div>

          {/* Social Links */}
          <div
            className={`transform transition-all duration-700 delay-1000 mt-4 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Kurjin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-200 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/eugine-manliclic-89b9b8377"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 hover:text-gray-200 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transform transition-all duration-700 delay-1200 mt-10 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              to="skills"
              smooth={true}
              offset={-80}
              duration={800}
              className="inline-block cursor-pointer group"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  Explore my work
                </span>
                <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300 animate-bounce" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
