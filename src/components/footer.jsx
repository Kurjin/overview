import React, { useState } from 'react';
import { 
  Heart, 
  Coffee, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Code,
  Star,
  Zap
} from 'lucide-react';
import { Link } from 'react-scroll';

const footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    { label: "Home", to: "home" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "About", to: "about" },
    // { label: "Contact", to: "contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Kurjin",
      color: "hover:bg-gray-700",
      hoverColor: "group-hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/eugine-manliclic-89b9b8377/",
      color: "hover:bg-blue-600",
      hoverColor: "group-hover:text-blue-300"
    },
    // {
    //   icon: Twitter,
    //   label: "Twitter",
    //   href: "https://twitter.com", 
    //   color: "hover:bg-sky-500",
    //   hoverColor: "group-hover:text-sky-300"
    // },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:manliclic.eugine@gmail.com",
      color: "hover:bg-purple-600",
      hoverColor: "group-hover:text-purple-300"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2   ">
            <div className="mb-6 flex flex-col text-left ">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Eugine Manliclic
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Aspiring Full Stack Developer passionate about creating beautiful, functional web experiences. 
                Let's build something amazing together.
              </p>
            </div>
            
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center justify-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className=" block text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <div className={`w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${social.color}`}>
                      <IconComponent className={`w-4 h-4 ${social.hoverColor} transition-colors duration-300`} />
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transform transition-transform duration-300">
                      {social.label}
                    </span>
                    {hoveredSocial === index && (
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              © 2025 Eugine Manliclic. All rights reserved.
            </p>
            <div className="hidden md:flex items-center space-x-1 text-sm text-gray-400">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Built with React & Tailwind</span>
            </div>
          </div>

          {/* Made with Love */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-amber-500 animate-bounce" />
            </div>

            
          </div>
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl" /> */}
        {/* <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-2xl" /> */}
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}

     
    </footer>
  );
};

export default footer;