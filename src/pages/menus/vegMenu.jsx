// src/pages/menus/VegMenu.jsx
import React from 'react';
import '../../styles/VegMenu.css';
import vegBackground from '../../assets/images/vegmeal.jpg'; // Ensure this path is correct

const vegMenuData = {
  Starters: [
    'Onion Pakodi', 'Mirchi Bajjii', 'Aratikaya Bajji', 'Chilli Paneer', 'Gobi Manchurian', 'Changa Pappu Vada',
    'Dahi Vada', 'Samosa', 'Gobi 65', 'Aloo Bajji', 'Malai Gobi', 'Paneer 555', 'Paneer Majestic', 'Mushroom 65',
    'Aloo Tikki', 'Papadi Chat', 'Channa Chat', 'Madras Gobi 65'
  ],
  'Veg Gravy Curries': [
    'Aloo Capsicum', 'Paneer Makhni/Butter Masala/Kadai/Kaju/Palak', 'Matar Paneer', 'Kofta', 'Chole',
    'Rajma', 'Channa Curry', 'Mushroom Curry', 'Gutti Vankai Curry', 'Dal Makhani', 'Vankai Tomato Curry',
    'Drumstick Tomato Curry', 'Dosakai Tomato Curry', 'Dal Paneer', 'Mixed Veg Curry',
    'Muvva Dondakai/Gutti Dondakai', 'Ghobi Curry', 'Gongura Phool Makhana Curry'
  ],
  'Fry Items': [
    'Dondakai Fry', 'Bendakai Fry', 'Aloo 65', 'Ghobi 65', 'Madrasi Gobi Fry', 'Cabbage Channa Dal Fry',
    'Aratikaya Fry', 'Beans & Coconut Fry', 'Carrot & Coconut Fry'
  ],
  'Rice Items': [
    'Lemon Rice', 'Tamarind Rice', 'Jeera Rice', 'Bhagara Rice', 'Sambar Rice', 'Curd Rice',
    'Paneer Dum Biryani', 'Veg Dum Biryani', 'Veg Kheema Biryani', 'Pachi Mirchi Paneer Ghee Roast Biryani',
    'Mushroom 65 Biryani', 'Hariyali Paneer Dum Biryani'
  ],
  'Roti & Pachadi': [
    'Beerakai', 'Tomato Kottimeera', 'Tomato Pudina', 'Palakura', 'Anapakaya', 'Cabbage',
    'Raw Mango', 'Gongura', 'Dosakai Pachadi', 'Pudina Pachadi', 'Dondakai Pachadi'
  ],
  'Side Dishes': [
    'Dal (Tomato/Mango/Dosakai/Mudda Pappu/Spinach)', 'Sambar', 'Pachi Pulusu', 'Dappalam',
    'Majjiga Pulusu', 'Rasam (Tomato/Corriander/Pepper)', 'Papad - Rice/Appadam/Mixed Fryums',
    'Majjiga Mirapakay', 'Fruit Cut - Mixed Fruit', 'Punjabi Buttermilk'
  ]
};

const VegMenu = () => {
  return (
    <div
      className="menu-page veg-page"
      style={{ backgroundImage: `url(${vegBackground})` }}
    >
      <div className="blur-overlay" />
      <h1 className="veg-title">Vegetarian Menu</h1>
      <div className="veg-container">
        {Object.entries(vegMenuData).map(([category, items]) => (
          <div className="menu-card" key={category}>
            <h2 className="menu-category">{category}</h2>
            <div className="menu-items-grid">
              {items.map((item, idx) => (
                <div className="menu-item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegMenu;
