import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Heart,
  Code,
  MapPin,
  Target,
  Lightbulb,
  Globe,
  BookOpen,
  Download,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const skills = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Laravel",
    "PHP",
    "MySQL",
    "Tailwind CSS",
    "Git",
    "Figma",
    "REST APIs",
    "Responsive Design",
  ];

  const background = [
    {
      icon: GraduationCap,
      title: "Bachelor of Science in Information Technology",
      institution: "Quezon City University",
      period: "2020 - 2024",
      description:
        "Graduated with strong foundation in software development, database management, and web technologies.",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      institution: "Self-taught & Academic Projects",
      period: "2022 - Present",
      description:
        "Building modern web applications with React, Node.js, and Laravel. Passionate about clean code and user experience.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-white relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-4">
              <User className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                About Me
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Photo and Quick Info */}
            <div
              className={`lg:col-span-1 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "150ms" }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 ">
                <h3 className="text-2xl flex font-bold text-white mb-2">
                  Eugine Manliclic
                </h3>
                <p className="text-blue-400 flex font-semibold mb-4">
                  Front End Developer
                </p>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center ">
                    <MapPin className="w-4 h-4 mr-2" />
                    Based in Philippines
                  </div>
                  <div className="flex items-center ">
                    <Target className="w-4 h-4 mr-2" />
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio and Skills */}
            <div
              className={`lg:col-span-2 space-y-8 transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "250ms" }}
            >
              {/* Professional Bio */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white"></h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  An Information Technology graduate with a passion for creating
                  meaningful digital experiences. I specialize in building
                  modern web applications focusing on clean code and exceptional
                  user experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in technology started with curiosity and has
                  evolved into a love for solving real-world problems through
                  innovative software solutions. I'm always eager to learn new
                  technologies and contribute to impactful projects.
                </p>
              </div>
            </div>

            <div
              className={`lg:col-span-4 space-y-8 transform transition-all duration-700 flex flex-col justify-center items-center ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ animationDelay: "250ms" }}
            >
              {/* Background */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Background</h3>
                <div className="space-y-4">
                  {background.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">
                              {item.title}
                            </h4>
                            <p className="text-blue-400 font-medium">
                              {item.institution}
                            </p>
                            <p className="text-sm text-gray-400 mb-2">
                              {item.period}
                            </p>
                            <p className="text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Key Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
