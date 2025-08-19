import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import UnderMaintenance from "./components/maintenance";
import Oops from "./components/oops";
import NotFound from "./components/notfound";

const App = () => {
  const location = useLocation();
  const hideFooterOnRoutes = ["/maintenance", "/oops", "/not-found"]; // add more routes if needed
  const hideNavbarOnRoutes = ["/maintenance", "/oops", "/not-found"]; // add more routes if needed
  const shouldShowFooter = !hideFooterOnRoutes.includes(location.pathname);
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);
  return (
    <div className="appContainer">
      {shouldShowNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<UnderMaintenance />} />
        <Route path="/oops" element={<Oops />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default App;
