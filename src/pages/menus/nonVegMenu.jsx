// src/pages/menus/NonVegMenu.jsx
import React from 'react';
import '../../styles/nonVegMenu.css';
import nonVegBackground from '../../assets/images/nonvegmenu.jpg';

const nonVegMenuData = {
  Starters: [
    'Chicken 555', 'Chilli Chicken', 'Chicken Manchuria', 'Chicken Pakodi', 'Pepper Chicken', 'Malai Chicken Boneless',
    'Tawa Fish', 'Chilli Prawn', 'Chilli Egg', 'Prawn Pakodi', 'Roasted Eggs', 'Mutton Ghee Roast', 'Mutton Kebab',
    'Haleem - Chicken/Mutton', 'Galoti kebab - Chicken', 'Mini Shawarma - Chicken', 'Dragon Chicken', 'Cheese Chicken Balls'
  ],
  'Fry Items': [
    'Chicken Fry - Andhra Style/Karevepaku/Kaju', 'Chicken Ghee Roast', 'Mutton Ghee Roast',
    'Chicken Joint', 'Fish Fry', 'Prawns Fry', 'Boiled Egg Dhaba Style Fry', 'Dhaba Style Chicken Semi Gravy Fry'
  ],
  Biryanis: [
    'Chicken Joint Biryani', 'Masakali Chicken Dum Biryani', 'Hariyali Chicken Dum Biryani',
    'Miss India Chicken Dum Biryani', 'Malai Chicken Dum Biryani', 'Mughlai Chicken Dum Biryani',
    'Fry Piece Chicken Dum Biryani', 'Karachi Chicken Dum Biryani', 'Egg Dum Biryani', 'Chicken Dum Biryani'
  ],
  Curries: [
    'Dhaba Style Chicken Curry', 'Andhra Style Chicken Curry', 'Punjabi Murg Masala', 'Chettinadu Chicken Curry',
    'Hariyali Chicken Curry', 'Mughlai Chicken Curry', 'Chilli Chicken Curry', 'Green Chilli Chicken Curry',
    'Mutton Masala Curry', 'Mutton Rogan Josh', 'Mutton Paya', 'Mutton Dalcha', 'Prawn Masala', 'Andhra Prawn Curry'
  ],
  Rice: [
    'Chicken Pulav', 'Prawn Pulav', 'Egg Fried Rice', 'Chicken Fried Rice', 'Mutton Pulao', 'Andhra Chicken Pulao',
    'Jeera Rice', 'Curd Rice'
  ],
  'Roti & Side': [
    'Rumali Roti', 'Tandoori Roti', 'Butter Naan', 'Plain Naan', 'Raitha', 'Gravy Salan',
    'Masala Buttermilk', 'Onion Salad', 'Papad'
  ]
};

const NonVegMenu = () => {
  return (
    <div
      className="menu-page veg-page"
      style={{ backgroundImage: `url(${nonVegBackground})` }}
    >
      <div className="blur-overlay" />
      <h1 className="veg-title">Non-Vegetarian Menu</h1>
      <div className="veg-container">
        {Object.entries(nonVegMenuData).map(([category, items]) => (
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

export default NonVegMenu;
