import React, { useState } from 'react';
import './ImageSlider.css'; // Ensure you create this CSS file

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/top%20trending%20clxn2/Best%20Offer%20Desktop.webp',
    'https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/top%20trending%20clxn2/diamond%20collection%20banner.webp',
    'https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/top%20trending%20clxn2/diamond%20collection%20banner.webp',
    'https://cf-cdn.pcjeweller.com/public/uploads/editor-images/whats-new/Whats-New-2.webp'
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
