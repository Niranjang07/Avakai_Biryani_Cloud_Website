// src/pages/catering.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/catering.css";

import vegImg from "../assets/images/vegmeal.jpg";
import nonvegImg from "../assets/images/nonvegmeal.jpg";
import tiffinImg from "../assets/images/tiffin.jpg";
import sweetsImg from "../assets/images/sweets.jpg";

const cateringData = [
  {
    title: "Veg Catering",
    description: "Authentic South Indian vegetarian meals with rich spices and homely warmth.",
    image: vegImg,
    path: "/menu/veg",
  },
  {
    title: "Non-Veg Catering",
    description: "Experience aromatic non-veg dishes including biryanis, curries, and more.",
    image: nonvegImg,
    path: "/menu/nonveg",
  },
  {
    title: "Tiffin Services",
    description: "Daily tiffin service offering balanced and tasty meals with regional flavors.",
    image: tiffinImg,
    path: "/menu/tiffins",
  },
  {
    title: "Sweets",
    description: "Delightful Indian sweets for all occasions — made with love and tradition.",
    image: sweetsImg,
    path: "/menu/sweets",
  },
];

const Catering = () => {
  const navigate = useNavigate();

  return (
    <div className="catering-section" id="catering">
      <div className="catering-content">
        <h1>Our Catering Services</h1>
        <div className="catering-grid">
          {cateringData.map((item, index) => (
            <div key={index} className="catering-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={() => navigate(item.path)}>Menu</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catering;
