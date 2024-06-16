import React, { useEffect } from 'react';
import Men from '../../assets/menWatch.png';
import Women from '../../assets/femaleWatch.png';
import Smart from '../../assets/smart Watch.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap'; 

import first from '../../assets/1.webp';
import second from '../../assets/2.webp';
import third from '../../assets/3.webp';
import fourth from '../../assets/4.webp';

import lifestyle from '../../assets/LifestyleEdit.png';

import Mens from '../../assets/menWa.png';
import Womens from '../../assets/womenWa.png';
import Smarts from '../../assets/smartWa.png';

import review1 from '../../assets/review1.png';
import review2 from '../../assets/review2.png';
import review3 from '../../assets/review3.png';
import './Main.css'
import Slider from '../../components/slider/Slider';
import Catagory from '../../components/catagory/Catagory';

function Main() {

  const products=[
    {id:1,img:first,name:"AURA MODICCI",price:"$39.51",details:"View Details"},
    {id:1,img:second,name:"AURA RUBY SV-6237",price:"$35.90 ",details:"View Details"},
    {id:1,img:third,name:"AURA Nitro Smartwatch",price:"$43.00 ",details:"View Details"},
    {id:1,img:fourth,name:"AURA Prestige Smartwatch",price:"$46.50 ",details:"View Details"},
]

const catagory=[
  {id:1,img:Mens,name:"Men's Collection",details:"Make a Bold statement with Aura Men Timeplaces",button:"View Details"},
  {id:1,img:Womens,name:"Women’s Collection",details:"$Unleash your Feminine Corn with Women Timespaces",button:"View Details"},
  {id:1,img:Smarts,name:"Smart Collection",details:"Experience the Fusion of Durability and Style in our Smart Watch Chronograph Collection",button:"View Details"},
]

const reviews=[
  {id:1,stars:5,review:"Great value for money. Stylish and durable watch.",img:review1,name:"Michael",country:"New York, NY"},
  {id:2,stars:5,review:"Absolutely stunning timepiece! Exceeded my expectations.",img:review2,name:"Adam",country:"Los Angeles, California"},
  {id:3,stars:5,review:"Sleek design, comfortable to wear. Highly recommended!",img:review3,name:"Isaac",country:"Dubai, UAE"},
]

    // useEffect(() => {
    //     const carouselElement = document.querySelector('#carouselExampleIndicators');
    
    //     if (carouselElement) {
    //       const carousel = new Carousel(carouselElement, {
    //         interval: 4000, 
    //         pause: 'hover',
    //         wrap: true
    //       });
    //       carousel.cycle();
    
    //       return () => carousel.dispose();
    //     }
    //   }, []);
  return (
    <>
<Slider/>
    {/* latest collection */}

    <div className="product-page">
    <h1 className="page-heading">Check out our Latest Collection</h1>
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <div className="product-details">
              <span className="product-price">{product.price}</span>
              <button className="details-button">{product.details}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

{/* Lifestyle edit */}
  <h1 className="firstHeading">The Lifestyle Edit</h1>
    <div className="container">
      <div className="text-section">
        <h3>
          Timeless Style Upgrade: Elevate Your Look with Exquisite Watches
        </h3>
        <p>
          Watches have a remarkable ability to enhance a man's appearance and
          attractiveness by conveying sophistication, attention to detail, and a
          sense of style. Beyond merely telling time, a well-chosen watch serves
          as a subtle yet powerful statement of one's personality and status.
          Whether it's a classic timepiece exuding timeless elegance or a
          modern, sleek design reflecting contemporary taste, a watch adds a
          touch of refinement to any ensemble.
        </p>
        <button className="button">Shop Now</button>
      </div>
      <div className="image-container">
      <img src={lifestyle} alt="" className="image"/>
      </div>
    </div>
{/* Catagories */}
   <Catagory/>
      {/* Reviews */}

      <div className="review-page">
            <h1 className="review-heading">Customer Reviews</h1>
            <div className="review-grid">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-stars">
                            {'★'.repeat(review.stars) + '☆'.repeat(5 - review.stars)}
                        </div>
                        <p className="review-text">{review.review}</p>
                        <img src={review.img} alt={review.name} className="review-image" />
                        <div className="review-info">
                            <h2 className="review-name">{review.name}</h2>
                            <p className="review-country">{review.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Detail */}

        <div className='Detail-section'>
    <h3>Welcome to Aura Watches | Crafted Elegance for Every Moment</h3>
    <p>At Aura Watches, we transcend the ordinary to offer you timepieces that are more than just accessories; they're reflections of your style and sophistication. With a blend of traditional craftsmanship and contemporary design, each watch tells a story of precision, elegance, and innovation.</p>
    <p>Our commitment to quality craftsmanship is evident in every detail, from the carefully selected materials to the meticulous assembly process. But we don't just create watches; we curate experiences that elevate your everyday moments.</p>
<p>Join us on a journey where timekeeping meets artistry, and discover the Aura Watches difference. Welcome to a world where every tick of the clock resonates with elegance and grace.</p>
<p>Our Collection: Mens Watches | Womens Watches | Smart Watches</p>
    </div>

  </>
  )
}

export default Main;