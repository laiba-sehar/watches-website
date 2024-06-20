import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ heading, price, details }) => {
  return (
    <div className="product-info-container">
      <h2>{heading}</h2>
      <p>{price}</p>
      <p>{details}</p>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
};

export default ProductInfo;
