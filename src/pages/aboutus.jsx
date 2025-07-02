import React from "react";
import "../styles/aboutus.css";
import foodImage from "../assets/images/north food.jpg";

const AboutUs = () => {
  return (
    <section className="aboutus-section" id="aboutus">
      <div className="aboutus-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Welcome to Avakai Biryani, where we bring you the best of both North and South Indian culinary legacies. Our northern offerings echo the royal kitchens of Mughlai, Awadhi, and Punjabi heritage.
        </p>
        <p className="about-text">
          Our Southern menu celebrates the true essence of Telugu cuisine — authentic Andhra Kodi Pulusu with Ragi Sangati, Sathibabu-style fry pieces, Shadab-style Dum Biryani, and Subhani Hotel-inspired flavors. We also bring Telangana’s spicy mutton and jeera rice, and Karnataka’s homestyle delicacies customized for every craving.
        </p>
        <div className="about-buttons">
          <button className="menu-btn">Menu</button>
          <button className="connect-btn">Get Connected</button>
        </div>
        <div className="about-counters">
          <div className="counter">
            <div className="icon">👨‍🍳</div>
            <div className="value">8+</div>
            <div className="label">Years of Experience</div>
          </div>
          <div className="counter">
            <div className="icon">🍽️</div>
            <div className="value">300+</div>
            <div className="label">Items of Food</div>
          </div>
          <div className="counter">
            <div className="icon">😊</div>
            <div className="value">100's+</div>
            <div className="label">Happy Customers</div>
          </div>
        </div>
      </div>
      <div className="aboutus-image">
        <img src={foodImage} alt="North Indian Dishes" />
      </div>
    </section>
  );
};

export default AboutUs;