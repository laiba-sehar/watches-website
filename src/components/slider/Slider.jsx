import React, { useEffect } from 'react';
import Men from '../../assets/menWatch.png';
import Women from '../../assets/femaleWatch.png';
import Smart from '../../assets/smart Watch.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap'; 
import './Slider.css';

function Slider() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleIndicators');

    if (carouselElement) {
      const carousel = new Carousel(carouselElement, {
        interval: 4000, 
        pause: 'hover',
        wrap: true
      });
      carousel.cycle();

      // Clean up on component unmount
      return () => carousel.dispose();
    }
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Men} className="d-block w-100" alt="Men's Watch"/>
        </div>
        <div className="carousel-item">
          <img src={Women} className="d-block w-100" alt="Women's Watch"/>
        </div>
        <div className="carousel-item">
          <img src={Smart} className="d-block w-100" alt="Smart Watch"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
