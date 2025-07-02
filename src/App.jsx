// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/main.css";
import "./styles/home.css";
import "./styles/aboutus.css";
import "./styles/menu.css";
import "./styles/catering.css";
import "./styles/review.css"; // 🔹 Add the review section styles

import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Menu from "./pages/menu";
import Catering from "./pages/catering";
import ReviewSection from "./components/ReviewSection"; // 🔹 Import the ReviewSection component

// Individual menu pages
import VegMenu from "./pages/menus/vegMenu";
import NonVegMenu from "./pages/menus/nonVegMenu";
import TiffinsMenu from "./pages/menus/tiffinsMenu";
import SweetsMenu from "./pages/menus/sweetsMenu";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app-scroll-wrapper">
            <section className="snap-section" id="home">
              <Home />
            </section>
            <section className="snap-section" id="aboutus">
              <AboutUs />
            </section>
            <section className="snap-section" id="menu">
              <Menu />
            </section>
            <section className="snap-section" id="catering">
              <Catering />
            </section>
            
            {/* 🔽 Review section added at the bottom */}
            <section className="snap-section" id="reviews">
              <ReviewSection />
            </section>
          </div>
        }
      />
      <Route path="/menu/veg" element={<VegMenu />} />
      <Route path="/menu/nonveg" element={<NonVegMenu />} />
      <Route path="/menu/tiffins" element={<TiffinsMenu />} />
      <Route path="/menu/sweets" element={<SweetsMenu />} />
    </Routes>
  );
}

export default App;
