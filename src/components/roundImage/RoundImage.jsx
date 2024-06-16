import React from 'react';
import { useNavigate } from 'react-router-dom';
import Men from '../../assets/MenRound.png';
import Women from '../../assets/WomenRound.png';
import Smart from '../../assets/SmartRound.png';
import './RoundImage.css';

function RoundImage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/watches/${category}`);
  };

  return (
    <div className="image-component">
      <div className="image-container" onClick={() => handleCategoryClick('men')}>
        <img src={Men} alt="Men" className="round-image" />
        <p className="image-name">Men Watches</p>
      </div>
      <div className="image-container" onClick={() => handleCategoryClick('women')}>
        <img src={Women} alt="Women" className="round-image" />
        <p className="image-name">Women Watches</p>
      </div>
      <div className="image-container" onClick={() => handleCategoryClick('smart')}>
        <img src={Smart} alt="Smart" className="round-image" />
        <p className="image-name">Smart Watches</p>
      </div>
    </div>
  );
}

export default RoundImage;
