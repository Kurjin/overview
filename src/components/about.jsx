import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Heart,
  Code,
  Coffee,
  MapPin,
  Calendar,
  Award,
  Target,
  BookOpen,
  Lightbulb,
  Zap,
  Globe,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);

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

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: "5+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Calendar,
      label: "Years Experience",
      value: "1+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      label: "Happy Clients",
      value: "10+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Coffee,
      label: "Cups of Coffee",
      value: "500+",
      color: "from-orange-500 to-red-500",
    },
  ];

  const interests = [
    {
      icon: Code,
      label: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: Lightbulb,
      label: "Innovation",
      description: "Exploring cutting-edge technologies",
    },
    {
      icon: Globe,
      label: "Open Source",
      description: "Contributing to community projects",
    },
    {
      icon: BookOpen,
      label: "Learning",
      description: "Continuous skill development",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
              <User className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Interactive Profile Card */}
            <div
              className={`order-2 lg:order-1 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative group">
                {/* Main Profile Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Profile Image Area */}
                  <div className="relative mb-8">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse" />

                      {/* Profile Circle */}
                      <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                        <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center relative">
                          <span className="text-4xl font-bold text-white relative z-10">
                            EM
                          </span>
                          {/* Rotating Ring */}
                          <div
                            className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin"
                            style={{ animationDuration: "8s" }}
                          />
                        </div>
                        {/* Floating Dots */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-green-300 font-medium">
                          Available for work
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                      <span>Based in Philippines</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Target className="w-5 h-5 text-purple-400 mr-3" />
                      <span>Aspiring Full Stack Developer</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Heart className="w-5 h-5 text-pink-400 mr-3" />
                      <span>Passionate about clean code and learning new trends</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`order-1 lg:order-2 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="space-y-8">
                {/* Main Story */}
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed text-gray-200">
                    I'm a passionate aspiring full-stack developer with over{" "}
                    <span className="text-blue-400 font-semibold">
                      1 years of experience
                    </span>{" "}
                    creating digital solutions that matter. My journey started
                    with curiosity about how things work, and it's evolved into
                    a love for building products that solve real problems.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-300">
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to{" "}
                    <span className="text-purple-400 font-semibold">
                      open source projects
                    </span>
                    , or sharing knowledge with the developer community. I
                    believe in writing{" "}
                    <span className="text-pink-400 font-semibold">
                      clean, maintainable code
                    </span>{" "}
                    and creating user experiences that delight.
                  </p>
                </div>

                {/* Interests Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <div
                        key={index}
                        className={`group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ animationDelay: `${600 + index * 100}ms` }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">
                              {interest.label}
                            </h4>
                            <p className="text-gray-400 text-xs">
                              {interest.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-purple-400/40 transition-all duration-300 hover:scale-110 text-center transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      animationDelay: `${1000 + index * 100}ms`,
                      boxShadow:
                        hoveredStat === index
                          ? "0 20px 40px -12px rgba(168, 85, 247, 0.25)"
                          : "none",
                    }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color.replace(
                        "500",
                        "500/5"
                      )} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Value */}
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 relative z-10`}
                    >
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-gray-400 text-sm font-medium relative z-10">
                      {stat.label}
                    </div>

                    {/* Hover Effect */}
                    {hoveredStat === index && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "1200ms" }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto hover:border-purple-400/40 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Learning more... So, Let's Build What's In Your Mind
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                fellow developers. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out!
              </p>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center">
                  Get In Touch
                  <Heart className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
