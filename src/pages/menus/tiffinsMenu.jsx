// src/pages/menus/TiffinsMenu.jsx

import React from 'react';
import '../../styles/TiffinsMenu.css';
import tiffinsBackground from '../../assets/images/edli.jpg'; // ✅ Background image for blur effect

// Optional image imports (if needed later)
import vada from '../../assets/images/vada.jpg';
import upma from '../../assets/images/upma.jpg';
import poor from '../../assets/images/poori.jpg';
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

const TiffinsMenu = () => {
  return (
    <div
      className="tiffins-menu-page"
      style={{ backgroundImage: `url(${tiffinsBackground})` }}
    >
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
