import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Home from "./pages/home";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="appContainer">
      <NavBar />
      <Routes>
        {/* <Route path="" element={''}/> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
