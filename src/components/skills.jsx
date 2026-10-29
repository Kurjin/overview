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
      { threshold: 0.1, rootMargin: "-50px" },
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
