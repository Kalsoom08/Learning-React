import React from 'react';
import './Hero.css'; 


const Hero = () => {

    const handleScroll = () => {
        const productsSection = document.querySelector('.main-div');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Web World Wonders</h1>
        <p className="hero-subtitle">Find the perfect outfit for any occasion. Shop the latest trends now!</p>
        <div className="hero-buttons">
          <button className='btn btn-primary'
          onClick={handleScroll}
            >
          Explore
        </button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero;



