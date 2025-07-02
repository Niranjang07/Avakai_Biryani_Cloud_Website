import React from 'react';
import '../../styles/TiffinsMenu.css';
import sweetsBackground from '../../assets/images/sweets.jpg';

const sweetsMenuData = {
  Traditional: [
    'Ariselu', 'Boondi Laddu', 'Kaja', 'Jilebi',
    'Mysore Pak', 'Sunnundalu', 'Pootharekulu',
    'Badusha', 'Dry Fruit Halwa', 'Jangri'
  ],
  "Milk-Based": [
    'Rasmalai', 'Rasgulla', 'Basundi', 'Paneer Payasam',
    'Milk Mysorepak', 'Kova Kajjikayalu'
  ],
  "Festival Specials": [
    'Kobbari Louz', 'Bellam Laddu', 'Lauki Halwa',
    'Til Laddu', 'Kesari', 'Sweet Pongal'
  ]
};


const SweetsMenu = () => {
  return (
    <div
      className="tiffins-menu-page"
      style={{ backgroundImage: `url(${sweetsBackground})` }}
    >
      <div className="blur-overlay" />
      <h1 className="tiffins-title">Sweets Menu</h1>
      <div className="tiffins-container">
        {Object.entries(sweetsMenuData).map(([category, items]) => (
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

export default SweetsMenu;
