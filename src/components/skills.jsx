import React, { useState, useEffect, useRef } from "react";
import { Layers } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const techStack = [
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "MySQL", iconClass: "devicon-mysql-plain-wordmark colored" },
    { name: "PHP", iconClass: "devicon-php-plain colored" },
    { name: "Laravel", iconClass: "devicon-laravel-plain colored" },
    { name: ".NET", iconClass: "devicon-dotnetcore-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "Figma", iconClass: "devicon-figma-plain colored" },
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

  // Detect overflow and animate only when needed
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const totalTrackWidth = trackRef.current.scrollWidth;
      const singleListWidth = totalTrackWidth / 2; // we duplicate the list
      setShouldAnimate(singleListWidth > containerWidth);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 h-[100vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />

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
              <Layers className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white ">
                TechStack
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Tools and technologies I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Tech Icons Marquee */}
          <div
            ref={containerRef}
            className={`group relative overflow-hidden mask-fade-x mb-4 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div
              ref={trackRef}
              className="marquee-track items-center gap-8 px-2   h-[6rem]"
              style={{ animation: shouldAnimate ? undefined : "none" }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-400/40 hover:scale-[1.03] transition-all duration-300"
                  title={tech.name}
                >
                  <i className={`${tech.iconClass} text-5xl`} />
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          {/* <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "1000ms" }}
          > */}
          {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto hover:border-purple-400/40 transition-all duration-300"> */}
          {/* <div className="flex justify-center mb-4">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse`}
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                  ))}
                </div>
              </div> */}
          {/* <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Always learning and adapting to new technologies. Currently
                exploring{" "}
                <span className="text-blue-400 font-semibold">
                  AWS & AI/ML integration
                </span>{" "}
                and advancing my{" "}
                <span className="text-purple-400 font-semibold">
                  ReactJS / JavaScript
                </span>{" "}
                skills.
              </p> */}
          {/* <div className="flex justify-center space-x-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                  Learning: ReactJS & NextJs
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                  Exploring: AWS & AI/ML
                </span>
              </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
