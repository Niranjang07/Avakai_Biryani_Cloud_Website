import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import logo from '../assets/images/logo.jpg';

// Veg Images
import avakai from '../assets/images/avakaibiryani.jpg';
import kajupanner from '../assets/images/kajupannerbiryani.jpg';
import mattar from '../assets/images/mattar.jpg';
import pannerbiryani from '../assets/images/pannerbiryani.jpg';
import pannerpulav from '../assets/images/pannerpulav.jpg';
import rajmaa from '../assets/images/rajmaa curry.jpg';
import vegnorth from '../assets/images/veg meal north.jpg';

// Non-Veg Images
import chickenbiryani from '../assets/images/chickenbiryani.jpg';
import buttermasala from '../assets/images/chickenbuttermasala.jpg';
import chickenfriedrice from '../assets/images/chickenfriedrice.jpg';
import spicyfriedrice from '../assets/images/chickenspicyfriedrice.jpg';
import eggbiryani from '../assets/images/eggbiryani.jpg';
import fishcurry from '../assets/images/fishcurry.jpg';
import muttoncurry from '../assets/images/mutton curry.jpg';
import muttonbiryani from '../assets/images/muttonbiryani.jpg';
import nalli from '../assets/images/nalli goash biryani.jpg';
import natukodi from '../assets/images/natukodibiryani.jpg';

const images = [
  { src: avakai, caption: 'Signature Avakai Biryani (Veg)' },
  { src: kajupanner, caption: 'Kaju Paneer Royal Biryani' },
  { src: mattar, caption: 'Creamy Mattar Curry – Punjabi Style' },
  { src: pannerbiryani, caption: 'Spiced Panner Dum Biryani' },
  { src: pannerpulav, caption: 'Flavored Paneer Pulav Delight' },
  { src: rajmaa, caption: 'North Indian Rajmaa Masala' },
  { src: vegnorth, caption: 'Veg Meals – A Northern Feast' },
  { src: chickenbiryani, caption: 'Authentic Chicken Biryani' },
  { src: buttermasala, caption: 'Chicken Butter Masala – Mughlai Classic' },
  { src: chickenfriedrice, caption: 'Hyderabadi Chicken Fried Rice' },
  { src: spicyfriedrice, caption: 'Spicy Chicken Fried Rice' },
  { src: eggbiryani, caption: 'Egg Biryani – Protein Rich Flavors' },
  { src: fishcurry, caption: 'Coastal Fish Curry Special' },
  { src: muttoncurry, caption: 'Traditional Mutton Curry – Telangana Style' },
  { src: muttonbiryani, caption: 'Fragrant Mutton Dum Biryani' },
  { src: nalli, caption: 'Nalli Goash Nawabi Biryani' },
  { src: natukodi, caption: 'Natukodi Biryani – Andhra Kodi Pulusu Style' },
];

const Home = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container home-section" id="home">
      <header className="navbar">
        <img src={logo} alt="Avakai Biryani Logo" className="logo" />
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#menu">Menu</a>
          <a href="#catering">Catering</a>
          {/* Contact removed from navbar */}
        </nav>
        <button className="order-btn" onClick={() => setShowContacts(!showContacts)}>
          Order
        </button>
        {showContacts && (
          <div className="contact-popup">
            <a href="tel:+16155385893">+1 615-538-5893</a>
            <a href="tel:+16159301073">+1 615-930-1073</a>
            <a
              href="https://www.instagram.com/Avakai_Biryani_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DM on Instagram
            </a>
          </div>
        )}
      </header>

      <div className="carousel">
        <img src={images[currentIndex].src} alt="Biryani Dish" className="slide-img fade-in" />
        <div className="slide-text">
          <h2>Welcome to Avakai Biryani</h2>
          <p>The Flavours of India</p>
          <p className="special-caption">{images[currentIndex].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
