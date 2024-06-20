import React, { useState, useEffect } from 'react';
import Men from '../../assets/menWatch.png';
import Women from '../../assets/femaleWatch.png';
import Smart from '../../assets/smart Watch.png';
import './AutomaticSlider.css';

const Slider = () => {
  const images = [
    Men,
    Women,
    Smart,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Slider;
