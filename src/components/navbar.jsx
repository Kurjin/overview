import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navigation list objects
  const navItem = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 ">
        <div className="flex items-center justify-between h-16 lg:h-16">
          {/* Logo */}
          <div
            className={`font-bold text-2xl transition-all duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EM
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer group ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-950"
                    : "text-white/90 hover:text-white"
                }`}
                activeClass="active"
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.label}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-60 ${
                    isScrolled ? "bg-blue-50  " : "bg-white/10 "
                  }`}
                ></span>
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`relative w-8 h-8 focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className={`py-4 space-y-2 ${
              isScrolled ? "bg-white/95" : "bg-black/20"
            } backdrop-blur-md rounded-b-2xl mt-2`}
          >
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 cursor-pointer border-l-4 border-transparent hover:border-blue-500 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMobileOpen(false)}
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
