import React from "react";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";


const home = () => {
  return (
    <div className="">
     
      <Hero />
      <Skills />
      <Projects />
      <About />
      {/* <Contact /> */}
    </div>
  );
};

export default home;
