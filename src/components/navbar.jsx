import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
              isScrolled
                ? "text-gray-800 dark:text-white"
                : "text-white dark:text-gray-800"
            }`}
          >
            <span className="dark:from-blue-400">Kurjin</span>
          </div>
          <div className="flex items-center space-x-3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
