import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css';

import img1 from '../assets/images/1st.jpg';
import img2 from '../assets/images/2nd.jpg';
import img3 from '../assets/images/3rd.jpg';
import img4 from '../assets/images/4th.jpg';
import img5 from '../assets/images/5th.jpg';
import img6 from '../assets/images/6th.jpg';
import img7 from '../assets/images/7th.jpg';
import img8 from '../assets/images/8th.jpg';
import img9 from '../assets/images/9th.jpg';
import img10 from '../assets/images/10th.jpg';

const menuImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Menu = () => {
  return (
    <section className="menu-section" id="menu">
      <h2 className="menu-title">Our Delicious Menu</h2>

      

      {/* Image Gallery */}
      <div className="menu-gallery">
        {menuImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Menu page ${index + 1}`}
            className="menu-img"
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
