// src/pages/menus/TiffinsMenu.jsx

import React, { useEffect, useState } from 'react';
import '../../styles/tiffinsMenu.css';

import vada from '../../assets/images/vada.jpg';
import upma from '../../assets/images/upma.jpg';
import poori from '../../assets/images/poori.jpg';
import edli from '../../assets/images/edli.jpg';
import dosa from '../../assets/images/dosa.jpg';
import guntapunugulu from '../../assets/images/guntapunugulu.jpg';

const tiffinsMenuData = {
  Breakfast: [
    'Idly (4 pieces)', 'Ghee Upma (16 Oz)', 'Tomato Bhaat', 'Pongal',
    'Mysore Bonda (4 Pieces)', 'Chitti Punugulu', 'Poori with Curry (4 pieces)'
  ],
  Combos: [
    'Idly + Upma Combo', 'Poori + Pongal Combo',
    'Vada + Dosa Combo', 'Edli + Punugulu Combo',
    'Mini Tiffin Combo'
  ],
  Specials: [
    'Ghee Roast Dosa', 'Pesarattu with Upma', 'Masala Dosa',
    'Rava Dosa', 'Onion Dosa', 'Special Chutney Combo',
    'Avakai Special Mini Thali'
  ]
};

const backgroundImages = [vada, upma, poori, edli, dosa, guntapunugulu];

const TiffinsMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tiffins-menu-page">
      <div className="background-slideshow">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`bg-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="blur-overlay" />

      <h1 className="tiffins-title">Tiffins Menu</h1>
      <div className="tiffins-container">
        {Object.entries(tiffinsMenuData).map(([category, items]) => (
          <div className="menu-card" key={category}>
            <h2 className="menu-category">{category}</h2>
            <div className="menu-items-grid">
              {items.map((item, index) => (
                <div className="menu-item" key={index}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiffinsMenu;
