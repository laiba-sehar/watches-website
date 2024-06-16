import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Men from '../../assets/menWatch.png';
import Women from '../../assets/femaleWatch.png';
import Smart from '../../assets/smart Watch.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap'; 
import './Slider.css';

function Slider() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/watches/${category}`);};
    

  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" onClick={() => handleCategoryClick('men')}>
        <img src={Men} class="d-block w-100" alt="Men"/>
      </div>
      <div class="carousel-item"onClick={() => handleCategoryClick('women')}>
        <img src={Women} class="d-block w-100" alt="Women"/>
      </div>
      <div class="carousel-item" onClick={() => handleCategoryClick('smart')}>
        <img src={Smart} class="d-block w-100" alt="Smart"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Slider;
