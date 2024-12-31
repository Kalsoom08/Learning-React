import React from 'react';
import Pic2 from '../assets/Home-img.jpg';

const Hero = () => {
  const handleScroll = () => {
    const moviesSection = document.getElementById('movies-list');
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <img
        className="h-full w-full object-cover"
        src={Pic2}
        alt="Hero Background"
      />
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-90"></div>
<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Explore the beauty of innovation and creativity
        </p>
        <button
          onClick={handleScroll}
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
