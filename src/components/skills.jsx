import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Settings,
  Star,
  Zap,
  Layers,
  RefreshCw,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 70 },
        { name: "JavaScript", level: 60 },
        { name: "Tailwind CSS", level: 80 },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      hoverColor: "hover:border-blue-400/40",
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "MySQL", level: 70 },
        { name: "Php", level: 60 },
        { name: "Laravel", level: 70 },
        { name: ".Net", level: 70 },
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      hoverColor: "hover:border-green-400/40",
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 65 },
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      hoverColor: "hover:border-purple-400/40",
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
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
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
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                TechStack
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Tools and technologies I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                // key={category.title}
                // className={`group relative p-8 bg-white/5 backdrop-blur-sm border ${
                //   category.borderColor
                // } ${
                //   category.hoverColor
                // } rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                //   isVisible
                //     ? "translate-y-0 opacity-100"
                //     : "translate-y-12 opacity-0"
                // }`}
                // style={{
                //   animationDelay: `${categoryIndex * 200}ms`,
                //   boxShadow:
                //     hoveredCategory === categoryIndex
                //       ? `0 25px 50px -12px ${
                //           category.color.includes("blue")
                //             ? "rgba(59, 130, 246, 0.25)"
                //             : category.color.includes("green")
                //             ? "rgba(34, 197, 94, 0.25)"
                //             : "rgba(168, 85, 247, 0.25)"
                //         }`
                //       : "none",
                // }}
                // onMouseEnter={() => setHoveredCategory(categoryIndex)}
                // onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Gradient Background */}
                  <div
                  // className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Category Header */}
                  {/* <div className="relative z-10 text-center mb-8">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${category.color} rounded-2xl mb-4 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
                    />
                  </div> */}

                  {/* Skills List with Progress Bars */}
                  {/* <div className="relative z-10 space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`transform transition-all duration-500 ${
                          isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-4 opacity-0"
                        }`}
                        style={{
                          animationDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${
                                categoryIndex * 200 + skillIndex * 100 + 300
                              }ms`,
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div> */}

                  {/* Floating Elements */}
                  {/* <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div
                      className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full animate-bounce`}
                    />
                  </div> */}
                </div>
              );
            })}
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
